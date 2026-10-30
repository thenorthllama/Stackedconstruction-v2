"use client";

import { useEffect, useRef, useState, type FormEvent, type InputHTMLAttributes, type ReactNode, type RefObject } from "react";
import { CtaButton, CtaLink } from "@/components/ui/cta";
import {
  ADDONS,
  APPLIANCES,
  BACKSPLASH,
  CABINET_STYLES,
  COUNTERTOPS,
  FLOORING,
  HOME_AGE_LABELS,
  INITIAL_STATE,
  LAYOUT_OPTIONS,
  REGIONS,
  SIZE_PROFILES,
  TIMELINE_LABELS,
  addonPrice,
  computeEstimate,
  formatCurrency,
  scoreLead,
  styleTierOf,
  type Estimate,
  type KitchenCalcState,
  type KitchenSize,
  type Region,
} from "@/lib/kitchen-pricing";

/* ── Step model ────────────────────────────────────────────────────────────
   One question per screen. Single-choice steps advance on tap; the cabinet
   run and the add-ons take a Continue. The gate captures the lead, then the
   reveal shows the estimate. */

interface Choice {
  value: string;
  label: string;
  desc?: string;
  tag?: string;
}

interface SingleStep {
  key: string;
  kind: "single";
  title: string;
  hint?: string;
  /** columns at sm+ — short labels pack tighter */
  cols?: 1 | 2 | 3;
  /** columns on phones */
  mobileCols?: 1 | 2;
  choices: Choice[];
  current: (s: KitchenCalcState, regionChosen: boolean) => string | null;
  apply: (value: string) => Partial<KitchenCalcState>;
}

type Step =
  | SingleStep
  | { key: "cabRun"; kind: "range"; title: string }
  | { key: "addons"; kind: "multi"; title: string }
  | { key: "gate"; kind: "gate" }
  | { key: "reveal"; kind: "reveal" };

const toChoices = <K extends string>(
  rec: Record<K, { label: string; desc?: string }>,
  tags: Partial<Record<K, string>> = {},
): Choice[] =>
  (Object.keys(rec) as K[]).map((k) => ({
    value: k,
    label: rec[k].label,
    desc: rec[k].desc || undefined,
    tag: tags[k],
  }));

const STEPS: Step[] = [
  {
    key: "size",
    kind: "single",
    title: "How big is your kitchen?",
    choices: toChoices(SIZE_PROFILES, { standard: "Most common" }),
    current: (s) => s.kitchenSize,
    apply: (v) => ({ kitchenSize: v as KitchenSize, cabLf: SIZE_PROFILES[v as KitchenSize].lf }),
  },
  { key: "cabRun", kind: "range", title: "About how many feet of cabinets?" },
  {
    key: "layout",
    kind: "single",
    title: "Are you keeping the current layout?",
    choices: toChoices(LAYOUT_OPTIONS),
    current: (s) => s.layout,
    apply: (v) => ({ layout: v as KitchenCalcState["layout"] }),
  },
  {
    key: "cabinets",
    kind: "single",
    title: "What level of cabinetry are you after?",
    choices: toChoices(CABINET_STYLES, { semicustom: "Most popular" }),
    current: (s) => s.cabinetStyle,
    apply: (v) => ({ cabinetStyle: v as KitchenCalcState["cabinetStyle"] }),
  },
  {
    key: "countertop",
    kind: "single",
    title: "Pick your countertop material.",
    choices: toChoices(COUNTERTOPS, { quartz: "SWFL favorite" }),
    current: (s) => s.countertop,
    apply: (v) => ({ countertop: v as KitchenCalcState["countertop"] }),
  },
  {
    key: "flooring",
    kind: "single",
    title: "What flooring do you want?",
    choices: toChoices(FLOORING),
    current: (s) => s.flooring,
    apply: (v) => ({ flooring: v as KitchenCalcState["flooring"] }),
  },
  {
    key: "backsplash",
    kind: "single",
    title: "And the backsplash?",
    choices: toChoices(BACKSPLASH),
    current: (s) => s.backsplash,
    apply: (v) => ({ backsplash: v as KitchenCalcState["backsplash"] }),
  },
  {
    key: "appliances",
    kind: "single",
    title: "What about appliances?",
    choices: toChoices(APPLIANCES),
    current: (s) => s.appliances,
    apply: (v) => ({ appliances: v as KitchenCalcState["appliances"] }),
  },
  { key: "addons", kind: "multi", title: "Any of these on your wish list?" },
  {
    key: "region",
    kind: "single",
    title: "Where’s the project?",
    cols: 3,
    mobileCols: 2,
    choices: toChoices(REGIONS),
    // region always has a default for the pricing engine — only show it as
    // picked once the homeowner has actually chosen
    current: (s, regionChosen) => (regionChosen ? s.region : null),
    apply: (v) => ({ region: v as Region }),
  },
  {
    key: "homeAge",
    kind: "single",
    title: "Roughly how old is the home?",
    hint: "Older homes hide more surprises, so we build in a bigger buffer.",
    choices: (Object.keys(HOME_AGE_LABELS) as (keyof typeof HOME_AGE_LABELS)[]).map((k) => ({
      value: k,
      label: HOME_AGE_LABELS[k],
    })),
    current: (s) => s.homeAge,
    apply: (v) => ({ homeAge: v as KitchenCalcState["homeAge"] }),
  },
  {
    key: "timeline",
    kind: "single",
    title: "When are you hoping to start?",
    choices: (Object.keys(TIMELINE_LABELS) as (keyof typeof TIMELINE_LABELS)[]).map((k) => ({
      value: k,
      label: TIMELINE_LABELS[k],
    })),
    current: (s) => s.timeline,
    apply: (v) => ({ timeline: v as KitchenCalcState["timeline"] }),
  },
  { key: "gate", kind: "gate" },
  { key: "reveal", kind: "reveal" },
];

const QUESTION_COUNT = STEPS.length - 1; // the gate counts, the reveal doesn't
const ADVANCE_DELAY = 220; // long enough to see the tap register
const LF_MIN = 8;
const LF_MAX = 48;

const colClass = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3" } as const;

/* ── Building blocks ───────────────────────────────────────────────────── */

function Check({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
        on ? "bg-white text-warm-900" : "bg-warm-50 text-transparent"
      }`}
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </span>
  );
}

const answerBase =
  "group flex w-full min-h-14 items-center gap-3 rounded-2xl px-4 text-left lg:min-h-[4.75rem] transition-[background-color,color,transform] duration-150 active:scale-[0.99] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-warm-50 sm:px-5 lg:gap-4 lg:px-6";

function answerTone(on: boolean) {
  return on ? "bg-warm-900 text-white" : "bg-warm-100 text-warm-900 hover:bg-warm-200";
}

function AnswerCard({
  choice,
  selected,
  onPick,
}: {
  choice: Choice;
  selected: boolean;
  onPick: () => void;
}) {
  return (
    <button type="button" aria-pressed={selected} onClick={onPick} className={`${answerBase} ${answerTone(selected)} py-3`}>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-base font-semibold leading-snug lg:text-lg">{choice.label}</span>
          {choice.tag && (
            <span className={`text-sm font-medium ${selected ? "text-warm-300" : "text-warm-700"}`}>
              {choice.tag}
            </span>
          )}
        </span>
        {choice.desc && (
          <span className={`mt-0.5 block text-sm leading-snug ${selected ? "text-warm-300" : "text-warm-600"}`}>
            {choice.desc}
          </span>
        )}
      </span>
      <Check on={selected} />
    </button>
  );
}

function Field({
  id,
  label,
  ...input
}: { id: string; label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-warm-800">
        {label}
      </label>
      <input
        id={id}
        {...input}
        className="block min-h-14 w-full rounded-2xl border border-warm-200 bg-white px-4 text-base text-warm-900 placeholder:text-warm-400 focus:border-warm-900 focus:outline-none focus:ring-2 focus:ring-warm-900/15"
      />
    </div>
  );
}

/* ── Calculator ────────────────────────────────────────────────────────── */

export default function KitchenCostCalculator() {
  const [idx, setIdx] = useState(0);
  const [state, setState] = useState<KitchenCalcState>(INITIAL_STATE);
  const [regionChosen, setRegionChosen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<number | null>(null);
  const interacted = useRef(false);

  const step = STEPS[idx];

  // a fresh edit retires the last validation message
  useEffect(() => setError(""), [name, email, phone]);

  // On every step change after the first: bring the question top to just
  // below the fixed header and move focus to it, so the next options are
  // already in view and screen readers hear the new question.
  useEffect(() => {
    if (!interacted.current) return;
    const el = rootRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      // leave the page alone when the whole step is already visible
      const inView = rect.top >= headerOffset(window.scrollY) && rect.bottom <= window.innerHeight;
      const top = rect.top + window.scrollY;
      const target = Math.max(0, top - headerOffset(top) - 12);
      if (!inView && Math.abs(window.scrollY - target) > 4) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
      }
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [idx]);

  useEffect(() => () => clearTimer(), []);

  function clearTimer() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function patch(fields: Partial<KitchenCalcState>) {
    setState((s) => ({ ...s, ...fields }));
  }

  function go(to: number) {
    clearTimer();
    interacted.current = true;
    setError("");
    setIdx(Math.max(0, Math.min(to, STEPS.length - 1)));
  }

  function pick(s: SingleStep, value: string) {
    patch(s.apply(value));
    if (s.key === "region") setRegionChosen(true);
    clearTimer();
    const from = idx;
    advanceTimer.current = window.setTimeout(() => go(from + 1), ADVANCE_DELAY);
  }

  async function handleSubmitLead(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return setError("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Please add a valid email address.");
    if (phone.replace(/\D/g, "").length < 7) return setError("Please add a valid phone number.");

    const est = computeEstimate(state);
    if (!est) return setError("Something went wrong building your estimate — please go back and check your selections.");

    const { score, band } = scoreLead(state, est.point);

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: REGIONS[state.region].label,
          projectType: "Kitchen remodel",
          service: "Kitchen Cost Calculator",
          timeline: state.timeline ? TIMELINE_LABELS[state.timeline] : "",
          budget: `${formatCurrency(est.low)} - ${formatCurrency(est.high)}`,
          description: buildSummary(state, est),
          estimateLow: Math.round(est.low),
          estimateHigh: Math.round(est.high),
          estimatePoint: Math.round(est.point),
          leadScore: score,
          leadBand: band,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      go(idx + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function restart() {
    setState(INITIAL_STATE);
    setRegionChosen(false);
    setName("");
    setEmail("");
    setPhone("");
    go(0);
  }

  const isReveal = step.kind === "reveal";
  const est = isReveal ? computeEstimate(state) : null;

  return (
    <div
      ref={rootRef}
      className="flex min-h-[min(40rem,calc(100svh-var(--nav-h)-1.5rem))] lg:min-h-[36rem] flex-col rounded-[1.75rem] bg-warm-50 p-5 text-warm-900 sm:p-8 lg:rounded-[2rem] lg:p-10"
    >
      {!isReveal && (
        <div className="mb-5 sm:mb-7">
          <div className="mb-3 flex min-h-11 items-center justify-between gap-4">
            {idx > 0 ? (
              <button
                type="button"
                onClick={() => go(idx - 1)}
                className="-ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-sm font-semibold text-warm-700 transition-colors hover:text-warm-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>
            ) : (
              <span className="text-sm font-semibold text-warm-700">Free · about 60 seconds</span>
            )}
            <span className="text-sm font-semibold tabular-nums text-warm-600">
              {idx + 1} of {QUESTION_COUNT}
            </span>
          </div>
          <div
            role="progressbar"
            aria-label="Estimate progress"
            aria-valuemin={0}
            aria-valuemax={QUESTION_COUNT}
            aria-valuenow={idx + 1}
            className="h-1.5 w-full overflow-hidden rounded-full bg-warm-200"
          >
            <div
              className="h-full origin-left rounded-full bg-warm-900 transition-transform duration-500 ease-out"
              style={{ transform: `scaleX(${(idx + 1) / QUESTION_COUNT})` }}
            />
          </div>
        </div>
      )}

      <div key={step.key} className="calc-step-in flex flex-1 flex-col">
        {step.kind === "single" && (
          <StepFrame headingRef={headingRef} title={step.title} hint={step.hint}>
            <div
              className={`grid gap-2.5 ${step.mobileCols === 2 ? "grid-cols-2" : "grid-cols-1"} ${colClass[step.cols ?? 1]}`}
            >
              {step.choices.map((c) => (
                <AnswerCard
                  key={c.value}
                  choice={c}
                  selected={step.current(state, regionChosen) === c.value}
                  onPick={() => pick(step, c.value)}
                />
              ))}
            </div>
          </StepFrame>
        )}

        {step.kind === "range" && (
          <StepFrame
            headingRef={headingRef}
            title={step.title}
            hint="Cabinet run is the single biggest cost driver. We’ve filled in the typical length for your size — adjust it if you know better."
            footer={
              <CtaButton type="button" block onClick={() => go(idx + 1)} className="min-h-14 text-base">
                Continue
              </CtaButton>
            }
          >
            <CabinetRun
              value={state.cabLf}
              typical={state.kitchenSize ? SIZE_PROFILES[state.kitchenSize] : null}
              onChange={(v) => patch({ cabLf: v })}
            />
          </StepFrame>
        )}

        {step.kind === "multi" && (
          <StepFrame
            headingRef={headingRef}
            title={step.title}
            hint="Pick as many as you like, or none."
            hintDesktopOnly
            footer={
              <CtaButton type="button" block onClick={() => go(idx + 1)} className="min-h-14 text-base">
                {Object.values(state.addons).some(Boolean) ? "Continue" : "None of these — continue"}
              </CtaButton>
            }
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
              {ADDONS.map((addon) => {
                const on = !!state.addons[addon.id];
                return (
                  <button
                    key={addon.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => patch({ addons: { ...state.addons, [addon.id]: !on } })}
                    className={`${answerBase} ${answerTone(on)} py-2`}
                  >
                    <span className="min-w-0 flex-1 text-base font-semibold leading-tight">{addon.label}</span>
                    <span className={`shrink-0 text-sm font-medium tabular-nums ${on ? "text-warm-300" : "text-warm-600"}`}>
                      +{formatCurrency(addonPrice(addon, styleTierOf(state)))}
                    </span>
                    <Check on={on} />
                  </button>
                );
              })}
            </div>
          </StepFrame>
        )}

        {step.kind === "gate" && (
          <form onSubmit={handleSubmitLead} noValidate className="flex flex-1 flex-col">
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="font-display text-2xl font-bold leading-tight text-warm-900 focus:outline-none sm:text-3xl lg:text-4xl"
            >
              Your estimate is ready. Where should we send it?
            </h2>
            <p className="mt-2 text-base leading-relaxed text-warm-700">
              You’ll see your full line-item breakdown right away.
            </p>
            <div className="mt-6 space-y-3.5">
              <Field id="kc-name" label="Full name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" autoComplete="name" />
              <Field id="kc-email" label="Email" type="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" autoComplete="email" />
              <Field id="kc-phone" label="Mobile phone" type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(239) 785-0166" autoComplete="tel" />
            </div>
            <p role="alert" className={error ? "mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800" : "sr-only"}>
              {error}
            </p>
            <div className="mt-auto pt-6">
              <CtaButton type="submit" block loading={submitting} loadingLabel="Building your estimate…" className="min-h-14 text-base">
                Show my estimate
              </CtaButton>
              <p className="mt-3 text-center text-sm text-warm-600">No spam, no obligation.</p>
            </div>
          </form>
        )}

        {step.kind === "reveal" && est && (
          <Result est={est} state={state} headingRef={headingRef} onRestart={restart} />
        )}
      </div>
    </div>
  );
}

/* ── Step layout: question, options, optional pinned footer ────────────── */

function StepFrame({
  headingRef,
  title,
  hint,
  hintDesktopOnly,
  children,
  footer,
}: {
  headingRef: RefObject<HTMLHeadingElement | null>;
  title: string;
  hint?: string;
  hintDesktopOnly?: boolean;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="font-display text-2xl font-bold leading-tight text-warm-900 focus:outline-none sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {hint && (
        <p className={`mt-2 text-base leading-snug text-warm-700 ${hintDesktopOnly ? "hidden sm:block" : ""}`}>{hint}</p>
      )}
      <div className="mt-5 sm:mt-6">{children}</div>
      {footer && <div className="mt-auto pt-6">{footer}</div>}
    </>
  );
}

/* ── Cabinet run: big readout, stepper buttons, slider ─────────────────── */

function CabinetRun({
  value,
  typical,
  onChange,
}: {
  value: number;
  typical: { lf: number; label: string } | null;
  onChange: (v: number) => void;
}) {
  const set = (v: number) => onChange(Math.max(LF_MIN, Math.min(LF_MAX, v)));
  const stepBtn =
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-warm-100 text-2xl font-semibold text-warm-900 transition-colors hover:bg-warm-200 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-warm-50";
  return (
    <div className="rounded-2xl bg-warm-100 px-5 py-6 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <button type="button" className={`${stepBtn} bg-white`} onClick={() => set(value - 1)} disabled={value <= LF_MIN} aria-label="One foot less">
          &minus;
        </button>
        <p className="text-center" aria-live="polite">
          <span className="font-display text-6xl font-bold tabular-nums leading-none text-warm-900">{value}</span>
          <span className="ml-1.5 text-xl font-semibold text-warm-700">ft</span>
        </p>
        <button type="button" className={`${stepBtn} bg-white`} onClick={() => set(value + 1)} disabled={value >= LF_MAX} aria-label="One foot more">
          +
        </button>
      </div>
      <label htmlFor="kc-lf" className="sr-only">
        Linear feet of cabinets
      </label>
      <input
        id="kc-lf"
        type="range"
        min={LF_MIN}
        max={LF_MAX}
        step={1}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-6 h-11 w-full cursor-pointer accent-warm-900"
      />
      <div className="flex justify-between text-sm font-medium tabular-nums text-warm-600">
        <span>{LF_MIN} ft</span>
        {typical && (
          <button
            type="button"
            onClick={() => set(typical.lf)}
            className="min-h-11 -my-3 rounded-full px-2 font-semibold text-warm-800 underline decoration-accent-dark decoration-2 underline-offset-4 hover:text-warm-900"
          >
            Typical {typical.label.toLowerCase()}: {typical.lf} ft
          </button>
        )}
        <span>{LF_MAX} ft</span>
      </div>
    </div>
  );
}

/* ── Result: range first, one action, then the breakdown ───────────────── */

function Result({
  est,
  state,
  headingRef,
  onRestart,
}: {
  est: Estimate;
  state: KitchenCalcState;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
}) {
  const rows = [
    ...est.lines,
    { label: `Contingency (home-age buffer, ${Math.round(est.contPct * 100)}%)`, value: est.contingency },
  ];
  const max = Math.max(...rows.map((r) => r.value));
  const picks = [
    state.kitchenSize && SIZE_PROFILES[state.kitchenSize].label,
    state.cabinetStyle && CABINET_STYLES[state.cabinetStyle].label,
    state.countertop && COUNTERTOPS[state.countertop].label,
    state.flooring && FLOORING[state.flooring].label,
  ].filter(Boolean);

  return (
    <div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-base font-semibold text-warm-700 focus:outline-none"
      >
        Your kitchen estimate · {est.regionLabel}
      </h2>
      <p className="mt-2 font-display text-[2.6rem] font-bold leading-[1] tabular-nums text-warm-900 sm:text-6xl">
        {formatCurrency(est.low)}
        <span className="mx-1.5 font-normal text-warm-500">–</span>
        <br className="sm:hidden" />
        {formatCurrency(est.high)}
      </p>
      <p className="mt-3 text-base leading-snug text-warm-700">
        {picks.join(" · ")}. Built from real Stacked Construction project costs, labor and permits included.
      </p>

      <div className="mt-6 rounded-2xl bg-warm-900 p-5 text-white sm:p-6">
        <p className="font-display text-xl font-bold leading-tight">Lock in your exact price at a free in-home consult.</p>
        <p className="mt-1.5 text-base leading-snug text-warm-300">
          We confirm scope, walk your materials and hand you a line-item quote. No obligation.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <CtaLink href="/contact" variant="onDark" size="lg" className="min-h-14 w-full justify-between whitespace-nowrap pl-6 text-base sm:w-auto sm:pl-8">
            Book a free consult
          </CtaLink>
          <a
            href="tel:+12397850166"
            className="inline-flex min-h-11 items-center justify-center text-base font-semibold text-warm-100 underline decoration-warm-500 decoration-2 underline-offset-4 hover:text-white"
          >
            or call (239) 785-0166
          </a>
        </div>
      </div>

      <h3 className="mt-8 font-display text-xl font-bold text-warm-900">What makes up the number</h3>
      <ul className="mt-4 space-y-3.5">
        {rows.map((r) => (
          <li key={r.label}>
            <div className="flex items-baseline justify-between gap-4 text-base">
              <span className="text-warm-800">{r.label}</span>
              <span className="shrink-0 font-semibold tabular-nums text-warm-900">{formatCurrency(r.value)}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-warm-100" aria-hidden="true">
              <div className="h-full rounded-full bg-accent" style={{ width: `${Math.max(2, (r.value / max) * 100)}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl bg-warm-100 px-4 py-4 text-base sm:px-5">
        <span className="font-semibold text-warm-900">Estimated total</span>
        <span className="whitespace-nowrap font-bold tabular-nums text-warm-900">
          {formatCurrency(est.low)}–{formatCurrency(est.high)}
        </span>
      </div>
      {est.regionMult !== 1 && (
        <p className="mt-3 text-sm text-warm-600">
          Includes a {est.regionLabel} market adjustment of ×{est.regionMult.toFixed(2)} on materials, labor and fees.
        </p>
      )}

      <p className="mt-6 text-sm leading-relaxed text-warm-600">
        This instant estimate is a planning tool, not a formal quote. The range reflects normal variation in
        materials, site conditions and final selections; exact pricing follows an on-site assessment. FL License
        #CBC1269972.
      </p>
      <button
        type="button"
        onClick={onRestart}
        className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-warm-700 underline decoration-warm-300 decoration-2 underline-offset-4 hover:text-warm-900"
      >
        Start over
      </button>
    </div>
  );
}

/** Height of the fixed header when the page sits at scroll position `y`. Past 60px the
 *  announcement bar is collapsed (see Header.tsx), so --header-h equals
 *  --nav-h there — read that value directly so we land correctly even when
 *  scrolling from the very top of the page. */
function headerOffset(y: number) {
  const root = document.documentElement;
  const css = getComputedStyle(root);
  const rem = parseFloat(css.fontSize) || 16;
  const varName = y > 60 ? "--nav-h" : "--header-h";
  const raw = css.getPropertyValue(varName).trim();
  if (raw.endsWith("rem")) return parseFloat(raw) * rem;
  if (raw.endsWith("px")) return parseFloat(raw);
  // --header-h is a calc(); resolve it through a probe element
  const probe = document.createElement("div");
  probe.style.cssText = `position:absolute;visibility:hidden;height:var(${varName})`;
  document.body.appendChild(probe);
  const h = probe.getBoundingClientRect().height;
  probe.remove();
  return h;
}

function buildSummary(state: KitchenCalcState, est: ReturnType<typeof computeEstimate>) {
  if (!est) return "";
  const parts = [
    state.kitchenSize && `Size: ${SIZE_PROFILES[state.kitchenSize].label} (${state.cabLf} ft cabinets)`,
    state.layout && `Layout: ${LAYOUT_OPTIONS[state.layout].label}`,
    state.cabinetStyle && `Cabinets: ${CABINET_STYLES[state.cabinetStyle].label}`,
    state.countertop && `Countertops: ${COUNTERTOPS[state.countertop].label}`,
    state.flooring && `Flooring: ${FLOORING[state.flooring].label}`,
    state.backsplash && state.backsplash !== "none" && `Backsplash: ${BACKSPLASH[state.backsplash].label}`,
    state.appliances && `Appliances: ${APPLIANCES[state.appliances].label}`,
    est.pickedAddons.length > 0 && `Upgrades: ${est.pickedAddons.join(", ")}`,
  ].filter(Boolean);
  return `Kitchen Cost Calculator submission — ${parts.join(" | ")}`;
}

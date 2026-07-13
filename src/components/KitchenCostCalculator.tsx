"use client";

import { useState } from "react";
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
  type AppliancePackage,
  type Backsplash,
  type CabinetStyle,
  type Countertop,
  type Flooring,
  type HomeAge,
  type KitchenCalcState,
  type KitchenSize,
  type LayoutChange,
  type Region,
  type Timeline,
} from "@/lib/kitchen-pricing";

const STEP_KEYS = [
  "size",
  "layout",
  "cabinets",
  "countertop",
  "surfaces",
  "appliances",
  "addons",
  "details",
  "gate",
  "reveal",
] as const;

type StepKey = (typeof STEP_KEYS)[number];

const STEP_TITLES: Record<Exclude<StepKey, "gate" | "reveal">, string> = {
  size: "How big is your kitchen?",
  layout: "Are you keeping the current layout?",
  cabinets: "What level of cabinetry are you after?",
  countertop: "Pick your countertop material.",
  surfaces: "Flooring and backsplash.",
  appliances: "What about appliances?",
  addons: "Any of these on your wish list?",
  details: "A couple of quick details.",
};

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
  tag?: string;
}

function OptionCard({ selected, onClick, title, desc, tag }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full rounded-lg border px-4 py-3.5 text-left transition-all ${
        selected
          ? "border-white bg-white/10 text-white"
          : "border-warm-700 bg-warm-900/40 text-warm-400 hover:border-warm-500 hover:text-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-semibold">{title}</span>
        {tag && (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
            {tag}
          </span>
        )}
      </div>
      {desc && <p className={`mt-1 text-xs leading-relaxed ${selected ? "text-warm-300" : "text-warm-500"}`}>{desc}</p>}
    </button>
  );
}

export default function KitchenCostCalculator() {
  const [idx, setIdx] = useState(0);
  const [state, setState] = useState<KitchenCalcState>(INITIAL_STATE);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const stepKey = STEP_KEYS[idx];
  const total = STEP_KEYS.length - 1; // exclude reveal from the count shown to the user

  function patch(fields: Partial<KitchenCalcState>) {
    setState((s) => ({ ...s, ...fields }));
  }

  function goNext() {
    setIdx((i) => Math.min(i + 1, STEP_KEYS.length - 1));
    setError("");
  }

  function goBack() {
    setIdx((i) => Math.max(i - 1, 0));
    setError("");
  }

  function canAdvance(): boolean {
    switch (stepKey) {
      case "size":
        return !!state.kitchenSize;
      case "layout":
        return !!state.layout;
      case "cabinets":
        return !!state.cabinetStyle;
      case "countertop":
        return !!state.countertop;
      case "surfaces":
        return !!state.flooring && !!state.backsplash;
      case "appliances":
        return !!state.appliances;
      case "addons":
        return true;
      case "details":
        return !!state.homeAge && !!state.timeline;
      default:
        return true;
    }
  }

  async function handleSubmitLead() {
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
      goNext();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function restart() {
    setState(INITIAL_STATE);
    setName("");
    setEmail("");
    setPhone("");
    setError("");
    setIdx(0);
  }

  const est = stepKey === "reveal" ? computeEstimate(state) : null;

  return (
    <div className="rounded-2xl border border-warm-700/50 bg-warm-800/50 p-8 backdrop-blur-sm lg:p-10">
      {stepKey !== "reveal" && (
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
              Step {idx + 1} of {total}
            </span>
            {idx > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="text-xs font-medium text-warm-400 transition-colors hover:text-white"
              >
                &larr; Back
              </button>
            )}
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-warm-700/50">
            <div
              className="h-full rounded-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${(idx / (total - 1)) * 100}%` }}
            />
          </div>
        </div>
      )}

      {stepKey !== "gate" && stepKey !== "reveal" && (
        <h2 className="mb-6 font-display text-2xl font-bold text-white">{STEP_TITLES[stepKey]}</h2>
      )}

      {/* ── SIZE ─────────────────────────────────────────────── */}
      {stepKey === "size" && (
        <div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(Object.keys(SIZE_PROFILES) as KitchenSize[]).map((key) => (
              <OptionCard
                key={key}
                selected={state.kitchenSize === key}
                onClick={() => {
                  const profile = SIZE_PROFILES[key];
                  patch({ kitchenSize: key, cabLf: profile.lf });
                }}
                title={SIZE_PROFILES[key].label}
                desc={SIZE_PROFILES[key].desc}
                tag={key === "standard" ? "Most Common" : undefined}
              />
            ))}
          </div>
          {state.kitchenSize && (
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-white">
                Approx. linear feet of cabinets{" "}
                <span className="font-normal text-warm-500">— fine-tune if you know it</span>
              </label>
              <input
                type="range"
                min={8}
                max={48}
                step={1}
                value={state.cabLf}
                onChange={(e) => patch({ cabLf: Number(e.target.value) })}
                className="w-full accent-white"
              />
              <p className="mt-2 text-sm font-bold text-white">
                {state.cabLf} ft <span className="font-normal text-warm-500">of cabinet run — the single biggest cost driver</span>
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── LAYOUT ───────────────────────────────────────────── */}
      {stepKey === "layout" && (
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(LAYOUT_OPTIONS) as LayoutChange[]).map((key) => (
            <OptionCard
              key={key}
              selected={state.layout === key}
              onClick={() => patch({ layout: key })}
              title={LAYOUT_OPTIONS[key].label}
              desc={LAYOUT_OPTIONS[key].desc}
            />
          ))}
        </div>
      )}

      {/* ── CABINETS ─────────────────────────────────────────── */}
      {stepKey === "cabinets" && (
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(CABINET_STYLES) as CabinetStyle[]).map((key) => (
            <OptionCard
              key={key}
              selected={state.cabinetStyle === key}
              onClick={() => patch({ cabinetStyle: key })}
              title={CABINET_STYLES[key].label}
              desc={CABINET_STYLES[key].desc}
              tag={key === "semicustom" ? "Most Popular" : undefined}
            />
          ))}
        </div>
      )}

      {/* ── COUNTERTOP ───────────────────────────────────────── */}
      {stepKey === "countertop" && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(Object.keys(COUNTERTOPS) as Countertop[]).map((key) => (
            <OptionCard
              key={key}
              selected={state.countertop === key}
              onClick={() => patch({ countertop: key })}
              title={COUNTERTOPS[key].label}
              desc={COUNTERTOPS[key].desc}
              tag={key === "quartz" ? "SWFL Favorite" : undefined}
            />
          ))}
        </div>
      )}

      {/* ── SURFACES: flooring + backsplash ────────────────────── */}
      {stepKey === "surfaces" && (
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Flooring</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(Object.keys(FLOORING) as Flooring[]).map((key) => (
                <OptionCard
                  key={key}
                  selected={state.flooring === key}
                  onClick={() => patch({ flooring: key })}
                  title={FLOORING[key].label}
                  desc={FLOORING[key].desc}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Backsplash</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(Object.keys(BACKSPLASH) as Backsplash[]).map((key) => (
                <OptionCard
                  key={key}
                  selected={state.backsplash === key}
                  onClick={() => patch({ backsplash: key })}
                  title={BACKSPLASH[key].label}
                  desc={BACKSPLASH[key].desc}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── APPLIANCES ───────────────────────────────────────── */}
      {stepKey === "appliances" && (
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(APPLIANCES) as AppliancePackage[]).map((key) => (
            <OptionCard
              key={key}
              selected={state.appliances === key}
              onClick={() => patch({ appliances: key })}
              title={APPLIANCES[key].label}
              desc={APPLIANCES[key].desc}
            />
          ))}
        </div>
      )}

      {/* ── ADD-ONS ──────────────────────────────────────────── */}
      {stepKey === "addons" && (
        <div className="grid grid-cols-1 gap-2.5">
          {ADDONS.map((addon) => {
            const selected = !!state.addons[addon.id];
            const price = addonPrice(addon, styleTierOf(state));
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() =>
                  patch({ addons: { ...state.addons, [addon.id]: !selected } })
                }
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all ${
                  selected ? "border-white bg-white/10" : "border-warm-700 bg-warm-900/40 hover:border-warm-500"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 text-xs font-bold ${
                    selected ? "border-white bg-white text-warm-900" : "border-warm-600 text-transparent"
                  }`}
                >
                  &#10003;
                </span>
                <span className="flex-1">
                  <span className={`block text-sm font-semibold ${selected ? "text-white" : "text-warm-300"}`}>
                    {addon.label}
                  </span>
                  <span className="block text-xs text-warm-500">{addon.desc}</span>
                </span>
                <span className="shrink-0 text-xs font-bold text-warm-400">+{formatCurrency(price)}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ── DETAILS: region, home age, timeline ─────────────────── */}
      {stepKey === "details" && (
        <div className="space-y-7">
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Where&apos;s the project?</label>
            <select
              value={state.region}
              onChange={(e) => patch({ region: e.target.value as Region })}
              className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3.5 text-sm text-white focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
            >
              {(Object.keys(REGIONS) as Region[]).map((key) => (
                <option key={key} value={key} className="bg-warm-900">
                  {REGIONS[key].label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Roughly how old is the home?</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(Object.keys(HOME_AGE_LABELS) as HomeAge[]).map((key) => (
                <OptionCard
                  key={key}
                  selected={state.homeAge === key}
                  onClick={() => patch({ homeAge: key })}
                  title={HOME_AGE_LABELS[key]}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">When are you hoping to start?</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(Object.keys(TIMELINE_LABELS) as Timeline[]).map((key) => (
                <OptionCard
                  key={key}
                  selected={state.timeline === key}
                  onClick={() => patch({ timeline: key })}
                  title={TIMELINE_LABELS[key]}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── LEAD GATE ────────────────────────────────────────── */}
      {stepKey === "gate" && (
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
            Your custom estimate is ready
          </div>
          <h2 className="mb-3 font-display text-2xl font-bold text-white">
            Where should we send your line-item estimate?
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-warm-400">
            Enter your details to unlock your full price breakdown, plus a free
            &ldquo;ways to save&rdquo; sheet specific to your project.
          </p>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                Full Name
              </label>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Smith"
                autoComplete="name"
                className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-5 py-4 text-base text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-5 py-4 text-base text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                Mobile Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(239) 785-0166"
                autoComplete="tel"
                className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-5 py-4 text-base text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
              />
            </div>
          </div>
          {error && <p className="mt-4 rounded-lg bg-red-900/50 px-4 py-3 text-sm text-red-300">{error}</p>}
          <button
            type="button"
            onClick={handleSubmitLead}
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100 disabled:opacity-60"
          >
            {submitting ? "Calculating..." : "Reveal My Estimate →"}
          </button>
          <p className="mt-4 text-center text-xs text-warm-600">
            No spam, no obligation. We respect your inbox.
          </p>
        </div>
      )}

      {/* ── REVEAL ───────────────────────────────────────────── */}
      {stepKey === "reveal" && est && (
        <div>
          <div className="text-center">
            <p className="mb-1 text-sm text-warm-400">
              Estimated investment for <span className="font-semibold text-white">your kitchen</span>
            </p>
            <p className="font-display text-4xl font-bold leading-none text-white sm:text-5xl">
              {formatCurrency(est.low)}
              <span className="mx-2 font-sans text-2xl font-normal text-warm-500">&ndash;</span>
              {formatCurrency(est.high)}
            </p>
            <p className="mt-3 text-xs text-warm-500">Based on real Stacked Construction projects in {est.regionLabel}</p>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-warm-700/50">
            {est.lines.map((line) => (
              <div key={line.label} className="flex items-center justify-between border-b border-warm-700/50 px-4 py-3 text-sm last:border-b-0">
                <span className="text-warm-400">{line.label}</span>
                <span className="font-semibold text-white">{formatCurrency(line.value)}</span>
              </div>
            ))}
            {est.regionMult !== 1 && (
              <div className="flex items-center justify-between border-b border-warm-700/50 bg-warm-900/40 px-4 py-3 text-sm">
                <span className="text-warm-400">{est.regionLabel} market adjustment</span>
                <span className="font-semibold text-white">&times;{est.regionMult.toFixed(2)}</span>
              </div>
            )}
            <div className="flex items-center justify-between border-b border-warm-700/50 bg-warm-900/40 px-4 py-3 text-sm">
              <span className="text-warm-400">Contingency (home-age buffer, {Math.round(est.contPct * 100)}%)</span>
              <span className="font-semibold text-white">{formatCurrency(est.contingency)}</span>
            </div>
            <div className="flex items-center justify-between bg-white/10 px-4 py-4 text-sm">
              <span className="font-bold text-white">Estimated project total</span>
              <span className="font-bold text-white">
                {formatCurrency(est.low)}&ndash;{formatCurrency(est.high)}
              </span>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-warm-600">
            Range reflects normal variation in materials, site conditions & final
            selections. Your exact quote is confirmed at your free consult.
          </p>

          <div className="mt-8 rounded-xl border border-warm-700 bg-gradient-to-br from-warm-800 to-warm-900 p-6">
            <h3 className="mb-2 font-display text-lg font-bold text-white">Ready to lock in this price?</h3>
            <p className="mb-5 text-sm leading-relaxed text-warm-400">
              Book your free, no-pressure in-home consult. We&apos;ll confirm your
              exact scope, walk your materials, and hand you a clean line-item
              quote.
            </p>
            <a
              href="tel:+12397850166"
              className="flex w-full items-center justify-center rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
            >
              Call (239) 785-0166 &mdash; Book Free Consult
            </a>
          </div>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-warm-600">
            This instant estimate is a planning tool, not a formal quote. Final
            pricing depends on an on-site assessment of your home, selections &
            conditions. FL License #CBC1269972.
          </p>
          <div className="mt-4 text-center">
            <button type="button" onClick={restart} className="text-xs font-medium text-warm-500 hover:text-white">
              &#8634; Start over
            </button>
          </div>
        </div>
      )}

      {/* ── NAV ──────────────────────────────────────────────── */}
      {stepKey !== "gate" && stepKey !== "reveal" && (
        <button
          type="button"
          onClick={goNext}
          disabled={!canAdvance()}
          className="mt-8 w-full rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {STEP_KEYS[idx + 1] === "gate" ? "Get My Estimate →" : "Continue →"}
        </button>
      )}
    </div>
  );
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

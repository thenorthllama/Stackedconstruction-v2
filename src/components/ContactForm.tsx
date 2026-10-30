"use client";

import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ChangeEvent,
} from "react";
import { CtaButton } from "@/components/ui/cta";
import { brand, cta } from "@/data/brand";

/**
 * Consultation request form — two steps.
 *
 * Why two steps (from the UX audit): the single-page version asked for seven
 * fields including the project street address as field four, before any
 * relationship existed. Address is the highest-friction ask on the page and the
 * API doesn't need it to start a conversation. Step one now collects only what
 * a reply requires; step two collects the qualifying detail after the visitor
 * has committed to the first click.
 *
 * Also fixed here: inline validation with focus management, a real loading
 * state on the submit button, an announced success state, and the reassurance
 * line promoted next to the button instead of buried under it.
 */

interface ContactFormProps {
  /** Dark variant for dark surfaces */
  variant?: "light" | "dark";
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  timeline: string;
}

type FieldName = keyof FormFields;

const STORAGE_KEY = "stacked-contact-form";

const DEFAULT_FIELDS: FormFields = {
  name: "",
  email: "",
  phone: "",
  address: "",
  projectType: "",
  description: "",
  timeline: "Not sure yet",
};

const PROJECT_TYPES = [
  "Kitchen remodel",
  "Bathroom remodel",
  "Whole-home renovation",
  "Outdoor living / lanai",
  "Flooring & tile",
  "Something else",
];

const TIMELINE_OPTIONS = [
  "Not sure yet",
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6+ months / just exploring",
];

function readStorage(): FormFields {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_FIELDS;
    return { ...DEFAULT_FIELDS, ...(JSON.parse(saved) as Partial<FormFields>) };
  } catch {
    return DEFAULT_FIELDS;
  }
}

function writeStorage(fields: FormFields): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
  } catch {
    /* private browsing or quota — silent */
  }
}

function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* noop */
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** 10+ digits after stripping formatting */
const digits = (v: string) => v.replace(/\D/g, "");

export default function ContactForm({ variant = "light" }: ContactFormProps) {
  const [fields, setFields] = useState<FormFields>(DEFAULT_FIELDS);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [step, setStep] = useState<1 | 2>(1);
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const stepHeadingRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFields(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(fields);
  }, [fields, hydrated]);

  // Move focus to the new step so keyboard and SR users aren't left behind
  useEffect(() => {
    if (hydrated && step === 2) stepHeadingRef.current?.focus();
  }, [step, hydrated]);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear the error as soon as the user starts correcting it
    if (errors[name as FieldName]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validateStepOne() {
    const next: Partial<Record<FieldName, string>> = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.phone.trim()) next.phone = "We need a phone number to call you back.";
    else if (digits(fields.phone).length < 10) next.phone = "That doesn't look like a full phone number.";
    if (!fields.email.trim()) next.email = "Please add an email address.";
    else if (!EMAIL_RE.test(fields.email)) next.email = "That email address looks incomplete.";
    setErrors(next);

    const firstBad = (["name", "phone", "email"] as FieldName[]).find((f) => next[f]);
    if (firstBad) {
      document.getElementById(`contact-${firstBad}`)?.focus();
      return false;
    }
    return true;
  }

  function handleContinue() {
    if (validateStepOne()) setStep(2);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step === 1) {
      handleContinue();
      return;
    }
    if (!validateStepOne()) {
      setStep(1);
      return;
    }

    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      clearStorage();
      setSubmitted(true);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const isDark = variant === "dark";

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const inputTheme = isDark
    ? "border border-warm-700 bg-warm-900/60 text-white placeholder:text-warm-500 focus-visible:ring-white focus-visible:ring-offset-warm-900"
    : "border border-warm-200 bg-white text-warm-900 placeholder:text-warm-400 focus-visible:ring-accent-dark focus-visible:ring-offset-white";
  const errorRing = isDark ? "border-red-400" : "border-red-500";

  const inputClasses = (field: FieldName) =>
    `${inputBase} ${inputTheme} ${errors[field] ? errorRing : ""}`;

  const labelClasses = isDark
    ? "mb-1.5 block text-sm font-semibold text-warm-200"
    : "mb-1.5 block text-sm font-semibold text-warm-800";

  const shellClasses = isDark
    ? "rounded-[1.75rem] border border-warm-700/50 bg-warm-800/50 p-7 backdrop-blur-sm lg:p-9"
    : "rounded-[1.75rem] border border-warm-200 bg-white p-7 shadow-sm lg:p-9";

  /* ── Success ─────────────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={`${shellClasses} text-center focus:outline-none`}
      >
        <div
          className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
            isDark ? "bg-warm-700/50" : "bg-warm-100"
          }`}
        >
          <svg
            className={`h-7 w-7 ${isDark ? "text-warm-200" : "text-accent-dark"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3
          className={`font-display text-2xl font-semibold ${
            isDark ? "text-white" : "text-warm-900"
          }`}
        >
          Got it, {fields.name.split(" ")[0] || "thanks"}.
        </h3>
        <p className={`mx-auto mt-4 max-w-sm text-base leading-relaxed ${isDark ? "text-warm-300" : "text-warm-600"}`}>
          Your request is in. We&apos;ll call you within one business day to ask
          a few questions and set a time to walk your space.
        </p>
        <p className={`mt-5 text-sm ${isDark ? "text-warm-400" : "text-warm-500"}`}>
          Need us sooner?{" "}
          <a
            href={brand.phoneHref}
            className={`font-semibold underline underline-offset-2 ${isDark ? "text-white" : "text-warm-900"}`}
          >
            Call {brand.phone}
          </a>
        </p>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <div className={shellClasses}>
      {/* Step indicator */}
      <div className="mb-7">
        <div className="flex items-center justify-between">
          <p
            ref={stepHeadingRef}
            tabIndex={-1}
            className={`text-sm font-semibold focus:outline-none ${
              isDark ? "text-warm-400" : "text-warm-500"
            }`}
          >
            Step {step} of 2 —{" "}
            {step === 1 ? "How to reach you" : "About the project"}
          </p>
          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`text-sm font-semibold underline underline-offset-2 ${
                isDark ? "text-warm-300 hover:text-white" : "text-warm-500 hover:text-warm-900"
              }`}
            >
              Back
            </button>
          )}
        </div>
        <div
          className={`mt-3 h-1 w-full overflow-hidden rounded-full ${isDark ? "bg-warm-700/60" : "bg-warm-100"}`}
        >
          <div
            className="h-full rounded-full bg-accent-dark transition-all duration-500 motion-reduce:transition-none"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {step === 1 ? (
          <>
            <Field
              id="contact-name"
              name="name"
              label="Your name"
              value={fields.name}
              onChange={handleChange}
              error={errors.name}
              labelClasses={labelClasses}
              inputClasses={inputClasses("name")}
              autoComplete="name"
              placeholder="Jane Doe"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="contact-phone"
                name="phone"
                type="tel"
                label="Phone"
                value={fields.phone}
                onChange={handleChange}
                error={errors.phone}
                labelClasses={labelClasses}
                inputClasses={inputClasses("phone")}
                autoComplete="tel"
                placeholder="(239) 555-0123"
              />
              <Field
                id="contact-email"
                name="email"
                type="email"
                label="Email"
                value={fields.email}
                onChange={handleChange}
                error={errors.email}
                labelClasses={labelClasses}
                inputClasses={inputClasses("email")}
                autoComplete="email"
                placeholder="jane@email.com"
              />
            </div>

            <div>
              <label htmlFor="contact-description" className={labelClasses}>
                What are you thinking about?{" "}
                <span className={isDark ? "text-warm-300" : "text-warm-600"}>
                  (optional)
                </span>
              </label>
              <textarea
                id="contact-description"
                name="description"
                rows={3}
                value={fields.description}
                onChange={handleChange}
                className={inputClasses("description")}
                placeholder="A sentence is plenty — we'll ask the rest on the call."
              />
            </div>

            <CtaButton
              type="submit"
              variant={isDark ? "onDark" : "primary"}
              size="lg"
              block
              noArrow
            >
              Continue
            </CtaButton>

            <p className={`text-center text-sm leading-relaxed ${isDark ? "text-warm-300" : "text-warm-600"}`}>
              {cta.reassurance}
            </p>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="contact-projectType" className={labelClasses}>
                Project type
              </label>
              <select
                id="contact-projectType"
                name="projectType"
                value={fields.projectType}
                onChange={handleChange}
                className={`${inputClasses("projectType")} appearance-none`}
              >
                <option value="">Select one</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-timeline" className={labelClasses}>
                Timeline
              </label>
              <select
                id="contact-timeline"
                name="timeline"
                value={fields.timeline}
                onChange={handleChange}
                className={`${inputClasses("timeline")} appearance-none`}
              >
                {TIMELINE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <Field
              id="contact-address"
              name="address"
              label="Project address or city"
              optional
              value={fields.address}
              onChange={handleChange}
              error={errors.address}
              labelClasses={labelClasses}
              inputClasses={inputClasses("address")}
              autoComplete="street-address"
              placeholder="Naples, FL"
              hint="City is enough for now — we'll confirm the address when we schedule."
              hintClass={isDark ? "text-warm-500" : "text-warm-500"}
              isDark={isDark}
            />

            <div aria-live="polite" aria-atomic="true">
              {formError && (
                <p
                  className={`rounded-xl px-4 py-3 text-base ${
                    isDark
                      ? "border border-red-400/40 bg-red-400/10 text-red-200"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {formError}
                </p>
              )}
            </div>

            <CtaButton
              type="submit"
              variant={isDark ? "onDark" : "primary"}
              size="lg"
              block
              noArrow
              loading={submitting}
              loadingLabel="Sending your request…"
            >
              {cta.direct}
            </CtaButton>

            <p className={`text-center text-sm leading-relaxed ${isDark ? "text-warm-300" : "text-warm-600"}`}>
              {cta.reassurance}
            </p>
          </>
        )}
      </form>
    </div>
  );
}

/* ── Field ─────────────────────────────────────────────────────────────── */

function Field({
  id,
  name,
  label,
  value,
  onChange,
  error,
  labelClasses,
  inputClasses,
  type = "text",
  autoComplete,
  placeholder,
  optional = false,
  hint,
  hintClass,
  isDark = false,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  labelClasses: string;
  inputClasses: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  optional?: boolean;
  hint?: string;
  hintClass?: string;
  isDark?: boolean;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {optional && (
          <span className={isDark ? " text-warm-300" : " text-warm-600"}>
            {" "}
            (optional)
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={inputClasses}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
      />
      {hint && !error && (
        <p id={hintId} className={`mt-1.5 text-sm ${hintClass ?? "text-warm-600"}`}>
          {hint}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className={`mt-1.5 text-sm font-medium ${isDark ? "text-red-300" : "text-red-600"}`}
        >
          {error}
        </p>
      )}
    </div>
  );
}

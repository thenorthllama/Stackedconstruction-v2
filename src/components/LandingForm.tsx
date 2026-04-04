"use client";

import { useState, type FormEvent } from "react";

interface LandingFormProps {
  serviceName: string;
  serviceSlug: string;
}

const STEPS = [
  { field: "name", label: "What's your name?", type: "text", placeholder: "John Smith", autoComplete: "name" },
  { field: "email", label: "What's your email?", type: "email", placeholder: "john@example.com", autoComplete: "email" },
  { field: "phone", label: "Best number to reach you?", type: "tel", placeholder: "(239) 785-0166", autoComplete: "tel" },
  { field: "budget", label: "What's your budget range?", type: "select", placeholder: "", autoComplete: "" },
  { field: "message", label: "Tell us about your project", type: "textarea", placeholder: "Describe what you're looking to remodel, your timeline, or any other details...", autoComplete: "" },
] as const;

const BUDGET_OPTIONS = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function LandingForm({ serviceName, serviceSlug }: LandingFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progress = ((step + 1) / STEPS.length) * 100;

  function handleFieldChange(value: string) {
    setFormData((prev) => ({ ...prev, [current.field]: value }));
    setError("");
  }

  function validateCurrent(): boolean {
    const value = formData[current.field as keyof typeof formData];
    if (current.field === "message") return true; // optional-ish, but we still want something
    if (!value.trim()) {
      setError("This field is required.");
      return false;
    }
    if (current.field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function handleNext() {
    if (!validateCurrent()) return;
    if (isLast) {
      handleSubmit();
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep((s) => s - 1);
      setError("");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && current.type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: serviceName }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-warm-700 bg-warm-900/60 px-5 py-4 text-base text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-warm-700/50 bg-warm-800/50 px-8 py-16 text-center backdrop-blur-sm">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-warm-700/50">
          <svg
            className="h-7 w-7 text-warm-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-white">Thank You</h3>
        <p className="mt-2 text-sm text-warm-400">
          We&apos;ve received your request and will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-warm-700/50 bg-warm-800/50 p-8 backdrop-blur-sm lg:p-10">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
            Step {step + 1} of {STEPS.length}
          </span>
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="text-xs font-medium text-warm-400 transition-colors hover:text-white"
            >
              &larr; Back
            </button>
          )}
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-warm-700/50">
          <div
            className="h-full rounded-full bg-white transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="mb-6 font-display text-2xl font-bold text-white">
        {current.label}
      </h2>

      {/* Field */}
      <div onKeyDown={handleKeyDown}>
        {current.type === "select" ? (
          <div className="grid grid-cols-2 gap-3">
            {BUDGET_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  handleFieldChange(option);
                  // Auto-advance on select
                  setTimeout(() => {
                    setFormData((prev) => ({ ...prev, budget: option }));
                    setStep((s) => s + 1);
                  }, 200);
                }}
                className={`rounded-lg border px-4 py-3.5 text-left text-sm font-medium transition-all ${
                  formData.budget === option
                    ? "border-white bg-white/10 text-white"
                    : "border-warm-700 bg-warm-900/40 text-warm-400 hover:border-warm-500 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : current.type === "textarea" ? (
          <textarea
            autoFocus
            rows={4}
            value={formData[current.field as keyof typeof formData]}
            onChange={(e) => handleFieldChange(e.target.value)}
            placeholder={current.placeholder}
            className={`resize-none ${inputClasses}`}
          />
        ) : (
          <input
            autoFocus
            type={current.type}
            value={formData[current.field as keyof typeof formData]}
            onChange={(e) => handleFieldChange(e.target.value)}
            placeholder={current.placeholder}
            autoComplete={current.autoComplete}
            className={inputClasses}
          />
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-900/50 px-4 py-3 text-sm text-red-300">{error}</p>
      )}

      {/* Next / Submit button (hidden for select since it auto-advances) */}
      {current.type !== "select" && (
        <button
          type="button"
          onClick={handleNext}
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100 disabled:opacity-60"
        >
          {submitting ? "Sending..." : isLast ? "Get My Free Estimate" : "Continue"}
        </button>
      )}

      {isLast && (
        <p className="mt-4 text-center text-xs text-warm-600">
          No spam, no obligation. We typically respond within 24 hours.
        </p>
      )}
    </div>
  );
}

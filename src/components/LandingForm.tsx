"use client";

import { useState } from "react";

interface LandingFormProps {
  serviceName: string;
  serviceSlug: string;
}

type FieldKey = "name" | "email" | "phone" | "address" | "projectType" | "description" | "timeline" | "budget";

type StepType = "contact-info" | "text" | "textarea" | "choice";

interface Step {
  id: string;
  type: StepType;
  label: string;
  // For single-field steps
  field?: FieldKey;
  placeholder?: string;
  autoComplete?: string;
  options?: string[];
  optional?: boolean;
}

const PROJECT_TYPES = [
  "Kitchen remodel",
  "Bathroom remodel",
  "Whole-home interior",
  "Exterior siding/paint",
  "Other",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "3–6 months",
  "6+ months / just exploring",
];

const BUDGET_OPTIONS = [
  "Under $20k",
  "$20k–$40k",
  "$40k–$75k",
  "$75k+",
];

const STEPS: Step[] = [
  {
    id: "contact-info",
    type: "contact-info",
    label: "Tell us a little about your project",
  },
  {
    id: "address",
    type: "text",
    field: "address",
    label: "What's your service address or ZIP code?",
    placeholder: "123 Main St, Fort Myers, FL or 33901",
    autoComplete: "postal-code",
  },
  {
    id: "projectType",
    type: "choice",
    field: "projectType",
    label: "What type of project is this?",
    options: PROJECT_TYPES,
  },
  {
    id: "description",
    type: "textarea",
    field: "description",
    label: "Tell us about your project",
    placeholder: "Describe your project in 2–3 sentences. What are you looking to remodel, and what's most important to you?",
  },
  {
    id: "timeline",
    type: "choice",
    field: "timeline",
    label: "When would you like to start?",
    options: TIMELINE_OPTIONS,
  },
  {
    id: "budget",
    type: "choice",
    field: "budget",
    label: "What's your approximate budget?",
    options: BUDGET_OPTIONS,
    optional: true,
  },
];

export default function LandingForm({ serviceName, serviceSlug }: LandingFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<FieldKey, string>>({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progress = ((step + 1) / STEPS.length) * 100;

  function handleFieldChange(field: FieldKey, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  function validateCurrent(): boolean {
    if (current.optional) return true;

    if (current.type === "contact-info") {
      if (!formData.name.trim()) {
        setError("Full name is required.");
        return false;
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setError("A valid email address is required.");
        return false;
      }
      if (!formData.phone.trim()) {
        setError("Mobile phone is required.");
        return false;
      }
      return true;
    }

    const value = formData[current.field!];
    if (!value.trim()) {
      setError("This field is required.");
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
      setError("");
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep((s) => s - 1);
      setError("");
    }
  }

  function handleChoiceSelect(value: string) {
    const field = current.field!;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => {
      if (isLast) {
        handleSubmitWithData({ ...formData, [field]: value });
      } else {
        setStep((s) => s + 1);
        setError("");
      }
    }, 200);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && current.type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  }

  async function handleSubmitWithData(data: Record<FieldKey, string>) {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: serviceName }),
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

  async function handleSubmit() {
    await handleSubmitWithData(formData);
  }

  const inputClasses =
    "w-full rounded-lg border border-warm-700 bg-warm-900/60 px-5 py-4 text-base text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500";

  const labelClasses = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500";

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
        <h3 className="font-display text-2xl font-semibold text-white">
          Thank You — We Got Your Project Request
        </h3>
        <p className="mt-3 text-sm font-medium text-warm-300">
          Your submission is in.
        </p>
        <p className="mt-3 text-sm text-warm-400">
          Our team is reviewing your project details now.
        </p>
        <p className="mt-3 text-sm text-warm-400">
          You will get a call within 2 business hours to ask a few quick
          questions, confirm the scope, and map out the best next step for
          your project.
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
      {current.optional && (
        <p className="-mt-4 mb-5 text-sm text-warm-500">Optional — helps us prepare a more accurate estimate.</p>
      )}

      {/* Field */}
      <div onKeyDown={handleKeyDown}>
        {current.type === "contact-info" ? (
          <div className="space-y-4">
            <div>
              <label className={labelClasses}>Full Name</label>
              <input
                autoFocus
                type="text"
                value={formData.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                placeholder="John Smith"
                autoComplete="name"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                placeholder="john@example.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Mobile Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleFieldChange("phone", e.target.value)}
                placeholder="(239) 785-0166"
                autoComplete="tel"
                className={inputClasses}
              />
            </div>
          </div>
        ) : current.type === "choice" ? (
          <div className={`grid gap-3 ${current.options && current.options.length > 3 ? "grid-cols-2" : "grid-cols-1"}`}>
            {current.options?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleChoiceSelect(option)}
                className={`rounded-lg border px-4 py-3.5 text-left text-sm font-medium transition-all ${
                  formData[current.field!] === option
                    ? "border-white bg-white/10 text-white"
                    : "border-warm-700 bg-warm-900/40 text-warm-400 hover:border-warm-500 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
            {current.optional && (
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, [current.field!]: "" }));
                  if (isLast) {
                    handleSubmitWithData({ ...formData, [current.field!]: "" });
                  } else {
                    setStep((s) => s + 1);
                    setError("");
                  }
                }}
                className="col-span-2 mt-1 text-center text-xs font-medium text-warm-600 transition-colors hover:text-warm-400"
              >
                Skip for now
              </button>
            )}
          </div>
        ) : current.type === "textarea" ? (
          <textarea
            autoFocus
            rows={4}
            value={formData[current.field!]}
            onChange={(e) => handleFieldChange(current.field!, e.target.value)}
            placeholder={current.placeholder}
            className={`resize-none ${inputClasses}`}
          />
        ) : (
          <input
            autoFocus
            type="text"
            value={formData[current.field!]}
            onChange={(e) => handleFieldChange(current.field!, e.target.value)}
            placeholder={current.placeholder}
            autoComplete={current.autoComplete}
            className={inputClasses}
          />
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-900/50 px-4 py-3 text-sm text-red-300">{error}</p>
      )}

      {/* Next / Submit — hidden for choice since it auto-advances */}
      {current.type !== "choice" && (
        <button
          type="button"
          onClick={handleNext}
          disabled={submitting}
          className="mt-6 w-full rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100 disabled:opacity-60"
        >
          {submitting ? "Sending..." : isLast ? "Get My Free Estimate" : "Continue"}
        </button>
      )}

      {isLast && current.type !== "choice" && (
        <p className="mt-4 text-center text-xs text-warm-600">
          No spam, no obligation. We typically respond within 24 hours.
        </p>
      )}
    </div>
  );
}

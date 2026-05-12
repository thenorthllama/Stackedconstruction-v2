"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";

interface ContactFormProps {
  /** Use dark variant for dark backgrounds (homepage CTA) */
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
  "Whole-home interior",
  "Exterior siding/paint",
  "Other",
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
    const parsed = JSON.parse(saved) as Partial<FormFields>;
    return { ...DEFAULT_FIELDS, ...parsed };
  } catch {
    return DEFAULT_FIELDS;
  }
}

function writeStorage(fields: FormFields): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
  } catch {
    // Private browsing or quota exceeded — silent fail
  }
}

function clearStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export default function ContactForm({ variant = "light" }: ContactFormProps) {
  const [fields, setFields] = useState<FormFields>(DEFAULT_FIELDS);
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Load persisted values after hydration to avoid SSR mismatch
  useEffect(() => {
    setFields(readStorage());
    setHydrated(true);
  }, []);

  // Save to localStorage on every field change (skip until hydrated)
  useEffect(() => {
    if (!hydrated) return;
    writeStorage(fields);
  }, [fields, hydrated]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

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
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const isDark = variant === "dark";

  const inputClasses = isDark
    ? "w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
    : "w-full rounded-lg border border-warm-200 bg-white px-4 py-3 text-sm text-warm-900 placeholder:text-warm-400 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500";

  const selectClasses = isDark
    ? "w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500 appearance-none"
    : "w-full rounded-lg border border-warm-200 bg-white px-4 py-3 text-sm text-warm-900 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500 appearance-none";

  const labelClasses = isDark
    ? "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400"
    : "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500";

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl py-16 text-center ${
          isDark
            ? "border border-warm-700/50 bg-warm-800/50 backdrop-blur-sm"
            : "border border-warm-200 bg-white"
        }`}
      >
        <div
          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
            isDark ? "bg-warm-700/50" : "bg-warm-100"
          }`}
        >
          <svg
            className={`h-7 w-7 ${isDark ? "text-warm-200" : "text-warm-900"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3
          className={`font-display text-2xl font-semibold ${
            isDark ? "text-white" : "text-warm-900"
          }`}
        >
          Thank You — We Got Your Project Request
        </h3>
        <p
          className={`mt-3 text-sm font-medium ${
            isDark ? "text-warm-300" : "text-warm-700"
          }`}
        >
          Your submission is in.
        </p>
        <p className={`mt-3 text-sm ${isDark ? "text-warm-400" : "text-warm-600"}`}>
          Our team is reviewing your project details now.
        </p>
        <p className={`mt-3 text-sm ${isDark ? "text-warm-400" : "text-warm-600"}`}>
          You will get a call within 2 business hours to ask a few quick
          questions, confirm the scope, and map out the best next step for
          your project.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl p-8 lg:p-10 ${
        isDark
          ? "border border-warm-700/50 bg-warm-800/50 backdrop-blur-sm"
          : "border border-warm-200 bg-white shadow-sm"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="John Smith"
            value={fields.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              placeholder="john@example.com"
              value={fields.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClasses}>
              Mobile Phone
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(239) 785-0166"
              value={fields.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Service Address / ZIP */}
        <div>
          <label htmlFor="contact-address" className={labelClasses}>
            Service Address or ZIP Code
          </label>
          <input
            type="text"
            id="contact-address"
            name="address"
            required
            autoComplete="postal-code"
            placeholder="123 Main St, Fort Myers, FL or 33901"
            value={fields.address}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* Project Type */}
        <div className="relative">
          <label htmlFor="contact-projectType" className={labelClasses}>
            Project Type
          </label>
          <div className="relative">
            <select
              id="contact-projectType"
              name="projectType"
              required
              value={fields.projectType}
              onChange={handleChange}
              className={selectClasses}
            >
              <option value="" disabled>
                Select a project type…
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div
              className={`pointer-events-none absolute inset-y-0 right-3 flex items-center ${
                isDark ? "text-warm-500" : "text-warm-400"
              }`}
              aria-hidden="true"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Brief Description */}
        <div>
          <label htmlFor="contact-description" className={labelClasses}>
            Brief Description of Your Project
          </label>
          <textarea
            id="contact-description"
            name="description"
            rows={3}
            required
            placeholder="Describe your project in 2–3 sentences. What are you looking to remodel, and what's most important to you?"
            value={fields.description}
            onChange={handleChange}
            className={`resize-none ${inputClasses}`}
          />
        </div>

        {/* Timeline (optional) */}
        <div className="relative">
          <label htmlFor="contact-timeline" className={labelClasses}>
            Ideal Start Timeline{" "}
            <span
              className={`normal-case tracking-normal font-normal ${
                isDark ? "text-warm-600" : "text-warm-400"
              }`}
            >
              (optional)
            </span>
          </label>
          <div className="relative">
            <select
              id="contact-timeline"
              name="timeline"
              value={fields.timeline}
              onChange={handleChange}
              className={selectClasses}
            >
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div
              className={`pointer-events-none absolute inset-y-0 right-3 flex items-center ${
                isDark ? "text-warm-500" : "text-warm-400"
              }`}
              aria-hidden="true"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error — accessible live region */}
        <div aria-live="polite" aria-atomic="true">
          {error && (
            <p
              className={`rounded-lg px-4 py-3 text-sm ${
                isDark
                  ? "bg-red-950/50 text-red-300 border border-red-900/50"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full rounded-full py-4 text-sm font-semibold transition-all disabled:opacity-60 ${
            isDark
              ? "bg-white text-warm-900 hover:bg-warm-100"
              : "bg-warm-900 text-white hover:bg-warm-800"
          }`}
        >
          {submitting ? "Sending…" : "Request Free Estimate"}
        </button>

        <p
          className={`text-center text-xs ${
            isDark ? "text-warm-600" : "text-warm-500"
          }`}
        >
          No spam, no obligation. We typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}

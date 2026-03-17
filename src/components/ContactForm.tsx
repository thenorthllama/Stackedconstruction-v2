"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  /** Use dark variant for dark backgrounds (homepage CTA) */
  variant?: "light" | "dark";
}

export default function ContactForm({ variant = "light" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to Formspree, Netlify Forms, or your own API endpoint
    setSubmitted(true);
  }

  const isDark = variant === "dark";

  const inputClasses = isDark
    ? "w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
    : "w-full rounded-lg border border-warm-200 bg-white px-4 py-3 text-sm text-warm-900 placeholder:text-warm-400 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500";

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
          Thank You
        </h3>
        <p
          className={`mt-2 text-sm ${
            isDark ? "text-warm-400" : "text-warm-600"
          }`}
        >
          We&apos;ve received your request and will be in touch within one
          business day.
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
      <form onSubmit={handleSubmit} className="space-y-5">
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
            className={inputClasses}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              autoComplete="email"
              placeholder="john@example.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClasses}>
              Phone
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(239) 785-0166"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClasses}>
            Tell Us About Your Project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Describe what you're looking to remodel, your timeline, budget range, or any other details..."
            className={`resize-none ${inputClasses}`}
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-full py-4 text-sm font-semibold transition-all ${
            isDark
              ? "bg-white text-warm-900 hover:bg-warm-100"
              : "bg-warm-900 text-white hover:bg-warm-800"
          }`}
        >
          Request Free Estimate
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

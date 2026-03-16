"use client";

import { useState, type FormEvent } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to Formspree, Netlify Forms, or your own API endpoint
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-warm-900 py-24 lg:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — heading */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Build
              <br />
              Something{" "}
              <em className="font-light italic text-warm-300">Beautiful</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-500">
              Schedule your free in-home consultation today. No pressure, no
              obligation — just an honest conversation about your vision and how
              we can bring it to life.
            </p>

            {/* Contact info below the copy */}
            <div className="mt-10 flex flex-col gap-3 text-sm text-warm-500">
              <a
                href="tel:+12397850166"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                (239) 785-0166
              </a>
              <a
                href="mailto:info@stackedconstruction.co"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                info@stackedconstruction.co
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="rounded-2xl border border-warm-700/50 bg-warm-800/50 p-8 backdrop-blur-sm lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-warm-700/50">
                  <svg
                    className="h-7 w-7 text-warm-200"
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
                <h3 className="font-display text-2xl font-semibold text-white">
                  Thank You
                </h3>
                <p className="mt-2 text-sm text-warm-400">
                  We&apos;ve received your request and will be in touch within
                  one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(239) 785-0166"
                      className="w-full rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe what you're looking to remodel, your timeline, budget range, or any other details..."
                    className="w-full resize-none rounded-lg border border-warm-700 bg-warm-900/60 px-4 py-3 text-sm text-white placeholder:text-warm-600 focus:border-warm-500 focus:outline-none focus:ring-1 focus:ring-warm-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
                >
                  Request Free Estimate
                </button>

                <p className="text-center text-xs text-warm-600">
                  No spam, no obligation. We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

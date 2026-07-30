"use client";

import ContactForm from "@/components/ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — heading */}
          <div>
            <p className="mb-4 eyebrow text-warm-500">
              Start the conversation
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
              Tell us what you
              <br />
              have in{" "}
              <em className="not-italic font-semibold text-accent-dark">mind</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-600">
              We&apos;ll walk your space, talk through what&apos;s realistic at
              your budget, and show you the plan before anyone picks up a tool.
              No charge, no obligation, and no pressure to decide on the spot.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-500">
              We reply within one business day.
            </p>

            <p className="mt-6 eyebrow text-warm-600">
              Licensed &amp; Insured · FL #CBC1269972
            </p>

            {/* Contact info below the copy */}
            <div className="mt-10 flex flex-col gap-3 text-sm text-warm-600">
              <a
                href="tel:+12397850166"
                className="inline-flex items-center gap-2 transition-colors hover:text-warm-900"
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
                className="inline-flex items-center gap-2 transition-colors hover:text-warm-900"
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
          <div className="rounded-[2rem] bg-warm-50 p-6 ring-1 ring-warm-200 lg:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

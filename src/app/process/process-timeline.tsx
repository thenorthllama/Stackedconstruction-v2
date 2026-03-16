"use client";

import { Timeline } from "@/components/ui/timeline";

const checkIcon = (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
);

const data = [
  {
    title: "Step 01",
    content: (
      <div>
        <h3 className="font-display text-2xl font-bold text-warm-900 sm:text-3xl mb-2">
          Free Consultation
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500 mb-6">
          We come to you
        </p>
        <p className="text-warm-700 text-sm md:text-base leading-relaxed mb-8">
          We visit your home, listen to your vision, assess the space, and
          discuss your goals and budget — no pressure, no commitment. This is
          where your project begins.
        </p>
        <div className="rounded-2xl border border-warm-200 bg-white p-6 md:p-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
            What to expect
          </p>
          <ul className="space-y-3">
            {[
              "In-home visit at a time that works for you",
              "Discuss your goals, style preferences, and must-haves",
              "Assess the existing space, structure, and potential",
              "Talk through realistic budget ranges",
              "Answer all of your questions — honestly",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-warm-700"
              >
                {checkIcon}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Step 02",
    content: (
      <div>
        <h3 className="font-display text-2xl font-bold text-warm-900 sm:text-3xl mb-2">
          Detailed Proposal
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500 mb-6">
          Transparent from day one
        </p>
        <p className="text-warm-700 text-sm md:text-base leading-relaxed mb-8">
          You receive a clear, line-item estimate with material options, a
          realistic timeline, and a transparent scope of work. No surprises, no
          hidden fees — ever.
        </p>
        <div className="rounded-2xl border border-warm-200 bg-white p-6 md:p-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
            What to expect
          </p>
          <ul className="space-y-3">
            {[
              "Line-item estimate — no hidden fees or vague allowances",
              "Material options at multiple price points",
              "Detailed scope of work so you know exactly what's included",
              "Realistic project timeline with key milestones",
              "Design guidance and material selection support",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-warm-700"
              >
                {checkIcon}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Step 03",
    content: (
      <div>
        <h3 className="font-display text-2xl font-bold text-warm-900 sm:text-3xl mb-2">
          Expert Build
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500 mb-6">
          Quality craftsmanship, clean job sites
        </p>
        <p className="text-warm-700 text-sm md:text-base leading-relaxed mb-8">
          Our skilled crew brings your project to life with quality materials,
          clean job sites, and consistent progress updates. You&apos;ll always know
          what&apos;s happening and when.
        </p>
        <div className="rounded-2xl border border-warm-200 bg-white p-6 md:p-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
            What to expect
          </p>
          <ul className="space-y-3">
            {[
              "Dedicated project manager as your single point of contact",
              "Regular progress updates — photos, calls, or on-site check-ins",
              "Clean, organized job sites every single day",
              "Licensed, experienced tradespeople on every task",
              "Quality materials sourced from trusted suppliers",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-warm-700"
              >
                {checkIcon}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Step 04",
    content: (
      <div>
        <h3 className="font-display text-2xl font-bold text-warm-900 sm:text-3xl mb-2">
          Final Walk-Through
        </h3>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500 mb-6">
          We don&apos;t leave until it&apos;s perfect
        </p>
        <p className="text-warm-700 text-sm md:text-base leading-relaxed mb-8">
          We walk every detail together. If anything isn&apos;t perfect, we make it
          right before the project is complete. Your satisfaction is
          non-negotiable.
        </p>
        <div className="rounded-2xl border border-warm-200 bg-white p-6 md:p-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
            What to expect
          </p>
          <ul className="space-y-3">
            {[
              "Room-by-room walk-through of every detail",
              "Punch list completed before final sign-off",
              "Thorough clean-up — your home is left move-in ready",
              "Warranty information and care instructions provided",
              "We're always just a phone call away after completion",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-warm-700"
              >
                {checkIcon}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

export function ProcessTimeline() {
  return <Timeline data={data} />;
}

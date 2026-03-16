"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical kitchen remodel take?",
    answer:
      "Most kitchen remodels take 6–10 weeks depending on the scope. During your free consultation, we'll provide a realistic timeline based on your specific project and material selections.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. We offer free, no-obligation in-home consultations where we assess your space, discuss your goals, and provide a detailed, line-item estimate — no hidden fees.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of Southwest Florida including Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Lehigh Acres, Marco Island, Punta Gorda, and surrounding areas across Lee, Collier, and Charlotte counties.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Stacked Construction is fully licensed and insured in the state of Florida. We're happy to provide documentation upon request.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer:
      "In most cases, yes. We work cleanly and efficiently to minimize disruption. For larger whole-home renovations, we'll discuss logistics during the planning phase to find the best arrangement.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click 'Get Free Estimate' or call us at (239) 785-0166. We'll schedule a convenient time to visit your home, listen to your vision, and put together a plan that fits your goals and budget.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl">
            Common{" "}
            <em className="font-light italic">Questions</em>
          </h2>
        </div>

        <dl className="divide-y divide-warm-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="py-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-semibold text-warm-900 pr-8">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-xl text-warm-500 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="mt-4 pr-12 text-base leading-relaxed text-warm-600">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

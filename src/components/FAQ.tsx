"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know you'll actually finish?",
    answer:
      "It's the right question to ask, and the honest answer is that you check. Verify our license (CBC1269972) with the Florida DBPR, ask for our insurance certificate, and ask to see a project we finished more than two years ago. We'll also give you a written schedule and a single point of contact — so if we ever slip, you'll know before you have to ask.",
  },
  {
    question: "What happens at the first consultation?",
    answer:
      "We come to you. We walk the space, ask how you actually use it, and talk honestly about scope and budget — including whether what you want is realistic at the number you have in mind. No charge, no obligation, and no pressure to decide anything that day.",
  },
  {
    question: "Do you design, or do I need my own designer?",
    answer:
      "We do both. Design and construction sit under one roof, so the people drawing your space know what it costs to build it — which means budget problems surface during design instead of after. If you already have an architect or designer you like, we're glad to build from their drawings.",
  },
  {
    question: "How do you price a project?",
    answer:
      "Line by line, not as a lump sum. You'll see what the cabinetry costs, what the stone costs, what the labor costs. It takes us longer to prepare, but it's the only way you can compare bids honestly or decide where to spend and where to pull back.",
  },
  {
    question: "What happens if something changes mid-project?",
    answer:
      "Scope changes on almost every job — a wall turns out to be load-bearing, or you fall in love with a different tile. When it happens, we price the change and get your written approval before the work continues. Nothing appears on your final invoice that you haven't already seen and agreed to.",
  },
  {
    question: "How long will it take?",
    answer:
      "Most kitchens run 6–10 weeks; bathrooms are usually shorter and whole-home projects longer. Material lead times and county permit review drive most of the variation, and we build both into the schedule you get with your proposal rather than discovering them later.",
  },
  {
    question: "Can I live in my home during the work?",
    answer:
      "Usually yes for a kitchen or bathroom. We isolate the work area, protect floors and finishes, and clean the site down each day. Whole-home renovations are harder to live through, and we'll tell you straight if we think you should plan to be out.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Naples, Bonita Springs, Fort Myers, and Cape Coral, plus surrounding communities across Lee and Collier counties.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 eyebrow justify-center text-warm-500">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl">
            Common{" "}
            <em className="not-italic font-semibold text-accent-dark">Questions</em>
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

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KitchenCostCalculator from "@/components/KitchenCostCalculator";

export const metadata: Metadata = {
  title: "Kitchen Remodel Cost Calculator | Instant Estimate | Stacked Construction",
  description:
    "Get an instant, personalized kitchen remodel cost estimate for Fort Myers, Naples, Cape Coral & SWFL. Answer a few questions about your cabinets, countertops & finishes and see a real price range in 60 seconds.",
  alternates: {
    canonical: "https://stackedconstruction.co/kitchen-cost-calculator",
  },
  openGraph: {
    title: "Kitchen Remodel Cost Calculator | Stacked Construction",
    description:
      "Answer a few quick questions and get a real Southwest Florida kitchen remodel price range — free, instant, no obligation.",
  },
};

const faqs = [
  {
    question: "How accurate is this kitchen remodel cost estimate?",
    answer:
      "This calculator is built from real Stacked Construction project data across Fort Myers, Naples, Cape Coral & SWFL — not national averages. It gives you a realistic planning range based on your cabinets, countertops, finishes & location. Your exact price is confirmed after a free in-home consult, where we can see your space, plumbing, electrical & structural conditions firsthand.",
  },
  {
    question: "Why is there a price range instead of one exact number?",
    answer:
      "Every kitchen hides a few unknowns — subfloor condition, outdated wiring, plumbing behind the wall — until we open things up. The range reflects that normal variation. Newer homes get a tighter range; older homes get a wider contingency built in, since that's where surprises are more likely to turn up.",
  },
  {
    question: "Does the estimate include labor and permits?",
    answer:
      "Yes. The breakdown includes installation labor, permits, demolition, disposal and project management — not just material costs. That's the same all-in approach we use in our formal, line-item proposals.",
  },
  {
    question: "What happens after I get my estimate?",
    answer:
      "You'll see your price range and a full breakdown immediately. If you want to move forward, we'll schedule a free in-home consult to confirm exact scope, walk your material selections, and lock in your final line-item quote — with no obligation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kitchen Cost Calculator",
      item: "https://stackedconstruction.co/kitchen-cost-calculator",
    },
  ],
};

export default function KitchenCostCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* ── Hero + calculator ─────────────────────────────────── */}
        <section id="top" className="relative bg-warm-900 pb-24 pt-32 lg:pb-32 lg:pt-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
            role="img"
            aria-label="Kitchen remodel by Stacked Construction"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-900/95 via-warm-900/90 to-warm-900" />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
              Free · 60-Second Estimate
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              See what your kitchen{" "}
              <em className="font-light italic text-warm-300">really costs</em> — before
              you ever pick up the phone.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
              Answer a few quick questions about your cabinets, countertops & finishes
              and get a real Southwest Florida price range built from actual Stacked
              Construction project data.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-warm-500">
              <span className="font-medium text-warm-400">Licensed CBC1269972</span>
              <span className="text-warm-700">&bull;</span>
              <span className="font-medium text-warm-400">5/5 Rating</span>
              <span className="text-warm-700">&bull;</span>
              <span className="font-medium text-warm-400">Insured &amp; Bonded</span>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-12 max-w-xl px-6 lg:px-10">
            <KitchenCostCalculator />
          </div>
        </section>

        {/* ── Methodology — editorial split ──────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  How It Works
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Built From
                  <br />
                  <em className="font-light italic text-warm-600">Real Job Costs</em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  Most online calculators quote a single national average and call it
                  a day. Ours is built the way we actually price a job — cabinets by
                  the linear foot, countertops and flooring by the square foot,
                  appliances by package, plus labor, permits & a home-age contingency
                  for older SWFL homes.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-8 border-t border-warm-200 pt-10 sm:grid-cols-3">
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">7</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Cost Categories
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">10</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      SWFL Cities Priced
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">60s</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      To Your Estimate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's included — dark, asymmetric two-col ─────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                What We Price
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                Every Line Item{" "}
                <em className="font-light italic text-warm-300">That Matters</em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 lg:grid-cols-2">
              {[
                "Cabinetry — stock, semi-custom or full custom, priced by linear foot",
                "Countertops — laminate, quartz, granite or quartzite/marble",
                "Flooring — LVP, porcelain tile or hardwood",
                "Backsplash — ceramic, designer tile or natural stone",
                "Appliance packages — from keep-as-is to luxury/pro",
                "Layout changes — plumbing, gas & wall removal",
                "Installation labor, scaled to your finish level",
                "Permits, demolition, disposal & project management",
                "Upgrades — islands, lighting, pantries & more",
                "A home-age contingency for older SWFL housing stock",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 border-t border-warm-800 p-8 first:border-t-0 lg:p-10 lg:odd:border-t-0">
                  <span className="font-display text-4xl font-bold leading-none text-warm-800">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-warm-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — open, editorial ──────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Common Questions
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Frequently
                  <br />
                  <em className="font-light italic text-warm-600">Asked</em>
                </h2>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {faqs.map((faq, i) => (
                  <details key={i} className="group py-8 first:pt-0 last:pb-0">
                    <summary className="flex cursor-pointer items-start justify-between gap-6">
                      <h3 className="font-display text-lg font-semibold leading-snug text-warm-900 group-open:text-warm-700">
                        {faq.question}
                      </h3>
                      <svg
                        className="mt-1 h-5 w-5 shrink-0 text-warm-400 transition-transform group-open:rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </summary>
                    <p className="mt-4 pr-12 text-base leading-relaxed text-warm-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — immersive, full-bleed ─────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Prefer to Talk It Through?
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Skip the Calculator —{" "}
              <em className="font-light italic text-warm-300">Talk to a Human</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no obligation —
              just an honest conversation about your vision and a clear path forward.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+12397850166"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Call (239) 785-0166
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProcessTimeline } from "./process-timeline";

export const metadata: Metadata = {
  title: "Our Process | Stacked Construction – How We Remodel Your Home",
  description:
    "Learn how Stacked Construction takes your remodeling project from vision to reality in four simple steps. Free consultation, detailed proposal, expert build, and final walk-through.",
  alternates: {
    canonical: "https://stackedconstruction.co/process",
  },
  openGraph: {
    title: "Our Process | Stacked Construction",
    description:
      "From free consultation to final walk-through — a transparent, stress-free remodeling process in Southwest Florida.",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Stacked Construction Remodels Your Home",
  description:
    "Our simple four-step remodeling process takes your project from vision to reality in Southwest Florida.",
  totalTime: "PT6W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Free Consultation",
      text: "We visit your home, listen to your vision, assess the space, and discuss your goals and budget — no pressure, no commitment. This is where your project begins.",
      url: "https://stackedconstruction.co/process",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Detailed Proposal",
      text: "You receive a clear, line-item estimate with material options, a realistic timeline, and a transparent scope of work. No surprises, no hidden fees — ever.",
      url: "https://stackedconstruction.co/process",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Expert Build",
      text: "Our skilled crew brings your project to life with quality materials, clean job sites, and consistent progress updates. You'll always know what's happening and when.",
      url: "https://stackedconstruction.co/process",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Final Walk-Through",
      text: "We walk every detail together. If anything isn't perfect, we make it right before the project is complete. Your satisfaction is non-negotiable.",
      url: "https://stackedconstruction.co/process",
    },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative bg-warm-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="mb-4 eyebrow text-warm-500">
              How It Works
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Our{" "}
              <em className="not-italic font-semibold text-accent">Process</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
              Remodeling your home should be exciting, not stressful. We&apos;ve
              built a simple four-step process that keeps things transparent,
              organized, and on track from start to finish.
            </p>
          </div>
        </div>
        </section>

        {/* Timeline section */}
        <ProcessTimeline />

        {/* CTA */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-24 lg:py-32 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Ready to Start{" "}
              <em className="not-italic font-semibold text-accent">Your Project?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-warm-500">
              The first step is a free, no-obligation consultation. Let&apos;s
              talk about your vision and put together a plan.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                Request Estimate Online
              </a>
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

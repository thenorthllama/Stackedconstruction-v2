import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProcessTimeline } from "./process-timeline";
import { promises } from "@/data/brand";

export const metadata: Metadata = {
  title: { absolute: "How We Work | Design-Build Process | Stacked Construction" },
  description:
    "How a Stacked Construction project actually runs — consultation, design and line-item proposal, then build. Plus the promises we make to every client in writing.",
  alternates: {
    canonical: "https://stackedconstruction.co/process",
  },
  openGraph: {
    title: "How We Work | Stacked Construction",
    description:
      "Consultation, design and proposal, then build. See exactly how your project runs before you commit to anything.",
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
      name: "Design & Proposal",
      text: "You receive a clear, line-item estimate with material options, a realistic timeline, and a transparent scope of work. No surprises, no hidden fees — ever.",
      url: "https://stackedconstruction.co/process",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build",
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
            <p className="mb-4 eyebrow text-warm-400">
              How we work
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              You&apos;ll always know{" "}
              <em className="not-italic font-semibold text-accent">
                the next step
              </em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-200">
              The worst part of a renovation is not knowing what happens next,
              or what it&apos;s going to cost when it does. Here is the whole
              process, start to finish, before you commit to anything.
            </p>
          </div>
        </div>
        </section>

        {/* Timeline section */}
        <ProcessTimeline />

        {/* ── The agreement plan — our promises ─────────────────────── */}
        <section className="bg-white py-24 lg:py-32" aria-label="Our promises to every client">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-5 text-warm-500">What you can hold us to</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Six promises we make{" "}
                  <em className="not-italic font-semibold text-accent-dark">
                    to every client
                  </em>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-warm-600">
                  These aren&apos;t marketing lines. They&apos;re how we run
                  every project, and you should expect the same from anyone you
                  hire.
                </p>
              </div>
              <ol className="divide-y divide-warm-200 border-t border-warm-200 lg:col-span-6 lg:col-start-7">
                {promises.map((promise, i) => (
                  <li key={promise} className="flex items-start gap-5 py-5">
                    <span className="font-display text-lg font-semibold text-warm-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-relaxed text-warm-700">
                      {promise}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-24 lg:py-32 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Step one is a{" "}
              <em className="not-italic font-semibold text-accent">
                conversation
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-warm-300">
              We come to you, walk the space, and tell you honestly what&apos;s
              realistic at your budget. No charge and no obligation.
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
                Schedule a Consultation
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

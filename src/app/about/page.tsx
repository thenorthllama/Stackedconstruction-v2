import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Stacked Construction – Licensed Remodeling in SWFL",
  description:
    "Licensed and insured remodeling company in Southwest Florida. Nearly a decade of experience in kitchen, bathroom, and full-home renovations built on trust, transparency, and disciplined execution.",
  alternates: {
    canonical: "https://stackedconstruction.co/about",
  },
  openGraph: {
    title: "About Us | Stacked Construction",
    description:
      "Licensed and insured remodeling in Southwest Florida. Built on trust, transparency, and disciplined execution.",
  },
};

const coreValues = [
  {
    title: "Quality Without Compromise",
    description:
      "Every detail is executed to standard. Shortcuts are rejected. The finished product reflects durability, precision, and long-term value.",
  },
  {
    title: "Client Protection First",
    description:
      "Licensed, insured, and structured operations ensure the homeowner is protected at every stage. Risk is controlled through process, not left to chance.",
  },
  {
    title: "Clear and Consistent Communication",
    description:
      "No ambiguity. Expectations, timelines, and constraints are communicated upfront and maintained throughout the project lifecycle.",
  },
  {
    title: "Ownership and Accountability",
    description:
      "Work is completed with full responsibility. Problems are addressed directly, without deflection or delay.",
  },
  {
    title: "Respect for the Home",
    description:
      "The job site is maintained with discipline. Cleanliness, organization, and care for the client's space are non-negotiable.",
  },
  {
    title: "Collaborative Execution",
    description:
      "The client's vision is not overridden. It is refined, tested against reality, and executed in a way that balances design, budget, and feasibility.",
  },
  {
    title: "Integrity in Every Decision",
    description:
      "Recommendations are made based on what is right for the client and the project — not convenience or margin.",
  },
  {
    title: "High-Character Team Standard",
    description:
      "Every individual on-site is vetted for professionalism, conduct, and reliability. Access to a client's home is treated as a responsibility, not a transaction.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://stackedconstruction.co/about" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900 lg:min-h-[70vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label="Stacked Construction team at work"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                  About Us
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  Built on Trust,{" "}
                  <em className="font-light italic text-warm-300">
                    Not Promises
                  </em>
                </h1>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    Licensed and insured remodeling across Southwest Florida.
                    Nearly a decade of hands-on experience.
                  </p>
                  <p className="mt-3 text-xs text-warm-500">
                    FL License #CBC1269972
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Are — editorial split ─────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Who We Are
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  The Standard{" "}
                  <em className="font-light italic text-warm-600">
                    Has Changed
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-6 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  <p>
                    We are a licensed and insured construction company specializing
                    in kitchen remodels, bathroom renovations, and full-home
                    transformations. With nearly a decade of hands-on experience
                    across hardscaping, cabinetry, granite, and interior
                    remodeling, the operation is built on a clear observation:
                    homeowners are not just buying a finished product — they are
                    buying trust.
                  </p>
                  <p>
                    The industry often fails at that level. Missed communication,
                    lack of accountability, and inconsistent execution create risk
                    for the homeowner. This company was built to remove that
                    uncertainty.
                  </p>
                  <p>
                    Every project follows a structured process designed to protect
                    the client, control quality, and maintain clarity from start to
                    finish. The approach is collaborative — working directly with
                    homeowners to take their ideas, align them with budget and
                    feasibility, and execute them with precision.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-warm-200 pt-10">
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      150+
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Projects
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      10yr
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Experience
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      5/5
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision — dark ─────────────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Our Mission
                </p>
                <h2 className="mb-8 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl">
                  Precision, Transparency,{" "}
                  <em className="font-light italic text-warm-300">
                    Protection
                  </em>
                </h2>
                <p className="text-base leading-[1.8] text-warm-400">
                  To deliver high-quality kitchen, bathroom, and full-home
                  remodels through a structured, transparent process that protects
                  the homeowner, respects their investment, and brings their
                  vision into a finished space with precision and care. Every
                  project is executed with clear communication, disciplined
                  organization, and a standard of workmanship that does not get
                  compromised.
                </p>
              </div>
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Our Vision
                </p>
                <h2 className="mb-8 font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl">
                  Raising the{" "}
                  <em className="font-light italic text-warm-300">
                    Standard
                  </em>
                </h2>
                <p className="text-base leading-[1.8] text-warm-400">
                  To become a leading remodeling and construction company in
                  Southwest Florida, recognized for raising the standard of
                  trust, professionalism, and execution in the industry —
                  expanding from residential remodels into full-scale home
                  construction while maintaining strict control over quality,
                  client experience, and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Objective — editorial callout ────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                What Drives Us
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                The Objective Is{" "}
                <em className="font-light italic text-warm-600">Bigger</em>
              </h2>
              <p className="mt-8 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                The objective is not just to complete a project. The objective is
                to deliver a finished space that reflects the client&apos;s vision
                while ensuring they felt informed, respected, and confident
                throughout the entire process.
              </p>
              <p className="mt-6 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                The long-term direction is controlled growth — scaling into one
                of the leading remodeling and construction companies in Southwest
                Florida, with expansion into new home construction, while
                maintaining strict standards for quality, communication, and
                client experience.
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Values — dark, numbered list ───────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  What We Stand For
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Core{" "}
                  <em className="font-light italic text-warm-300">
                    Values
                  </em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-500">
                  These are not aspirational statements. They are operational
                  standards that define how every project is run and how every
                  decision is made.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-0 divide-y divide-warm-800">
                  {coreValues.map((value, i) => (
                    <div
                      key={value.title}
                      className="flex items-start gap-6 py-8 first:pt-0 last:pb-0"
                    >
                      <span className="font-display text-4xl font-bold leading-none text-warm-800">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-warm-500">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About{" "}
              <em className="font-light italic text-warm-300">
                Your Vision
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no
              obligation — just an honest conversation about your project and a
              clear path forward.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+12397850166"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Call (239) 785-0166
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Request Estimate Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

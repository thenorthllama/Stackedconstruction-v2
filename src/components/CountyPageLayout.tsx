import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { CountyData, CityData, ServiceData } from "@/data/seo";

interface CountyPageLayoutProps {
  county: CountyData;
  countyCities: CityData[];
  services: ServiceData[];
  ctaDescription: string;
}

export default function CountyPageLayout({
  county,
  countyCities,
  services,
  ctaDescription,
}: CountyPageLayoutProps) {
  const stats = [
    { label: "Population", value: county.population },
    { label: "Median Home", value: county.medianHomeValue },
    { label: "Median Income", value: county.medianIncome },
    { label: "Homeownership", value: county.homeownershipRate },
    { label: "Median Age", value: county.medianAge },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ── Hero — cinematic ─────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900 lg:min-h-[70vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label={`Home remodeling in ${county.fullName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                {county.fullName}
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                {county.headline}{" "}
                <em className="font-light italic text-warm-300">
                  {county.headlineItalic}
                </em>
              </h1>
            </div>
          </div>
        </section>

        {/* ── Intro + Stats — editorial split ──────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Market Overview
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  {county.name}
                  <br />
                  <em className="font-light italic text-warm-600">
                    by the Numbers
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  {county.intro}
                </p>
                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-warm-200 pt-10 sm:grid-cols-3 lg:grid-cols-5">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl font-bold text-warm-900 lg:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-warm-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Demand Drivers — dark, numbered list ─────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Renovation Demand
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Why Homeowners{" "}
                  <em className="font-light italic text-warm-300">
                    Are Remodeling
                  </em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-500">
                  {county.positioning}
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-0 divide-y divide-warm-800">
                  {county.demandPatterns.map((pattern, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                    >
                      <span className="font-display text-3xl font-bold leading-none text-warm-800">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base leading-relaxed text-warm-400 pt-0.5">
                        {pattern}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cities — light, row links ────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                Cities We Serve
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                Across{" "}
                <em className="font-light italic text-warm-600">
                  {county.name}
                </em>
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-warm-200">
              {countyCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/areas/${city.slug}`}
                  className="group grid gap-4 py-10 transition-colors first:pt-0 last:pb-0 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-3">
                    <h3 className="font-display text-2xl font-semibold text-warm-900 transition-colors group-hover:text-accent sm:text-3xl">
                      {city.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Pop. {city.population}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-warm-600 lg:col-span-7">
                    {city.intro.slice(0, 200)}...
                  </p>
                  <div className="flex justify-end lg:col-span-2">
                    <svg
                      className="h-5 w-5 text-warm-400 transition-all group-hover:translate-x-1 group-hover:text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services — warm bg, numbered ─────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Our Services
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  What We Build in{" "}
                  <em className="font-light italic text-warm-600">
                    {county.name}
                  </em>
                </h2>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {services.map((service, i) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-start gap-6 py-8 transition-colors first:pt-0 last:pb-0"
                  >
                    <span className="font-display text-4xl font-bold leading-none text-warm-200 transition-colors group-hover:text-warm-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-warm-900 transition-colors group-hover:text-accent">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-600">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — immersive ──────────────────────────────────────── */}
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
              Ready to Remodel in{" "}
              <em className="font-light italic text-warm-300">
                {county.name}?
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              {ctaDescription}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+12397850166"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Call (239) 785-0166
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Request Estimate Online
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

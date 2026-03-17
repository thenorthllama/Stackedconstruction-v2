import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cities, services, getCityBySlug } from "@/data/seo";

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityServices = services.filter((s) => city.serviceIntros[s.slug]);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero — cinematic, image-led ───────────────────────────── */}
        <section className="relative min-h-[70vh] bg-warm-900 lg:min-h-[80vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label={`Home remodeling in ${city.name}, Florida`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[80vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                  {city.county} &middot; Southwest Florida
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  {city.headline}{" "}
                  <em className="font-light italic text-warm-300">
                    {city.headlineItalic}
                  </em>
                </h1>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                    Get Free Estimate
                  </a>
                </div>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    Premium kitchen, bathroom, and whole-home renovation across
                    {" "}{city.name} and {city.county}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro — editorial split ───────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  About {city.name}
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Why Homeowners
                  <br />
                  <em className="font-light italic text-warm-600">
                    Choose Stacked
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  {city.intro}
                </p>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-warm-200 pt-10">
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      {city.population}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Population
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      {city.medianHomeValue}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Median Home
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      {city.county.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      County
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services — dark, list-style with arrow links ──────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  What We Do
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Our Services in
                  <br />
                  <em className="font-light italic text-warm-300">
                    {city.name}
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-0 divide-y divide-warm-800">
                  {cityServices.map((service, i) => (
                    <Link
                      key={service.slug}
                      href={`/areas/${city.slug}/${service.slug}`}
                      className="group flex items-start justify-between gap-6 py-8 transition-colors first:pt-0 last:pb-0"
                    >
                      <div className="flex items-start gap-6">
                        <span className="font-display text-4xl font-bold leading-none text-warm-800 transition-colors group-hover:text-warm-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-warm-300 sm:text-2xl">
                            {service.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-warm-500">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <svg
                        className="mt-2 h-5 w-5 shrink-0 text-warm-600 transition-all group-hover:translate-x-1 group-hover:text-warm-300"
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Neighborhoods — light, editorial grid ─────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                Where We Work
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                {city.name} Neighborhoods{" "}
                <em className="font-light italic text-warm-600">We Serve</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
              {city.neighborhoods.map((neighborhood) => (
                <p
                  key={neighborhood}
                  className="border-l-2 border-warm-300 pl-4 text-sm text-warm-600"
                >
                  {neighborhood}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Landmarks — warm bg, editorial cards ──────────────────── */}
        {city.landmarks.length > 0 && (
          <section className="bg-warm-50 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                    Local Knowledge
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                    {city.name}{" "}
                    <em className="font-light italic text-warm-600">
                      Landmarks
                    </em>
                  </h2>
                </div>
                <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                  {city.landmarks.map((landmark) => (
                    <div
                      key={landmark.name}
                      className="py-10 first:pt-0 last:pb-0"
                    >
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                        {landmark.type}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-warm-900">
                        {landmark.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-warm-600">
                        {landmark.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Demand Drivers — dark ────────────────────────────────── */}
        {city.demandDrivers.length > 0 && (
          <section className="bg-warm-900 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                    Market Insight
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                    Why Homeowners Are{" "}
                    <em className="font-light italic text-warm-300">
                      Remodeling
                    </em>
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <div className="space-y-0 divide-y divide-warm-800">
                    {city.demandDrivers.map((driver, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                      >
                        <span className="font-display text-3xl font-bold leading-none text-warm-800">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-base leading-relaxed text-warm-400 pt-0.5">
                          {driver}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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
              <em className="font-light italic text-warm-300">{city.name}?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no
              obligation — just an honest conversation about your vision and how
              we can bring it to life.
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

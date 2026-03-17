import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getCityBySlug,
  getServiceBySlug,
  getAllCityServiceParams,
} from "@/data/seo";

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllCityServiceParams();
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} ${city.name} FL | Stacked Construction`;
  const description = `Expert ${service.name.toLowerCase()} in ${city.name}, FL. ${service.description} Licensed ${city.county} contractor. Free estimate.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://stackedconstruction.co/areas/${citySlug}/${serviceSlug}`,
    },
    openGraph: { title, description },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const serviceIntro = city.serviceIntros[service.slug];
  if (!serviceIntro) notFound();

  const localizedFaqs = service.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer
      .replace(/Southwest Florida/g, `${city.name}, FL`)
      .replace(/SWFL/g, city.name),
  }));

  // Split benefits for two-column layout
  const midpoint = Math.ceil(service.benefits.length / 2);
  const benefitsLeft = service.benefits.slice(0, midpoint);
  const benefitsRight = service.benefits.slice(midpoint);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
            aria-label={`${service.name} in ${city.name}, Florida`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[80vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                  {city.county} &middot; {city.name}, {city.state}
                </p>
                <h1 className="max-w-4xl font-display text-4xl font-bold leading-[0.92] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  {service.headline}{" "}
                  <em className="font-light italic text-warm-300">
                    {service.headlineItalic}
                  </em>
                  <span className="mt-3 block font-display text-2xl font-light text-warm-400 sm:text-3xl lg:text-4xl">
                    in {city.name}
                  </span>
                </h1>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Intro — editorial split ───────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  {service.name} in {city.name}
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Local{" "}
                  <em className="font-light italic text-warm-600">
                    Expertise
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  {serviceIntro}
                </p>
                <div className="mt-10 flex gap-8 border-t border-warm-200 pt-10">
                  <Link
                    href={`/areas/${city.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-accent"
                  >
                    All {city.name} Services
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-warm-600 transition-colors hover:text-warm-900"
                  >
                    {service.name} Overview
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits — dark, two-col with numbers ────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                What&apos;s Included
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                {service.shortName}{" "}
                <em className="font-light italic text-warm-300">Benefits</em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 lg:grid-cols-2">
              <div className="space-y-0 divide-y divide-warm-800 bg-warm-900">
                {benefitsLeft.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-5 p-8 lg:p-10">
                    <span className="font-display text-4xl font-bold leading-none text-warm-800">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-warm-400 pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-0 divide-y divide-warm-800 bg-warm-900">
                {benefitsRight.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-5 p-8 lg:p-10">
                    <span className="font-display text-4xl font-bold leading-none text-warm-800">
                      {String(i + midpoint + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-warm-400 pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Neighborhoods — light, minimal ────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Service Area
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  {city.name}
                  <br />
                  <em className="font-light italic text-warm-600">
                    Neighborhoods
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
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
            </div>
          </div>
        </section>

        {/* ── FAQ — editorial split with details ───────────────────── */}
        {localizedFaqs.length > 0 && (
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
                  {localizedFaqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group py-8 first:pt-0 last:pb-0"
                    >
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </summary>
                      <p className="mt-4 pr-12 text-base leading-relaxed text-warm-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
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
              Ready for{" "}
              <em className="font-light italic text-warm-300">
                {service.name}
              </em>{" "}
              in {city.name}?
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
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Request Estimate Online
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

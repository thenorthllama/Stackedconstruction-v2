import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, cities, getServiceBySlug } from "@/data/seo";
import { notFound } from "next/navigation";

// ─── Static generation ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

// ─── Dynamic metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://stackedconstruction.co/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const servingCities = cities.filter((c) => c.serviceIntros[service.slug]);

  // Split benefits into two groups for asymmetric layout
  const midpoint = Math.ceil(service.benefits.length / 2);
  const benefitsLeft = service.benefits.slice(0, midpoint);
  const benefitsRight = service.benefits.slice(midpoint);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://stackedconstruction.co/services/${slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://stackedconstruction.co/#business",
      name: "Stacked Construction",
    },
    areaServed: [
      { "@type": "City", name: "Fort Myers" },
      { "@type": "City", name: "Naples" },
      { "@type": "City", name: "Cape Coral" },
      { "@type": "City", name: "Bonita Springs" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://stackedconstruction.co/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://stackedconstruction.co/services/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[70vh] bg-warm-900 lg:min-h-[80vh] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
            role="img"
            aria-label={`${service.name} project by Stacked Construction`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[80vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 eyebrow text-warm-400">
                  Our Services
                </p>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  {service.headline}{" "}
                  <em className="not-italic font-semibold text-accent">
                    {service.headlineItalic}
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
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* ── Kitchen cost calculator promo — kitchen page only ──────── */}
        {service.slug === "kitchen-remodeling" && (
          <section className="bg-warm-50 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="flex flex-col items-center gap-8 rounded-2xl border border-warm-200 bg-white p-10 text-center shadow-sm lg:flex-row lg:justify-between lg:text-left">
                <div>
                  <p className="mb-3 eyebrow text-accent">
                    Free Tool
                  </p>
                  <h2 className="font-display text-2xl font-bold leading-tight text-warm-900 sm:text-3xl">
                    Curious what your kitchen remodel really costs?
                  </h2>
                  <p className="mt-3 max-w-xl text-warm-600">
                    Answer a few questions about your cabinets, countertops & finishes
                    and get an instant, personalized price range — no phone call
                    required.
                  </p>
                </div>
                <Link
                  href="/kitchen-cost-calculator"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-warm-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-warm-800"
                >
                  Try the Cost Calculator →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Philosophy / Intro — editorial split ──────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">
                  Our Approach
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Why Stacked
                  <br />
                  <em className="not-italic font-semibold text-accent-dark">
                    for {service.shortName}
                  </em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  {service.intro}
                </p>
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
                      5/5
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Rating
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      10+
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included — dark, asymmetric two-col ────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-24 lg:py-36 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 eyebrow text-warm-500">
                What&apos;s Included
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                {service.shortName}{" "}
                <em className="not-italic font-semibold text-accent">
                  Scope of Work
                </em>
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
        </div>
        </section>

        {/* ── Process strip — inline, editorial ─────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 eyebrow text-warm-500">
                  How It Works
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  From Vision
                  <br />
                  <em className="not-italic font-semibold text-accent-dark">to Reality</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-600">
                  A transparent process that keeps you informed and in control at every stage.
                </p>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {[
                  { step: "01", title: "Free Consultation", desc: "We visit your home, listen to your vision, assess the space, and discuss your goals and budget — no pressure, no commitment." },
                  { step: "02", title: "Detailed Proposal", desc: "You receive a clear, line-item estimate with material options, a realistic timeline, and a transparent scope of work." },
                  { step: "03", title: "Expert Build", desc: "Our skilled crew brings your project to life with quality materials, clean job sites, and consistent progress updates." },
                  { step: "04", title: "Final Walk-Through", desc: "We walk every detail together. If anything isn't perfect, we make it right before the project is complete." },
                ].map((s) => (
                  <div key={s.step} className="py-10 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-6">
                      <span className="font-display text-5xl font-bold leading-none text-warm-200">
                        {s.step}
                      </span>
                      <div>
                        <h3 className="mb-2 font-display text-xl font-semibold text-warm-900">
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-warm-600">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Areas — dark, editorial grid ──────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-24 lg:py-36 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="mb-4 eyebrow text-warm-500">
                  Where We Work
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  {service.shortName} Experts
                  <br />
                  <em className="not-italic font-semibold text-accent">
                    Across SWFL
                  </em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-500">
                  We provide expert {service.name.toLowerCase()} across three
                  counties and six major cities in Southwest Florida.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="space-y-0 divide-y divide-warm-800">
                  {servingCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/areas/${city.slug}/${service.slug}`}
                      className="group flex items-center justify-between py-6 transition-colors"
                    >
                      <div>
                        <span className="font-display text-2xl font-semibold text-white transition-colors group-hover:text-warm-300">
                          {city.name}
                        </span>
                        <span className="ml-4 text-xs font-medium uppercase tracking-widest text-warm-600">
                          {city.county}
                        </span>
                      </div>
                      <svg
                        className="h-5 w-5 text-warm-600 transition-all group-hover:translate-x-1 group-hover:text-warm-300"
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
        </div>
        </section>

        {/* ── FAQ — open, editorial ─────────────────────────────────── */}
        {service.faqs.length > 0 && (
          <section className="bg-warm-50 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="mb-4 eyebrow text-warm-500">
                    Common Questions
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                    Frequently
                    <br />
                    <em className="not-italic font-semibold text-accent-dark">Asked</em>
                  </h2>
                </div>
                <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                  {service.faqs.map((faq, i) => (
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

              {/* Mid-page CTA — for homeowners who are ready after reading FAQs */}
              <div className="mt-16 border-t border-warm-200 pt-12 lg:mt-20 lg:pt-14">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="eyebrow text-warm-500">
                      Start Your Project
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold leading-snug text-warm-900 sm:text-3xl">
                      Questions answered?{" "}
                      <em className="not-italic font-semibold text-accent-dark">
                        Let&apos;s talk.
                      </em>
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="tel:+12397850166"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-warm-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-warm-800"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Call (239) 785-0166
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-warm-300 px-6 py-3 text-sm font-medium text-warm-700 transition-all hover:border-warm-500 hover:text-warm-900"
                    >
                      Get Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA — immersive, full-bleed ──────────────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-28 lg:py-40 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 eyebrow text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to Discuss{" "}
              <em className="not-italic font-semibold text-accent">
                Your {service.shortName} Project?
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no
              obligation — just an honest conversation about your vision and a
              clear path forward.
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
        </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

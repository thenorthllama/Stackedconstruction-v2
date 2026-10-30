import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, cities, getServiceBySlug } from "@/data/seo";
import { planSteps, promises } from "@/data/brand";
import { notFound } from "next/navigation";
import { HeroImage } from "@/components/ui/hero-image";
import { serviceHeroes, pageHeroes } from "@/data/images";
import { getProjectsByService } from "@/data/projects";
import RelatedProjects from "@/components/RelatedProjects";

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
    title: { absolute: service.metaTitle },
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
      <main id="main">
        {/* ── Hero — cinematic, image-led ───────────────────────────── */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[70vh] bg-warm-900 lg:min-h-[80vh] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <HeroImage {...(serviceHeroes[service.slug] ?? pageHeroes.default)} />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/65 to-warm-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[80vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 eyebrow text-warm-400">
                  Our Services
                </p>
                <h1 className="max-w-5xl font-display text-[2.25rem] font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  {service.headline}{" "}
                  <em className="not-italic">
                    {service.headlineItalic}
                  </em>
                </h1>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Request a Consultation
              </a>
              <a
                href="tel:+12397850166"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Call (239) 785-0166
              </a>
                </div>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-base leading-relaxed text-warm-200">
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
              <div className="flex flex-col items-center gap-8 rounded-2xl border border-warm-200 bg-white p-10 text-center lg:flex-row lg:justify-between lg:text-left">
                <div>
                  <p className="mb-3 eyebrow text-warm-700">
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
                <p className="mb-4 eyebrow text-warm-600">
                  What usually goes wrong
                </p>
                <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-[2.5rem]">
                  What most people learn too late
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-700">
                  You shouldn&apos;t have to chase anyone for an update, and you
                  shouldn&apos;t learn what something costs after it&apos;s
                  built.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-700 lg:text-xl">
                  {service.intro}
                </p>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-warm-200 pt-10">
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      40+
                    </p>
                    <p className="mt-1 text-sm font-medium text-warm-600">
                      Projects
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      5/5
                    </p>
                    <p className="mt-1 text-sm font-medium text-warm-600">
                      Rating
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">
                      10+
                    </p>
                    <p className="mt-1 text-sm font-medium text-warm-600">
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
              <p className="mb-4 eyebrow text-warm-300">
                What&apos;s Included
              </p>
              <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-white sm:text-5xl">
                {service.shortName}{" "}
                <em className="not-italic">
                  Scope of Work
                </em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 lg:grid-cols-2">
              <div className="space-y-0 divide-y divide-warm-800 bg-warm-900">
                {benefitsLeft.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-5 p-8 lg:p-10">
                    <span className="font-display text-4xl font-bold leading-none text-warm-800">
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-warm-200 pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-0 divide-y divide-warm-800 bg-warm-900">
                {benefitsRight.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-5 p-8 lg:p-10">
                    <span className="font-display text-4xl font-bold leading-none text-warm-800">
                      {i + midpoint + 1}
                    </span>
                    <p className="text-base leading-relaxed text-warm-200 pt-1">
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
                <p className="mb-4 eyebrow text-warm-600">
                  How we work
                </p>
                <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-[2.5rem]">
                  You&apos;ll always know{" "}<em className="not-italic">
                    the next step
                  </em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-700">
                  Three steps from first conversation to final walk-through. No
                  mystery about what happens after you call.
                </p>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {[
                  ...planSteps.map((p) => ({ step: p.number, title: p.title, desc: p.body })),
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
                        <p className="text-base leading-relaxed text-warm-700">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-12 rounded-3xl bg-white p-7 lg:p-8">
                  <p className="font-display text-lg font-semibold text-warm-900">
                    What you can hold us to
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {promises.map((promise) => (
                      <li
                        key={promise}
                        className="flex items-start gap-2.5 text-base leading-relaxed text-warm-700"
                      >
                        <span
                          className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-accent-dark"
                          aria-hidden="true"
                        />
                        {promise}
                      </li>
                    ))}
                  </ul>
                </div>
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
                <p className="mb-4 eyebrow text-warm-300">
                  Where We Work
                </p>
                <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-white sm:text-[2.5rem]">
                  We may have worked{" "}<em className="not-italic">
                    on your street
                  </em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-300">
                  {service.name} across Naples, Bonita Springs, Fort Myers, and
                  Cape Coral — and the communities around them.
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
                        <span className="ml-4 text-sm font-medium text-warm-300">
                          {city.county}
                        </span>
                      </div>
                      <svg
                        className="h-5 w-5 text-warm-300 transition-all group-hover:translate-x-1 group-hover:text-warm-300"
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

        <RelatedProjects
          projects={getProjectsByService(service.slug)}
          heading={`Recent ${service.name.toLowerCase()} projects`}
          intro="Finished homes across Southwest Florida, photographed as we handed them over."
        />

        {/* ── FAQ — open, editorial ─────────────────────────────────── */}
        {service.faqs.length > 0 && (
          <section className="bg-warm-50 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="mb-4 eyebrow text-warm-600">
                    Common Questions
                  </p>
                  <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-[2.5rem]">
                    Frequently{" "}<em className="not-italic">Asked</em>
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
                          className="mt-1 h-5 w-5 shrink-0 text-warm-600 transition-transform group-open:rotate-45"
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
                      <p className="mt-4 pr-12 text-base leading-relaxed text-warm-700">
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
                    <p className="eyebrow text-warm-600">
                      Start Your Project
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold leading-snug text-warm-900 sm:text-3xl">
                      Questions answered?{" "}
                      <em className="not-italic">
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
                      className="inline-flex items-center justify-center rounded-full border border-warm-300 px-6 py-3 text-sm font-medium text-warm-900 transition-all hover:border-warm-500 hover:text-warm-900"
                    >
                      Request a Consultation
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
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 eyebrow text-warm-400">
              Start the conversation
            </p>
            <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-white sm:text-5xl">
              Tell us about your{" "}
              <em className="not-italic">
                {service.shortName.toLowerCase()}
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-300">
              We come to you and tell you honestly what&apos;s realistic. No charge, no
              obligation — just a straight conversation about your project and a
              clear path forward.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Request a Consultation
              </a>
              <a
                href="tel:+12397850166"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Call (239) 785-0166
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

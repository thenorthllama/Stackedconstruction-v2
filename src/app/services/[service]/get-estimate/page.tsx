import type { Metadata } from "next";
import Link from "next/link";
import { services, cities, getServiceBySlug } from "@/data/seo";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingForm from "@/components/LandingForm";

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
    title: `Get a Free ${service.name} Estimate | Stacked Construction`,
    description: `Request your free ${service.name.toLowerCase()} estimate from Stacked Construction. Serving Fort Myers, Naples, Cape Coral & all of Southwest Florida. Licensed & insured.`,
    robots: { index: false, follow: false },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const servingCities = cities.filter((c) => c.serviceIntros[service.slug]);

  const midpoint = Math.ceil(service.benefits.length / 2);
  const benefitsLeft = service.benefits.slice(0, midpoint);
  const benefitsRight = service.benefits.slice(midpoint);

  return (
    <>
      <Header />
      <main>
        {/* ── Full-screen hero with vertically centered content ──── */}
        <section className="relative flex min-h-screen items-center bg-warm-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label={`${service.name} project by Stacked Construction`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/95 via-warm-900/80 to-warm-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/40 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left — headline & trust signals */}
              <div className="lg:col-span-6">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                  Free Estimate
                </p>
                <h1 className="max-w-xl font-display text-4xl font-bold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                  {service.headline}{" "}
                  <em className="font-light italic text-warm-300">
                    {service.headlineItalic}
                  </em>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-400">
                  {service.description}
                </p>

                {/* Trust signals */}
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-warm-700/50 pt-10">
                  <div>
                    <p className="font-display text-3xl font-bold text-white lg:text-4xl">150+</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Projects
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white lg:text-4xl">5/5</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Rating
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white lg:text-4xl">10+</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">
                      Years
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-700/50">
                    <svg className="h-5 w-5 text-warm-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-warm-400">Licensed &amp; Insured &bull; Free Estimates &bull; No Obligation</p>
                </div>
              </div>

              {/* Right — multi-step form */}
              <div className="lg:col-span-5 lg:col-start-8">
                <LandingForm serviceName={service.name} serviceSlug={service.slug} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy / Intro — editorial split ──────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Our Approach
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Why Stacked
                  <br />
                  <em className="font-light italic text-warm-600">
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
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                What&apos;s Included
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                {service.shortName}{" "}
                <em className="font-light italic text-warm-300">
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
        </section>

        {/* ── Process strip — inline, editorial ─────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  How It Works
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  From Vision
                  <br />
                  <em className="font-light italic text-warm-600">to Reality</em>
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
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Where We Work
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  {service.shortName} Experts
                  <br />
                  <em className="font-light italic text-warm-300">
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
        </section>

        {/* ── FAQ — open, editorial ─────────────────────────────────── */}
        {service.faqs.length > 0 && (
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
            </div>
          </section>
        )}

        {/* ── CTA — immersive, full-bleed ──────────────────────────── */}
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
              Ready to Discuss{" "}
              <em className="font-light italic text-warm-300">
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
                href="#top"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Fill Out the Form
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

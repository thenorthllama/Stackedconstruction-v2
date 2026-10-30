import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/seo";
import { HeroImage } from "@/components/ui/hero-image";
import { pageHeroes, serviceHeroes } from "@/data/images";

export const metadata: Metadata = {
  title: { absolute: "Design-Build Services in Southwest Florida | Stacked" },
  description:
    "Kitchen, bathroom, outdoor living, whole-home renovation, and flooring across Southwest Florida. One team designs and builds it. Licensed \u2014 FL #CBC1269972.",
  alternates: {
    canonical: "https://stackedconstruction.co/services",
  },
  openGraph: {
    title: "Design-Build Services | Stacked Construction",
    description:
      "Premium remodeling services in Fort Myers, Naples, Cape Coral, and all of SWFL.",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* ── Hero — cinematic ─────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[60vh] bg-warm-900 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <HeroImage {...pageHeroes.services} />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/65 to-warm-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 eyebrow text-warm-300">
                What we do
              </p>
              <h1 className="max-w-5xl font-display text-[2.25rem] font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Design and build,{" "}
                <em className="not-italic">
                  under one roof
                </em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-200">
                Kitchens, bathrooms, outdoor living, and whole-home
                renovations. Whichever you start with, one team designs it,
                prices it line by line, and builds it.
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* ── Services — alternating editorial blocks ──────────────── */}
        <section className="bg-warm-50">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`${isEven ? "bg-white" : "bg-warm-50"}`}
              >
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
                  <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    {/* Photo side */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "" : "lg:col-start-8 lg:row-start-1"
                      }`}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-warm-100"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <Image
                          src={(serviceHeroes[service.slug] ?? pageHeroes.default).src}
                          alt={(serviceHeroes[service.slug] ?? pageHeroes.default).alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                        />
                      </Link>
                    </div>

                    {/* Content side */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven
                          ? "lg:col-start-7"
                          : "lg:col-start-1 lg:row-start-1"
                      }`}
                    >
                      <p className="mb-3 text-sm font-semibold text-warm-600">
                        {service.shortName}
                      </p>
                      <h2 className="font-display text-3xl font-bold leading-[1.1] text-warm-900 sm:text-4xl lg:text-5xl">
                        {service.headline}{" "}
                        <em className="not-italic">
                          {service.headlineItalic}
                        </em>
                      </h2>
                      <p className="mt-5 text-base leading-relaxed text-warm-700 lg:text-lg">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-accent"
                      >
                        Explore {service.shortName}
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
            );
          })}
        </section>

        {/* ── CTA — immersive ──────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-28 lg:py-40 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <h2 className="font-display text-[1.75rem] font-bold leading-[1.05] text-white sm:text-5xl">
              Not Sure Where{" "}
              <em className="not-italic">to Start?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-300">
              That&apos;s what the free consultation is for. Tell us about your
              home and your goals, and we&apos;ll help you find the right path
              forward.
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
    </>
  );
}

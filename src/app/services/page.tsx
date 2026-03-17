import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/seo";

export const metadata: Metadata = {
  title: "Our Services | Stacked Construction – Southwest Florida Remodeling",
  description:
    "Kitchen remodeling, bathroom renovation, outdoor living, full home renovation, and flooring & tile services across Southwest Florida. Licensed contractor. Free estimate.",
  openGraph: {
    title: "Our Services | Stacked Construction",
    description:
      "Premium remodeling services in Fort Myers, Naples, Cape Coral, and all of SWFL.",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero — cinematic ─────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label="Premium remodeling by Stacked Construction"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                What We Do
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Our{" "}
                <em className="font-light italic text-warm-300">Services</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                From kitchens and bathrooms to full home renovations and outdoor
                living, we bring your vision to life with expert craftsmanship
                and transparent pricing.
              </p>
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
                    {/* Number + label side */}
                    <div
                      className={`lg:col-span-4 ${
                        isEven ? "" : "lg:col-start-9 lg:row-start-1"
                      }`}
                    >
                      <span className="block font-display text-8xl font-bold leading-none text-warm-200 lg:text-9xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                        {service.shortName}
                      </p>
                    </div>

                    {/* Content side */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven
                          ? "lg:col-start-6"
                          : "lg:col-start-1 lg:row-start-1"
                      }`}
                    >
                      <h2 className="font-display text-3xl font-bold leading-[1.1] text-warm-900 sm:text-4xl lg:text-5xl">
                        {service.headline}{" "}
                        <em className="font-light italic text-warm-600">
                          {service.headlineItalic}
                        </em>
                      </h2>
                      <p className="mt-5 text-base leading-relaxed text-warm-600 lg:text-lg">
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
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Not Sure Where{" "}
              <em className="font-light italic text-warm-300">to Start?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              That&apos;s what the free consultation is for. Tell us about your
              home and your goals, and we&apos;ll help you find the right path
              forward.
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

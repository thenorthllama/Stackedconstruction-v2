import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryContent from "./gallery-content";

export const metadata: Metadata = {
  title:
    "Gallery | Stacked Construction – Kitchen, Bath & Home Remodeling in SWFL",
  description:
    "Browse our gallery of premium kitchen remodels, bathroom renovations, outdoor living spaces, and whole-home transformations across Fort Myers, Naples, and Southwest Florida.",
  alternates: {
    canonical: "https://stackedconstruction.co/gallery",
  },
  openGraph: {
    title:
      "Gallery | Stacked Construction – Kitchen, Bath & Home Remodeling in SWFL",
    description:
      "Browse our gallery of premium kitchen remodels, bathroom renovations, outdoor living spaces, and whole-home transformations across Southwest Florida.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/kitchen-modern-island.jpg')" }}
            role="img"
            aria-label="Stacked Construction project gallery"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                Our Portfolio
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Project{" "}
                <em className="font-light italic text-warm-300">Gallery</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                Every project tells a story of collaboration, craftsmanship, and
                attention to detail. Explore our work across Southwest Florida.
              </p>
            </div>
          </div>
        </section>

        {/* ── Interactive filter + grid ───────────────────────────── */}
        <GalleryContent />

        {/* ── Stats Bar ────────────────────────────────────────────── */}
        <section className="bg-warm-900 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Years Experience" },
                { value: "3", label: "Counties Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-5xl font-bold text-white lg:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-warm-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/kitchen-luxury-white.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to Build{" "}
              <em className="font-light italic text-warm-300">
                Something Beautiful?
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Every great project starts with a conversation. Tell us about your
              vision and we&apos;ll show you what&apos;s possible.
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
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Camila Lage — Interior Design Consultant | Stacked Construction",
  description:
    "Camila Lage is an interior design consultant at Stacked Construction, specializing in kitchen and bathroom design, material selection, and remodeling guidance for Southwest Florida homeowners.",
  alternates: {
    canonical: "https://stackedconstruction.co/about/camila-lage",
  },
  openGraph: {
    title: "Camila Lage — Interior Design Consultant | Stacked Construction",
    description:
      "Camila Lage helps Southwest Florida homeowners design beautiful, functional spaces — from kitchen layouts to bathroom finishes and outdoor living areas.",
  },
};

const articles = [
  { title: "Kitchen Design Trends in Southwest Florida for 2026", href: "/blog/kitchen-design-trends-swfl-2026" },
  { title: "Bathroom Remodel Design Guide for SWFL Homeowners", href: "/blog/bathroom-remodel-design-guide-swfl" },
  { title: "Best Countertop Materials for Florida Homes", href: "/blog/best-countertop-materials-florida" },
  { title: "Open Concept Kitchen Remodeling in Southwest Florida", href: "/blog/open-concept-kitchen-remodeling-swfl" },
  { title: "Outdoor Kitchen Design Ideas for Southwest Florida", href: "/blog/outdoor-kitchen-design-ideas-swfl" },
];

export default function CamilaLagePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Camila Lage",
    jobTitle: "Interior Design Consultant",
    url: "https://stackedconstruction.co/about/camila-lage",
    description:
      "Camila Lage is an interior design consultant at Stacked Construction, helping Southwest Florida homeowners navigate material selections, design layouts, and aesthetic decisions for kitchen, bathroom, and full-home remodeling projects.",
    knowsAbout: [
      "Kitchen Design",
      "Bathroom Design",
      "Interior Design",
      "Material Selection",
      "Countertops",
      "Cabinet Design",
      "Tile & Flooring",
      "Color Palettes",
      "Outdoor Living Design",
    ],
    worksFor: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://stackedconstruction.co/#business",
      name: "Stacked Construction",
      url: "https://stackedconstruction.co",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://stackedconstruction.co/about" },
      { "@type": "ListItem", position: 3, name: "Camila Lage", item: "https://stackedconstruction.co/about/camila-lage" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900 lg:min-h-[70vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
            role="img"
            aria-label="Camila Lage, Interior Design Consultant at Stacked Construction"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/95 via-warm-900/70 to-warm-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Link
                  href="/about"
                  className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400 transition-colors hover:text-warm-200"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  About Stacked Construction
                </Link>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  Camila{" "}
                  <em className="font-light italic text-warm-300">Lage</em>
                </h1>
                <p className="mt-4 text-lg font-medium text-warm-400">
                  Interior Design Consultant
                </p>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    Helping SWFL homeowners translate vision into beautifully executed spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bio ──────────────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  About Camila
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Design With
                  <br />
                  <em className="font-light italic text-warm-600">Purpose</em>
                </h2>
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Kitchen &amp; Bathroom Design Specialist</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Material selection &amp; finish coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">SWFL climate &amp; lifestyle expertise</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-6 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  <p>
                    Camila Lage is the interior design consultant at Stacked Construction,
                    bringing a trained design eye to every kitchen, bathroom, and full-home
                    remodeling project in Southwest Florida. She helps homeowners move
                    confidently from concept to final finish selection — bridging the gap
                    between what they envision and what is structurally and aesthetically
                    achievable within their budget.
                  </p>
                  <p>
                    Camila specializes in space planning, material selection, and the
                    functional details that separate a beautiful kitchen from a beautiful
                    and practical one. Her understanding of SWFL's climate — the humidity,
                    the salt air near the coast, the sun-drenched outdoor living demands —
                    informs every recommendation she makes.
                  </p>
                  <p>
                    Through her writing for Stacked Construction's resource library, Camila
                    translates complex design decisions into clear, actionable guidance for
                    homeowners who want to make informed choices before breaking ground.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise ─────────────────────────────────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                Design Specialties
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                Where Camila{" "}
                <em className="font-light italic text-warm-300">Focuses</em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Kitchen Layouts", desc: "Workflow optimization, island sizing, cabinet configuration, and open-concept conversions." },
                { title: "Material Selection", desc: "Countertops, backsplashes, cabinet finishes, and flooring — chosen for durability and aesthetic cohesion." },
                { title: "Bathroom Design", desc: "Spa-inspired master baths, practical guest baths, and aging-in-place modifications that don't sacrifice style." },
                { title: "Outdoor Living", desc: "Covered lanais, outdoor kitchens, and pool-adjacent spaces designed for year-round Florida living." },
                { title: "Color & Finish Coordination", desc: "Cohesive palettes that complement SWFL architecture and stand up to Florida's sun and humidity." },
                { title: "Design Education", desc: "Writing detailed guides that help homeowners understand their options before committing to major decisions." },
              ].map((item, i) => (
                <div key={i} className="bg-warm-900 p-8 lg:p-10">
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-warm-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles by Camila ────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Written by Camila
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Design
                  <br />
                  <em className="font-light italic text-warm-600">Guides</em>
                </h2>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {articles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group flex items-center justify-between py-8 first:pt-0 last:pb-0"
                  >
                    <p className="font-display text-lg font-semibold leading-snug text-warm-900 transition-colors group-hover:text-warm-600 pr-4">
                      {article.title}
                    </p>
                    <svg className="h-5 w-5 shrink-0 text-warm-400 transition-all group-hover:translate-x-1 group-hover:text-warm-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                ))}
                <div className="pt-8">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-warm-600">
                    View all articles
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: "url('/images/hero-bg.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">Start Your Project</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to Design{" "}
              <em className="font-light italic text-warm-300">Your Space?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Contact Stacked Construction for a free consultation and let us help you bring your vision to life.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+12397850166" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100">
                Call (239) 785-0166
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10">
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

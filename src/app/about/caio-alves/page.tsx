import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caio Alves — Project Manager & Remodeling Specialist | Stacked Construction",
  description:
    "Caio Alves is a project manager and remodeling specialist at Stacked Construction, guiding Southwest Florida homeowners through every stage of their kitchen, bathroom, and home renovation projects.",
  alternates: {
    canonical: "https://stackedconstruction.co/about/caio-alves",
  },
  openGraph: {
    title: "Caio Alves — Project Manager & Remodeling Specialist | Stacked Construction",
    description:
      "Caio Alves manages remodeling projects for Stacked Construction across Southwest Florida, ensuring quality, timelines, and homeowner satisfaction at every stage.",
  },
};

const articles = [
  { title: "Kitchen Remodel Cost in Cape Coral: What to Expect", href: "/blog/kitchen-remodel-cost-cape-coral" },
  { title: "Is It Worth Remodeling a Home in Southwest Florida?", href: "/blog/is-it-worth-remodeling-florida" },
  { title: "Hurricane-Resistant Home Renovation Tips for SWFL Homeowners", href: "/blog/hurricane-resistant-home-renovation-swfl" },
  { title: "Pool Deck Renovation Options for Fort Myers and Naples Homes", href: "/blog/pool-deck-renovation-fort-myers-naples" },
  { title: "The Rise of the Butler's Pantry: A Hidden Scullery Kitchen", href: "/blog/butlers-pantry-design-naples" },
];

export default function CaioAlvesPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caio Alves",
    jobTitle: "Project Manager & Remodeling Specialist",
    url: "https://stackedconstruction.co/about/caio-alves",
    description:
      "Caio Alves is a project manager and remodeling specialist at Stacked Construction, overseeing kitchen, bathroom, and full-home renovation projects across Southwest Florida. He ensures clients stay informed, timelines are met, and finished projects exceed expectations.",
    knowsAbout: [
      "Project Management",
      "Home Renovation",
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Florida Building Permits",
      "Construction Scheduling",
      "Subcontractor Coordination",
      "Client Communication",
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
      { "@type": "ListItem", position: 3, name: "Caio Alves", item: "https://stackedconstruction.co/about/caio-alves" },
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
            aria-label="Caio Alves, Project Manager at Stacked Construction"
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
                  Caio{" "}
                  <em className="font-light italic text-warm-300">Alves</em>
                </h1>
                <p className="mt-4 text-lg font-medium text-warm-400">
                  Project Manager &amp; Remodeling Specialist
                </p>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    Keeping projects on track, clients informed, and workmanship standards uncompromising.
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
                <p className="mb-4 eyebrow text-warm-500">
                  About Caio
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Execution
                  <br />
                  <em className="font-light italic text-warm-600">Without Compromise</em>
                </h2>
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Project scheduling &amp; oversight</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Florida permitting &amp; code compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Subcontractor coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Serving Lee &amp; Collier counties</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-6 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  <p>
                    Caio Alves is a project manager and remodeling specialist at Stacked
                    Construction, responsible for overseeing the day-to-day execution of
                    kitchen, bathroom, and full-home renovation projects across Southwest
                    Florida. His role sits at the intersection of client communication,
                    construction coordination, and quality control.
                  </p>
                  <p>
                    Caio manages the scheduling of subcontractors, tracks progress against
                    project milestones, and ensures that every job site meets Stacked
                    Construction&apos;s standards for cleanliness, organization, and workmanship.
                    When issues arise — and in remodeling, they always do — Caio is the
                    person who surfaces them quickly and works with the team to resolve
                    them before they affect the homeowner.
                  </p>
                  <p>
                    Through his writing for Stacked Construction&apos;s blog, Caio shares
                    practical guides on topics homeowners care about: permit requirements,
                    project timelines, hurricane season planning, and what to expect at
                    each stage of a renovation.
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
              <p className="mb-4 eyebrow text-warm-500">
                Operational Expertise
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                What Caio{" "}
                <em className="font-light italic text-warm-300">Manages</em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Project Scheduling", desc: "Realistic timelines built around material lead times, permit windows, and trade availability in SWFL." },
                { title: "Quality Control", desc: "Daily site checks to ensure workmanship standards are met at every stage of the build." },
                { title: "Permit Coordination", desc: "Navigating Lee and Collier county permit requirements so homeowners don't have to." },
                { title: "Subcontractor Management", desc: "Coordinating electricians, plumbers, tile installers, and other trades on a clear, accountable schedule." },
                { title: "Client Updates", desc: "Consistent progress updates that keep homeowners informed without overwhelming them with detail." },
                { title: "Problem Resolution", desc: "Fast identification and resolution of on-site issues before they escalate or affect the project timeline." },
              ].map((item, i) => (
                <div key={i} className="bg-warm-900 p-8 lg:p-10">
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-warm-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles by Caio ──────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">
                  Written by Caio
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Planning
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
            <p className="mb-5 eyebrow text-warm-500">Start Your Project</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Plan{" "}
              <em className="font-light italic text-warm-300">Your Remodel</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule a free consultation and we&apos;ll walk you through a realistic timeline and clear plan for your project.
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

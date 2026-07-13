import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAuthorBySlug } from "@/data/authors";

const author = getAuthorBySlug("junior-da-silva")!;

export const metadata: Metadata = {
  title: "Junior Da Silva — Founder & Licensed Contractor | Stacked Construction",
  description: author.shortBio,
  alternates: {
    canonical: "https://stackedconstruction.co/about/junior-da-silva",
  },
  authors: [{ name: author.name, url: author.schemaUrl }],
  openGraph: {
    title: "Junior Da Silva — Founder & Licensed Contractor | Stacked Construction",
    description: author.shortBio,
  },
};

const featuredArticles = [
  { title: "How Much Does a Kitchen Remodel Cost in Fort Myers? (2026 Guide)", href: "/blog/kitchen-remodel-cost-fort-myers" },
  { title: "Kitchen Remodel Cost in Cape Coral 2026", href: "/blog/kitchen-remodel-cost-cape-coral" },
  { title: "Full Home Renovation Budget Guide for Southwest Florida", href: "/blog/home-renovation-budget-guide-swfl" },
  { title: "Best Time to Remodel in Southwest Florida", href: "/blog/best-time-to-remodel-swfl" },
  { title: "How to Hire a Remodeling Contractor in SWFL", href: "/blog/how-to-hire-remodeling-contractor-swfl" },
];

export default function JuniorDaSilvaPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://stackedconstruction.co/about/junior-da-silva",
    name: author.name,
    jobTitle: author.title,
    url: author.schemaUrl,
    description: author.fullBio[0],
    knowsAbout: author.specialties,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Florida Certified Building Contractor",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business and Professional Regulation",
        url: "https://www.myfloridalicense.com",
      },
      identifier: "CBC1269972",
    },
    worksFor: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://stackedconstruction.co/#business",
      name: "Stacked Construction",
      url: "https://stackedconstruction.co",
    },
    founder: "https://stackedconstruction.co/#business",
    knowsLanguage: ["en", "pt"],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61586672805182",
      "https://www.instagram.com/stackedconstruction/",
      "https://www.linkedin.com/company/111945969/",
    ],
    colleague: [
      { "@id": "https://stackedconstruction.co/about/camila-lage" },
      { "@id": "https://stackedconstruction.co/about/caio-alves" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://stackedconstruction.co/about" },
      { "@type": "ListItem", position: 3, name: "Junior Da Silva", item: "https://stackedconstruction.co/about/junior-da-silva" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900 lg:min-h-[70vh]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg.webp')" }} role="img" aria-label="Junior Da Silva, Founder of Stacked Construction" />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/95 via-warm-900/70 to-warm-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Link href="/about" className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400 transition-colors hover:text-warm-200">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                  About Stacked Construction
                </Link>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  Junior{" "}<em className="font-light italic text-warm-300">Da Silva</em>
                </h1>
                <p className="mt-4 text-lg font-medium text-warm-400">{author.title}</p>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">FL License #CBC1269972</p>
                  <p className="mt-2 text-sm leading-relaxed text-warm-400">~{author.yearsExperience} years of hands-on remodeling experience across SWFL.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credentials strip — directly below hero ───────────────── */}
        <section className="bg-warm-900 border-t border-warm-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6">
              {author.credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  {cred.verifyUrl ? (
                    <a href={cred.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-warm-300 transition-colors hover:text-white">
                      {cred.value}
                      <span className="ml-1 text-warm-600 text-xs">(verify ↗)</span>
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-warm-400">{cred.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bio ──────────────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">About Junior</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  The Person<br />
                  <em className="font-light italic text-warm-600">Behind the Work</em>
                </h2>
                <div className="mt-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">
                      <a href="https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=CBC1269972" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 transition-colors hover:text-warm-900">FL License #CBC1269972</a> — Publicly verifiable
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">~{author.yearsExperience} years of remodeling experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Serving Lee &amp; Collier counties</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">{author.projectCount} completed projects in SWFL</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                    <p className="text-sm text-warm-600">Speaks English &amp; Portuguese</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/about/credentials" className="inline-flex items-center gap-2 text-sm font-semibold text-warm-900 border border-warm-300 rounded-full px-5 py-2.5 transition-all hover:bg-warm-900 hover:text-white hover:border-warm-900">
                    View all credentials →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-6 text-lg leading-[1.8] text-warm-600 lg:text-xl">
                  {author.fullBio.map((para, i) => <p key={i}>{para}</p>)}
                </div>
                <div className="mt-10 grid grid-cols-3 gap-8 border-t border-warm-200 pt-10">
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">{author.yearsExperience}yr</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">{author.projectCount}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">Projects</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-warm-900 lg:text-4xl">5/5</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-warm-500">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise ─────────────────────────────────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 eyebrow text-warm-500">Areas of Expertise</p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                Deep Knowledge,{" "}<em className="font-light italic text-warm-300">Real Experience</em>
              </h2>
            </div>
            <div className="grid gap-px bg-warm-800 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Kitchen Remodeling", desc: "Custom cabinetry, countertop selection, layout redesigns, and complete kitchen transformations across SWFL." },
                { title: "Bathroom Renovation", desc: "Walk-in showers, spa-inspired vanities, tile work, and aging-in-place modifications." },
                { title: "Full Home Renovation", desc: "Complete interior overhauls — coordinating trades, managing timelines, and delivering cohesive results." },
                { title: "Outdoor Living & Kitchens", desc: "Lanai enclosures, outdoor kitchens, pool decks, and covered living spaces built for Florida's climate." },
                { title: "Florida Building Codes", desc: "Deep familiarity with Lee and Collier county permitting requirements and inspection processes." },
                { title: "Project Management", desc: "Structured scheduling, subcontractor coordination, and client communication from start to final walk-through." },
              ].map((item, i) => (
                <div key={i} className="bg-warm-900 p-8 lg:p-10">
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-warm-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Articles ─────────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">Written by Junior</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Expert<br /><em className="font-light italic text-warm-600">Articles</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-600">Practical guides for Southwest Florida homeowners planning their next remodeling project.</p>
              </div>
              <div className="space-y-0 divide-y divide-warm-200 lg:col-span-7 lg:col-start-6">
                {featuredArticles.map((article) => (
                  <Link key={article.href} href={article.href} className="group flex items-center justify-between py-8 first:pt-0 last:pb-0">
                    <p className="font-display text-lg font-semibold leading-snug text-warm-900 transition-colors group-hover:text-warm-600 pr-4">{article.title}</p>
                    <svg className="h-5 w-5 shrink-0 text-warm-400 transition-all group-hover:translate-x-1 group-hover:text-warm-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                ))}
                <div className="pt-8">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-warm-600">
                    View all articles
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
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
              Work Directly{" "}<em className="font-light italic text-warm-300">With Junior</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule a free in-home consultation and speak directly with Junior about your vision, budget, and timeline.
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

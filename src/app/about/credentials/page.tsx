import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Licenses, Credentials & Certifications | Stacked Construction",
  description:
    "Stacked Construction holds Florida Certified Building Contractor license CBC1269972. View our verified credentials, insurance, and professional qualifications for remodeling in Southwest Florida.",
  alternates: {
    canonical: "https://stackedconstruction.co/about/credentials",
  },
  openGraph: {
    title: "Licenses & Credentials | Stacked Construction",
    description:
      "Florida Certified Building Contractor CBC1269972. Licensed and insured for kitchen remodeling, bathroom renovation, and full-home projects across Lee and Collier counties.",
  },
};

export default function CredentialsPage() {
  const credentialsSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://stackedconstruction.co/#business",
    name: "Stacked Construction",
    url: "https://stackedconstruction.co",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Florida Certified Building Contractor License",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Florida Department of Business and Professional Regulation",
          url: "https://www.myfloridalicense.com",
        },
        identifier: "CBC1269972",
        validFrom: "2020-01-01",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Junior Da Silva",
      url: "https://stackedconstruction.co/about/junior-da-silva",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Florida Certified Building Contractor",
        identifier: "CBC1269972",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Florida Department of Business and Professional Regulation",
        },
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://stackedconstruction.co/about" },
      { "@type": "ListItem", position: 3, name: "Credentials", item: "https://stackedconstruction.co/about/credentials" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[50vh] bg-warm-900 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
            role="img"
            aria-label="Stacked Construction licenses and credentials"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/95 via-warm-900/70 to-warm-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <Link
                href="/about"
                className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400 transition-colors hover:text-warm-200"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                About Stacked Construction
              </Link>
              <h1 className="font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Licenses &amp;{" "}
                <em className="not-italic font-semibold text-accent">Credentials</em>
              </h1>
            </div>
          </div>
        </div>
        </section>

        {/* ── Primary License ───────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">
                  State Licensure
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Florida{" "}
                  <em className="not-italic font-semibold text-accent-dark">Certified</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-600">
                  Hiring a licensed contractor in Florida protects your home, your investment, and your legal rights as a homeowner. Verify ours anytime through the Florida DBPR.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="overflow-hidden rounded-2xl border border-warm-200 bg-white">
                  {/* Primary credential */}
                  <div className="border-b border-warm-100 p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <svg className="h-5 w-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <span className="text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                            Active License
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-warm-900">
                          Florida Certified Building Contractor
                        </h3>
                        <p className="mt-2 text-sm text-warm-600">
                          Issued by the Florida Department of Business and Professional Regulation (DBPR)
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">License Number</p>
                        <p className="mt-1 font-mono text-lg font-bold text-warm-900">CBC1269972</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">License Holder</p>
                        <p className="mt-1 text-sm font-semibold text-warm-900">Junior Da Silva</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">Issuing Authority</p>
                        <p className="mt-1 text-sm text-warm-700">Florida DBPR</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href="https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=CBC1269972"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-warm-300 px-5 py-2.5 text-sm font-semibold text-warm-900 transition-all hover:border-warm-900 hover:bg-warm-900 hover:text-white"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Verify on Florida DBPR
                      </a>
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="border-b border-warm-100 p-8 lg:p-10">
                    <div className="flex items-start gap-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <div>
                        <h3 className="font-display text-xl font-bold text-warm-900">General Liability Insurance</h3>
                        <p className="mt-2 text-sm leading-relaxed text-warm-600">
                          Stacked Construction carries general liability insurance protecting your home and property throughout every project. Certificate of insurance available upon request.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Workers comp */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-4">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <div>
                        <h3 className="font-display text-xl font-bold text-warm-900">Workers Compensation</h3>
                        <p className="mt-2 text-sm leading-relaxed text-warm-600">
                          All work on your property is covered under proper workers compensation, protecting both our team and our clients from liability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Licensing Matters ─────────────────────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-24 lg:py-36 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="mb-4 eyebrow text-warm-500">
                  Homeowner Protection
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Why Licensing{" "}
                  <em className="not-italic font-semibold text-accent">Matters</em>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="space-y-0 divide-y divide-warm-800">
                  {[
                    {
                      title: "Legal Protection",
                      desc: "Florida law requires building contractors to be licensed for permitted work. Hiring an unlicensed contractor voids your homeowner's insurance and leaves you with no legal recourse.",
                    },
                    {
                      title: "Permit Authority",
                      desc: "Only licensed contractors can pull permits in Lee and Collier counties. Unpermitted work must be disclosed at sale and can result in costly corrections.",
                    },
                    {
                      title: "DBPR Accountability",
                      desc: "Licensed contractors are held accountable by the Florida DBPR. Complaints can be filed and licenses can be suspended — which keeps licensed contractors honest.",
                    },
                    {
                      title: "Insurance Validity",
                      desc: "Work performed by unlicensed contractors is typically excluded from homeowner's insurance claims. A licensed contractor ensures your coverage remains intact.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="py-8 first:pt-0 last:pb-0">
                      <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* ── Service Areas Authorized ──────────────────────────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="mb-4 eyebrow text-warm-500">
                  Licensed Service Area
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Where We&apos;re{" "}
                  <em className="not-italic font-semibold text-accent-dark">Authorized</em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { county: "Lee County", cities: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "North Fort Myers"] },
                    { county: "Collier County", cities: ["Naples"] },
                  ].map((area) => (
                    <div key={area.county} className="rounded-xl bg-warm-50 p-6">
                      <h3 className="font-display text-lg font-bold text-warm-900">{area.county}</h3>
                      <ul className="mt-3 space-y-1.5">
                        {area.cities.map((city) => (
                          <li key={city} className="flex items-center gap-2 text-sm text-warm-600">
                            <span className="h-1 w-1 rounded-full bg-warm-400 shrink-0" />
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-warm-600">
                  Our Florida Certified Building Contractor license (CBC1269972) authorizes us to perform residential and commercial construction, remodeling, and renovation work across the entire state of Florida. We primarily serve Naples, Bonita Springs, Fort Myers, and Cape Coral across Lee and Collier counties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team Credentials ──────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12">
              <p className="mb-4 eyebrow text-warm-500">
                Our Team
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                The Experts{" "}
                <em className="not-italic font-semibold text-accent-dark">Behind the Work</em>
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Junior Da Silva",
                  title: "Founder & Licensed Contractor",
                  credential: "FL License #CBC1269972",
                  href: "/about/junior-da-silva",
                  verifyUrl: "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=CBC1269972",
                },
                {
                  name: "Camila Lage",
                  title: "Interior Design Consultant",
                  credential: "Kitchen & Bathroom Design Specialist",
                  href: "/about/camila-lage",
                },
                {
                  name: "Caio Alves",
                  title: "Project Manager",
                  credential: "Permitting & Scheduling Specialist",
                  href: "/about/caio-alves",
                },
              ].map((member) => (
                <div key={member.href} className="rounded-2xl bg-white p-8">
                  <h3 className="font-display text-xl font-bold text-warm-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-warm-600">{member.title}</p>
                  <p className="mt-3 text-xs font-medium text-warm-500">{member.credential}</p>
                  {member.verifyUrl && (
                    <a
                      href={member.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 transition-colors hover:text-green-900"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Verify License
                    </a>
                  )}
                  <div className="mt-4">
                    <Link
                      href={member.href}
                      className="text-sm font-semibold text-warm-900 transition-colors hover:text-warm-600"
                    >
                      View full profile →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative bg-warm-900 py-28 lg:py-40 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: "url('/images/hero-bg.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 eyebrow text-warm-500">Start Your Project</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Work With a Contractor{" "}
              <em className="not-italic font-semibold text-accent">You Can Verify</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Our license, insurance, and credentials are publicly verifiable. Schedule your consultation and ask us anything.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:+12397850166" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100">
                Call (239) 785-0166
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

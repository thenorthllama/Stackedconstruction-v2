import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, getProjectPhotoCount } from "@/data/projects";

export const metadata: Metadata = {
  title: { absolute: "Remodeling Projects in Southwest Florida | Stacked Construction" },
  description:
    "Browse completed kitchen remodels and home renovations across Naples, Bonita Springs, Fort Myers, and Cape Coral. Real projects, real photos, from a licensed Florida contractor.",
  alternates: {
    canonical: "https://stackedconstruction.co/projects",
  },
  openGraph: {
    title: "Remodeling Projects in Southwest Florida | Stacked Construction",
    description:
      "Completed kitchen remodels and home renovations across Naples, Bonita Springs, Fort Myers, and Cape Coral.",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://stackedconstruction.co/projects" },
    ],
  };

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Remodeling Projects in Southwest Florida",
    url: "https://stackedconstruction.co/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `https://stackedconstruction.co/projects/${p.slug}`,
      })),
    },
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[50vh] overflow-hidden rounded-[2rem] bg-warm-900 lg:min-h-[60vh] lg:rounded-[2.5rem]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/projects/modern-wood-kitchen-remodel-naples-01.webp')" }}
              role="img"
              aria-label="Modern walnut kitchen remodel in Naples, Florida by Stacked Construction"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-end px-6 pb-16 pt-40 lg:min-h-[60vh] lg:px-10 lg:pb-24">
              <div className="max-w-3xl">
                <p className="eyebrow mb-5 text-warm-300">Our Work</p>
                <h1 className="font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                  Remodeling{" "}
                  <em className="not-italic font-semibold text-accent">Projects</em>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-200">
                  Completed kitchens and renovations across Naples, Bonita
                  Springs, Fort Myers, and Cape Coral — photographed as they
                  were handed over.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Project list ─────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-5 text-warm-900">Recent case studies</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Built in Your{" "}
                  <em className="not-italic font-semibold text-accent-dark">
                    Neighborhood
                  </em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-warm-600 lg:col-span-5 lg:ml-auto lg:text-right">
                Every project below was designed, permitted, and built by our
                team. Photos are of the finished work — no renderings, no stock.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-20">
              {projects.map((project, i) => (
                <article
                  key={project.slug}
                  className="grid gap-8 border-t border-warm-200 pt-12 lg:grid-cols-12 lg:items-center"
                >
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-lg font-semibold text-warm-400">
                        {String(i + 1).padStart(2, "0")}
                        <span className="text-warm-300"> / {String(projects.length).padStart(2, "0")}</span>
                      </span>
                      <p className="eyebrow text-warm-500">
                        {project.city}, FL
                      </p>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-warm-900 sm:text-4xl">
                      <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent-dark">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-600">
                      {project.summary}
                    </p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-widest text-warm-500">
                      {getProjectPhotoCount(project)} photos · {project.service}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group mt-8 inline-flex items-center gap-3 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-warm-800"
                    >
                      View project
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                    <Link href={`/projects/${project.slug}`} className="group block">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-warm-200">
                        <Image
                          src={project.hero.src}
                          alt={project.hero.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={i === 0}
                        />
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="eyebrow mb-5 justify-center text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
              Want something like{" "}
              <em className="not-italic font-semibold text-accent-dark">this?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-warm-600">
              Tell us about your space and we&apos;ll put together a detailed,
              line-item estimate — no pressure, no obligation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-warm-900 py-2.5 pl-7 pr-2.5 text-sm font-semibold text-white transition-colors hover:bg-warm-800"
              >
                Schedule a Consultation
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+12397850166"
                className="inline-flex items-center justify-center rounded-full border border-warm-900/25 px-8 py-4 text-sm font-medium text-warm-900 transition-all hover:border-warm-900"
              >
                Call (239) 785-0166
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
    </>
  );
}

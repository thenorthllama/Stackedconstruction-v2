import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  projects,
  getProjectBySlug,
  getProjectPhotoCount,
  type ProjectImage,
} from "@/data/projects";

const BASE = "https://stackedconstruction.co";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: { absolute: project.metaTitle },
    description: project.metaDescription,
    alternates: { canonical: `${BASE}/projects/${slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      type: "article",
      images: [{ url: project.hero.src, alt: project.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [project.hero.src],
    },
  };
}

function GalleryImage({
  image,
  sizes,
  priority = false,
}: {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl bg-warm-200 ${
        image.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);
  const photoCount = getProjectPhotoCount(project);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE}/projects` },
      { "@type": "ListItem", position: 3, name: project.shortName, item: `${BASE}/projects/${project.slug}` },
    ],
  };

  const allImages = [
    project.hero,
    ...project.gallery,
    ...(project.sections?.flatMap((s) => s.images) ?? []),
  ];

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${BASE}/projects/${project.slug}#project`,
    name: project.name,
    description: project.summary,
    url: `${BASE}/projects/${project.slug}`,
    creator: { "@id": `${BASE}/#business` },
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: project.city,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    about: {
      "@type": "Service",
      name: project.service,
      url: `${BASE}/services/${project.serviceSlug}`,
      provider: { "@id": `${BASE}/#business` },
      areaServed: { "@type": "City", name: project.city },
    },
    image: allImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${BASE}${img.src}`,
      caption: img.alt,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 pt-2 lg:px-4">
          <div className="relative min-h-[70vh] overflow-hidden rounded-[2rem] bg-warm-900 lg:min-h-[80vh] lg:rounded-[2.5rem]">
            <Image
              src={project.hero.src}
              alt={project.hero.alt}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/55 to-warm-900/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-40 lg:min-h-[80vh] lg:px-10 lg:pb-24">
              <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  {/* Breadcrumb */}
                  <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-widest text-warm-300">
                      <li>
                        <Link href="/projects" className="transition-colors hover:text-white">
                          Projects
                        </Link>
                      </li>
                      <li aria-hidden="true">/</li>
                      <li>
                        <Link
                          href={`/areas/${project.citySlug}`}
                          className="transition-colors hover:text-white"
                        >
                          {project.city}
                        </Link>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                    {project.headline}{" "}
                    <em className="not-italic font-semibold text-accent">
                      {project.headlineAccent}
                    </em>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-200">
                    {project.summary}
                  </p>
                </div>
                <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                  <dl className="space-y-4 border-l border-white/20 pl-6 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-warm-400">Location</dt>
                      <dd className="mt-1 text-white">{project.city}, FL</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-warm-400">Service</dt>
                      <dd className="mt-1 text-white">{project.service}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-warm-400">County</dt>
                      <dd className="mt-1 text-white">{project.county}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro + specs ────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-5 text-warm-500">About the project</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  The{" "}
                  <em className="not-italic font-semibold text-accent-dark">Details</em>
                </h2>
                <p className="mt-6 text-sm text-warm-500">
                  {photoCount} photos of the finished work
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-[1.8] text-warm-600">{project.intro}</p>

                <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-warm-200 pt-10 sm:grid-cols-2">
                  {project.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-warm-500">
                        {spec.label}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-warm-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32" aria-label="Project gallery">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="eyebrow mb-5 text-warm-900">Gallery</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  {project.city}{" "}
                  <em className="not-italic font-semibold text-accent-dark">
                    Walkthrough
                  </em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-warm-600 lg:col-span-5 lg:col-start-8 lg:ml-auto lg:text-right">
                Photographed at handover. Every image is this project — nothing
                staged from another job.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image, i) => (
                <GalleryImage
                  key={image.src}
                  image={image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 3}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Extra sections (e.g. fireplace feature wall) ─────────── */}
        {project.sections?.map((section) => (
          <section key={section.heading} className="bg-warm-50 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-4">
                  <h2 className="font-display text-3xl font-bold leading-[1.1] text-warm-900 sm:text-4xl">
                    {section.heading}
                  </h2>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-lg leading-[1.8] text-warm-600">
                    {section.body}
                  </p>
                </div>
              </div>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.images.map((image) => (
                  <GalleryImage
                    key={image.src}
                    image={image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Scope of work ────────────────────────────────────────── */}
        <section className="bg-warm-50 px-3 py-6 lg:px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-warm-900 py-24 lg:rounded-[2.5rem] lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <p className="eyebrow mb-5 text-warm-400">Scope of work</p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                    What We{" "}
                    <em className="not-italic font-semibold text-accent">Did</em>
                  </h2>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-warm-300">
                    Permits, inspections, and subcontractor scheduling handled
                    in-house — one point of contact from demo to final
                    walk-through.
                  </p>
                </div>
                <ul className="divide-y divide-white/10 border-t border-white/10 lg:col-span-7 lg:col-start-6">
                  {project.scope.map((item, i) => (
                    <li key={item} className="flex items-start gap-5 py-5">
                      <span className="font-display text-lg font-semibold text-warm-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-relaxed text-warm-100">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-5 text-warm-500">FAQ</p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Common{" "}
                  <em className="not-italic font-semibold text-accent-dark">
                    Questions
                  </em>
                </h2>
              </div>
              <div className="divide-y divide-warm-200 border-t border-warm-200 lg:col-span-7 lg:col-start-6">
                {project.faqs.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold text-warm-900 marker:content-none">
                      {faq.question}
                      <span
                        className="mt-1 shrink-0 text-accent-dark transition-transform duration-200 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Related links — internal linking for SEO ──────────────── */}
        <section className="bg-warm-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow mb-5 text-warm-500">Keep exploring</p>
                <h2 className="font-display text-3xl font-bold leading-[1.1] text-warm-900 sm:text-4xl">
                  Related{" "}
                  <em className="not-italic font-semibold text-accent-dark">Pages</em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ul className="divide-y divide-warm-200 border-t border-warm-200">
                  <li>
                    <Link
                      href={`/services/${project.serviceSlug}`}
                      className="flex items-center justify-between gap-6 py-5 transition-colors hover:text-accent-dark"
                    >
                      <span className="text-base font-medium text-warm-900">
                        {project.service} in Southwest Florida
                      </span>
                      <span aria-hidden="true" className="text-warm-500">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/areas/${project.citySlug}`}
                      className="flex items-center justify-between gap-6 py-5 transition-colors hover:text-accent-dark"
                    >
                      <span className="text-base font-medium text-warm-900">
                        Remodeling in {project.city}, FL
                      </span>
                      <span aria-hidden="true" className="text-warm-500">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/areas/${project.citySlug}/${project.serviceSlug}`}
                      className="flex items-center justify-between gap-6 py-5 transition-colors hover:text-accent-dark"
                    >
                      <span className="text-base font-medium text-warm-900">
                        Kitchen remodeling in {project.city}
                      </span>
                      <span aria-hidden="true" className="text-warm-500">→</span>
                    </Link>
                  </li>
                  {others.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/projects/${other.slug}`}
                        className="flex items-center justify-between gap-6 py-5 transition-colors hover:text-accent-dark"
                      >
                        <span className="text-base font-medium text-warm-900">
                          {other.name} — {other.city}
                        </span>
                        <span aria-hidden="true" className="text-warm-500">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
              Planning a {project.city}{" "}
              <em className="not-italic font-semibold text-accent-dark">
                remodel?
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-warm-600">
              Tell us about your space and we&apos;ll put together a detailed,
              line-item estimate. Licensed &amp; insured Florida general
              contractor, FL #CBC1269972.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-warm-900 py-2.5 pl-7 pr-2.5 text-sm font-semibold text-white transition-colors hover:bg-warm-800"
              >
                Request a Free Estimate
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

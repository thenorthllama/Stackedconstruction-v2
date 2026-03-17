import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  articles,
  clusters,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/blog";

// ─── Static generation ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ─── Dynamic metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const cluster = clusters.find((c) => c.slug === article.cluster);
  const relatedArticles = getRelatedArticles(slug);

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Stacked Construction",
      url: "https://stackedconstruction.co",
    },
    publisher: {
      "@type": "Organization",
      name: "Stacked Construction",
      url: "https://stackedconstruction.co",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://stackedconstruction.co/blog/${article.slug}`,
    },
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero — cinematic article header ──────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900 lg:min-h-[70vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label={article.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="mb-5 flex items-center gap-4">
                  <Link
                    href={`/blog/category/${article.cluster}`}
                    className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent transition-colors hover:text-accent-dark"
                  >
                    {cluster?.name ?? article.cluster}
                  </Link>
                </div>
                <h1 className="max-w-3xl font-display text-4xl font-bold leading-[0.95] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  {article.title}
                </h1>
                <div className="mt-8 flex items-center gap-4 text-sm text-warm-400">
                  <time dateTime={article.publishedAt}>{publishedDate}</time>
                  <span className="h-1 w-1 rounded-full bg-warm-500" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Article Content — sidebar + content layout ──────────── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              {/* Sidebar — sticky info panel */}
              <aside className="lg:col-span-3 lg:sticky lg:top-32">
                <nav className="space-y-8">
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                      Category
                    </p>
                    <Link
                      href={`/blog/category/${article.cluster}`}
                      className="text-sm font-semibold text-warm-900 transition-colors hover:text-accent"
                    >
                      {cluster?.name ?? article.cluster}
                    </Link>
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                      Published
                    </p>
                    <time
                      dateTime={article.publishedAt}
                      className="text-sm text-warm-700"
                    >
                      {publishedDate}
                    </time>
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                      Read Time
                    </p>
                    <p className="text-sm text-warm-700">{article.readTime}</p>
                  </div>
                  <div className="border-t border-warm-200 pt-8">
                    <Link
                      href="/blog"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-accent"
                    >
                      <svg
                        className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                      All Articles
                    </Link>
                  </div>
                </nav>
              </aside>

              {/* Article content */}
              <article className="lg:col-span-8 lg:col-start-5">
                <div
                  className="prose-warm"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>
            </div>
          </div>
        </section>

        {/* ── Related Articles — dark section ─────────────────────── */}
        {relatedArticles.length > 0 && (
          <section className="bg-warm-900 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                    Keep Reading
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                    Related{" "}
                    <em className="font-light italic text-warm-300">
                      Articles
                    </em>
                  </h2>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <div className="space-y-0 divide-y divide-warm-800">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex items-center justify-between py-8 first:pt-0 last:pb-0"
                      >
                        <div className="pr-6">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                            {clusters.find(
                              (c) => c.slug === related.cluster
                            )?.name ?? related.cluster}
                          </p>
                          <h3 className="font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-warm-300 sm:text-2xl">
                            {related.title}
                          </h3>
                          <div className="mt-3 flex items-center gap-3 text-xs text-warm-600">
                            <time dateTime={related.publishedAt}>
                              {new Date(
                                related.publishedAt
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </time>
                            <span className="h-1 w-1 rounded-full bg-warm-600" />
                            <span>{related.readTime}</span>
                          </div>
                        </div>
                        <svg
                          className="h-5 w-5 shrink-0 text-warm-600 transition-all group-hover:translate-x-1 group-hover:text-warm-300"
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
        )}

        {/* ── CTA — immersive ──────────────────────────────────────── */}
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
                Your Project?
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

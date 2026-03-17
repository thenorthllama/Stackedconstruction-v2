import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clusters, getArticlesByCluster } from "@/data/blog";

// ─── Static generation ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return clusters.map((c) => ({ cluster: c.slug }));
}

// ─── Dynamic metadata ───────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string }>;
}): Promise<Metadata> {
  const { cluster: slug } = await params;
  const cluster = clusters.find((c) => c.slug === slug);
  if (!cluster) return {};
  return {
    title: `${cluster.name} | Stacked Construction Blog`,
    description: cluster.description,
    alternates: {
      canonical: `https://stackedconstruction.co/blog/category/${slug}`,
    },
    openGraph: {
      title: `${cluster.name} | Stacked Construction Blog`,
      description: cluster.description,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────────

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster: slug } = await params;
  const cluster = clusters.find((c) => c.slug === slug);
  if (!cluster) notFound();

  const clusterArticles = getArticlesByCluster(slug);
  const otherClusters = clusters.filter((c) => c.slug !== slug);

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
            aria-label={`${cluster.name} articles`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Link
                  href="/blog"
                  className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400 transition-colors hover:text-white"
                >
                  <svg
                    className="h-3 w-3"
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
                  Blog
                </Link>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                  {cluster.name}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                  {cluster.description}
                </p>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm text-warm-500">
                    {clusterArticles.length}{" "}
                    {clusterArticles.length === 1 ? "article" : "articles"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Articles list — editorial divider layout ────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  All Articles
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  {cluster.name}{" "}
                  <em className="font-light italic text-warm-600">Guides</em>
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {clusterArticles.length > 0 ? (
                  <div className="space-y-0 divide-y divide-warm-200">
                    {clusterArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="group flex items-center justify-between py-8 first:pt-0 last:pb-0"
                      >
                        <div className="pr-6">
                          <h3 className="font-display text-xl font-semibold leading-snug text-warm-900 transition-colors group-hover:text-warm-700 sm:text-2xl">
                            {article.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-warm-600">
                            {article.excerpt}
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-warm-500">
                            <time dateTime={article.publishedAt}>
                              {new Date(
                                article.publishedAt
                              ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </time>
                            <span className="h-1 w-1 rounded-full bg-warm-400" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <svg
                          className="h-5 w-5 shrink-0 text-warm-400 transition-all group-hover:translate-x-1 group-hover:text-warm-900"
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
                ) : (
                  <p className="text-base text-warm-600">
                    No articles in this category yet. Check back soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Other Categories — dark ─────────────────────────────── */}
        {otherClusters.length > 0 && (
          <section className="bg-warm-900 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                    Explore More
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                    Other{" "}
                    <em className="font-light italic text-warm-300">Topics</em>
                  </h2>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <div className="space-y-0 divide-y divide-warm-800">
                    {otherClusters.map((otherCluster) => (
                      <Link
                        key={otherCluster.slug}
                        href={`/blog/category/${otherCluster.slug}`}
                        className="group flex items-center justify-between py-8 first:pt-0 last:pb-0"
                      >
                        <div className="pr-6">
                          <h3 className="font-display text-2xl font-semibold text-white transition-colors group-hover:text-warm-300">
                            {otherCluster.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-warm-500">
                            {otherCluster.description}
                          </p>
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
              Ready to Get{" "}
              <em className="font-light italic text-warm-300">Started?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no
              obligation — just an honest conversation about your vision.
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

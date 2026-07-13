import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, clusters, getArticlesByCluster } from "@/data/blog";

export const metadata: Metadata = {
  title: "Remodeling Articles | Stacked Construction – SWFL Tips & Guides",
  description:
    "Expert remodeling advice, project planning tips, and design inspiration for Southwest Florida homeowners. Kitchen, bathroom, outdoor living, and whole-home renovation guides.",
  alternates: {
    canonical: "https://stackedconstruction.co/blog",
  },
  openGraph: {
    title: "Remodeling Articles | Stacked Construction – SWFL Tips & Guides",
    description:
      "Expert remodeling advice, project planning tips, and design inspiration for Southwest Florida homeowners.",
  },
};

export default function BlogIndexPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featuredArticle = sorted[0];
  const recentArticles = sorted.slice(1, 5);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero — cinematic ─────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
            role="img"
            aria-label="Stacked Construction remodeling articles"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 eyebrow text-warm-400">
                Insights &amp; Guides
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Remodeling{" "}
                <em className="font-light italic text-warm-300">Articles</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                Expert advice, planning tips, and design inspiration to help
                Southwest Florida homeowners make confident remodeling decisions.
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured Article — editorial split ─────────────────── */}
        {featuredArticle && (
          <section className="bg-warm-50 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-4">
                  <p className="mb-4 eyebrow text-warm-500">
                    Featured Article
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                    Latest{" "}
                    <em className="font-light italic text-warm-600">
                      Article
                    </em>
                  </h2>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="group block"
                  >
                    <p className="mb-3 eyebrow text-accent">
                      {clusters.find((c) => c.slug === featuredArticle.cluster)
                        ?.name ?? featuredArticle.cluster}
                    </p>
                    <h3 className="font-display text-3xl font-bold leading-[1.1] text-warm-900 transition-colors group-hover:text-warm-700 sm:text-4xl">
                      {featuredArticle.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-warm-600 lg:text-lg">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-warm-500">
                      <time dateTime={featuredArticle.publishedAt}>
                        {new Date(
                          featuredArticle.publishedAt
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="h-1 w-1 rounded-full bg-warm-400" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors group-hover:text-accent">
                      Read Article
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
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Recent Posts — masonry editorial ────────────────────── */}
        {recentArticles.length > 0 && (
          <section className="bg-warm-900 py-24 lg:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="mb-14 flex items-end justify-between gap-6">
                <div>
                  <p className="mb-4 eyebrow text-warm-500">
                    Fresh Off the Press
                  </p>
                  <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                    Recent{" "}
                    <em className="font-light italic text-warm-300">Posts</em>
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-warm-400 transition-colors hover:text-white sm:inline-flex"
                >
                  Browse All
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-0">
                {/* Row 1 — full-width horizontal */}
                {recentArticles[0] && (
                  <Link
                    href={`/blog/${recentArticles[0].slug}`}
                    className="group block border-t border-warm-800 py-10"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
                      <div className="lg:flex-1">
                        <p className="mb-3 eyebrow text-accent">
                          {clusters.find((c) => c.slug === recentArticles[0].cluster)?.name ?? recentArticles[0].cluster}
                        </p>
                        <h3 className="font-display text-2xl font-bold leading-[1.1] text-white transition-colors group-hover:text-warm-300 sm:text-3xl lg:text-4xl">
                          {recentArticles[0].title}
                        </h3>
                      </div>
                      <div className="lg:w-80 lg:shrink-0">
                        <p className="text-sm leading-relaxed text-warm-400 lg:text-base">
                          {recentArticles[0].excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-warm-600">
                          <time dateTime={recentArticles[0].publishedAt}>
                            {new Date(recentArticles[0].publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span className="h-1 w-1 rounded-full bg-warm-700" />
                          <span>{recentArticles[0].readTime}</span>
                        </div>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-warm-400 transition-colors group-hover:text-white">
                          Read Article
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Row 2 — half-width pair */}
                {recentArticles.length > 1 && (
                  <div className="grid border-t border-warm-800 sm:grid-cols-2 sm:divide-x sm:divide-warm-800">
                    {recentArticles.slice(1, 3).map((article, i) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className={`group block py-10 ${i === 1 ? "sm:pl-10" : "sm:pr-10"}`}
                      >
                        <p className="mb-3 eyebrow text-accent">
                          {clusters.find((c) => c.slug === article.cluster)?.name ?? article.cluster}
                        </p>
                        <h3 className="font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-warm-300 sm:text-2xl">
                          {article.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-warm-500">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-warm-600">
                          <time dateTime={article.publishedAt}>
                            {new Date(article.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span className="h-1 w-1 rounded-full bg-warm-700" />
                          <span>{article.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Row 3 — full-width horizontal, mirrored */}
                {recentArticles[3] && (
                  <Link
                    href={`/blog/${recentArticles[3].slug}`}
                    className="group block border-t border-warm-800 py-10"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
                      <div className="lg:order-1 lg:flex-1">
                        <p className="text-sm leading-relaxed text-warm-400 lg:text-base">
                          {recentArticles[3].excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-warm-600">
                          <time dateTime={recentArticles[3].publishedAt}>
                            {new Date(recentArticles[3].publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                          <span className="h-1 w-1 rounded-full bg-warm-700" />
                          <span>{recentArticles[3].readTime}</span>
                        </div>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-warm-400 transition-colors group-hover:text-white">
                          Read Article
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                      <div className="lg:order-2 lg:w-80 lg:shrink-0">
                        <p className="mb-3 eyebrow text-accent">
                          {clusters.find((c) => c.slug === recentArticles[3].cluster)?.name ?? recentArticles[3].cluster}
                        </p>
                        <h3 className="font-display text-2xl font-bold leading-[1.1] text-white transition-colors group-hover:text-warm-300 sm:text-3xl lg:text-4xl">
                          {recentArticles[3].title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                )}

                <div className="border-t border-warm-800" />
              </div>
            </div>
          </section>
        )}

        {/* ── Cluster Sections — alternating dark/light ──────────── */}
        {clusters.map((cluster, i) => {
          const clusterArticles = getArticlesByCluster(cluster.slug);
          if (clusterArticles.length === 0) return null;

          const isEven = i % 2 === 0;

          return (
            <section
              key={cluster.slug}
              className={isEven ? "bg-white py-24 lg:py-36" : "bg-warm-900 py-24 lg:py-36"}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                  {/* Cluster header */}
                  <div className="lg:col-span-4">
                    <p
                      className={`mb-4 eyebrow ${
                        isEven ? "text-warm-500" : "text-warm-500"
                      }`}
                    >
                      Topic
                    </p>
                    <h2
                      className={`font-display text-4xl font-bold leading-[1.05] sm:text-5xl ${
                        isEven ? "text-warm-900" : "text-white"
                      }`}
                    >
                      {cluster.name}
                    </h2>
                    <p
                      className={`mt-4 text-base leading-relaxed ${
                        isEven ? "text-warm-600" : "text-warm-500"
                      }`}
                    >
                      {cluster.description}
                    </p>
                    <Link
                      href={`/blog/category/${cluster.slug}`}
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        isEven
                          ? "text-warm-900 hover:text-accent"
                          : "text-warm-300 hover:text-white"
                      }`}
                    >
                      View All
                      <svg
                        className="h-4 w-4 transition-transform hover:translate-x-1"
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

                  {/* Article list — divider-based */}
                  <div className="lg:col-span-7 lg:col-start-6">
                    <div
                      className={`space-y-0 divide-y ${
                        isEven ? "divide-warm-200" : "divide-warm-800"
                      }`}
                    >
                      {clusterArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/blog/${article.slug}`}
                          className="group flex items-center justify-between py-8 first:pt-0 last:pb-0"
                        >
                          <div className="pr-6">
                            <h3
                              className={`font-display text-xl font-semibold leading-snug transition-colors sm:text-2xl ${
                                isEven
                                  ? "text-warm-900 group-hover:text-warm-700"
                                  : "text-white group-hover:text-warm-300"
                              }`}
                            >
                              {article.title}
                            </h3>
                            <p
                              className={`mt-2 line-clamp-2 text-sm leading-relaxed ${
                                isEven ? "text-warm-600" : "text-warm-500"
                              }`}
                            >
                              {article.excerpt}
                            </p>
                            <div
                              className={`mt-3 flex items-center gap-3 text-xs ${
                                isEven ? "text-warm-500" : "text-warm-600"
                              }`}
                            >
                              <time dateTime={article.publishedAt}>
                                {new Date(
                                  article.publishedAt
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </time>
                              <span className="h-1 w-1 rounded-full bg-warm-400" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <svg
                            className={`h-5 w-5 shrink-0 transition-all group-hover:translate-x-1 ${
                              isEven
                                ? "text-warm-400 group-hover:text-warm-900"
                                : "text-warm-600 group-hover:text-warm-300"
                            }`}
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
          );
        })}

        {/* ── CTA — immersive ──────────────────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 eyebrow text-warm-500">
              Ready to Start?
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Turn Inspiration{" "}
              <em className="font-light italic text-warm-300">
                Into Reality
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Ready to bring your remodeling vision to life? Schedule a free
              consultation and let&apos;s talk about your project.
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

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Reviews | Stacked Construction — SWFL Remodeling",
  description:
    "Read real reviews from Southwest Florida homeowners who've worked with Stacked Construction. Honest feedback on kitchen remodels, bathroom renovations, and full-home projects.",
  alternates: {
    canonical: "https://stackedconstruction.co/reviews",
  },
  openGraph: {
    title: "Client Reviews | Stacked Construction",
    description:
      "Real reviews from homeowners across Fort Myers, Naples, Cape Coral, and Southwest Florida. See what clients say about working with Stacked Construction.",
  },
};

const reviews = [
  {
    author: "Yasmin Frota",
    rating: 5,
    text: "Awesome professional! If you are looking for someone to remodel your house, do yourself a favor and hire Junior and his team! You will not be disappointed!",
    source: "Google",
  },
  {
    author: "Osvaldo Neto Cancian",
    rating: 5,
    text: "I really enjoyed working with Junior on redoing my bathroom. From the beginning, communication was clear and consistent, and he was always easy to reach when I had questions. He paid close attention to the details and made sure everything was done right. I'm very happy with how it turned out and would definitely work with him again.",
    source: "Google",
  },
  {
    author: "Leonardo Mendes",
    rating: 5,
    text: "Manuel is a true professional and someone you can trust with your project. He is reliable, communicates clearly, and takes real pride in the quality of his work. His attention to detail stands out — he does not rush the process or cut corners. He makes sure things are done the right way and that the final result looks clean and well finished.",
    source: "Google",
  },
  {
    author: "Carlos Pereira",
    rating: 5,
    text: "Excellent professional! Works very well and is highly responsible. Great communicator, understood exactly what I needed and delivered the job perfectly.",
    source: "Google",
  },
  {
    author: "Eliabe Damas",
    rating: 5,
    text: "Great work, really enjoyed working with Junior, very communicative.",
    source: "Google",
  },
  {
    author: "Luiz Carlos Amt",
    rating: 5,
    text: "Wonderful! I was very happy with the result of the work, it exceeded my expectations. I highly recommend it!",
    source: "Google",
  },
  {
    author: "Adriano Carvalho",
    rating: 5,
    text: "Highly recommend.",
    source: "Google",
  },
  {
    author: "Sarah M.",
    rating: 5,
    location: "Fort Myers, FL",
    text: "Stacked Construction completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the final result exceeded every expectation.",
    source: "Google",
  },
  {
    author: "Michael T.",
    rating: 5,
    location: "Naples, FL",
    text: "Our outdoor kitchen and pool deck renovation was flawless. They understood the SWFL lifestyle and built something our whole family enjoys every single day.",
    source: "Google",
  },
];

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stackedconstruction.co/#business",
    name: "Stacked Construction",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      publisher: r.source === "Google" ? { "@type": "Organization", name: "Google" } : undefined,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stackedconstruction.co" },
      { "@type": "ListItem", position: 2, name: "Reviews", item: "https://stackedconstruction.co/reviews" },
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
            aria-label="Client reviews for Stacked Construction"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[70vh] lg:px-10 lg:pb-24">
            <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                  Client Reviews
                </p>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  What Our Clients{" "}
                  <em className="font-light italic text-warm-300">Say</em>
                </h1>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-warm-300 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white">5.0</span>
                    <span className="text-sm text-warm-500">({reviews.length} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
                <div className="border-l border-warm-500/30 pl-6">
                  <p className="text-sm leading-relaxed text-warm-400">
                    Real reviews from real homeowners across Southwest Florida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Reviews Grid ─────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Google Reviews
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl">
                  Trusted by Homeowners{" "}
                  <em className="font-light italic text-warm-600">Across SWFL</em>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-warm-600 lg:text-right">
                Every project, every detail, every time. These are the experiences homeowners have shared after working with our team.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <article
                  key={i}
                  className="flex flex-col rounded-2xl bg-white p-8 shadow-sm"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="mb-4 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="h-4 w-4 fill-current text-warm-500" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-base leading-relaxed text-warm-700" itemProp="reviewBody">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>
                  <footer className="mt-6 flex items-center justify-between border-t border-warm-100 pt-6">
                    <div>
                      <p className="font-semibold text-warm-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{review.author}</span>
                      </p>
                      {review.location && (
                        <p className="text-xs text-warm-500 mt-0.5">{review.location}</p>
                      )}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest text-warm-400">{review.source}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Leave a Review CTA ────────────────────────────────────── */}
        <section className="bg-warm-900 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Share Your Experience
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Did We Work{" "}
                  <em className="font-light italic text-warm-300">On Your Home?</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-400">
                  Your feedback helps other Southwest Florida homeowners find a contractor they can trust.
                  Leave us a review on Google and tell us about your experience.
                </p>
                <div className="mt-10">
                  <a
                    href="https://g.page/r/stackedconstruction/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
                  >
                    Leave a Google Review
                  </a>
                </div>
              </div>
              <div className="space-y-0 divide-y divide-warm-800">
                {[
                  { stat: "5/5", label: "Average Rating" },
                  { stat: "150+", label: "Completed Projects" },
                  { stat: "3", label: "Counties Served" },
                  { stat: "10yr", label: "In Business" },
                ].map((item) => (
                  <div key={item.stat} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
                    <p className="font-display text-3xl font-bold text-white">{item.stat}</p>
                    <p className="text-sm font-medium uppercase tracking-widest text-warm-500">{item.label}</p>
                  </div>
                ))}
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
              Ready to Join{" "}
              <em className="font-light italic text-warm-300">Our Happy Clients?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Schedule your free in-home consultation. No pressure, no obligation — just an honest conversation about your vision.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

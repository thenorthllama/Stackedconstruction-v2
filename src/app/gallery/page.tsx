import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Gallery | Stacked Construction – Kitchen, Bath & Home Remodeling in SWFL",
  description:
    "Browse our gallery of premium kitchen remodels, bathroom renovations, outdoor living spaces, and whole-home transformations across Fort Myers, Naples, and Southwest Florida.",
  alternates: {
    canonical: "https://stackedconstruction.co/gallery",
  },
  openGraph: {
    title:
      "Gallery | Stacked Construction – Kitchen, Bath & Home Remodeling in SWFL",
    description:
      "Browse our gallery of premium kitchen remodels, bathroom renovations, outdoor living spaces, and whole-home transformations across Southwest Florida.",
  },
};

const categories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Outdoor Living",
  "Full Home",
  "Luxury",
  "Flooring & Tile",
];

const projects = [
  {
    title: "Modern Kitchen Transformation",
    category: "Kitchen",
    location: "Fort Myers, FL",
    image: "/images/kitchen-modern-island.jpg",
    description:
      "A sleek, contemporary kitchen featuring dark cabinetry, marble countertops, exposed ceiling beams, and herringbone hardwood flooring.",
  },
  {
    title: "Classic White Kitchen Remodel",
    category: "Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-luxury-white.jpg",
    description:
      "Bright, spacious kitchen with custom white cabinetry, industrial pendant lighting, marble island, and artisan tile backsplash.",
  },
  {
    title: "Spa-Inspired Master Bath",
    category: "Bathroom",
    location: "Cape Coral, FL",
    image: "/images/service-bathroom.jpg",
    description:
      "A relaxing master bathroom retreat with a freestanding soaking tub, frameless glass shower, and natural stone finishes.",
  },
  {
    title: "Outdoor Fireplace & Living",
    category: "Outdoor Living",
    location: "Bonita Springs, FL",
    image: "/images/service-outdoor.jpg",
    description:
      "Cozy outdoor living space with stone fireplace, lantern lighting, and lush landscaping designed for year-round Florida entertaining.",
  },
  {
    title: "Complete Home Renovation",
    category: "Full Home",
    location: "Fort Myers, FL",
    image: "/images/service-fullhome.jpg",
    description:
      "Whole-home transformation with modern interiors, refined finishes, and a reimagined floor plan for contemporary Florida living.",
  },
  {
    title: "Luxury Living Room Remodel",
    category: "Luxury",
    location: "Naples, FL",
    image: "/images/service-luxury.jpg",
    description:
      "High-end living space renovation with premium furnishings, designer lighting, and custom architectural details throughout.",
  },
  {
    title: "Modern Flooring & Tile",
    category: "Flooring & Tile",
    location: "Marco Island, FL",
    image: "/images/service-flooring.jpg",
    description:
      "Contemporary flooring installation with large-format tile, clean lines, and seamless transitions between living spaces.",
  },
  {
    title: "Coastal Reeded Island Kitchen",
    category: "Kitchen",
    location: "Fort Myers, FL",
    image: "/images/kitchen-coastal-reeded.jpg",
    description:
      "Warm coastal kitchen with reeded oak island cabinetry, quartz countertops, floating shelves, and tropical greenery framed by oversized windows.",
  },
  {
    title: "Poolside Oak Kitchen",
    category: "Kitchen",
    location: "Bonita Springs, FL",
    image: "/images/kitchen-poolside-oak.jpg",
    description:
      "Light oak cabinetry with waterfall marble island, pool views, open shelving, and a seamless indoor-outdoor Florida living layout.",
  },
  {
    title: "Marble Waterfall Island Kitchen",
    category: "Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-marble-waterfall.jpg",
    description:
      "Dramatic marble waterfall island with natural wood cabinetry, bronze pendant lighting, and pool-view sliding glass doors.",
  },
  {
    title: "Coastal White & Beam Kitchen",
    category: "Kitchen",
    location: "Cape Coral, FL",
    image: "/images/kitchen-coastal-white-beams.jpg",
    description:
      "Bright white shaker cabinetry with exposed wood ceiling beams, marble island, floating wood shelves, and lanai views.",
  },
  {
    title: "Butler's Pantry & Wine Room",
    category: "Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-butler-pantry.webp",
    description:
      "Elegant butler's pantry with arched doorway, brass hardware, wine fridge, farmhouse sink, and marble backsplash throughout.",
  },
  {
    title: "Smart Galley Kitchen",
    category: "Kitchen",
    location: "Fort Myers, FL",
    image: "/images/kitchen-galley-smart.webp",
    description:
      "Efficient galley kitchen with oak cabinetry, smart home integration, floating shelves, under-cabinet LED lighting, and garden views.",
  },
  {
    title: "Open Concept Florida Living",
    category: "Kitchen",
    location: "Estero, FL",
    image: "/images/kitchen-open-concept-florida.webp",
    description:
      "Open-concept kitchen and living space with marble island, stone fireplace, wood beam ceilings, and panoramic tropical views.",
  },
  {
    title: "Waterfront Tropical Kitchen",
    category: "Kitchen",
    location: "Cape Coral, FL",
    image: "/images/kitchen-waterfront-tropical.webp",
    description:
      "Contemporary waterfront kitchen with sage green island, marble countertops, natural wood stools, and lush canal-side views.",
  },
  {
    title: "Beachfront Luxury Kitchen",
    category: "Kitchen",
    location: "Fort Myers Beach, FL",
    image: "/images/kitchen-beachfront-luxury.jpg",
    description:
      "Beachfront kitchen with white cabinetry, marble waterfall island, palm tree views through floor-to-ceiling windows, and coastal accents.",
  },
  {
    title: "Warm Craftsman Kitchen",
    category: "Kitchen",
    location: "Punta Gorda, FL",
    image: "/images/kitchen-warm-craftsman.webp",
    description:
      "Rich wood craftsman kitchen with rattan pendant lights, marble waterfall island, woven bar stools, and warm under-cabinet lighting.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] bg-warm-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/kitchen-modern-island.jpg')" }}
            role="img"
            aria-label="Stacked Construction project gallery"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                Our Portfolio
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Project{" "}
                <em className="font-light italic text-warm-300">Gallery</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                Every project tells a story of collaboration, craftsmanship, and
                attention to detail. Explore our work across Southwest Florida.
              </p>
            </div>
          </div>
        </section>

        {/* ── Category Filter Bar ──────────────────────────────────── */}
        <section className="sticky top-0 z-40 border-b border-warm-200 bg-white/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`shrink-0 rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-colors ${
                    cat === "All"
                      ? "bg-warm-900 text-white"
                      : "text-warm-600 hover:bg-warm-100 hover:text-warm-900"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects Grid ────────────────────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl ${
                    i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden bg-warm-100 ${
                      i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                      role="img"
                      aria-label={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-900 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 lg:p-8">
                    <h2 className="font-display text-xl font-semibold text-warm-900 lg:text-2xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-warm-500">
                      {project.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-warm-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Bar ────────────────────────────────────────────── */}
        <section className="bg-warm-900 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Years Experience" },
                { value: "3", label: "Counties Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-5xl font-bold text-white lg:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-warm-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="relative bg-warm-900 py-28 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{ backgroundImage: "url('/images/kitchen-luxury-white.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Start Your Project
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to Build{" "}
              <em className="font-light italic text-warm-300">
                Something Beautiful?
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-500">
              Every great project starts with a conversation. Tell us about your
              vision and we&apos;ll show you what&apos;s possible.
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

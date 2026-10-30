"use client";

import Image from "next/image";
import { useState } from "react";

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
    image: "/images/kitchen-modern-island.webp",
    description:
      "A sleek, contemporary kitchen featuring dark cabinetry, marble countertops, exposed ceiling beams, and herringbone hardwood flooring.",
  },
  {
    title: "Classic White Kitchen Remodel",
    category: "Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-luxury-white.webp",
    description:
      "Bright, spacious kitchen with custom white cabinetry, industrial pendant lighting, marble island, and artisan tile backsplash.",
  },
  {
    title: "Spa-Inspired Master Bath",
    category: "Bathroom",
    location: "Cape Coral, FL",
    image: "/images/service-bathroom.webp",
    description:
      "A relaxing master bathroom retreat with a freestanding soaking tub, frameless glass shower, and natural stone finishes.",
  },
  {
    title: "Outdoor Fireplace & Living",
    category: "Outdoor Living",
    location: "Bonita Springs, FL",
    image: "/images/service-outdoor.webp",
    description:
      "Cozy outdoor living space with stone fireplace, lantern lighting, and lush landscaping designed for year-round Florida entertaining.",
  },
  {
    title: "Complete Home Renovation",
    category: "Full Home",
    location: "Fort Myers, FL",
    image: "/images/service-fullhome.webp",
    description:
      "Whole-home transformation with modern interiors, refined finishes, and a reimagined floor plan for contemporary Florida living.",
  },
  {
    title: "Luxury Living Room Remodel",
    category: "Luxury",
    location: "Naples, FL",
    image: "/images/service-luxury.webp",
    description:
      "High-end living space renovation with premium furnishings, designer lighting, and custom architectural details throughout.",
  },
  {
    title: "Modern Flooring & Tile",
    category: "Flooring & Tile",
    location: "Marco Island, FL",
    image: "/images/service-flooring.webp",
    description:
      "Contemporary flooring installation with large-format tile, clean lines, and seamless transitions between living spaces.",
  },
  {
    title: "Coastal Reeded Island Kitchen",
    category: "Kitchen",
    location: "Fort Myers, FL",
    image: "/images/kitchen-coastal-reeded.webp",
    description:
      "Warm coastal kitchen with reeded oak island cabinetry, quartz countertops, floating shelves, and tropical greenery framed by oversized windows.",
  },
  {
    title: "Poolside Oak Kitchen",
    category: "Kitchen",
    location: "Bonita Springs, FL",
    image: "/images/kitchen-poolside-oak.webp",
    description:
      "Light oak cabinetry with waterfall marble island, pool views, open shelving, and a seamless indoor-outdoor Florida living layout.",
  },
  {
    title: "Marble Waterfall Island Kitchen",
    category: "Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-marble-waterfall.webp",
    description:
      "Dramatic marble waterfall island with natural wood cabinetry, bronze pendant lighting, and pool-view sliding glass doors.",
  },
  {
    title: "Coastal White & Beam Kitchen",
    category: "Kitchen",
    location: "Cape Coral, FL",
    image: "/images/kitchen-coastal-white-beams.webp",
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
    image: "/images/kitchen-beachfront-luxury.webp",
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

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Category Filter Bar ──────────────────────────────────── */}
      <section className="sticky top-0 z-40 border-b border-warm-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  cat === activeCategory
                    ? "bg-warm-900 text-white"
                    : "text-warm-600 hover:bg-warm-100 hover:text-warm-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ────────────────────────────────────────── */}
      <section className="bg-warm-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-2xl border border-warm-200 bg-white transition-shadow duration-300 hover:shadow-xl ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-warm-100 ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-warm-900">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 lg:p-8">
                  <h2 className="font-display text-xl font-semibold text-warm-900 lg:text-2xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-warm-600">
                    {project.location}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-warm-700">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

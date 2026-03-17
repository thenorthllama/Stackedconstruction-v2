"use client";

import { TiltCard } from "@/components/ui/tilt-card";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, countertops, backsplashes, and complete kitchen transformations that become the heart of your home.",
    image: "/images/kitchen-luxury-white.jpg",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Modern vanities, walk-in showers, soaking tubs, and spa-inspired designs that elevate your daily routine.",
    image: "/images/service-bathroom.jpg",
  },
  {
    title: "Outdoor Living & Kitchens",
    description:
      "Outdoor kitchens, patios, pool decks, and living spaces designed for the Southwest Florida lifestyle.",
    image: "/images/service-outdoor.jpg",
  },
  {
    title: "Full Home Renovation",
    description:
      "Comprehensive whole-home remodels that reimagine your space from floor plan to finishing touches.",
    image: "/images/service-fullhome.jpg",
  },
  {
    title: "Flooring & Tile",
    description:
      "Expert installation of hardwood, porcelain, natural stone, and luxury vinyl for lasting beauty underfoot.",
    image: "/images/service-flooring.jpg",
  },
  {
    title: "Luxury Home Remodeling",
    description:
      "High-end finishes, custom millwork, and premium materials for homeowners who expect the finest.",
    image: "/images/service-luxury.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Our Services
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
              What We{" "}
              <em className="font-light italic">Build</em>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-warm-600 lg:text-right">
            From kitchens to complete home transformations, we bring your vision
            to life with expert craftsmanship and transparent pricing.
          </p>
        </div>

        {/* Tilt card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <TiltCard
              key={service.title}
              className="cursor-pointer"
            >
              <article className="group overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                {/* Image area */}
                <div className="relative aspect-[3/2] overflow-hidden bg-warm-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                    role="img"
                    aria-label={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/30 to-transparent" />
                  <span className="absolute top-4 left-4 font-display text-5xl font-bold text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text area */}
                <div className="p-6 lg:p-7">
                  <h3 className="mb-2 font-display text-xl font-semibold text-warm-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-600">
                    {service.description}
                  </p>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

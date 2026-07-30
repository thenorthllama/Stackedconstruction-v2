"use client";

import Link from "next/link";
import { TiltCard } from "@/components/ui/tilt-card";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "A layout that works while you cook, not just in photos. Custom cabinetry, quartz and stone counters, and the storage you actually need.",
    image: "/images/kitchen-luxury-white.webp",
    href: "/services/kitchen-remodeling",
  },
  {
    title: "Bathroom Renovation",
    description:
      "A bathroom you look forward to using. Walk-in showers, custom vanities, soaking tubs, and aging-in-place details done properly.",
    image: "/images/service-bathroom.webp",
    href: "/services/bathroom-remodeling",
  },
  {
    title: "Outdoor Living & Kitchens",
    description:
      "The reason you moved to Florida, finally usable. Outdoor kitchens, lanai renovations, and pool decks built for the climate.",
    image: "/images/service-outdoor.webp",
    href: "/services/outdoor-living",
  },
  {
    title: "Full Home Renovation",
    description:
      "When one room isn\u2019t the problem. We rework the whole floor plan \u2014 designed, permitted, and built as one project.",
    image: "/images/service-fullhome.webp",
    href: "/services/home-renovation",
  },
  {
    title: "Flooring & Tile",
    description:
      "Flooring chosen for Florida humidity and installed to stay flat. Porcelain, natural stone, hardwood, and luxury vinyl.",
    image: "/images/service-flooring.webp",
    href: "/services/flooring-tile",
  },
  {
    title: "Luxury Home Remodeling",
    description:
      "Handleless cabinetry, waterfall stone, integrated appliances \u2014 the details that only work when they\u2019re measured right.",
    image: "/images/service-luxury.webp",
    href: "/services/home-renovation",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-4 text-warm-500">
              Our Services
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
              Where we can{" "}
              <em className="not-italic font-semibold text-accent-dark">help</em>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-warm-600 lg:text-right">
            Whichever of these you start with, the process is the same: we
            design it, price it line by line, and build it with one team.
          </p>
        </div>

        {/* Tilt card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link key={service.title} href={service.href}>
              <TiltCard className="cursor-pointer h-full">
                <article className="group overflow-hidden rounded-3xl border border-warm-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl h-full">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, countertops, backsplashes, and complete kitchen transformations that become the heart of your home.",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Modern vanities, walk-in showers, soaking tubs, and spa-inspired designs that elevate your daily routine.",
  },
  {
    title: "Outdoor Living & Kitchens",
    description:
      "Outdoor kitchens, patios, pool decks, and living spaces designed for the Southwest Florida lifestyle.",
  },
  {
    title: "Full Home Renovation",
    description:
      "Comprehensive whole-home remodels that reimagine your space from floor plan to finishing touches.",
  },
  {
    title: "Flooring & Tile",
    description:
      "Expert installation of hardwood, porcelain, natural stone, and luxury vinyl for lasting beauty underfoot.",
  },
  {
    title: "Luxury Home Remodeling",
    description:
      "High-end finishes, custom millwork, and premium materials for homeowners who expect the finest.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header — editorial style */}
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

        <div className="grid gap-px bg-warm-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group bg-warm-50 p-8 transition-colors hover:bg-white lg:p-10"
            >
              <span className="mb-6 block font-display text-4xl font-bold text-warm-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-xl font-semibold text-warm-900">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-warm-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

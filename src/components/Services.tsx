import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Kitchen Remodeling",
    alt: "White kitchen remodel with pendant lights and stone counters in Southwest Florida",
    description:
      "A layout that works while you cook, not just in photos. Custom cabinetry, quartz and stone counters, and the storage you actually need.",
    image: "/images/kitchen-luxury-white.webp",
    href: "/services/kitchen-remodeling",
  },
  {
    title: "Bathroom Renovation",
    alt: "Renovated bathroom with walk-in glass shower and round mirror",
    description:
      "A bathroom you look forward to using. Walk-in showers, custom vanities, soaking tubs, and aging-in-place details done properly.",
    image: "/images/service-bathroom.webp",
    href: "/services/bathroom-remodeling",
  },
  {
    title: "Outdoor Living & Kitchens",
    alt: "Outdoor living area with pergola, string lights, and fire pit",
    description:
      "The reason you moved to Florida, finally usable. Outdoor kitchens, lanai renovations, and pool decks built for the climate.",
    image: "/images/service-outdoor.webp",
    href: "/services/outdoor-living",
  },
  {
    title: "Full Home Renovation",
    alt: "Open-plan whole-home renovation with wood feature wall",
    description:
      "When one room isn\u2019t the problem. We rework the whole floor plan \u2014 designed, permitted, and built as one project.",
    image: "/images/service-fullhome.webp",
    href: "/services/home-renovation",
  },
  {
    title: "Flooring & Tile",
    alt: "Large-format porcelain tile flooring in a modern room",
    description:
      "Flooring chosen for Florida humidity and installed to stay flat. Porcelain, natural stone, hardwood, and luxury vinyl.",
    image: "/images/service-flooring.webp",
    href: "/services/flooring-tile",
  },
  {
    title: "Luxury Home Remodeling",
    alt: "Luxury living space with slatted wood ceiling and black-framed windows",
    description:
      "Handleless cabinetry, waterfall stone, integrated appliances \u2014 the details that only work when they\u2019re measured right.",
    image: "/images/service-luxury.webp",
    href: "/services/home-renovation",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="services-heading"
            className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl lg:col-span-7"
          >
            Where we can help
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-warm-700 lg:col-span-5">
            Whichever of these you start with, the process is the same: we
            design it, price it line by line, and build it with one team.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-warm-50 transition-colors hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-900 focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-warm-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex-1 p-6 lg:p-7">
                  <h3 className="font-display text-xl font-bold text-warm-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-warm-700">
                    {service.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

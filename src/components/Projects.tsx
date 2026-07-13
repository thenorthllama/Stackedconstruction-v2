const projects = [
  {
    title: "Marble Waterfall Island Kitchen",
    location: "Naples, FL",
    image: "/images/kitchen-marble-waterfall.webp",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Coastal Reeded Island Kitchen",
    location: "Fort Myers, FL",
    image: "/images/kitchen-coastal-reeded.webp",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Spa-Inspired Master Bath",
    location: "Cape Coral, FL",
    image: "/images/service-bathroom.webp",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Poolside Oak Kitchen",
    location: "Bonita Springs, FL",
    image: "/images/kitchen-poolside-oak.webp",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Outdoor Fireplace & Living",
    location: "Fort Myers, FL",
    image: "/images/service-outdoor.webp",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Luxury Living Room Remodel",
    location: "Naples, FL",
    image: "/images/service-luxury.webp",
    aspect: "aspect-[4/3]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header — reference layout: big serif left, copy middle, pill right */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl font-bold leading-[1.02] text-warm-900 sm:text-6xl">
              Recent
              <br />
              <em className="font-light italic text-warm-600">Projects</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-warm-600 lg:col-span-4">
            From kitchens to complete home transformations, we bring your
            vision to life with expert craftsmanship and transparent pricing.
          </p>
          <div className="lg:col-span-3 lg:text-right">
            <a
              href="/gallery"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-warm-800"
            >
              View All
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Reference card style — image with rounded corners, location bullet + title below */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.title} href="/gallery" className="group block">
              <article>
                <div className={`relative overflow-hidden rounded-3xl bg-warm-200 ${project.aspect}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    role="img"
                    aria-label={`${project.title} — ${project.location}`}
                  />
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs font-medium text-warm-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-warm-400" aria-hidden="true" />
                  {project.location}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-warm-900 transition-colors group-hover:text-warm-700">
                  {project.title}
                </h3>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

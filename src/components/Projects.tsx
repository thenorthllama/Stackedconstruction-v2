const projects = [
  {
    title: "Modern Kitchen Transformation",
    category: "Kitchen",
    image: "/images/kitchen-modern-island.webp",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-square",
  },
  {
    title: "Spa-Inspired Master Bath",
    category: "Bathroom",
    image: "/images/service-bathroom.webp",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Outdoor Fireplace & Living",
    category: "Outdoor Living",
    image: "/images/service-outdoor.webp",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Coastal White & Beam Kitchen",
    category: "Kitchen",
    image: "/images/kitchen-coastal-white-beams.webp",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Luxury Living Room Remodel",
    category: "Luxury",
    image: "/images/service-luxury.webp",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Poolside Oak Kitchen",
    category: "Kitchen",
    image: "/images/kitchen-poolside-oak.webp",
    span: "lg:col-span-2",
    aspect: "aspect-[2/1]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4 text-warm-500">
              Our Work
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
              Project{" "}
              <em className="font-light italic">Gallery</em>
            </h2>
          </div>
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl bg-warm-800 ${project.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
                role="img"
                aria-label={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-300">
                  {project.category}
                </span>
                <h3 className="font-display text-base font-semibold text-white lg:text-lg">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

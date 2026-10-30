import Link from "next/link";
import Image from "next/image";
import type { ProjectData } from "@/data/projects";

/**
 * Finished projects relevant to the page — real photos and internal links.
 * Renders nothing when there are no matching projects.
 */
export default function RelatedProjects({
  projects,
  heading,
  intro,
}: {
  projects: ProjectData[];
  heading: string;
  intro: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="related-projects-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="related-projects-heading"
            className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl lg:col-span-7"
          >
            {heading}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-warm-700 lg:col-span-5">
            {intro}
          </p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-warm-100">
                  <Image
                    src={project.hero.src}
                    alt={project.hero.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-warm-900 transition-colors group-hover:text-accent-dark">
                  {project.shortName}
                </h3>
                <p className="mt-1 text-sm font-medium text-warm-600">{project.city}, FL</p>
                <p className="mt-3 text-base leading-relaxed text-warm-700">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

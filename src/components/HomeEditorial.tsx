import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

/* ── About — founder-led section ──────────────────────────────────────────── */

export function AboutStatement() {
  return (
    <section className="bg-warm-50 py-24 lg:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <h2
            id="about-heading"
            className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl"
          >
            You should be excited, not anxious
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-700">
            We&apos;re not the biggest contractor in Southwest Florida, and
            that&apos;s deliberate. Junior is on your project. You&apos;ll know
            who is in your home and who to call — for more than ten years and 40+
            projects, that hasn&apos;t changed.
          </p>
        </div>

        {/* Founder quote block */}
        <div className="grid gap-10 rounded-[2rem] bg-white p-8 lg:grid-cols-12 lg:items-center lg:p-14">
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-bold text-warm-900">
              No surprises. That&apos;s the whole point.
            </h3>
            <blockquote className="mt-5 max-w-2xl text-lg leading-relaxed text-warm-700">
              &ldquo;I lead every project with a structured process designed to
              protect the client, control quality, and deliver a finished space
              that reflects your vision — on budget, on time, and with no
              surprises.&rdquo;
            </blockquote>
            <p className="mt-6 text-base font-semibold text-warm-900">
              Junior Da Silva
            </p>
            <p className="text-sm text-warm-600">
              Founder &amp; Licensed Building Contractor · FL #CBC1269972
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-warm-100">
              <Image
                src="/images/kitchen-warm-craftsman.webp"
                alt="Warm craftsman kitchen remodel by Stacked Construction"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Team — one card per person ───────────────────────────────────────────── */

const team = [
  {
    name: "Junior Da Silva",
    role: "Founder & Licensed Building Contractor",
    note: "Florida-licensed building contractor (CBC1269972) with more than ten years of hands-on remodeling experience across Southwest Florida.",
    href: "/about/junior-da-silva",
  },
  {
    name: "Caio Alves",
    role: "Project Manager & Remodeling Specialist",
    note: "Oversees kitchen, bathroom, and full-home renovation projects — focused on timelines, quality control, and permitting.",
    href: "/about/caio-alves",
  },
  {
    name: "Camila Lage",
    role: "Interior Design Consultant",
    note: "Specializes in kitchen and bathroom design, material selection, and finish coordination for Southwest Florida homes.",
    href: "/about/camila-lage",
  },
];

export function TeamList() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <h2
            id="team-heading"
            className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl"
          >
            Who will be in your home
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-warm-700">
            Not a call center. These are the three people you&apos;ll be working
            with, and their licenses and credentials are public.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col rounded-3xl bg-warm-50 p-8">
              <h3 className="font-display text-2xl font-bold text-warm-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-warm-600">{member.role}</p>
              <p className="mt-5 flex-1 text-base leading-relaxed text-warm-700">
                {member.note}
              </p>
              <Link
                href={member.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-warm-900 transition-colors hover:text-accent-dark"
              >
                View {member.name.split(" ")[0]}&apos;s profile
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case studies — editorial rows ────────────────────────────────────────── */

/** Homepage shows the newest projects only; /projects lists them all */
const HOME_CASE_STUDY_LIMIT = 4;

const caseStudies = projects.slice(0, HOME_CASE_STUDY_LIMIT).map((p) => ({
  title: p.shortName,
  location: `${p.city}, FL`,
  href: `/projects/${p.slug}`,
  description: p.summary,
  image: p.hero.src,
  alt: p.hero.alt,
}));

export function CaseStudies() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              id="work-heading"
              className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl"
            >
              Built in your neighborhood
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-warm-700 lg:col-span-5">
            Real homes in Naples, Bonita Springs, Fort Myers, and Cape Coral,
            photographed as we handed them over.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.href}
              className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Link
                  href={cs.href}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-warm-100"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={cs.image}
                    alt={cs.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </Link>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-display text-2xl font-bold leading-tight text-warm-900 sm:text-3xl">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-warm-600">{cs.location}</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-warm-700">
                  {cs.description}
                </p>
                <Link
                  href={cs.href}
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-warm-800"
                >
                  View project
                  <span className="sr-only">: {cs.title}</span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-warm-900/25 py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-colors hover:border-warm-900"
          >
            See all projects
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

/* ── About — founder-led section (najlepszeokna: "30 Lat Precyzji" + quote) ── */

export function AboutStatement() {
  return (
    <section className="bg-warm-50 py-24 lg:py-32" aria-label="About Stacked Construction">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-5 text-warm-900">About Us</p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl lg:text-6xl">
            A Decade of Hands-On
            <br />
            <em className="font-light italic text-warm-600">Craftsmanship</em>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-600">
            We&apos;re not the biggest contractor in Southwest Florida — and
            that&apos;s by design. We stay hands-on so every project gets the
            attention it deserves.
          </p>
        </div>

        {/* Founder quote block */}
        <div className="grid gap-10 rounded-[2rem] bg-white p-8 lg:grid-cols-12 lg:items-center lg:p-14">
          <div className="lg:col-span-8">
            <h3 className="font-display text-2xl font-semibold text-warm-900 sm:text-3xl">
              No surprises. That&apos;s the whole point.
            </h3>
            <blockquote className="mt-5 max-w-2xl text-base leading-relaxed text-warm-600">
              &ldquo;I lead every project with a structured process designed to
              protect the client, control quality, and deliver a finished space
              that reflects your vision — on budget, on time, and with no
              surprises.&rdquo;
            </blockquote>
            <p className="mt-6 font-display text-lg font-semibold text-warm-900">
              Junior Da Silva
            </p>
            <p className="text-sm text-warm-500">
              Founder &amp; Licensed Building Contractor · FL #CBC1269972
            </p>
          </div>
          <div className="lg:col-span-4">
            <div
              className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center"
              style={{ backgroundImage: "url('/images/kitchen-warm-craftsman.webp')" }}
              role="img"
              aria-label="Warm craftsman kitchen remodel by Stacked Construction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Team — list rows (reference: "• Our Architects") ─────────────────────── */

const team = [
  {
    name: "Junior Da Silva",
    role: "Founder & Licensed Building Contractor",
    note: "Florida-licensed building contractor (CBC1269972) with nearly a decade of hands-on remodeling experience across Southwest Florida.",
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
    <section className="bg-white py-24 lg:py-32" aria-label="Our team">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow mb-12 text-warm-900">Our Team</p>
        <div className="divide-y divide-warm-200 border-t border-warm-200">
          {team.map((member) => (
            <div
              key={member.name}
              className="grid gap-4 py-8 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-4">
                <h3 className="font-display text-2xl font-semibold text-warm-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-warm-500">{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-warm-600 lg:col-span-5">
                {member.note}
              </p>
              <div className="lg:col-span-3 lg:text-right">
                <Link
                  href={member.href}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-warm-900 transition-colors hover:text-accent-dark"
                >
                  View Profile
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Project Categories — dark image section (reference) ──────────────────── */

const categories = [
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Outdoor Living & Kitchens", href: "/services/outdoor-living" },
  { name: "Full Home Renovation", href: "/services/home-renovation" },
  { name: "Flooring & Tile", href: "/services/flooring-tile" },
];

export function ProjectCategories() {
  return (
    <section className="bg-warm-50 px-3 py-6 lg:px-4" aria-label="Project categories">
      <div className="relative overflow-hidden rounded-[2rem] bg-warm-900 lg:rounded-[2.5rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/kitchen-poolside-oak.webp')" }}
          role="img"
          aria-label="Poolside oak kitchen remodel by Stacked Construction in Bonita Springs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/85 via-warm-900/55 to-warm-900/25" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <h2 className="font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl">
                Project
                <br />
                <em className="font-light italic text-warm-200">Categories</em>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <ul className="space-y-4">
                {categories.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="eyebrow text-warm-100 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Contact us
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Case studies — editorial rows (reference: "• Recent case studies") ───── */

const caseStudies = [
  {
    title: "Marble Waterfall Island Kitchen",
    location: "Naples, FL",
    href: "/areas/naples",
    description:
      "Dramatic marble waterfall island with natural wood cabinetry, bronze pendant lighting, and pool-view sliding glass doors.",
    image: "/images/kitchen-marble-waterfall.webp",
  },
  {
    title: "Poolside Oak Kitchen",
    location: "Bonita Springs, FL",
    href: "/areas/bonita-springs",
    description:
      "Light oak cabinetry with waterfall marble island, pool views, open shelving, and a seamless indoor-outdoor Florida living layout.",
    image: "/images/kitchen-poolside-oak.webp",
  },
  {
    title: "Coastal Reeded Island Kitchen",
    location: "Fort Myers, FL",
    href: "/areas/fort-myers",
    description:
      "Warm coastal kitchen with reeded oak island cabinetry, quartz countertops, floating shelves, and tropical greenery framed by oversized windows.",
    image: "/images/kitchen-coastal-reeded.webp",
  },
  {
    title: "Coastal White & Beam Kitchen",
    location: "Cape Coral, FL",
    href: "/areas/cape-coral",
    description:
      "Bright white shaker cabinetry with exposed wood ceiling beams, marble island, floating wood shelves, and lanai views.",
    image: "/images/kitchen-coastal-white-beams.webp",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-warm-50 py-24 lg:py-32" aria-label="Recent case studies">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header — local-proof framing */}
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 text-warm-900">Recent case studies</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl lg:text-6xl">
              Built in Your
              <br />
              <em className="font-light italic text-warm-600">Neighborhood</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-warm-600 lg:ml-auto">
              Naples, Bonita Springs, Fort Myers, Cape Coral, and surrounding
              communities across Lee &amp; Collier counties.
            </p>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="grid gap-8 border-t border-warm-200 pt-12 lg:grid-cols-12 lg:items-center"
            >
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-lg font-semibold text-warm-400">
                    {String(i + 1).padStart(2, "0")}{" "}
                    <span className="text-warm-300">/ {String(caseStudies.length).padStart(2, "0")}</span>
                  </span>
                  <p className="eyebrow text-warm-500">{cs.location}</p>
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold text-warm-900 sm:text-4xl">
                  {cs.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-600">
                  {cs.description}
                </p>
                <Link
                  href={cs.href}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-warm-800"
                >
                  Remodeling in {cs.location.replace(", FL", "")}
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
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                <div
                  className="aspect-[16/10] w-full rounded-[2rem] bg-cover bg-center"
                  style={{ backgroundImage: `url('${cs.image}')` }}
                  role="img"
                  aria-label={`${cs.title} — ${cs.location}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 rounded-full border border-warm-900/25 py-2.5 pl-7 pr-2.5 text-[13px] font-semibold uppercase tracking-wider text-warm-900 transition-all hover:border-warm-900"
          >
            View all projects
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

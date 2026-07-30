import Link from "next/link";
import { stakes, cta, guide, planSteps as planStepsList } from "@/data/brand";

/**
 * StoryBrand "stakes" section — what's at risk without a good builder.
 * Stated once, briefly, then we swing straight back to the positive.
 * Placed high on the page because the problem is the hook.
 */
export default function Stakes() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-label="Why choosing the right builder matters">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5 text-warm-500">Why it matters</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
              The wrong builder costs
              <br />
              <em className="not-italic font-semibold text-accent-dark">
                more than money
              </em>
            </h2>
            {/* Relocated from the hero, where it floated as an orphan above the
                H1 and competed for first fixation. It opens this section
                properly — the empathy statement that earns the stakes below. */}
            <blockquote className="mt-7 border-l-2 border-accent-dark pl-6">
              <p className="font-display text-xl leading-snug text-warm-900 sm:text-2xl">
                {guide.empathy}
              </p>
            </blockquote>
            <p className="mt-6 max-w-md text-base leading-relaxed text-warm-600">
              You already know this, which is probably why you&apos;ve been
              putting the project off. Almost everyone we sit down with has
              either lived through one of these or heard about it from a
              neighbor.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-warm-200 border-t border-warm-200">
              {stakes.points.map((point) => (
                <li key={point} className="flex items-start gap-4 py-5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-dark"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-warm-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* The turn — swing back to the positive */}
            <div className="mt-10 rounded-3xl bg-warm-50 p-7 lg:p-8">
              <p className="font-display text-xl font-semibold text-warm-900">
                None of that is inevitable.
              </p>
              <p className="mt-3 text-base leading-relaxed text-warm-600">
                It happens when nobody is accountable for the whole project.
                We design and build with one team, so there&apos;s one plan, one
                schedule, and one person answering your calls.
              </p>
              <Link
                href="/process"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-warm-900 transition-colors hover:text-accent-dark"
              >
                See how we work
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * StoryBrand "plan" section — the three steps, promoted onto the home page.
 * Customers trust a guide who gives them a plan.
 */
export function PlanSteps() {
  return (
    <section className="bg-warm-50 px-3 py-6 lg:px-4" aria-label="How we work">
      <div className="relative overflow-hidden rounded-[2rem] bg-warm-900 py-24 lg:rounded-[2.5rem] lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5 text-warm-400">How we work</p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                Three steps, and you
                <br />
                <em className="not-italic font-semibold text-accent">
                  always know the next one
                </em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-warm-300 lg:col-span-4 lg:col-start-9">
              No mystery about what happens after you call. Here&apos;s the
              whole process, start to finish.
            </p>
          </div>

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {planStepsList.map((step) => (
              <li
                key={step.number}
                className="border-t border-white/15 pt-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-bold text-accent">
                    {step.number}
                  </span>
                  <p className="eyebrow text-warm-400">{step.summary}</p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-300">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href={cta.directHref}
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
            >
              {cta.direct}
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              See the full process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

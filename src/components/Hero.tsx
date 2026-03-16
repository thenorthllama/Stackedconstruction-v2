import { AnimatedHero } from "@/components/ui/animated-hero";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-warm-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Modern home renovation by Stacked Construction featuring warm interior lighting"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-warm-900/85 via-warm-900/50 to-warm-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-warm-900/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32 lg:items-center lg:px-10 lg:pb-24">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          {/* Main headline — left side */}
          <div className="lg:col-span-7">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-300">
              Southwest Florida Remodeling
            </p>
            <AnimatedHero />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Get Free Estimate
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Supporting text — right side */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-l border-warm-400/30 pl-6">
              <p className="font-display text-xl font-medium leading-snug text-white lg:text-2xl">
                Remodeling
                <br />
                <em className="font-light italic text-warm-300">Can Mean</em>{" "}
                Everything
              </p>
              <p className="mt-4 text-sm leading-relaxed text-warm-400">
                Premium kitchen, bathroom, and whole-home renovation crafted
                with honesty, quality craftsmanship, and clear communication
                across Fort Myers, Naples, and all of SWFL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-50 to-transparent" />
    </section>
  );
}

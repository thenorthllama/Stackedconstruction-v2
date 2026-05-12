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
                href="tel:+12397850166"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call (239) 785-0166
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Get Free Estimate
                <svg
                  className="ml-2 h-3.5 w-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

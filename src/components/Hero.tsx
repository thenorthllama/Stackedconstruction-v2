"use client";

import { useEffect, useState } from "react";
import { AnimatedHero } from "@/components/ui/animated-hero";

const slides = [
  {
    image: "/images/hero-bg.webp",
    alt: "Modern home renovation by Stacked Construction featuring warm interior lighting",
  },
  {
    image: "/images/kitchen-marble-waterfall.webp",
    alt: "Luxury kitchen remodel with marble waterfall island in Southwest Florida",
  },
  {
    image: "/images/kitchen-beachfront-luxury.webp",
    alt: "Beachfront luxury kitchen renovation in Naples, Florida",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-warm-50 px-3 pt-2 lg:px-4" aria-label="Featured remodeling work">
      <div
        className="relative min-h-[94vh] overflow-hidden rounded-[2rem] bg-warm-900 lg:rounded-[2.5rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Carousel backgrounds */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="img"
            aria-label={slide.alt}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/85 via-warm-900/45 to-warm-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/65 via-transparent to-warm-900/30" />

        {/* Small editorial quote — top left, reference style */}
        <p className="absolute left-6 top-32 z-10 max-w-[240px] text-[13px] leading-relaxed text-warm-200/90 lg:left-10 lg:top-40">
          Most people we meet have a story about a contractor who went quiet.
          That&apos;s the whole reason we work the way we do.
        </p>

        <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl items-end px-6 pb-24 pt-56 lg:px-10 lg:pb-28">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
            {/* Main headline — left side */}
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6 text-warm-300">
                Southwest Florida Design-Build
              </p>
              <AnimatedHero />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
                >
                  Request a Consultation
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="tel:+12397850166"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Call (239) 785-0166
                </a>
              </div>
            </div>

            {/* Caption block — right side, editorial reference style */}
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <h2 className="font-display text-2xl font-semibold leading-snug text-white">
                We design it and
                <br />
                we build it
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-300">
                One team from first sketch to final walk-through — so you
                aren&apos;t the one relaying messages between a designer and a
                builder.
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/20 pt-5">
                {[
                  "A line-item proposal, not a lump sum",
                  "One point of contact, start to finish",
                  "Permits and inspections handled for you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-warm-200">
                    <span
                      className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel dot indicators */}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

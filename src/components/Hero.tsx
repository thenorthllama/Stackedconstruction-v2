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
    <section
      className="relative min-h-screen bg-warm-900"
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
      <div className="absolute inset-0 bg-gradient-to-r from-warm-900/85 via-warm-900/50 to-warm-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-transparent to-warm-900/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24 pt-40 lg:items-center lg:px-10 lg:pb-28">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
          {/* Main headline — left side */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 text-warm-300">
              Southwest Florida Remodeling
            </p>
            <AnimatedHero />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+12397850166"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100"
              >
                Call (239) 785-0166
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Get Free Estimate
              </a>
            </div>
          </div>

          {/* Caption block — right side, editorial reference style */}
          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <h2 className="font-display text-2xl font-semibold leading-snug text-white">
              Remodeling
              <br />
              done right
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-300">
              Licensed &amp; insured Florida general contractor. Kitchens,
              bathrooms, and whole-home renovations across Naples, Bonita
              Springs, Fort Myers, and Cape Coral.
            </p>
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
    </section>
  );
}

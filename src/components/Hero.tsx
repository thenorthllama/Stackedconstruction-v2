"use client";

import { useCallback, useId, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { brand, cta } from "@/data/brand";

/**
 * Hero carousel.
 *
 * Accessibility model adapted from the 21st.dev "Accessible Image Slider Card"
 * (moumensoliman): arrow/Home/End keyboard paging, roving tabindex on the dots,
 * an sr-only live region announcing position, and aria-roledescription.
 * Restyled in brand tokens — the full-bleed rounded card, cream frame, and
 * pill CTAs are unchanged.
 *
 * Fixes from the UX audit:
 *  - prev/next controls (previously dots only)
 *  - 44px hit areas on the dots (previously 8px tall)
 *  - autoplay removed entirely. It required a pause control to satisfy WCAG
 *    2.2.2, and a hero that shifts on its own works against an already anxious
 *    buyer. Three slides with visible controls browse fine by hand.
 *  - a dedicated right-edge scrim so the proof column stays legible on every
 *    slide, not just the first
 */

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

const proofPoints = [
  "A line-item proposal, not a lump sum",
  "One point of contact, start to finish",
  "Permits and inspections handled for you",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const regionId = useId();

  const paginate = useCallback((delta: number) => {
    setActive((i) => (i + delta + slides.length) % slides.length);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        paginate(-1);
        break;
      case "ArrowRight":
        e.preventDefault();
        paginate(1);
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(slides.length - 1);
        break;
    }
  };

  return (
    <section className="bg-warm-50 px-3 pt-2 lg:px-4" aria-label="Featured remodeling work">
      <div
        className="relative min-h-[94vh] overflow-hidden rounded-[2rem] bg-warm-900 lg:rounded-[2.5rem]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Recent Stacked Construction projects"
        onKeyDown={onKeyDown}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Scrims. The third is new: it guarantees the right-hand proof column
            stays legible over every slide, not just the dark first one. */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/85 via-warm-900/45 to-warm-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-warm-900/30" />
        <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-l from-warm-900/80 to-transparent lg:block" />

        {/* Screen-reader position announcement */}
        <span className="sr-only" role="status" aria-live="polite">
          Slide {active + 1} of {slides.length}: {slides[active].alt}
        </span>

        <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl items-end px-6 pb-28 pt-40 lg:px-10 lg:pb-32">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-end">
            {/* Offer */}
            <div className="lg:col-span-7">
              <AnimatedHero />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-warm-100 sm:text-xl">
                Design-build remodeling in Southwest Florida. One licensed team
                designs it, prices it line by line, and builds it.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={cta.directHref}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-base font-semibold text-warm-900 transition-all hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-900"
                >
                  {cta.direct}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-900 text-white transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href={brand.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-900"
                >
                  Call {brand.phone}
                </a>
              </div>
            </div>

            {/* Proof column */}
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <h2 className="font-display text-2xl font-bold leading-snug text-white">
                What you can count on
              </h2>
              <ul className="mt-5 space-y-3">
                {proofPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-warm-100">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Carousel controls ────────────────────────────────────────
            Grouped bottom-centre so they read as one control cluster rather
            than arrows floating over the photograph. */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-warm-900/40 px-1.5 py-1.5 backdrop-blur-md">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* Dots — 44px targets via padding, 2px visual bar, roving tabindex */}
          <div
            className="flex items-center"
            role="tablist"
            aria-label="Choose slide"
          >
            {slides.map((slide, i) => {
              const isActive = i === active;
              return (
                <button
                  key={slide.image}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${regionId}-slide-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="group flex h-11 items-center justify-center px-2 focus-visible:outline-none"
                >
                  <span className="sr-only">
                    Slide {i + 1} of {slides.length}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-warm-900 motion-reduce:transition-none ${
                      isActive ? "w-7 bg-white" : "w-1.5 bg-white/45 group-hover:bg-white/80"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

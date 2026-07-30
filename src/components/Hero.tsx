"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { brand, cta } from "@/data/brand";

/**
 * Hero carousel.
 *
 * Accessibility model adapted from the 21st.dev "Accessible Image Slider Card"
 * (moumensoliman): arrow/Home/End keyboard paging, roving tabindex on the dots,
 * an sr-only live region announcing position, aria-roledescription="carousel",
 * and framer-motion's useReducedMotion. Restyled in brand tokens — the
 * full-bleed rounded card, cream frame, and pill CTAs are unchanged.
 *
 * Fixes from the UX audit:
 *  - prev/next controls and a pause toggle (previously dots only)
 *  - 44px hit areas on the dots (previously 8px tall)
 *  - pauses on focus as well as hover (keyboard users no longer get slides
 *    changing underneath them)
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

const AUTOPLAY_MS = 6000;

const proofPoints = [
  "A line-item proposal, not a lump sum",
  "One point of contact, start to finish",
  "Permits and inspections handled for you",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const regionId = useId();
  const dotsRef = useRef<HTMLDivElement>(null);

  const playing = !userPaused && !hovering && !focusWithin && !shouldReduceMotion;

  const paginate = useCallback((delta: number) => {
    setActive((i) => (i + delta + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, paginate]);

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
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setFocusWithin(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocusWithin(false);
        }}
        onKeyDown={onKeyDown}
      >
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="img"
            aria-label={slide.alt}
            aria-hidden={i !== active}
          />
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
              <p className="eyebrow mb-6 text-warm-300">Southwest Florida Design-Build</p>
              <AnimatedHero />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={cta.directHref}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-7 pr-2.5 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-900"
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
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-900"
                >
                  Call {brand.phone}
                </a>
              </div>
            </div>

            {/* Proof column */}
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <h2 className="font-display text-2xl font-semibold leading-snug text-white">
                We design it and
                <br />
                we build it
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-200">
                One team from first sketch to final walk-through — so you
                aren&apos;t the one relaying messages between a designer and a
                builder.
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/20 pt-5">
                {proofPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-warm-100">
                    <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
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
            ref={dotsRef}
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

          {/* Pause is hidden when reduced-motion is on — autoplay never starts */}
          {!shouldReduceMotion && (
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
              aria-pressed={userPaused}
              className="ml-0.5 flex h-11 w-11 items-center justify-center rounded-full border-l border-white/15 text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {userPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

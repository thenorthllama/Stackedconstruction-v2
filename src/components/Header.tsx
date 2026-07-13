"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
  { href: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
  { href: "/services/home-renovation", label: "Full Home Renovation" },
  { href: "/services/outdoor-living", label: "Outdoor Living & Kitchens" },
  { href: "/services/flooring-tile", label: "Flooring & Tile" },
];

const navLinks = [
  { href: "/process", label: "Process" },
  { href: "/about", label: "About Us" },
  { href: "/areas/fort-myers", label: "Areas" },
  { href: "/blog", label: "Articles" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top banner — espresso strip with phone CTA */}
      <div
        className={`bg-warm-900 transition-all duration-300 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 lg:px-10">
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-warm-400 sm:block">
            Ready to start your project?
          </span>
          <span className="hidden text-warm-700 sm:block">·</span>
          <a
            href="tel:+12397850166"
            className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-warm-300"
          >
            <svg
              className="h-3.5 w-3.5 text-warm-400"
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
            Call Us Now — (239) 785-0166
          </a>
        </div>
      </div>

      {/* Floating white pill nav */}
      <div className="mx-auto max-w-7xl px-4 pt-3 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full bg-white/95 py-2.5 pl-5 pr-2.5 backdrop-blur-md transition-shadow duration-300 lg:pl-7 ${
            scrolled ? "shadow-lg shadow-warm-900/10" : "shadow-md shadow-warm-900/5"
          }`}
        >
          <Link href="/" className="block shrink-0">
            <Image
              src="/images/logo-dark.png"
              alt="Stacked Construction"
              width={330}
              height={60}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {/* Services dropdown */}
            <div className="group/dd relative">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 py-3 text-[13px] font-medium uppercase tracking-wider text-warm-600 transition-colors hover:text-warm-900"
                aria-haspopup="true"
              >
                Services
                <svg
                  className="h-3 w-3 transition-transform duration-200 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/dd:visible group-hover/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:opacity-100">
                <ul className="overflow-hidden rounded-3xl bg-white p-2.5 shadow-xl shadow-warm-900/10 ring-1 ring-warm-200">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-50 hover:text-warm-900"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-warm-100 pt-1">
                    <Link
                      href="/services"
                      className="block rounded-2xl px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-warm-900 transition-colors hover:bg-warm-50"
                    >
                      All Services →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-wider text-warm-600 transition-colors hover:text-warm-900"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-warm-800"
            >
              Get Estimate
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </nav>

          <button
            type="button"
            className="mr-3 flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px w-7 bg-warm-900 transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-7 bg-warm-900 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-7 bg-warm-900 transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="mt-2 rounded-3xl bg-white/98 px-6 pb-8 pt-5 shadow-xl shadow-warm-900/10 backdrop-blur-md md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-5">
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-base font-medium text-warm-700 hover:text-warm-900"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <ul className="mt-3 flex flex-col gap-3 border-l border-warm-200 pl-4">
                    {serviceLinks.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="text-sm text-warm-600 hover:text-warm-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="text-sm font-semibold text-warm-900"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services →
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-medium text-warm-700 hover:text-warm-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mt-2 inline-block rounded-full bg-warm-900 px-6 py-3 text-sm font-semibold text-white hover:bg-warm-800"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Estimate
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

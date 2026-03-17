"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas/fort-myers", label: "Areas" },
  { href: "/process", label: "Process" },
  { href: "/#projects", label: "Projects" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-display text-xl font-bold tracking-tight text-white lg:text-2xl">
            STACKED
          </span>
          <span className="font-display text-xl font-light italic text-warm-300 lg:text-2xl">
            Construction
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-wider text-warm-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-6 py-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-warm-900"
          >
            Get Estimate
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-7 bg-white transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-7 bg-white transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="bg-warm-900/98 backdrop-blur-md px-6 pb-8 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-warm-200 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-2 inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-warm-900"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Estimate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

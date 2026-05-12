"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About Us" },
  { href: "/areas/fort-myers", label: "Areas" },
  { href: "/blog", label: "Articles" },
  { href: "/gallery", label: "Gallery" },
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
      {/* Top banner */}
      <div className="bg-warm-900/90 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 lg:px-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-warm-400 hidden sm:block">
            Ready to start your project?
          </span>
          <span className="hidden sm:block text-warm-700">·</span>
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

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="Stacked Construction"
            width={330}
            height={60}
            className="h-12 w-auto lg:h-[60px]"
            priority
          />
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

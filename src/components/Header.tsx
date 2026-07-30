"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand, cta } from "@/data/brand";

/**
 * Site header.
 *
 * Dropdown interaction model adapted from the 21st.dev "Navbar with Dropdowns"
 * pattern (Radix-style): hover to open on pointer devices, click/Enter to toggle
 * on keyboard, Escape to close, focus-within keeps it open while tabbing
 * through. Restyled entirely in brand tokens — the floating cream/white pill
 * and espresso announcement strip are unchanged.
 */

const serviceLinks = [
  { href: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
  { href: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
  { href: "/services/home-renovation", label: "Full Home Renovation" },
  { href: "/services/outdoor-living", label: "Outdoor Living & Kitchens" },
  { href: "/services/flooring-tile", label: "Flooring & Tile" },
];

/** Areas used to link straight into Fort Myers — a wayfinding trap for
 *  everyone else. Now every service area is reachable. */
const areaLinks = [
  { href: "/areas/naples", label: "Naples" },
  { href: "/areas/bonita-springs", label: "Bonita Springs" },
  { href: "/areas/fort-myers", label: "Fort Myers" },
  { href: "/areas/cape-coral", label: "Cape Coral" },
];

const countyLinks = [
  { href: "/areas/lee-county", label: "Lee County" },
  { href: "/areas/collier-county", label: "Collier County" },
];

/** Gallery moved out of top level — it duplicated Projects conceptually.
 *  It's now surfaced from /projects instead. */
const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Articles" },
];

type MenuKey = "services" | "areas" | null;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Drive the --header-h CSS variable so scroll offsets stay correct when the
  // announcement bar collapses. See globals.css.
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
      document.documentElement.dataset.scrolled = String(isScrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes any open menu; click-away closes desktop dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileGroup(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Announcement strip — secondary CTA (call) lives here ─────── */}
      <div
        className={`bg-warm-900 transition-all duration-300 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 lg:px-10">
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-warm-400 sm:block">
            Licensed &amp; insured · FL #{brand.license}
          </span>
          <span className="hidden text-warm-700 sm:block">·</span>
          <a
            href={brand.phoneHref}
            className="flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-warm-300"
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
            {brand.phone}
          </a>
        </div>
      </div>

      {/* ── Floating pill nav ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pt-3 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full bg-white/95 py-2.5 pl-5 pr-2.5 backdrop-blur-md transition-shadow duration-300 lg:pl-7 ${
            scrolled ? "shadow-lg shadow-warm-900/10" : "shadow-md shadow-warm-900/5"
          }`}
        >
          <Link href="/" className="block shrink-0" aria-label="Stacked Construction — home">
            <Image
              src="/images/logo-dark.png"
              alt="Stacked Construction"
              width={330}
              height={60}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </Link>

          <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <NavDropdown
              label="Services"
              href="/services"
              isOpen={openMenu === "services"}
              onOpen={() => setOpenMenu("services")}
              onClose={() => setOpenMenu(null)}
              onToggle={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              <DropdownList links={serviceLinks} allHref="/services" allLabel="All services" />
            </NavDropdown>

            <NavDropdown
              label="Areas"
              href="/areas/naples"
              isOpen={openMenu === "areas"}
              onOpen={() => setOpenMenu("areas")}
              onClose={() => setOpenMenu(null)}
              onToggle={() => setOpenMenu(openMenu === "areas" ? null : "areas")}
            >
              <div className="w-72 overflow-hidden rounded-3xl bg-white p-2.5 shadow-xl shadow-warm-900/10 ring-1 ring-warm-200">
                <p className="px-4 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400">
                  Cities
                </p>
                <ul>
                  {areaLinks.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-50 hover:text-warm-900"
                        onClick={() => setOpenMenu(null)}
                      >
                        {a.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-1 border-t border-warm-100 px-4 pb-1.5 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-warm-400">
                  Counties
                </p>
                <ul>
                  {countyLinks.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-50 hover:text-warm-900"
                        onClick={() => setOpenMenu(null)}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavDropdown>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-medium uppercase tracking-wider text-warm-600 transition-colors hover:bg-warm-50 hover:text-warm-900"
              >
                {link.label}
              </Link>
            ))}

            {/* Primary CTA — same label as every other primary on the site */}
            <Link
              href={cta.directHref}
              className="group ml-2 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-warm-900 py-2 pl-6 pr-2 text-[13px] font-semibold text-white transition-colors hover:bg-warm-800"
            >
              {cta.direct}
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-warm-900 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile: call + menu toggle, both 44px */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={brand.phoneHref}
              className="flex h-11 w-11 items-center justify-center rounded-full text-warm-900 transition-colors hover:bg-warm-50"
              aria-label={`Call ${brand.phone}`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-warm-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className={`block h-px w-6 bg-warm-900 transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-warm-900 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-warm-900 transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── Mobile sheet ───────────────────────────────────────────── */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            className="mt-2 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl bg-white px-5 pb-6 pt-4 shadow-xl shadow-warm-900/10 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col">
              <MobileGroup
                label="Services"
                open={mobileGroup === "services"}
                onToggle={() => setMobileGroup(mobileGroup === "services" ? null : "services")}
                links={[...serviceLinks, { href: "/services", label: "All services" }]}
                onNavigate={closeMobile}
              />
              <MobileGroup
                label="Areas"
                open={mobileGroup === "areas"}
                onToggle={() => setMobileGroup(mobileGroup === "areas" ? null : "areas")}
                links={[...areaLinks, ...countyLinks]}
                onNavigate={closeMobile}
              />
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-warm-100 last:border-0">
                  <Link
                    href={link.href}
                    className="flex min-h-[52px] items-center text-base font-medium text-warm-800"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-b border-warm-100">
                <Link
                  href="/gallery"
                  className="flex min-h-[52px] items-center text-base font-medium text-warm-800"
                  onClick={closeMobile}
                >
                  Gallery
                </Link>
              </li>
            </ul>

            <Link
              href={cta.directHref}
              className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full bg-warm-900 px-6 text-sm font-semibold text-white"
              onClick={closeMobile}
            >
              {cta.direct}
            </Link>
            <a
              href={brand.phoneHref}
              className="mt-2.5 flex min-h-12 w-full items-center justify-center rounded-full border border-warm-900/25 px-6 text-sm font-medium text-warm-900"
              onClick={closeMobile}
            >
              Call {brand.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

/* ── Desktop dropdown ───────────────────────────────────────────────────── */

function NavDropdown({
  label,
  href,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  children,
}: {
  label: string;
  href: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose();
      }}
    >
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium uppercase tracking-wider text-warm-600 transition-colors hover:bg-warm-50 hover:text-warm-900"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {label}
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-all duration-200 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {children}
      </div>
      {/* Keyboard users who don't want the menu can still reach the index page */}
      <Link href={href} className="sr-only">
        {label} overview
      </Link>
    </div>
  );
}

function DropdownList({
  links,
  allHref,
  allLabel,
}: {
  links: { href: string; label: string }[];
  allHref: string;
  allLabel: string;
}) {
  return (
    <ul className="w-72 overflow-hidden rounded-3xl bg-white p-2.5 shadow-xl shadow-warm-900/10 ring-1 ring-warm-200">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-50 hover:text-warm-900"
          >
            {l.label}
          </Link>
        </li>
      ))}
      <li className="mt-1 border-t border-warm-100 pt-1">
        <Link
          href={allHref}
          className="block rounded-2xl px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-warm-900 transition-colors hover:bg-warm-50"
        >
          {allLabel} →
        </Link>
      </li>
    </ul>
  );
}

/* ── Mobile accordion group ─────────────────────────────────────────────── */

function MobileGroup({
  label,
  open,
  onToggle,
  links,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  links: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <li className="border-b border-warm-100">
      <button
        type="button"
        className="flex min-h-[52px] w-full items-center justify-between text-base font-medium text-warm-800"
        onClick={onToggle}
        aria-expanded={open}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <ul className="mb-3 ml-3 border-l border-warm-200 pl-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex min-h-11 items-center text-sm text-warm-600"
                onClick={onNavigate}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

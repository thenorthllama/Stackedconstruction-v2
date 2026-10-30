"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta";
import { CONSENT_KEY, OPEN_CONSENT_EVENT } from "@/lib/consent";

/**
 * Cookie consent banner wired to Google Consent Mode v2.
 *
 * layout.tsx sets every non-essential signal to "denied" before GTM loads and
 * re-applies a stored choice for returning visitors. This banner records the
 * visitor's choice and sends the matching consent update to GTM.
 *
 * Categories match section 5 of /privacy:
 *   analytics   → analytics_storage (Google Analytics)
 *   advertising → ad_storage, ad_user_data, ad_personalization (Google Ads, Meta Pixel)
 */

type Choice = { analytics: boolean; advertising: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const CHANGE_EVENT = "sc:consent-change";
/** Fallback when localStorage is blocked, so the banner still closes for this visit */
let memoryChoice: string | null = null;

function readRaw(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? memoryChoice;
  } catch {
    return memoryChoice;
  }
}

function readChoice(): Choice | null {
  try {
    const raw = readRaw();
    return raw ? (JSON.parse(raw) as Choice) : null;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

function applyChoice(choice: Choice) {
  memoryChoice = JSON.stringify(choice);
  try {
    localStorage.setItem(CONSENT_KEY, memoryChoice);
  } catch {
    // Private mode — memoryChoice covers this page view
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));

  const ads = choice.advertising ? "granted" : "denied";
  window.dataLayer = window.dataLayer || [];
  // gtag() pushes the arguments object, not an array — GTM only reads that shape
  const gtag: (...args: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  gtag("consent", "update", {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  });
  // Lets non-Google tags in GTM (e.g. Meta Pixel) trigger on the choice
  window.dataLayer.push({ event: "consent_update", ...choice });
}

export function CookieConsent() {
  // "pending" on the server and during hydration, so the banner never flashes
  // for visitors who already chose
  const stored = useSyncExternalStore(subscribe, readRaw, () => "pending");
  const [reopened, setReopened] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [choice, setChoice] = useState<Choice>({ analytics: true, advertising: true });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reopen = () => {
      setChoice(readChoice() ?? { analytics: true, advertising: true });
      setCustomizing(true);
      setReopened(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  // Reopened from the footer — move focus so keyboard users land in the panel
  useEffect(() => {
    if (reopened) panelRef.current?.focus();
  }, [reopened]);

  if (stored !== null && !reopened) return null;

  const save = (next: Choice) => {
    applyChoice(next);
    setChoice(next);
    setCustomizing(false);
    setReopened(false);
  };

  return (
    <div
      ref={panelRef}
      role="region"
      aria-label="Cookie preferences"
      tabIndex={-1}
      className="fixed inset-x-4 bottom-4 z-[60] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-warm-200 bg-warm-50 p-6 text-warm-800 shadow-[0_20px_50px_-12px_rgba(26,23,20,0.35)] outline-none sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md"
    >
      <h2 className="font-display text-lg font-semibold text-warm-900">Your cookie choices</h2>
      <p className="mt-2 text-sm leading-relaxed text-warm-700">
        We use cookies to see how visitors use the site and to measure our ads. Essential cookies
        are always on. See our{" "}
        <Link href="/privacy" className="font-medium text-warm-900 underline underline-offset-2 hover:text-accent-dark">
          Privacy Policy
        </Link>
        .
      </p>

      {customizing && (
        <fieldset className="mt-5 space-y-1 border-t border-warm-200 pt-4">
          <legend className="sr-only">Cookie categories</legend>
          <ConsentToggle
            label="Essential"
            description="Keeps the site and forms working."
            checked
            disabled
          />
          <ConsentToggle
            label="Analytics"
            description="Google Analytics — which pages are read and how visitors find us."
            checked={choice.analytics}
            onChange={(analytics) => setChoice((c) => ({ ...c, analytics }))}
          />
          <ConsentToggle
            label="Advertising"
            description="Google Ads and Meta — measures and personalizes our ads."
            checked={choice.advertising}
            onChange={(advertising) => setChoice((c) => ({ ...c, advertising }))}
          />
        </fieldset>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {customizing ? (
          <CtaButton noArrow className="px-6" onClick={() => save(choice)}>
            Save choices
          </CtaButton>
        ) : (
          <CtaButton noArrow className="px-6" onClick={() => save({ analytics: true, advertising: true })}>
            Accept all
          </CtaButton>
        )}
        <CtaButton
          variant="secondary"
          noArrow
          className="px-6"
          onClick={() => save({ analytics: false, advertising: false })}
        >
          Reject all
        </CtaButton>
        {!customizing && (
          <CtaButton variant="tertiary" noArrow onClick={() => setCustomizing(true)}>
            Customize
          </CtaButton>
        )}
      </div>
    </div>
  );
}

function ConsentToggle({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className={`flex min-h-11 items-start justify-between gap-4 py-2 ${disabled ? "" : "cursor-pointer"}`}>
      <span>
        <span className="block text-sm font-semibold text-warm-900">
          {label}
          {disabled && <span className="ml-2 font-normal text-warm-500">Always on</span>}
        </span>
        <span className="block text-sm leading-snug text-warm-600">{description}</span>
      </span>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="relative mt-0.5 h-6 w-11 shrink-0 rounded-full bg-warm-300 transition-colors peer-checked:bg-warm-900 peer-disabled:opacity-50 peer-focus-visible:ring-2 peer-focus-visible:ring-accent-dark peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-warm-50 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5 motion-reduce:after:transition-none"
      />
    </label>
  );
}

/** Footer link that reopens the banner so visitors can change their choice */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      Cookie settings
    </button>
  );
}

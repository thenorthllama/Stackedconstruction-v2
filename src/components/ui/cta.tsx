"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * The site's single CTA system.
 *
 * Adapted from the 21st.dev "Button" component (micka_design) — its variant +
 * loading-state architecture — rewritten entirely in Stacked Construction
 * tokens. No foreign palette, radii, or type scale survives.
 *
 * TAXONOMY (see BRAND-VOICE.md). One casing rule each:
 *   primary    — the one conversion action. Espresso pill + arrow chip. Sentence case.
 *   onDark     — same weight, inverted for dark sections. Sentence case.
 *   secondary  — the call-us / alternate action. Outlined pill. Sentence case.
 *   tertiary   — inline navigation within content. Text + arrow. UPPERCASE via CSS.
 *
 * All variants meet the 44px minimum target height.
 */

const ctaVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-3",
    "font-semibold transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-60",
    // Focus ring uses the brand accent, offset so it reads on cream and on photos
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark focus-visible:ring-offset-2 focus-visible:ring-offset-warm-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-warm-900 text-white hover:bg-warm-800 active:bg-warm-900",
        onDark:
          "rounded-full bg-white text-warm-900 hover:bg-warm-100 active:bg-warm-200 focus-visible:ring-white focus-visible:ring-offset-warm-900",
        secondary:
          "rounded-full border border-warm-900/25 bg-transparent text-warm-900 hover:border-warm-900 hover:bg-warm-900/[0.04]",
        secondaryOnDark:
          "rounded-full border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-warm-900",
        tertiary:
          "text-[13px] uppercase tracking-wider text-warm-900 hover:text-accent-dark",
        tertiaryOnDark:
          "text-[13px] uppercase tracking-wider text-warm-100 hover:text-white focus-visible:ring-white focus-visible:ring-offset-warm-900",
      },
      size: {
        // pl/pr asymmetry leaves room for the trailing arrow chip
        md: "min-h-11 py-2.5 pl-7 pr-2.5 text-sm",
        lg: "min-h-12 py-3 pl-8 pr-3 text-sm",
        // inline variants carry their own padding for a 44px touch area
        inline: "min-h-11 gap-2 py-2",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

/** The circular arrow chip — the brand's signature affordance. */
function ArrowChip({
  variant,
  className,
}: {
  variant: NonNullable<VariantProps<typeof ctaVariants>["variant"]>;
  className?: string;
}) {
  const chip =
    variant === "onDark"
      ? "bg-warm-900 text-white"
      : variant === "primary"
        ? "bg-white text-warm-900"
        : variant === "secondaryOnDark"
          ? "bg-white text-warm-900"
          : "bg-warm-900 text-white";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
        chip,
        className,
      )}
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </span>
  );
}

/** Small inline arrow for tertiary links. */
function InlineArrow() {
  return (
    <svg
      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

type SharedProps = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  className?: string;
  /** Hide the trailing arrow (e.g. phone links, form submits) */
  noArrow?: boolean;
};

/* ── Link CTA ──────────────────────────────────────────────────────────── */

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  noArrow = false,
  external = false,
}: SharedProps & { href: string; external?: boolean }) {
  const isInline = variant === "tertiary" || variant === "tertiaryOnDark";
  const resolvedSize = isInline ? "inline" : size;
  const cls = cn(ctaVariants({ variant, size: resolvedSize }), className);

  const content = (
    <>
      <span>{children}</span>
      {!noArrow &&
        (isInline ? <InlineArrow /> : <ArrowChip variant={variant!} />)}
    </>
  );

  const isPlainAnchor =
    external ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.startsWith("http");

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/* ── Button CTA (forms, carousels, toggles) ────────────────────────────── */

export interface CtaButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    SharedProps {
  asChild?: boolean;
  loading?: boolean;
  /** Text shown while `loading` is true — announced to screen readers */
  loadingLabel?: string;
  /** Full-width form submit style: centered, no arrow offset */
  block?: boolean;
}

export const CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      noArrow = false,
      asChild = false,
      loading = false,
      loadingLabel = "Sending…",
      block = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isInline = variant === "tertiary" || variant === "tertiaryOnDark";
    const resolvedSize = isInline ? "inline" : size;

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          ctaVariants({ variant, size: resolvedSize }),
          block && "w-full px-7",
          className,
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2.5">
            <svg
              className="h-4 w-4 animate-spin motion-reduce:animate-none"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.25" />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {loadingLabel}
          </span>
        ) : (
          <>
            <span>{children}</span>
            {!noArrow &&
              !block &&
              (isInline ? <InlineArrow /> : <ArrowChip variant={variant!} />)}
          </>
        )}
      </Comp>
    );
  },
);
CtaButton.displayName = "CtaButton";

export { ctaVariants };

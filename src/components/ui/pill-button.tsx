import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Editorial pill button with circular arrow chip — the signature CTA
 * from the light-editorial design language.
 *
 * Variants:
 *  - dark:  espresso pill, cream text, cream arrow-circle (on light sections)
 *  - light: white pill, ink text, ink arrow-circle (over imagery / dark sections)
 *  - outline: transparent pill with ink border (secondary actions)
 */

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex items-center gap-3 rounded-full py-2.5 pl-7 pr-2.5 text-[13px] font-semibold uppercase tracking-wider transition-all duration-300";

const variants = {
  dark: "bg-warm-900 text-warm-50 hover:bg-warm-800",
  light: "bg-white text-warm-900 hover:bg-warm-100",
  outline:
    "border border-warm-900/25 bg-transparent text-warm-900 hover:border-warm-900",
};

const circleVariants = {
  dark: "bg-warm-50 text-warm-900",
  light: "bg-warm-900 text-white",
  outline: "bg-warm-900 text-white",
};

function ArrowCircle({ variant }: { variant: keyof typeof circleVariants }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${circleVariants[variant]}`}
      aria-hidden="true"
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </span>
  );
}

export default function PillButton({
  href,
  children,
  variant = "dark",
  className = "",
  external = false,
}: PillButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <ArrowCircle variant={variant} />
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowCircle variant={variant} />
    </Link>
  );
}

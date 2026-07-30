---
name: Stacked Construction
description: Premium home remodeling contractor for Southwest Florida's most discerning homeowners.
colors:
  ink: "#1a1714"
  deep-ash: "#2a2520"
  warm-ember: "#3d3530"
  warm-stone: "#5a4f47"
  driftwood: "#7a6f65"
  pale-drift: "#9e9389"
  linen-mist: "#c4b9ad"
  parchment-edge: "#e0d6cc"
  warm-linen: "#f0ebe5"
  plaster-white: "#faf7f4"
  terracotta-reserve: "#c8956c"
  terracotta-deep: "#a87a55"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "normal"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.3em"
rounded:
  full: "9999px"
  card: "16px"
  input: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.plaster-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "#ffffff"
  button-nav-cta:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 24px"
  button-nav-cta-hover:
    backgroundColor: "{colors.plaster-white}"
    textColor: "{colors.ink}"
  input-dark:
    backgroundColor: "rgba(26,23,20,0.60)"
    textColor: "#ffffff"
    rounded: "{rounded.input}"
    padding: "12px 16px"
  input-light:
    backgroundColor: "{colors.plaster-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
  card-dark:
    backgroundColor: "rgba(42,37,32,0.50)"
    rounded: "{rounded.card}"
    padding: "32px"
  card-light:
    backgroundColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "32px"
---

# Design System: Stacked Construction

## 1. Overview

**Creative North Star: "The Prestige Address"**

Luxury real estate developer energy applied to a Southwest Florida remodeling contractor. The same confidence that sells estates in Naples, now representing the team that builds the kitchens inside them. Warm darkness, heavy serif headlines, editorial pacing. The brand doesn't explain itself, because it doesn't need to.

The system moves between two modes: cinematic dark sections (ink backgrounds, warm-white type, terracotta Reserve accent) and editorial light sections (plaster-white or warm-linen grounds, ink type, structured columns). The transition between them creates the page's rhythm. Never three dark sections in a row; never three light sections in a row.

This system explicitly rejects: the generic contractor site with stock hard-hat photography and blue-orange gradients; the Houzz-style review grid where everything is a thumbnail; the SaaS startup with purple glows and animated counters; and the interior design portfolio that converts nobody because it prioritizes precious aesthetics over trust.

**Key Characteristics:**
- Dark-to-light alternating section rhythm — cinematic depth without monotony
- Pill-shaped controls at every interaction surface (buttons, tags, avatars, progress fills)
- Playfair Display italic as the emotional register; DM Sans uppercase spaced label as the structural register
- Terracotta Reserve as the only warm accent — used sparingly so its presence is decisive
- Credentials (license number, named contractors, project count) treated as design elements, not legal boilerplate

## 2. Colors: The Prestige Palette

A 10-step warm neutral scale anchored in charred wood and aged linen, with one deliberate accent. The system earns its warmth through the neutrals; the accent doesn't need to do heavy lifting.

### Primary
- **Terracotta Reserve** (`#c8956c`): The single warm accent. Used on hover states, the `accent` CSS variable, blog category labels, and credential check icons. Prohibited in headlines, prohibited as a background fill for large surfaces. Its rarity is its authority.
- **Terracotta Deep** (`#a87a55`): Hover and focus variant for all Terracotta Reserve uses. Never used as a default state.

### Neutral

**Dark surfaces:**
- **Ink** (`#1a1714`): The primary dark background. Hero sections, CTA sections, footer, sticky nav on scroll. Near-black with just enough warmth to avoid feeling cold.
- **Deep Ash** (`#2a2520`): Secondary dark surface. Used for input backgrounds on dark, dividers between dark sections.
- **Warm Ember** (`#3d3530`): Tertiary dark. Dividers on dark, de-emphasized borders, card outlines in the dark register.

**Text roles:**
- **Warm Stone** (`#5a4f47`): Body text on light backgrounds. The default reading color on white and linen grounds.
- **Driftwood** (`#7a6f65`): Subdued text and section eyebrow labels. De-emphasized content on both light and dark.
- **Pale Drift** (`#9e9389`): Supporting text. Timestamps, secondary metadata, placeholder text.

**Light surfaces and borders:**
- **Linen Mist** (`#c4b9ad`): Primary light text on dark backgrounds. Paragraph text over Ink.
- **Parchment Edge** (`#e0d6cc`): Borders, dividers, and rule lines on light surfaces.
- **Warm Linen** (`#f0ebe5`): Alternate section background. Used to break monotony between white-ground sections.
- **Plaster White** (`#faf7f4`): The primary light ground. Not pure white; slightly warm so it reads as intentional.

### Named Rules
**The One Reserve Rule.** Terracotta Reserve appears on no more than 10% of any given screen surface. It is never used as a section background, never used in display headlines. It earns attention through constraint. Every second appearance diminishes the first.

**The No Pure Values Rule.** `#000000` and `#ffffff` are prohibited. Ink and Plaster White are the functional equivalents — both warm-shifted enough to feel chosen, not defaulted.

## 3. Typography

**Display Font:** Playfair Display (Georgia, serif fallback) — available in italic style
**Body Font:** DM Sans (system-ui, sans-serif fallback)

**Character:** Playfair Display brings editorial authority and emotional weight; DM Sans brings structural clarity and neutral legibility. The pairing works because they share a similar cap height but occupy completely different registers. Never use Playfair Display for body paragraphs. Never use DM Sans for major display headlines.

### Hierarchy
- **Display** (700, clamp(3rem, 7vw, 5rem), line-height 0.92): Hero and page-level H1s. Often split across two lines with the second in italic. The condensed line-height is intentional — creates a typographic block, not a list.
- **Headline** (700, clamp(2rem, 4vw, 3rem), line-height 1.05): Section H2s. Frequently paired with an italic em in the second line (e.g. "Built on Trust, *Not Promises*").
- **Title** (600, 1.25rem, line-height 1.3): Sub-section H3s, card headings, process step titles. Playfair Display at this size reads as confident but not domineering.
- **Body** (400, 1rem, line-height 1.75): Paragraph text. Max line length 65–75ch. On dark backgrounds use Linen Mist; on light backgrounds use Warm Stone.
- **Label** (600, 0.6875rem, line-height 1.4, letter-spacing 0.3em, uppercase): Section eyebrow labels above every headline, metadata, category tags. Always DM Sans. Always uppercase. Always Driftwood or Warm Stone on light; Driftwood on dark.

### Named Rules
**The Italic Second-Line Rule.** Display and Headline H1/H2s frequently split with the second line in Playfair Display italic. This is structural, not decorative — it signals the emotional clause vs. the factual clause. Never apply italic to full headlines; always reserve it for the trailing modifier ("...for *Southwest Florida*", "...Built *Different*").

**The Eyebrow Rule.** Every section starts with a label in the DM Sans uppercase spaced style (Driftwood, 11px, tracking 0.3em) before the headline. No section headline is permitted to appear without its eyebrow. The eyebrow answers "what is this section about" before the headline delivers the value.

## 4. Elevation

This system is flat by default. Depth is conveyed through tonal section alternation (Ink dark vs Plaster White light) rather than shadows. Shadows appear in two specific contexts only.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 1px 3px rgba(26, 23, 20, 0.06)`): Applied only to `card-light` on white or linen backgrounds. Barely perceptible — just enough to lift the card off the surface without making it float.
- **Nav Scroll** (`box-shadow: 0 4px 24px rgba(26, 23, 20, 0.20)`): Applied to the sticky header when scrolled. Separates nav from page content with authority, not decoration.

### Named Rules
**The Flat-By-Default Rule.** No shadow appears at rest on any component except card-light. Shadows are reserved for state (nav scroll, hover on interactive elements) and structural separation (sticky nav). If you're adding a shadow to create depth, create depth through color instead.

**The No Blur Rule.** Backdrop-filter blur is used in one place: dark translucent form card panels layered over section backgrounds. It is not a decorative choice — it's functional separation of a floating element from its ground. Never use blur on cards, buttons, or inline UI.

## 5. Components

### Buttons

The system has three button variants. All are pill-shaped (border-radius 9999px). The pill is not a stylistic whim — it reads as confident and complete, a shape that doesn't need to assert itself.

- **Shape:** Fully rounded pill (9999px radius)
- **Primary:** Plaster White background, Ink text, padding 16px 32px, DM Sans 600 0.875rem. Used on dark section backgrounds where white reads as decisive. Hover: Warm Linen background.
- **Ghost:** Transparent background, white text, 1px border at rgba(255,255,255,0.30), same padding. Hover: border goes fully white, background rgba(255,255,255,0.10). Used alongside Primary as a secondary action.
- **Nav CTA:** Same pill, border rgba(255,255,255,0.30), DM Sans 600 0.8125rem, uppercase, tracking 0.05em, padding 8px 24px. Hover: fully white background, Ink text. This is the only uppercase button.
- **Focus:** All buttons: `outline: 2px solid #c8956c; outline-offset: 3px`. Terracotta Reserve focus ring.

### Inputs and Fields

Two variants sharing the same structural shape:

- **Dark:** `rgba(26,23,20,0.60)` background, white text, `1px solid #3d3530` border, border-radius 8px, padding 12px 16px. Placeholder: Warm Stone. Focus: border shifts to Driftwood, box-shadow `0 0 0 1px #7a6f65`.
- **Light:** Plaster White background, Ink text, `1px solid #e0d6cc` border, same radius and padding. Placeholder: Pale Drift. Focus: same Driftwood ring treatment.
- **Select dropdowns** use identical styling with `appearance: none`.
- **Error state:** Red tint background (`rgba(185,28,28,0.08)` on dark, `#fef2f2` on light) with red-tone border.

### Cards and Containers

- **Dark Card:** `rgba(42,37,32,0.50)` background, `1px solid rgba(61,53,48,0.50)` border, border-radius 16px, padding 32px, backdrop-filter blur(4px). Reserved for floating panels over cinematic dark sections.
- **Light Card:** White background, `1px solid #e0d6cc` border, border-radius 16px, padding 32px, Ambient Low shadow. Used on light and warm-linen sections.
- **No nested cards.** A card inside a card is always wrong.

### Navigation

Two-band structure. Top band: dark, compact, phone number CTA. Bottom band: logo left, nav links center-right, Get Estimate pill. On scroll: nav background goes to `rgba(26,23,20,0.95)` with backdrop-blur-md and Nav Scroll shadow. Mobile: hamburger reveals a full-screen dark overlay nav. Nav link type: DM Sans 0.8125rem, font-weight 500, uppercase, letter-spacing wider, Linen Mist default, white hover.

### Signature Component: Section Eyebrow Label

Every section opens with a label before its headline. DM Sans, 0.6875rem, font-weight 600, letter-spacing 0.3em, uppercase, color Driftwood (#7a6f65). It is the structural handshake between sections — tells the reader where they are before the headline tells them why it matters.

### Signature Component: Credential Pill

Trust signals rendered as inline badges. Pill shape (rounded-full), Warm Linen background, Parchment Edge border, Warm Ember text, 0.75rem DM Sans medium. A green check icon (`#22c55e`) leads when the credential is verifiable (FL license number with DBPR link). These are design elements, not legal footnotes.

## 6. Do's and Don'ts

### Do:
- **Do** alternate dark and light sections. The rhythm of Ink-to-Plaster-White is how this system creates depth without shadows. Three sections of the same tone is monotony.
- **Do** pair every headline with an eyebrow label. DM Sans, 0.6875rem, uppercase, tracking 0.3em, Driftwood. No headline appears without its eyebrow.
- **Do** split display headlines with an italic second line in Playfair Display. The italic carries the emotional clause; the roman carries the factual.
- **Do** use Terracotta Reserve sparingly. Hover states, credential check icons, blog category labels. Its rarity is its authority.
- **Do** keep buttons pill-shaped at every scale. `border-radius: 9999px` on all interactive controls. The pill reads as confident and complete.
- **Do** treat trust signals (FL License #CBC1269972, named contractors, project counts) as design elements. Give them typographic weight. Put them in credential pills. These are brand assets.
- **Do** use Plaster White, not pure white, for light backgrounds. `#faf7f4` not `#ffffff`.
- **Do** cap body text at 65-75ch line length. Long lines on a large display are a readability failure.

### Don't:
- **Don't** use Terracotta Reserve as a section background fill or in display headlines. It is an accent, not a surface color.
- **Don't** use generic contractor site patterns: stock photos of hard hats, blue or orange gradients, "Quality You Can Trust" banner copy, clip-art checkmarks. This system exists to be the credible alternative to those.
- **Don't** build a Houzz-style review grid: project thumbnails in identical card grids, review star ratings as a primary visual element, comparison-shopping layout. Those patterns undermine the premium positioning.
- **Don't** add SaaS-style CTAs: purple gradients, glowing buttons, animated counters, hero metric templates (big number + small label + gradient accent). Prohibited by register.
- **Don't** over-style to the point of not converting. The interior design portfolio trap: precious minimalism that prioritizes aesthetics over action. Every visual choice should clear the path to a phone call or form submission.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or list items. Rewrite with full borders, background tints, or leading numbers.
- **Don't** use gradient text (`background-clip: text`). Decorative, never meaningful.
- **Don't** add shadows to flat-by-default components. The tonal section system creates depth without shadows. Adding box-shadows to everything returns us to the SaaS look the brand rejects.
- **Don't** use DM Sans for display headlines, or Playfair Display for body paragraphs. The pairing works because each font stays in its lane.
- **Don't** use `#000000` or `#ffffff`. Ink and Plaster White are the system's anchors.

---

## Light Editorial Update (redesign-seo branch, July 2026)

Direction confirmed with Junior: **light editorial** (cream body, espresso anchor), matching the DNOIN-style reference. Dark sections retained as accents only (hero, process, demand-driver bands, CTA, footer).

### New tokens (globals.css `@theme`)

| Token | Value | Use |
|---|---|---|
| `brand-espresso` | `#3d2b21` | Anchor accent, dark feature sections |
| `brand-espresso-deep` | `#2a1d16` | Footer / deepest surfaces |
| `brand-cream` | `#faf7f4` | Page background (body default) |
| `brand-linen` | `#f0ebe5` | Alternate light section |
| `brand-ink` | `#1a1714` | Headline text |

Existing `warm-50…900` scale + `accent` (terracotta) unchanged and still primary.

### Signature components

- **`.eyebrow`** — dotted section label ("• About Us"): 11px, 600, 0.3em tracking, uppercase, leading 6px dot in `currentColor`. Applied sitewide (34 files).
- **`PillButton`** (`src/components/ui/pill-button.tsx`) — rounded-full CTA with circular arrow chip. Variants: `dark`, `light`, `outline`.
- **Floating white pill nav** (`Header.tsx`) — white rounded-full bar over hero, espresso phone banner above (collapses on scroll).
- **Hero carousel** (`Hero.tsx`) — 3 slides, 6s crossfade, dot indicators (`role="tablist"`), pauses on hover, honors `prefers-reduced-motion`.
- **Imagery** — `rounded-3xl` on cards/grids; optional `.card-notch` / `.card-notch-tl` scooped-corner mask for feature images.

### Typography

Playfair Display (variable, self-hosted at `src/fonts/`, normal+italic) for display; DM Sans (variable, self-hosted) for body/UI. Loaded via `next/font/local` — zero external font requests. Headline pattern: Roman + `<em class="font-light italic">` second word.

### Accessibility

Global `:focus-visible` outline (terracotta-dark, 2px, 3px offset). `prefers-reduced-motion` kills animations/transitions globally.

### Emphasis update (July 2026)

Italic Playfair emphasis retired per Junior. Emphasized headline words now use the same serif, `font-semibold`, colored terracotta: `text-accent-dark` (#a87a55) on light sections, `text-accent` (#c8956c) on dark sections. Footer lightened from ink (#1a1714) to `brand-espresso` (#3d2b21) with `warm-200/300` text for AA contrast.

### Page transitions (July 2026)

Navigation lands instantly at the top — `scroll-behavior: smooth` is scoped to `html:has(:target)` so only in-page anchor links glide.

Route changes get a 200ms opacity fade via `.page-fade` on the wrapper in `src/app/template.tsx` (template remounts per navigation; layout does not). Opacity only — no transform, so nothing reflows and the compositor handles it on the GPU. Zero JS. Suppressed under `prefers-reduced-motion: reduce` by the global guard.

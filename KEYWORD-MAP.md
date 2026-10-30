# Keyword Map — Stacked Construction (redesign-seo branch)

Service area: **Naples · Bonita Springs · Fort Myers · Cape Coral** (Lee & Collier counties).
One primary keyword per page; long-tails handled by H2s, FAQs, and body copy. No keyword stuffing — every phrase appears naturally.

## Core pages

| Page | Primary keyword | Supporting long-tails |
|---|---|---|
| `/` | remodeling contractor southwest florida | licensed general contractor SWFL, home remodeling fort myers |
| `/services/kitchen-remodeling` | kitchen remodeling southwest florida | custom cabinetry, kitchen renovation cost SWFL, quartz countertops florida |
| `/services/bathroom-remodeling` | bathroom remodeling southwest florida | walk-in shower installation, aging-in-place bathroom, spa bathroom renovation |
| `/services/home-renovation` | home renovation contractor SWFL | whole home remodel, full home renovation florida |
| `/services/outdoor-living` | outdoor kitchen contractor florida | lanai remodel, pool deck renovation, outdoor living space SWFL |
| `/services/flooring-tile` | flooring installation southwest florida | tile installation, luxury vinyl plank, porcelain tile contractor |
| `/process` | remodeling process / what to expect | remodeling timeline florida, permits lee county |
| `/about` + `/about/credentials` | licensed contractor florida CBC1269972 | licensed insured general contractor, florida certified building contractor |
| `/reviews` | stacked construction reviews | remodeling contractor reviews fort myers |
| `/kitchen-cost-calculator` | kitchen remodel cost calculator florida | kitchen renovation cost estimate SWFL |

## Service-area pages (local SEO core)

| Page | Primary keyword |
|---|---|
| `/areas/naples` | remodeling contractor naples fl |
| `/areas/naples/kitchen-remodeling` | kitchen remodeling naples fl |
| `/areas/naples/bathroom-remodeling` | bathroom remodeling naples fl |
| `/areas/bonita-springs` | remodeling contractor bonita springs |
| `/areas/bonita-springs/[service]` | [service] bonita springs |
| `/areas/fort-myers` | remodeling contractor fort myers |
| `/areas/fort-myers/[service]` | [service] fort myers |
| `/areas/cape-coral` | remodeling contractor cape coral |
| `/areas/cape-coral/[service]` | [service] cape coral |
| `/areas/lee-county` | lee county remodeling contractor |
| `/areas/collier-county` | collier county remodeling contractor |

Each city page uses genuinely localized copy (neighborhoods, landmarks, demand drivers) from `src/data/seo.ts` — no doorway-page duplication.

## Retired pages (301 redirects live in `next.config.ts`)

- `/areas/punta-gorda[/*]` → `/areas/cape-coral[/*]`
- `/areas/marco-island[/*]` → `/areas/naples[/*]`
- `/areas/charlotte-county` → `/areas/lee-county`

## Blog clusters (already live, support the money pages)

Cost & planning (e.g. "kitchen remodel cost cape coral"), design inspiration, Florida living, permits & codes. Internal links flow: blog → service page → city page → contact.

## Project pages (added July 2026)

Built from the 93-photo `web-ready-seo` set. 47 photos selected, converted to WebP at two sizes, and served through `next/image` with responsive `srcset`. Alt text carried over from the shoot's SEO image map — every image on these pages has descriptive, location-bearing alt text.

| Page | Primary keyword | Photos |
|---|---|---|
| `/projects` | remodeling projects southwest florida | 3 hero images |
| `/projects/sage-green-kitchen-remodel-cape-coral` | sage green kitchen remodel cape coral | 13 |
| `/projects/white-shaker-kitchen-remodel-cape-coral` | white shaker kitchen remodel cape coral | 14 |
| `/projects/modern-walnut-kitchen-remodel-naples` | modern walnut kitchen remodel naples | 20 (incl. fireplace feature wall) |

Each detail page carries: unique title (50–53 chars) + meta description, one H1, BreadcrumbList + CreativeWork (with ImageObject per photo, `locationCreated`, and `about` → Service) + FAQPage JSON-LD, a 4-question FAQ written to local intent, and internal links to the matching service page, city page, city+service page, and sibling projects.

Photos not used (46 of 93) were near-duplicate angles, tight countertop crops, and blank-wall frames — excluded to keep page weight down and quality high. Originals remain untouched in the source folder.

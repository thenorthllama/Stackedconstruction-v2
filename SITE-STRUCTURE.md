# Site Structure — Stacked Construction
**Domain:** stackedconstruction.co | **Updated:** April 2026

---

## Current URL Architecture

```
stackedconstruction.co/
├── /                              (Home — HomeAndConstructionBusiness schema)
├── /about                         (About page — Organization schema)
├── /contact                       (Contact — ContactPage schema)
├── /gallery                       (Portfolio gallery)
├── /process                       (Remodeling process)
├── /privacy                       (Privacy policy)
├── /terms                         (Terms of service)
│
├── /services                      (Services hub)
│   ├── /services/kitchen-remodeling
│   ├── /services/bathroom-remodeling
│   ├── /services/home-renovation
│   ├── /services/outdoor-living
│   └── /services/flooring-tile
│       └── /services/[service]/get-estimate  (noindex — lead capture)
│
├── /areas                         (Areas hub)
│   ├── /areas/fort-myers          (City page — Lee County)
│   ├── /areas/cape-coral          (City page — Lee County)
│   ├── /areas/naples              (City page — Collier County)
│   ├── /areas/bonita-springs      (City page — Lee/Collier)
│   ├── /areas/punta-gorda         (City page — Charlotte County)
│   ├── /areas/marco-island        (City page — Collier County)
│   ├── /areas/lee-county          (County page)
│   ├── /areas/collier-county      (County page)
│   ├── /areas/charlotte-county    (County page)
│   └── /areas/[city]/[service]    (30 city+service combos)
│       Examples:
│       ├── /areas/naples/kitchen-remodeling
│       ├── /areas/fort-myers/bathroom-remodeling
│       ├── /areas/cape-coral/outdoor-living
│       └── ... (30 total)
│
└── /blog                          (Blog hub)
    ├── /blog/category/cost-and-planning
    ├── /blog/category/design-inspiration
    ├── /blog/category/florida-living
    ├── /blog/category/community-guides
    ├── /blog/category/seasonal
    └── /blog/[slug]               (40+ individual articles)
```

**Current total: ~84 indexed pages**

---

## Recommended Architecture Additions

### Priority 1 — Add Now

```
├── /reviews                       ← NEW: Testimonials + ReviewSchema
├── /faq                           ← NEW: Master FAQ + FAQPage schema
└── /about/[author-slug]           ← NEW: Author bio pages (×3)
    ├── /about/junior-da-silva
    ├── /about/camila-lage
    └── /about/caio-alves
```

### Priority 2 — Add in Phase 2

```
└── /blog/[slug]                   ← Grow to 65+ articles
    (3 project case study posts with full before/after documentation)
```

### Priority 3 — Add in Phase 3+

```
├── /resources                     ← NEW: Lead magnet landing page
│   └── /resources/naples-kitchen-remodel-guide  (PDF download)
└── /areas/[city]                  ← ENHANCE: Add neighborhood subsections
    (No new pages — add H2 neighborhood sections within existing city pages)
```

---

## Internal Linking Strategy

### Hub-and-Spoke Model

Each **service page** is a hub. Blog posts, city+service pages, and the get-estimate page are spokes linking back to it.

```
/services/kitchen-remodeling  (hub)
  ← /blog/luxury-kitchen-remodeling-naples-guide-2026
  ← /blog/transitional-kitchen-design-swfl-2026
  ← /blog/kitchen-remodel-cost-fort-myers
  ← /blog/kitchen-remodeling-trends-swfl-2026
  ← /areas/naples/kitchen-remodeling
  ← /areas/fort-myers/kitchen-remodeling
  ← /areas/cape-coral/kitchen-remodeling
  ← /areas/bonita-springs/kitchen-remodeling
  ← /areas/marco-island/kitchen-remodeling
  ← /areas/punta-gorda/kitchen-remodeling
```

Each **city page** is also a hub. City+service pages and community guide blog posts link back to it.

```
/areas/naples  (hub)
  ← /areas/naples/kitchen-remodeling
  ← /areas/naples/bathroom-remodeling
  ← /areas/naples/home-renovation
  ← /areas/naples/outdoor-living
  ← /areas/naples/flooring-tile
  ← /blog/luxury-kitchen-remodeling-naples-guide-2026
  ← /blog/butlers-pantry-design-naples
  ← /blog/bathroom-remodel-cost-naples
```

### Internal Link Minimum Standards
- Every blog post: **3+ internal links** (at least 1 to a service page, 1 to a city page)
- Every city+service page: links back to parent city + parent service
- Every service page: links to all 6 city+service combinations for that service
- Author bio pages: link to 5–10 articles written by that author

---

## Schema Implementation Map

| Page | Schema Types | Status |
|------|-------------|--------|
| `/` | WebSite, HomeAndConstructionBusiness, AggregateRating | ✅ Live |
| `/services/[service]` | Service, LocalBusiness | ✅ Live |
| `/services/[service]` | **FAQPage** | ❌ Missing |
| `/areas/[city]` | LocalBusiness + geo | ✅ Live |
| `/areas/[city]/[service]` | Service + LocalBusiness | ✅ Live |
| `/blog/[slug]` | BlogPosting, BreadcrumbList, Person (author) | ✅ Live |
| `/contact` | ContactPage | ✅ Live |
| `/reviews` | LocalBusiness + Review + AggregateRating | ❌ Page doesn't exist yet |
| `/faq` | FAQPage | ❌ Page doesn't exist yet |
| `/about/[author]` | Person + sameAs | ❌ Pages don't exist yet |

---

## Quality Gates

### Location Page Limits (Per Local Service Template)
- ⚠️ **Warning at 30 location pages** — currently at 30 city+service combos (at threshold)
- 🛑 **Hard stop at 50 location pages** — do NOT add more city+service combinations without adding substantial unique content first
- **Action required:** Before adding any new city, enrich existing city+service pages with local photos, project case studies, and neighborhood-specific content

### Content Uniqueness Requirements
| Page Type | Current Status | Target |
|-----------|---------------|--------|
| Service pages | 100% unique | ✅ Met |
| City pages | ~80% unique | ✅ Met |
| City+service combos | ~60–70% unique | ⚠️ Needs improvement |
| Blog posts | 100% unique | ✅ Met |

### Sitemap Health
- All 84 pages included: ✅
- Canonical URLs set: ✅
- `publishedAt` dates accurate in blog entries: ✅
- `/services/[service]/get-estimate` pages excluded (noindex): ✅

---

## URL Naming Conventions

| Pattern | Example | Rule |
|---------|---------|------|
| Services | `/services/kitchen-remodeling` | Lowercase, hyphenated, service name only |
| Cities | `/areas/fort-myers` | Lowercase, hyphenated, no abbreviations |
| City+Service | `/areas/naples/kitchen-remodeling` | City first, then service |
| Blog | `/blog/luxury-kitchen-remodeling-naples-guide-2026` | Keyword-rich, include location where relevant |
| Author | `/about/junior-da-silva` | Full name, hyphenated |

**Do NOT use:**
- `/areas/naples-kitchen-remodeling` (wrong — combine via subfolder, not hyphen)
- `/blog/post-1` (wrong — no descriptive slug)
- `/services/KitchenRemodeling` (wrong — no capitals)

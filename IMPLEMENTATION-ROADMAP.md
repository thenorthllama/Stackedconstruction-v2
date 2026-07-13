# Implementation Roadmap — Stacked Construction
**Timeline:** April 2026 – March 2027 | **Updated:** April 2026

---

## Phase 1 — Foundation (Weeks 1–4 | May 2026)

**Goal:** Close the most impactful gaps with low-effort, high-return changes.

### Technical SEO
- [ ] **FAQPage schema** — Add `FAQPage` + `Question`/`Answer` schema to all 5 service pages  
  → Direct path to Google rich results / "People Also Ask" boxes  
  → _File: `src/components/StructuredData.tsx` or per service page_

- [ ] **Replace hardcoded review count** — Remove `ratingValue: "5", reviewCount: "150"` from schema or replace with real reviews  
  → Risk: Google may flag static review counts as misleading signals

- [ ] **Author bio pages** — Create `/about/junior-da-silva`, `/about/camila-lage`, `/about/caio-alves`  
  → Include: credentials, years of experience, service specialties, FL license ref, headshot  
  → Add `Person` schema with `sameAs` links to LinkedIn/social profiles  
  → _Impact: activates E-E-A-T signals for all 40 blog posts_

- [ ] **Blog post author links** — Update blog article sidebar "Written By" to link to author bio pages  
  → _File: `src/app/blog/[slug]/page.tsx`_

### Off-Site Presence (Critical)
- [ ] **Google Business Profile** — Verify and complete 100%:
  - All service categories selected
  - Service area set to cities (not "Florida" — GBP now requires city-level)
  - 20+ photos uploaded (exterior, team, project before/afters)
  - Hours confirmed accurate
  - Weekly posts scheduled
  
- [ ] **Houzz Professional Profile** — Create and populate:
  - 25+ project photos minimum
  - Business description with target keywords
  - Link to stackedconstruction.co
  - Request reviews from past clients
  → _Impact: ChatGPT pulls ~47% of contractor citations from Houzz_

- [ ] **Angi / HomeAdvisor** — Create free listing (minimum):
  - Accurate NAP (Name, Address, Phone)
  - Services and service area
  - Request reviews from past clients

### Content
- [ ] **Reviews page** (`/reviews`) — Build testimonials page with structured `Review` schema  
  → Embed Google Reviews widget or manually publish 10+ testimonials with client names and projects

- [ ] **`/faq` page** — Consolidated FAQ page targeting "People Also Ask" queries  
  → Pull from existing service page FAQs + add 20 new questions  
  → Implement `FAQPage` schema

**Phase 1 Success Criteria:**
- FAQPage schema live on all service pages
- Google Business Profile 100% complete
- Houzz profile created with 25+ photos
- Author bio pages live and linked from blog posts
- Reviews page live

---

## Phase 2 — Expansion (Weeks 5–12 | June–July 2026)

**Goal:** Grow content moat, build topical authority, start link acquisition.

### Content (2 posts/week)
- [ ] Publish 16 new blog posts per content calendar (see `CONTENT-CALENDAR.md`)
- [ ] Focus on community guides (lowest competition, highest local signal)
- [ ] Build 3 project case studies with real photos, costs, and client testimonials

### Local SEO Depth
- [ ] **Neighborhood-level targeting** — Add neighborhood sections to Naples and Fort Myers city pages:
  - Naples: Port Royal, Pelican Bay, Old Naples, Aqualane Shores, Park Shore
  - Fort Myers: Gateway, Downtown River District, Daniels Preserve, McGregor
  → _No new pages needed — enhance existing `/areas/naples` and `/areas/fort-myers`_

- [ ] **Google Business Profile posts** — Post 2× per week:
  - Format: project photo + 1 sentence description + link to relevant blog post
  - Alternate between services (kitchen, bath, outdoor, flooring)

- [ ] **Build citations** — Submit to these directories:
  - Yelp, Better Business Bureau, Apple Maps, Bing Places, Angi (free), Houzz, Thumbtack
  - _Ensure exact NAP match across all platforms_

### Link Building
- [ ] **SWFL local press** — Pitch project story to:
  - Naples Daily News (Real Estate section)
  - Fort Myers News-Press (Home Improvement)
  - Gulfshore Life magazine
  
- [ ] **Supplier / manufacturer links** — Request links from:
  - Sub-Zero/Wolf (if certified installer)
  - Cabinet manufacturers used on projects
  - Tile/stone suppliers

- [ ] **HOA and community websites** — Get listed on:
  - Pelican Bay Community website (Naples)
  - Gateway Community website (Fort Myers)
  - Cape Coral Chamber of Commerce

**Phase 2 Success Criteria:**
- 50+ total blog articles published
- 10+ real Google reviews
- 15+ real Houzz reviews
- 3 high-authority local backlinks acquired
- Neighborhood content added to top 2 city pages

---

## Phase 3 — Scale (Weeks 13–24 | August–October 2026)

**Goal:** Dominate long-tail content, launch YouTube, accelerate E-E-A-T.

### YouTube Channel Launch
- [ ] Create "Stacked Construction" YouTube channel
- [ ] Publish initial video batch (6 videos minimum before promoting):
  1. Kitchen remodel timelapse (Naples project)
  2. "Before & After" bathroom transformation
  3. "How to Plan a Kitchen Remodel in Naples" (talking head)
  4. Outdoor kitchen build timelapse
  5. "5 Mistakes to Avoid on a SWFL Remodel" (educational)
  6. Client testimonial video (Naples homeowner)
- [ ] Embed YouTube videos on relevant service and blog pages
- [ ] Add YouTube to `sameAs` in Organization schema

### Content Depth
- [ ] Continue 2 posts/week cadence — 16 more articles per calendar
- [ ] Create PDF lead magnet: **"Naples Kitchen Remodel Planning Guide 2026"**
  - 8–12 pages covering: planning timeline, budget framework, material choices, permitting
  - Gate behind email capture form on landing page
  - Promote via GBP posts and blog CTAs

### GEO / AI Optimization
- [ ] **Expand llms.txt** with:
  - Complete service descriptions with pricing ranges
  - FAQ answers (200+ words each)
  - Key stats and differentiators
  → _Current llms.txt is 6.5KB — target 15KB+_

- [ ] **Service page intro rewrite** — Rewrite the first 150 words of each service page as a self-contained answer block (AI-citeable):
  - Start with: "Stacked Construction provides [service] in [cities]. [Key facts]."
  - Include: pricing range, timeline, license number, area served

- [ ] **Reddit presence** — Build genuine presence on:
  - r/FortMyers, r/Naples (Florida subreddit)
  - Answer remodeling questions (no spam — genuine help with attribution)
  → _Perplexity pulls ~47% of contractor citations from Reddit_

**Phase 3 Success Criteria:**
- YouTube channel live with 6+ videos
- 65+ total blog articles
- PDF lead magnet capturing emails
- llms.txt expanded to 15KB+
- Service page intros rewritten in AI-citeable format

---

## Phase 4 — Authority (Months 7–12 | November 2026 – March 2027)

**Goal:** Establish Stacked Construction as the recognized authority for SWFL remodeling.

### Thought Leadership
- [ ] **Annual SWFL Remodeling Cost Report** — Publish original data on average remodeling costs across 6 SWFL cities. This is linkable, AI-citable, and positions as industry authority.
- [ ] **2027 Design Trends Report** — Partner with local interior designers for quotes and data.
- [ ] **License/permit guide series** — "Lee County Permit Guide for Homeowners" — zero competitor owns this.

### PR & Media
- [ ] Pitch to: Gulfshore Business, Naples Illustrated, SWFL Scene
- [ ] Apply for: NARI (National Association of Remodeling Industry) membership and any local awards
- [ ] Build Wikipedia or Wikidata entry for the business (requires existing media mentions)

### Technical Refinement
- [ ] **Core Web Vitals audit** — Verify LCP < 2.5s, CLS < 0.1, INP < 200ms after content growth
- [ ] **Image optimization pass** — Convert all blog images to WebP, add explicit width/height
- [ ] **Schema audit** — Review all 21 schema types for accuracy and add `priceRange` to LocalBusiness

**Phase 4 Success Criteria:**
- Original cost data report published and earning citations
- NARI membership or local award obtained
- 1+ media mention in regional press
- 90+ total blog articles
- Domain Rating 25+

---

## Resource Requirements

| Phase | Content Work | Technical Work | Marketing/Outreach |
|-------|-------------|---------------|-------------------|
| Phase 1 | 2 author bios + reviews page | FAQPage schema, author link fix | GBP, Houzz, Angi setup |
| Phase 2 | 16 blog posts + 3 case studies | Neighborhood content additions | Citation building, press pitches |
| Phase 3 | 16 blog posts + PDF guide | llms.txt, service page rewrites | YouTube launch, Reddit |
| Phase 4 | Cost report + trends report | CWV audit, schema audit | PR pitches, NARI |

**Estimated time/week:** 8–12 hours total across content, technical, and marketing work.

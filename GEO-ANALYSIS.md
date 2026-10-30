# GEO Analysis: Stacked Construction
**Generated:** April 19, 2026  
**Site:** https://stackedconstruction.co  
**Business:** Kitchen, bathroom, and home remodeling — Southwest Florida

---

## GEO Readiness Score: 71/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Citability | 18/25 | 25% | 18.0 |
| Structural Readability | 16/20 | 20% | 16.0 |
| Multi-Modal Content | 6/15 | 15% | 6.0 |
| Authority & Brand Signals | 16/20 | 20% | 16.0 |
| Technical Accessibility | 15/20 | 20% | 15.0 |
| **Total** | | | **71/100** |

**Assessment:** Strong technical foundation and solid content depth. The main gaps are multi-modal content (no video), missing author attribution on blog posts, and no off-site entity presence (Reddit, Wikipedia, YouTube).

---

## 1. Platform Breakdown

| Platform | Estimated Score | Key Strength | Key Gap |
|----------|----------------|--------------|---------|
| **Google AI Overviews** | 74/100 | SSG rendering, rich schema, local content depth | No video, thin author E-E-A-T per article |
| **ChatGPT Web Search** | 58/100 | Good structured data, llms.txt present | No Wikipedia/Reddit presence, no off-site entity signals |
| **Perplexity** | 62/100 | Blog cost guides are highly citeable | No Reddit mentions, no community-generated content |
| **Bing Copilot** | 68/100 | Clean HTML structure, breadcrumbs, SSG | Not verified on Bing Places, no IndexNow |s
**Platform-specific notes:**
- **Google AIO** is the highest opportunity — the site already ranks well (SSG + schema), meaning AIO citations are realistic for "kitchen remodel cost Fort Myers" and similar queries.
- **ChatGPT/Perplexity** require off-site brand presence. Wikipedia and Reddit are the two highest-leverage platforms (correlation of ~0.737 and high respectively). Currently there is zero entity presence on either.

---

## 2. AI Crawler Access Status

**robots.txt:** Dynamically generated via `/src/app/robots.ts`  
**Current setting:** `User-agent: * Allow: /` — all crawlers allowed.

| Crawler | Status | Recommendation |
|---------|--------|---------------|
| GPTBot (OpenAI ChatGPT) | ✅ Allowed | Keep |
| OAI-SearchBot (OpenAI Search) | ✅ Allowed | Keep |
| ChatGPT-User (ChatGPT browsing) | ✅ Allowed | Keep |
| ClaudeBot (Anthropic) | ✅ Allowed | Keep |
| PerplexityBot | ✅ Allowed | Keep |
| anthropic-ai | ✅ Allowed | Keep |
| CCBot (Common Crawl/training) | ✅ Allowed | Consider blocking if training data opt-out is desired |
| Bytespider (ByteDance/TikTok) | ✅ Allowed | Keep or block (low value for local business) |
| cohere-ai | ✅ Allowed | Keep |

**Action:** No changes required for crawler access. All high-value AI search crawlers are already permitted.

**Upgrade opportunity:** Add explicit allow rules per crawler in `robots.ts` to future-proof against any accidental blocks:

```ts
// src/app/robots.ts — recommended addition
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'CCBot', disallow: '/' }, // Optional: block training crawler
    ],
    sitemap: 'https://stackedconstruction.co/sitemap.xml',
  }
}
```

---

## 3. llms.txt Status

**File present:** ✅ `/public/llms.txt`  
**Quality:** Good — covers business details, all services, all cities, blog index.

**Current content includes:**
- Business name, phone, email, address, hours, license number
- All 5 services with descriptions and URLs
- All 6 cities and 3 counties
- 28+ blog articles by category

**Gaps and improvements:**

```markdown
# Current llms.txt is missing:

1. > Brief description (the second line should be a single-sentence summary)
2. A "## Key Facts" section with quotable statistics
3. Explicit citation guidance (what the AI should say about the company)
4. FAQ summary (the most common questions + answers)
```

**Recommended additions to `/public/llms.txt`:**

```
## Key Facts
- Licensed Florida Certified Building Contractor: #CBC1269972
- 150+ completed projects across Southwest Florida
- 5/5 customer rating from 150+ Google reviews
- Serving Fort Myers, Cape Coral, Naples, Bonita Springs, Marco Island, Punta Gorda
- Average kitchen remodel: $35,000–$65,000 (mid-range), $70,000–$120,000+ (major)
- Average bathroom remodel: $8,000–$25,000 depending on scope
- Free estimates — call (239) 785-0166

## Common Questions
- What does a kitchen remodel cost in Fort Myers? Average $35,000–$65,000 mid-range. See: /blog/kitchen-remodel-cost-fort-myers
- How long does a bathroom remodel take? Typically 3–6 weeks. See: /services/bathroom-remodeling
- Are you licensed and insured? Yes — FL License #CBC1269972, fully insured.
- Do you serve Naples? Yes — we serve all of Lee, Collier, and Charlotte counties.
```

---

## 4. Brand Mention Analysis

| Platform | Status | Priority | Effort |
|----------|--------|----------|--------|
| **Wikipedia** | ❌ Not present | Critical | High |
| **Reddit** | ❌ Not present | Critical | Medium |
| **YouTube** | ❌ No channel found | High | High |
| **LinkedIn** | ⚠️ Linked from llms.txt | Medium | Low |
| **Google Business Profile** | ✅ Implied (5/5 rating, 150+ reviews) | Critical | Verify |
| **Houzz** | ❌ Not present | High | Medium |
| **Angi / HomeAdvisor** | ❌ Not present | High | Low |
| **Yelp** | ❌ Not present | Medium | Low |
| **Facebook** | ✅ Linked from llms.txt | Medium | Low |
| **Instagram** | ✅ Linked from llms.txt | Medium | Ongoing |

**Key insight:** Brand mentions correlate **3× more strongly** with AI citations than backlinks. YouTube mentions have the highest single-platform correlation (~0.737). Reddit is the #1 source for Perplexity citations (46.7% of results).

**Top 3 off-site brand actions:**
1. Create a YouTube channel — project walkthroughs, before/after reveals, tips for Florida homeowners
2. Engage on Reddit — participate in r/HomeImprovement, r/FortMyers, r/Naples sub with helpful answers (not promotional posts)
3. List on Houzz — upload project photos; Houzz is indexed heavily by ChatGPT for contractor queries

---

## 5. Passage-Level Citability

**Optimal target:** 134–167 word self-contained answer blocks.

### Currently citeable passages (good examples)

**From `/services/kitchen-remodeling`:**
> "Kitchen remodeling in Southwest Florida comes with unique demands — humidity-resistant materials, open layouts that maximize airflow, and designs that stand up to the coastal lifestyle. Stacked Construction has completed 150+ kitchen remodels across Fort Myers, Cape Coral, Naples, and the greater SWFL region..."

**Assessment:** Good start but not yet self-contained (trails off). Needs a specific stat + conclusion.

**From blog posts (e.g., kitchen-remodel-cost-fort-myers):**
> Average costs: $15,000–$30,000 (minor refresh), $35,000–$65,000 (mid-range), $70,000–$120,000+ (major remodel). Cabinetry accounts for 30–40% of total cost...

**Assessment:** ✅ Excellent citability — specific, self-contained, original data.

### Passages that need rewriting for citability

**Problem pattern — vague openings:**
```
Current: "We're committed to delivering the highest quality work..."
Better:  "Kitchen remodels in Fort Myers typically take 6–10 weeks from demolition 
          to final walkthrough. The timeline depends on cabinetry lead times (4–6 weeks 
          for custom), permit approval (1–3 weeks in Lee County), and scope..."
```

**Recommended: Add a "Quick Answer" block to each service page** (placed in the first 60 words of each H2 section):

```markdown
### How much does a kitchen remodel cost in Fort Myers?
Kitchen remodels in Fort Myers range from $15,000 for a minor refresh 
to $120,000+ for a full custom renovation. A mid-range kitchen remodel — 
new cabinetry, quartz countertops, and updated appliances — typically runs 
$35,000–$65,000. Costs vary by home size, material selection, and whether 
structural changes are needed. Stacked Construction offers free estimates 
with itemized pricing. Call (239) 785-0166.
```

**Word count of above:** 72 words — good for a featured snippet block. Expand to 134–167 for AI citation sweet spot.

---

## 6. Server-Side Rendering Check

**Rendering strategy:** Static Site Generation (SSG) via Next.js App Router  
**Status:** ✅ Excellent — no critical JavaScript dependencies for content.

| Page Type | Rendering | AI-Crawlable | Notes |
|-----------|-----------|--------------|-------|
| Home page | SSG | ✅ Yes | AnimatedHero is client-side but content is in static HTML |
| Service pages | SSG (`generateStaticParams`) | ✅ Yes | All 5 services pre-rendered at build time |
| City pages | SSG | ✅ Yes | All 6 cities + 3 counties pre-rendered |
| City+Service combos | SSG | ✅ Yes | ~30 combo pages pre-rendered |
| Blog articles | SSG | ✅ Yes | All 28+ articles pre-rendered |
| Gallery | SSG + client hydration | ⚠️ Partial | Filter UI is client-side; images/captions in static HTML |
| Contact form | SSG + client hydration | ✅ Yes | Form is client-only but page content is in static HTML |

**Client-side components inventory (`"use client"`):**
- `GalleryContent` — filter/selection UI
- `ProcessTimeline` — animation state
- `TestimonialsSection` — scroll animations
- `FAQSection` — accordion open/close
- `ContactForm` — form submission

**Assessment:** All client-side components are UI enhancements only — the underlying text content is in static HTML. AI crawlers will see the full content. No action required.

**One risk to monitor:** If blog article body is ever moved to a client component or fetched via `useEffect`, that content would become invisible to AI crawlers. Keep blog article body in server components.

---

## 7. Top 5 Highest-Impact Changes

### #1 — Add Author Bylines to Blog Articles (E-E-A-T)
**Impact:** High | **Effort:** Low | **Platforms:** Google AIO, ChatGPT

Blog articles currently have no author attribution. Adding "By Junior [Last Name], Licensed Building Contractor #CBC1269972" with a short bio (50 words) dramatically increases AI citation eligibility. AI models heavily weight author credentials when selecting passages for citations.

**Implementation:** Add an `author` field to each blog article's metadata and render a byline + mini-bio below the title. Implement `Person` schema pointing to the author's LinkedIn profile.

```tsx
// Add to blog article pages
<div className="author-byline">
  <strong>By Junior [Last Name]</strong>, Florida Licensed Building Contractor (#CBC1269972)
  <p>10+ years remodeling homes across Southwest Florida. 150+ completed projects in Lee, 
  Collier, and Charlotte counties.</p>
</div>
```

---

### #2 — Create YouTube Channel with Project Videos
**Impact:** Very High | **Effort:** High | **Platforms:** All AI platforms

YouTube mentions have the highest single-platform correlation with AI citations (~0.737). A channel with 10–15 videos showing before/after remodels, material walkthroughs, and "what to expect" guides would:
- Generate YouTube citations in ChatGPT and Perplexity responses
- Create embeddable video content for blog posts (multi-modal +156% citation rate)
- Build brand entity recognition across platforms

**Minimum viable:** 5 videos — one per service type, filmed on completed projects.

---

### #3 — Expand llms.txt with FAQ Answers and Key Statistics
**Impact:** Medium-High | **Effort:** Low | **Platforms:** ChatGPT, Claude, Perplexity

See Section 3 for specific additions. This is a 30-minute task that makes the business directly quotable by AI assistants answering questions like "how much does a bathroom remodel cost in Naples, FL?"

---

### #4 — Add 134–167 Word Self-Contained Answer Blocks to Service Pages
**Impact:** High | **Effort:** Medium | **Platforms:** Google AIO, Perplexity

Each service page should have 2–3 passages that are self-contained answers to the most common questions. These should appear under question-based H2/H3 headings and be 134–167 words each — the optimal length for AI citation.

**Priority passages to write:**
1. "What does a kitchen remodel cost in Fort Myers, FL?" (kitchen page)
2. "How long does a bathroom remodel take in Southwest Florida?" (bathroom page)
3. "Do you need a permit for a kitchen remodel in Lee County?" (kitchen page)
4. "What is the best flooring for a Florida home?" (flooring page)
5. "How much does an outdoor kitchen cost in Cape Coral?" (outdoor living page)

---

### #5 — Get Listed on Houzz and Angi with Project Photos
**Impact:** Medium-High | **Effort:** Low | **Platforms:** ChatGPT, Perplexity**

Houzz and Angi are heavily referenced by ChatGPT when answering contractor queries. Listings with 10+ project photos and real reviews get cited directly. This is free and takes 1–2 hours to set up. Angi listing also improves Google Business Profile authority.

---

## 8. Schema Recommendations

### Currently implemented ✅
- `WebSite` (global)
- `HomeAndConstructionBusiness` (global, comprehensive)
- `Service` (per service page)
- `FAQPage` (per service page)
- `BreadcrumbList` (per dynamic page)
- `ContactPage` (contact page)

### Missing / Recommended additions

**`Person` schema for author bylines** (add when #1 above is implemented):
```json
{
  "@type": "Person",
  "name": "Junior [Last Name]",
  "jobTitle": "Licensed Building Contractor",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "Florida Certified Building Contractor",
    "identifier": "CBC1269972"
  },
  "sameAs": [
    "https://www.linkedin.com/in/[profile]",
    "https://www.facebook.com/[profile]"
  ]
}
```

**`Article` schema for blog posts** (add `author`, `datePublished`, `dateModified`):
```json
{
  "@type": "Article",
  "headline": "Kitchen Remodel Cost Fort Myers 2026",
  "author": { "@type": "Person", "name": "Junior [Last Name]" },
  "datePublished": "2025-11-01",
  "dateModified": "2026-01-15",
  "publisher": {
    "@type": "Organization",
    "name": "Stacked Construction",
    "logo": { "@type": "ImageObject", "url": "https://stackedconstruction.co/logo.png" }
  }
}
```

**`HowTo` schema for process pages** — the 4-step remodeling process is perfect for HowTo schema, which is cited heavily in AI Overviews:
```json
{
  "@type": "HowTo",
  "name": "How to Remodel Your Kitchen in Southwest Florida",
  "step": [
    { "@type": "HowToStep", "name": "Free Consultation", "text": "..." },
    { "@type": "HowToStep", "name": "Detailed Proposal", "text": "..." },
    { "@type": "HowToStep", "name": "Expert Build", "text": "..." },
    { "@type": "HowToStep", "name": "Final Walk-Through", "text": "..." }
  ]
}
```

**`FAQPage` schema on home page** — the home page has 6 FAQs but no FAQPage schema. Add it to the home page's structured data.

**`Review` schema for testimonials** — individual `Review` objects nested in the main business schema increase rich snippet eligibility:
```json
"review": [
  {
    "@type": "Review",
    "author": { "@type": "Person", "name": "Mike T." },
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": "Junior and his team were incredibly professional..."
  }
]
```

---

## 9. Content Reformatting Suggestions

### Priority rewrites for AI citability

**Service page intros — add definition pattern ("X is...")**

```markdown
# Current
"We take kitchen remodeling seriously..."

# Recommended
"Kitchen remodeling in Southwest Florida is the process of replacing cabinetry, 
countertops, flooring, appliances, and layout in a home kitchen. In Fort Myers, 
Naples, and Cape Coral, projects typically run 6–10 weeks and range from 
$35,000–$65,000 for a mid-range renovation. Florida's coastal climate requires 
humidity-resistant materials including semi-custom or custom cabinetry with 
dovetail joints, quartz or porcelain countertops, and LVP or large-format tile 
flooring. Stacked Construction is a licensed Florida contractor (CBC1269972) 
specializing in kitchen remodels across Lee, Collier, and Charlotte counties."
```

**Word count:** 107 words — expand to ~150 for optimal AI citation length.

---

**Add "Quick Stats" tables to city pages**

City pages have good demographic data but it's buried in paragraphs. A table is more likely to be cited:

```markdown
| Fort Myers Remodeling Market | Data |
|------------------------------|------|
| Population | ~92,000 |
| Median home value | $391,700 |
| Homeownership rate | 74% |
| Primary remodel types | Kitchen, bathroom, outdoor living |
| Avg kitchen remodel cost | $35,000–$65,000 |
| Permit authority | Lee County Building Department |
| Contractor license required | Yes (FL CBC or CGC) |
```

---

**FAQ reformatting — lead with direct answer**

```markdown
# Current FAQ pattern
Q: How much does a kitchen remodel cost?
A: The cost of a kitchen remodel varies depending on many factors including...

# Recommended (direct answer first)
Q: How much does a kitchen remodel cost in Fort Myers?
A: A kitchen remodel in Fort Myers costs $35,000–$65,000 for a mid-range 
renovation. Minor refreshes (paint, hardware, appliances only) start around 
$15,000. Full custom remodels with high-end materials range from $70,000–$120,000+. 
The biggest cost drivers are cabinetry (30–40% of budget), countertops 
(10–15%), and labor (20–35%). Stacked Construction provides free itemized 
estimates — call (239) 785-0166.
```

---

**Blog article structure — add "Key Takeaways" box**

AI models frequently cite structured summary boxes. Add a 5-item bulleted "Key Takeaways" section at the top of each blog article:

```markdown
## Key Takeaways
- Mid-range kitchen remodels in Fort Myers average $35,000–$65,000
- Cabinetry is the largest cost at 30–40% of total budget
- Florida's humidity requires moisture-resistant materials throughout
- Lee County permits are required for most structural and electrical work
- Project timelines run 6–10 weeks from design approval to completion
```

---

## Summary Scorecard

| Signal | Status | Priority |
|--------|--------|----------|
| AI crawlers allowed | ✅ All major crawlers allowed | — |
| llms.txt present | ✅ Present, needs expansion | Medium |
| SSG rendering | ✅ Full static generation | — |
| Schema coverage | ✅ Comprehensive (7 types) | Add Article + Person |
| Blog content depth | ✅ 28+ articles with cost data | Strong |
| Author bylines | ❌ Missing on all articles | **Critical** |
| Self-contained answer blocks | ⚠️ Partial — some passages qualify | High |
| Question-based headings | ⚠️ Partial — FAQs good, body sections weak | High |
| YouTube presence | ❌ None found | **Critical** |
| Reddit presence | ❌ None found | High |
| Wikipedia entity | ❌ None found | Low (new brand) |
| Houzz / Angi listing | ❌ Not confirmed | Medium |
| Video content on site | ❌ None | High |
| HowTo schema | ❌ Missing (process page is perfect) | Medium |
| FAQPage on home page | ❌ Missing (FAQs exist but no schema) | Medium |
| Review schema | ❌ Missing (testimonials exist but no schema) | Medium |

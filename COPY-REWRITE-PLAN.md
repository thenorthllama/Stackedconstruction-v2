# Sitewide Copy Rewrite Plan — StoryBrand Repositioning

Foundation: `BRAND-VOICE.md`. Scope confirmed with Junior: **design-build, idea through construction**. Direct CTA: **Schedule a Consultation**. Cost content kept but reframed. Lead magnet: concept below, pending approval.

Nothing here changes layout or design — this is language, plus a small number of new sections the StoryBrand wireframe requires (stakes, plan, guide).

---

## Phase 0 — Decisions needed before I start

1. **Approve the one-liner and controlling idea** in `BRAND-VOICE.md` §1.
2. **Approve the lead magnet concept** (below).
3. **Confirm the design-build claim.** Copy will say we handle design *and* construction with one team. If design is done by an outside partner rather than in-house, tell me and I'll phrase it as "we coordinate design and build so you don't have to."
4. **Two facts I'd like but can work without:** typical project range (helps qualify leads and replaces vague cost language), and whether you offer any written warranty period.

## Lead magnet concept — for approval

**"Before You Hire: The Southwest Florida Renovation Planning Guide"** — a short PDF (6–8 pages):

- The five decisions to make before you call any contractor
- Design-build vs. hiring a designer and a builder separately — what each actually costs you in time
- Real permitting timelines for Lee and Collier counties
- Ten questions to ask any contractor, including how to verify a license in 60 seconds
- A one-page budget planning worksheet

Why this one: it's genuinely useful whether or not they hire us (which is what makes it work as a guide move), it pre-qualifies serious clients, and the license-verification page quietly makes the case for us. Gated behind an email capture, offered as the secondary CTA sitewide.

*Alternative if you want something lighter:* "10 Questions to Ask Before You Hire a Contractor in Florida" — one page, higher conversion, less authority.

---

## Phase 1 — Foundation (no visible change yet)

- Add a `src/data/brand.ts` messaging module: one-liner, boilerplate, empathy/competency/stakes/success lines, the three plan steps, CTA labels. Every page imports from here so the language can never drift again.
- Swap the direct CTA sitewide: "Get Free Estimate" / "Request a Free Estimate" / "Get Estimate" → **"Schedule a Consultation"** (≈40 instances across nav, hero, forms, and every CTA band).

## Phase 2 — Home page

| Section | Change |
|---|---|
| Hero | Headline becomes the offer, not a mood. Working draft: **"From idea to finished home"** with sub: "A licensed design-build contractor guiding Southwest Florida homeowners from first sketch to final walk-through." Rotating word ("Spaces/Homes/Stories") retired — it's mood, not offer. |
| New: Stakes | Short band after the stats: what's at risk with the wrong builder. Three lines, then the turn. |
| Services | Reframed as solutions to problems, not a list of trades. |
| About/founder | Empathy first, competency second. Junior's quote already does this well — tighten it. |
| New: The Plan | The three steps, promoted onto the home page. Currently buried on `/process`. |
| Case studies | Keep. Add one line of outcome per project (what the client got, not just what we installed). |
| FAQ | Rewritten to the real objections: how do I know you'll finish, how do you price, who's my contact. |
| Final CTA | One button, matching every other page. |

## Phase 3 — Core pages

- **`/services` + 5 service pages** — each opens with the client's problem, then the service as solution. Add the plan and a stakes line. Retire "What We Build" framing in favor of outcomes.
- **`/process`** — becomes the flagship guide page: the three steps expanded, plus the agreement plan (our promises). This is our strongest trust asset and currently reads as a generic timeline.
- **`/about` + `/about/credentials` + 3 team bios** — reordered so empathy precedes credentials. Credentials page gets the license-verification link made prominent.
- **`/contact`** — form headline becomes an invitation, not a transaction. Reassurance under the button: what happens after you submit, and when we'll reply.
- **`/projects` + 3 project pages** — light touch; already close. Add an outcome line per project and swap CTAs.
- **`/reviews`** — frame testimonials around the transformation (before/after state), not just praise.
- **`/gallery`** — captions get outcome language.

## Phase 4 — Local SEO pages (20 city + service combos, 2 county pages)

These carry the most traffic, so they change carefully:

- Keep every keyword-targeted H1 and title exactly as-is — no ranking risk.
- Rewrite intro paragraphs to lead with the local homeowner's problem.
- Inject the shared plan + stakes + CTA blocks from `brand.ts`.
- Keep all localized detail (neighborhoods, landmarks, demand drivers) — that's what makes these pages non-duplicate.

## Phase 5 — Cost content, reframed

- **Calculator** — repositioned as a *planning* tool. New framing: "Understand what your project should cost before you talk to anyone." Becomes the transitional CTA's partner.
- **Cost blog posts** — headlines and titles untouched (they rank). Intros and conclusions reframed from "how cheap can this be" to "here's how to budget honestly, and here's what drives the number."
- **New FAQ answers** — replace vague "mid range for Lee County" hedging with real ranges once you give me numbers.

## Phase 6 — Metadata

Rewrite titles and meta descriptions to the new positioning, holding the primary keyword in each. Keep every title 50–60 chars. Same for OG/Twitter and `llms.txt`.

## Phase 7 — QA

Build passes · lint clean · zero broken links · one H1 per page · CTA label identical sitewide · no banned words remaining (automated grep against the avoid-list in `BRAND-VOICE.md`) · spot-check ten pages against the §6 checklist.

---

## What I will not do without asking

- Invent project costs, timelines, warranties, client quotes, or awards.
- Claim in-house design capability beyond what you confirm.
- Change any URL, H1 keyword target, or page structure that currently ranks.
- Touch `main` — all work stays on `redesign-seo`.

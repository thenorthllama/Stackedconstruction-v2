// Central brand messaging — the single source of truth for voice-critical copy.
// Derived from BRAND-VOICE.md (StoryBrand SB7). Import from here rather than
// retyping these lines per page, so the language can never drift.

export const brand = {
  name: "Stacked Construction",
  license: "CBC1269972",
  licenseTitle: "Florida Certified Building Contractor",
  licenseVerifyUrl:
    "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=CBC1269972",
  phone: "(239) 785-0166",
  phoneHref: "tel:+12397850166",
  email: "info@stackedconstruction.co",
  cities: ["Naples", "Bonita Springs", "Fort Myers", "Cape Coral"],
  citiesText: "Naples, Bonita Springs, Fort Myers, and Cape Coral",
  counties: "Lee and Collier counties",
} as const;

/** The controlling idea — repeat everywhere. */
export const controllingIdea = "From idea to finished home — guided the whole way.";

/** What we do, in one statement. Every team member should know this. */
export const oneLiner =
  "Most homeowners have a clear vision for their home but no idea who to trust to build it. Stacked Construction is a licensed design-build contractor in Southwest Florida that guides you from first idea to final walk-through — so you end up with a home you love and a process you'd go through again.";

export const boilerplate = {
  short:
    "Stacked Construction is a licensed design-build contractor serving Naples, Bonita Springs, Fort Myers, and Cape Coral. We guide homeowners from first idea to final walk-through.",
  withProof:
    "Stacked Construction is a licensed and insured design-build contractor in Southwest Florida — Florida Certified Building Contractor CBC1269972. For over ten years we've guided homeowners in Naples, Bonita Springs, Fort Myers, and Cape Coral from first idea to final walk-through, on kitchens, baths, and whole-home renovations.",
} as const;

/** Guide positioning: empathy first, competency second. */
export const guide = {
  empathy:
    "Most people we meet have a story about a contractor who went quiet. That's the whole reason we work the way we do.",
  empathyShort: "You shouldn't have to chase anyone for an update.",
  competency:
    "Licensed & insured Florida Certified Building Contractor, CBC1269972. 40+ completed projects across Lee and Collier counties.",
  competencyShort: "Licensed & insured · FL #CBC1269972",
} as const;

/** Stakes — state once, briefly, then swing back to the positive. */
export const stakes = {
  headline: "The wrong builder costs more than money.",
  line: "The wrong builder costs more than money — it costs months, and sometimes it costs doing the whole thing twice.",
  points: [
    "A budget that moves after the work has started",
    "Weeks of silence, and a schedule nobody will commit to",
    "Unpermitted work you have to disclose when you sell",
    "Living in a half-finished house longer than anyone promised",
  ],
} as const;

/** Success — where we take them. Specific, not vague. */
export const success = {
  line: "A home that works the way you live, finished on a schedule you were told about in advance.",
  points: [
    "A home that fits how you actually live in it",
    "Permitted, inspected, and built for Florida's heat and humidity",
    "One point of contact who answers before you have to ask",
    "A process you'd go through again",
  ],
} as const;

/** The plan — the same three steps everywhere on the site. */
export const planSteps = [
  {
    number: "01",
    title: "Consultation",
    summary: "We come to you",
    body: "We walk your space, listen to how you want to live in it, and talk honestly about scope and budget before anyone draws anything.",
  },
  {
    number: "02",
    title: "Design & Proposal",
    summary: "See it before we build it",
    body: "We design the space and hand you a line-item proposal. You see the whole picture — drawings, selections, and real numbers — before a tool comes out.",
  },
  {
    number: "03",
    title: "Build",
    summary: "One team, start to finish",
    body: "We pull the permits, schedule the trades, and keep you updated without you having to ask — through final walk-through.",
  },
] as const;

/** The agreement plan — the promises behind the steps. */
export const promises = [
  "We show up when we say we will.",
  "You get a line-item proposal, not a lump sum.",
  "No surprise change orders — changes get priced and approved before work continues.",
  "We pull the permits and manage the inspections.",
  "We leave the site clean.",
  "Licensed and insured, with documentation handed over before you ask.",
] as const;

/** Calls to action. One direct CTA label, used identically sitewide. */
export const cta = {
  direct: "Schedule a Consultation",
  directShort: "Schedule a Consult",
  directHref: "/contact",
  phone: `Call ${brand.phone}`,
  transitional: "Get the Planning Guide",
  transitionalHref: "/planning-guide",
  /** Reassurance under a form or button. */
  reassurance:
    "No pressure and no obligation. We'll get back to you within one business day.",
} as const;

/** Identity transformation — useful for testimonial and case-study framing. */
export const transformation = {
  from: "A homeowner who's been let down before, or is afraid of it — hesitant to start something this big.",
  to: "A confident owner of a home they love, who knows they chose well.",
} as const;

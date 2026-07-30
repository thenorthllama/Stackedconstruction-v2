// Central SEO data layer — powers all dynamic city, service, and county pages

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  headlineItalic: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface CityData {
  slug: string;
  name: string;
  county: string;
  countySlug: string;
  state: string;
  population: string;
  medianHomeValue: string;
  headline: string;
  headlineItalic: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: { name: string; type: string; copy: string }[];
  demandDrivers: string[];
  serviceIntros: Record<string, string>;
}

export interface CountyData {
  slug: string;
  name: string;
  fullName: string;
  population: string;
  medianHomeValue: string;
  medianIncome: string;
  homeownershipRate: string;
  medianAge: string;
  headline: string;
  headlineItalic: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  cities: string[]; // city slugs
  demandPatterns: string[];
  positioning: string;
}

// ─── SERVICES ───────────────────────────────────────────────────────────────────

export const services: ServiceData[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen",
    headline: "Kitchen Remodeling",
    headlineItalic: "Experts",
    description: "Custom cabinetry, countertops, backsplashes, and complete kitchen transformations.",
    metaTitle: "Kitchen Remodeling in Southwest Florida | Stacked",
    metaDescription: "Expert kitchen remodeling across Fort Myers, Naples, and Cape Coral. Custom cabinetry, premium countertops, and complete kitchen transformations. Licensed contractor. Schedule a consultation.",
    intro: "Most kitchens we're called about don't have a style problem — they have a layout problem. The island is in the wrong place, there's nowhere to put anything, and two people can't work in there at once. We design and build kitchens across Southwest Florida as one project: we draw the layout, price it line by line, and build it with our own team. You'll see the plan and the real number before anyone picks up a tool.",
    benefits: [
      "Custom cabinetry designed for your space and style",
      "Premium countertop installation — quartz, granite, marble, and more",
      "Complete layout redesigns including island additions and open-concept conversions",
      "Backsplash, lighting, and fixture upgrades",
      "Appliance integration and electrical updates",
      "Flooring replacement and transition work",
      "Humidity-resistant materials selected for Florida's climate",
    ],
    faqs: [
      { question: "How much does a kitchen remodel cost in Southwest Florida?", answer: "Kitchen remodels in SWFL typically range from $25,000 for a mid-range refresh to $100,000+ for a luxury full-scale renovation. During your free consultation, we provide a detailed line-item estimate tailored to your specific project, materials, and layout." },
      { question: "How long does a kitchen remodel take?", answer: "Most kitchen remodels take 6–10 weeks depending on scope, material lead times, and permit requirements. We provide a realistic timeline during the proposal phase and keep you updated on progress throughout." },
      { question: "What countertops work best in Florida's humidity?", answer: "Quartz is the most popular choice for Florida kitchens — it's non-porous, heat-resistant, and handles humidity well. Granite and porcelain are also excellent options. We'll help you choose the right material for your lifestyle and budget." },
      { question: "Do I need a permit for kitchen remodeling in Lee County?", answer: "If your remodel involves electrical, plumbing, or structural changes, a permit is required in Lee and Collier counties. We handle all permitting as part of our service." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom",
    headline: "Bathroom Remodeling",
    headlineItalic: "That Inspires",
    description: "Modern vanities, walk-in showers, soaking tubs, and spa-inspired bathroom designs.",
    metaTitle: "Bathroom Remodeling in Southwest Florida | Stacked",
    metaDescription: "Expert bathroom remodeling in Fort Myers, Naples, and Cape Coral. Walk-in showers, custom vanities, spa-inspired designs. Licensed SWFL contractor. Schedule a consultation.",
    intro: "A bathroom is the room where bad work shows up fastest — grout that fails, a shower pan that leaks, a vanity that doesn't fit the way you actually use the space. We design and build bathrooms across Southwest Florida with the waterproofing and ventilation detailed properly for Florida humidity, because that's the part you can't see and can't fix later. Walk-in showers, custom vanities, soaking tubs, and aging-in-place work, drawn and priced before we start.",
    benefits: [
      "Walk-in showers with frameless glass enclosures",
      "Custom vanities and cabinetry",
      "Freestanding soaking tubs",
      "Heated floors and towel bars",
      "Aging-in-place modifications — grab bars, bench seating, barrier-free entry",
      "Tile work — porcelain, natural stone, mosaic, and large-format tile",
      "Lighting, ventilation, and electrical upgrades",
    ],
    faqs: [
      { question: "How much does a bathroom remodel cost in SWFL?", answer: "Bathroom remodels in Southwest Florida range from $15,000 for a standard update to $60,000+ for a luxury master bathroom renovation. We provide a detailed estimate with material options at multiple price points." },
      { question: "How long does a bathroom remodel take?", answer: "Most bathroom remodels take 3–6 weeks. A simple refresh (new tile, vanity, fixtures) can be done in 2–3 weeks, while a full master bath renovation with layout changes takes 5–6 weeks." },
      { question: "Can you make my bathroom more accessible for aging in place?", answer: "Absolutely. We specialize in aging-in-place bathroom modifications including barrier-free walk-in showers, grab bars, bench seating, non-slip flooring, and comfort-height toilets. These upgrades are especially popular in retirement communities across SWFL." },
    ],
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    shortName: "Full Home",
    headline: "Full Home",
    headlineItalic: "Renovation",
    description: "Comprehensive whole-home remodels that reimagine your space from floor plan to finishing touches.",
    metaTitle: "Home Renovation in Southwest Florida | Stacked",
    metaDescription: "Full home renovation across Fort Myers, Naples, Cape Coral, and all of SWFL. Complete remodels from floor plan to finishing touches. Licensed contractor. Schedule a consultation.",
    intro: "When one room isn't the problem, renovating room by room is the expensive way to find that out. A whole-home project lets us rework the floor plan once, run the mechanicals once, and pull one permit — which is both cheaper and less disruptive than three separate jobs. We design the whole plan, price it line by line, and manage every trade ourselves across Southwest Florida.",
    benefits: [
      "Complete floor plan reimagining and layout optimization",
      "Kitchen, bathroom, and living space renovations under one contractor",
      "Flooring, lighting, and electrical throughout",
      "Interior and exterior paint coordination",
      "Hurricane-hardening and impact window upgrades",
      "Custom millwork, built-ins, and trim details",
      "Single point of contact for the entire project",
    ],
    faqs: [
      { question: "How much does a full home renovation cost in Southwest Florida?", answer: "Full home renovations in SWFL range from $50,000 for targeted multi-room updates to $250,000+ for comprehensive luxury renovations. The cost depends on square footage, scope, materials, and structural changes required." },
      { question: "Can I live in my home during a full renovation?", answer: "It depends on the scope. For phased renovations, we can often keep portions of your home livable. For comprehensive gut-renovations, temporary relocation may be more comfortable. We'll discuss the best approach during your consultation." },
      { question: "How long does a whole home renovation take?", answer: "Full home renovations typically take 3–6 months depending on scope. We create a detailed project timeline during the proposal phase with clear milestones so you always know what to expect." },
    ],
  },
  {
    slug: "outdoor-living",
    name: "Outdoor Living & Kitchens",
    shortName: "Outdoor Living",
    headline: "Outdoor Living",
    headlineItalic: "& Kitchens",
    description: "Outdoor kitchens, lanai remodels, patios, pool decks, and living spaces for the SWFL lifestyle.",
    metaTitle: "Outdoor Living & Outdoor Kitchens SWFL | Stacked",
    metaDescription: "Outdoor kitchens, lanai remodels, patios, and pool deck renovations in Fort Myers, Naples, and Cape Coral. Built for the Southwest Florida lifestyle. Schedule a consultation.",
    intro: "You moved here for the weather, and then the outdoor space sat unused because it's too hot at 4pm, there's nowhere to sit, or the grill is a walk from the kitchen. Outdoor work in Florida also punishes shortcuts — the wrong cabinetry, stone, or fastener fails within a few seasons in salt air. We design and build outdoor kitchens, lanai renovations, and pool decks with materials specified for this climate, so the space is genuinely usable and stays that way.",
    benefits: [
      "Custom outdoor kitchens with built-in grills, sinks, and refrigeration",
      "Lanai and screened enclosure renovations",
      "Patio design, expansion, and resurfacing",
      "Pool deck renovation and resurfacing",
      "Outdoor bars and entertainment areas",
      "Weather-resistant materials rated for Florida's climate",
      "Electrical and plumbing for outdoor living",
    ],
    faqs: [
      { question: "How much does an outdoor kitchen cost in Southwest Florida?", answer: "Outdoor kitchens in SWFL range from $20,000 for a basic grill station to $80,000+ for a full outdoor kitchen with premium appliances, countertops, and covered structure. We provide detailed estimates based on your specific vision." },
      { question: "What materials work best for outdoor kitchens in Florida?", answer: "We recommend marine-grade stainless steel appliances, granite or quartzite countertops, and concrete block or aluminum frame construction. These materials handle Florida's heat, humidity, and salt air without deteriorating." },
      { question: "Can you remodel my lanai?", answer: "Absolutely. Lanai remodels are one of our most popular services. We handle everything from rescreening and flooring upgrades to full lanai expansions with outdoor kitchens and entertainment areas." },
    ],
  },
  {
    slug: "flooring-tile",
    name: "Flooring & Tile",
    shortName: "Flooring",
    headline: "Flooring &",
    headlineItalic: "Tile",
    description: "Expert installation of hardwood, porcelain, natural stone, and luxury vinyl.",
    metaTitle: "Flooring & Tile Installation SWFL | Stacked",
    metaDescription: "Expert flooring and tile installation in Fort Myers, Naples, and Cape Coral. Hardwood, porcelain, natural stone, and luxury vinyl. Licensed contractor. Schedule a consultation.",
    intro: "Flooring is where poor prep shows up a year later as lippage, hollow tiles, or cupped boards. In Florida, slab moisture and humidity make the subfloor prep as important as the material you choose — and it's the step most often skipped. We install large-format porcelain, natural stone, luxury vinyl plank, and hardwood across Southwest Florida, with the substrate work done properly and transitions detailed so they lie flat.",
    benefits: [
      "Large-format porcelain and ceramic tile installation",
      "Natural stone — travertine, marble, and slate",
      "Luxury vinyl plank (LVP) — waterproof and durable",
      "Hardwood and engineered hardwood installation",
      "Tile pattern work — herringbone, chevron, and custom layouts",
      "Bathroom and shower tile — walls, floors, and niches",
      "Transition work between rooms and flooring types",
    ],
    faqs: [
      { question: "What flooring works best in Florida homes?", answer: "Porcelain tile and luxury vinyl plank (LVP) are the most popular choices for Florida homes due to their water resistance and durability. Natural stone is excellent for luxury homes. We'll help you choose the right option for your lifestyle, style, and budget." },
      { question: "Can you install heated floors?", answer: "Yes. Radiant heated floors are especially popular in bathroom remodels. We install electric radiant heating systems under tile flooring for comfortable warmth underfoot." },
    ],
  },
];

// ─── CITIES ─────────────────────────────────────────────────────────────────────

export const cities: CityData[] = [
  {
    slug: "fort-myers",
    name: "Fort Myers",
    county: "Lee County",
    countySlug: "lee-county",
    state: "FL",
    population: "~92,000",
    medianHomeValue: "$391,700",
    headline: "Fort Myers",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Fort Myers FL | Stacked",
    metaDescription: "Expert home remodeling in Fort Myers, FL. Kitchen, bathroom, outdoor living, and full home renovations. Licensed Lee County contractor. 40+ projects. Schedule a consultation.",
    intro: "Fort Myers is the heart of Lee County and one of Southwest Florida's most dynamic remodeling markets. From historic homes near the Edison and Ford Winter Estates to modern builds along the Daniels Corridor, Fort Myers homeowners are investing in kitchen remodels, bathroom renovations, outdoor living upgrades, and full home transformations. Stacked Construction serves Fort Myers with the same values that define our work across SWFL: honest pricing, quality craftsmanship, and clear communication.",
    neighborhoods: ["River District", "McGregor Boulevard", "Daniels Corridor", "Summerlin Road", "Gulf Harbour", "The Plantation", "Pelican Preserve", "Gateway", "Whiskey Creek", "South Fort Myers"],
    landmarks: [
      { name: "Edison and Ford Winter Estates", type: "Historic Landmark", copy: "Our Fort Myers kitchen remodeling team works just minutes from the historic Edison and Ford Winter Estates, bringing that same spirit of innovation to every project." },
      { name: "Fort Myers River District", type: "Downtown District", copy: "Serving homeowners throughout the Fort Myers River District and surrounding neighborhoods with expert remodeling services." },
      { name: "McGregor Boulevard", type: "Major Corridor", copy: "From the royal palms of McGregor Boulevard to the canal homes of Cape Coral, we bring expert remodeling to every corner of Lee County." },
    ],
    demandDrivers: [
      "Post-Hurricane Ian renovation demand remains strong in coastal areas",
      "Mix of historic and mid-century homes needing full updates",
      "Growing population driving demand for modern kitchen and bathroom upgrades",
      "Snowbird season (October–April) increases remodeling planning and investment",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Fort Myers kitchen remodeling is our bread and butter. From open-concept conversions in McGregor Boulevard homes to modern kitchen overhauls in Gateway and Daniels Corridor communities, we deliver custom cabinetry, premium countertops, and complete kitchen transformations designed for how Fort Myers families actually live.",
      "bathroom-remodeling": "Whether you're updating a master bath in Gulf Harbour or adding aging-in-place features to a Pelican Preserve bathroom, our Fort Myers bathroom remodeling team delivers spa-inspired designs with expert tile work, custom vanities, and walk-in showers built to last.",
      "home-renovation": "Fort Myers is full of homes from the 1970s through 2000s that are ready for a complete transformation. Our whole-home renovation service handles everything — kitchen, bathrooms, flooring, lighting, and layout changes — under one roof with one dedicated project manager.",
      "outdoor-living": "Fort Myers' year-round sunshine makes outdoor living spaces essential. We build custom outdoor kitchens, lanai renovations, patio expansions, and pool deck upgrades across Fort Myers, from Whiskey Creek to the Summerlin Road corridor.",
    },
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    countySlug: "lee-county",
    state: "FL",
    population: "~210,000",
    medianHomeValue: "$391,700",
    headline: "Cape Coral",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Cape Coral FL | Stacked",
    metaDescription: "Cape Coral's trusted remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations for canal-home owners. Licensed & insured. Schedule a consultation.",
    intro: "Cape Coral is the largest city in Lee County and one of Southwest Florida's fastest-growing remodeling markets. With over 400 miles of canals and a housing stock spanning the 1980s through today, Cape Coral homeowners are investing heavily in kitchen remodels, bathroom updates, outdoor kitchens, and full home renovations. Stacked Construction understands the unique considerations of Cape Coral canal-front homes — from waterfront-facing outdoor kitchens to moisture-resistant materials that handle the Gulf Coast climate.",
    neighborhoods: ["Cape Harbour", "Tarpon Point Marina", "Yacht Club", "Cape Royal", "Coral Lakes", "Southwest Cape Coral", "Northwest Cape Coral", "Burnt Store Road Corridor", "Surfside Boulevard", "Pelican Boulevard"],
    landmarks: [
      { name: "Cape Coral Canal System", type: "Waterway", copy: "Cape Coral's 400 miles of canals make it one of Florida's most unique cities for waterfront home remodeling, and our team understands the special considerations of canal-front kitchen and bathroom renovations." },
      { name: "Cape Harbour", type: "Marina District", copy: "Cape Harbour area homeowners choose us for outdoor kitchen builds and lanai remodels that take full advantage of Southwest Florida's waterfront lifestyle." },
      { name: "Tarpon Point Marina", type: "Luxury Waterfront", copy: "From Tarpon Point Marina to the Yacht Club, we bring premium remodeling craftsmanship to Cape Coral's finest waterfront neighborhoods." },
    ],
    demandDrivers: [
      "400+ miles of canals create unique waterfront remodeling demand",
      "1980s–2000s canal homes reaching prime renovation age",
      "Fastest-growing city in SWFL drives new homeowner upgrades",
      "Outdoor kitchen and lanai demand from canal-front lifestyle",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Cape Coral's canal-front homes deserve kitchens that match the waterfront views. We specialize in open-concept kitchen remodels, custom cabinetry, and premium countertop installations for Cape Coral homeowners from the Yacht Club to Cape Harbour and beyond.",
      "bathroom-remodeling": "From master bath renovations in Southwest Cape to guest bathroom updates in Burnt Store corridor communities, our Cape Coral bathroom remodeling team delivers modern designs, expert tile work, and walk-in showers built for Florida living.",
      "home-renovation": "Many Cape Coral homes built in the 1980s and 1990s are ready for a complete transformation. We handle full home renovations — kitchen, bathrooms, flooring, lighting, and layout — with one contractor and one clear plan.",
      "outdoor-living": "Cape Coral's canal lifestyle demands incredible outdoor living spaces. We build custom outdoor kitchens, lanai renovations, and pool deck upgrades designed to make the most of your waterfront setting.",
    },
  },
  {
    slug: "naples",
    name: "Naples",
    county: "Collier County",
    countySlug: "collier-county",
    state: "FL",
    population: "~330,000 metro",
    medianHomeValue: "$486,800",
    headline: "Naples",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Naples FL | Luxury Renovation | Stacked",
    metaDescription: "Naples' trusted luxury remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations for Pelican Bay, Grey Oaks, Park Shore & more. Schedule a consultation.",
    intro: "Naples is Southwest Florida's crown jewel — and its homeowners expect nothing less than perfection. Stacked Construction delivers luxury kitchen remodeling, spa-inspired bathroom renovations, premium outdoor living spaces, and comprehensive whole-home transformations for Naples' most discerning homeowners. From Port Royal estates and Grey Oaks custom homes to Pelican Bay condos and Tiburon residences, we bring expert craftsmanship, transparent pricing, and white-glove communication to every project.",
    neighborhoods: ["Port Royal", "Grey Oaks", "Pelican Bay", "Park Shore", "The Moorings", "Bay Colony", "Tiburon", "Mediterra", "Talis Park", "Quail West", "Fiddler's Creek", "Lely Resort", "Vineyards", "Kensington", "Vanderbilt Beach", "Old Naples", "Fifth Avenue South"],
    landmarks: [
      { name: "Fifth Avenue South", type: "Downtown District", copy: "We serve downtown Naples homeowners within walking distance of Fifth Avenue South, transforming kitchens and bathrooms throughout the historic district." },
      { name: "Naples Pier", type: "Landmark", copy: "From the Naples Pier to Pine Ridge Road, our remodeling team serves every Naples neighborhood with expert craftsmanship." },
      { name: "Port Royal", type: "Ultra-Luxury Neighborhood", copy: "Our Port Royal remodeling clients expect nothing less than perfection, and we deliver luxury kitchen and bathroom renovations worthy of Naples' most exclusive address." },
    ],
    demandDrivers: [
      "Highest-value market in SWFL — luxury remodeling epicenter",
      "1990s–2000s boom homes reaching prime renovation age (20–30 years old)",
      "Seasonal residents authorize remodeling during summer months while away",
      "Condo remodeling demand in high-rises (Pelican Bay, Park Shore, Bay Colony)",
      "Tuscan-style and dated finishes being replaced with contemporary coastal aesthetics",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Naples demands the finest in kitchen remodeling. We deliver custom cabinetry, imported stone countertops, premium appliance integration, and complete kitchen transformations for homes in Pelican Bay, Grey Oaks, Tiburon, and every Naples community. Projects range from $60,000 to $150,000+ in Naples' luxury market.",
      "bathroom-remodeling": "Spa-inspired bathroom remodeling is a specialty in Naples. Walk-in showers with frameless glass, freestanding soaking tubs, heated floors, and custom vanities — our master bath renovations reflect the standard of living Naples homeowners expect. Common project range: $40,000–$80,000+.",
      "home-renovation": "Many Naples homes in gated communities are reaching 20–30 years old and need comprehensive updates. We manage full home renovations — from floor plan redesigns to finishing touches — for homeowners in Mediterra, Quail West, Fiddler's Creek, and across Naples.",
      "outdoor-living": "Naples is the premier market for outdoor living in Southwest Florida. We build luxury outdoor kitchens, summer kitchens, lanai remodels, and poolside entertainment areas that rival the finest indoor spaces.",
    },
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee County",
    countySlug: "lee-county",
    state: "FL",
    population: "~57,000",
    medianHomeValue: "$450,000+",
    headline: "Bonita Springs",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Bonita Springs FL | Stacked",
    metaDescription: "Bonita Springs remodeling contractor. Kitchen, bathroom, and outdoor living renovations for Bonita Bay, The Brooks, and Barefoot Beach homeowners. Schedule a consultation.",
    intro: "Bonita Springs sits at the crossroads of Lee and Collier counties, blending affluent living with a laid-back coastal lifestyle. Home to prestigious communities like Bonita Bay, The Brooks, and Barefoot Beach, Bonita Springs homeowners invest in premium kitchen remodels, spa-inspired bathroom renovations, and outdoor living spaces that take full advantage of the SWFL climate. Stacked Construction serves Bonita Springs with the craftsmanship and attention to detail that these fine communities deserve.",
    neighborhoods: ["Bonita Bay", "The Brooks", "Shadow Wood", "Spring Run", "Barefoot Beach", "Pelican Landing", "Worthington", "Spanish Wells", "Highland Woods"],
    landmarks: [
      { name: "Bonita Bay", type: "Luxury Community", copy: "Bonita Bay homeowners depend on our expertise for luxury kitchen remodels that match the community's premier lifestyle." },
      { name: "Barefoot Beach", type: "Beach Community", copy: "Barefoot Beach and Bonita Beach area homeowners choose us for coastal-inspired kitchen and bathroom remodels." },
    ],
    demandDrivers: [
      "Affluent bridge market between Lee and Collier counties",
      "Aging luxury homes in Bonita Bay and The Brooks needing updates",
      "Strong demand for premium outdoor kitchens and lanai renovations",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Bonita Springs' luxury communities like Bonita Bay and The Brooks demand kitchen remodeling that matches their premium lifestyle. We deliver custom cabinetry, stone countertops, and complete kitchen transformations with the quality these communities expect.",
      "bathroom-remodeling": "From master bath renovations in Shadow Wood to spa-inspired updates in Pelican Landing, our Bonita Springs bathroom remodeling team creates beautiful, functional spaces built for Florida living.",
      "home-renovation": "Many Bonita Springs homes are reaching 15–25 years old and are ready for comprehensive updates. We handle full home renovations with a single point of contact and transparent pricing.",
      "outdoor-living": "Bonita Springs homeowners love outdoor entertaining. We build custom outdoor kitchens, lanai renovations, and pool deck upgrades throughout Bonita Bay, The Brooks, and the greater Bonita Springs area.",
    },
  },
];

// ─── COUNTIES ───────────────────────────────────────────────────────────────────

export const counties: CountyData[] = [
  {
    slug: "lee-county",
    name: "Lee County",
    fullName: "Lee County, Florida",
    population: "~878,000",
    medianHomeValue: "$391,700",
    medianIncome: "$73,099",
    homeownershipRate: "74%",
    medianAge: "~47 years",
    headline: "Lee County",
    headlineItalic: "Remodeling",
    metaTitle: "Lee County Remodeling Contractor | Stacked",
    metaDescription: "Lee County's trusted remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations in Fort Myers, Cape Coral, Bonita Springs, Estero, and beyond. Schedule a consultation.",
    intro: "Lee County is the largest remodeling market in Southwest Florida, home to nearly 878,000 residents across Fort Myers, Cape Coral, Bonita Springs, Estero, Lehigh Acres, and the barrier islands. With a homeownership rate of 74% and a median home value of $391,700, Lee County homeowners are actively investing in kitchen remodels, bathroom renovations, outdoor living spaces, and full home transformations. Stacked Construction serves all of Lee County with the quality craftsmanship and transparent pricing that has earned our reputation across SWFL.",
    cities: ["fort-myers", "cape-coral", "bonita-springs"],
    demandPatterns: [
      "Kitchen remodeling is the strongest demand driver — Cape Coral canal homes and Fort Myers mid-century homes lead the market",
      "Bathroom remodeling with aging-in-place modifications is growing rapidly across all cities",
      "Outdoor living demand is exploding — lanai remodels, outdoor kitchens, and pool deck renovations",
      "Post-Hurricane Ian full home renovation demand remains active in coastal communities",
      "Peak season (October–April) brings 15–20% population increase and remodeling investment",
    ],
    positioning: "Lee County is the volume market — the mid-to-upper market sweet spot of $35,000–$85,000 kitchen remodels and $18,000–$45,000 bathroom remodels, with premium opportunity in Bonita Springs, Estero, and Gulf Harbour.",
  },
  {
    slug: "collier-county",
    name: "Collier County",
    fullName: "Collier County, Florida",
    population: "~388,000",
    medianHomeValue: "$486,800",
    medianIncome: "$86,173",
    homeownershipRate: "76%",
    medianAge: "53.1 years",
    headline: "Collier County",
    headlineItalic: "Remodeling",
    metaTitle: "Collier County Remodeling Contractor | Naples | Stacked",
    metaDescription: "Collier County's luxury remodeling contractor. Kitchen, bathroom, and full home renovations in Naples and surrounding communities. Schedule a consultation.",
    intro: "Collier County is Southwest Florida's luxury remodeling epicenter. Home to Naples and some of the most prestigious residential communities in the state, Collier County homeowners invest in premium kitchen remodels, spa-inspired bathroom renovations, and comprehensive whole-home transformations. With a median home value of $486,800 and median household income of $86,173, Collier County represents the highest revenue-per-project opportunity in the tri-county area. Stacked Construction delivers the caliber of craftsmanship that Collier County's finest communities demand.",
    cities: ["naples"],
    demandPatterns: [
      "Luxury kitchen remodeling with custom cabinetry and imported materials ($60,000–$150,000+ projects)",
      "Spa-like master bathroom renovations ($40,000–$80,000+ range)",
      "Full home renovations in gated communities updating 1990s–2000s finishes to modern coastal aesthetics",
      "Condo remodeling in high-rises — Pelican Bay, Park Shore, The Moorings, Bay Colony",
      "Seasonal residents authorize remodeling during summer months while they're away",
    ],
    positioning: "Collier County is the luxury authority market — establish premium positioning through Naples projects with project values regularly exceeding $100,000.",
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCountyBySlug(slug: string): CountyData | undefined {
  return counties.find((c) => c.slug === slug);
}

export function getCitiesForCounty(countySlug: string): CityData[] {
  return cities.filter((c) => c.countySlug === countySlug);
}

/** All valid city + service slug combos for static generation */
export function getAllCityServiceParams(): { city: string; service: string }[] {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      if (city.serviceIntros[service.slug]) {
        params.push({ city: city.slug, service: service.slug });
      }
    }
  }
  return params;
}

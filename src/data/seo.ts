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
    metaTitle: "Kitchen Remodeling in Southwest Florida | Stacked Construction",
    metaDescription: "Expert kitchen remodeling across Fort Myers, Naples, and Cape Coral. Custom cabinetry, premium countertops, and complete kitchen transformations. Licensed contractor. Free estimate.",
    intro: "Your kitchen is the heart of your home — and it should look and function like it. At Stacked Construction, we specialize in full-scale kitchen remodeling across Southwest Florida, from custom cabinetry and premium countertops to complete layout redesigns that transform how your family lives, cooks, and gathers. Whether you're updating a dated Cape Coral canal home kitchen or building a luxury chef's kitchen in a Naples estate, our team delivers quality craftsmanship with honest pricing and clear communication every step of the way.",
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
      { question: "Do I need a permit for kitchen remodeling in Lee County?", answer: "If your remodel involves electrical, plumbing, or structural changes, a permit is required in Lee, Collier, and Charlotte counties. We handle all permitting as part of our service." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom",
    headline: "Bathroom Remodeling",
    headlineItalic: "That Inspires",
    description: "Modern vanities, walk-in showers, soaking tubs, and spa-inspired bathroom designs.",
    metaTitle: "Bathroom Remodeling in Southwest Florida | Stacked Construction",
    metaDescription: "Expert bathroom remodeling in Fort Myers, Naples, and Cape Coral. Walk-in showers, custom vanities, spa-inspired designs. Licensed SWFL contractor. Free consultation.",
    intro: "A great bathroom remodel does more than update tile and fixtures — it transforms your daily routine into something you actually enjoy. At Stacked Construction, we design and build spa-inspired bathrooms across Southwest Florida, from modern walk-in showers and freestanding soaking tubs to custom vanities and aging-in-place modifications. Whether you're remodeling a master bath in Naples or updating a guest bathroom in Fort Myers, we bring the same level of craftsmanship, communication, and care to every project.",
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
      { question: "Can you make my bathroom more accessible for aging in place?", answer: "Absolutely. We specialize in aging-in-place bathroom modifications including barrier-free walk-in showers, grab bars, bench seating, non-slip flooring, and comfort-height toilets. These upgrades are especially popular in Charlotte County and retirement communities across SWFL." },
    ],
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    shortName: "Full Home",
    headline: "Full Home",
    headlineItalic: "Renovation",
    description: "Comprehensive whole-home remodels that reimagine your space from floor plan to finishing touches.",
    metaTitle: "Home Renovation in Southwest Florida | Stacked Construction",
    metaDescription: "Full home renovation across Fort Myers, Naples, Cape Coral, and all of SWFL. Complete remodels from floor plan to finishing touches. Licensed contractor. Free estimate.",
    intro: "Sometimes a single room update isn't enough — your home needs a complete transformation. Stacked Construction delivers comprehensive whole-home renovations across Southwest Florida, reimagining your space from floor plan to finishing touches. Whether you're modernizing a 1980s Cape Coral canal home, updating a dated Naples estate, or renovating a post-hurricane property in Charlotte County, we manage every detail so you don't have to.",
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
    metaTitle: "Outdoor Living & Outdoor Kitchens SWFL | Stacked Construction",
    metaDescription: "Outdoor kitchens, lanai remodels, patios, and pool deck renovations in Fort Myers, Naples, and Cape Coral. Built for the Southwest Florida lifestyle. Free estimate.",
    intro: "Southwest Florida's year-round sunshine demands outdoor living spaces that are as functional and beautiful as your indoor rooms. Stacked Construction builds custom outdoor kitchens, lanai renovations, patio expansions, and pool deck upgrades designed specifically for the SWFL climate. From a full outdoor kitchen on a Cape Coral canal to a luxury poolside entertainment area in Naples, we create spaces where your family and guests want to spend every evening.",
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
    metaTitle: "Flooring & Tile Installation SWFL | Stacked Construction",
    metaDescription: "Expert flooring and tile installation in Fort Myers, Naples, and Cape Coral. Hardwood, porcelain, natural stone, and luxury vinyl. Licensed contractor. Free estimate.",
    intro: "The right flooring transforms how a room looks and feels — and in Southwest Florida, it needs to handle humidity, sand, and heavy foot traffic. Stacked Construction provides expert flooring and tile installation across SWFL, from large-format porcelain and natural stone to luxury vinyl plank and hardwood. We handle everything from single-room updates to whole-home flooring replacements with clean, precise craftsmanship.",
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
    metaTitle: "Home Remodeling Fort Myers FL | Stacked Construction",
    metaDescription: "Expert home remodeling in Fort Myers, FL. Kitchen, bathroom, outdoor living, and full home renovations. Licensed Lee County contractor. 150+ projects. Free estimate.",
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
    metaTitle: "Home Remodeling Cape Coral FL | Stacked Construction",
    metaDescription: "Cape Coral's trusted remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations for canal-home owners. Licensed & insured. Free estimate.",
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
    metaTitle: "Home Remodeling Naples FL | Luxury Renovation | Stacked Construction",
    metaDescription: "Naples' trusted luxury remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations for Pelican Bay, Grey Oaks, Park Shore & more. Free consultation.",
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
    metaTitle: "Home Remodeling Bonita Springs FL | Stacked Construction",
    metaDescription: "Bonita Springs remodeling contractor. Kitchen, bathroom, and outdoor living renovations for Bonita Bay, The Brooks, and Barefoot Beach homeowners. Free estimate.",
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
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    county: "Charlotte County",
    countySlug: "charlotte-county",
    state: "FL",
    population: "~20,000",
    medianHomeValue: "$268,200",
    headline: "Punta Gorda",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Punta Gorda FL | Stacked Construction",
    metaDescription: "Punta Gorda's trusted remodeling contractor. Kitchen, bathroom, and home renovations for Punta Gorda Isles, Burnt Store, and waterfront homeowners. Free estimate.",
    intro: "Punta Gorda is Charlotte County's waterfront gem, home to the Harborwalk, Fishermen's Village, and prestigious canal-front communities like Punta Gorda Isles and Burnt Store Isles. With continued post-Hurricane Ian renovation demand and an aging housing stock, Punta Gorda homeowners are investing in kitchen remodels, bathroom updates, and full home renovations. Stacked Construction brings the same quality craftsmanship and transparent pricing that has earned our reputation across Southwest Florida to every Punta Gorda project.",
    neighborhoods: ["Punta Gorda Isles", "Burnt Store Isles", "Historic Downtown", "Punta Gorda Landings", "Burnt Store Marina", "Deep Creek"],
    landmarks: [
      { name: "Punta Gorda Harborwalk", type: "Waterfront Landmark", copy: "Punta Gorda homeowners near the Harborwalk trust our team for kitchen and bathroom remodels that match their waterfront lifestyle." },
      { name: "Fishermen's Village", type: "Shopping/Marina", copy: "We serve Punta Gorda homeowners from Fishermen's Village to Burnt Store Isles with expert remodeling services." },
      { name: "Charlotte Harbor", type: "Waterway", copy: "Charlotte Harbor area homeowners choose our remodeling team for renovations that embrace the waterfront lifestyle." },
    ],
    demandDrivers: [
      "Post-Hurricane Ian renovation demand continues strong",
      "Highest homeownership rate in the tri-county area (83.2%)",
      "Waterfront communities investing in kitchen and bathroom upgrades",
      "Aging-in-place demand — 40% of Charlotte County is 65+",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Punta Gorda's waterfront homes deserve updated kitchens that match their stunning harbor views. From Punta Gorda Isles canal homes to historic downtown residences, we deliver custom kitchen remodeling with honest pricing and quality craftsmanship.",
      "bathroom-remodeling": "Bathroom remodeling in Punta Gorda often includes aging-in-place modifications — walk-in showers, grab bars, and barrier-free designs — alongside modern spa-inspired upgrades. We handle both with equal care and expertise.",
      "home-renovation": "Many Punta Gorda homes suffered Hurricane Ian damage and need comprehensive renovation. We manage full home renovations from structural repairs to design finishes, helping Charlotte County homeowners rebuild better.",
      "outdoor-living": "Punta Gorda's waterfront lifestyle demands beautiful outdoor living spaces. We build outdoor kitchens, lanai renovations, and pool deck upgrades for homeowners in Punta Gorda Isles, Burnt Store, and throughout Charlotte County.",
    },
  },
  {
    slug: "marco-island",
    name: "Marco Island",
    county: "Collier County",
    countySlug: "collier-county",
    state: "FL",
    population: "~18,000",
    medianHomeValue: "$600,000+",
    headline: "Marco Island",
    headlineItalic: "Remodeling",
    metaTitle: "Home Remodeling Marco Island FL | Luxury Renovation | Stacked Construction",
    metaDescription: "Marco Island luxury remodeling. Kitchen, bathroom, and full home renovations for waterfront estates and island homes. Licensed Collier County contractor. Free consultation.",
    intro: "Marco Island is one of Southwest Florida's most exclusive addresses, with over 100 miles of internal waterways and some of the finest waterfront homes in Collier County. Stacked Construction delivers luxury kitchen remodeling, spa-inspired bathroom renovations, and comprehensive whole-home transformations for Marco Island homeowners who expect the very best. From The Estates' waterfront mansions to Hideaway Beach residences, we bring island-appropriate craftsmanship and materials built to withstand the coastal environment.",
    neighborhoods: ["The Estates", "Hideaway Beach", "Old Marco", "South Beach", "Tigertail Beach area", "Key Marco"],
    landmarks: [
      { name: "The Estates", type: "Ultra-Luxury Neighborhood", copy: "The Estates waterfront homeowners trust our team for luxury kitchen remodels and full home renovations designed for Marco Island's premier addresses." },
      { name: "Hideaway Beach", type: "Gated Beach Community", copy: "Hideaway Beach residents choose our remodeling team for luxury renovations that complement one of Marco Island's most exclusive communities." },
    ],
    demandDrivers: [
      "Ultra-luxury waterfront market with very high project values",
      "Aging waterfront homes needing modern updates",
      "Island-specific building considerations (salt air, moisture, permitting)",
      "Low SEO competition for Marco Island remodeling keywords",
    ],
    serviceIntros: {
      "kitchen-remodeling": "Marco Island kitchen remodeling demands materials and craftsmanship that stand up to the island's salt air and coastal environment while delivering the luxury finishes island homeowners expect. Custom cabinetry, premium stone, and complete kitchen transformations are our specialty.",
      "bathroom-remodeling": "From The Estates' master bathrooms to Hideaway Beach guest baths, our Marco Island bathroom remodeling delivers spa-quality results with marine-grade materials and island-appropriate design.",
      "home-renovation": "Many Marco Island homes are reaching 20–30 years old and need comprehensive updates. We handle full home renovations on the island, managing every detail from permitting to final walk-through.",
      "outdoor-living": "Marco Island's waterfront lifestyle makes outdoor living spaces essential. We build outdoor kitchens, lanai renovations, and pool deck upgrades designed for island entertaining.",
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
    metaTitle: "Lee County Remodeling Contractor | Stacked Construction",
    metaDescription: "Lee County's trusted remodeling contractor. Kitchen, bathroom, outdoor living, and full home renovations in Fort Myers, Cape Coral, Bonita Springs, Estero, and beyond. Free estimate.",
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
    metaTitle: "Collier County Remodeling Contractor | Naples & Marco Island | Stacked Construction",
    metaDescription: "Collier County's luxury remodeling contractor. Kitchen, bathroom, and full home renovations in Naples, Marco Island, and surrounding communities. Free consultation.",
    intro: "Collier County is Southwest Florida's luxury remodeling epicenter. Home to Naples, Marco Island, and some of the most prestigious residential communities in the state, Collier County homeowners invest in premium kitchen remodels, spa-inspired bathroom renovations, and comprehensive whole-home transformations. With a median home value of $486,800 and median household income of $86,173, Collier County represents the highest revenue-per-project opportunity in the tri-county area. Stacked Construction delivers the caliber of craftsmanship that Collier County's finest communities demand.",
    cities: ["naples", "marco-island"],
    demandPatterns: [
      "Luxury kitchen remodeling with custom cabinetry and imported materials ($60,000–$150,000+ projects)",
      "Spa-like master bathroom renovations ($40,000–$80,000+ range)",
      "Full home renovations in gated communities updating 1990s–2000s finishes to modern coastal aesthetics",
      "Condo remodeling in high-rises — Pelican Bay, Park Shore, The Moorings, Bay Colony",
      "Seasonal residents authorize remodeling during summer months while they're away",
    ],
    positioning: "Collier County is the luxury authority market — establish premium positioning through Naples and Marco Island projects with project values regularly exceeding $100,000.",
  },
  {
    slug: "charlotte-county",
    name: "Charlotte County",
    fullName: "Charlotte County, Florida",
    population: "~187,000",
    medianHomeValue: "$268,200",
    medianIncome: "$66,154",
    homeownershipRate: "83.2%",
    medianAge: "60.2 years",
    headline: "Charlotte County",
    headlineItalic: "Remodeling",
    metaTitle: "Charlotte County Remodeling | Punta Gorda & Port Charlotte | Stacked Construction",
    metaDescription: "Charlotte County remodeling contractor. Kitchen, bathroom, and home renovations in Punta Gorda, Port Charlotte, and surrounding communities. Licensed & insured. Free estimate.",
    intro: "Charlotte County is Southwest Florida's most underserved remodeling market — and that represents an incredible opportunity for homeowners. With the highest homeownership rate in the tri-county area at 83.2%, strong post-Hurricane Ian renovation demand, and a growing population, Charlotte County homeowners in Punta Gorda, Port Charlotte, and surrounding communities are investing in kitchen remodels, bathroom updates, aging-in-place modifications, and full home renovations. Stacked Construction brings the same quality craftsmanship we're known for in Lee and Collier counties to every Charlotte County project.",
    cities: ["punta-gorda"],
    demandPatterns: [
      "Post-Hurricane Ian recovery drives ongoing full home renovation demand",
      "Aging-in-place bathroom modifications — 40.4% of the population is 65+",
      "1970s–1990s homes with original kitchens needing full remodels",
      "Waterfront home renovations in Punta Gorda Isles and Burnt Store Isles",
      "Mid-market projects averaging $20,000–$60,000 — accessible and high-volume",
    ],
    positioning: "Charlotte County is the lowest-competition, highest-homeownership market — dedicated city pages for Punta Gorda and Port Charlotte can rank quickly and drive consistent leads.",
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

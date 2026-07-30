// Project portfolio data — powers /projects and /projects/[slug]
// Copy describes only what is verifiable in the project photography.
// Alt text carried over from the SEO image map produced with the photo set.

export interface ProjectImage {
  src: string;
  alt: string;
  /** Portrait/detail shots render in a narrower grid cell */
  portrait?: boolean;
}

export interface ProjectSection {
  heading: string;
  body: string;
  images: ProjectImage[];
}

export interface ProjectData {
  slug: string;
  name: string;
  /** Short label for cards and breadcrumbs */
  shortName: string;
  city: string;
  citySlug: string;
  county: string;
  service: string;
  serviceSlug: string;
  headline: string;
  headlineAccent: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary used on cards and in structured data */
  summary: string;
  intro: string;
  /** Verifiable finish/material specs pulled from the photos */
  specs: { label: string; value: string }[];
  /** What the work involved, described from visible evidence */
  scope: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  sections?: ProjectSection[];
  faqs: { question: string; answer: string }[];
}

export const projects: ProjectData[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "sage-green-kitchen-remodel-cape-coral",
    name: "Sage Green Shaker Kitchen Remodel",
    shortName: "Sage Green Kitchen",
    city: "Cape Coral",
    citySlug: "cape-coral",
    county: "Lee County",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    headline: "Sage Green Shaker",
    headlineAccent: "Kitchen",
    metaTitle: "Sage Green Kitchen Remodel | Cape Coral, FL Project",
    metaDescription:
      "See a completed sage green shaker kitchen remodel in Cape Coral, FL — quartz countertops, subway tile backsplash, farmhouse sink, and stainless appliances. Licensed SWFL contractor.",
    summary:
      "A dated Cape Coral kitchen reworked with sage green shaker cabinetry, white quartz countertops, and a bright subway tile backsplash.",
    intro:
      "This Cape Coral kitchen remodel trades a closed, dated layout for something calmer and far more usable. Sage green shaker cabinetry runs the full perimeter and wraps a quartz-topped peninsula that opens the kitchen to the living area — so whoever is cooking is still part of the room. White quartz countertops and a white subway tile backsplash keep everything light against the cabinet color, and a farmhouse apron-front sink sits under the window where the natural light lands. It's a practical, hard-wearing set of finishes chosen for a Florida home: quartz handles humidity and heat without sealing, and painted shaker doors are easy to wipe down and easy to touch up years from now.",
    specs: [
      { label: "Cabinetry", value: "Sage green shaker, satin nickel cup pulls" },
      { label: "Countertops", value: "White speckled quartz" },
      { label: "Backsplash", value: "White subway tile" },
      { label: "Sink", value: "White farmhouse apron-front" },
      { label: "Appliances", value: "Stainless range, over-range microwave, refrigerator, dishwasher" },
      { label: "Layout", value: "Perimeter run with open quartz-topped peninsula" },
    ],
    scope: [
      "Full cabinet replacement with sage green shaker doors and drawer fronts",
      "White quartz countertop fabrication and installation, including the peninsula",
      "Subway tile backsplash installation around the full perimeter",
      "Farmhouse apron-front sink installation with new faucet",
      "Stainless appliance integration — range, over-range microwave, refrigerator, dishwasher",
      "Peninsula built to open the kitchen to the adjoining living area",
    ],
    hero: {
      src: "/images/projects/sage-green-kitchen-remodel-cape-coral-01.webp",
      alt: "Remodeled Cape Coral kitchen featuring a quartz-topped peninsula and sage green cabinetry open to the living area",
    },
    gallery: [
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-02.webp",
        alt: "Sage green kitchen peninsula with white quartz counters in a Cape Coral home renovation by Stacked Construction",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-03.webp",
        alt: "Sage green shaker kitchen with white quartz countertops and stainless steel appliances in a Cape Coral, FL home remodel by Stacked Construction",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-04.webp",
        alt: "Sage green shaker cabinets, stainless refrigerator, and quartz counters in a Cape Coral kitchen remodel",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-05.webp",
        alt: "Wide view of a sage green kitchen with quartz peninsula in a Cape Coral, FL remodel by Stacked Construction",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-06.webp",
        alt: "White farmhouse apron-front sink beneath a window with subway tile backsplash in a Cape Coral kitchen remodel",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-07.webp",
        alt: "Stainless range and refrigerator with subway tile backsplash in a sage green Cape Coral kitchen",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-08.webp",
        alt: "Stainless electric range with subway tile backsplash in a remodeled sage green Cape Coral kitchen",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-09.webp",
        alt: "Sage green kitchen with stainless range, microwave, and refrigerator in Cape Coral, FL",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-10.webp",
        alt: "Glass cooktop detail with tea kettle and knife block in a Cape Coral kitchen remodel by Stacked Construction",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-11.webp",
        alt: "White quartz counters with stainless range in a sage green Cape Coral kitchen by Stacked Construction",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-12.webp",
        alt: "Full sage green kitchen with stainless appliances and quartz counters in a Cape Coral, FL remodel",
      },
      {
        src: "/images/projects/sage-green-kitchen-remodel-cape-coral-13.webp",
        alt: "Detail of sage green shaker cabinetry and cup-pull hardware in a Cape Coral kitchen remodel",
        portrait: true,
      },
    ],
    faqs: [
      {
        question: "How much does a kitchen remodel like this cost in Cape Coral?",
        answer:
          "A full cabinet-and-countertop kitchen remodel of this scope in Cape Coral typically lands in the mid range for Lee County — driven mostly by cabinet construction, countertop material, and whether plumbing or electrical has to move. We provide a detailed line-item estimate after seeing your space, so you know what drives every number.",
      },
      {
        question: "Are painted green cabinets a good choice for a Florida kitchen?",
        answer:
          "Yes. A quality painted finish holds up well indoors in Florida, and a muted sage reads as warm rather than trendy, so it dates more slowly than a bold color. Painted shaker doors also touch up easily years later, which matters more than most homeowners expect.",
      },
      {
        question: "Why quartz countertops instead of granite or marble?",
        answer:
          "Quartz is non-porous, so it never needs sealing and it shrugs off Florida humidity. It also resists staining better than marble, which is why it's the most common choice in the SWFL kitchens we build.",
      },
      {
        question: "Do you need a permit for a kitchen remodel in Cape Coral?",
        answer:
          "If the work touches electrical, plumbing, or structure, Lee County requires a permit. We pull and manage permits as part of our service, so inspections are scheduled and passed before we move to finishes.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "white-shaker-kitchen-remodel-cape-coral",
    name: "White Shaker Kitchen Remodel",
    shortName: "White Shaker Kitchen",
    city: "Cape Coral",
    citySlug: "cape-coral",
    county: "Lee County",
    service: "Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    headline: "White Shaker",
    headlineAccent: "Kitchen",
    metaTitle: "White Shaker Kitchen Remodel | Cape Coral, FL Project",
    metaDescription:
      "A completed white shaker kitchen remodel in Cape Coral, FL — quartz island, matte black hardware, pendant lighting, and stainless appliances. Licensed Lee County contractor.",
    summary:
      "An open white shaker kitchen in Cape Coral built around a large quartz island with matte black hardware and pendant lighting.",
    intro:
      "This Cape Coral kitchen is built around a single idea: keep it bright and keep it open. White shaker cabinetry runs floor to ceiling on the working wall, and a large speckled-quartz island anchors the middle of the room with seating on the open side. Matte black hardware, a black gooseneck faucet, and slim black pendants give the white cabinetry enough contrast that the room reads crisp instead of washed out. The island houses the sink and dishwasher, which keeps the perimeter run clear for cooking and prep, and the whole kitchen opens directly onto the great room and the sliders beyond it — the layout most Cape Coral homeowners are after when they call us.",
    specs: [
      { label: "Cabinetry", value: "White shaker, matte black bar pulls" },
      { label: "Countertops", value: "Speckled white quartz" },
      { label: "Island", value: "Large quartz island with sink and dishwasher" },
      { label: "Fixtures", value: "Matte black gooseneck faucet, black pendant lighting" },
      { label: "Appliances", value: "Stainless range, over-range microwave, refrigerator, dishwasher" },
      { label: "Layout", value: "Open-concept perimeter run plus center island" },
    ],
    scope: [
      "Full white shaker cabinet installation across the perimeter and island",
      "Speckled quartz countertop fabrication for perimeter and island",
      "Island built to carry the sink and dishwasher with open-side seating",
      "Matte black hardware, faucet, and pendant lighting package",
      "Stainless appliance integration — range, over-range microwave, refrigerator, dishwasher",
      "Open-concept layout connecting the kitchen to the great room",
    ],
    hero: {
      src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-01.webp",
      alt: "Bright white shaker kitchen with quartz peninsula, pendant lights, and stainless appliances in Cape Coral, FL",
    },
    gallery: [
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-02.webp",
        alt: "White shaker kitchen with speckled quartz peninsula and stainless appliances in a Cape Coral, FL remodel by Stacked Construction",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-03.webp",
        alt: "White shaker cabinets and quartz peninsula with black hardware in a Cape Coral kitchen remodel",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-04.webp",
        alt: "White shaker kitchen with stainless range and quartz counters in a Cape Coral, FL remodel by Stacked Construction",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-05.webp",
        alt: "White shaker kitchen with quartz island, black faucet, and stainless dishwasher in Cape Coral, FL",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-06.webp",
        alt: "White shaker kitchen with stainless range and speckled quartz counters in Cape Coral, FL",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-07.webp",
        alt: "White shaker kitchen with quartz peninsula and stainless appliances in a Cape Coral remodel by Stacked Construction",
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-08.webp",
        alt: "White shaker cabinets and drawers with black hardware and tile flooring in a Cape Coral kitchen",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-09.webp",
        alt: "White shaker kitchen corner with stainless range and quartz counters in Cape Coral, FL",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-10.webp",
        alt: "Open white shaker kitchen with quartz island and stainless appliances in a Cape Coral remodel by Stacked Construction",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-11.webp",
        alt: "White shaker kitchen with black faucet, quartz island, and stainless refrigerator in Cape Coral, FL",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-12.webp",
        alt: "Speckled quartz island with a black gooseneck faucet in a white shaker Cape Coral kitchen remodel",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-13.webp",
        alt: "Speckled white quartz island with black faucet and stainless refrigerator in a Cape Coral kitchen",
        portrait: true,
      },
      {
        src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-14.webp",
        alt: "White shaker kitchen with stainless range and refrigerator in a Cape Coral, FL home remodel by Stacked Construction",
        portrait: true,
      },
    ],
    faqs: [
      {
        question: "Is a kitchen island worth it in a Cape Coral home?",
        answer:
          "In most Cape Coral floor plans, yes — an island adds prep surface and seating without closing the kitchen off from the great room, which is usually the whole point of the remodel. The deciding factor is clearance: you want roughly 42 inches of walkway around it, and we check that against your actual room before designing one in.",
      },
      {
        question: "Does putting the sink in the island complicate the job?",
        answer:
          "It means running plumbing and electrical through the floor to the island location, which adds cost and requires a permit. It's very common and completely routine — but it's the kind of decision worth making early, because it affects both the estimate and the schedule.",
      },
      {
        question: "Will matte black hardware date quickly?",
        answer:
          "Black hardware has been a stable choice for years now and reads as a neutral against white cabinetry rather than a trend color. It's also the least expensive element in the kitchen to swap later if you ever want a different look.",
      },
      {
        question: "How long does a kitchen remodel take?",
        answer:
          "Most kitchen remodels run 6–10 weeks depending on scope, cabinet and countertop lead times, and permit timing. We give you a realistic schedule in the proposal and keep you updated as it moves.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "modern-walnut-kitchen-remodel-naples",
    name: "Modern Walnut Kitchen & Great Room Remodel",
    shortName: "Modern Walnut Kitchen",
    city: "Naples",
    citySlug: "naples",
    county: "Collier County",
    service: "Luxury Kitchen Remodeling",
    serviceSlug: "kitchen-remodeling",
    headline: "Modern Walnut",
    headlineAccent: "Kitchen",
    metaTitle: "Modern Walnut Kitchen Remodel | Naples, FL Project",
    metaDescription:
      "A luxury Naples kitchen remodel with handleless walnut cabinetry, a waterfall marble-look quartz island, integrated appliances, and a tiled fireplace feature wall.",
    summary:
      "A luxury Naples remodel pairing handleless walnut cabinetry and a waterfall quartz island with a tiled fireplace feature wall in the adjoining great room.",
    intro:
      "This Naples remodel is the most contemporary work in our portfolio, and the details are where it earns that. The cabinetry is handleless — walnut on the lower run and tall pantry wall, cream above — so nothing interrupts the horizontal lines of the room. A long waterfall island in marble-look quartz runs down the center with the stone carried over both ends, and the same slab pattern continues up the wall as a full-height backsplash behind the cooking surface. Appliances are integrated rather than displayed: double wall ovens sit flush in the walnut, and the refrigeration and wine storage disappear into the cabinet runs. The kitchen opens straight onto a great room with floor-to-ceiling pool-view glass, and the fireplace feature wall on the far side of that room was part of the same job — dark porcelain tile floor to ceiling with a floating wood mantel and a linear fireplace.",
    specs: [
      { label: "Cabinetry", value: "Handleless walnut and cream, full-height pantry wall" },
      { label: "Countertops", value: "Marble-look quartz with waterfall edges" },
      { label: "Island", value: "Extended waterfall island with integrated wine storage" },
      { label: "Backsplash", value: "Full-height marble-look slab" },
      { label: "Appliances", value: "Integrated double wall ovens, cooktop, panel-ready refrigeration" },
      { label: "Great room", value: "Dark porcelain tile fireplace wall with floating wood mantel" },
    ],
    scope: [
      "Handleless walnut and cream cabinetry throughout, including a full-height pantry wall",
      "Waterfall-edge marble-look quartz island fabricated with matching full-height backsplash",
      "Integrated appliance installation — double wall ovens, cooktop, panel-ready refrigeration",
      "Built-in wine storage within the island run",
      "Pendant and linear lighting coordinated to the island and ceiling detail",
      "Great room fireplace feature wall in dark porcelain tile with floating wood mantel and linear fireplace",
    ],
    hero: {
      src: "/images/projects/modern-wood-kitchen-remodel-naples-01.webp",
      alt: "Handleless walnut cabinets, marble-look backsplash, and double wall ovens in a modern Naples kitchen",
    },
    gallery: [
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-02.webp",
        alt: "Modern Naples kitchen with a waterfall marble-look quartz island, walnut cabinetry, and pendant lighting by Stacked Construction",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-03.webp",
        alt: "Contemporary walnut and white kitchen with waterfall quartz island in a Naples, FL luxury remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-04.webp",
        alt: "Double stainless wall ovens set in handleless walnut cabinetry in a modern Naples kitchen remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-05.webp",
        alt: "Contemporary Naples kitchen with cream and walnut cabinets and integrated appliances by Stacked Construction",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-06.webp",
        alt: "Handleless walnut kitchen with waterfall quartz island and stainless refrigerator in Naples, FL",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-07.webp",
        alt: "Luxury Naples kitchen with long waterfall quartz island and walnut cabinetry by Stacked Construction",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-08.webp",
        alt: "Modern walnut kitchen open to a bright great room in a Naples, FL luxury remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-09.webp",
        alt: "Marble-look quartz counters, walnut cabinets, and stainless refrigerator in a Naples kitchen remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-10.webp",
        alt: "Contemporary walnut kitchen island with wine storage in a Naples, FL luxury home remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-11.webp",
        alt: "Marble-look waterfall island opening to a pool-view great room in a Naples luxury kitchen",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-12.webp",
        alt: "Modern Naples kitchen island with walnut base and marble-look quartz by Stacked Construction",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-13.webp",
        alt: "Marble-look quartz island and mirrored backsplash detail in a modern Naples kitchen remodel",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-14.webp",
        alt: "Handleless walnut and cream kitchen with quartz island in a Naples luxury remodel by Stacked Construction",
      },
      {
        src: "/images/projects/modern-wood-kitchen-remodel-naples-15.webp",
        alt: "Stainless double wall ovens and walnut cabinetry in a modern Naples, FL kitchen",
      },
    ],
    sections: [
      {
        heading: "Great Room Fireplace Feature Wall",
        body:
          "The same job included the feature wall in the adjoining great room. Dark porcelain tile runs floor to ceiling, broken only by a floating wood mantel that picks up the walnut tone from the kitchen, with a linear electric fireplace set below it. Set against the white walls and the pool-view glass on the opposite side of the room, it gives the open plan a clear focal point without adding another piece of furniture.",
        images: [
          {
            src: "/images/projects/fireplace-feature-wall-naples-01.webp",
            alt: "Modern fireplace feature wall in dark tile with wood mantel beside pool-view windows in a Naples remodel",
          },
          {
            src: "/images/projects/fireplace-feature-wall-naples-02.webp",
            alt: "Floor-to-ceiling tiled fireplace feature wall with a linear electric fireplace in a Naples, FL living room",
          },
          {
            src: "/images/projects/fireplace-feature-wall-naples-03.webp",
            alt: "Great room feature wall with dark porcelain tile, floating wood shelf, and linear fireplace in a Naples home",
            portrait: true,
          },
        ],
      },
      {
        heading: "Kitchen and Great Room as One Space",
        body:
          "Because the kitchen and great room read as a single room here, the finishes had to agree across both. The walnut in the cabinetry, the wood mantel on the fireplace wall, and the pale wide-plank flooring are the three elements holding it together — which is why the fireplace wall was designed alongside the kitchen rather than after it.",
        images: [
          {
            src: "/images/projects/modern-wood-kitchen-remodel-naples-16.webp",
            alt: "Luxury Naples kitchen with pendant lighting, walnut cabinets, and a marble-look quartz island",
          },
          {
            src: "/images/projects/modern-wood-kitchen-remodel-naples-17.webp",
            alt: "Open great room and modern walnut kitchen with quartz waterfall island in Naples, FL",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What does a luxury kitchen remodel cost in Naples?",
        answer:
          "Naples kitchens at this level — custom handleless cabinetry, waterfall stone, integrated appliances — regularly run six figures, with cabinetry and stone driving most of the number. The honest answer is that the material and appliance selections set the budget more than the square footage does, and we walk through those trade-offs before quoting.",
      },
      {
        question: "What is handleless cabinetry, and is it practical?",
        answer:
          "Handleless doors open via a routed finger pull or a recessed channel instead of visible hardware, which is what keeps the lines of a modern kitchen unbroken. They're practical day to day, though they do require precise installation — gaps and alignment are visible in a way they aren't on a shaker door with a pull over the seam.",
      },
      {
        question: "What is a waterfall island edge?",
        answer:
          "The countertop stone turns 90 degrees and continues down the side of the island to the floor, so the veining appears to pour over the edge. It uses more material and demands careful slab matching at the seam, which is why it costs more than a standard edge — but it's the detail that makes an island read as a furniture piece.",
      },
      {
        question: "Can you match a fireplace or feature wall to a new kitchen?",
        answer:
          "Yes, and in an open floor plan it's worth doing at the same time. Designing the two together lets us carry the wood tone and stone choices across both, which is much harder to pull off if the second space is done a year later from a different set of samples.",
      },
    ],
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCity(citySlug: string): ProjectData[] {
  return projects.filter((p) => p.citySlug === citySlug);
}

export function getProjectsByService(serviceSlug: string): ProjectData[] {
  return projects.filter((p) => p.serviceSlug === serviceSlug);
}

/** Total photo count for a project, including any extra sections */
export function getProjectPhotoCount(project: ProjectData): number {
  const sectionImages =
    project.sections?.reduce((sum, s) => sum + s.images.length, 0) ?? 0;
  return 1 + project.gallery.length + sectionImages;
}

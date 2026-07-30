export interface AuthorData {
  name: string;
  slug: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  credentials: { label: string; value: string; verifyUrl?: string }[];
  specialties: string[];
  linkedin?: string;
  instagram?: string;
  schemaUrl: string;
  yearsExperience: string;
  projectCount?: string;
}

export const authors: AuthorData[] = [
  {
    name: "Junior Da Silva",
    slug: "junior-da-silva",
    title: "Founder & Licensed Building Contractor",
    shortBio:
      "Founder of Stacked Construction and Florida-licensed building contractor (CBC1269972) with nearly a decade of hands-on remodeling experience across Southwest Florida.",
    fullBio: [
      "Junior Da Silva is the founder and lead contractor of Stacked Construction, a licensed and insured home remodeling company serving Southwest Florida. With nearly a decade of hands-on experience in kitchen remodeling, bathroom renovation, hardscaping, cabinetry, and full-home transformations, Junior built Stacked Construction on a foundation of transparency, accountability, and craftsmanship.",
      "Before founding Stacked Construction, Junior spent years working directly in the trades — learning every stage of a remodel from the ground up across Lee, Collier, and Charlotte counties. That ground-level experience gave him a clear view of where the industry fails homeowners: missed communication, lack of accountability, and inconsistent execution. Building this company was his answer to that.",
      "Today, Junior leads every project with a structured process designed to protect the client, control quality, and deliver a finished space that reflects their vision — on budget, on time, and with no surprises.",
    ],
    credentials: [
      {
        label: "Florida Certified Building Contractor",
        value: "License #CBC1269972",
        verifyUrl:
          "https://www.myfloridalicense.com/LicenseDetail.asp?SID=&id=CBC1269972",
      },
      {
        label: "Licensed & Insured in Florida",
        value: "General Liability & Workers Compensation",
      },
      {
        label: "Lee County Permit Authority",
        value: "Authorized permit holder, Lee County FL",
      },
    ],
    specialties: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Full Home Renovation",
      "Outdoor Living & Kitchens",
      "Flooring & Tile",
      "Florida Building Codes",
      "Lee & Collier County Permitting",
    ],
    instagram: "https://www.instagram.com/stackedconstruction/",
    schemaUrl: "https://stackedconstruction.co/about/junior-da-silva",
    yearsExperience: "10",
    projectCount: "40+",
  },
  {
    name: "Camila Lage",
    slug: "camila-lage",
    title: "Interior Design Consultant",
    shortBio:
      "Interior design consultant at Stacked Construction specializing in kitchen and bathroom design, material selection, and finish coordination for Southwest Florida homes.",
    fullBio: [
      "Camila Lage is the interior design consultant at Stacked Construction, bringing a trained design eye to every kitchen, bathroom, and full-home remodeling project across Southwest Florida. She helps homeowners move confidently from concept to final finish selection — bridging the gap between what they envision and what is structurally and aesthetically achievable within their budget.",
      "Camila specializes in space planning, material selection, and the functional details that separate a beautiful kitchen from one that is also practical. Her deep understanding of SWFL's climate — the humidity, the salt air near the coast, the sun-drenched outdoor living demands — informs every material recommendation she makes.",
    ],
    credentials: [
      {
        label: "Interior Design Consultant",
        value: "Stacked Construction, SWFL",
      },
      {
        label: "Specialization",
        value: "Kitchen & Bathroom Design, Material Selection",
      },
    ],
    specialties: [
      "Kitchen Layout & Design",
      "Bathroom Design",
      "Material Selection",
      "Countertop & Cabinet Coordination",
      "Color Palettes & Finish Coordination",
      "Outdoor Living Design",
      "Florida Climate-Appropriate Materials",
    ],
    schemaUrl: "https://stackedconstruction.co/about/camila-lage",
    yearsExperience: "5+",
  },
  {
    name: "Caio Alves",
    slug: "caio-alves",
    title: "Project Manager & Remodeling Specialist",
    shortBio:
      "Project manager at Stacked Construction overseeing kitchen, bathroom, and full-home renovation projects across Southwest Florida — focused on timelines, quality control, and permitting.",
    fullBio: [
      "Caio Alves is the project manager and remodeling specialist at Stacked Construction, responsible for overseeing the day-to-day execution of kitchen, bathroom, and full-home renovation projects across Southwest Florida. His role spans client communication, subcontractor coordination, permit management, and on-site quality control.",
      "Caio manages the scheduling of subcontractors, tracks progress against project milestones, and ensures that every job site meets Stacked Construction's standards for cleanliness, organization, and workmanship. When issues arise — and in remodeling, they always do — Caio surfaces them early and resolves them before they affect the homeowner's timeline or budget.",
    ],
    credentials: [
      {
        label: "Project Manager",
        value: "Stacked Construction, SWFL",
      },
      {
        label: "Specialization",
        value: "Construction Scheduling, Florida Permitting, QC",
      },
    ],
    specialties: [
      "Project Scheduling & Management",
      "Florida Permitting (Lee, Collier, Charlotte)",
      "Subcontractor Coordination",
      "Quality Control",
      "Client Communication",
      "Construction Budgeting",
      "Hurricane Season Planning",
    ],
    schemaUrl: "https://stackedconstruction.co/about/caio-alves",
    yearsExperience: "5+",
  },
];

export function getAuthorByName(name: string): AuthorData | undefined {
  return authors.find((a) => a.name === name);
}

export function getAuthorBySlug(slug: string): AuthorData | undefined {
  return authors.find((a) => a.slug === slug);
}

// Hero photos per page type, so pages don't all open on the same picture.
// Alt text describes what is in the photo, not the page it sits on.

export interface HeroPhoto {
  src: string;
  alt: string;
}

export const serviceHeroes: Record<string, HeroPhoto> = {
  "kitchen-remodeling": {
    src: "/images/kitchen-luxury-white.webp",
    alt: "White kitchen remodel with pendant lights and stone countertops",
  },
  "bathroom-remodeling": {
    src: "/images/service-bathroom.webp",
    alt: "Renovated bathroom with a walk-in glass shower and round mirror",
  },
  "home-renovation": {
    src: "/images/service-fullhome.webp",
    alt: "Open-plan living space after a whole-home renovation",
  },
  "outdoor-living": {
    src: "/images/service-outdoor.webp",
    alt: "Outdoor living area with a pergola, string lights, and fire pit",
  },
  "flooring-tile": {
    src: "/images/service-flooring.webp",
    alt: "Large-format porcelain tile flooring in a modern room",
  },
};

export const cityHeroes: Record<string, HeroPhoto> = {
  "cape-coral": {
    src: "/images/projects/sage-green-kitchen-remodel-cape-coral-01.webp",
    alt: "Sage green shaker kitchen remodel in Cape Coral, Florida",
  },
  naples: {
    src: "/images/projects/modern-wood-kitchen-remodel-naples-01.webp",
    alt: "Modern walnut kitchen remodel in Naples, Florida",
  },
  "fort-myers": {
    src: "/images/kitchen-coastal-reeded.webp",
    alt: "Coastal kitchen with a reeded island in a Southwest Florida home",
  },
  "bonita-springs": {
    src: "/images/kitchen-poolside-oak.webp",
    alt: "Oak kitchen opening onto the pool in a Southwest Florida home",
  },
};

export const pageHeroes = {
  default: {
    src: "/images/hero-bg.webp",
    alt: "Modern kitchen with open shelving and slatted wall panels",
  },
  about: {
    src: "/images/projects/modern-wood-kitchen-remodel-naples-01.webp",
    alt: "Modern walnut kitchen remodel in Naples, Florida by Stacked Construction",
  },
  credentials: {
    src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-01.webp",
    alt: "White shaker kitchen remodel in Cape Coral, Florida by Stacked Construction",
  },
  junior: {
    src: "/images/projects/modern-wood-kitchen-remodel-naples-01.webp",
    alt: "Modern walnut kitchen remodel in Naples, Florida by Stacked Construction",
  },
  caio: {
    src: "/images/projects/white-shaker-kitchen-remodel-cape-coral-01.webp",
    alt: "White shaker kitchen remodel in Cape Coral, Florida by Stacked Construction",
  },
  camila: {
    src: "/images/projects/fireplace-feature-wall-naples-01.webp",
    alt: "Dark tile fireplace feature wall with wood mantel in a Naples remodel",
  },
  contact: {
    src: "/images/kitchen-coastal-white-beams.webp",
    alt: "Coastal white kitchen with exposed ceiling beams",
  },
  reviews: {
    src: "/images/projects/sage-green-kitchen-remodel-cape-coral-01.webp",
    alt: "Sage green shaker kitchen remodel in Cape Coral, Florida",
  },
  blog: {
    src: "/images/kitchen-coastal-reeded.webp",
    alt: "Coastal kitchen with a reeded island in a Southwest Florida home",
  },
  services: {
    src: "/images/service-luxury.webp",
    alt: "Luxury living space with a slatted wood ceiling and black-framed windows",
  },
  calculator: {
    src: "/images/kitchen-marble-waterfall.webp",
    alt: "Kitchen with a marble waterfall island",
  },
  county: {
    src: "/images/kitchen-beachfront-luxury.webp",
    alt: "Luxury kitchen in a Southwest Florida beachfront home",
  },
} satisfies Record<string, HeroPhoto>;

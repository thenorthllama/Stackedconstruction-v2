export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://stackedconstruction.co/#business",
    name: "Stacked Construction",
    description:
      "Premium home remodeling contractor serving Southwest Florida. Expert kitchen remodeling, bathroom renovation, outdoor living, and full home renovations across Fort Myers, Naples, Cape Coral, Bonita Springs, Punta Gorda, and Marco Island.",
    url: "https://stackedconstruction.co",
    telephone: "+12397850166",
    email: "info@stackedconstruction.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Fort Myers",
      addressRegion: "FL",
      postalCode: "33901",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.6406,
      longitude: -81.8723,
    },
    areaServed: [
      { "@type": "City", name: "Fort Myers", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Cape Coral", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Naples", containedInPlace: { "@type": "AdministrativeArea", name: "Collier County, FL" } },
      { "@type": "City", name: "Bonita Springs", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Punta Gorda", containedInPlace: { "@type": "AdministrativeArea", name: "Charlotte County, FL" } },
      { "@type": "City", name: "Marco Island", containedInPlace: { "@type": "AdministrativeArea", name: "Collier County, FL" } },
      { "@type": "City", name: "Estero" },
      { "@type": "City", name: "Lehigh Acres" },
      { "@type": "City", name: "Port Charlotte" },
      { "@type": "City", name: "North Fort Myers" },
      { "@type": "City", name: "Fort Myers Beach" },
      { "@type": "City", name: "Sanibel" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling", url: "https://stackedconstruction.co/services/kitchen-remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling", url: "https://stackedconstruction.co/services/bathroom-remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Renovation", url: "https://stackedconstruction.co/services/home-renovation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor Living & Kitchens", url: "https://stackedconstruction.co/services/outdoor-living" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring & Tile", url: "https://stackedconstruction.co/services/flooring-tile" } },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
      bestRating: "5",
    },
    sameAs: [
      "https://facebook.com/profile.php?id=61586672805182",
      "https://instagram.com/stackedconstruction/",
    ],
    priceRange: "$$-$$$$",
    paymentAccepted: "Cash, Credit Card, Check, Financing",
    currenciesAccepted: "USD",
    knowsAbout: [
      "Kitchen Remodeling",
      "Bathroom Renovation",
      "Home Renovation",
      "Outdoor Kitchens",
      "Lanai Remodeling",
      "Flooring Installation",
      "Luxury Home Remodeling",
      "Aging in Place Modifications",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

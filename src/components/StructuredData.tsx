export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Stacked Construction",
    description:
      "Premium home remodeling services in Southwest Florida. Kitchen, bathroom, outdoor living, and full home renovations.",
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
      "Fort Myers",
      "Cape Coral",
      "Naples",
      "Bonita Springs",
      "Estero",
      "Lehigh Acres",
      "Marco Island",
      "Punta Gorda",
      "Port Charlotte",
    ],
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
    },
    sameAs: [
      "https://facebook.com/profile.php?id=61586672805182",
      "https://instagram.com/stackedconstruction/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

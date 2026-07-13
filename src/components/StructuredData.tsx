export default function StructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical kitchen remodel take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most kitchen remodels take 6–10 weeks depending on the scope. During your free consultation, we'll provide a realistic timeline based on your specific project and material selections.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide free estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer free, no-obligation in-home consultations where we assess your space, discuss your goals, and provide a detailed, line-item estimate — no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve Naples, Bonita Springs, Fort Myers, and Cape Coral, plus surrounding communities across Lee and Collier counties.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Stacked Construction is fully licensed and insured in the state of Florida. License #CBC1269972. We're happy to provide documentation upon request.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stay in my home during the renovation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. We work cleanly and efficiently to minimize disruption. For larger whole-home renovations, we'll discuss logistics during the planning phase to find the best arrangement.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply click 'Get Free Estimate' or call us at (239) 785-0166. We'll schedule a convenient time to visit your home, listen to your vision, and put together a plan that fits your goals and budget.",
        },
      },
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://stackedconstruction.co/#website",
    name: "Stacked Construction",
    url: "https://stackedconstruction.co",
    publisher: { "@id": "https://stackedconstruction.co/#business" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://stackedconstruction.co/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://stackedconstruction.co/#business",
    name: "Stacked Construction",
    description:
      "Premium home remodeling contractor serving Southwest Florida. Expert kitchen remodeling, bathroom renovation, outdoor living, and full home renovations across Naples, Bonita Springs, Fort Myers, and Cape Coral.",
    url: "https://stackedconstruction.co",
    telephone: "+12397850166",
    email: "info@stackedconstruction.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
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
      { "@type": "City", name: "Naples", containedInPlace: { "@type": "AdministrativeArea", name: "Collier County, FL" } },
      { "@type": "City", name: "Bonita Springs", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Fort Myers", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Cape Coral", containedInPlace: { "@type": "AdministrativeArea", name: "Lee County, FL" } },
      { "@type": "City", name: "Estero" },
      { "@type": "City", name: "North Fort Myers" },
      { "@type": "City", name: "Fort Myers Beach" },
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
      reviewCount: "9",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Yasmin Frota" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Awesome professional! If you are looking for someone to remodel your house, do yourself a favor and hire Junior and his team! You will not be disappointed!",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Leonardo Mendes" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Manuel is a true professional and someone you can trust with your project. He is reliable, communicates clearly, and takes real pride in the quality of his work. His attention to detail stands out — he does not rush the process or cut corners.",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Adriano Carvalho" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Highly recommend.",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Eliabe Damas" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Great work, really enjoyed working with Junior, very communicative.",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos Pereira" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Excellent professional! Works very well and is highly responsible. Great communicator, understood exactly what I needed and delivered the job perfectly.",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Osvaldo Neto Cancian" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "I really enjoyed working with Junior on redoing my bathroom. From the beginning, communication was clear and consistent, and he was always easy to reach when I had questions. He paid close attention to the details and made sure everything was done right.",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Luiz Carlos Amt" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Wonderful! I was very happy with the result of the work, it exceeded my expectations. I highly recommend it!",
        publisher: { "@type": "Organization", name: "Google" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah M." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Stacked Construction completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the final result exceeded every expectation.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Michael T." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Our outdoor kitchen and pool deck renovation was flawless. They understood the SWFL lifestyle and built something our whole family enjoys every single day.",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61586672805182",
      "https://www.instagram.com/stackedconstruction/",
      "https://www.linkedin.com/company/111945969/",
      "https://share.google/CiOmnBxQhr2fIJXjj",
    ],
    hasMap: "https://share.google/CiOmnBxQhr2fIJXjj",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Florida Certified Building Contractor",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business and Professional Regulation",
      },
      identifier: "CBC1269972",
    },
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function StructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know you'll actually finish?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's the right question to ask, and the honest answer is that you check. Verify our license (CBC1269972) with the Florida DBPR, ask for our insurance certificate, and ask to see a project we finished more than two years ago. We'll also give you a written schedule and a single point of contact — so if we ever slip, you'll know before you have to ask.",
        },
      },
      {
        "@type": "Question",
        name: "What happens at the first consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We come to you. We walk the space, ask how you actually use it, and talk honestly about scope and budget — including whether what you want is realistic at the number you have in mind. No charge, no obligation, and no pressure to decide anything that day.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design, or do I need my own designer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We do both. Design and construction sit under one roof, so the people drawing your space know what it costs to build it — which means budget problems surface during design instead of after. If you already have an architect or designer you like, we're glad to build from their drawings.",
        },
      },
      {
        "@type": "Question",
        name: "How do you price a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Line by line, not as a lump sum. You'll see what the cabinetry costs, what the stone costs, what the labor costs. It takes us longer to prepare, but it's the only way you can compare bids honestly or decide where to spend and where to pull back.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if something changes mid-project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scope changes on almost every job. When it happens, we price the change and get your written approval before the work continues. Nothing appears on your final invoice that you haven't already seen and agreed to.",
        },
      },
      {
        "@type": "Question",
        name: "How long will it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most kitchens run 6–10 weeks; bathrooms are usually shorter and whole-home projects longer. Material lead times and county permit review drive most of the variation, and we build both into the schedule you get with your proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Can I live in my home during the work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually yes for a kitchen or bathroom. We isolate the work area, protect floors and finishes, and clean the site down each day. Whole-home renovations are harder to live through, and we'll tell you straight if we think you should plan to be out.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naples, Bonita Springs, Fort Myers, and Cape Coral, plus surrounding communities across Lee and Collier counties.",
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

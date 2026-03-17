import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate | Stacked Construction – Fort Myers, Naples, Cape Coral",
  description:
    "Request a free remodeling estimate from Stacked Construction. Kitchen, bathroom, outdoor living, and full home renovation across Fort Myers, Naples, Cape Coral, and all of Southwest Florida. Call (239) 785-0166.",
  openGraph: {
    title: "Contact Stacked Construction | Free Estimate",
    description:
      "Schedule your free in-home consultation. Premium remodeling across Southwest Florida.",
  },
  alternates: {
    canonical: "https://stackedconstruction.co/contact",
  },
};

export default function ContactPage() {
  // LocalBusiness + ContactPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Stacked Construction",
    description:
      "Request a free remodeling estimate. Kitchen, bathroom, outdoor living, and full home renovation across Southwest Florida.",
    url: "https://stackedconstruction.co/contact",
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://stackedconstruction.co/#business",
      name: "Stacked Construction",
      telephone: "+12397850166",
      email: "info@stackedconstruction.co",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fort Myers",
        addressRegion: "FL",
        postalCode: "33901",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
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
    },
  };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[50vh] bg-warm-900 lg:min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            role="img"
            aria-label="Stacked Construction remodeling project"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/60 to-warm-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/20 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-end px-6 pb-16 pt-32 lg:min-h-[60vh] lg:px-10 lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-400">
                Contact Us
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
                Let&apos;s Build Something{" "}
                <em className="font-light italic text-warm-300">Beautiful</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-400">
                Schedule your free in-home consultation. No pressure, no
                obligation — just an honest conversation about your vision.
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact section — form + info ─────────────────────────── */}
        <section className="bg-warm-50 py-24 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              {/* Left — contact info */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
                  Get in Touch
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] text-warm-900 sm:text-5xl">
                  Reach{" "}
                  <em className="font-light italic text-warm-600">Out</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-warm-600">
                  Whether you&apos;re ready to start or just exploring options,
                  we&apos;d love to hear about your project. Reach out by phone,
                  email, or fill out the form.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href="tel:+12397850166"
                    className="flex items-center gap-3 text-base font-medium text-warm-900 transition-colors hover:text-accent"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-warm-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    (239) 785-0166
                  </a>
                  <a
                    href="mailto:info@stackedconstruction.co"
                    className="flex items-center gap-3 text-base font-medium text-warm-900 transition-colors hover:text-accent"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-warm-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    info@stackedconstruction.co
                  </a>
                  <div className="flex items-start gap-3 text-base text-warm-600">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-warm-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    Fort Myers, FL 33901
                  </div>
                </div>

                <div className="mt-10 border-t border-warm-200 pt-8">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                    Hours
                  </p>
                  <div className="space-y-1 text-sm text-warm-600">
                    <p>Monday – Friday: 7am – 6pm</p>
                    <p>Saturday: 8am – 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-warm-200 pt-8">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-500">
                    Service Areas
                  </p>
                  <p className="text-sm leading-relaxed text-warm-600">
                    Fort Myers, Cape Coral, Naples, Bonita Springs, Marco
                    Island, Punta Gorda, and all of Lee, Collier &amp; Charlotte
                    Counties.
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-7 lg:col-start-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

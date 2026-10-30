import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { CookieConsent } from "@/components/CookieConsent";
import { CONSENT_KEY } from "@/lib/consent";
import "./globals.css";

// Self-hosted variable fonts — zero external requests, no layout shift
const dmSans = localFont({
  src: "../fonts/dm-sans-latin-wght-normal.woff2",
  variable: "--font-dm-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://stackedconstruction.co"),
  title: {
    default: "Design-Build Contractor in Southwest Florida | Stacked",
    template: "%s | Stacked Construction",
  },
  description:
    "Licensed design-build contractor guiding Southwest Florida homeowners from first idea to final walk-through. Kitchens, baths & whole-home renovations. FL #CBC1269972.",
  openGraph: {
    title: "Stacked Construction | Design-Build in Southwest Florida",
    description:
      "One team designs and builds your project, from first idea to final walk-through. Naples, Bonita Springs, Fort Myers, and Cape Coral. Licensed & insured.",
    type: "website",
    locale: "en_US",
    siteName: "Stacked Construction",
    url: "https://stackedconstruction.co",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Stacked Construction – Premium Home Remodeling in Southwest Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacked Construction | Design-Build in SWFL",
    description:
      "Design-build renovations across Naples, Bonita Springs, Fort Myers, and Cape Coral — guided from first idea to final walk-through.",
    images: ["/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://stackedconstruction.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-bg.webp" fetchPriority="high" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://www.googleadservices.com" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            // Consent Mode v2: non-essential storage stays denied until the visitor
            // opts in via <CookieConsent />; a stored choice is re-applied before GTM loads.
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{var c=JSON.parse(localStorage.getItem('${CONSENT_KEY}'));if(c){var a=c.advertising?'granted':'denied';gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:a,ad_user_data:a,ad_personalization:a});}}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5ZBGB7P');`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        {/* No GTM <noscript> iframe — it can't read consent, so it would track
            visitors who never had the chance to opt in. */}
        {/* First stop in the tab order — lets keyboard users bypass the nav */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

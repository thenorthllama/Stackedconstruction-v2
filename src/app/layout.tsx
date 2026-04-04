import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackedconstruction.co"),
  title: {
    default: "Stacked Construction | Kitchen & Bathroom Remodeling Fort Myers, Naples, Cape Coral",
    template: "%s | Stacked Construction",
  },
  description:
    "Southwest Florida's trusted remodeling contractor. Expert kitchen remodeling, bathroom renovation, outdoor living, and full home renovations across Fort Myers, Naples, Cape Coral, and all of SWFL. 150+ projects completed. Licensed & insured. Free estimate.",
  openGraph: {
    title: "Stacked Construction | Premium Home Remodeling in Southwest Florida",
    description:
      "Expert kitchen, bathroom, outdoor living, and full home renovations across Fort Myers, Naples, Cape Coral, Bonita Springs, and all of SWFL. 150+ projects. Licensed & insured.",
    type: "website",
    locale: "en_US",
    siteName: "Stacked Construction",
    url: "https://stackedconstruction.co",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stacked Construction – Premium Home Remodeling in Southwest Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacked Construction | Premium Home Remodeling in SWFL",
    description:
      "Expert kitchen, bathroom, outdoor living, and full home renovations across Fort Myers, Naples, Cape Coral, and all of SWFL.",
    images: ["/images/og-image.jpg"],
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5ZBGB7P');`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5ZBGB7P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

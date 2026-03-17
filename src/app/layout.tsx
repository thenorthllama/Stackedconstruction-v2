import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
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
  keywords: [
    "kitchen remodeling Fort Myers",
    "bathroom remodeling Naples",
    "home renovation Cape Coral",
    "remodeling contractor SWFL",
    "outdoor kitchen Fort Myers",
    "kitchen remodel Naples FL",
    "bathroom remodel Cape Coral",
    "home remodeling Southwest Florida",
    "luxury remodeling Naples",
    "remodeling contractor Lee County",
  ],
  openGraph: {
    title: "Stacked Construction | Premium Home Remodeling in Southwest Florida",
    description:
      "Expert kitchen, bathroom, outdoor living, and full home renovations across Fort Myers, Naples, Cape Coral, Bonita Springs, and all of SWFL. 150+ projects. Licensed & insured.",
    type: "website",
    locale: "en_US",
    siteName: "Stacked Construction",
    url: "https://stackedconstruction.co",
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
      <body className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

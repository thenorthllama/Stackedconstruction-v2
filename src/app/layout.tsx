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
  title: "Stacked Construction | Premium Home Remodeling in Southwest Florida",
  description:
    "Transform your home with Southwest Florida's trusted remodeling experts. Kitchen, bathroom, outdoor living, and full home renovations. 150+ projects completed. Get your free estimate today.",
  openGraph: {
    title: "Stacked Construction | Premium Home Remodeling in SWFL",
    description:
      "Southwest Florida's trusted remodeling experts. Kitchen, bathroom, outdoor living, and full home renovations with 150+ projects completed.",
    type: "website",
    locale: "en_US",
    siteName: "Stacked Construction",
  },
  robots: {
    index: true,
    follow: true,
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

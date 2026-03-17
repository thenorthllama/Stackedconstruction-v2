import type { Metadata } from "next";
import CountyPageLayout from "@/components/CountyPageLayout";
import { getCountyBySlug, getCitiesForCounty, services } from "@/data/seo";

const county = getCountyBySlug("lee-county")!;
const countyCities = getCitiesForCounty("lee-county");

export const metadata: Metadata = {
  title: county.metaTitle,
  description: county.metaDescription,
  alternates: {
    canonical: "https://stackedconstruction.co/areas/lee-county",
  },
  openGraph: {
    title: county.metaTitle,
    description: county.metaDescription,
  },
};

export default function LeeCountyPage() {
  return (
    <CountyPageLayout
      county={county}
      countyCities={countyCities}
      services={services}
      ctaDescription="From Fort Myers to Cape Coral to Bonita Springs, Stacked Construction is Lee County's trusted partner for premium home remodeling. Start with a free, no-obligation consultation."
    />
  );
}

import type { Metadata } from "next";
import CountyPageLayout from "@/components/CountyPageLayout";
import { getCountyBySlug, getCitiesForCounty, services } from "@/data/seo";

const county = getCountyBySlug("charlotte-county")!;
const countyCities = getCitiesForCounty("charlotte-county");

export const metadata: Metadata = {
  title: county.metaTitle,
  description: county.metaDescription,
  alternates: {
    canonical: "https://stackedconstruction.co/areas/charlotte-county",
  },
  openGraph: {
    title: county.metaTitle,
    description: county.metaDescription,
  },
};

export default function CharlotteCountyPage() {
  return (
    <CountyPageLayout
      county={county}
      countyCities={countyCities}
      services={services}
      ctaDescription="From Punta Gorda waterfront homes to Port Charlotte communities, Stacked Construction brings expert remodeling to every corner of Charlotte County. Start with a free consultation."
    />
  );
}

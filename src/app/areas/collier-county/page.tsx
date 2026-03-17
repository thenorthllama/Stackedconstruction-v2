import type { Metadata } from "next";
import CountyPageLayout from "@/components/CountyPageLayout";
import { getCountyBySlug, getCitiesForCounty, services } from "@/data/seo";

const county = getCountyBySlug("collier-county")!;
const countyCities = getCitiesForCounty("collier-county");

export const metadata: Metadata = {
  title: county.metaTitle,
  description: county.metaDescription,
  openGraph: {
    title: county.metaTitle,
    description: county.metaDescription,
  },
};

export default function CollierCountyPage() {
  return (
    <CountyPageLayout
      county={county}
      countyCities={countyCities}
      services={services}
      ctaDescription="From Naples estates to Marco Island waterfront homes, Stacked Construction delivers the luxury remodeling craftsmanship that Collier County's finest communities demand."
    />
  );
}

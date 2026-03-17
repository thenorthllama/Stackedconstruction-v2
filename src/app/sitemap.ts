import type { MetadataRoute } from "next";
import { services, cities, counties, getAllCityServiceParams } from "@/data/seo";

const BASE_URL = "https://stackedconstruction.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/areas/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // County pages
  const countyPages: MetadataRoute.Sitemap = counties.map((county) => ({
    url: `${BASE_URL}/areas/${county.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // City + Service combination pages
  const cityServicePages: MetadataRoute.Sitemap = getAllCityServiceParams().map(
    ({ city, service }) => ({
      url: `${BASE_URL}/areas/${city}/${service}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...countyPages,
    ...cityServicePages,
  ];
}

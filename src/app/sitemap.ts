import type { MetadataRoute } from "next";
import { services, cities, counties, getAllCityServiceParams } from "@/data/seo";
import { articles, clusters } from "@/data/blog";

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
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
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

  // Blog index
  const blogIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Blog article pages
  const blogArticlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog category pages
  const blogCategoryPages: MetadataRoute.Sitemap = clusters.map((cluster) => ({
    url: `${BASE_URL}/blog/category/${cluster.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...countyPages,
    ...cityServicePages,
    ...blogIndexPage,
    ...blogArticlePages,
    ...blogCategoryPages,
  ];
}

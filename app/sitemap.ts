import type { MetadataRoute } from "next";
import { SERVICE_KEYS } from "@/app/lib/services-data";

const BASE_URL = "https://agile-website-vert.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_KEYS.map((key) => ({
    url: `${BASE_URL}/services/${key}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

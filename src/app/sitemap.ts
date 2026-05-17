import type { MetadataRoute } from "next";
import { allLists } from "@/lib/lists";

const BASE_URL = "https://recomendou.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const listPages: MetadataRoute.Sitemap = allLists.map((list) => ({
    url: `${BASE_URL}/${list.slug}`,
    lastModified: new Date(list.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...listPages];
}

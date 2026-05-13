import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://recomendou.com.br/sitemap.xml",
    host: "https://recomendou.com.br",
  };
}

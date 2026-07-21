import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          ru: absoluteUrl("/"),
          en: absoluteUrl("/en"),
        },
      },
    },
    {
      url: absoluteUrl("/en"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: absoluteUrl("/"),
          en: absoluteUrl("/en"),
        },
      },
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ru: absoluteUrl("/terms"),
          en: absoluteUrl("/en/terms"),
        },
      },
    },
    {
      url: absoluteUrl("/en/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ru: absoluteUrl("/terms"),
          en: absoluteUrl("/en/terms"),
        },
      },
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ru: absoluteUrl("/privacy"),
          en: absoluteUrl("/en/privacy"),
        },
      },
    },
    {
      url: absoluteUrl("/en/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ru: absoluteUrl("/privacy"),
          en: absoluteUrl("/en/privacy"),
        },
      },
    },
  ];

  return entries;
}

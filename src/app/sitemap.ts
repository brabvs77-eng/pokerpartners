import type { MetadataRoute } from "next";
import { getAllPosts } from "@/content/blog/posts";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

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
    ...blogEntries,
  ];

  return entries;
}

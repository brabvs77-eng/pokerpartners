import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

type SeoInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternates?: { ru: string; en: string };
  noIndex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  alternates,
  noIndex = false,
  keywords = [],
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogLocale = locale === "ru" ? "ru_RU" : "en_US";
  const altLocale = locale === "ru" ? "en_US" : "ru_RU";

  const languages: Record<string, string> | undefined = alternates
    ? {
        ru: absoluteUrl(alternates.ru),
        en: absoluteUrl(alternates.en),
        "x-default": absoluteUrl(alternates.ru),
      }
    : undefined;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "affiliate marketing",
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: ogLocale,
      alternateLocale: [altLocale],
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — affiliate program`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

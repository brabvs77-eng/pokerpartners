import type { LandingContent } from "@/lib/content";
import { EMAILS } from "@/lib/links";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    email: EMAILS.support,
    sameAs: ["https://t.me/Brabvs77"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: EMAILS.support,
        availableLanguage: ["Russian", "English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAILS.sales,
        availableLanguage: ["Russian", "English"],
      },
    ],
  };
}

export function websiteJsonLd(locale: "ru" | "en"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: locale === "en" ? absoluteUrl("/en") : SITE_URL,
    inLanguage: locale === "en" ? "en" : "ru",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd(content: LandingContent): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: content.en.metaTitle,
  description: content.en.metaDescription,
  path: "/en",
  alternates: { ru: "/", en: "/en" },
  keywords: content.en.metaKeywords,
});

export default function EnglishHomePage() {
  return <LandingPage content={content.en} />;
}

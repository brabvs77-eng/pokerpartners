import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { content } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ru",
  title: content.ru.metaTitle,
  description: content.ru.metaDescription,
  path: "/",
  alternates: { ru: "/", en: "/en" },
  keywords: content.ru.metaKeywords,
});

export default function HomePage() {
  return <LandingPage content={content.ru} />;
}

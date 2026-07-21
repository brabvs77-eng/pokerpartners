import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { termsEn } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: content.en.legal.termsTitle,
  description:
    "Poker Partners User Agreement — terms of use for the website and service.",
  path: "/en/terms",
  alternates: { ru: "/terms", en: "/en/terms" },
});

export default function EnglishTermsPage() {
  return (
    <LegalLayout
      content={content.en}
      title={content.en.legal.termsTitle}
      path="/en/terms"
    >
      <div dangerouslySetInnerHTML={{ __html: termsEn }} />
    </LegalLayout>
  );
}

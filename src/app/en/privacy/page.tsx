import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { privacyEn } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: content.en.legal.privacyTitle,
  description:
    "Poker Partners Privacy Policy — how we process anonymized user data on the site.",
  path: "/en/privacy",
  alternates: { ru: "/privacy", en: "/en/privacy" },
});

export default function EnglishPrivacyPage() {
  return (
    <LegalLayout
      content={content.en}
      title={content.en.legal.privacyTitle}
      path="/en/privacy"
    >
      <div dangerouslySetInnerHTML={{ __html: privacyEn }} />
    </LegalLayout>
  );
}

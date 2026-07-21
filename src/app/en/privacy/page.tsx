import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { privacyEn } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${content.en.legal.privacyTitle} — Poker Partners`,
  description: content.en.legal.privacyTitle,
};

export default function EnglishPrivacyPage() {
  return (
    <LegalLayout content={content.en} title={content.en.legal.privacyTitle}>
      <div dangerouslySetInnerHTML={{ __html: privacyEn }} />
    </LegalLayout>
  );
}

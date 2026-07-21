import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { termsEn } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${content.en.legal.termsTitle} — Poker Partners`,
  description: content.en.legal.termsTitle,
};

export default function EnglishTermsPage() {
  return (
    <LegalLayout content={content.en} title={content.en.legal.termsTitle}>
      <div dangerouslySetInnerHTML={{ __html: termsEn }} />
    </LegalLayout>
  );
}

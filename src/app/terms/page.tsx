import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { termsRu } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${content.ru.legal.termsTitle} — Poker Partners`,
  description: content.ru.legal.termsTitle,
};

export default function TermsPage() {
  return (
    <LegalLayout content={content.ru} title={content.ru.legal.termsTitle}>
      <div dangerouslySetInnerHTML={{ __html: termsRu }} />
    </LegalLayout>
  );
}

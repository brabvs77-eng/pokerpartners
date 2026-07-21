import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { privacyRu } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${content.ru.legal.privacyTitle} — Poker Partners`,
  description: content.ru.legal.privacyTitle,
};

export default function PrivacyPage() {
  return (
    <LegalLayout content={content.ru} title={content.ru.legal.privacyTitle}>
      <div dangerouslySetInnerHTML={{ __html: privacyRu }} />
    </LegalLayout>
  );
}

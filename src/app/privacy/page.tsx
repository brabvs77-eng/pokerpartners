import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { privacyRu } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ru",
  title: content.ru.legal.privacyTitle,
  description:
    "Политика конфиденциальности Poker Partners — как мы обрабатываем обезличенные данные пользователей.",
  path: "/privacy",
  alternates: { ru: "/privacy", en: "/en/privacy" },
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      content={content.ru}
      title={content.ru.legal.privacyTitle}
      path="/privacy"
    >
      <div dangerouslySetInnerHTML={{ __html: privacyRu }} />
    </LegalLayout>
  );
}

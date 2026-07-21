import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { content } from "@/lib/content";
import { termsRu } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ru",
  title: content.ru.legal.termsTitle,
  description:
    "Пользовательское соглашение Poker Partners — условия использования сайта и сервиса.",
  path: "/terms",
  alternates: { ru: "/terms", en: "/en/terms" },
});

export default function TermsPage() {
  return (
    <LegalLayout
      content={content.ru}
      title={content.ru.legal.termsTitle}
      path="/terms"
    >
      <div dangerouslySetInnerHTML={{ __html: termsRu }} />
    </LegalLayout>
  );
}

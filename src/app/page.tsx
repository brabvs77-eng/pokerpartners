import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.ru.metaTitle,
  description: content.ru.metaDescription,
};

export default function HomePage() {
  return <LandingPage content={content.ru} />;
}

import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.en.metaTitle,
  description: content.en.metaDescription,
};

export default function EnglishHomePage() {
  return <LandingPage content={content.en} />;
}

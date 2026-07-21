import Link from "next/link";
import type { ReactNode } from "react";
import type { LandingContent } from "@/lib/content";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalLayout({
  content,
  title,
  children,
}: {
  content: LandingContent;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen py-8 bg-gray-900">
      <div className="flex flex-col w-full max-w-site px-2 md:px-0">
        <Header content={content} />
        <article className="mt-10 md:mt-16 px-4 md:px-10 legal-content max-w-4xl">
          <h1>{title}</h1>
          {children}
          <p className="mt-10 text-sm text-gray-500">
            <Link
              href={content.locale === "en" ? "/en" : "/"}
              className="text-yellow-400 hover:underline"
            >
              ← {content.locale === "en" ? "Back to home" : "На главную"}
            </Link>
          </p>
        </article>
        <Footer content={content} />
      </div>
    </div>
  );
}

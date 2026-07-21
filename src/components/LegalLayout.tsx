import Link from "next/link";
import type { ReactNode } from "react";
import type { LandingContent } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HtmlLang } from "./HtmlLang";
import { JsonLd } from "./JsonLd";

export function LegalLayout({
  content,
  title,
  path,
  children,
}: {
  content: LandingContent;
  title: string;
  path: string;
  children: ReactNode;
}) {
  const homePath = content.locale === "en" ? "/en" : "/";
  const homeLabel = content.locale === "en" ? "Home" : "Главная";

  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen py-8 bg-gray-900">
      <HtmlLang locale={content.locale} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: homeLabel, path: homePath },
          { name: title, path },
        ])}
      />
      <div className="flex flex-col w-full max-w-site px-2 md:px-0">
        <Header content={content} />
        <main className="mt-10 md:mt-16 px-4 md:px-10 legal-content max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400 font-roboto">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={homePath} className="hover:text-yellow-400 transition-colors">
                  {homeLabel}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
          <h1>{title}</h1>
          {children}
          <p className="mt-10 text-sm text-gray-500">
            <Link
              href={homePath}
              className="text-yellow-400 hover:underline"
            >
              ← {content.locale === "en" ? "Back to home" : "На главную"}
            </Link>
          </p>
        </main>
        <Footer content={content} />
      </div>
    </div>
  );
}

import Link from "next/link";
import type { LandingContent } from "@/lib/content";

export function Footer({ content }: { content: LandingContent }) {
  const termsHref = content.locale === "en" ? "/en/terms" : "/terms";
  const privacyHref = content.locale === "en" ? "/en/privacy" : "/privacy";

  return (
    <footer className="mt-24 w-full max-md:mt-10 max-md:max-w-full font-roboto pb-8">
      <div className="flex flex-wrap gap-6 mt-7 w-full text-white max-md:max-w-full">
        <div className="flex-auto my-auto text-lg underline max-md:max-w-full flex flex-wrap gap-8">
          {content.locale === "ru" && (
            <Link href="/blog" className="hover:text-yellow-400 transition-colors">
              Блог
            </Link>
          )}
          <Link href={termsHref} className="hover:text-yellow-400 transition-colors">
            {content.footer.terms}
          </Link>
          <Link href={privacyHref} className="hover:text-yellow-400 transition-colors">
            {content.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

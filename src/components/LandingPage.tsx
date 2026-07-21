import type { LandingContent } from "@/lib/content";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { Benefits } from "./Benefits";
import { Bonus } from "./Bonus";
import { Contacts } from "./Contacts";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HtmlLang } from "./HtmlLang";
import { JsonLd } from "./JsonLd";
import { TrafficTypes } from "./TrafficTypes";

export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen py-8 bg-gray-900">
      <HtmlLang locale={content.locale} />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(content.locale),
          faqJsonLd(content),
        ]}
      />
      <div className="flex flex-col w-full max-w-site px-2 md:px-0">
        <Header content={content} />
        <main>
          <Hero content={content} />
          <TrafficTypes content={content} />
          <Benefits content={content} />
          <Bonus content={content} />
          <FAQ content={content} />
          <Contacts content={content} />
        </main>
        <Footer content={content} />
      </div>
    </div>
  );
}

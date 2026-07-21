import Image from "next/image";
import type { LandingContent } from "@/lib/content";
import { LINKS } from "@/lib/links";

export function Hero({ content }: { content: LandingContent }) {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-[320px] px-4 py-8 md:px-16 md:py-16 bg-gradient-to-br from-[#232733] to-[#181C23] rounded-[32px] mt-8 overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover pointer-events-none select-none opacity-70"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10 max-w-full md:max-w-[700px] w-full">
        <h1 className="text-3xl md:text-6xl font-roadradio font-bold text-white leading-tight mb-6 max-w-full">
          {content.hero.titleLines.map((line, i) => (
            <span key={line}>
              {i > 0 && <br className="hidden md:block" />}
              {line}
            </span>
          ))}
        </h1>
        <p className="text-base md:text-xl text-gray-400 font-roboto mb-8 md:mb-10 max-w-full">
          <span className="text-white font-bold">{content.hero.brand}</span>
          {content.hero.descriptionAfter}
        </p>
        <a
          href={LINKS.register}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button w-full max-w-[366px] h-16 text-[22px]"
        >
          {content.hero.cta}
        </a>
      </div>
    </section>
  );
}

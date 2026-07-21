import Image from "next/image";
import type { LandingContent } from "@/lib/content";
import { LINKS } from "@/lib/links";

export function Bonus({ content }: { content: LandingContent }) {
  return (
    <section
      className="relative flex flex-col items-start justify-between rounded-[32px] w-full h-[400px] mt-12 shadow-xl px-4 py-8 md:px-16 md:py-12 max-md:h-auto overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 70% 40%, #FFD60033 0%, #232733 60%), linear-gradient(120deg, #232733 60%, #181C23 100%)",
      }}
    >
      <Image
        src="/images/bonus-bg.png"
        alt={
          content.locale === "en"
            ? "Welcome bonus for new Poker Partners affiliates"
            : "Приветственный бонус для новых партнёров Poker Partners"
        }
        fill
        className="object-cover opacity-80 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      <div className="z-10 flex flex-col h-full justify-between w-full relative">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold font-roadradio text-white mb-6 md:mb-8 leading-tight max-w-full">
            {content.bonus.title}
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 md:mb-10 w-full">
            <span className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white text-xl md:text-3xl font-bold border border-white/40 shadow font-roboto">
              {content.bonus.percent}
            </span>
            <span className="text-base md:text-2xl font-roboto text-white max-w-full">
              {content.bonus.note}
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center mt-6 md:mt-0">
          <a
            href={LINKS.register}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full max-w-[366px] h-14 text-xl"
          >
            {content.bonus.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

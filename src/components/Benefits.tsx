import type { LandingContent } from "@/lib/content";

export function Benefits({ content }: { content: LandingContent }) {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="mt-10 md:mt-20 w-full max-w-full px-2 md:px-0">
      <h2 id="benefits-heading" className="text-2xl md:text-5xl font-bold font-roadradio text-white mb-6 md:mb-12 max-w-full">
        {content.benefits.title}
      </h2>
      <div className="flex flex-col gap-6 md:gap-4 w-full">
        {content.benefits.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col md:flex-row items-center bg-[#232733] rounded-[24px] p-4 md:p-10 mt-4 md:mt-8 w-full h-auto md:h-[264px] shadow-md relative overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-right bg-contain z-0"
              style={{ backgroundImage: `url(${item.image})` }}
              aria-hidden
            />
            <div className="w-full md:w-1/2 z-10 relative flex flex-col items-start">
              <h3 className="text-lg md:text-4xl font-bold font-roadradio text-white mb-1 md:mb-4 max-w-full">
                {item.title}
              </h3>
              <p className="text-base md:text-xl font-roboto text-gray-400 leading-relaxed max-w-full">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

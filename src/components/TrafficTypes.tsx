import type { LandingContent } from "@/lib/content";
import { TrafficIconSvg } from "./Icons";

export function TrafficTypes({ content }: { content: LandingContent }) {
  return (
    <section aria-labelledby="traffic-heading" className="mt-20 max-md:mt-10 max-md:max-w-full">
      <h2 id="traffic-heading" className="text-4xl md:text-5xl font-bold font-roadradio text-white mb-12">
        {content.traffic.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.traffic.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col grow items-start bg-[#232733] rounded-[24px] p-10 min-h-[220px] shadow-md"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 rounded-[16px] mb-6">
              <TrafficIconSvg type={item.icon} />
            </div>
            <h3 className="text-2xl font-bold font-roadradio text-white mb-2">{item.title}</h3>
            <p className="text-base font-roboto text-gray-400 leading-snug">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

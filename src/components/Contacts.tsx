import type { LandingContent } from "@/lib/content";
import { EMAILS, LINKS } from "@/lib/links";

export function Contacts({ content }: { content: LandingContent }) {
  const hrefMap = {
    support: LINKS.support,
    bizdev: LINKS.bizdev,
    sales: LINKS.sales,
  } as const;

  return (
    <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-6xl font-bold font-roadradio text-white max-md:text-4xl">
        {content.contacts.title}
      </h2>
      <div className="mt-12 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {content.contacts.items.map((item) => (
            <div key={item.title} className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="contact-card flex flex-col grow items-start px-14 py-14 whitespace-nowrap max-md:px-5 max-md:mt-6">
                <h3 className="text-2xl font-bold font-roadradio text-white">{item.title}</h3>
                <a
                  href={hrefMap[item.emailKey]}
                  className="mt-3.5 text-lg leading-snug text-sky-500 hover:text-sky-400 transition-colors font-roboto"
                >
                  {EMAILS[item.emailKey]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

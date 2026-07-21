"use client";

import { useState } from "react";
import type { LandingContent } from "@/lib/content";
import { ChevronIcon } from "./Icons";

export function FAQ({ content }: { content: LandingContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-label="FAQ"
      className="mt-20 md:mt-36 w-full max-w-full px-2 md:px-0"
    >
      <h2 className="sr-only">{content.locale === "en" ? "FAQ" : "Частые вопросы"}</h2>
      <div className="w-full border-b border-slate-800">
        {content.faq.items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div key={item.question} className="border-b border-slate-800 py-6 md:py-12 w-full">
              <h3 className="m-0 text-inherit font-inherit">
                <button
                  id={buttonId}
                  type="button"
                  className="flex items-center justify-between w-full text-xl md:text-3xl font-bold text-white font-roadradio focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <span className="max-w-[80vw] md:max-w-full text-left">{item.question}</span>
                  <ChevronIcon open={open} />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-all duration-300 mt-6 md:mt-8 text-base md:text-lg font-roboto text-gray-300 leading-6 max-w-full md:max-w-3xl ${
                  open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                }`}
                style={{ transitionProperty: "max-height, opacity, transform" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

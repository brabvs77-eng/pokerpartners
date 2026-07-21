"use client";

import { useState } from "react";
import type { LandingContent } from "@/lib/content";
import { ChevronIcon } from "./Icons";

export function FAQ({ content }: { content: LandingContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mt-20 md:mt-36 w-full max-w-full px-2 md:px-0">
      <div className="w-full border-b border-slate-800">
        {content.faq.items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} className="border-b border-slate-800 py-6 md:py-12 w-full">
              <button
                type="button"
                className="flex items-center justify-between w-full text-xl md:text-3xl font-bold text-white font-roadradio focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
              >
                <span className="max-w-[80vw] md:max-w-full text-left">{item.question}</span>
                <ChevronIcon open={open} />
              </button>
              <div
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

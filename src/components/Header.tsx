"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LandingContent } from "@/lib/content";
import { LINKS } from "@/lib/links";
import { GlobeIcon } from "./Icons";

export function Header({ content }: { content: LandingContent }) {
  const [open, setOpen] = useState(false);
  const termsHref = content.locale === "en" ? "/en/terms" : "/terms";
  const privacyHref = content.locale === "en" ? "/en/privacy" : "/privacy";

  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 py-3 md:py-4 rounded-[32px] font-roboto gap-4 md:gap-0 relative z-50">
      <nav className="hidden md:flex items-center gap-10 text-white w-auto">
        <Link href={content.locale === "en" ? "/en" : "/"}>
          <Image
            src="/images/logo.png"
            alt="Poker Partners Logo"
            width={70}
            height={70}
            className="object-contain w-[70px] h-[70px]"
            priority
          />
        </Link>
        <a
          href={LINKS.partners}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 hover:text-yellow-400 transition-colors"
        >
          {content.nav.partners}
        </a>
        <a href="#benefits" className="px-2 py-1 hover:text-yellow-400 transition-colors">
          {content.nav.benefits}
        </a>
        <a href="#faq" className="px-2 py-1 hover:text-yellow-400 transition-colors">
          {content.nav.faq}
        </a>
        {content.locale === "ru" && (
          <Link href="/blog" className="px-2 py-1 hover:text-yellow-400 transition-colors">
            Блог
          </Link>
        )}
        <a
          href={LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 hover:text-yellow-400 transition-colors"
        >
          {content.nav.feedback}
        </a>
      </nav>

      <div className="hidden md:flex items-center gap-4 w-auto">
        <Link
          href={content.altHref}
          className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-md cursor-pointer hover:bg-yellow-300 transition-colors"
          aria-label={content.altLocale === "en" ? "English" : "Русский"}
        >
          <GlobeIcon />
        </Link>
        <a
          href={LINKS.login}
          className="px-8 py-3 font-bold text-gray-900 bg-yellow-400 rounded-2xl border-2 border-yellow-400 shadow hover:bg-yellow-300 transition-colors text-lg"
        >
          {content.nav.login}
        </a>
        <a
          href={LINKS.register}
          className="px-8 py-3 font-bold text-white rounded-2xl border-2 border-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors text-lg"
        >
          {content.nav.register}
        </a>
      </div>

      <div className="flex md:hidden w-full items-center justify-between">
        <Link href={content.locale === "en" ? "/en" : "/"}>
          <Image
            src="/images/logo.png"
            alt="Poker Partners Logo"
            width={48}
            height={48}
            className="object-contain w-12 h-12"
            priority
          />
        </Link>
        <button
          type="button"
          className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-yellow-400 shadow-md hover:bg-yellow-300 transition-colors"
          aria-label={open ? content.nav.closeMenu : content.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#67561A] rounded transition-all duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#67561A] rounded my-1 transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#67561A] rounded transition-all duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 rounded-[24px] bg-[#232733] border border-slate-700 shadow-xl p-6 flex flex-col items-center gap-3 z-50">
          <a
            href={LINKS.partners}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-bold py-2 hover:text-yellow-400 transition-colors w-full text-center"
            onClick={() => setOpen(false)}
          >
            {content.nav.partners}
          </a>
          <a
            href="#benefits"
            className="text-white text-lg font-bold py-2 hover:text-yellow-400 transition-colors w-full text-center"
            onClick={() => setOpen(false)}
          >
            {content.nav.benefits}
          </a>
          <a
            href="#faq"
            className="text-white text-lg font-bold py-2 hover:text-yellow-400 transition-colors w-full text-center"
            onClick={() => setOpen(false)}
          >
            {content.nav.faq}
          </a>
          {content.locale === "ru" && (
            <Link
              href="/blog"
              className="text-white text-lg font-bold py-2 hover:text-yellow-400 transition-colors w-full text-center"
              onClick={() => setOpen(false)}
            >
              Блог
            </Link>
          )}
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-bold py-2 hover:text-yellow-400 transition-colors w-full text-center"
            onClick={() => setOpen(false)}
          >
            {content.nav.feedback}
          </a>
          <Link
            href={content.altHref}
            className="text-yellow-400 text-lg font-bold py-2 w-full text-center"
            onClick={() => setOpen(false)}
          >
            {content.altLocale === "en" ? "English" : "Русский"}
          </Link>
          <a
            href={LINKS.login}
            className="w-full text-center px-8 py-3 font-bold text-gray-900 bg-yellow-400 rounded-2xl border-2 border-yellow-400"
            onClick={() => setOpen(false)}
          >
            {content.nav.login}
          </a>
          <a
            href={LINKS.register}
            className="w-full text-center px-8 py-3 font-bold text-white rounded-2xl border-2 border-white"
            onClick={() => setOpen(false)}
          >
            {content.nav.register}
          </a>
          <div className="flex flex-col gap-2 pt-2 w-full text-center text-sm text-gray-400">
            <Link href={termsHref} onClick={() => setOpen(false)} className="hover:text-yellow-400">
              {content.footer.terms}
            </Link>
            <Link href={privacyHref} onClick={() => setOpen(false)} className="hover:text-yellow-400">
              {content.footer.privacy}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/content";

/** Sets <html lang> for the active locale on static export. */
export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

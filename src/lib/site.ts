/** Canonical site origin without trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://pokerpartners.io"
).replace(/\/$/, "");

export const SITE_NAME = "Poker Partners";
export const TWITTER_HANDLE = "@pokerpartners";

export const ROUTES = {
  home: { ru: "/", en: "/en" },
  terms: { ru: "/terms", en: "/en/terms" },
  privacy: { ru: "/privacy", en: "/en/privacy" },
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

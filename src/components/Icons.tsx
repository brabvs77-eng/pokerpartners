import type { TrafficIcon } from "@/lib/content";

const stroke = "#232733";

export function TrafficIconSvg({ type }: { type: TrafficIcon }) {
  switch (type) {
    case "search":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <circle cx="16" cy="16" r="14" stroke={stroke} strokeWidth="4" fill="#fff" />
          <path d="M22 22l-4-4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="15" cy="15" r="5" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "social":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <rect x="4" y="8" width="24" height="16" rx="8" fill="#fff" stroke={stroke} strokeWidth="4" />
          <circle cx="12" cy="16" r="2" fill={stroke} />
          <circle cx="20" cy="16" r="2" fill={stroke} />
        </svg>
      );
    case "graphic":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <rect x="6" y="10" width="20" height="12" rx="3" fill="#fff" stroke={stroke} strokeWidth="4" />
          <rect x="10" y="14" width="12" height="4" rx="2" fill={stroke} />
        </svg>
      );
    case "mail":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <rect x="6" y="10" width="20" height="12" rx="3" fill="#fff" stroke={stroke} strokeWidth="4" />
          <path d="M6 10l10 8 10-8" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "video":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <rect x="6" y="10" width="20" height="12" rx="3" fill="#fff" stroke={stroke} strokeWidth="4" />
          <polygon points="15,14 21,16 15,18" fill={stroke} />
        </svg>
      );
    case "other":
      return (
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" aria-hidden>
          <rect x="8" y="8" width="16" height="16" rx="8" fill="#fff" stroke={stroke} strokeWidth="4" />
          <circle cx="16" cy="16" r="4" fill={stroke} />
        </svg>
      );
  }
}

export function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#F6D150" />
      <path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 0c2.5 2.5 2.5 11.5 0 16m0-16C9.5 6.5 9.5 15.5 12 20m-8-8h16m-14.5 4h13m-13-8h13"
        stroke="#67561A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span className={`transition-transform duration-200 ml-4 ${open ? "rotate-180" : "rotate-0"}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[34px] md:h-[34px]"
        aria-hidden
      >
        <circle cx="17" cy="17" r="17" fill="#181C23" />
        <path
          d="M11 15L17 21L23 15"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

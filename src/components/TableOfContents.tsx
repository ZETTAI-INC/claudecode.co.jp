"use client";

import { useState } from "react";

function slugify(text: string): string {
  return encodeURIComponent(text.replace(/\s+/g, "-"));
}

export default function TableOfContents({ headings }: { headings: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-50 rounded-xl border border-gray-100 mb-8 overflow-hidden">
      {/* Header — always visible, toggles on mobile */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:pointer-events-none w-full flex items-center justify-between px-5 py-4 md:pb-0 md:pt-5 text-left"
      >
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          目次
          <span className="ml-2 text-gray-400 normal-case tracking-normal font-normal">
            ({headings.length}項目)
          </span>
        </p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`md:hidden text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* List — collapsible on mobile, always visible on desktop */}
      <ol
        className={`space-y-1 px-5 pb-4 md:pb-5 pt-2 md:pt-3 transition-all duration-200 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 md:max-h-[500px] opacity-0 md:opacity-100 overflow-hidden"
        }`}
      >
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#heading-${slugify(h)}`}
              className="text-sm text-gray-600 hover:text-blue-600 active:text-blue-700 transition-colors flex items-start gap-2 py-1.5 md:py-1 -mx-2 px-2 rounded-md hover:bg-gray-100 active:bg-gray-200"
            >
              <span className="text-blue-400 font-bold shrink-0 w-5 text-right tabular-nums">
                {i + 1}.
              </span>
              <span className="leading-snug">{h}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

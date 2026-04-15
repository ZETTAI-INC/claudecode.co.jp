"use client";

import { useState } from "react";
import Link from "next/link";
import type { NewsEntry } from "@/data/news";
import { readingTime, formatDate, relativeDate } from "@/lib/article-utils";

const tabs = [
  { key: "all", label: "すべて" },
  { key: "news", label: "お知らせ" },
  { key: "blog", label: "ブログ" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function InfoTabs({ entries }: { entries: NewsEntry[] }) {
  const [active, setActive] = useState<TabKey>("all");

  const filtered =
    active === "all" ? entries : entries.filter((e) => e.type === active);

  return (
    <>
      {/* Tabs — equal width on mobile, auto on desktop */}
      <div className="flex mb-8 md:mb-10 border-b border-gray-200">
        {tabs.map((tab) => {
          const count =
            tab.key === "all"
              ? entries.length
              : entries.filter((e) => e.type === tab.key).length;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex-1 md:flex-none md:px-5 py-3.5 md:py-3 text-sm font-bold transition-colors relative ${
                active === tab.key
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
              <span className="ml-1 text-xs opacity-60">({count})</span>
              {active === tab.key && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* List */}
      <ul>
        {filtered.map((entry, i) => {
          const mins = readingTime(entry.body);
          return (
            <li key={entry.slug}>
              <Link
                className="group block py-4 md:py-5 md:px-5 hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-lg md:-mx-5"
                style={{
                  borderBottom: "solid 1px #E5DFDB",
                  ...(i === 0 ? { borderTop: "solid 1px #E5DFDB" } : {}),
                }}
                href={`/info/${entry.slug}/`}
              >
                {/* Mobile: vertical card layout */}
                <div className="md:flex md:items-start md:gap-0">
                  {/* Meta row */}
                  <div className="flex items-center gap-2 mb-2 md:mb-0 md:flex-none">
                    <time className="text-xs md:text-sm text-gray-400 md:text-gray-500 md:w-24 flex-none tabular-nums">
                      {formatDate(entry.date)}
                    </time>
                    <span
                      className="inline-flex items-center justify-center text-[11px] md:text-xs font-bold text-white rounded px-2.5 md:px-3 py-0.5 flex-none"
                      style={{
                        backgroundColor:
                          entry.type === "blog" ? "#059669" : "#2563eb",
                        minWidth: 80,
                      }}
                    >
                      {entry.category}
                    </span>
                    {/* Reading time — inline on mobile meta row */}
                    <span className="inline-flex md:hidden items-center gap-1 text-[11px] text-gray-300 ml-auto">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {mins}分
                    </span>
                  </div>

                  {/* Title + info */}
                  <div className="md:ml-6 md:w-auto">
                    <p className="text-[15px] md:text-base leading-snug font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {entry.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400">
                      <span className="hidden md:inline">{relativeDate(entry.date)}</span>
                      <span className="hidden md:inline-flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {mins}分で読める
                      </span>
                      {entry.tags && entry.tags.length > 0 && (
                        <span className="text-gray-300 line-clamp-1">
                          {entry.tags.slice(0, 2).join(" / ")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="py-16 text-center text-gray-400 text-sm">
            記事がありません
          </li>
        )}
      </ul>
    </>
  );
}

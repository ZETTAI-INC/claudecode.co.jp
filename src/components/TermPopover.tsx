"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GLOSSARY, type GlossaryKey } from "@/data/glossary";

type Props = {
  termKey: GlossaryKey;
  /** ボタン内に表示する文言。省略時は GLOSSARY[termKey].label */
  children?: React.ReactNode;
  /** ？アイコンのみ表示（用語名は外側で書く場合） */
  iconOnly?: boolean;
  /** アイコンの色味 — primary=青、inherit=親の文字色を継承 */
  tone?: "primary" | "inherit";
  className?: string;
};

const POP_WIDTH = 288; // 18rem
const POP_MARGIN = 8;

export default function TermPopover({ termKey, children, iconOnly = false, tone = "primary", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const entry = GLOSSARY[termKey];

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const t = triggerRef.current?.getBoundingClientRect();
      if (!t) return;
      const vw = window.innerWidth;
      const half = POP_WIDTH / 2;
      let left = t.left + t.width / 2;
      // 画面端でクリップしないようクランプ
      left = Math.max(POP_MARGIN + half, Math.min(vw - POP_MARGIN - half, left));
      const top = t.bottom + 8;
      setPos({ left, top });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (popRef.current?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!entry) return <span>{children ?? termKey}</span>;

  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      {!iconOnly && <span>{children ?? entry.label}</span>}
      <button
        ref={triggerRef}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-label={`${entry.label} の説明を表示`}
        aria-expanded={open}
        className={`ml-0.5 inline-flex items-center justify-center align-middle focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full opacity-90 hover:opacity-100 ${
          tone === "inherit" ? "text-current" : "text-blue-600 hover:text-blue-800"
        }`}
        style={{ verticalAlign: "middle" }}
      >
        <span className="material-icons-outlined" style={{ fontSize: "1em", lineHeight: 1 }}>
          help_outline
        </span>
      </button>

      {mounted && open && pos &&
        createPortal(
          <div
            ref={popRef}
            role="dialog"
            aria-label={`${entry.label} の説明`}
            className="fixed z-[1000] rounded-lg border border-gray-200 bg-white p-4 text-left text-sm font-normal text-gray-800 shadow-xl"
            style={{
              left: pos.left,
              top: pos.top,
              width: POP_WIDTH,
              transform: "translateX(-50%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">用語解説</div>
            <div className="mt-1 text-base font-bold text-gray-900">{entry.label}</div>
            {entry.reading && (
              <div className="mt-0.5 text-xs text-gray-500">{entry.reading}</div>
            )}
            <div className="mt-2 leading-relaxed text-gray-700">{entry.description}</div>
            {entry.example && (
              <div className="mt-2 rounded bg-gray-50 px-2 py-1 text-xs text-gray-600">
                例：{entry.example}
              </div>
            )}
          </div>,
          document.body
        )}
    </span>
  );
}

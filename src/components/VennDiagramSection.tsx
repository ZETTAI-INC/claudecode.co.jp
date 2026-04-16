"use client";

import React, { useEffect, useState } from 'react';

export default function VennDiagramSection() {
  const [isWhyOpen, setIsWhyOpen] = useState(false);

  useEffect(() => {
    if (isWhyOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsWhyOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [isWhyOpen]);

  return (
    <section className="w-full max-w-[1200px] mx-auto my-24 px-4 md:px-8">
      {/* Background Container - Deep Blue like the image */}
      <div className="venn-card w-full bg-[#2A3875] rounded-[2rem] p-6 md:p-12 relative overflow-hidden shadow-2xl font-sans">
        
        {/* Decorative Grid or Pattern (subtle) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px] pointer-events-none"></div>

        {/* Outer Frame with border */}
        <div className="border-[1.5px] border-[#A5BAEB]/40 rounded-2xl mt-4 px-6 md:px-8 pb-10 pt-16 relative flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-4 z-10 w-full min-h-[500px]">
          
          {/* Top Left Pill */}
          <div className="absolute top-[-18px] left-6 md:left-12 bg-gradient-to-br from-[#7794E1] to-[#5171C2] px-6 py-1.5 rounded-full shadow-md border border-white/10">
            <span className="text-white font-bold tracking-widest text-[14px] md:text-[16px]">特長：現場視点</span>
          </div>

          {/* Top Right Pill */}
          <div className="absolute top-[-18px] right-6 md:right-12 bg-gradient-to-br from-[#7794E1] to-[#5171C2] px-6 py-1.5 rounded-full shadow-md border border-white/10">
            <span className="text-white font-bold tracking-widest text-[14px] md:text-[16px]">特長：Claude Code</span>
          </div>

          {/* Left Text Column */}
          <div className="w-full xl:w-[26%] flex flex-col gap-8 text-white relative z-20">
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">業務課題を自分の言葉で語れる</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                現場の無駄を肌で感じており、どの業務を内製化すべきか、具体的な要件を言語化できる。
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">ただし、実装する手段がない</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                実装力がないため、ツール化は外注・開発部門待ち。コストも時間もかかり、アイデアが塩漬けになる。
              </p>
            </div>
          </div>

          {/* Center Venn Diagram Area */}
          <div className="relative flex justify-center items-center w-full xl:w-[48%] h-[300px] md:h-[450px]">
            {/* SVG Venn Diagram to guarantee perfect geometric intersection lens */}
            <svg viewBox="0 0 700 500" className="absolute inset-0 w-full h-full drop-shadow-2xl">
              <defs>
                <clipPath id="leftCircle">
                  <circle cx="240" cy="250" r="240" />
                </clipPath>
              </defs>
              {/* Right Circle (White) */}
              <circle cx="460" cy="250" r="240" fill="white" />
              {/* Left Circle (White) */}
              <circle cx="240" cy="250" r="240" fill="white" />
              {/* Intersection Lens (Dark Blue) */}
              <g clipPath="url(#leftCircle)">
                <circle cx="460" cy="250" r="240" fill="#203584" />
              </g>
            </svg>

            {/* Overlay HTML Content for Venn Diagram */}
            
            {/* Left Circle Content (Width: 31% of the viewBox) */}
            <div className="absolute left-[1.5%] w-[30%] h-full flex flex-col items-center justify-center text-center z-10 gap-2">
              <span className="text-[#1E3A8A] text-lg md:text-[22px] font-black tracking-widest leading-snug">業務理解</span>
              <span className="text-black font-bold text-[10.5px] md:text-[12.5px] leading-relaxed tracking-wide" style={{ wordBreak: "keep-all" }}>現場の課題と<br/>要件を語れる</span>
            </div>

            {/* Center Intersection Content (Width: 37% of the viewBox) */}
            <div className="absolute left-[35%] w-[30%] h-full flex flex-col items-center justify-center text-center z-20 gap-2">
              <span className="text-white text-[20px] md:text-[28px] font-black tracking-widest leading-tight drop-shadow-md">最強の<br/>内製化</span>
            </div>

            {/* Right Circle Content (Width: 31% of the viewBox) */}
            <div className="absolute right-[1.5%] w-[30%] h-full flex flex-col items-center justify-center text-center z-10 gap-2">
              <span className="text-[#1E3A8A] text-lg md:text-[22px] font-black tracking-widest leading-snug">Claude Code</span>
              <span className="text-black font-bold text-[10.5px] md:text-[12.5px] leading-relaxed tracking-wide" style={{ wordBreak: "keep-all" }}>自然言語で<br/>ツールを作れる</span>
            </div>
            
          </div>

          {/* Right Text Column */}
          <div className="w-full xl:w-[26%] flex flex-col gap-8 text-white relative z-20">
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">自然言語で実装が爆速</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                Claude Codeなら自然言語の指示だけで業務ツールが作れる。非エンジニアでも設計〜実装〜公開まで自分で回せる。
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">ただし現場を知らないと使われない</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                業務理解がないまま作っても、誰も使わないツールになる。内製化の成否は、現場起点の要件にかかっている。
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom connector: Venn intersection (最強のDX人材) → our answer (conclusion pill) */}
        <div className="flex flex-col items-center z-30 mt-4 mb-1">
          {/* Context label to bridge the ideal → the method */}
          <span className="text-white/70 text-[11px] md:text-[12px] font-bold tracking-[0.35em] mb-2">
            当社の答え
          </span>
          {/* Vertical dashed connector + arrowhead (pointing down) */}
          <svg width="14" height="28" viewBox="0 0 14 28" fill="none" className="opacity-80">
            <line x1="7" y1="0" x2="7" y2="20" stroke="white" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
            <path d="M7,28 L1,18 L13,18 Z" fill="white" />
          </svg>
          {/* White Bottom Pill */}
          <div className="bg-white text-[#2A3875] px-8 py-3 rounded-full shadow-lg font-black text-[14px] md:text-[16px] tracking-widest border-2 border-white drop-shadow-xl text-center w-max mt-2">
            <span style={{ wordBreak: "keep-all" }}>業務 × Claude Code を覚えるのが、最強の内製化</span>
          </div>

          {/* Speech Bubble Trigger */}
          <button
            type="button"
            onClick={() => setIsWhyOpen(true)}
            className="relative mt-6 bg-[#FFE17A] hover:bg-[#FFD84A] text-[#2A3875] font-black text-[13px] md:text-[15px] px-6 py-3 rounded-2xl shadow-lg tracking-wide transition-all hover:scale-105 cursor-pointer border-2 border-[#FFD84A]"
            aria-label="なぜ業務理解がある人が最強なのか？詳細を開く"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-[#FFE17A]"></span>
            <span className="inline-flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#2A3875] text-[#FFE17A] flex items-center justify-center text-[11px] font-black leading-none">?</span>
              なぜ「業務理解がある人」が最強なのか？
              <span className="text-[16px] leading-none">→</span>
            </span>
          </button>
        </div>

      </div>

      {/* --- Why Modal --- */}
      {isWhyOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsWhyOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="なぜ業務理解がある人が最強なのか？"
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-2xl my-4 sm:my-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsWhyOpen(false)}
              className="absolute top-3 right-3 z-[100] w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-lg font-bold shadow-md cursor-pointer"
              aria-label="閉じる"
            >
              ×
            </button>
            <div className="p-5 md:p-7">
              <p className="text-[#1890FF] font-bold text-[11px] md:text-[12px] tracking-[0.2em] mb-2">
                WHY BUSINESS × CLAUDE CODE?
              </p>
              <h3 className="text-[18px] md:text-[22px] font-black text-[#2A3875] leading-[1.4] mb-2" style={{ wordBreak: "keep-all" }}>
                なぜ「業務理解がある人」が、最強の内製化人材なのか？
              </h3>
              <p className="text-[12px] md:text-[13px] text-gray-600 font-bold leading-[1.7] mb-5" style={{ wordBreak: "keep-all" }}>
                外部のAI人材採用でも外注でも、内製化は進みません。「業務理解 × 実装力 × 修正サイクル」が同じ人に揃わないからです。
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-start bg-[#F4F7FB] rounded-lg p-4 border border-gray-100">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#1890FF] text-white font-black text-[13px] flex items-center justify-center">01</span>
                  <div>
                    <h4 className="font-black text-[13px] md:text-[14.5px] text-[#2A3875] mb-1" style={{ wordBreak: "keep-all" }}>
                      要件が最初から正確
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-gray-700 font-bold leading-[1.7]" style={{ wordBreak: "keep-all" }}>
                      現場で困る本人が設計するから「暗黙の業務前提」を抜け漏れなく言語化できる。仕様齟齬がそもそも存在しない。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-[#F4F7FB] rounded-lg p-4 border border-gray-100">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#1890FF] text-white font-black text-[13px] flex items-center justify-center">02</span>
                  <div>
                    <h4 className="font-black text-[13px] md:text-[14.5px] text-[#2A3875] mb-1" style={{ wordBreak: "keep-all" }}>
                      Claude Code が実装の壁を取り払った
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-gray-700 font-bold leading-[1.7]" style={{ wordBreak: "keep-all" }}>
                      自然言語の指示だけで実装できる今、発注者がそのまま実装者になれる。業務理解だけが希少資源として残る。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-[#F4F7FB] rounded-lg p-4 border border-gray-100">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#1890FF] text-white font-black text-[13px] flex items-center justify-center">03</span>
                  <div>
                    <h4 className="font-black text-[13px] md:text-[14.5px] text-[#2A3875] mb-1" style={{ wordBreak: "keep-all" }}>
                      修正サイクルが最短
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-gray-700 font-bold leading-[1.7]" style={{ wordBreak: "keep-all" }}>
                      担当者＝発注者＝実装者が一致。違和感があればその場で直せ、外注の数週間単位の往復がゼロになる。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-[#F4F7FB] rounded-lg p-4 border border-gray-100">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#1890FF] text-white font-black text-[13px] flex items-center justify-center">04</span>
                  <div>
                    <h4 className="font-black text-[13px] md:text-[14.5px] text-[#2A3875] mb-1" style={{ wordBreak: "keep-all" }}>
                      ノウハウが社内に残る
                    </h4>
                    <p className="text-[12px] md:text-[13px] text-gray-700 font-bold leading-[1.7]" style={{ wordBreak: "keep-all" }}>
                      外注は業務知識が社外に流出する。自ら作れば業務と実装の両方のノウハウが社内に蓄積し、2本目・3本目が加速する。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-gradient-to-br from-[#2A3875] to-[#5171C2] text-white rounded-lg p-4 md:p-5 text-center shadow-md">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] opacity-80 mb-1">CONCLUSION</p>
                <p className="text-[14px] md:text-[16px] font-black leading-[1.6]" style={{ wordBreak: "keep-all" }}>
                  <span className="text-[#FFE17A]">業務を知る社員に Claude Code を渡す</span>のが、最速で最強の内製化。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

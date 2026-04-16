"use client";

import React, { useEffect, useState } from "react";
import ClaudeCodeOverview from "@/components/ClaudeCodeOverview";
import VennDiagramSection from "@/components/VennDiagramSection";
import { renderWithTerms } from "@/components/renderWithTerms";

const POINTS = [
  {
    num: "01",
    title: "14日で「本番稼働するAIツール」を1本残す",
    list: [
      "修了時に残るのは学習証明書ではなく、自部署で本番稼働しているAIツール",
      "受講者の96%が14日以内に自部署業務へ本番導入（自社パイロット実績 n=128）"
    ]
  },
  {
    num: "02",
    title: "非エンジニア社員が「本番導入する側」に回る",
    list: [
      "営業・企画・事務職のままで、自部署の業務ツールを本番環境に届けられるように",
      "高騰するAI人材採用に頼らず、既存社員だけで本番導入を回せる体制に変わる"
    ]
  },
  {
    num: "03",
    title: "本番導入後も止まらない伴走支援",
    list: [
      "14日で導入したAIツールを現場で使い続けられるよう、専門メンターが定着まで支援",
      "2本目・3本目の本番導入も、社内だけで回せる状態まで仕組み化"
    ]
  }
];

const AiServiceStrengths: React.FC = () => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isVennOpen, setIsVennOpen] = useState(false);
  const anyModalOpen = isOverviewOpen || isVennOpen;

  useEffect(() => {
    if (anyModalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOverviewOpen(false);
          setIsVennOpen(false);
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [anyModalOpen]);

  return (
    <section className="bg-white py-10 md:py-24 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative">
          <span className="text-[13px] md:text-[14px] font-bold text-[#2563eb] tracking-[0.25em] mb-3 opacity-90 uppercase">
            Common Struggles
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black text-[#29034f] tracking-wide relative pb-5">
            こんなお悩みありませんか？
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-gradient-to-r from-[#2563eb] to-[#ff5c00] rounded-full opacity-80"></div>
          </h2>
        </div>

        {/* --- Top Area: Struggles (Desktop Grid, Mobile Flex) --- */}
        <div className="relative w-full max-w-5xl mx-auto mb-16">
          
          {/* Background bubbles decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none">
              <circle cx="150" cy="100" r="15" fill="#a0b0c0" />
              <circle cx="300" cy="250" r="8" fill="#a0b0c0" />
              <circle cx="800" cy="120" r="20" fill="#a0b0c0" />
              <circle cx="700" cy="300" r="12" fill="#a0b0c0" />
              <circle cx="200" cy="350" r="25" fill="#e0e0e0" />
              <circle cx="850" cy="300" r="30" fill="#e0e0e0" />
              <circle cx="500" cy="80" r="10" fill="#e0e0e0" />
            </svg>
          </div>

          {/* Flattened structure: Swipeable on mobile, Grid on desktop */}
          <div className="flex lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto] items-stretch lg:items-start justify-start lg:justify-center gap-4 lg:gap-x-6 lg:gap-y-6 relative z-10 overflow-x-auto pb-8 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 lg:scroll-p-0">
            
            {/* Bubble 1: Left Top */}
            <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-1 lg:row-start-1 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333] whitespace-nowrap">社内に作れる人がいない</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                {renderWithTerms("業務効率化のアイデアはあるのに、社内にエンジニアがおらずエクセルと手作業のまま")}
              </p>
              {/* Tail pointing towards center-right */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#f0f0f0]"></div>
            </div>

            {/* Bubble 2: Left Bottom */}
            <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-1 lg:row-start-2 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333] whitespace-nowrap">属人化して止まる</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                AI活用が一部社員に依存、退職・異動した瞬間に現場の業務が止まるリスクがある
              </p>
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#e8e8e8]"></div>
            </div>

            {/* Bubble 3: Center Top */}
            <div className="bg-[#ebebeb] rounded-xl p-5 relative shadow-sm w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-2 lg:row-start-1 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333] whitespace-nowrap">外注費が膨らむ一方</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                ボタン1つ追加するのに数十万円・数週間、軽微な修正でも毎回外注でコストがかさむ
              </p>
              <div className="hidden lg:block absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#ebebeb]"></div>
            </div>

            {/* SVG Illustration: Center Bottom */}
            <div className="relative w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-2 lg:row-start-2 h-48 flex items-center justify-center lg:mt-4">
              {/* Scribble background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" stroke="#b3b3b3" strokeWidth="3" className="w-48 h-48 opacity-70">
                  <path d="M50 20 C20 10, 10 40, 30 60 C50 80, 80 70, 70 40 C60 10, 20 20, 30 50 C40 80, 80 50, 50 20 Z" />
                  <path d="M30 30 C10 50, 40 80, 70 60 C100 40, 70 10, 50 30 C30 50, 50 90, 80 60" />
                  <circle cx="50" cy="50" r="40" stroke="#d9d9d9" strokeDasharray="5,5" />
                </svg>
              </div>
              {/* Human Silhouette */}
              <div className="relative z-10 text-black">
                <svg width="80" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="4" r="3" />
                  <path d="M12 8 C8 8, 5 10, 4 13 L8 14 L8 22 L11 22 L11 16 L13 16 L13 22 L16 22 L16 14 L20 13 C19 10, 16 8, 12 8 Z" />
                  <path d="M4 13 L1 10 M20 13 L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Bubble 4: Right Top */}
            <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-3 lg:row-start-1 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333] whitespace-nowrap">AI人材が採用できない</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                年収レンジを上げても採れない、採れても定着せず数ヶ月で辞めてしまう
              </p>
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#f0f0f0]"></div>
            </div>

            {/* Bubble 5: Right Bottom */}
            <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm w-[85vw] sm:w-[300px] lg:w-full flex-shrink-0 snap-center lg:snap-align-none lg:col-start-3 lg:row-start-2 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333] whitespace-nowrap">{renderWithTerms("PoCで止まる")}</h3>
              <p className="text-sm text-[#555] leading-relaxed flex-1">
                デモまでは作れても、現場で毎日使われるツールとして業務に載らないまま塩漬けに
              </p>
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#e8e8e8]"></div>
            </div>

          </div>
        </div>

        {/* --- Middle Banner: Solution Statement --- */}
        <div className="relative bg-[#1e5eb0] text-white py-6 md:py-8 text-center text-xl md:text-3xl font-bold tracking-wide shadow-md">
          そのお悩み、<span className="underline decoration-4 underline-offset-4">14日で本番導入する研修</span>がすべて解決します
          {/* Downward Triangle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-[#1e5eb0]"></div>
        </div>

        {/* --- Bottom Area: 3 Points --- */}
        <div className="pt-24 lg:pt-24 flex md:grid md:grid-cols-3 gap-6 lg:gap-12 relative px-4 sm:px-6 md:px-2 overflow-x-auto snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 md:scroll-p-0 pb-8 md:pb-0 -mx-4 sm:-mx-6 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {POINTS.map((point, index) => (
            <div key={index} className="flex flex-col relative z-10 pt-8 mt-4 md:mt-0 flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center md:snap-align-none">

              {/* Giant Background Number */}
              <div className="absolute top-[-50px] md:top-[-40px] left-1/2 -translate-x-1/2 text-[100px] lg:text-[130px] font-bold text-orange-400/20 md:text-orange-400/30 pointer-events-none tracking-tighter leading-none -z-10 font-sans">
                {point.num}
              </div>

              {/* POINT! Text */}
              <div className="text-center text-orange-500 text-xl font-bold italic tracking-widest mb-4 mt-6 md:mt-0 relative z-10">
                POINT!
              </div>

              {/* Point Title */}
              <h3 className="text-center text-[#333] text-[17px] md:text-lg font-bold mb-6 min-h-[3rem] flex items-center justify-center relative">
                <span className="relative z-10 pb-2 border-b-2 border-[#b3d4ff]">
                  {point.title}
                </span>
              </h3>

              {/* Point List */}
              <ul className="space-y-4">
                {point.list.map((item, i) => (
                  <li key={i} className="flex items-start text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                    <span className="text-[#2563eb] font-bold mr-2 mt-0.5">•</span>
                    <span>{renderWithTerms(item)}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* --- Info Triggers --- */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center mt-12 md:mt-16">
          <button
            type="button"
            onClick={() => setIsOverviewOpen(true)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-all shadow-sm hover:shadow-md text-[14px] md:text-[15px] font-bold cursor-pointer"
            aria-label="Claude Codeとは？ 詳細を開く"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="w-6 h-6 rounded-full bg-[#2563eb] group-hover:bg-white text-white group-hover:text-[#2563eb] flex items-center justify-center text-[13px] font-black leading-none transition-colors">
              i
            </span>
            <span>そもそも Claude Code とは？</span>
            <span className="text-[18px] leading-none">→</span>
          </button>

          <button
            type="button"
            onClick={() => setIsVennOpen(true)}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all shadow-sm hover:shadow-md text-[14px] md:text-[15px] font-bold cursor-pointer"
            aria-label="最強の内製化チームの条件を開く"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="w-6 h-6 rounded-full bg-[#FF6B00] group-hover:bg-white text-white group-hover:text-[#FF6B00] flex items-center justify-center text-[13px] font-black leading-none transition-colors">
              ?
            </span>
            <span>なぜ「業務 × Claude Code」が最強なのか？</span>
            <span className="text-[18px] leading-none">→</span>
          </button>
        </div>

      </div>

      {/* --- Claude Code Overview Modal --- */}
      {isOverviewOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsOverviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Claude Codeとは？"
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-4xl my-4 sm:my-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOverviewOpen(false)}
              className="absolute top-3 right-3 z-[100] w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-lg font-bold shadow-md cursor-pointer"
              aria-label="閉じる"
            >
              ×
            </button>
            <div className="overflow-hidden rounded-2xl [&>div]:py-8 md:[&>div]:py-10 [&>div]:mb-0">
              <ClaudeCodeOverview />
            </div>
          </div>
        </div>
      )}

      {/* --- Venn Diagram Modal --- */}
      {isVennOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setIsVennOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="なぜ業務 × Claude Code が最強なのか？"
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-4xl my-4 sm:my-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVennOpen(false)}
              className="absolute top-3 right-3 z-[100] w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 text-gray-700 text-lg font-bold shadow-md cursor-pointer"
              aria-label="閉じる"
            >
              ×
            </button>
            <div className="overflow-hidden rounded-2xl [&>section]:my-0 [&>section]:px-3 md:[&>section]:px-5 [&>section]:py-5 md:[&>section]:py-7 [&_.venn-card]:p-5 md:[&_.venn-card]:p-7">
              <VennDiagramSection />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AiServiceStrengths;

import React from "react";

const STRUGGLES = [
  {
    title: "開発が間に合わない",
    desc: "採用や外注を駆使しても、思ったペースで開発が進まない...",
    position: "left-top",
  },
  {
    title: "要件管理が大変",
    desc: "開発会社への仕様変更の指示や調整など、管理の手間がかかりすぎる",
    position: "right-top",
  },
  {
    title: "技術的負債が増える",
    desc: "一応動くものはできても、その後の運用で誰も中身を触れない",
    position: "left-bottom",
  },
  {
    title: "システム更新が面倒",
    desc: "ちょっとしたUI変更や機能追加が、地味に時間がかかって辛い...",
    position: "right-bottom",
  },
  {
    title: "バグで動かない",
    desc: "リリースを急ぐあまり、本番運用後にエラーが多発して品質が低い",
    position: "center-bottom", // Or center-left/right depending on layout
  }
];

const POINTS = [
  {
    num: "01",
    title: "Claude活用による実装コスト激減",
    list: [
      "既存のベンダー外注費用の最大80%を削減！",
      "要件定義から実装まで自社内で一貫した超高速開発を実現"
    ]
  },
  {
    num: "02",
    title: "的確なプロンプトによる品質と安定",
    list: [
      "エラーを生まないプロンプトの記述法を標準でレクチャー",
      "経験なしでも高品質で保守性の高いシステム構築が可能！"
    ]
  },
  {
    num: "03",
    title: "AIによるDevOps・テスト業務削減",
    list: [
      "コードレビューやバグ修正など、これまでの運用負荷を大幅に削減",
      "インフラ構築やデプロイ作業も、AI活用により日々アップデート！"
    ]
  }
];

const AiServiceStrengths: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-6 md:h-8 bg-[#333] block"></span>
          <h2 className="text-xl md:text-2xl font-bold text-[#666]">ZETT-AI（研修）の強み</h2>
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

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 relative z-10">
            
            {/* Left Column (2 bubbles) */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {/* Bubble: Left Top */}
              <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">開発が間に合わない</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  採用や外注を駆使しても、思ったペースで開発が進まない...
                </p>
                {/* Tail pointing towards center-right */}
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#f0f0f0]"></div>
              </div>
              
              {/* Bubble: Left Bottom */}
              <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">CVRが低い（バグ多発）</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  リリースを急ぐあまり、本番運用後に予期せぬエラーが多発する
                </p>
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#e8e8e8]"></div>
              </div>
            </div>

            {/* Center Column (1 bubble + Human SVG) */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-[32%]">
              {/* Bubble: Center Top */}
              <div className="bg-[#ebebeb] rounded-xl p-5 relative shadow-sm w-full">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">要件管理が大変</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  開発会社への仕様変更の指示や調整など、管理の手間がかかりすぎる
                </p>
                <div className="hidden lg:block absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#ebebeb]"></div>
              </div>

              {/* Human & Scribble Icon */}
              <div className="relative w-48 h-48 flex items-center justify-center mt-4">
                {/* Scribble background */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#b3b3b3" strokeWidth="3" className="w-full h-full opacity-70">
                    <path d="M50 20 C20 10, 10 40, 30 60 C50 80, 80 70, 70 40 C60 10, 20 20, 30 50 C40 80, 80 50, 50 20 Z" />
                    <path d="M30 30 C10 50, 40 80, 70 60 C100 40, 70 10, 50 30 C30 50, 50 90, 80 60" />
                    <circle cx="50" cy="50" r="40" stroke="#d9d9d9" strokeDasharray="5,5" />
                  </svg>
                </div>
                {/* Human Silhouette (Frustrated/Confused pose) */}
                <div className="relative z-10 text-black">
                  <svg width="80" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="4" r="3" />
                    <path d="M12 8 C8 8, 5 10, 4 13 L8 14 L8 22 L11 22 L11 16 L13 16 L13 22 L16 22 L16 14 L20 13 C19 10, 16 8, 12 8 Z" />
                    <path d="M4 13 L1 10 M20 13 L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column (2 bubbles) */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {/* Bubble: Right Top */}
              <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">技術的負債が増える</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  一応動くものはできても、中身がブラックボックス化し誰も触れない
                </p>
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#f0f0f0]"></div>
              </div>
              
              {/* Bubble: Right Bottom */}
              <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">システム更新が面倒</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  ちょっとしたUI変更や機能追加が、いちいち外注で時間がかかって辛い...
                </p>
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#e8e8e8]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* --- Middle Banner: Solution Statement --- */}
        <div className="relative bg-[#1e5eb0] text-white py-6 md:py-8 text-center text-xl md:text-3xl font-bold tracking-wide shadow-md">
          ZETT-AI は、すべてのお悩みを解決します。
          {/* Downward Triangle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-[#1e5eb0]"></div>
        </div>

        {/* --- Bottom Area: 3 Points --- */}
        <div className="pt-20 lg:pt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative px-2">
          {POINTS.map((point, index) => (
            <div key={index} className="flex flex-col relative z-10 pt-8">
              
              {/* Giant Background Number */}
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[100px] lg:text-[130px] font-bold text-[#e1effc] opacity-60 pointer-events-none tracking-tighter leading-none -z-10 font-sans">
                {point.num}
              </div>

              {/* POINT! Text */}
              <div className="text-center text-[#2563eb] text-xl font-bold italic tracking-widest mb-4">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiServiceStrengths;

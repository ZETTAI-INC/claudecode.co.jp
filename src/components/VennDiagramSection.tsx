import React from 'react';

export default function VennDiagramSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto my-24 px-4 md:px-8">
      {/* Background Container - Deep Blue like the image */}
      <div className="w-full bg-[#2A3875] rounded-[2rem] p-6 md:p-12 relative overflow-hidden shadow-2xl font-sans">
        
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
            <span className="text-white font-bold tracking-widest text-[14px] md:text-[16px]">特長：技術力</span>
          </div>

          {/* Left Text Column */}
          <div className="w-full xl:w-[26%] flex flex-col gap-8 text-white relative z-20">
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">課題発見の解像度が高い</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                現場の無駄などを肌で感じており、何を改修すべきか具体的なアイデアや要件定義能力を持っている。
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">しかし、実装力がない</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                プログラミング技術がないため、せっかくのアイデアも外注・開発部門待ちになり、コストも時間もかかり放置される。
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
              <span className="text-[#1E3A8A] text-lg md:text-[22px] font-black tracking-widest leading-snug">業務理解<br/>がある人材</span>
              <span className="text-black font-bold text-[10.5px] md:text-[12.5px] leading-relaxed tracking-wide">本質的な課題を発見し<br/>理想の業務フローを描ける</span>
            </div>

            {/* Center Intersection Content (Width: 37% of the viewBox) */}
            <div className="absolute left-[35%] w-[30%] h-full flex flex-col items-center justify-center text-center z-20 gap-2">
              <span className="text-white text-[20px] md:text-[28px] font-black tracking-widest leading-tight drop-shadow-md">最強の<br/>DX人材</span>
            </div>

            {/* Right Circle Content (Width: 31% of the viewBox) */}
            <div className="absolute right-[1.5%] w-[30%] h-full flex flex-col items-center justify-center text-center z-10 gap-2">
              <span className="text-[#1E3A8A] text-lg md:text-[22px] font-black tracking-widest leading-snug">AIが使える<br/>人材</span>
              <span className="text-black font-bold text-[10.5px] md:text-[12.5px] leading-relaxed tracking-wide">最新のAIツールを活用し<br/>アイデアを即座に形にできる</span>
            </div>
            
          </div>

          {/* Right Text Column */}
          <div className="w-full xl:w-[26%] flex flex-col gap-8 text-white relative z-20">
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">爆速の実装力</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                Claude Codeをはじめとする最新の生成AIを使いこなし、自然言語を用いた指示で必要なシステムを瞬時に作り上げる。
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-[22px] font-black mb-3 tracking-wide">現場乖離のリスク</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] opacity-90 font-bold tracking-wide">
                現場のリアルで泥臭い業務への理解がないと、技術的に優れていても「誰も使わない的外れなツール」を作ってしまう。
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
            研修によって業務担当者が自ら実装まで完結
          </div>
        </div>

      </div>
    </section>
  );
}

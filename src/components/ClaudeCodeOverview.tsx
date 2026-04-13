"use client";

import React, { useRef } from 'react';

const cards = [
  { title: "プロンプト設計", icon: "architecture" },
  { title: "自社データ連携(RAG)", icon: "dataset" },
  { title: "自律AIエージェント", icon: "psychology" },
  { title: "業務自動化(RPA+AI)", icon: "account_tree" },
  { title: "社内AIツール開発", icon: "integration_instructions" },
  { title: "API・システム連携", icon: "hub" },
  { title: "高度なデータ分析", icon: "query_stats" },
  { title: "エラー解決・デバッグ", icon: "troubleshoot" },
  { title: "セキュリティ設計", icon: "gpp_good" },
  { title: "運用・定着ノウハウ", icon: "model_training" },
];

export default function ClaudeCodeOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280; // approximate width of 2 cards
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white py-16 font-sans select-none mb-10 border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-5 mb-10 text-center">
        <p className="text-blue-600 font-bold text-xs mb-2 tracking-widest uppercase">Overview</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">CLAUDE CODEとは？</h2>
        <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-2xl mx-auto max-w-4xl text-gray-800 font-bold leading-relaxed text-sm md:text-base border border-gray-100 shadow-sm">
          非エンジニアでも圧倒的な成果を出せる、全く新しい企業向けの実践型AIリスキリング研修です。<br className="hidden md:block"/>
          最新AIスキルの習得・実務課題の直接的な解決・内製化支援のワンストップ提供により、貴社の事業拡大を強力に後押しします。
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-10">
        <div className="min-w-[1000px] max-w-[1100px] mx-auto px-5 relative pt-4">
          
          {/* Main Title Area */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
              AI内製化とグロースに必要な
            </h3>
            <div className="bg-[#005ebb] text-white py-3 shadow-md mx-10">
              <p className="text-2xl font-bold tracking-wider">
                機能・業務・ノウハウをワンストップでサービス提供
              </p>
            </div>
          </div>

          <div className="relative mt-10 px-4 flex items-center justify-between">
             {/* Left Arrow Button */}
             <button 
               onClick={() => slide('left')}
               className="w-12 h-16 bg-gray-700/90 rounded flex justify-center items-center text-white shadow-xl z-20 cursor-pointer hover:bg-gray-800 transition-colors hover:scale-105 active:scale-95"
               aria-label="前へスライド"
             >
                <span className="material-icons-outlined text-4xl">chevron_left</span>
             </button>

             {/* Center Content Component */}
             <div className="flex-1 max-w-[900px] mx-auto relative px-2 overflow-hidden">
                 
                 {/* Slidable Cards Row - tucked behind foundation */}
                 <div 
                   ref={scrollRef}
                   className="flex gap-4 px-2 relative z-0 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 pt-2 snap-x snap-mandatory" 
                   style={{ marginBottom: '-10px' }}
                 >
                   {cards.map((card, idx) => (
                     <div key={idx} className="relative min-w-[140px] h-[130px] group snap-start flex-shrink-0">
                        {/* Fake Shadow Layers */}
                        <div className="absolute top-[-8px] -right-[6px] w-[calc(100%-8px)] h-[calc(100%-10px)] bg-[#d1d5db] rounded-t border-t border-r border-[#9ca3af] transition-transform duration-300 group-hover:-translate-y-2"></div>
                        <div className="absolute top-[-4px] -right-[3px] w-[calc(100%-4px)] h-[calc(100%-5px)] bg-[#e5e7eb] rounded-t border-t border-r border-[#d1d5db] transition-transform duration-300 group-hover:-translate-y-1"></div>
                        
                        {/* Actual Card */}
                        <div className="absolute top-0 right-0 w-full h-[120px] bg-white border border-gray-300 rounded-t flex flex-col items-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                           <div className="w-full bg-[#003b73] text-white text-center text-[11px] font-bold py-2 border-b border-[#003b73]">
                              {card.title}
                           </div>
                           <div className="flex-1 flex justify-center items-center w-full bg-white">
                              <span className="material-icons-outlined text-[46px] text-[#003b73] group-hover:scale-110 transition-transform">{card.icon}</span>
                           </div>
                        </div>
                     </div>
                   ))}
                   
                   {/* Spacing element at the end to ensure the last card isn't cut off visually */}
                   <div className="min-w-[4px] h-full flex-shrink-0"></div>
                 </div>

                 {/* Foundation Layer - Overlaps cards */}
                 <div className="relative bg-[#003b73] w-full text-white pt-5 pb-5 shadow-2xl z-10 border border-[#002a52]">
                    {/* Internal Horizontal Divider */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/20"></div>
                    
                    <div className="relative text-center text-[15px] font-bold tracking-[0.2em] leading-[30px] h-16 flex flex-col justify-between">
                       <div className="mt-[-2px]">実践的AI実装基盤（Claude / Cursor / ChatGPT）</div>
                       <div className="mb-[-2px]">要件定義スキル ／ プロジェクト推進体制</div>
                    </div>

                    {/* Left Logo Overlay Button-style */}
                    <div className="absolute left-[-2%] md:left-[3%] top-1/2 -translate-y-1/2 bg-white text-gray-900 border-[3px] border-blue-500 rounded-[24px] px-5 py-2 font-bold shadow-xl flex items-center gap-2 transform">
                       <div className="w-7 h-7 bg-blue-600 rounded flex justify-center items-center text-white text-sm font-black shadow-inner">
                         C
                       </div>
                       <span className="text-base font-black tracking-tight cursor-default">CLAUDE CODE</span>
                    </div>
                 </div>
             </div>

             {/* Right Arrow Button */}
             <button 
               onClick={() => slide('right')}
               className="w-12 h-16 bg-gray-700/90 rounded flex justify-center items-center text-white shadow-xl z-20 cursor-pointer hover:bg-gray-800 transition-colors hover:scale-105 active:scale-95"
               aria-label="次へスライド"
             >
                <span className="material-icons-outlined text-4xl">chevron_right</span>
             </button>
          </div>
          
          <div className="text-center mt-6 text-gray-400 text-xs font-bold w-full mx-auto max-w-[900px] flex justify-end px-12">
             <span>※矢印をクリックしてスライド</span>
          </div>

        </div>
      </div>
    </div>
  );
}

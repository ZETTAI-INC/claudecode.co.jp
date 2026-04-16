import React from "react";

// --- Custom Arrow Components for Desktop ---
const StartStep: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="relative flex items-center justify-center pl-4 pr-8 py-3 h-[54px] text-[13px] font-bold bg-[#D3E5FD] text-gray-800 tracking-wide flex-1"
    style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)" }}
  >
    {children}
  </div>
);

const MidStep: React.FC<{ children: React.ReactNode; isDark?: boolean; zIndex: number }> = ({ children, isDark = false, zIndex }) => (
  <div
    className={`relative flex items-center justify-center pl-8 pr-8 py-3 h-[54px] text-[13px] font-bold tracking-wide flex-1 ${
      isDark ? "bg-[#1890FF] text-white" : "bg-[#D3E5FD] text-gray-800"
    }`}
    style={{
      clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)",
      marginLeft: "-10px",
      zIndex: zIndex,
    }}
  >
    {children}
  </div>
);

const EndStep: React.FC<{ children: React.ReactNode; isDark?: boolean; zIndex: number }> = ({ children, isDark = false, zIndex }) => (
  <div
    className={`relative flex items-center justify-center pl-8 pr-4 py-3 h-[54px] text-[13px] font-bold tracking-wide flex-1 ${
      isDark ? "bg-[#1890FF] text-white" : "bg-[#D3E5FD] text-gray-800"
    }`}
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)",
      marginLeft: "-10px",
      zIndex: zIndex,
    }}
  >
    {children}
  </div>
);

// Mobile Fallback Components (Simple rectangles with arrows)
const MobileStep: React.FC<{ children: React.ReactNode; isDark?: boolean }> = ({ children, isDark = false }) => (
  <div className={`w-full py-3 px-4 text-center text-sm font-bold rounded-sm ${isDark ? "bg-[#1890FF] text-white shadow-md" : "bg-[#D3E5FD] text-gray-800"}`}>
    {children}
  </div>
);

export default function DevelopmentSpeedComparison() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans text-[#333]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="border-b-[1.5px] border-gray-300 pb-2 mb-6 md:mb-8 flex justify-between items-end">
          <h2 className="text-[17px] md:text-xl font-bold tracking-wide text-gray-800 relative">
            研修の強み：未経験からの最短学習
            {/* Short horizontal line decoration */}
            <div className="absolute -bottom-[3px] left-0 w-16 h-[3px] bg-[#1890FF]"></div>
          </h2>
          <div className="text-[#1890FF] font-black text-sm md:text-base tracking-widest leading-none hidden sm:block">
            Claude Code
          </div>
        </div>

        <div className="mb-10 md:mb-12 text-[14.5px] md:text-[16px] font-bold text-gray-700 leading-[1.9] tracking-wide">
          私たちの強みは、
          <span 
            className="text-[#1890FF] font-black text-[16px] md:text-[18px] mx-1 px-1"
            style={{ WebkitTextEmphasis: "filled circle #1890FF", textEmphasis: "filled circle #1890FF" }}
          >
            「再現性のある最短工数の教育」
          </span>
          です。<br className="hidden md:block" />
          <p className="mt-3 md:mt-4">
            Render、Supabase、Antigravityなど多様なツールがある中で、
            <span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] text-gray-900 mx-0.5">最も初心者が使いやすいツールを厳選</span>
            してフル活用。<br className="hidden md:block" />
            実践の前に必要な専門用語をあらかじめ覚えてから進めるため、
            <span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] text-gray-900 mx-0.5">非エンジニア・未経験者でも途中で挫折しない</span>
            分かりやすい内容になっています。
          </p>
        </div>

        {/* --- Diagram Area --- */}
        <div className="bg-[#F6F7F9] rounded-xl pt-10 pb-2 md:pt-14 md:pb-0 overflow-hidden shadow-sm border border-gray-100">
          
          <div className="px-4 md:px-10">
            {/* Desktop View (> md) */}
            <div className="hidden md:block relative">
              
              {/* Top Row: Traditional Development */}
              <div className="flex items-center w-full relative z-20">
                <div className="flex w-[82%]">
                  <StartStep>HTML/CSS</StartStep>
                  <MidStep zIndex={10}>JavaScript基礎</MidStep>
                  <MidStep zIndex={9}>Reactフレームワーク</MidStep>
                  <MidStep zIndex={8}>バックエンド言語</MidStep>
                  <MidStep zIndex={7}>データベース構築</MidStep>
                  <MidStep zIndex={6}>実務開始</MidStep>
                </div>
                <div className="w-[18%] flex items-baseline justify-end gap-1 font-bold text-gray-800 pl-4">
                  <span>約</span>
                  <span className="text-[40px] leading-none font-black tracking-tighter">6</span>
                  <span className="text-xl">ヶ月</span>
                </div>
              </div>

              {/* Middle Section: Connecting lines & Text */}
              <div className="relative h-[110px] w-full flex items-center justify-center my-1 z-10 w-[82%]">
                {/* Connecting Line Shape */}
                <div className="absolute top-[5px] left-0 w-full h-[100px]">
                  {/* Horizontal line */}
                  <div className="absolute top-0 left-[16%] right-[16%] h-[2px] bg-[#1890FF]"></div>
                  {/* Left vertical drop */}
                  <div className="absolute top-0 left-[16%] w-[2px] h-[30px] bg-[#1890FF]"></div>
                  {/* Right vertical drop with arrow */}
                  <div className="absolute top-0 right-[16%] w-[2px] h-[90px] bg-[#1890FF]"></div>
                  <div className="absolute top-[85px] right-[16%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1890FF] -translate-x-[5px]"></div>
                </div>
                
                {/* Text in the middle */}
                <div className="bg-[#F6F7F9] z-20 px-8 py-2 text-center -mt-6">
                  <div className="text-[13px] font-bold text-gray-600 tracking-wide mb-1">
                    徹底的に必要最低限へ絞り込むことで
                  </div>
                  <div className="font-bold text-gray-800 flex items-baseline justify-center gap-2">
                    <span className="text-[46px] font-black text-[#1890FF] leading-none tracking-tighter">1/10</span>
                    <span className="text-base tracking-widest">へ学習期間を圧縮</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Internal Development */}
              <div className="flex items-center w-full relative z-20 pb-10">
                <div className="flex w-[82%]">
                  <div className="w-1/3">
                    <StartStep>Claude Code基本操作</StartStep>
                  </div>
                  <div className="w-2/3">
                    <EndStep isDark zIndex={5}>
                      <span className="tracking-widest">プロンプト設計(要件定義)とエラー解決に特化</span>
                    </EndStep>
                  </div>
                </div>
                <div className="w-[18%] flex items-baseline justify-end gap-1 font-bold text-gray-800 pl-4">
                  <span>約</span>
                  <span className="text-[46px] leading-none text-[#1890FF] font-black tracking-tighter">14</span>
                  <span className="text-xl">日</span>
                </div>
              </div>

            </div>

            {/* Mobile View (< md) */}
            <div className="block md:hidden pb-10">
              
              <div className="mb-8">
                <div className="text-sm font-bold text-gray-500 mb-3 ml-1">▼ 従来のプログラミング学習</div>
                <div className="flex flex-col gap-1.5">
                  <MobileStep>HTML/CSS・JSなどの基礎</MobileStep>
                  <MobileStep>フレームワークやバックエンド・DB構築</MobileStep>
                  <MobileStep>実務で使えるレベルへ到達</MobileStep>
                </div>
                <div className="text-right font-black text-2xl text-gray-800 mt-2">
                  <span className="text-sm font-bold mr-1">約</span>6ヶ月
                </div>
              </div>

              <div className="flex flex-col items-center justify-center my-8 text-center relative">
                <div className="w-[2px] h-10 bg-[#1890FF] absolute -top-8 left-1/2 -translate-x-1/2"></div>
                <div className="text-xs font-bold text-gray-600 mb-1">徹底的に必要最低限へ絞り込むことで</div>
                <div className="font-bold text-lg text-gray-800">
                  <span className="text-4xl font-black text-[#1890FF] tracking-tighter mr-1">1/10</span>
                  へ圧倒的圧縮
                </div>
                <div className="w-[2px] h-10 bg-[#1890FF] absolute -bottom-10 left-1/2 -translate-x-1/2">
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1890FF]"></div>
                </div>
              </div>

              <div className="mt-14">
                <div className="text-sm font-bold text-[#1890FF] mb-3 ml-1">▼ Claude Code 最短研修</div>
                <div className="flex flex-col gap-1.5">
                  <MobileStep>Claude Code 基本操作</MobileStep>
                  <MobileStep isDark>プロンプト設計とエラー解決に特化</MobileStep>
                </div>
                <div className="text-right font-black text-3xl text-[#1890FF] mt-2">
                  <span className="text-sm font-bold text-gray-800 mr-1">わずか約</span>14日
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Blue Strip */}
          <div className="w-full bg-[#1890FF] text-white text-center py-4 px-4 font-bold text-[14px] md:text-base tracking-wide shadow-inner">
            学ぶべきことを極限まで絞ることで、非エンジニア・未経験者でも途中で挫折させません
          </div>

        </div>

        {/* --- Logic Section (Why 14 days is possible) --- */}
        <div className="mt-12 md:mt-16 bg-[#F8FBFF] border border-[#D3E5FD] rounded-xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1890FF] opacity-[0.03] rounded-bl-full pointer-events-none"></div>

          <h3 className="text-center text-[18px] md:text-[22px] font-black text-gray-800 mb-8 tracking-tight relative z-10 flex flex-col items-center gap-2">
            <span className="text-[#1890FF] text-[12px] md:text-[13px] tracking-[0.15em] font-bold">WHY IS IT POSSIBLE?</span>
            なぜ「14日で本番公開」が可能なのか？
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 relative z-10">
            
            {/* Box 1: Why it was impossible */}
            <div className="bg-white rounded-lg p-5 lg:p-6 border border-gray-100 shadow-sm relative mt-2 md:mt-0">
              <div className="absolute -top-3 left-4 bg-gray-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wider">
                従来なぜ無理だったか
              </div>
              <h4 className="text-[14px] lg:text-[15px] font-bold text-gray-800 mt-2 mb-3 border-b pb-2 border-gray-100 leading-[1.6]">
                すべて「人間が書く」必要があった
              </h4>
              <p className="text-[13px] lg:text-[13.5px] text-gray-600 leading-[1.9] font-medium">
                言語の文法、環境構築の手順、アルゴリズム設計などをすべて人間が暗記し、ゼロから書く必要があったため、習得に膨大な時間がかかっていました。
              </p>
            </div>

            {/* Box 2: Why it's possible now */}
            <div className="bg-white rounded-lg p-5 lg:p-6 border border-[#E6F0FF] shadow-[0_4px_15px_rgba(24,144,255,0.06)] relative border-b-[3px] border-b-[#1890FF] mt-4 md:mt-0">
              <div className="absolute -top-3 left-4 bg-[#1890FF] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wider">
                なぜ今回できるのか（構造の違い）
              </div>
              <h4 className="text-[14px] lg:text-[15px] font-bold text-[#1890FF] mt-2 mb-3 border-b pb-2 border-blue-50 leading-[1.6]">
                人間は「指示・管理」に専念する
              </h4>
              <p className="text-[13px] lg:text-[13.5px] text-gray-700 leading-[1.9] font-medium">
                コード記述はAI（Claude Code）が正確に行います。人間は「要件の指示」と「エラー対応」を行う<span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] font-bold">マネージャー役に回る</span>ため、スピードが圧倒的です。
              </p>
            </div>

            {/* Box 3: What "can do" means */}
            <div className="bg-white rounded-lg p-5 lg:p-6 border border-[#E6F0FF] shadow-sm relative mt-4 md:mt-0">
              <div className="absolute -top-3 left-4 bg-[#1890FF] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wider">
                どこまでを「できる」とするか
              </div>
              <h4 className="text-[14px] lg:text-[15px] font-bold text-[#1890FF] mt-2 mb-3 border-b pb-2 border-blue-50 leading-[1.6]">
                自部署で使える「実用ツール」稼働
              </h4>
              <p className="text-[13px] lg:text-[13.5px] text-gray-700 leading-[1.9] font-medium">
                「複雑な大規模システム」を作る魔法ではありません。自部署の課題を解決する単一の便利ツールがエラーなく<span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] font-bold">実業務で本番利用できている状態</span>をゴールとしています。
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

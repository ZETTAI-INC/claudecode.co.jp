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
      <div className="max-w-[1000px] mx-auto">
        
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

        <div className="mb-10 md:mb-12 text-[14px] md:text-base font-bold text-gray-700 leading-[1.8] tracking-wide">
          従来のプログラミング研修にあった不要な工程を削ぎ落とし、学習期間を従来比で<span className="text-[#1890FF] mx-1">1/10以下</span>へ圧倒的に圧縮。<br className="hidden md:block" />
          必要最低限の「AIへの指示とエラー対処」に特化することで、非エンジニア・未経験者でも挫折せずに最短での自走が可能になります。
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

      </div>
    </section>
  );
}

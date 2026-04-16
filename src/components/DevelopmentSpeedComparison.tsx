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
            14日で本番導入できる理由
            {/* Short horizontal line decoration */}
            <div className="absolute -bottom-[3px] left-0 w-16 h-[3px] bg-[#1890FF]"></div>
          </h2>
          <div className="text-[#1890FF] font-black text-sm md:text-base tracking-widest leading-none hidden sm:block">
            Claude Code
          </div>
        </div>

        <div className="mb-10 md:mb-12 text-[14.5px] md:text-[16px] font-bold text-gray-700 leading-[1.9] tracking-wide">
          本研修の核は、
          <span
            className="text-[#1890FF] font-black text-[16px] md:text-[18px] mx-1 px-1"
            style={{ WebkitTextEmphasis: "filled circle #1890FF", textEmphasis: "filled circle #1890FF" }}
          >
            「14日で本番導入まで届かせる最短工程」
          </span>
          です。<br className="hidden md:block" />
          <p className="mt-3 md:mt-4">
            Render、Supabase、Antigravityなど多様なツールの中から、
            <span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] text-gray-900 mx-0.5">本番導入まで最短で届くツールだけを厳選</span>
            。<br className="hidden md:block" />
            文法学習ではなく「要件を本番環境に届けるための動き方」に絞り込むから、
            <span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] text-gray-900 mx-0.5">非エンジニアでも14日で本番導入に到達</span>
            できます。
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
                    本番導入に不要な工程をすべて削ぎ落とし
                  </div>
                  <div className="font-bold text-gray-800 flex items-baseline justify-center gap-2">
                    <span className="text-[46px] font-black text-[#1890FF] leading-none tracking-tighter">1/10</span>
                    <span className="text-base tracking-widest">の期間で本番導入へ到達</span>
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
                      <span className="tracking-widest">要件定義・実装・本番デプロイに特化</span>
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

              <div className="flex flex-col items-center justify-center mt-12 mb-16 text-center relative">
                <div className="w-[2px] h-12 bg-[#1890FF] absolute -top-12 left-1/2 -translate-x-1/2"></div>
                <div className="text-xs font-bold text-gray-600 mb-2 px-2">本番導入に不要な工程をすべて削ぎ落とし</div>
                <div className="font-bold text-lg text-gray-800">
                  <span className="text-5xl font-black text-[#1890FF] tracking-tighter mr-1">1/10</span>
                  <span className="text-sm">の期間で本番導入</span>
                </div>
                <div className="w-[2px] h-12 bg-[#1890FF] absolute -bottom-14 left-1/2 -translate-x-1/2">
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1890FF]"></div>
                </div>
              </div>

              <div className="mt-14">
                <div className="text-sm font-bold text-[#1890FF] mb-3 ml-1">▼ 14日で本番導入する研修</div>
                <div className="flex flex-col gap-1.5">
                  <MobileStep>Claude Code 基本操作</MobileStep>
                  <MobileStep isDark>要件定義・実装・本番デプロイに特化</MobileStep>
                </div>
                <div className="text-right font-black text-3xl text-[#1890FF] mt-2">
                  <span className="text-sm font-bold text-gray-800 mr-1">わずか約</span>14日
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Blue Strip */}
          <div className="w-full bg-[#1890FF] text-white text-center py-5 px-4 font-bold text-[14.5px] md:text-base tracking-wide shadow-inner mt-4 md:mt-0">
            本番導入に関係ない工程を切り落とすから、<br className="block sm:hidden" />非エンジニアでも14日で本番環境まで到達できる
          </div>

        </div>

        {/* --- Logic Section (Why 14 days is possible) --- */}
        <div className="mt-16 md:mt-24 bg-gradient-to-b from-white to-[#F8FBFF] rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(24,144,255,0.04)] border border-[#E6F0FF] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1890FF] opacity-[0.02] rounded-bl-full pointer-events-none blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B00] opacity-[0.02] rounded-tr-full pointer-events-none blur-3xl"></div>

          <h3 className="text-center text-[20px] md:text-[26px] font-black text-gray-800 mb-12 tracking-tight relative z-10 flex flex-col items-center gap-3">
            <span className="inline-block bg-[#1890FF]/10 text-[#1890FF] text-[12px] md:text-[13px] tracking-[0.15em] font-black px-4 py-1.5 rounded-full">WHY IS IT POSSIBLE?</span>
            <span>なぜ<span className="text-[26px] md:text-[34px] text-[#1890FF] mx-1">14日</span>で本番導入が可能なのか？</span>
          </h3>
          
          <div className="flex flex-col gap-6 md:gap-8 relative z-10 w-full max-w-[1000px] mx-auto">
            
            {/* Comparison Row: Past vs Present */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Box 1: Why it was impossible */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-[2px] border-gray-200 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="inline-block bg-gray-100 text-gray-500 text-[13px] font-black px-4 py-1.5 rounded-full mb-5 w-max tracking-wide">
                  従来はなぜ本番導入に届かなかったか
                </div>
                <h4 className="text-[17px] md:text-[19px] font-black text-gray-800 leading-relaxed mb-4 pb-4 border-b-2 border-gray-100">
                  コードもデプロイも<br/>「<span className="text-[#FF6B00]">人間が全部書く</span>」必要があった
                </h4>
                <p className="text-[13.5px] md:text-[14.5px] text-gray-600 leading-[1.8] font-bold">
                  言語の文法、環境構築、デプロイ設定までを人間が暗記して書き切る必要があり、非エンジニアが本番導入に到達するまでに数ヶ月〜数年かかっていました。
                </p>
              </div>

              {/* Box 2: Why it's possible now */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border-[2.5px] border-[#1890FF] shadow-[0_8px_30px_rgba(24,144,255,0.12)] flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1890FF]/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="inline-block bg-[#1890FF]/10 text-[#1890FF] text-[13px] font-black px-4 py-1.5 rounded-full mb-5 w-max tracking-wide">
                  なぜ今は14日で本番導入できるのか
                </div>
                <h4 className="text-[17px] md:text-[19px] font-black text-gray-900 leading-relaxed mb-4 pb-4 border-b-2 border-blue-50 relative z-10">
                  実装は<span className="text-[#1890FF]">AI</span>に任せ、人間は<br/>「<span className="text-[#1890FF]">本番に届ける</span>」設計と判断に集中する
                </h4>
                <p className="text-[13.5px] md:text-[14.5px] text-gray-700 leading-[1.8] font-bold relative z-10">
                  コード記述とデプロイ作業はClaude Codeが担います。人間は要件の言語化とエラー判断という<span className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom pb-[1px] font-black mx-0.5">本番導入の最終工程</span>だけに集中するため、14日で本番まで届きます。
                </p>
              </div>

            </div>

            {/* Bottom Row: Definition of Success */}
            <div className="bg-[#1E3A8A] rounded-2xl p-6 md:p-8 border border-[#1E3A8A] shadow-md flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative overflow-hidden mt-2">
              <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:16px_16px] pointer-events-none"></div>
              
              <div className="shrink-0 relative z-10">
                <div className="inline-block bg-white/20 text-white text-[13px] font-black px-4 py-1.5 rounded-full tracking-wide">
                  「本番導入できた」の定義
                </div>
              </div>
              
              <div className="flex-1 relative z-10">
                <h4 className="text-[16px] md:text-[18px] font-black text-white leading-relaxed mb-3">
                  自部署で毎日使われる業務ツールが、<span className="text-[#FFD700]">本番環境で動いている状態</span>
                </h4>
                <p className="text-[13px] md:text-[14px] text-white/80 leading-[1.8] font-bold">
                  大規模基幹システムの構築ではありません。自部署の課題を解決する1本の業務ツールがエラーなく本番環境で日次運用されている状態を、14日後のゴールとしています。
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

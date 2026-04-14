import React from "react";

export default function TargetAudience() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans text-[#333]">
      <div className="max-w-[1040px] mx-auto">
        
        {/* --- Header Section --- */}
        <div className="border-b-[1.5px] border-gray-300 pb-2 mb-6 md:mb-8 flex justify-between items-end">
          <h2 className="text-xl md:text-[22px] font-bold tracking-wide text-gray-800 relative">
            ターゲット層と提供価値
            <div className="absolute -bottom-[3px] left-0 w-16 h-[3px] bg-[#1890FF]"></div>
          </h2>
        </div>

        <div className="mb-14 md:mb-20 text-[15px] md:text-base font-bold text-gray-700 leading-[1.8] tracking-wide">
          ITリソース不足・高額な外注費・属人化 ── 
          <span className="md:hidden"><br /></span>現場が抱える深刻な課題を、「AIによる圧倒的な内製化」でスマートに解決します。
        </div>

        {/* --- Main Content Area --- */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between w-full">
          
          {/* --- Left Diagram (Labels + Pyramid) --- */}
          <div className="flex w-full md:w-[45%] max-w-[400px] mx-auto md:mx-0 h-[320px] md:h-[380px] relative z-10 mb-8 md:mb-0">
            
            {/* Vertical Needs Labels (Left side of pyramid) */}
            <div className="w-[68px] md:w-[76px] h-full flex flex-col text-[11px] md:text-xs font-bold text-gray-600 bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
              {/* Top Level */}
              <div className="flex-1 flex items-center justify-center text-center px-1 bg-[#F5F7FA]">
                <span className="writing-vertical-rl text-gray-500">フルスクラッチ<br/>大規模開発</span>
              </div>
              
              {/* Mid Level (Highlighted) */}
              <div className="flex-1 flex items-center justify-center text-center px-1 bg-[#1890FF] text-white relative shadow-md z-10 border-y border-[#0f7add]">
                <span className="writing-vertical-rl tracking-widest text-[13px] md:text-[14px] font-black">スピード・柔軟な内製化</span>
              </div>
              
              {/* Bottom Level */}
              <div className="flex-1 flex items-center justify-center text-center px-1 bg-[#F5F7FA]">
                <span className="writing-vertical-rl text-gray-500">既製SaaSの利用</span>
              </div>
            </div>

            {/* Space between labels and pyramid */}
            <div className="w-3 md:w-5"></div>

            {/* Pyramid */}
            <div className="flex-1 h-full relative group">
              {/* Pyramid Background Shapes (Clipped) */}
              <div 
                className="absolute inset-0 w-full h-full flex flex-col overflow-hidden" 
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
              >
                <div className="h-[30%] bg-[#E8EAEF] w-full"></div>
                <div className="h-[40%] bg-[#1890FF] w-full"></div>
                <div className="h-[30%] bg-[#E8EAEF] w-full"></div>
                {/* Thin white gap lines to separate sections */}
                <div className="absolute top-[30%] left-0 w-full h-[3px] bg-white"></div>
                <div className="absolute top-[70%] left-0 w-full h-[3px] bg-white"></div>
              </div>
              
              {/* Pyramid Text Content (Unclipped) */}
              <div className="absolute inset-0 w-full h-full flex flex-col z-10 pointer-events-none">
                {/* Top Level (Enterprise) */}
                <div className="h-[30%] flex items-end justify-center pb-2">
                  <span className="font-bold text-gray-600 text-[11px] sm:text-[12px] md:text-[13px] tracking-widest mb-1 md:mb-2">エンタープライズ</span>
                </div>
                
                {/* Mid Level (Target) - Highlights */}
                <div className="h-[40%] flex flex-col items-center justify-center relative">
                  <span className="font-black text-white text-[16px] md:text-[19px] tracking-widest text-center leading-tight drop-shadow-md">中小企業<br/>スタートアップ</span>
                  {/* Decorative highlight line inside */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40%] h-[2px] bg-white/40 rounded-full"></div>
                </div>
                
                {/* Bottom Level (Small/Solo) */}
                <div className="h-[30%] flex items-center justify-center">
                  <span className="font-bold text-gray-500 text-[11px] sm:text-[13px] md:text-[15px] tracking-normal md:tracking-wide">個人事業・小規模</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Connector Polygon (Desktop Only) --- */}
          {/* This connects the mid-section of the pyramid to the info box */}
          <div className="hidden md:block absolute left-[45%] top-0 w-[5%] h-full z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 380">
              <defs>
                <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1890FF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1890FF" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <polygon points="0,114 100,0 100,380 0,266" fill="url(#connectorGrad)" />
            </svg>
          </div>

          {/* --- Mobile downward arrow (Mobile Only) --- */}
          <div className="md:hidden flex justify-center w-full my-4">
             <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#1890FF] opacity-30"></div>
          </div>

          {/* --- Right Info Box --- */}
          <div className="w-full md:w-[50%] border-[2px] border-[#1890FF] bg-white relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col rounded-sm overflow-hidden min-h-[320px] md:min-h-0">
            {/* Box Header */}
            <div className="bg-[#1890FF] text-white text-center py-4 font-bold text-[16px] md:text-lg tracking-wider shadow-sm">
              Claude Code研修のターゲット層と提供価値
            </div>

            {/* Box Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1 bg-[#FAFAFA]">
              
              {/* Target Needs */}
              <div className="mb-8">
                <h4 className="text-[#1890FF] font-bold text-[16px] md:text-[18px] flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l7 14h-14l7-14z"/></svg>
                  ターゲット層の課題感
                </h4>
                <ul className="pl-2 space-y-3 text-[14px] md:text-[15px] font-bold text-gray-700 tracking-wide">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1890FF] mt-0.5">✔</span>
                    <div><span className="text-gray-500 mr-2">組織体制：</span>社内SEや開発専門組織が不足している</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1890FF] mt-0.5">✔</span>
                    <div><span className="text-gray-500 mr-2">コスト面：</span>毎月の外注費やシステム維持費が重い</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1890FF] mt-0.5">✔</span>
                    <div><span className="text-gray-500 mr-2">業務課題：</span>自社の独自業務に合うSaaSが見つからない</div>
                  </li>
                </ul>
              </div>

              {/* Provided Value */}
              <div>
                <h4 className="text-[#1890FF] font-bold text-[16px] md:text-[18px] flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  提供できる価値
                </h4>
                <ul className="pl-2 space-y-3.5 text-[14px] md:text-[15px] font-bold text-gray-700 tracking-wide">
                  <li className="flex items-start gap-2 bg-white p-2 rounded border border-gray-100 shadow-sm">
                    <span className="text-[#ff5c00] font-black mr-1">1.</span>
                    <span>業務理解の深い「現場社員」によるアジャイルな内製開発</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2 rounded border border-gray-100 shadow-sm">
                    <span className="text-[#ff5c00] font-black mr-1">2.</span>
                    <span>非エンジニアでも「最短数日」で自社専用ツールを構築</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2 rounded border border-gray-100 shadow-sm">
                    <span className="text-[#ff5c00] font-black mr-1">3.</span>
                    <span>システム外注費用の劇的な削減（月額数十万〜数百万 → <span className="text-[#1890FF] underline decoration-2 underline-offset-4">ほぼゼロへ</span>）</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Global CSS for vertical text writing */}
      <style dangerouslySetInnerHTML={{__html: `
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: upright;
          letter-spacing: 0.05em;
        }
      `}} />
    </section>
  );
}

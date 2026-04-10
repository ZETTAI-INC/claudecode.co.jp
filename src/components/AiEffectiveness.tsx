import React from "react";

const AiEffectiveness: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* --- Header Copy --- */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#333] text-[15px] md:text-xl font-bold mb-4 tracking-wide leading-relaxed">
            「最新生成AI（Claude 3.5 Sonnet等）の徹底活用」×「プロフェッショナルの設計」により
          </p>
          <h2 className="text-[#333] text-2xl md:text-4xl font-bold tracking-wider leading-snug">
            <span 
              className="inline-block relative"
              style={{ background: 'linear-gradient(transparent 60%, #cde1ff 40%)' }}
            >
              高品質なシステムを短期間・低コストで提供
            </span>
          </h2>
        </div>

        {/* --- Main Comparison Area --- */}
        <div className="flex flex-col md:flex-row items-end justify-center relative w-full pb-10">
          
          {/* ----- Left: Traditional Method (Gray) ----- */}
          <div className="w-full md:w-[42%] flex flex-col items-center relative z-10 md:pb-0 pb-16">
            
            {/* Title Box */}
            <div className="w-full max-w-[320px] mb-6">
              <div className="border border-[#888] py-2 md:py-3 text-center relative">
                <span className="text-[#666] font-bold text-sm md:text-base tracking-widest">従来型開発の場合</span>
                {/* Downward Triangle */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#888]"></div>
                {/* Inner white triangle to hollow it out */}
                <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
              </div>
            </div>

            {/* Badges */}
            <div className="w-full max-w-[320px] flex items-end justify-start mb-4 pl-4">
              <div className="flex flex-col gap-1">
                <div className="bg-[#808080] text-white font-bold px-2 py-0.5 text-sm md:text-base inline-block">
                  長期間
                </div>
                <div className="flex items-center text-[#555] font-bold text-sm md:text-base">
                  <span className="bg-[#808080] text-white px-2 py-0.5 inline-block mr-1">高コスト</span>な体質
                </div>
              </div>
            </div>

            {/* Giant Number & Pillars Wrapper */}
            <div className="w-full max-w-[380px] flex items-end justify-between px-2">
              
              {/* Left Side: Number and Base */}
              <div className="flex flex-col flex-1 pb-0">
                <div className="flex items-baseline justify-center text-[#808080] font-sans -mb-6 md:-mb-10">
                  <span className="text-[140px] md:text-[200px] font-bold leading-none tracking-tighter">
                    3
                  </span>
                  <span className="text-xl md:text-3xl font-bold pb-4 md:pb-8 ml-1">
                    ヶ月
                  </span>
                </div>
                {/* Base Pillar */}
                <div className="bg-[#808080] text-white text-center py-5 md:py-6 text-sm md:text-xl font-bold tracking-widest border border-white">
                  制作期間
                </div>
              </div>

              {/* Right Side: Building Blocks */}
              <div className="flex flex-col justify-end w-[130px] md:w-[150px] relative pb-[1px] ml-1 md:ml-3">
                <div className="absolute -top-8 left-0 w-full text-center text-[11px] md:text-xs text-[#888] font-bold">
                  すべて<br/>人手で開発
                </div>
                
                {/* Block 3 (Top) */}
                <div className="h-[40px] md:h-[50px] border border-[#a0a0a0] flex items-center justify-center bg-white border-b-0 shadow-sm relative z-20">
                  <span className="text-[#808080] font-bold text-[11px] md:text-sm">テスト・QA</span>
                </div>
                
                {/* Block 2 (Middle) - Striped */}
                <div 
                  className="h-[40px] md:h-[50px] border border-[#a0a0a0] flex items-center justify-center border-b-0 relative z-10"
                  style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 8px)', backgroundColor: 'white' }}
                >
                  <span className="text-[#808080] font-bold text-[11px] md:text-sm bg-white/80 px-1">実装・構築</span>
                </div>
                
                {/* Block 1 (Bottom) - Striped & Base aligned height */}
                <div 
                  className="h-[40px] md:h-[50px] border border-[#a0a0a0] flex items-center justify-center relative z-0"
                  style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 8px)', backgroundColor: 'white' }}
                >
                  <span className="text-[#808080] font-bold text-[11px] md:text-sm bg-white/80 px-1">要件定義</span>
                </div>
                
                {/* Bottom gray alignment line */}
                <div className="h-[2px] w-full bg-[#808080] absolute bottom-0"></div>
              </div>
            </div>
          </div>


          {/* ----- Center: Arrow & Label (Hidden on mobile for stacking layout) ----- */}
          <div className="hidden md:flex w-[16%] flex-col items-center justify-center h-[280px] relative mb-12">
            <div className="text-[#2563eb] font-bold text-center text-sm mb-2 pt-16">
              AI活用による<br/>自動化
            </div>
            
            {/* SVG Complex Arrow connecting the two blocks */}
            <div className="absolute inset-0 pointer-events-none w-full h-[500px]">
               <svg className="w-full h-full overflow-visible" fill="none">
                 {/* 
                    Path description: 
                    Starts right of the left blocks, goes right, goes down, ends above right block.
                 */}
                 <path d="M 0,200 L 40,200 L 40,300 L 120,300 L 120,370" stroke="#2563eb" strokeWidth="2" strokeLinejoin="miter"/>
                 {/* Arrow head */}
                 <polygon points="120,375 115,365 125,365" fill="#2563eb" />
               </svg>
            </div>
          </div>


          {/* ----- Right: AI Method (Blue) ----- */}
          <div className="w-full md:w-[42%] flex flex-col items-center relative z-10">
            
            {/* Title Box */}
            <div className="w-full max-w-[320px] mb-6">
              <div className="border-2 border-[#2563eb] py-2 md:py-3 text-center relative">
                <span className="text-[#2563eb] font-bold text-sm md:text-base tracking-widest">AI活用した特化型開発の場合</span>
                {/* Downward Triangle */}
                <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#2563eb]"></div>
                {/* Inner white triangle to hollow it out */}
                <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[11px] border-t-white"></div>
              </div>
            </div>

            {/* Badges */}
            <div className="w-full max-w-[320px] flex items-end justify-end mb-4 pr-12">
              <div className="flex flex-col gap-1 items-start">
                <div className="bg-[#2563eb] text-white font-bold px-2 py-0.5 text-sm md:text-base inline-block">
                  短期間、
                </div>
                <div className="flex items-center text-[#555] font-bold text-sm md:text-base">
                  <span className="bg-[#2563eb] text-white px-2 py-0.5 inline-block mr-1">低コスト</span>を実現
                </div>
              </div>
            </div>

            {/* Downward pointing text before block */}
             <div className="w-full max-w-[380px] flex justify-end pr-10 md:pr-[4.5rem] mb-2 -mt-4">
                 <div className="text-center text-[11px] md:text-sm text-[#2563eb] font-bold flex flex-col items-center">
                    <span className="mb-1 hidden md:inline-block">AIで生成し<br/>人がチェック</span>
                    {/* Mobile version simple arrow */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" className="md:hidden mt-4 mb-2">
                       <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                 </div>
             </div>

            {/* Giant Number & Pillars Wrapper */}
            <div className="w-full max-w-[380px] flex items-end justify-between px-2">
              
              {/* Left Side: Number and Base */}
              <div className="flex flex-col flex-1 pb-0">
                <div className="flex items-baseline justify-center text-[#2563eb] font-sans -mb-6 md:-mb-10 pl-6">
                  <span className="text-[140px] md:text-[200px] font-bold leading-none tracking-tighter">
                    1
                  </span>
                  <span className="text-xl md:text-3xl font-bold pb-4 md:pb-8 ml-1">
                    週間
                  </span>
                </div>
                {/* Base Pillar: Much thicker overall height */}
                <div className="bg-[#2563eb] text-white text-center py-7 md:py-9 text-sm md:text-xl font-bold tracking-widest border border-white">
                  制作期間
                </div>
              </div>

              {/* Right Side: Building Blocks */}
              <div className="flex flex-col justify-end w-[130px] md:w-[150px] relative pb-[1px] ml-1 md:ml-3">
                
                {/* Mobile version text visible only when SVG is hidden */}
                <div className="md:hidden absolute -top-10 left-0 w-full text-center text-[10px] text-[#2563eb] font-bold">
                  AIで生成し人がチェック
                </div>

                {/* Single Compressed Block */}
                <div className="h-[45px] md:h-[55px] border-2 border-[#2563eb] flex items-center justify-center bg-white shadow-sm relative z-20">
                  <span className="text-[#2563eb] font-bold text-[10px] md:text-[13px] leading-tight text-center px-1">
                    要件〜設計<br/>コーディング
                  </span>
                </div>
                
                {/* Bottom blue alignment line */}
                <div className="h-[2px] w-full bg-[#2563eb] absolute bottom-0"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiEffectiveness;

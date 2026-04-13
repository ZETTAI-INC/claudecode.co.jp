import React from 'react';

const RoiEquation: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl md:text-[22px] font-bold tracking-wider flex items-center gap-4 text-gray-800">
            <span className="w-5 h-[3px] bg-gray-800 inline-block rounded-sm"></span>
            意識すべき数字
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-2xl tracking-widest">
            超速AI開発研修
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-14">
          <p className="text-[17px] md:text-[22px] font-bold leading-[1.8] tracking-wide text-gray-800">
            内製化によるAI開発のROIを最大限高めるには、<br />
            分子の<span className="text-[#1890FF]">「社内開発力」の継続的成長と最大化</span>
            ＆
            分母の<span className="text-[#E55252]">「外注コスト」の最小化</span>に努める
          </p>
        </div>

        {/* Equation Card */}
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row items-center justify-center p-10 md:py-16 md:px-12 gap-8 md:gap-14 relative w-full md:w-[94%] mx-auto">
          
          {/* Left: ROI */}
          <div className="text-center flex-shrink-0">
            <div className="text-3xl md:text-[34px] font-black text-gray-800 tracking-tighter">
              ROI Optimization
            </div>
            <div className="text-sm md:text-base font-bold text-gray-600 mt-2">
              AI開発の投資対効果
            </div>
          </div>

          {/* Equal Sign */}
          <div className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter flex-shrink-0">
            =
          </div>

          {/* Right: Fraction */}
          <div className="flex flex-col items-center flex-1 w-full relative">
            
            {/* Top (Numerator) */}
            <div className="text-center relative w-full pb-6">
              <div className="text-[#1890FF] text-2xl md:text-[32px] font-black tracking-tight leading-none mb-2">
                Internal Development Power
              </div>
              <div className="text-base md:text-lg font-bold text-gray-700">
                社内開発力・AI活用スキル
              </div>

              {/* Blue Bubble */}
              <div className="absolute -top-12 md:-top-16 -right-2 md:right-0 bg-[#1890FF] text-white text-[11px] md:text-sm font-bold py-2 md:py-3 px-4 md:px-5 rounded-[40px] shadow-md z-10 text-center leading-snug">
                継続的成長<br/>＆ 最大化
                {/* Tail */}
                <div className="absolute -bottom-2 md:-bottom-2.5 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#1890FF] -rotate-[20deg]"></div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-[95%] h-[2px] bg-gray-400"></div>

            {/* Bottom (Denominator) */}
            <div className="text-center relative w-full pt-8">
              <div className="text-[#E55252] text-2xl md:text-[32px] font-black tracking-tight leading-none mb-2">
                Outsourcing Cost
              </div>
              <div className="text-base md:text-lg font-bold text-gray-700">
                外注コスト・開発期間
              </div>

              {/* Red Bubble */}
              <div className="absolute top-3 md:top-2 -right-4 md:-right-8 bg-[#E55252] text-white text-[12px] md:text-sm font-bold py-2.5 px-6 rounded-[30px] shadow-md z-10 text-center leading-snug">
                最小化
                {/* Tail */}
                <div className="absolute -top-[10px] left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#E55252] rotate-[20deg]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RoiEquation;

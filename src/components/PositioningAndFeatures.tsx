import React from "react";

const PositioningAndFeatures: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        
        {/* Header Bar */}
        <div className="bg-[#1890FF] text-white rounded-xl shadow-lg mb-10 overflow-hidden">
          <div className="px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl md:text-3xl font-black tracking-wider leading-snug">
              AIツールのポジショニングと特徴
            </h2>
            <div className="flex items-center gap-3 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm border border-white/30">
              <div className="w-8 h-8 bg-white text-[#1890FF] flex items-center justify-center rounded font-serif text-lg font-black shadow-sm">
                A
              </div>
              <span className="text-white text-lg md:text-xl font-bold tracking-widest whitespace-nowrap">
                Anthropic
              </span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12 overflow-x-auto">
          <div className="relative min-w-[900px] h-[500px] mx-auto">
            
            {/* Background Area Highlights */}
            {/* Anthropic Domain Highlight (Bottom Right) */}
            <div className="absolute top-[40%] left-[35%] right-[5%] bottom-[5%] bg-blue-50/60 rounded-xl border border-dashed border-blue-200"></div>

            {/* Axes */}
            {/* Y Axis */}
            <div className="absolute left-[35%] top-[8%] bottom-[8%] w-[2px] bg-gray-300">
              <div className="absolute -top-2 -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-400"></div>
              <div className="absolute -bottom-2 -left-[5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-gray-400"></div>
            </div>
            
            {/* X Axis */}
            <div className="absolute top-[40%] left-[5%] right-[5%] h-[2px] bg-gray-300">
              <div className="absolute -left-2 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-gray-400"></div>
              <div className="absolute -right-2 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-400"></div>
            </div>

            {/* Axis Labels */}
            {/* Y Axis Top Labels */}
            <div className="absolute left-[35%] top-0 -translate-x-1/2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm border border-gray-200 z-10 whitespace-nowrap">
              情報検索・部分的な補助
            </div>
            {/* Y Axis Bottom Labels */}
            <div className="absolute left-[35%] bottom-0 -translate-x-1/2 bg-[#1890FF] text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-md z-10 whitespace-nowrap">
              継続的プロセス・業務効率化
            </div>
            {/* X Axis Left Labels */}
            <div className="absolute top-[40%] left-0 -translate-y-1/2 bg-gray-100 text-gray-600 px-3 py-4 rounded-full text-sm font-bold shadow-sm border border-gray-200 z-10 [writing-mode:vertical-rl] tracking-widest">
              日常・一般タスク
            </div>
            {/* X Axis Right Labels */}
            <div className="absolute top-[40%] right-0 -translate-y-1/2 bg-[#1890FF] text-white px-3 py-5 rounded-full text-sm font-bold shadow-md z-10 [writing-mode:vertical-rl] tracking-widest">
              高度なシステム開発・実装
            </div>

            {/* --- Icons Only --- */}

            {/* ChatGPT Icon */}
            <div className="absolute top-[15%] left-[15%] flex flex-col items-center gap-2 z-20 transform transition-transform hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 bg-[#10A37F] text-white flex items-center justify-center rounded-3xl shadow-lg border border-[#10A37F]/10">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9847 5.9847 0 0 0 3.989-2.9 6.051 6.051 0 0 0-.7388-7.0732z" />
                </svg>
              </div>
              <span className="font-semibold text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-full">ChatGPT</span>
            </div>

            {/* Gemini Icon */}
            <div className="absolute top-[20%] left-[45%] flex flex-col items-center gap-2 z-20 transform transition-transform hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#1A73E8] to-[#D96570] text-white flex items-center justify-center rounded-full shadow-lg border border-white">
                <span className="text-2xl mt-0.5">✦</span>
              </div>
              <span className="font-semibold text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-full">Gemini</span>
            </div>

            {/* GitHub Copilot Icon */}
            <div className="absolute top-[65%] left-[20%] flex flex-col items-center gap-2 z-20 transform transition-transform hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center rounded-3xl shadow-lg border border-gray-800">
                <span className="text-xl font-bold">Co</span>
              </div>
              <span className="font-semibold text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-full">Copilot</span>
            </div>

            {/* Anthropic Hero Icon */}
            <div className="absolute top-[60%] left-[60%] flex flex-col items-center gap-3 z-30 transform transition-transform hover:scale-105 cursor-default">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-[#1890FF] blur-2xl opacity-30 rounded-full w-24 h-24 mx-auto mt-2"></div>
              {/* Main Icon */}
              <div className="relative w-28 h-28 bg-[#f5f0e6] border-[3px] border-[#1890FF] text-[#2c2c2c] flex items-center justify-center rounded-3xl shadow-[0_12px_30px_rgba(24,144,255,0.4)] font-serif text-6xl font-black">
                A
              </div>
              <span className="relative font-black text-lg text-[#1890FF] bg-white px-4 py-1 rounded-full shadow-md border border-[#1890FF]/30 tracking-wide">
                Anthropic
              </span>
            </div>

          </div>
        </div>

        {/* --- Comparison Table --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card: 従来のAIツール */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-[#6B6B6B] text-white py-4 px-6">
              <h3 className="font-bold text-lg tracking-wider">従来のAIツール</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm w-fit">
                コパイロット（副操縦士）型
              </div>
              <p className="text-gray-600 font-medium leading-relaxed flex-1 text-sm md:text-base">
                単発の質問対応、手作業での細かなコード補完、一般的な文章作成など、あくまで<span className="font-bold text-gray-800">「人間の作業を部分的に補助する」</span>スタンスにとどまる。
              </p>
            </div>
          </div>

          {/* Card: Anthropic (Claude) */}
          <div className="bg-white rounded-2xl shadow-[0_8px_20px_rgba(24,144,255,0.15)] border-2 border-[#1890FF] overflow-hidden flex flex-col transform md:-translate-y-2 relative">
            {/* "業務効率化に最適" Badge */}
            <div className="absolute top-0 right-0 bg-[#FF5C00] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 tracking-widest">
              業務効率化に最適！
            </div>

            <div className="bg-gradient-to-r from-[#1890FF] to-[#0D6EDA] text-white py-4 px-6 pr-32 flex justify-between items-center">
              <h3 className="font-bold text-lg md:text-xl tracking-wider">Anthropic (Claude)</h3>
              <span className="text-white/80 text-xl font-serif font-black">A</span>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4 bg-[#F2F9FF]/30">
              <div className="inline-block bg-[#E5F3FF] text-[#1890FF] border border-[#1890FF]/30 px-4 py-2 rounded-lg font-bold text-sm w-fit">
                最高水準の推論能力・システム自律実行
              </div>
              <p className="text-gray-800 font-bold leading-relaxed flex-1 text-sm md:text-base">
                膨大なコンテキストから要件を読み解き、あらゆる業務プロセスの自動化・効率化を実現。<br/>
                自律的な自走力を持ち、システム開発もEnd-to-Endで対応可能。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PositioningAndFeatures;

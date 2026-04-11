import React from "react";

const TalentDevelopment: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="w-1.5 h-6 md:h-8 bg-[#333] block"></span>
          <h2 className="text-xl md:text-2xl font-bold text-[#333]">14日で成果が出る理由：教えるのはClaude Codeだけだから</h2>
        </div>

        {/* Scrollable Container for Mobile */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[950px] relative">
            
            {/* === UPPER SECTION (Visible Iceberg - Knowledge/Skills) === */}
            <div className="flex items-end justify-between gap-6 pb-6 relative z-10">
              
              {/* Left: Upper Iceberg */}
              <div className="w-[300px] h-[160px] relative flex items-center justify-center">
                {/* Upper Iceberg SVG */}
                <div className="absolute inset-0 pointer-events-none -bottom-1">
                  <svg width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="none">
                    <polygon points="10,160 50,80 150,10 240,50 280,100 290,160" fill="#e8e8e8" />
                  </svg>
                </div>
                {/* Text */}
                <span className="relative z-10 text-xl font-bold tracking-widest text-[#444] mt-10">
                  14日で教えること
                </span>
              </div>

              {/* Center: Gray Arrow */}
              <div className="w-[220px] flex items-center justify-start pb-4">
                <div
                  className="bg-[#ebebeb] text-[#555] font-bold text-center py-5 w-[180px] relative"
                  style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
                >
                  <p className="leading-snug pr-4">
                    14日集中で<br/>装着
                  </p>
                </div>
              </div>

              {/* Right: Traning Blocks */}
              <div className="flex-1 flex gap-4 pr-2">
                {/* Block 1 */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#808080] text-white text-center py-2 font-bold rounded-t-sm shadow-sm">
                    Claude Code実装スキル
                  </div>
                  <div className="bg-[#f5f5f5] flex-1 p-5 rounded-b-sm shadow-sm border border-[#e8e8e8]">
                    <ul className="space-y-2 text-[14px] text-[#444]">
                      <li className="flex items-start"><span className="mr-2 mt-0.5">•</span>自然言語での要件→コード変換</li>
                      <li className="flex items-start"><span className="mr-2 mt-0.5">•</span>デバッグ・エラー対応の実践</li>
                    </ul>
                  </div>
                </div>
                {/* Block 2 */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-[#808080] text-white text-center py-2 font-bold rounded-t-sm shadow-sm">
                    業務ツール設計フロー
                  </div>
                  <div className="bg-[#f5f5f5] flex-1 p-5 rounded-b-sm shadow-sm border border-[#e8e8e8]">
                    <ul className="space-y-2 text-[14px] text-[#444]">
                      <li className="flex items-start"><span className="mr-2 mt-0.5">•</span>要件定義〜実装〜デプロイ</li>
                      <li className="flex items-start"><span className="mr-2 mt-0.5">•</span>本番運用を前提にした設計</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>


            {/* === SEPARATOR (Sea Level) === */}
            <div className="w-full h-1 bg-[#c0c0c0] relative z-20 shadow-sm rounded-full"></div>


            {/* === LOWER SECTION (Hidden Iceberg - Culture/Values) === */}
            <div className="flex items-start justify-between gap-6 pt-4 relative z-0">
              
              {/* Left: Lower Iceberg */}
              <div className="w-[300px] h-[340px] relative flex items-center justify-center">
                {/* Lower Iceberg SVG */}
                <div className="absolute inset-0 pointer-events-none -top-1">
                  <svg width="100%" height="100%" viewBox="0 0 300 340" preserveAspectRatio="none">
                    {/* Background Light Blue */}
                    <polygon points="10,0 290,0 300,50 280,180 250,280 180,330 100,340 30,290 0,150" fill="#bce2ff" />
                    {/* Shadow Dark Blue */}
                    <polygon points="0,0 40,60 10,120 0,0" fill="#5a9bd4" opacity="0.8"/>
                    <polygon points="100,340 180,330 160,280 80,320" fill="#5a9bd4" opacity="0.8"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="relative z-10 text-center tracking-widest text-[#333] mb-8">
                  <p className="text-lg md:text-xl font-bold mb-3">受講者が既に</p>
                  <p className="text-lg md:text-xl font-bold">持っているもの</p>
                </div>
              </div>

              {/* Center: Blue Arrow & Point */}
              <div className="w-[220px] pt-12 flex flex-col relative h-[320px]">
                {/* Arrow */}
                <div
                  className="bg-[#c2e1fc] text-[#444] font-bold text-center py-3 w-[180px] shadow-sm relative z-10"
                  style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)' }}
                >
                  <p className="leading-snug pr-4">
                    受講者が<br/>最初から持参
                  </p>
                </div>

                {/* Dotted Line */}
                <div className="absolute left-[35%] top-[80px] bottom-[110px] w-0 border-l-[3px] border-dotted border-[#2563eb]"></div>

                {/* Point Label */}
                <div className="absolute bottom-[20px] left-0 right-10">
                  <div className="bg-[#1e5eb0] text-white text-[13px] font-bold px-4 py-1.5 inline-block rounded-full mb-3 shadow-md tracking-wider">
                    POINT
                  </div>
                  <p className="text-[13px] text-[#444] font-bold leading-[1.6]">
                    14日でゼロから育てるのは不可能。<br/>
                    <span className="border-b-2 border-[#1e5eb0] pb-0.5">既にある業務知識の上にClaude Codeだけを載せる</span><br/>
                    これが短期で成果が出る本質的な理由。
                  </p>
                </div>
              </div>

              {/* Right: Advanced Blocks */}
              <div className="flex-1 flex gap-4 pr-2 pt-2 h-full">
                {/* Block 3 */}
                <div className="flex-1 flex flex-col h-[320px]">
                  <div className="bg-[#7fb2f0] text-white text-center py-2.5 font-bold rounded-t-sm shadow-sm tracking-wide">
                    業務知識
                  </div>
                  <div className="bg-[#ddeeff] flex-1 p-6 rounded-b-sm shadow-sm border border-[#c4e0fb]">
                    <ul className="space-y-4 text-[14.5px] text-[#333] font-medium leading-[1.6]">
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>自部署の業務フロー<br/><span className="text-[#666] text-[13px]">（全体像と依存関係）</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>現場の非効率<br/><span className="text-[#666] text-[13px]">（時間がかかっている作業）</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>社内調整の勘どころ<br/><span className="text-[#666] text-[13px]">（関係者・意思決定の流れ）</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Block 4 */}
                <div className="flex-1 flex flex-col h-[320px]">
                  <div className="bg-[#699ee6] text-white text-center py-2.5 font-bold rounded-t-sm shadow-sm tracking-wide">
                    現場の熱量
                  </div>
                  <div className="bg-[#ddeeff] flex-1 p-6 rounded-b-sm shadow-sm border border-[#c4e0fb]">
                    <ul className="space-y-4 text-[14.5px] text-[#333] font-medium leading-[1.6]">
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>日々感じる課題感<br/><span className="text-[#666] text-[13px]">（改善したい具体的な痛み）</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>自部署を良くしたい動機<br/><span className="text-[#666] text-[13px]">（外注では出ない当事者意識）</span></span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-0.5">•</span>
                        <span>業務直結の成果コミット<br/><span className="text-[#666] text-[13px]">（"使われる"ツールへの執念）</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TalentDevelopment;

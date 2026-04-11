import React from "react";

const SpeedComparison: React.FC = () => {
  // Define the rows/timeline labels
  const timelineRows = [
    { label: "キックオフ当日", hasDot: false, isHeader: false },
    { label: "２日", hasDot: false },
    { label: "３日", hasDot: false },
    { label: "４日", hasDot: false },
    { label: "・", hasDot: true },
    { label: "・", hasDot: true },
    { label: "１０日", hasDot: false },
    { label: "・", hasDot: true },
    { label: "・", hasDot: true },
    { label: "１か月", hasDot: false },
  ];

  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* --- Header & Lead Area --- */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
            研修修了後の実力： 社内で業務ツールを最短4日で本番公開
          </h2>
          <div className="bg-[#f5f5f5] p-5 md:p-6 rounded-sm">
            <p className="text-[#444] text-[14px] md:text-base leading-[1.8] font-medium">
              研修を修了した社員は、これまで外注していた業務ツール開発を社内で完結できます。アイデアが出た翌日にはプロトタイプを提示でき、<br className="hidden md:block" />
              本番稼働まで<span className="font-bold text-[#2563eb]">最短４日間</span>。外注の見積もり待ちが消え、現場の改善スピードが一段上がります。
            </p>
            <p className="text-[#888] text-[12px] md:text-[13px] leading-[1.7] mt-3">
              ※ 社内業務ツール（フォーム・ダッシュボード・自動化スクリプト等）を想定。外注との比較は一般的なBtoB受託開発の公表見積もりレンジに基づく参考値です。
            </p>
          </div>
        </div>

        {/* --- Comparison Chart (Horizontal Scroll on Mobile) --- */}
        <div className="overflow-x-auto pb-8 pt-4">
          <div className="min-w-[900px] relative mt-2 px-2">
            
            {/* The Grid Chart */}
            <div className="grid grid-cols-[130px_1fr_1fr_1fr_1fr] relative">
              
              {/* === ROW 0: Headers === */}
              {/* Header 1: Time Axis */}
              <div className="bg-[#1a365d] text-white border border-white text-center flex items-center justify-center font-bold text-[14px] h-[50px] shadow-sm">
                開発日数
              </div>
              {/* Header 2: Ours (Highlighted) */}
              <div className="text-center flex items-center justify-center font-bold text-[16px] text-[#2563eb] h-[50px] relative z-20 bg-white">
                研修修了者（社内）
                {/* Top border of the blue highlight box */}
                <div className="absolute top-0 left-2 right-2 border-t-[3px] border-l-[3px] border-r-[3px] border-[#2563eb] h-full rounded-t-sm pointer-events-none"></div>
              </div>
              {/* Header 3: Competitor A */}
              <div className="text-center flex items-center justify-center font-bold text-[15px] text-[#666] h-[50px]">
                外注A（スポット受託）
              </div>
              {/* Header 4: Competitor B */}
              <div className="text-center flex items-center justify-center font-bold text-[15px] text-[#666] h-[50px]">
                外注B（中規模SIer）
              </div>
              {/* Header 5: Competitor C */}
              <div className="text-center flex items-center justify-center font-bold text-[15px] text-[#666] h-[50px]">
                外注C（大手ベンダー）
              </div>

              {/* === BACKGROUND ARROWS (Absolute positioned over the columns) === */}
              {/* We draw the vertical descending arrows for each company column. */}
              
              {/* ZETT-AI Arrow (Blue) */}
              <div className="absolute left-[130px] w-[calc(25%-32px)] top-[50px] bottom-[320px] pointer-events-none z-10 flex flex-col items-center">
                 <div className="h-full w-[14px] bg-[#1e40af] relative mt-4">
                    {/* Arrow Head */}
                    <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#1e40af]"></div>
                 </div>
              </div>

              {/* A社 Arrow (Gray) */}
              <div className="absolute left-[calc(130px+25%)] w-[calc(25%-32px)] top-[50px] bottom-[160px] pointer-events-none z-10 flex flex-col items-center">
                 <div className="h-full w-[12px] bg-[#888] relative mt-4">
                    <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-[#888]"></div>
                 </div>
              </div>

              {/* B社 Arrow (Gray) */}
              <div className="absolute left-[calc(130px+50%)] w-[calc(25%-32px)] top-[50px] bottom-[160px] pointer-events-none z-10 flex flex-col items-center">
                 <div className="h-full w-[12px] bg-[#888] relative mt-4">
                    <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-[#888]"></div>
                 </div>
              </div>

              {/* C社 Arrow (Gray) */}
              <div className="absolute left-[calc(130px+75%)] w-[calc(25%-32px)] top-[50px] bottom-[40px] pointer-events-none z-10 flex flex-col items-center">
                 <div className="h-full w-[12px] bg-[#888] relative mt-4">
                    <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-[#888]"></div>
                 </div>
              </div>


              {/* === ROWS LOOP === */}
              {timelineRows.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  
                  {/* Col 1: Time Label */}
                  <div className={`bg-[#1a365d] text-white border border-[#2c5282] border-t-white ${row.hasDot ? 'border-y-0 h-[30px]' : 'h-[45px]'} flex items-center justify-center font-bold text-[14px] shadow-sm relative z-20`}>
                    {row.label}
                  </div>

                  {/* Col 2: ZETT-AI (Blue Highlight Box Side Borders) */}
                  <div className={`relative flex items-center justify-center ${row.hasDot ? 'h-[30px]' : 'h-[45px]'}`}>
                    {/* The highlight border */}
                    <div className={`absolute left-2 right-2 border-l-[3px] border-r-[3px] border-[#2563eb] h-full pointer-events-none z-0 ${rowIndex === timelineRows.length - 1 ? 'border-b-[3px] rounded-b-sm' : ''}`}></div>
                    
                    {/* Event Boxes based on rowIndex */}
                    {rowIndex === 1 && ( // ２日
                      <div className="bg-[#c2e1fc] text-[#1e40af] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm px-1 text-center leading-tight">
                        プロトタイプ確認
                      </div>
                    )}
                    {rowIndex === 3 && ( // ４日
                      <div className="bg-[#c2e1fc] text-[#1e40af] font-bold text-[14px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        本番利用開始
                      </div>
                    )}
                    
                    {/* Bottom Emphasis Text (appears slightly below the 4 day box but still inside the border) */}
                    {rowIndex === 4 && (
                      <div className="absolute top-2 w-full text-center text-[#2563eb] font-bold text-[14px] z-30 pointer-events-none pl-1">
                        \ 最短４日でリリース！ /
                      </div>
                    )}
                  </div>

                  {/* Col 3: Competitor A */}
                  <div className={`relative flex items-center justify-center ${row.hasDot ? 'h-[30px]' : 'h-[45px]'}`}>
                    {rowIndex === 2 && ( // ３日
                      <div className="bg-[#dcdcdc] text-[#555] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        要件定義完了
                      </div>
                    )}
                    {rowIndex === 6 && ( // １０日
                      <div className="bg-[#dcdcdc] text-[#555] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        ベータ版リリース
                      </div>
                    )}
                  </div>

                  {/* Col 4: Competitor B */}
                  <div className={`relative flex items-center justify-center ${row.hasDot ? 'h-[30px]' : 'h-[45px]'}`}>
                    {rowIndex === 3 && ( // ４日
                      <div className="bg-[#dcdcdc] text-[#555] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        要件定義完了
                      </div>
                    )}
                    {rowIndex === 6 && ( // １０日
                      <div className="bg-[#e4e4e4] text-[#555] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm bg-gradient-to-r from-[#dcdcdc] to-[#ececec]"> {/* Slightly stylized to show process */}
                        デバッグ・納品
                      </div>
                    )}
                  </div>

                  {/* Col 5: Competitor C */}
                  <div className={`relative flex items-center justify-center ${row.hasDot ? 'h-[30px]' : 'h-[45px]'}`}>
                    {rowIndex === 6 && ( // １０日
                      <div className="bg-[#dcdcdc] text-[#555] font-bold text-[13px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        要件定義完了
                      </div>
                    )}
                    {rowIndex === 9 && ( // １か月
                      <div className="bg-[#b0b0b0] text-white font-bold text-[14px] w-[90%] h-[35px] flex items-center justify-center relative z-20 shadow-sm rounded-sm">
                        利用開始
                      </div>
                    )}
                  </div>

                </React.Fragment>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpeedComparison;

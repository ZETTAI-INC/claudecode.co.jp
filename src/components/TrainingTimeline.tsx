import React from "react";

const TIMES = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const TrainingTimeline: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* --- Header Area --- */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 md:h-8 bg-[#333] block"></span>
          <h2 className="text-xl md:text-2xl font-bold text-[#333]">AIブートキャンプ 1日の流れ</h2>
        </div>

        <div className="border border-[#e0e0e0] rounded-xl p-5 md:p-6 mb-12 shadow-[0_2px_10px_rgba(0,0,0,0.03)] bg-white relative z-20">
          <p className="text-[15px] md:text-lg font-bold text-[#444] leading-relaxed mb-3">
            研修当日は9時に研修センター内の指定ルームへお集まりください。<span className="text-[#888] font-normal text-sm md:text-base">（ルームNoは別紙をご確認ください）</span>
          </p>
          <p className="text-[15px] md:text-lg font-bold text-[#444] leading-relaxed">
            当日はAI基礎講義の実施後、グループワークにて入社者・配属先メンバーにて交流いただきます。
          </p>
        </div>

        {/* --- Scrollable Timeline Wrapper --- */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[1300px] relative mt-10">

            {/* Vertical Guide Lines Container */}
            <div className="absolute top-0 left-0 right-0 h-[260px] grid grid-cols-10 z-0">
               {TIMES.map((_, i) => (
                 <div key={`guide-${i}`} className="border-l border-[#e8e8e8] h-full w-full"></div>
               ))}
            </div>

            {/* --- UPPER AREA (Events Flow) --- */}
            <div className="relative h-[260px] grid grid-cols-10 pt-6 z-10 w-full text-[14px]">
              
              {/* Event 1: Setting (09-10) */}
              <div className="col-start-1 col-span-1 px-2 flex flex-col items-center" style={{ marginTop: '0px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-3 font-bold text-[#444] text-[13px] shadow-sm tracking-wider w-full text-center">
                  セッティング
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[12px] text-center w-full">
                  PCのセットアップとClaude Code初期設定
                </p>
              </div>

              {/* Event 2: Terminology (10-11) */}
              <div className="col-start-2 col-span-1 px-2 flex flex-col items-center" style={{ marginTop: '70px' }}>
                 <div className="bg-[#e4e4e4] rounded-full py-1.5 px-3 font-bold text-[#444] text-[13px] shadow-sm tracking-wider w-full text-center">
                  用語20解説
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[12px] text-center w-full">
                  Claude開発に必要な用語20を徹底解説
                </p>
              </div>

              {/* Event 3: YouTube (11-12) */}
              <div className="col-start-3 col-span-1 px-2 flex flex-col items-center" style={{ marginTop: '20px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-3 font-bold text-[#444] text-[13px] shadow-sm tracking-widest w-full text-center">
                  YouTube作成
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[12px] text-center w-full">
                  API等を活用し、関連アプリ作成を体験
                </p>
              </div>

              {/* Event 4: Lunch (12-13) */}
              <div className="col-start-4 col-span-1 px-2 flex flex-col items-center" style={{ marginTop: '90px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-3 font-bold text-[#444] text-[13px] shadow-sm tracking-widest text-center w-full">
                  ランチ休憩
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[12px] text-center w-full">
                  お弁当を準備していますので休憩・交流ください
                </p>
              </div>

              {/* Event 5: GitHub & Render (13-14) */}
              <div className="col-start-5 col-span-1 px-2 flex flex-col items-center" style={{ marginTop: '10px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-2 font-bold text-[#444] text-[11px] shadow-sm tracking-wider w-full text-center truncate">
                  GitHub/RENDER
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[12px] text-center w-full">
                  ソース管理とデプロイ手順を習得
                </p>
              </div>

              {/* Event 6: Supabase (14-16) */}
              <div className="col-start-6 col-span-2 px-6 flex flex-col items-center" style={{ marginTop: '60px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-6 font-bold text-[#444] text-[14px] shadow-sm tracking-widest w-[85%] text-center">
                  SUPABASE解説
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[13px] text-center w-full">
                  Baasを利用したDB設計とバックエンド構築の実践
                </p>
              </div>

              {/* Event 7: Wrap up (16-18) */}
              <div className="col-start-8 col-span-3 pr-8 pl-4 flex flex-col items-center" style={{ marginTop: '20px' }}>
                <div className="bg-[#e4e4e4] rounded-full py-1.5 px-6 font-bold text-[#444] text-[14px] shadow-sm tracking-widest w-[70%] text-center">
                  最低教養の定着・まとめ
                </div>
                <p className="mt-3 text-[#555] leading-[1.5] font-medium text-[13px] text-center w-full">
                  ここまでの実践で、AI自走開発に必要な「最低教養」が完全に身につきます
                </p>
              </div>

            </div>

            {/* --- MIDDLE AREA (Time Axis) --- */}
            <div className="h-[60px] bg-[#0c3b6b] grid grid-cols-10 relative z-20 text-white font-sans text-[18px] tracking-wider shadow-md border-y border-[#0a2f55]">
              {TIMES.map((time, i) => (
                <div key={`time-${i}`} className={`flex items-center justify-center border-l border-[#2e5782] ${i === 9 ? 'border-r' : ''}`}>
                  {time}
                </div>
              ))}
            </div>

            {/* --- LOWER AREA (Locations & Details) --- */}
            <div className="h-[220px] grid grid-cols-10 pt-6 relative z-10 p-b-8">
              
              {/* Lower Item 1: 09:00 */}
              <div className="col-start-1 col-span-3 px-6 relative">
                <div className="absolute top-[-26px] left-[15%] flex flex-col items-center">
                  <div className="w-[18px] h-[18px] bg-white border-4 border-[#b3b3b3] rounded-full z-30 shadow-sm relative ml-[-9px]"></div>
                  <div className="w-0 h-[100px] border-l-[2px] border-dashed border-[#a0a0a0] absolute top-[9px] -ml-[9px] z-10"></div>
                </div>
                <div className="mt-20 font-bold text-lg text-[#333] tracking-wide bg-white relative px-2 inline-block z-20 text-center w-full">
                  ZETT-AI 研修ルーム
                </div>
                <p className="mt-2 text-[#666] text-[13px] leading-[1.6] font-medium bg-white relative z-20 text-center px-4 w-full">
                  開始は9:00です。PCを開きすぐに叩ける状態からキックオフします。
                </p>
              </div>

              {/* Lower Item 2: 12:00 (Lunch) */}
              <div className="col-start-4 col-span-2 px-2 relative flex flex-col items-center">
                <div className="absolute top-[-26px] left-1/2 flex flex-col items-center">
                  <div className="w-[18px] h-[18px] bg-white border-4 border-[#b3b3b3] rounded-full z-30 shadow-sm relative ml-[-9px]"></div>
                  <div className="w-0 h-[25px] border-l-[2px] border-dashed border-[#a0a0a0] absolute top-[9px] -ml-[9px] z-10"></div>
                </div>
                
                <div className="border-[2px] border-dashed border-[#b3b3b3] rounded-xl p-4 mt-5 pb-6 w-full max-w-[200px] bg-white relative z-20 text-center">
                  <div className="font-bold text-[16px] text-[#333] tracking-wide mb-2">
                    ランチ・歓談
                  </div>
                  <p className="text-[#666] text-[12px] leading-[1.6] font-medium px-2">
                    頭を休ませつつ、午後の実践に向けた親睦を深めます。
                  </p>
                </div>
              </div>

              {/* Lower Item 3: 13:00 */}
              <div className="col-start-6 col-span-2 px-4 relative">
                <div className="absolute top-[-26px] left-[20%] flex flex-col items-center">
                  <div className="w-[18px] h-[18px] bg-white border-4 border-[#b3b3b3] rounded-full z-30 shadow-sm relative ml-[-9px]"></div>
                  <div className="w-0 h-[100px] border-l-[2px] border-dashed border-[#a0a0a0] absolute top-[9px] -ml-[9px] z-10"></div>
                </div>
                <div className="mt-20 font-bold text-lg text-[#333] tracking-wide bg-white relative px-2 inline-block z-20 text-center w-full">
                  実践ブートキャンプ
                </div>
                <p className="mt-2 text-[#666] text-[13px] leading-[1.6] font-medium bg-white relative z-20 text-center px-2 w-full">
                  モダンな技術スタックを実際のデプロイまで一気に体験します。
                </p>
              </div>

              {/* Lower Item 4: 16:00 */}
              <div className="col-start-8 col-span-3 px-6 relative">
                <div className="absolute top-[-26px] left-[30%] flex flex-col items-center">
                  <div className="w-[18px] h-[18px] bg-white border-4 border-[#b3b3b3] rounded-full z-30 shadow-sm relative ml-[-9px]"></div>
                  <div className="w-0 h-[100px] border-l-[2px] border-dashed border-[#a0a0a0] absolute top-[9px] -ml-[9px] z-10"></div>
                </div>
                <div className="mt-20 font-bold text-lg text-[#333] tracking-wide bg-white relative px-2 inline-block z-20 text-center w-full">
                  研修完了・修了式
                </div>
                <p className="mt-2 text-[#666] text-[13px] leading-[1.6] font-medium bg-white relative z-20 text-center px-4 w-full">
                  今日からあなたも「自走・自律型」のAIクリエイターです。
                </p>
              </div>

            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="w-full text-right text-[#ccc] text-xs font-serif italic pr-4 mt-2">
          Copyright. ZETT-AI. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default TrainingTimeline;

import React from "react";

// --- Helpers ---
const Kenten = ({ children, color = "#1890FF" }: { children: React.ReactNode; color?: string }) => (
  <span style={{ WebkitTextEmphasis: `filled dot ${color}`, textEmphasis: `filled dot ${color}` }}>
    {children}
  </span>
);

// --- Icons ---
const SalesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <path d="M12 11v6" />
    <path d="M9 14h6" />
  </svg>
);

const AdminIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const FieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M12 15h.01" />
    <path d="M16 15h.01" />
    <path d="M8 15h.01" />
  </svg>
);

export default function EssenceOfTraining() {
  return (
    <section className="font-sans text-[#333] flex flex-col xl:flex-row w-full max-w-[1200px] mx-auto bg-white border border-gray-100 shadow-[0_12px_60px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden my-12 relative">
      
      {/* Decorative Blur Background Element */}
      <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-[#1890FF] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Column (Gray Background) */}
      <div className="w-full xl:w-[38%] bg-[#F4F7FB] p-6 md:p-8 xl:py-10 flex flex-col justify-between border-r border-gray-200/60 relative z-10">
        
        {/* 1. Header */}
        <h2 className="text-[18px] md:text-[22px] font-black text-gray-800 mb-6 tracking-wide leading-relaxed flex flex-col items-start gap-2.5">
          <span>この研修の本質は</span>
          <span className="text-white bg-[#FF6B00] px-3 md:px-4 py-1.5 rounded shadow-sm text-[20px] md:text-[28px] tracking-wide whitespace-nowrap">本番導入まで届かせること</span>
        </h2>

        {/* 2. Visual Equation / Diagram */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 my-2 mb-8 w-full">
          <div className="text-[22px] md:text-[26px] font-black text-gray-800 tracking-widest drop-shadow-sm">
            研修の本質
          </div>
          <div className="text-[#FF6B00]/40 font-black text-3xl leading-none">||</div>
          <div className="text-[22px] md:text-[26px] font-black text-gray-800 tracking-widest drop-shadow-sm">
            本番導入まで届かせること
          </div>
          <div className="text-gray-400 font-black text-3xl leading-none pt-2 pb-1">↓</div>
          <div className="text-[28px] md:text-[34px] font-black text-[#1890FF] tracking-widest leading-tight">
            <Kenten color="#1890FF">14日で本番稼働</Kenten>
          </div>
        </div>

        {/* 3. Description Paragraph */}
        <div className="text-[14.5px] md:text-[16px] font-extrabold text-gray-700 leading-[1.8] tracking-wide flex flex-col items-start">
          <p className="mb-0.5">毎日の業務で出てくる</p>
          <p className="border-b-[3px] border-gray-300 inline-block mb-2 pb-0.5">”自動化したい・ツールが欲しい”が、</p>

          <p className="mb-0.5">
            <span className="bg-gradient-to-r from-[#FFE1CC] to-[#FFE1CC] bg-[length:100%_40%] bg-no-repeat bg-bottom text-[#FF6B00] font-black px-1 -ml-1">
              PoCや構想で止まる現状
            </span>を断ち切り、
          </p>

          <p className="mb-0.5">非エンジニア社員が自らの手で</p>
          <p className="mb-2">14日後には本番環境で稼働させている状態、</p>

          <p className="bg-gradient-to-r from-[#D3E5FD] to-[#D3E5FD] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-1 font-black text-[#1890FF] inline-block px-1 -ml-1">
            そこまで届かせることが本研修の本質です。
          </p>
        </div>
      </div>

      {/* Right Column (White Background) */}
      <div className="w-full xl:w-[62%] bg-white p-6 md:p-10 xl:py-10 flex flex-col justify-center relative z-10">
        <h2 className="text-[22px] md:text-[28px] font-black text-gray-800 mb-6 md:mb-8 text-center">
          <span className="text-[#1890FF]">14日後</span>、現場の手作業はこう変わる
        </h2>

        {/* Legend / Headers */}
        <div className="flex w-full mb-3 md:mb-6 relative px-1 md:px-2 items-end">
          <div className="w-12 sm:w-16 md:w-24 shrink-0"></div> {/* Spacer for icon */}
          <div className="flex-1 text-center text-gray-400 text-[12px] md:text-[18px] font-black tracking-widest leading-tight">
            研修前 (Before)<br />
            <span className="text-[10px] md:text-[14.5px] font-bold text-gray-400 tracking-normal mt-1 block">課題は手作業、外注任せ</span>
          </div>
          <div className="w-4 md:w-10 shrink-0"></div> {/* Match arrow gap */}
          <div className="flex-1 text-center text-[#1890FF] text-[12px] md:text-[18px] font-black tracking-widest leading-tight">
            14日後 (After)<br />
            <span className="text-[10px] md:text-[14.5px] font-bold text-[#1890FF] tracking-normal mt-1 block">非エンジニアが自ら導入</span>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4 md:gap-5">
          
          {/* Row 1 */}
          <div className="flex items-center w-full group">
            <div className="w-12 sm:w-16 md:w-24 shrink-0 flex flex-col items-center justify-center text-gray-300 gap-1 md:gap-1.5 transition-colors group-hover:text-[#FF6B00]">
              <div className="scale-75 md:scale-100 origin-center"><SalesIcon /></div>
              <span className="text-[10px] md:text-[13px] font-black border-b-[2px] md:border-b-[3px] border-gray-200 pb-0.5 mt-0 md:mt-0.5 text-gray-500 transition-colors group-hover:border-[#FF6B00]">営業・設計</span>
            </div>
            
            <div className="flex-1 flex flex-row items-center justify-between gap-1.5 md:gap-5">
              <div className="flex-1 bg-white border-[1.5px] md:border-[2.5px] border-gray-200 rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center text-[10.5px] md:text-[15.5px] font-black text-gray-600 min-h-[64px] md:min-h-[76px] flex items-center justify-center shadow-sm relative overflow-hidden transition-all group-hover:border-[#FF6B00]">
                <span className="leading-[1.4] md:leading-[1.6]">手作業の見積書作成で<br/><span className="text-[#FF6B00]">コピペミス</span>や<span className="text-[#FF6B00]">二度手間</span></span>
              </div>
              
              <div className="text-gray-300 shrink-0 font-black text-xs md:text-2xl">
                →
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#1890FF] to-[#0A6ED1] rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center shadow-[0_8px_20px_rgba(24,144,255,0.3)] min-h-[64px] md:min-h-[76px] flex flex-col items-center justify-center relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default border border-white/50">
                <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white opacity-[0.06] rounded-bl-full pointer-events-none"></div>
                <div className="text-[11px] md:text-[19px] font-black text-white leading-[1.3] md:leading-[1.5] drop-shadow-sm tracking-normal md:tracking-wide">
                  見積書作成ツールを<br/><Kenten color="white">本番導入</Kenten>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center w-full group">
            <div className="w-12 sm:w-16 md:w-24 shrink-0 flex flex-col items-center justify-center text-gray-300 gap-1 md:gap-1.5 transition-colors group-hover:text-[#FF6B00]">
              <div className="scale-75 md:scale-100 origin-center"><AdminIcon /></div>
              <span className="text-[10px] md:text-[13px] font-black border-b-[2px] md:border-b-[3px] border-gray-200 pb-0.5 mt-0 md:mt-0.5 text-gray-500 transition-colors group-hover:border-[#FF6B00]">管理・企画</span>
            </div>
            
            <div className="flex-1 flex flex-row items-center justify-between gap-1.5 md:gap-5">
              <div className="flex-1 bg-white border-[1.5px] md:border-[2.5px] border-gray-200 rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center text-[10.5px] md:text-[15.5px] font-black text-gray-600 min-h-[64px] md:min-h-[76px] flex items-center justify-center shadow-sm relative overflow-hidden transition-all group-hover:border-[#FF6B00]">
                <span className="leading-[1.4] md:leading-[1.6]">複数ツールのデータ<br/>集計に<span className="text-[#FF6B00]">毎月数日かかる</span></span>
              </div>
              
              <div className="text-gray-300 shrink-0 font-black text-xs md:text-2xl">
                →
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#1890FF] to-[#0A6ED1] rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center shadow-[0_8px_20px_rgba(24,144,255,0.3)] min-h-[64px] md:min-h-[76px] flex flex-col items-center justify-center relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default border border-white/50">
                <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white opacity-[0.06] rounded-bl-full pointer-events-none"></div>
                <div className="text-[11px] md:text-[19px] font-black text-white leading-[1.3] md:leading-[1.5] drop-shadow-sm tracking-normal md:tracking-wide">
                  実績ダッシュボードを<br/><Kenten color="white">本番稼働</Kenten>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center w-full group">
            <div className="w-12 sm:w-16 md:w-24 shrink-0 flex flex-col items-center justify-center text-gray-300 gap-1 md:gap-1.5 transition-colors group-hover:text-[#FF6B00]">
              <div className="scale-75 md:scale-100 origin-center"><FieldIcon /></div>
              <span className="text-[10px] md:text-[13px] font-black border-b-[2px] md:border-b-[3px] border-gray-200 pb-0.5 mt-0 md:mt-0.5 text-gray-500 transition-colors group-hover:border-[#FF6B00]">現場・労務</span>
            </div>
            
            <div className="flex-1 flex flex-row items-center justify-between gap-1.5 md:gap-5">
              <div className="flex-1 bg-white border-[1.5px] md:border-[2.5px] border-gray-200 rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center text-[10.5px] md:text-[15.5px] font-black text-gray-600 min-h-[64px] md:min-h-[76px] flex items-center justify-center shadow-sm relative overflow-hidden transition-all group-hover:border-[#FF6B00]">
                <span className="leading-[1.4] md:leading-[1.6]">紙報告とシステム入力の<br/><span className="text-[#FF6B00]">二重管理</span>で現場疲弊</span>
              </div>
              
              <div className="text-gray-300 shrink-0 font-black text-xs md:text-2xl">
                →
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#1890FF] to-[#0A6ED1] rounded-[12px] md:rounded-full py-2.5 md:py-3.5 px-2 md:px-8 text-center shadow-[0_8px_20px_rgba(24,144,255,0.3)] min-h-[64px] md:min-h-[76px] flex flex-col items-center justify-center relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default border border-white/50">
                <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-white opacity-[0.06] rounded-bl-full pointer-events-none"></div>
                <div className="text-[11px] md:text-[19px] font-black text-white leading-[1.3] md:leading-[1.5] drop-shadow-sm tracking-normal md:tracking-wide">
                  スマホ報告フローを<br/><Kenten color="white">本番導入</Kenten>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}

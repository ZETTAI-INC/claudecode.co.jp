import React from 'react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-[24px] font-bold tracking-wider text-gray-800">
            研修前と研修後、社員1人の姿が変わる
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest">
            Claude Code
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-16 px-4">
          <p className="text-[16px] md:text-[20px] font-bold leading-[1.8] tracking-wide text-gray-700">
            組織の変化は、社員1人の仕事の変化から始まります。<br className="hidden md:block" />
            研修を受けた社員は、同じ業務に「別の手札」で向き合えるようになります。
          </p>
        </div>

        {/* Before / After Container */}
        <div className="flex flex-row items-center justify-start md:justify-between gap-6 mt-10 overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 md:scroll-p-0">
          
          {/* LEFT: Before Block */}
          <div className="w-[85vw] sm:w-[320px] md:w-[46%] flex-shrink-0 snap-center md:snap-align-none bg-[#EAF5FF] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-sm md:shadow-none">
            <h3 className="text-[#1890FF] font-bold text-xl md:text-2xl tracking-wider mb-6">
              研修前の社員 (Before)
            </h3>
            
            <div className="w-full flex flex-col gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#1890FF] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  業務課題に気づいても、<br className="hidden lg:block"/>改善する手段を持っていない
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#1890FF] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  Excel・マクロ止まりで<br className="hidden lg:block"/>生産性の限界を感じている
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#1890FF] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.14 13.91c-1.39-4-1.63-8.86-1.63-8.86-.06-.85-.85-1.46-1.72-1.38-.85.06-1.46.85-1.38 1.72 0 0 .23 4.67 1.5 8.35-1.48 1.83-2.66 4.63-3.41 8.26H6.11c-.9 0-1.63-.73-1.63-1.63V4H10v12.22l2.36-2.58c.84-.92 2.22-.87 3.01.12l.77 1.15zm2.74-7.46l-2.06 2.06 1.41 1.41 2.06-2.06-1.41-1.41zM19.1 4.5l-2.06 2.06 1.41 1.41 2.06-2.06-1.41-1.41zm-15.01 16H20v2H4.09v-2z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  改善提案はできても、<br className="hidden lg:block"/>実行は外注・IT部門頼み
                </div>
              </div>

            </div>
          </div>

          {/* CENTER: Arrow (Right on Desktop, Right on Mobile) */}
          <div className="flex-shrink-0 w-8 md:w-16 h-12 md:h-24 flex items-center justify-center snap-center md:snap-align-none">
            <div className="w-0 h-0 border-l-[20px] md:border-l-[30px] border-l-gray-300 border-t-[15px] md:border-t-[20px] border-t-transparent border-b-[15px] md:border-b-[20px] border-b-transparent"></div>
          </div>

          {/* RIGHT: After Block */}
          <div className="w-[85vw] sm:w-[320px] md:w-[46%] flex-shrink-0 snap-center md:snap-align-none bg-[#FCE8E8] rounded-lg p-6 md:p-8 flex flex-col items-center shadow-sm md:shadow-none">
            <h3 className="text-[#E55252] font-bold text-xl md:text-2xl tracking-wider mb-6">
              研修後の社員 (After)
            </h3>
            
            <div className="w-full flex flex-col gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#E55252] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  業務課題を自分の手で<br className="hidden lg:block"/>ツール化・自動化できる
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#E55252] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  Claude Codeで試作が数時間、<br className="hidden lg:block"/>改修も自分で即反映
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded p-4 md:p-5 flex items-center gap-5 shadow-sm">
                <div className="text-[#E55252] w-10 flex-shrink-0 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L3.9 19.46c-.23.18-.32.49-.22.75.11.27.36.44.64.45l4.32.1c.32.01.62-.12.82-.35.2-.23.27-.55.19-.85l-1.04-3.52c-.08-.27-.32-.45-.6-.46-.28 0-.54.15-.65.41l-.47 1.1C5.56 15.65 4.8 13.92 4.8 12c0-3.97 3.23-7.2 7.2-7.2s7.2 3.23 7.2 7.2c0 2.05-.86 3.89-2.24 5.21-.21.2-.23.53-.04.75.19.2.53.22.74.04 1.63-1.55 2.65-3.73 2.65-6.2 0-4.97-4.03-9-9-9zM11 7v5.59l4.3 2.55.75-1.24-3.55-2.1V7h-1.5z" />
                  </svg>
                </div>
                <div className="font-bold text-[15px] md:text-[17px] text-gray-800 leading-snug">
                  提案ではなく「完成品」を<br className="hidden lg:block"/>上司や部署に持っていける
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;

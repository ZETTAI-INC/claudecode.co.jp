import React from "react";

const AdPerformanceComparison: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-[#4a4a4a] block"></span>
            <h2 className="text-xl md:text-2xl font-bold text-[#333]">CLAUDECODE研修受講前後の違い</h2>
          </div>
          <div className="text-center font-bold text-lg md:text-xl md:text-2xl text-[#333] tracking-wide mb-8">
            本研修の受講により、従来に比べて<span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white px-3 py-1.5 mx-1.5 rounded-lg shadow-sm border border-[#1e40af] inline-block mt-2 sm:mt-0 transform -translate-y-0.5">圧倒的な生産性向上が実現</span>できます！
          </div>
        </div>

        {/* Comparison Layout */}
        <div className="flex flex-col lg:flex-row relative items-stretch gap-0">
          
          {/* Before Section */}
          <div className="relative w-full lg:w-[45%] bg-[#111] px-6 pb-6 pt-20 lg:pt-28 flex flex-col clip-path-before pl-8 z-10" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%)' }}>
            
            {/* Background "Before" text */}
            <div className="absolute top-4 lg:top-6 left-[5%] text-6xl md:text-7xl lg:text-8xl font-black text-white opacity-10 select-none z-0">
              Before
            </div>

            <div className="relative z-10 w-full pr-12 flex flex-col flex-1">
              <div className="bg-white rounded-full py-2.5 px-6 text-center shadow-sm w-[90%] mx-auto mb-8 font-bold text-[#333] text-[13px] md:text-[15px] border-2 border-white">
                AIツールを使いこなせず、手作業で開発を継続
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8">
                {[
                  { text: 'AIツールの正しい活用法が分からず、', highlight: '従来の手法に依存', highlightPost: 'している' },
                  { text: '致命的なエラー発生時の', highlight: 'AIへの適切な質問方法が分からない', highlightPost: '' },
                  { text: '最適なアーキテクチャや技術選定に', highlight: '時間がかかっている', highlightPost: '' },
                  { text: '企画・要件定義から', highlight: '実装完了までの期間が長い', highlightPost: '' },
                  { text: '複数の生成AIツールを', highlight: '適材適所で使い分けられない', highlightPost: '' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white/10 border border-white/20 px-4 py-3 rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-white text-[13.5px] md:text-[15px] leading-[1.7]">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#e43b3b] flex items-center justify-center rounded-full shadow-sm">
                      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <div className="flex-1">
                      {item.text}
                      <span className="bg-gradient-to-r from-[#e43b3b] to-[#dc2626] text-white px-2 py-0.5 mx-0.5 rounded-md box-decoration-clone font-bold shadow-sm whitespace-nowrap border border-[#b91c1c]">
                        {item.highlight}
                      </span>
                      {item.highlightPost}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom Circles for Before */}
              <div className="mt-auto pt-4 flex justify-start gap-2 md:gap-3 lg:gap-4 leading-none w-full">
                {['開発速度', '生産性', 'コード品質'].map((label, i) => (
                  <div key={i} className="flex flex-col items-center shrink-0">
                    <div className="flex items-end justify-center mb-1 md:mb-1.5 min-h-[20px]">
                      <span className="text-white text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-extrabold leading-none tracking-tight">{label}</span>
                    </div>
                    <div className="w-11 h-11 md:w-12 md:h-12 lg:w-[3.5rem] lg:h-[3.5rem] bg-white rounded-full flex items-center justify-center border-4 border-white shadow-sm hover:scale-105 transition-transform">
                      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                        <polyline points="17 18 23 18 23 12"></polyline>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Arrow connecting Before to After */}
            <div className="hidden lg:block absolute right-[-20px] top-[40%] text-[#b3b3b3] z-20" style={{ transform: 'scale(2.5) scaleX(1.5)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
              </svg>
            </div>
          </div>

          {/* Mobile separator / down arrow */}
          <div className="lg:hidden w-full flex justify-center py-4 bg-white z-20">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="#b3b3b3" className="transform rotate-90">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
              </svg>
          </div>

          {/* After Section */}
          <div className="relative w-full lg:w-[55%] bg-white px-6 pb-6 pt-20 lg:pt-28 lg:pl-[8%] border-t-4 border-[#b3b3b3] lg:border-t-0 lg:border-l-0 overflow-hidden flex flex-col">
            {/* Right side background color matching AFTER */}
            <div className="absolute top-0 right-0 h-full w-full bg-[#f0f8ff] -z-10 bg-opacity-60"></div>
            
            {/* Background "After" text */}
            <div className="absolute top-4 lg:top-6 left-[5%] md:left-[10%] text-6xl md:text-7xl lg:text-8xl font-bold text-[#e1effc] select-none z-0">
              After
            </div>

            <div className="relative z-10 flex flex-col flex-1">
              <div className="bg-[#d2eaff] rounded-full py-2.5 px-6 text-center w-[90%] mx-auto mb-8 font-bold text-[#1e5eb0] text-[13px] md:text-[15px] border border-[#b8daff]">
                Claude Codeを駆使して、超高速なシステム開発を実現
              </div>

              <ul className="space-y-3 md:space-y-4 mb-10 pl-2 md:pl-6">
                {[
                  { text: 'を用いて、爆速なコーディングとエラー解決を実現', highlight: 'Claude Code', type: 'prefix' },
                  { text: 'により高品質な実装を担保', highlight: '最適なプロンプト設定', type: 'prefix' },
                  { text: 'プロジェクトの特性に合わせて', highlight: '最適なAIツールの選択が可能', type: 'suffix' },
                  { text: 'でプロトタイプから本番実装まで完了', highlight: '最短数日', type: 'prefix' },
                  { text: '複数のAIツールを', highlight: 'シームレスに組み合わせて開発可能', type: 'suffix' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white border border-[#e0f0ff] px-4 py-3 rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_15px_rgba(37,99,235,0.05)] text-[#333] text-[13.5px] md:text-[15px] leading-[1.7]">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#2563eb] flex items-center justify-center rounded-full shadow-sm">
                      <svg width="65%" height="65%" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="flex-1">
                      {item.type === 'prefix' ? (
                        <>
                          <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white px-2 py-0.5 mr-1 rounded-md box-decoration-clone font-bold shadow-sm whitespace-nowrap border border-[#1e40af]">
                            {item.highlight}
                          </span>
                          {item.text}
                        </>
                      ) : (
                        <>
                          {item.text}
                          <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white px-2 py-0.5 ml-1 rounded-md box-decoration-clone font-bold shadow-sm whitespace-nowrap border border-[#1e40af]">
                            {item.highlight}
                          </span>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bottom Circles for After */}
              <div className="mt-auto pt-4 flex flex-wrap lg:flex-nowrap justify-start items-center gap-2 md:gap-3 lg:gap-2 xl:gap-4 md:pl-4 xl:pl-6 leading-none w-full">
                {/* Group 1 */}
                {['開発速度', '生産性', '開発コスト'].map((label, i) => (
                  <div key={`g1-${i}`} className="flex flex-col items-center shrink-0">
                    <div className="flex items-end justify-center mb-1 md:mb-1.5 min-h-[20px]">
                      <span className="text-[#333] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-extrabold leading-none tracking-tight">{label}</span>
                    </div>
                    <div className="w-11 h-11 md:w-12 md:h-12 lg:w-[3.5rem] lg:h-[3.5rem] bg-[#d8ebff] rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 transition-transform">
                      {label === '開発コスト' ? (
                        <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                          <polyline points="17 18 23 18 23 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Plus sign */}
                <div className="flex flex-col items-center shrink-0 -mx-1 lg:mx-0">
                  <div className="min-h-[20px] mb-1 md:mb-1.5"></div>
                  <div className="flex items-center justify-center h-11 md:h-12 lg:h-[3.5rem]">
                    <span className="text-2xl md:text-3xl font-bold text-[#2563eb] mix-blend-multiply opacity-80">＋</span>
                  </div>
                </div>
                
                {/* Group 2 */}
                {['スキル定着', '実装品質'].map((label, i) => (
                  <div key={`g2-${i}`} className="flex flex-col items-center shrink-0">
                    <div className="flex items-end justify-center mb-1 md:mb-1.5 min-h-[20px]">
                      <span className="text-black text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-extrabold leading-none tracking-tight">{label}</span>
                    </div>
                    <div className="w-11 h-11 md:w-12 md:h-12 lg:w-[3.5rem] lg:h-[3.5rem] bg-black rounded-full flex items-center justify-center border-2 border-white shadow-md relative hover:scale-[1.08] transition-transform">
                      {/* Highlight dot removed, the inverted color IS the highlight */}
                      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        {label === '実装品質' ? (
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        ) : (
                          <>
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdPerformanceComparison;

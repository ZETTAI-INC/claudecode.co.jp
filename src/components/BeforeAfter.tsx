import React from 'react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block text-[#1890FF] font-black tracking-widest text-sm mb-4 bg-[#EAF5FF] px-4 py-1.5 rounded-full">
            Claude Code
          </div>
          <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-gray-800 mb-6 leading-relaxed">
            研修前と研修後、<br className="md:hidden"/>社員1人の姿が変わる
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 font-bold leading-[1.9]">
            組織の変化は、社員1人の仕事の変化から始まります。<br className="hidden md:block"/>
            研修を受けた社員は、同じ業務に「別の手札」で向き合えるようになります。
          </p>
        </div>

        {/* Before / After Split Panel */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          
          {/* LEFT: Before */}
          <div className="w-full md:w-1/2 bg-[#F8FAFC] p-8 md:p-12 flex flex-col relative">
            <h3 className="text-gray-400 font-black text-lg tracking-widest mb-8 border-b border-gray-200 pb-4">
              研修前の社員 (Before)
            </h3>
            
            <ul className="flex flex-col gap-8 mt-2">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div className="font-bold text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                  業務課題に気づいても、<br />改善する手段を持っていない
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div className="font-bold text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                  Excel・マクロ止まりで<br />生産性の限界を感じている
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div className="font-bold text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                  改善提案はできても、<br />実行は外注・IT部門頼み
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: After */}
          <div className="w-full md:w-1/2 bg-[#1890FF] p-8 md:p-12 flex flex-col relative text-white">
            {/* Arrow connecting the two sides implicitly via background design, or just keep it minimal */}
            <div className="hidden md:block absolute top-[50%] -left-4 -translate-y-1/2 w-8 h-8 bg-[#1890FF] rotate-45 transform origin-center border-l border-b border-transparent"></div>
            
            <h3 className="text-blue-200 font-black text-lg tracking-widest mb-8 border-b border-blue-400 pb-4 relative z-10">
              研修後の社員 (After)
            </h3>
            
            <ul className="flex flex-col gap-8 mt-2 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-[#1890FF] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="font-bold text-[16px] md:text-[18px] leading-[1.7]">
                  業務課題を自分の手で<br />ツール化・自動化できる
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-[#1890FF] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="font-bold text-[16px] md:text-[18px] leading-[1.7]">
                  Claude Codeで試作が数時間、<br />改修も自分で即反映
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-[#1890FF] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="font-bold text-[16px] md:text-[18px] leading-[1.7]">
                  提案ではなく「完成品」を<br />上司や部署に持っていける
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;

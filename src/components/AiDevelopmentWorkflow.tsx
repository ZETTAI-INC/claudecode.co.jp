import React from "react";
import { renderWithTerms } from "@/components/renderWithTerms";

const PROCESS_STEPS = [
  {
    id: 1,
    traditionalTitle: "業務課題の設定",
    desc: "研修で取り組むテーマを決め、ゴールを明確にする。ここは同じ",
    aiTitle: "自部署の課題を題材に",
    isAiSkipped: false,
  },
  {
    id: 2,
    traditionalTitle: "プログラミング基礎",
    desc: "変数、関数、条件分岐など、プログラミングの基礎文法を座学で学ぶ",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 3,
    traditionalTitle: "フレームワーク学習",
    desc: "React、SQL、インフラなど、技術スタックを体系的に座学で習得する",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 4,
    traditionalTitle: "演習・理解度テスト",
    desc: "用意された課題でコーディング練習。テストやレポートで知識を確認",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 5,
    traditionalTitle: "実務への応用",
    desc: "学んだ知識を実務にどう活かすかを考えるが、実践機会は限られる",
    aiTitle: "Claude Codeで即開発",
    isAiSkipped: false,
  },
  {
    id: 6,
    traditionalTitle: "修了",
    desc: "「AIを理解した」状態で終了。成果物は特になく、現場に戻る",
    aiTitle: "本番ツール1本が稼働",
    isAiSkipped: false,
  },
];

const AiDevelopmentWorkflow: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 overflow-hidden">
        
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-black text-[#29034f] tracking-wide leading-[1.7]">
            同じ「AI研修」でも、<br className="hidden md:block" />
            <strong style={{ WebkitTextEmphasis: 'filled circle #ff5c00', textEmphasis: 'filled circle #ff5c00', color: '#ff5c00', padding: '0 4px', fontWeight: 900 }}>設計思想</strong>がまるで違います。
          </h2>
        </div>

        {/* Workflow Diagram Wrapper (Horizontal scroll on mobile) */}
        <div className="overflow-x-auto pb-10">
          <div className="min-w-[1000px] flex items-start justify-between gap-4 relative pl-4 mt-8">
            
            {/* Column 1: Left Arrow & Problem Statement */}
            <div className="w-52 relative flex flex-col pt-16">
              {/* Giant Left Arrow Base */}
              <div className="relative h-[550px] w-6 bg-[#e5e5e5] mx-auto z-0 before:content-[''] before:absolute before:-bottom-4 before:-left-3 before:w-0 before:h-0 before:border-l-[1.5rem] before:border-r-[1.5rem] before:border-t-[1.5rem] before:border-transparent before:border-t-[#e5e5e5]"></div>
              
              <div className="absolute top-[35%] w-full text-center px-2 bg-white/80 py-4 z-10 flex flex-col items-center">
                {/* SVG Yarn / Messy scribbles icon */}
                <div className="mb-4">
                  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#888" strokeWidth="2.5" className="opacity-80">
                    <path d="M 50 50 m -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0" />
                    <path d="M 40 40 c -20 -10, 10 -40, 30 -10 c 20 30, -50 20, -30 40 c 20 20, 50 -10, 10 -40" />
                    <path d="M 30 60 c 0 30, 40 20, 50 -5 c 10 -25, -40 -30, -50 -10" />
                    <path d="M 25 50 c -10 20, 40 40, 50 10 c 10 -30, -40 -40, -50 -10" />
                  </svg>
                </div>
                <p className="text-[#555] text-[13px] leading-[1.8] font-bold mt-2">
                  受講期間3〜6ヶ月。<br />
                  <span className="text-[#ff5c00]">修了後に残るのは「理解した」という感覚だけ</span>
                </p>
              </div>
            </div>

            {/* Column 2: Traditional Method */}
            <div className="w-52 flex flex-col gap-6 relative z-10">
              <div className="h-10 bg-[#a6a6a6] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                一般的なAI研修
              </div>
              
              {PROCESS_STEPS.map((step) => (
                <div key={`trad-${step.id}`} className="h-14 border-2 border-[#a6a6a6] flex items-center justify-center text-center font-bold text-[#666] text-[15px] bg-white relative">
                  {step.traditionalTitle}
                </div>
              ))}
            </div>

            {/* Column 3: Descriptions (belongs to Column 2 / Traditional) */}
            <div className="w-72 flex flex-col gap-6 relative z-10">
              <div className="h-10 flex items-center justify-center font-bold text-[13px] text-[#888] mb-6 tracking-wide">
                <span className="mr-1">←</span>一般的なAI研修の中身
              </div>
              {PROCESS_STEPS.map((step) => (
                <div key={`desc-${step.id}`} className="h-14 flex items-center justify-center text-center px-3">
                  <p className="text-[#555] text-[13px] leading-[1.6] font-semibold tracking-wide">
                    {renderWithTerms(step.desc)}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 4: AI Workflow */}
            <div className="w-56 flex flex-col gap-6 relative z-10">
              <div className="h-10 flex items-center justify-center font-bold mb-6">
                <div className="flex items-center gap-2 text-[#4682b4] text-xl">
                  <div className="w-8 h-8 bg-[#6aa1d4] text-white rounded-md flex items-center justify-center font-bold text-lg">C</div>
                  私たちのClaude Code研修
                </div>
              </div>
              
              {PROCESS_STEPS.map((step) => (
                <div key={`ai-${step.id}`} className={`h-14 border-2 flex items-center justify-center text-center font-bold text-[#4682b4] text-[15px] ${step.isAiSkipped ? 'border-[#d0d0d0] border-dashed text-transparent' : 'border-[#6aa1d4] bg-white'}`}>
                  {step.isAiSkipped ? 'Skip' : step.aiTitle}
                </div>
              ))}
            </div>

            {/* Column 5: Architectural Skips & Message */}
            <div className="w-64 relative pt-[5.5rem] flex items-start">
              
              {/* Skip Arch Curve */}
              <div className="absolute top-[9rem] left-[-30px] w-full h-[230px] pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 200 400" preserveAspectRatio="none">
                  <path d="M 0,20 Q 150,50 150,200 T 0,380" fill="none" stroke="#6aa1d4" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 0,380 L 10,370 M 0,380 L 10,390" fill="none" stroke="#6aa1d4" strokeWidth="2" />
                </svg>
              </div>

              {/* Message Box floating inside arch */}
              <div className="mt-[7rem] ml-12 relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#6aa1d4]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[#4682b4] text-[14px] leading-[1.8] font-bold text-center mt-3">
                  受講期間14日。<br className="hidden lg:block"/>
                  <span className="text-[#ff5c00] border-b-2 border-orange-200 pb-1 mt-2 inline-block">修了日に本番稼働する業務ツールが1本残る</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <p className="text-[#888] text-[11px] md:text-[12px] leading-[1.7] text-center mt-6">
          ※ 一般的なAI研修・プログラミング研修のカリキュラム構成に基づく比較です。
        </p>

      </div>
    </section>
  );
};

export default AiDevelopmentWorkflow;

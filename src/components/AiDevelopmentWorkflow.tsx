import React from "react";

const PROCESS_STEPS = [
  {
    id: 1,
    traditionalTitle: "要件定義",
    desc: "サービスコンセプトを立案、機能や仕様などの要件定義書を作成し開発ベンダーへ指示",
    aiTitle: "要件・プロンプト設計",
    isAiSkipped: false,
  },
  {
    id: 2,
    traditionalTitle: "設計・モックアップ",
    desc: "要件定義書を基にモックやプロトタイプを確認し、システム化に向けた微調整を実施",
    aiTitle: "モック自動生成",
    isAiSkipped: false,
  },
  {
    id: 3,
    traditionalTitle: "実装・コーディング",
    desc: "開発リソースを確保した上で、実装を進め納期・進捗を管理",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 4,
    traditionalTitle: "インフラ構築",
    desc: "実装が完了したら、サーバー等のインフラ環境を自動構築し本番環境へアップ（デプロイ）",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 5,
    traditionalTitle: "テスト・バグ対応",
    desc: "品質確認のテスト実施と、発見されたエラー・バグ対応などの処理を実施",
    aiTitle: "",
    isAiSkipped: true,
  },
  {
    id: 6,
    traditionalTitle: "サービス提供・改善",
    desc: "本番リリース・サービス提供を実行。ユーザーからのフィードバック対応も実施",
    aiTitle: "サービス提供・改善",
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
            研修修了後、社員1人の開発フローが<strong style={{ WebkitTextEmphasis: 'filled circle #ff5c00', textEmphasis: 'filled circle #ff5c00', color: '#ff5c00', padding: '0 4px', fontWeight: 900 }}>別物</strong>に変わります。<br className="hidden md:block" />
            業務要件を知っているからこそ、Claude Codeと組み合わせると一気に<strong style={{ WebkitTextEmphasis: 'filled circle #ff5c00', textEmphasis: 'filled circle #ff5c00', color: '#ff5c00', padding: '0 4px', fontWeight: 900 }}>最短ルート</strong>になります。
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
                  外注先とのやりとりが多く、業務改善が現場のペースで進まない。<br />
                  <span className="text-[#ff5c00]">小さな変更も社内完結できず時間がかかる</span>
                </p>
              </div>
            </div>

            {/* Column 2: Traditional Method */}
            <div className="w-52 flex flex-col gap-6 relative z-10">
              <div className="h-10 bg-[#a6a6a6] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                受講前の開発フロー
              </div>
              
              {PROCESS_STEPS.map((step) => (
                <div key={`trad-${step.id}`} className="h-14 border-2 border-[#a6a6a6] flex items-center justify-center text-center font-bold text-[#666] text-[15px] bg-white relative">
                  {step.traditionalTitle}
                </div>
              ))}
            </div>

            {/* Column 3: Descriptions */}
            <div className="w-72 flex flex-col gap-6 pt-[5.5rem] relative z-10">
              {PROCESS_STEPS.map((step) => (
                <div key={`desc-${step.id}`} className="h-14 flex items-center justify-center text-center px-3">
                  <p className="text-[#555] text-[13px] leading-[1.6] font-semibold tracking-wide">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Column 4: AI Workflow */}
            <div className="w-56 flex flex-col gap-6 relative z-10">
              <div className="h-10 flex items-center justify-center font-bold mb-6">
                <div className="flex items-center gap-2 text-[#4682b4] text-xl">
                  <div className="w-8 h-8 bg-[#6aa1d4] text-white rounded-md flex items-center justify-center font-bold text-lg">C</div>
                  研修後のフロー
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
                  環境構築やコーディング・デバッグの大半を<br className="hidden lg:block"/>Claude Codeが代行し、<br />
                  <span className="text-[#ff5c00] border-b-2 border-orange-200 pb-1 mt-2 inline-block">受講者は業務設計と現場改善に集中できる状態へ</span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AiDevelopmentWorkflow;

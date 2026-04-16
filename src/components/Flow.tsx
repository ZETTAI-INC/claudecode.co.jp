type Step = {
  number: string;
  title: string;
  duration: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "お問い合わせ",
    duration: "当日〜翌営業日",
    description:
      "フォームまたは電話からご連絡ください。課題の概要をお伺いし、次のヒアリング日程を調整します。",
  },
  {
    number: "02",
    title: "課題ヒアリング",
    duration: "60〜90分",
    description:
      "貴社の内製化状況・対象部署・受講候補者のスキル・ゴール設定を伺います。オンライン可。",
  },
  {
    number: "03",
    title: "カリキュラム提案 & お見積もり",
    duration: "1週間以内",
    description:
      "ヒアリング内容をもとに、自社向けにカスタマイズしたカリキュラムとお見積もりをご提示します。",
  },
  {
    number: "04",
    title: "ご契約 & 事前準備",
    duration: "2〜3週間",
    description:
      "契約締結後、受講者の課題選定・開発環境の準備・事前アンケートを進めます。",
  },
  {
    number: "05",
    title: "研修開始",
    duration: "14日間〜",
    description:
      "初日からClaude Codeで業務ツールの設計・実装を開始。修了日には1人1本の本番稼働ツールが残ります。",
  },
];

export default function Flow() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              FLOW
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            お問い合わせから
            <br className="hidden md:block" />
            研修開始までの流れ
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            お問い合わせから最短3週間で研修を開始できます。
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[60px] top-[40px] bottom-[40px] w-[2px] bg-[#d8ebff]" />
          {/* Mobile horizontal line */}
          <div className="block md:hidden absolute left-4 right-0 top-[40px] h-[2px] bg-[#d8ebff]" />

          <div className="flex flex-row md:flex-col gap-8 md:gap-10 overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 md:scroll-p-0 pt-2">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col md:flex-row gap-6 md:gap-10 w-[85vw] sm:w-[320px] md:w-[100%] flex-shrink-0 snap-center md:snap-align-none">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-white border-4 border-[#2563eb] flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.15)]">
                    <span className="text-[#2563eb] text-[10px] md:text-xs font-bold tracking-[0.1em]">
                      STEP
                    </span>
                    <span className="text-[#2563eb] text-2xl md:text-4xl font-black italic leading-none">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-[16px] p-6 md:p-8 border border-[#e6edf5] shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-[#151515]">
                      {step.title}
                    </h3>
                    <span className="inline-block text-[12px] md:text-[13px] text-[#2563eb] font-bold bg-[#eaf3ff] px-3 py-1 rounded-full self-start md:self-auto">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[#555] text-[13px] md:text-[15px] leading-[1.8]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Comparison = {
  label: string;
  others: string;
  us: string;
};

const comparisons: Comparison[] = [
  {
    label: "教える相手",
    others: "プログラミング未経験者を一から育てる",
    us: "業務を一番知る既存社員にClaude Codeだけ追加する",
  },
  {
    label: "ゴール定義",
    others: "「AIを理解している」状態で終了",
    us: "修了日に本番稼働する業務ツールが1本残る",
  },
  {
    label: "カリキュラム",
    others: "座学・動画中心で汎用的に設計",
    us: "受講者の自部署の業務課題をそのまま題材にする",
  },
  {
    label: "修了後",
    others: "研修終了で関係も終了",
    us: "現場定着まで伴走メンターが継続支援",
  },
  {
    label: "成果測定",
    others: "理解度テスト・アンケート",
    us: "業務ツールの稼働数と社内改善の工数削減",
  },
];

export default function ServiceDifferentiation() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              WHY US
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            他のAI研修とは、
            <br className="hidden md:block" />
            前提から違います
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            「未経験者にプログラミングを教える研修」ではなく、
            <br className="hidden md:block" />
            「業務を知る社員に Claude Code だけを装着する研修」です。
          </p>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-[#e6edf5]">
          <div className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[180px_1fr_1fr]">
            <div className="bg-[#151515] text-white p-4 md:p-6 font-bold text-sm md:text-base flex items-center">
              比較項目
            </div>
            <div className="bg-[#e6edf5] text-[#555] p-4 md:p-6 font-bold text-sm md:text-base text-center border-r border-white">
              一般的なAI研修
            </div>
            <div className="bg-[#2563eb] text-white p-4 md:p-6 font-bold text-sm md:text-base text-center">
              当社のリスキリング研修
            </div>

            {comparisons.map((row, i) => (
              <div key={row.label} className="contents">
                <div
                  className={`p-4 md:p-6 font-bold text-[#151515] text-sm md:text-[15px] flex items-center ${
                    i % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"
                  } border-t border-[#e6edf5]`}
                >
                  {row.label}
                </div>
                <div
                  className={`p-4 md:p-6 text-[#888] text-[13px] md:text-[14px] leading-[1.7] ${
                    i % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"
                  } border-t border-[#e6edf5] border-r border-[#e6edf5]`}
                >
                  {row.others}
                </div>
                <div
                  className={`p-4 md:p-6 text-[#151515] text-[13px] md:text-[14px] leading-[1.7] font-medium ${
                    i % 2 === 0 ? "bg-[#eaf3ff]" : "bg-[#f0f6ff]"
                  } border-t border-[#e6edf5]`}
                >
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="inline-block text-[#151515] text-base md:text-lg font-bold leading-[1.8] bg-white border-2 border-[#2563eb] px-6 md:px-10 py-4 md:py-5 rounded-full">
            違いは手法ではなく、
            <span className="text-[#2563eb]">「誰に・何を残すか」</span>
            の設計思想そのもの
          </p>
        </div>
      </div>
    </section>
  );
}

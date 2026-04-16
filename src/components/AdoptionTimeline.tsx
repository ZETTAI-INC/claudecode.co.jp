export default function AdoptionTimeline() {
  const milestones = [
    {
      day: "5",
      unit: "日後",
      color: "#2563eb",
      bg: "#eaf3ff",
      border: "#b3d4ff",
      label: "STEP 1",
      title: "社員が「自分で作れる」状態になる",
      description:
        "プログラミング未経験の社員が、Claude Codeを使って業務ツールを自力で設計・実装・公開できるスキルを習得。外注や情シス依頼なしで「思いついたら自分で形にできる」実装力が身につきます。",
      deliverable: "成果：受講者1人あたり業務ツール1本を本番公開",
      impact: "外注コスト削減・開発リードタイム短縮",
    },
    {
      day: "30",
      unit: "日後",
      color: "#f97316",
      bg: "#fff7f0",
      border: "#ffcaa5",
      label: "STEP 2",
      title: "業務効率化ツールが量産される",
      description:
        "実装力を得た社員が、自部署の課題を次々とツール化。Excel台帳のWeb化、日報の自動集計、承認フローのアプリ化など、現場が「欲しい」と思った瞬間に内製で解決できる体制が動き出します。",
      deliverable: "成果：部署内で稼働する業務ツール複数本",
      impact: "業務時間の削減・属人化の解消",
    },
    {
      day: "90",
      unit: "日後",
      color: "#059669",
      bg: "#ecfdf5",
      border: "#a7f3d0",
      label: "STEP 3",
      title: "受講者が教える側になり、AI人材が増殖する",
      description:
        "ツールの成果を見た他部署から「うちにも教えて」が発生。受講者がナレッジを横展開し、社内に自走できるAI人材が自然増殖。1人の研修投資が、組織全体のAI実装力に変わります。",
      deliverable: "成果：社内AI実装者の自然増・内製文化の定着",
      impact: "採用コスト削減・全社DXの加速",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              AFTER ADOPTION
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            1人の研修が、組織を変える
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            実装力の獲得 → 業務改善の量産 → AI人材の増殖。
            <br className="hidden md:block" />
            投資が複利で回る3ステップです。
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[48px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2563eb] via-[#f97316] to-[#059669] rounded-full" />
          <div className="block md:hidden absolute left-4 right-0 top-[36px] h-[3px] bg-gradient-to-r from-[#2563eb] via-[#f97316] to-[#059669] rounded-full" />

          <div className="flex flex-row md:flex-col gap-6 md:gap-8 md:space-y-0 overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-p-4 sm:scroll-p-6 md:scroll-p-0 pt-2">
            {milestones.map((m) => (
              <div key={m.day} className="relative flex flex-col md:flex-row gap-5 md:gap-8 w-[85vw] sm:w-[320px] md:w-[100%] flex-shrink-0 snap-center md:snap-align-none">
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full flex flex-col items-center justify-center border-[3px]"
                    style={{
                      backgroundColor: m.bg,
                      borderColor: m.color,
                    }}
                  >
                    <span
                      className="text-2xl md:text-[36px] font-black leading-none"
                      style={{ color: m.color }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] md:text-xs font-bold"
                      style={{ color: m.color }}
                    >
                      {m.unit}
                    </span>
                  </div>
                </div>

                <div
                  className="flex-1 rounded-[16px] p-5 md:p-7 border-2"
                  style={{
                    backgroundColor: m.bg,
                    borderColor: m.border,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-full"
                      style={{
                        color: m.color,
                        backgroundColor: "rgba(255,255,255,0.8)",
                        border: `1px solid ${m.border}`,
                      }}
                    >
                      {m.label}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#151515] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[#555] text-[13px] md:text-[15px] leading-[1.8] mb-4">
                    {m.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <p
                      className="text-[12px] md:text-[13px] font-bold px-3 py-1.5 rounded-md inline-block"
                      style={{
                        color: m.color,
                        backgroundColor: "rgba(255,255,255,0.8)",
                        border: `1px solid ${m.border}`,
                      }}
                    >
                      {m.deliverable}
                    </p>
                    <p
                      className="text-[12px] md:text-[13px] font-bold px-3 py-1.5 rounded-md inline-block"
                      style={{
                        color: "#555",
                        backgroundColor: "rgba(255,255,255,0.6)",
                        border: `1px solid #e2e8f0`,
                      }}
                    >
                      → {m.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

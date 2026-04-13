export default function AdoptionTimeline() {
  const milestones = [
    {
      day: "14",
      unit: "日後",
      color: "#2563eb",
      bg: "#eaf3ff",
      border: "#b3d4ff",
      title: "最初の業務ツールが現場で動く",
      description:
        "受講者が自部署の課題（Excel台帳のWeb化、日報の自動集計、承認フローのアプリ化など）をClaude Codeで実装。修了日には、現場で使える動くツールが1本完成しています。",
      deliverable: "納品物：動作する業務ツール 1本 ＋ 運用手順書",
    },
    {
      day: "30",
      unit: "日後",
      color: "#ff5c00",
      bg: "#fff7f0",
      border: "#ffcaa5",
      title: "現場の要望を自分で反映できる",
      description:
        "使い始めて出てきた「ここを変えたい」「この項目も追加したい」という要望を、受講者がClaude Codeに指示して翌日には反映。外注せず、同部署内で改善サイクルが回り始めます。",
      deliverable: "納品物：改修ログ・追加機能一覧",
    },
    {
      day: "90",
      unit: "日後",
      color: "#059669",
      bg: "#ecfdf5",
      border: "#a7f3d0",
      title: "2本目・3本目のツールが生まれる",
      description:
        "最初のツールの成功を見た周囲から「これも作れない？」という会話が自然発生。受講者が核となり、部署内の他の業務課題もClaude Codeで順次ツール化されていきます。",
      deliverable: "納品物：部署内で稼働する業務ツール 複数本",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              AFTER ADOPTION
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            導入すると、何が起きるか
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            営業コピーではなく、納品物のタイムラインです。
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[48px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2563eb] via-[#ff5c00] to-[#059669] rounded-full" />

          <div className="space-y-6 md:space-y-8">
            {milestones.map((m) => (
              <div key={m.day} className="relative flex gap-5 md:gap-8">
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
                  <h3 className="text-lg md:text-xl font-bold text-[#151515] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[#555] text-[13px] md:text-[15px] leading-[1.8] mb-3">
                    {m.description}
                  </p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

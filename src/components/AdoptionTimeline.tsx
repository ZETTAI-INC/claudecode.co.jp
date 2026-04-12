export default function AdoptionTimeline() {
  const milestones = [
    {
      day: "14",
      unit: "日後",
      color: "#2563eb",
      bg: "#eaf3ff",
      border: "#b3d4ff",
      title: "社内ツール1本が本番公開",
      description:
        "1部署1テーマに絞り、受講者が自部署の業務課題を題材に開発した社内ツールが本番環境で稼働を開始します。",
      deliverable: "納品物：本番稼働する業務ツール 1本",
    },
    {
      day: "30",
      unit: "日後",
      color: "#ff5c00",
      bg: "#fff7f0",
      border: "#ffcaa5",
      title: "受講者が改修を自走",
      description:
        "受講者2名以上が軽微な改修・機能追加を自力で実行。改善 backlog が整理され、次に作るべきものが見えている状態になります。",
      deliverable: "納品物：改善 backlog と自走実績レポート",
    },
    {
      day: "90",
      unit: "日後",
      color: "#059669",
      bg: "#ecfdf5",
      border: "#a7f3d0",
      title: "小規模改善が内製候補に切り替わる",
      description:
        "これまで外注前提だった小規模な業務改善が、社内で検討・実装できる体制に変わります。外注費の削減と意思決定スピードの向上が同時に起きます。",
      deliverable: "納品物：内製化判断フレームワークと実績データ",
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

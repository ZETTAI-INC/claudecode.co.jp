export default function ProgramGates() {
  const gates = [
    {
      day: "Day 1–3",
      gate: "プロトタイプ完成",
      color: "#2563eb",
      bg: "#eaf3ff",
      deliverables: [
        "業務課題のヒアリング & スコープ決定",
        "Claude Code 環境セットアップ",
        "対象業務のプロトタイプ（動作する最小版）を実装",
      ],
      checkpoint: "動くプロトタイプを社内デモし、方向性を確認",
    },
    {
      day: "Day 4–7",
      gate: "レビュー通過",
      color: "#7c3aed",
      bg: "#f5f3ff",
      deliverables: [
        "プロトタイプをもとに機能を拡充",
        "コードレビュー & フィードバック対応",
        "UIの調整と業務フローへの組み込み設計",
      ],
      checkpoint: "講師レビューを通過し、本番品質の基準を満たす",
    },
    {
      day: "Day 8–10",
      gate: "デプロイ準備完了",
      color: "#ff5c00",
      bg: "#fff7f0",
      deliverables: [
        "本番環境へのデプロイ設定",
        "アクセス権限・セキュリティ設定",
        "運用ドキュメント作成",
      ],
      checkpoint: "本番デプロイの技術的準備が完了し、承認待ち状態",
    },
    {
      day: "Day 11–14",
      gate: "本番公開 & 引き継ぎ",
      color: "#059669",
      bg: "#ecfdf5",
      deliverables: [
        "本番環境に公開・稼働開始",
        "利用者への操作説明",
        "改善 backlog の整理と引き継ぎ",
      ],
      checkpoint: "業務ツール1本が本番稼働し、改善計画が文書化されている",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              14-DAY PROGRAM
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            14日間の到達ゲート
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            授業内容ではなく、各節目で何が完成しているかを示します。
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {gates.map((g) => (
            <div
              key={g.day}
              className="rounded-[16px] border-2 overflow-hidden"
              style={{ borderColor: g.color }}
            >
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-3 md:px-6 md:py-4"
                style={{ backgroundColor: g.bg }}
              >
                <span
                  className="text-sm md:text-base font-black tracking-wider"
                  style={{ color: g.color }}
                >
                  {g.day}
                </span>
                <span className="text-lg md:text-xl font-black text-[#151515]">
                  {g.gate}
                </span>
              </div>

              <div className="px-5 py-4 md:px-6 md:py-5 bg-white">
                <ul className="space-y-2 mb-4">
                  {g.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-[13px] md:text-[14px] text-[#444] leading-[1.7]"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 font-bold"
                        style={{ color: g.color }}
                      >
                        &#10003;
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2 bg-[#f8fafc] rounded-lg px-4 py-3">
                  <span className="text-[#ff5c00] font-bold text-sm flex-shrink-0">
                    GATE
                  </span>
                  <p className="text-[#151515] text-[13px] md:text-[14px] font-bold leading-[1.7]">
                    {g.checkpoint}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="inline-block text-[#151515] text-sm md:text-base font-bold leading-[1.8] bg-[#eaf3ff] border border-[#b3d4ff] px-6 py-3 rounded-full">
            失敗せず進めるか？ が分かる設計です
          </p>
        </div>
      </div>
    </section>
  );
}

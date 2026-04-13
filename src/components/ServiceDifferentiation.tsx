import React from "react";

type Comparison = {
  label: string;
  others: React.ReactNode;
  us: React.ReactNode;
};

const comparisons: Comparison[] = [
  {
    label: "教える相手",
    others: "プログラミング未経験者を一から育てる",
    us: (
      <div className="flex flex-col gap-2">
        <span className="inline-block w-fit text-[#ff5c00] text-[11px] md:text-[12px] font-bold border border-[#ffcaa5] bg-white px-2 py-0.5 rounded-sm tracking-wide">
          最適人材への投資
        </span>
        <span className="font-bold text-[#151515] text-[13.5px] md:text-[15px] leading-[1.6]">
          業務を一番知る既存社員に<br className="hidden lg:block"/>Claude Codeだけ追加する
        </span>
      </div>
    ),
  },
  {
    label: "ゴール定義",
    others: "「AIを理解している」状態で終了",
    us: (
      <div className="flex flex-col gap-2">
        <span className="inline-block w-fit text-[#ff5c00] text-[11px] md:text-[12px] font-bold border border-[#ffcaa5] bg-white px-2 py-0.5 rounded-sm tracking-wide">
          実運用への到達
        </span>
        <span className="font-bold text-[#151515] text-[13.5px] md:text-[15px] leading-[1.6]">
          修了日に本番稼働する<br className="hidden lg:block"/>業務ツールが1本残る
        </span>
      </div>
    ),
  },
  {
    label: "カリキュラム",
    others: "座学・動画中心で汎用的に設計",
    us: (
      <div className="flex flex-col gap-2">
        <span className="inline-block w-fit text-[#ff5c00] text-[11px] md:text-[12px] font-bold border border-[#ffcaa5] bg-white px-2 py-0.5 rounded-sm tracking-wide">
          即効性の高い題材
        </span>
        <span className="font-bold text-[#151515] text-[13.5px] md:text-[15px] leading-[1.6]">
          受講者の自部署の業務課題を<br className="hidden lg:block"/>そのまま題材にする
        </span>
      </div>
    ),
  },
  {
    label: "修了後",
    others: "研修終了で関係も終了",
    us: (
      <div className="flex flex-col gap-2">
        <span className="inline-block w-fit text-[#2563eb] text-[11px] md:text-[12px] font-bold border border-[#b3d4ff] bg-white px-2 py-0.5 rounded-sm tracking-wide">
          継続的なサポート
        </span>
        <span className="font-bold text-[#151515] text-[13.5px] md:text-[15px] leading-[1.6]">
          現場定着まで伴走メンターが<br className="hidden lg:block"/>継続支援
        </span>
      </div>
    ),
  },
  {
    label: "成果測定",
    others: "理解度テスト・アンケート",
    us: (
      <div className="flex flex-col gap-2">
        <span className="inline-block w-fit text-[#ff5c00] text-[11px] md:text-[12px] font-bold border border-[#ffcaa5] bg-white px-2 py-0.5 rounded-sm tracking-wide">
          事業KPIでの評価
        </span>
        <span className="font-bold text-[#151515] text-[13.5px] md:text-[15px] leading-[1.6]">
          業務ツールの稼働数と<br className="hidden lg:block"/>社内改善の工数削減
        </span>
      </div>
    ),
  },
];

export default function ServiceDifferentiation() {
  return (
    <section className="bg-[#f8fafc] py-12 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              5 KEY DIFFERENCES
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-black text-[#151515] leading-[1.4] tracking-tight">
            違いを5つの項目で整理
          </h2>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-[#e6edf5]">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr]">
            <div className="hidden md:flex bg-[#151515] text-white px-6 py-4 font-bold text-base items-center">
              比較項目
            </div>
            <div className="hidden md:block bg-[#e6edf5] text-[#555] px-6 py-4 font-bold text-base text-center border-r border-white">
              一般的なAI研修
            </div>
            <div className="hidden md:block bg-[#2563eb] text-white px-6 py-4 font-bold text-base text-center">
              当社のリスキリング研修
            </div>

            {comparisons.map((row, i) => (
              <div key={row.label} className="flex flex-col border-b-[6px] border-[#e6edf5] md:border-none md:contents last:border-b-0">
                <div
                  className={`p-3 md:px-6 md:py-4 font-bold text-white md:text-[#151515] text-[15px] flex items-center bg-[#151515] md:bg-transparent ${
                    i % 2 === 0 ? "md:bg-[#f8fafc]" : "md:bg-white"
                  } md:border-t md:border-[#e6edf5]`}
                >
                  {row.label}
                </div>
                <div className="flex flex-col md:contents">
                  <div className="bg-[#f1f5f9] text-[#555] px-4 py-2 font-bold text-[12px] md:hidden border-b border-[#e2e8f0]">
                    一般的なAI研修
                  </div>
                  <div
                    className={`p-4 md:px-6 md:py-4 text-[#888] text-[14px] leading-[1.6] bg-white md:bg-transparent ${
                      i % 2 === 0 ? "md:bg-[#f8fafc]" : "md:bg-white"
                    } border-b md:border-b-0 md:border-t md:border-r border-[#e6edf5]`}
                  >
                    {row.others}
                  </div>
                </div>
                <div className="flex flex-col md:contents">
                  <div className="bg-[#eef2ff] text-[#2563eb] px-4 py-2 font-bold text-[12px] md:hidden border-b border-[#dbeafe]">
                    当社のリスキリング研修
                  </div>
                  <div
                    className={`p-4 md:px-6 md:py-4 text-[#151515] text-[14px] leading-[1.6] font-medium bg-[#f8fafc] md:bg-transparent ${
                      i % 2 === 0 ? "md:bg-[#eaf3ff]" : "md:bg-[#f0f6ff]"
                    } md:border-t border-[#e6edf5]`}
                  >
                    {row.us}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="inline-block text-[#151515] text-sm md:text-base font-bold leading-[1.6] bg-white border-2 border-[#2563eb] px-5 md:px-8 py-2.5 md:py-3 rounded-full">
            違いは手法ではなく、
            <span className="text-[#2563eb]">「誰に・何を残すか」</span>
            の設計思想そのもの
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

interface CheckItem {
  id: string;
  label: string;
  detail: string;
}

const checkItems: CheckItem[] = [
  {
    id: "mac",
    label: "受講者にMacを用意できる",
    detail:
      "Windowsでも受講可能ですが、環境起因のエラーが起きやすく非推奨です。Macであればセットアップ不要でスムーズに開始できます。",
  },
  {
    id: "memory",
    label: "PCのメモリが16GB以上ある（32GB推奨）",
    detail:
      "Claude Codeとブラウザ・エディタを同時に動かすため、16GB以上が必要です。32GBあるとビルド時も安定します。",
  },
  {
    id: "department",
    label: "対象部署が1つに絞れている",
    detail:
      "まず1チームで成功事例をつくり、横展開するのが最も確実です。全社一斉ではなく、1部署集中を推奨しています。",
  },
  {
    id: "person",
    label: "受講候補者が決まっている（2名以上）",
    detail:
      "人選が決まっていれば、業務課題に合わせたカリキュラム設計がすぐに始められます。",
  },
  {
    id: "task",
    label: "内製化したい業務が1つ以上ある",
    detail:
      "Excel台帳のWeb化、日報集計、承認フローなど、具体的な課題があるほど研修効果が高まります。",
  },
  {
    id: "owner",
    label: "現場に推進責任者がいる",
    detail:
      "研修後の定着・改善を継続するために、現場側にオーナーシップを持つ人が必要です。",
  },
  {
    id: "security",
    label: "情シス・法務に事前相談できる体制がある",
    detail:
      "クラウド利用・外部API通信の可否など、セキュリティ要件を事前に確認できると契約後に止まりません。",
  },
  {
    id: "scope",
    label: "最初は小さく始めることに合意できる",
    detail:
      "基幹システムの全面刷新ではなく、小〜中規模の業務ツール1本から始める方針に納得いただけることが前提です。",
  },
];

export default function ReadinessCheck() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const count = checked.size;
  const total = checkItems.length;

  let resultMessage = "";
  let resultColor = "";
  let resultBg = "";
  if (count >= 7) {
    resultMessage = "すぐに研修を開始できる状態です。適合診断で具体的な進め方を確認しましょう。";
    resultColor = "#059669";
    resultBg = "#ecfdf5";
  } else if (count >= 4) {
    resultMessage = "いくつか準備が必要ですが、相談段階として十分です。未対応の項目は一緒に整理できます。";
    resultColor = "#d97706";
    resultBg = "#fffbeb";
  } else if (count >= 1) {
    resultMessage = "現時点では準備段階です。まずは適合診断で、何から始めるべきか整理しましょう。";
    resultColor = "#6b7280";
    resultBg = "#f9fafb";
  }

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              READINESS CHECK
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            あなたの会社、該当してますか？
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            当てはまる項目にチェックを入れてください。
          </p>
        </div>

        <div className="space-y-3">
          {checkItems.map((item) => {
            const isChecked = checked.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                className={`w-full text-left rounded-[14px] border-2 p-4 md:p-5 transition-all duration-200 ${
                  isChecked
                    ? "bg-[#eaf3ff] border-[#2563eb]"
                    : "bg-[#f8fafc] border-[#e6edf5] hover:border-[#cbd5e1]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center mt-0.5 transition-colors ${
                      isChecked
                        ? "bg-[#2563eb] border-[#2563eb]"
                        : "bg-white border-[#cbd5e1]"
                    }`}
                  >
                    {isChecked && (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path
                          d="M1 5L5 9L13 1"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-bold text-[14px] md:text-[16px] leading-[1.6] ${
                        isChecked ? "text-[#151515]" : "text-[#333]"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-[#888] text-[12px] md:text-[13px] leading-[1.7] mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress & Result */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#888] text-[13px] font-bold">
              チェック状況
            </span>
            <span className="text-[#151515] text-[14px] font-black">
              {count} / {total}
            </span>
          </div>
          <div className="w-full h-2.5 bg-[#e6edf5] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(count / total) * 100}%`,
                backgroundColor:
                  count >= 7 ? "#059669" : count >= 4 ? "#d97706" : "#2563eb",
              }}
            />
          </div>

          {count > 0 && (
            <div
              className="mt-4 rounded-[12px] p-4 md:p-5 transition-all duration-300"
              style={{ backgroundColor: resultBg, border: `1px solid ${resultColor}22` }}
            >
              <p
                className="text-[13px] md:text-[14px] font-bold leading-[1.8]"
                style={{ color: resultColor }}
              >
                {resultMessage}
              </p>
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold text-sm md:text-base px-8 py-4 rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              30分の適合診断を受ける
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                <path
                  d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { works } from "@/data/works";

interface CaseStudy {
  company: string;
  title: string;
  description: string;
  industry: string;
  results: { label: string; value: string }[];
}

const cases: CaseStudy[] = [
  {
    company: "株式会社FINES（上場企業）",
    title: "動画広告レポート自動化で運用工数60%削減",
    description:
      "中小企業クライアント向け動画広告・マンガ広告の運用レポート作成を自動化。月間100時間以上を費やしていた手作業のスプレッドシート集計を数クリックで完了できる体制を構築し、運用担当が分析・改善提案に時間を再配分できる組織に。",
    industry: "動画マーケティングDX",
    results: [
      { label: "レポート工数削減", value: "60%" },
      { label: "提案サイクル", value: "週次→日次" },
      { label: "対象人数", value: "運用部20名" },
    ],
  },
  {
    company: "株式会社WIZ",
    title: "300種のDXサービス提案書を自動生成、商談数2.5倍",
    description:
      "300超のDXサービスから最適な組み合わせを提案する作業が属人化していた課題に対し、ヒアリングシートから提案書を自動生成するツールを内製。新人営業の提案書作成時間を1時間→15分に短縮し、独り立ち期間も3〜6ヶ月→6週間に。",
    industry: "IT総合商社・DX支援",
    results: [
      { label: "商談数", value: "2.5倍" },
      { label: "提案書作成時間", value: "1h→15m" },
      { label: "独り立ち期間", value: "1/3" },
    ],
  },
  {
    company: "株式会社XiM",
    title: "SNS運用データ分析自動化、提案サイクルを日次化",
    description:
      "クライアントのSNSアカウント運用データを手集計していた週次レポート業務を自動化。1案件4時間→30分に短縮し、マーケターがクリエイティブ提案に集中できる体制へ。施策ドラフトをAIに下書きさせることで提案案の数が平均3倍に。",
    industry: "ISマーケティング・ブランドデザイン",
    results: [
      { label: "レポート工数", value: "4h→30m" },
      { label: "施策提案数", value: "3倍" },
      { label: "提案サイクル", value: "週次→日次" },
    ],
  },
];

type TabKey = "cases" | "works";

export default function CaseTabs() {
  const [active, setActive] = useState<TabKey>("cases");
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(works.map((w) => w.category)));
  const filteredWorks = filter ? works.filter((w) => w.category === filter) : works;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "works" || hash === "cases") setActive(hash);
  }, []);

  const switchTab = (t: TabKey) => {
    setActive(t);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${t}`);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const TabPills = ({ theme }: { theme: "light" | "dark" }) => (
    <div className="flex justify-center mb-6">
      <div
        className={`inline-flex gap-1 rounded-full p-1 ${
          theme === "dark" ? "bg-white/15 backdrop-blur" : "bg-gray-100"
        }`}
      >
        <button
          onClick={() => switchTab("cases")}
          className={`px-5 md:px-7 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all flex items-center gap-1.5 ${
            active === "cases"
              ? theme === "dark"
                ? "bg-white text-blue-700 shadow-sm"
                : "bg-white text-blue-600 shadow-sm"
              : theme === "dark"
                ? "text-white/80 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="material-icons-outlined text-base">cases</span>
          導入事例
        </button>
        <button
          onClick={() => switchTab("works")}
          className={`px-5 md:px-7 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all flex items-center gap-1.5 ${
            active === "works"
              ? theme === "dark"
                ? "bg-white text-blue-700 shadow-sm"
                : "bg-white text-blue-600 shadow-sm"
              : theme === "dark"
                ? "text-white/80 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="material-icons-outlined text-base">photo_library</span>
          活用事例
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Panel: 導入事例 */}
      <div className={`font-sans bg-white ${active === "cases" ? "" : "hidden"}`}>
          {/* Hero (with tabs inside) */}
          <section className="pt-24 pb-8 md:pt-28 md:pb-12 text-center bg-[#f8f9fa] border-b border-gray-200">
            <TabPills theme="light" />
            <div className="mx-auto px-5 max-w-3xl">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">
                Case Studies
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
                導入事例
              </h1>
              <p className="text-black text-sm md:text-base leading-relaxed">
                CLAUDE CODE研修による生産性向上・業務効率化の成功事例をご紹介します。
              </p>
            </div>
          </section>

          {/* Global Impact Stats */}
          <section className="bg-white border-b border-gray-200 py-4">
            <div className="mx-auto px-5 max-w-5xl flex justify-center gap-8 md:gap-16 text-center text-sm">
              <div>
                <span className="text-gray-500 font-bold mr-2">パイロット研修受講者</span>
                <span className="text-xl font-bold text-black">
                  128<span className="text-blue-600 text-xs ml-1">名（n=128）</span>
                </span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden md:block mt-1"></div>
              <div>
                <span className="text-gray-500 font-bold mr-2">14日以内の本番公開率</span>
                <span className="text-xl font-bold text-black">
                  96<span className="text-blue-600 text-xs ml-1">%</span>
                </span>
              </div>
            </div>
          </section>

          {/* Cases List */}
          <section className="py-12 md:py-16">
            <div className="mx-auto px-5 max-w-5xl space-y-6">
              {cases.map((c) => (
                <article
                  key={c.company}
                  className="bg-white border border-gray-200 flex flex-col md:flex-row hover:border-blue-600 transition-colors shadow-sm overflow-hidden"
                >
                  <div className="w-full md:w-56 bg-gray-50 p-5 flex flex-col gap-3 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="w-full aspect-video bg-gray-200 flex flex-col items-center justify-center border border-gray-300 border-dashed text-gray-500 hover:bg-gray-300 transition-colors cursor-pointer">
                      <span className="material-icons-outlined text-2xl mb-1">photo_camera</span>
                      <span className="text-[10px] font-bold">写真スロット</span>
                    </div>
                    <div className="w-full h-12 bg-white flex items-center justify-center border border-gray-300 border-dashed text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
                      <span className="text-[10px] font-bold">{c.company} ロゴ</span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 md:p-8">
                    <div className="mb-4">
                      <span className="bg-black text-white text-[11px] font-bold px-2 py-1 inline-block mb-1">
                        {c.industry}
                      </span>
                      <p className="text-gray-500 text-xs font-bold mt-1">{c.company}</p>
                    </div>

                    <h2 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                      {c.title}
                    </h2>

                    <p className="text-sm text-gray-800 leading-relaxed">{c.description}</p>
                  </div>

                  <div className="bg-[#f0f4f8] md:w-56 p-6 md:p-8 flex flex-row md:flex-col justify-around md:justify-center items-center md:items-start border-t md:border-t-0 md:border-l border-gray-200 gap-4">
                    {c.results.map((r, i) => (
                      <div key={r.label} className="text-center md:text-left w-full">
                        <p className="text-[11px] text-gray-500 font-bold mb-1">{r.label}</p>
                        <p className="text-2xl font-black text-blue-600 tracking-tight">{r.value}</p>
                        {i < c.results.length - 1 && (
                          <div className="hidden md:block w-full h-[1px] bg-gray-200 my-3"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 bg-white text-center border-t border-gray-200">
            <div className="mx-auto px-5 max-w-3xl">
              <h2 className="text-xl font-bold text-black mb-3">同様の成果を貴社でも</h2>
              <p className="text-xs text-gray-600 mb-6">
                課題に合わせた最適な研修プランをご提案します。まずは無料相談をご利用ください。
              </p>
              <a
                href="/consultation/"
                className="inline-block font-bold text-white bg-blue-600 px-8 py-3 transition-colors hover:bg-blue-700 text-sm shadow-sm"
              >
                無料相談はこちら
              </a>
            </div>
          </section>
        </div>

      {/* Panel: 活用事例 */}
      <div className={active === "works" ? "" : "hidden"}>
          {/* Hero (with tabs inside) */}
          <section
            className="pt-24 pb-14 md:pt-28 md:pb-20 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
            }}
          >
            <TabPills theme="dark" />
            <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
              <span className="inline-block text-sm tracking-widest uppercase opacity-80 mb-3">
                Works
              </span>
              <h1 className="text-3xl md:text-5xl font-bold u-ff--headline">
                CLAUDE CODEで作れるもの
              </h1>
              <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                研修を通じて、これらのプロダクトを自分の手で作れるようになります
              </p>
            </div>
          </section>

          {/* Filter */}
          <section className="py-10" style={{ background: "#F4FAFD" }}>
            <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
              <div className="works-filter">
                <button
                  className={`works-filter__btn ${filter === null ? "works-filter__btn--active" : ""}`}
                  onClick={() => setFilter(null)}
                >
                  すべて
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`works-filter__btn ${filter === cat ? "works-filter__btn--active" : ""}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Grid */}
          <section className="py-14 md:py-20" style={{ background: "#F4FAFD" }}>
            <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
              <div className="works-grid">
                {filteredWorks.map((item) => (
                  <article key={item.id} className="works-card">
                    <div className="works-card__header">
                      <div className="works-card__icon-wrap">
                        <span className="material-icons-outlined works-card__icon">
                          {item.icon}
                        </span>
                      </div>
                      <span className="works-card__category">{item.category}</span>
                    </div>

                    <h2 className="works-card__title">{item.title}</h2>
                    <p className="works-card__desc">{item.desc}</p>

                    <div className="works-card__details">
                      <p className="works-card__details-label">作れるものの例</p>
                      <ul className="works-card__list">
                        {item.details.map((d) => (
                          <li key={d} className="works-card__list-item">
                            <span className="material-icons works-card__check">
                              check_circle
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 u-ff--headline">
                  これらを自分の手で作れるようになる
                </h2>
                <p className="text-gray-600 mb-8">
                  CLAUDE CODE リスキリング研修で、実践的なAI開発スキルを身につけましょう。
                </p>
                <a
                  href="/consultation/"
                  className="inline-block font-bold text-white rounded-full px-10 py-4 transition-opacity hover:opacity-80"
                  style={{ background: "#2563eb" }}
                >
                  無料相談はこちら
                </a>
              </div>
            </div>
          </section>
      </div>
    </>
  );
}

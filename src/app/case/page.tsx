import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "導入事例 | CLAUDE CODE リスキリング研修",
};

interface CaseStudy {
  company: string;
  title: string;
  description: string;
  industry: string;
  results: { label: string; value: string }[];
}

const cases: CaseStudy[] = [
  {
    company: "大手製造業A社",
    title: "開発チーム50名の生産性が2倍に",
    description:
      "Claude Codeを導入し、コードレビュー時間を60%削減。開発チーム全体の生産性が飛躍的に向上し、リリースサイクルの短縮にも成功しました。",
    industry: "製造業",
    results: [
      { label: "生産性向上", value: "200%" },
      { label: "レビュー時間削減", value: "60%" },
      { label: "対象人数", value: "50名" },
    ],
  },
  {
    company: "ITコンサルティングB社",
    title: "新人エンジニアの即戦力化に成功",
    description:
      "研修期間を3ヶ月から1ヶ月に短縮。Claude Codeを活用した実践型カリキュラムにより、新人エンジニアが早期にプロジェクトへ参画できるようになりました。",
    industry: "IT・コンサルティング",
    results: [
      { label: "研修期間短縮", value: "1/3" },
      { label: "即戦力化", value: "1ヶ月" },
      { label: "コスト削減", value: "40%" },
    ],
  },
  {
    company: "金融系C社",
    title: "AI活用による業務効率化を実現",
    description:
      "定型業務の自動化率80%を達成。AIを活用した業務プロセスの見直しにより、社員がより付加価値の高い業務に集中できる環境を構築しました。",
    industry: "金融",
    results: [
      { label: "自動化率", value: "80%" },
      { label: "工数削減", value: "65%" },
      { label: "ROI", value: "350%" },
    ],
  },
];

export default function CasePage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        {/* Page Header */}
        <section
          className="pt-28 pb-14 md:pt-36 md:pb-20 text-center text-white"
          style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)" }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-sm tracking-widest uppercase opacity-80 mb-3">
              Case Studies
            </span>
            <h1 className="text-3xl md:text-5xl font-bold u-ff--headline">
              導入事例
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              CLAUDE CODE リスキリング研修を導入いただいた企業様の成果をご紹介します
            </p>
          </div>
        </section>

        {/* Case Study Cards */}
        <section className="py-14 md:py-20" style={{ background: "#F4FAFD" }}>
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="grid gap-8 md:gap-12">
              {cases.map((c) => (
                <article
                  key={c.company}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden md:flex"
                >
                  {/* Left: Info */}
                  <div className="flex-1 p-6 md:p-10">
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-4"
                      style={{ background: "#2563eb" }}
                    >
                      {c.industry}
                    </span>
                    <p className="text-sm font-bold mb-1" style={{ color: "#2563eb" }}>
                      {c.company}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 u-ff--headline leading-snug">
                      {c.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  {/* Right: Results */}
                  <div
                    className="flex-none md:w-72 lg:w-80 p-6 md:p-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
                    style={{ background: "#f0f7ff" }}
                  >
                    {c.results.map((r) => (
                      <div key={r.label} className="text-center min-w-[80px]">
                        <p
                          className="text-2xl md:text-3xl font-bold"
                          style={{ color: "#2563eb" }}
                        >
                          {r.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 text-center">
          <div className="mx-auto px-4" style={{ maxWidth: 800 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 u-ff--headline">
              貴社でも導入しませんか？
            </h2>
            <p className="text-gray-600 mb-8">
              まずは無料相談で、貴社に最適な研修プランをご提案いたします。
            </p>
            <a
              href="/#contact"
              className="inline-block font-bold text-white rounded-full px-10 py-4 transition-opacity hover:opacity-80"
              style={{ background: "#2563eb" }}
            >
              無料相談はこちら
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

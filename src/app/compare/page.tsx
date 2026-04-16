import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedComparison from "@/components/SpeedComparison";
import AiEffectiveness from "@/components/AiEffectiveness";
import AdPerformanceComparison from "@/components/AdPerformanceComparison";
import AiComparisonSelector from "@/components/AiComparisonSelector";
import TargetAudience from "@/components/TargetAudience";
import { WhyResultsCompare } from "@/components/WhyResults";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Claude Code vs ChatGPT/Gemini/Copilot 効果検証比較 | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」が、Claude Codeと主要AI（ChatGPT・Gemini・Copilot）を業務成果物ベースで比較。最短14日の研修前後で開発スピード・実装到達度がどこまで変わるかを定量データで公開します。",
  keywords: [
    "Claude Code 比較",
    "ChatGPT 比較",
    "AI比較",
    "AIリスキリング",
    "AI研修",
    "リスキリング おすすめ",
    "開発内製化",
    "非エンジニア 開発",
    "最短14日",
    "AI人材育成",
    "DX研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/compare" },
  openGraph: {
    title: "Claude Code vs ChatGPT/Gemini/Copilot 効果検証比較 | おうとまくん",
    description:
      "業務成果物・開発スピード・実装到達度の3観点で、Claude Codeと主要AIサービスを定量比較した効果検証レポート。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/compare",
  },
};

export default function ComparePage() {
  return (
    <div id="page" className="site">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "AI比較・効果検証", url: "https://claudecode.co.jp/compare" },
        ]}
      />
      <Header />
      <main id="primary" className="site-main">
        {/* Page Header */}
        <section
          className="pt-28 pb-14 md:pt-36 md:pb-20 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-sm tracking-widest uppercase opacity-80 mb-3">
              Comparison
            </span>
            <h1 className="text-3xl md:text-5xl font-bold u-ff--headline">
              AI比較・効果検証
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              「Claude Code研修は他と何が違うのか」を、成果物・開発速度・実装到達度の
              <br className="sp-only" />
              3つの観点で定量比較しました。
            </p>
          </div>
        </section>

        <AiComparisonSelector />
        <WhyResultsCompare />
        <SpeedComparison />
        <AiEffectiveness />
        <AdPerformanceComparison />
        <TargetAudience />

        {/* CTA */}
        <section className="py-14 md:py-20 text-center bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 800 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 u-ff--headline">
              貴社に最適な研修プランをご提案します
            </h2>
            <p className="text-gray-600 mb-8">
              比較データをもとに、現場課題に合わせた導入プランを無料でご相談いただけます。
            </p>
            <a
              href="/consultation/"
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

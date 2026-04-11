import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedComparison from "@/components/SpeedComparison";
import AiEffectiveness from "@/components/AiEffectiveness";
import ComparisonSection from "@/components/ComparisonSection";
import AdPerformanceComparison from "@/components/AdPerformanceComparison";
import { WhyResultsCompare } from "@/components/WhyResults";

export const metadata: Metadata = {
  title: "AI比較・効果検証 | CLAUDE CODE リスキリング研修",
  description:
    "Claude Code と主要AIサービス（ChatGPT / Gemini / Copilot）の業務成果物ベース比較、研修前後の開発スピード差分、実装到達度データをまとめました。",
};

export default function ComparePage() {
  return (
    <div id="page" className="site">
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

        <AdPerformanceComparison />
        <WhyResultsCompare />
        <SpeedComparison />
        <AiEffectiveness />
        <ComparisonSection />

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

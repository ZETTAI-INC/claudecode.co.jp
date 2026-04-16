import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubsidyFlow from "@/components/SubsidyFlow";
import MentorshipSupport from "@/components/MentorshipSupport";
import ClaudeCodeOverview from "@/components/ClaudeCodeOverview";
import Pricing from "@/components/Pricing";
import RoiEquation from "@/components/RoiEquation";

export const metadata: Metadata = {
  title: "法人研修プラン・料金・助成金シミュレーション | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」の料金プラン。1ステップ10万円、人材開発支援助成金の活用で中小企業75%補助・実質負担18%〜。最短14日で開発内製化を実現する法人研修の投資対効果をご確認いただけます。",
  keywords: [
    "リスキリング",
    "AIリスキリング",
    "Claude Code",
    "法人研修",
    "企業研修 料金",
    "人材開発支援助成金",
    "助成金75%",
    "リスキリング 費用",
    "最短14日",
    "開発内製化",
    "DX研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/price" },
  openGraph: {
    title: "法人研修プラン・料金・助成金シミュレーション | おうとまくん",
    description:
      "1ステップ10万円、助成金活用で実質負担18%〜。最短14日で開発内製化を実現するAIリスキリング研修の料金プラン。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/price",
  },
};

export default function PricePage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        {/* Page title section */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ background: "#f5f8fa" }}
        >
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#333" }}
            >
              料金プラン
            </h1>
            <p className="text-base md:text-lg" style={{ color: "#666" }}>
              貴社の規模・ニーズに合わせた最適なプランをお選びください
            </p>
          </div>
        </section>

        {/* Overview section */ }
        <ClaudeCodeOverview />

        <RoiEquation />

        {/* Pricing table (unified with home) */}
        <Pricing />

        {/* Mentorship support */}
        <MentorshipSupport />

        {/* Note section */}
        <section className="pb-16 md:pb-24" style={{ background: "#f5f8fa" }}>
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            {/* Intro about Subsidy */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
              <h2
                className="text-xl md:text-2xl font-bold mb-6 text-center"
                style={{ color: "#333" }}
              >
                助成金を活用してさらにお得に
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto"
                style={{ color: "#666" }}
              >
                リスキリング研修は、厚生労働省の「人材開発支援助成金」等の対象となる場合があります。
                エンタープライズプランでは助成金の申請サポートも行っておりますので、お気軽にご相談ください。
              </p>
            </div>

            {/* Detailed Subsidy Flow */}
            <SubsidyFlow />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

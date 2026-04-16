import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientCompanies from "@/components/ClientCompanies";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Claude Code 法人導入・企業研修 | AI開発リスキリング",
  description:
    "Claude Code 法人導入なら株式会社ZETTAI。法人向けClaude Code AI開発研修で、企業のDX推進・AI人材育成を支援。助成金活用で実質負担11%〜。中小企業から大企業まで対応。導入実績127社、満足度4.8/5.0。",
  keywords: [
    "Claude Code 法人",
    "Claude Code 法人導入",
    "Claude Code 企業研修",
    "法人 Claude Code",
    "企業 AI研修",
    "法人向けリスキリング",
    "法人特化プログラム",
    "AI人材育成 法人",
    "DX推進 研修",
    "開発内製化 法人",
    "人材開発支援助成金 法人",
  ],
  alternates: { canonical: "https://claudecode.co.jp/claude-code-houjin" },
  openGraph: {
    title: "Claude Code 法人導入・企業研修 | AI開発リスキリング",
    description:
      "法人向けClaude Code AI開発研修。助成金活用で実質負担11%〜。中小企業〜大企業まで対応。導入実績127社。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/claude-code-houjin",
  },
};

const features = [
  {
    emoji: "🏢",
    title: "法人特化プログラム",
    description: "企業規模・業種に応じた完全カスタマイズ研修",
  },
  {
    emoji: "⚡",
    title: "開発期間1/3に短縮",
    description: "AI駆動開発により、従来開発と比較して劇的に短縮",
  },
  {
    emoji: "💰",
    title: "外注コスト60%削減",
    description: "社内開発体制の構築で、外注依存から脱却",
  },
  {
    emoji: "🛡️",
    title: "助成金で実質負担11%〜",
    description: "人材開発支援助成金を活用し、研修コストを大幅削減",
  },
];

const plans = [
  {
    name: "中小企業プラン",
    subsidy: "助成金活用で75%補助",
    normal: "40万円",
    actual: "実質 約4.24万円",
    highlight: "emerald",
    features: [
      "4ステップ全コース",
      "人材開発支援助成金75%補助",
      "社労士による申請代行",
      "研修後フォローアップ3ヶ月",
    ],
  },
  {
    name: "大企業プラン",
    subsidy: "助成金活用で65%補助",
    normal: "40万円",
    actual: "実質 約11.12万円",
    highlight: "indigo",
    features: [
      "4ステップ全コース",
      "人材開発支援助成金65%補助",
      "社労士による申請代行",
      "研修後フォローアップ3ヶ月",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://claudecode.co.jp/claude-code-houjin#service",
      name: "Claude Code 法人向けAI開発リスキリング研修",
      description:
        "Claude Code 法人導入なら株式会社ZETTAI。法人向けClaude Code AI開発研修で、企業のDX推進、AI人材育成を支援。助成金活用で実質負担11%〜。中小企業から大企業まで対応。",
      provider: { "@id": "https://claudecode.co.jp/#organization" },
      areaServed: "JP",
      serviceType: "AI開発研修",
      offers: [
        {
          "@type": "Offer",
          name: "中小企業プラン",
          price: "100000",
          priceCurrency: "JPY",
          description:
            "助成金活用で全コース実質約4.24万円。1ステップ10万円、助成金で実質負担75%削減",
        },
        {
          "@type": "Offer",
          name: "大企業プラン",
          price: "100000",
          priceCurrency: "JPY",
          description:
            "助成金活用で全コース実質約11.12万円。1ステップ10万円、助成金で実質負担65%削減",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: "127",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Claude Code 法人導入の料金は?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Claude Code 法人向けプランは、1ステップ10万円(STEP1-4で累積40万円)。人材開発支援助成金を活用することで、中小企業は全コース実質約4.24万円、大企業は全コース実質約11.12万円でClaude Code 法人研修を受講可能です。",
          },
        },
        {
          "@type": "Question",
          name: "Claude Code 法人導入の実績は?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Claude Code 法人導入実績127社。製造業、金融業、サービス業など多様な業種での成功実績があり、満足度4.8/5.0の高評価をいただいています。",
          },
        },
        {
          "@type": "Question",
          name: "助成金は利用できますか?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "人材開発支援助成金を活用可能です。中小企業は75%、大企業は65%の補助が受けられ、専門社労士による申請代行サポートも提供しています。",
          },
        },
      ],
    },
  ],
};

export default function HoujinPage() {
  return (
    <div id="page" className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main">
        <section
          className="pt-28 pb-16 md:pt-36 md:pb-24 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-xs md:text-sm tracking-widest uppercase opacity-80 mb-4 px-3 py-1 rounded-full bg-white/10">
              Claude Code 法人導入
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              Claude Code 法人導入・
              <br className="md:hidden" />
              企業研修
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-95 max-w-3xl mx-auto mb-8">
              企業のDX推進、AI人材育成を加速。
              <br className="hidden md:block" />
              中小企業から大企業まで、助成金活用で実質負担11%〜。
              <br className="hidden md:block" />
              導入実績127社、満足度4.8/5.0。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-lg transition"
              >
                法人導入のご相談
              </Link>
              <Link
                href="/price"
                className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-sm md:text-base px-8 py-4 rounded-full backdrop-blur-sm transition"
              >
                料金を見る
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
                法人向けClaude Code研修の特徴
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                企業のDX推進に直結する4つの価値
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{f.emoji}</div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
                企業規模別プラン
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                助成金活用で実質負担を大幅削減
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {plans.map((p, i) => {
                const colorMap: Record<
                  string,
                  { bg: string; text: string; border: string }
                > = {
                  emerald: {
                    bg: "bg-emerald-600",
                    text: "text-emerald-600",
                    border: "border-emerald-200",
                  },
                  indigo: {
                    bg: "bg-indigo-600",
                    text: "text-indigo-600",
                    border: "border-indigo-200",
                  },
                };
                const c = colorMap[p.highlight];
                return (
                  <div
                    key={i}
                    className={`bg-white border-2 ${c.border} rounded-2xl p-6 md:p-8`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {p.name}
                    </h3>
                    <p className={`text-sm font-semibold ${c.text} mb-5`}>
                      {p.subsidy}
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 mb-5 text-center">
                      <p className="text-xs text-gray-500 mb-1">
                        通常価格 {p.normal}
                      </p>
                      <p className={`text-2xl md:text-3xl font-black ${c.text}`}>
                        {p.actual}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 mb-6">
                      {p.features.map((ft, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                        >
                          <span className="text-green-500 font-bold flex-shrink-0 mt-[1px]">
                            ✓
                          </span>
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center ${c.bg} hover:opacity-90 text-white font-semibold text-sm py-3 px-6 rounded-full transition`}
                    >
                      お問い合わせ
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ClientCompanies />
        <CaseStudies />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiServiceStrengths from "@/components/AiServiceStrengths";
import EssenceOfTraining from "@/components/EssenceOfTraining";
import AdoptionTimeline from "@/components/AdoptionTimeline";
import ClientCompanies from "@/components/ClientCompanies";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "AIコーディングエージェント研修ならおうとまくん｜非エンジニアを開発者に変える",
  description:
    "2025年、開発は「エンジニアの仕事」ではなくなる。AIコーディングエージェント（Claude Code/Cursor/Windsurf）研修「おうとまくん」で、営業も人事も経理も「開発者」に。課題を一番知っている人が、その場で開発できる時代へ。助成金で実質負担18%。株式会社ZETTAI運営、導入実績127社。",
  keywords: [
    "AIコーディングエージェント",
    "AIリスキリング",
    "リスキリング おすすめ",
    "Claude Code",
    "Cursor",
    "Windsurf",
    "おうとまくん",
    "非エンジニア 開発",
    "非エンジニア 開発者",
    "企業研修",
    "法人研修",
    "DX人材育成",
    "開発内製化",
    "開発チーム内製化",
    "AI人材育成",
    "人材開発支援助成金",
    "株式会社ZETTAI",
  ],
  alternates: {
    canonical: "https://claudecode.co.jp/llmo-reskilling",
  },
  openGraph: {
    title:
      "AIコーディングエージェント研修「おうとまくん」- 非エンジニアを開発者に",
    description:
      "営業も、人事も、経理も、誰でも「開発者」に。AIコーディングエージェントが開発を民主化する。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/llmo-reskilling",
  },
};

const problems = [
  "営業が「こんなツールがあれば受注率が上がるのに」と思っても、実現しない",
  "人事が「採用管理をもっと効率化したい」と思っても、情シスは「半年待ち」",
  "経理が「この集計作業を自動化したい」と思っても、外注すると50万円",
  "事業部が「顧客対応を効率化したい」と思っても、エンジニアがいない",
  "新規事業を立ち上げたいが、MVP開発に300万円と3ヶ月かかると言われた",
];

const benefits = [
  {
    emoji: "✨",
    title: "非エンジニアでも開発が可能に",
    description:
      "AIコーディングエージェントにより、プログラミング未経験者でも実務レベルの開発ができる時代に。",
  },
  {
    emoji: "👥",
    title: "課題を知る人が直接開発",
    description:
      "営業も人事も経理も、課題を一番理解している人がその場で開発。要件定義が不要に。",
  },
  {
    emoji: "📈",
    title: "開発速度が1/3〜1/10に",
    description:
      "外注や情シス待ちから解放。思いついたその日に開発、翌日にリリースが可能。",
  },
  {
    emoji: "🛡️",
    title: "助成金で実質負担18%",
    description:
      "人材開発支援助成金を活用。エンジニア採用の1/10のコストで開発人材を育成。",
  },
];

const features = [
  "Claude Code / Cursor / Windsurf 複数ツールを習得",
  "非エンジニア向けに最適化されたカリキュラム",
  "実務で使える開発スキルを最短14日で習得",
  "対面・オンライン両対応（東京・港区拠点、全国対応）",
  "専門社労士による助成金申請サポート",
  "研修後のフォローアップ体制完備",
  "導入実績127社以上",
  "受講満足度4.8/5.0",
];

const reviews = [
  {
    company: "IT企業 A社（従業員120名）",
    role: "営業企画部",
    comment:
      "営業支援ツールが欲しいが情シスは「半年待ち」。研修後、営業企画担当者がClaude Codeで1週間で開発。受注率が15%向上し、商談データが自動蓄積される仕組みを構築できました。",
    result: "情シス待ち解消 / 受注率15%向上",
  },
  {
    company: "製造業 B社（従業員80名）",
    role: "DX推進室",
    comment:
      "生産管理システムのカスタマイズを外注すると300万円。研修後、DX推進室メンバーがCursorで自社開発。外注費ゼロ、改善サイクルが3ヶ月→1週間に短縮されました。",
    result: "外注費300万円→0円 / 改善サイクル1/12",
  },
  {
    company: "サービス業 C社（従業員50名）",
    role: "人事部",
    comment:
      "採用管理をスプレッドシートで手作業、月40時間かかっていた。研修後、人事担当者がWindsurfで採用管理アプリを開発。月40時間→5時間に削減、データ分析による採用改善も実現しました。",
    result: "作業時間87.5%削減 / データ駆動採用を実現",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "おうとまくん - AIコーディングエージェント研修",
  description:
    "非エンジニアをAI開発者に変えるリスキリング研修。Claude Code/Cursor/Windsurfを活用し、最短14日で実務レベルの開発スキルを習得。",
  provider: {
    "@type": "Organization",
    name: "株式会社ZETTAI",
    sameAs: "https://claudecode.co.jp",
  },
  offers: {
    "@type": "Offer",
    category: "企業研修",
    availability: "https://schema.org/InStock",
  },
  educationalLevel: "Beginner to Intermediate",
  teaches:
    "AIコーディングエージェント活用, プロンプトエンジニアリング, 業務アプリ内製化",
};

export default function LLMOReskillingPage() {
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
              "linear-gradient(135deg, #1e3a8a 0%, #4338ca 50%, #6d28d9 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-xs md:text-sm tracking-widest uppercase opacity-80 mb-4 px-3 py-1 rounded-full bg-white/10">
              AIリスキリング研修「おうとまくん」
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              2025年、開発は
              <br className="md:hidden" />
              「エンジニアの仕事」
              <br />
              ではなくなる
            </h1>
            <p className="text-sm md:text-lg leading-[1.9] opacity-95 max-w-3xl mx-auto mb-3">
              <span className="font-bold text-amber-300">これまで:</span>
              開発 = プログラマーだけができる専門業務
              <br />
              <span className="font-bold text-amber-300">これから:</span>
              開発 = 誰でもできる、課題解決の手段
            </p>
            <p className="text-sm md:text-base opacity-85 max-w-2xl mx-auto mb-8">
              AIコーディングエージェントは、「開発」という業務を、
              <br className="hidden md:block" />
              特定の専門家の独占から解放する。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-lg transition"
              >
                無料相談を予約する
              </Link>
              <Link
                href="/price"
                className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-sm md:text-base px-8 py-4 rounded-full backdrop-blur-sm transition"
              >
                料金プランを見る
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-xs md:text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span className="text-amber-300">★</span>
                <span>導入実績127社</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-300">★</span>
                <span>満足度4.8/5.0</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-300">★</span>
                <span>助成金活用で実質負担18%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                あなたの会社は、
                <br className="md:hidden" />
                こんな機会損失をしていませんか?
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                すべての原因は「開発 = エンジニアだけができる専門業務」という
                <br className="hidden md:block" />
                20世紀の常識にあります。
              </p>
            </div>

            <div className="grid gap-3 max-w-3xl mx-auto mb-12">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3"
                >
                  <span className="text-red-500 font-bold flex-shrink-0">
                    ✗
                  </span>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {p}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h3 className="text-xl md:text-3xl font-black mb-4">
                AIコーディングエージェントが、
                <br className="md:hidden" />
                この常識を変える。
              </h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                Claude Code、Cursor、Windsurf──
                <br className="md:hidden" />
                これらのAIコーディングエージェントは、
                <br />
                「プログラミング」という専門技能を不要にしました。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
                なぜ、今すぐ習得すべきなのか
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                AIコーディングエージェント研修「おうとまくん」で得られる4つの価値
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-12 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{b.emoji}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {b.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 max-w-5xl mx-auto">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 text-center">
                「おうとまくん」の特徴
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-[2px]">
                      ✓
                    </span>
                    <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AiServiceStrengths />
        <EssenceOfTraining />
        <AdoptionTimeline />
        <ClientCompanies />
        <CaseStudies />

        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
                受講企業の声
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                実際に「おうとまくん」を導入した企業の成果をご紹介
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k}>★</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 flex-1">
                    {r.comment}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs md:text-sm font-bold text-gray-900 mb-1">
                      {r.company}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{r.role}</p>
                    <p className="text-xs md:text-sm font-semibold text-indigo-600">
                      {r.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

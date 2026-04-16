import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingTimeline from "@/components/TrainingTimeline";
import TalentDevelopment from "@/components/TalentDevelopment";
import AiDevelopmentWorkflow from "@/components/AiDevelopmentWorkflow";
import ClaudeDesktopFeatures from "@/components/ClaudeDesktopFeatures";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "最短14日間カリキュラム・実践ブートキャンプ | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」の14日間ブートキャンプ。1日あたりの到達度・成果物・実装工程を公開。業務を一番知る社員が2週間で自力で業務ツールを作れる人材になるまでのプロセスを助成金75%補助で提供します。",
  keywords: [
    "リスキリング",
    "AIリスキリング",
    "Claude Code",
    "AI研修",
    "最短14日",
    "プログラミング未経験",
    "非エンジニア 開発",
    "開発内製化",
    "DX研修",
    "AI人材育成",
    "リスキリング カリキュラム",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/curriculum" },
  openGraph: {
    title: "最短14日間カリキュラム・実践ブートキャンプ | おうとまくん",
    description:
      "非エンジニアが2週間で自力で業務ツールを作れるようになる、Claude Code実践カリキュラムの全工程と到達度。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/curriculum",
  },
};

const curriculumJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Claude Code 14日間リスキリング・ブートキャンプ",
  description:
    "業務を一番知る社員が2週間で自力で業務ツールを作れる人材になるための、14日間のClaude Code実践カリキュラム。",
  provider: {
    "@type": "Organization",
    name: "株式会社ZETTAI",
    sameAs: "https://claudecode.co.jp/",
  },
  educationalLevel: "Professional",
  inLanguage: "ja-JP",
  timeRequired: "P14D",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Blended",
    courseWorkload: "PT112H",
  },
};

export default function CurriculumPage() {
  return (
    <div id="page" className="site">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "カリキュラム", url: "https://claudecode.co.jp/curriculum" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curriculumJsonLd) }}
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
              Curriculum
            </span>
            <h1 className="text-3xl md:text-5xl font-bold u-ff--headline">
              14日間カリキュラム
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              業務を一番知る社員を、2週間で自力で業務ツールを作れる状態まで引き上げる具体的な流れをご紹介します。
            </p>
          </div>
        </section>

        <TalentDevelopment />

        <ClaudeDesktopFeatures />

        <TrainingTimeline />

        <AiDevelopmentWorkflow />

        {/* CTA */}
        <section className="py-14 md:py-20 text-center bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 800 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 u-ff--headline">
              貴社の業務に合わせたカスタマイズが前提です
            </h2>
            <p className="text-gray-600 mb-8">
              受講者の部署・業務課題に合わせて、実装題材をそのまま研修に組み込みます。
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

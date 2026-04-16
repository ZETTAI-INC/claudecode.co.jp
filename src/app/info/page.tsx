import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsEntries } from "@/data/news";
import InfoTabs from "./InfoTabs";

export const metadata: Metadata = {
  title: "お知らせ・Claude Code活用ブログ・最新情報 | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」の最新ニュースとClaude Code活用ブログ。使い方・他AI比較・業務活用テクニック・助成金75%補助の導入事例まで、最短14日で開発内製化を目指す企業向けの情報を随時更新します。",
  keywords: [
    "Claude Code",
    "Claude Code 使い方",
    "AIリスキリング",
    "リスキリング",
    "AI研修",
    "AI活用ブログ",
    "開発内製化",
    "非エンジニア 開発",
    "最短14日",
    "助成金75%",
    "DX研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/info" },
  openGraph: {
    title: "お知らせ・Claude Code活用ブログ・最新情報 | おうとまくん",
    description:
      "Claude Codeの使い方・比較・活用事例・助成金情報など、AIリスキリング研修「おうとまくん」の最新情報を随時更新。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/info",
  },
};

const infoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: "https://claudecode.co.jp/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "お知らせ・ブログ",
          item: "https://claudecode.co.jp/info",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://claudecode.co.jp/info",
      name: "お知らせ・ブログ",
      description:
        "Claude Code リスキリング研修のニュースとClaude Code活用ブログ",
      isPartOf: { "@id": "https://claudecode.co.jp/#website" },
      inLanguage: "ja-JP",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: newsEntries.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://claudecode.co.jp/info/${e.slug}`,
          name: e.title,
        })),
      },
    },
  ],
};

export default function InfoPage() {
  return (
    <div id="page" className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infoJsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main">
        <section className="py-12 md:py-20">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <div className="p-headline mb-8 md:mb-12">
              <span className="p-headline__sub mb-2">NEWS &amp; BLOG</span>
              <p className="p-headline__main">お知らせ・ブログ</p>
            </div>

            <InfoTabs entries={newsEntries} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

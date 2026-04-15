import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsEntries } from "@/data/news";
import InfoTabs from "./InfoTabs";

export const metadata: Metadata = {
  title: "お知らせ・ブログ | Claude Code リスキリング研修",
  description:
    "Claude Code リスキリング研修の最新ニュースと、Claude Codeの使い方・比較・活用テクニック・導入事例などのブログ記事をお届けします。",
  alternates: { canonical: "/info" },
  openGraph: {
    url: "https://claudecode.co.jp/info",
    title: "お知らせ・ブログ | Claude Code リスキリング研修",
    description:
      "Claude Code リスキリング研修の最新ニュースとClaude Code活用ブログ。",
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

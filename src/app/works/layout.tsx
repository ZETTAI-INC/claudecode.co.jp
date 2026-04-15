import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "制作実績・開発実績",
  description:
    "Claude Codeを活用した受託開発・自社開発の実績を業種別にご紹介。Webアプリ、業務システム、AI機能実装、SaaS構築、社内ツール開発などの事例を掲載しています。",
  alternates: { canonical: "/works" },
  openGraph: {
    url: "https://claudecode.co.jp/works",
    title: "制作実績・開発実績 | CLAUDE CODE リスキリング研修",
    description:
      "Claude Codeを活用した受託開発・自社開発の実績を業種別にご紹介。",
  },
};

const worksJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: works.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: w.title,
      description: w.desc,
      genre: w.category,
    },
  })),
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "制作実績", url: "https://claudecode.co.jp/works" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(worksJsonLd) }}
      />
      {children}
    </>
  );
}

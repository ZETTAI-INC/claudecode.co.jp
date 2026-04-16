import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseTabs from "./CaseTabs";
import SubsidyList from "@/components/SubsidyList";

export const metadata: Metadata = {
  title: "導入事例・成果レポート・助成金活用実績 | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」の法人導入事例。非エンジニア社員が最短14日で業務ツールを内製化し、開発コスト削減・工数短縮を実現した企業の成果と、人材開発支援助成金75%補助を活用した導入実績をご紹介します。",
  keywords: [
    "リスキリング",
    "AIリスキリング",
    "Claude Code",
    "法人研修 事例",
    "導入事例",
    "開発内製化",
    "非エンジニア 開発",
    "最短14日",
    "助成金75%",
    "人材開発支援助成金",
    "AI人材育成",
    "DX研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/case" },
  openGraph: {
    title: "導入事例・成果レポート・助成金活用実績 | おうとまくん",
    description:
      "非エンジニア社員が最短14日で業務ツールを内製化。開発コスト削減・工数短縮を実現した法人導入事例と助成金活用実績。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/case",
  },
};

export default function CasePage() {
  return (
    <div id="page" className="site font-sans bg-white pb-10">
      <Header />
      <main id="primary" className="site-main">
        <CaseTabs />
        <SubsidyList />
      </main>
      <Footer />
    </div>
  );
}

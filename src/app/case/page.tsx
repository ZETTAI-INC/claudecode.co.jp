import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseTabs from "./CaseTabs";
import SubsidyList from "@/components/SubsidyList";

export const metadata: Metadata = {
  title: "事例・活用事例 | CLAUDE CODE リスキリング研修",
  description:
    "Claude Code リスキリング研修の導入事例。非エンジニア社員が14日間で業務ツールを内製化し、開発コスト削減・業務時間短縮を実現した企業の成果をご紹介します。",
  alternates: { canonical: "/case" },
  openGraph: {
    url: "https://claudecode.co.jp/case",
    title: "事例・活用事例 | CLAUDE CODE リスキリング研修",
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

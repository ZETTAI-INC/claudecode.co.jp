import type { Metadata } from "next";
import Header from "@/components/Header";
import FitAssessment from "@/components/FitAssessment";
import ReadinessCheck from "@/components/ReadinessCheck";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "無料 適正診断（30秒）| おうとまくん",
  description:
    "おうとまくんAIリスキリング研修が御社に向いているか、30秒の無料セルフ診断。向いている会社／向いていない会社の条件、最短14日で内製化するための導入準備チェックリストまで、その場で確認できます。",
  keywords: [
    "適正診断",
    "AI研修 比較",
    "リスキリング 向いている会社",
    "導入判断",
    "内製化",
    "Claude Code",
    "最短14日",
    "人材開発支援助成金",
    "法人研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/fit-check" },
  openGraph: {
    title: "無料 適正診断（30秒）| おうとまくん",
    description:
      "御社がおうとまくんAI研修に向いているか、30秒でセルフチェック。導入準備チェックリスト付き。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/fit-check",
  },
};

export default function FitCheckPage() {
  return (
    <div id="page" className="site">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "適正診断", url: "https://claudecode.co.jp/fit-check" },
        ]}
      />
      <Header />
      <main id="primary" className="site-main">
        <FitAssessment />
        <ReadinessCheck />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

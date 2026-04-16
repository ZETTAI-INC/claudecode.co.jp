import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "お問い合わせ・資料請求 | おうとまくん",
  description:
    "おうとまくんAIリスキリング研修へのお問い合わせ・資料請求・無料相談窓口。法人研修のカスタマイズ、人材開発支援助成金の活用、最短14日の内製化プランまで、1営業日以内にご返信します。",
  keywords: [
    "お問い合わせ",
    "資料請求",
    "無料相談",
    "AI研修",
    "リスキリング",
    "法人研修",
    "Claude Code",
    "人材開発支援助成金",
    "最短14日",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/contact" },
  openGraph: {
    title: "お問い合わせ・資料請求 | おうとまくん",
    description:
      "法人研修・助成金活用・カスタマイズのご相談はこちら。1営業日以内に担当者よりご返信します。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/contact",
  },
};

export default function ContactPage() {
  return (
    <div id="page">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "お問い合わせ", url: "https://claudecode.co.jp/contact" },
        ]}
      />
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px]">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "CLAUDE CODE リスキリング研修に関するお問い合わせ・資料請求・無料相談はこちら。法人研修・カスタマイズ・補助金活用についてもお気軽にご相談ください。",
  alternates: { canonical: "/contact" },
  openGraph: { url: "https://claudecode.co.jp/contact", title: "お問い合わせ | CLAUDE CODE リスキリング研修" },
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

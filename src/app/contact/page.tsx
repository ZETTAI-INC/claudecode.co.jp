import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ | CLAUDE CODE リスキリング研修",
};

export default function ContactPage() {
  return (
    <div id="page">
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

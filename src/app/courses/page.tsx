import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSelector from "@/components/CoursesSelector";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "コース一覧 | Claude Code リスキリング研修",
  description:
    "Claude Code リスキリング研修のすべてのコースを一覧でご紹介します。非エンジニア向けの基礎導入から、エンジニア向けの上級編、人材派遣型のDISPATCH、実務伴走型のCoworkまで、企業の課題に合わせてお選びいただけます。",
};

export default function CoursesPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section
          className="pt-28 pb-14 md:pt-36 md:pb-20 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-sm tracking-widest uppercase opacity-80 mb-3">
              Courses
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
              すべてのコース一覧
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-90 max-w-2xl mx-auto">
              非エンジニア向けの基礎導入から、エンジニア向けの上級編、
              <br className="hidden md:block" />
              人材派遣型のDISPATCH、実務伴走型のCoworkまで、
              <br className="hidden md:block" />
              企業の課題に合わせてお選びいただけます。
            </p>
          </div>
        </section>

        <CoursesSelector />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

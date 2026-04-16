import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoursesSelector from "@/components/CoursesSelector";
import WhyResults from "@/components/WhyResults";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "研修コース一覧・法人プラン | おうとまくん",
  description:
    "AIリスキリング研修「おうとまくん」の全コース一覧。非エンジニア向け基礎導入、エンジニア向け上級編、人材派遣型DISPATCH、伴走型Coworkまで、最短14日・助成金75%補助で企業の開発内製化を支援します。",
  keywords: [
    "リスキリング",
    "AIリスキリング",
    "Claude Code",
    "企業研修",
    "法人研修",
    "リスキリング おすすめ",
    "非エンジニア 開発",
    "開発内製化",
    "最短14日",
    "助成金75%",
    "AI人材育成",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/courses" },
  openGraph: {
    title: "研修コース一覧・法人プラン | おうとまくん",
    description:
      "非エンジニア向け基礎導入からDISPATCH・Coworkまで、最短14日で開発内製化を実現するAIリスキリング研修の全コース。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/courses",
  },
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
        <WhyResults />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

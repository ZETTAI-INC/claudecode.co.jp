import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "お役立ち資料 | CLAUDE CODE リスキリング研修",
};

const resources = [
  {
    icon: "description",
    title: "CLAUDE CODE研修 サービス概要資料",
    format: "PDF",
    description: "研修内容・料金プランの詳細",
  },
  {
    icon: "menu_book",
    title: "AI人材育成 導入ガイドブック",
    format: "PDF",
    description: "企業がAI研修を始めるためのステップ",
  },
  {
    icon: "savings",
    title: "助成金活用マニュアル",
    format: "PDF",
    description: "研修費用に使える助成金の申請方法",
  },
  {
    icon: "cases",
    title: "導入事例集",
    format: "PDF",
    description: "実際の研修導入事例と成果レポート",
  },
];

export default function ResourcesPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              お役立ち資料
            </h1>
            <p className="mt-4 text-base md:text-lg text-blue-100 text-center max-w-2xl mx-auto">
              CLAUDE CODE リスキリング研修に関する資料を無料でダウンロードいただけます。
            </p>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col"
                >
                  {/* Icon & Format Badge */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 flex items-center justify-center shrink-0">
                      <span className="material-icons-outlined text-[#2563eb] text-3xl">
                        {resource.icon}
                      </span>
                    </div>
                    <span className="inline-block text-xs font-bold text-[#2563eb] bg-[#2563eb]/10 rounded-full px-3 py-1">
                      {resource.format}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-6 flex-1">
                    {resource.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#2563eb] text-white font-bold text-sm py-3 px-6 hover:bg-[#1d4ed8] transition-colors"
                  >
                    <span className="material-icons text-lg">download</span>
                    無料ダウンロード
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

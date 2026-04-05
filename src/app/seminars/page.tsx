import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "セミナー情報 | CLAUDE CODE リスキリング研修",
};

const seminars = [
  {
    date: "2025/5/15",
    dateLabel: { month: "5", day: "15" },
    title: "Claude Code入門 — AI時代の開発スキルとは",
    location: "オンライン",
    price: "無料",
  },
  {
    date: "2025/5/28",
    dateLabel: { month: "5", day: "28" },
    title: "実践ハンズオン：Claude Codeで業務効率化",
    location: "東京会場",
    price: "5,000円",
  },
  {
    date: "2025/6/12",
    dateLabel: { month: "6", day: "12" },
    title: "経営者向け：AI人材育成の最前線",
    location: "オンライン",
    price: "無料",
  },
];

export default function SeminarsPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="py-16 md:py-24">
          <div className="mx-auto px-4" style={{ maxWidth: 1000 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
              セミナー情報
            </h1>

            <div className="flex flex-col gap-6">
              {seminars.map((seminar) => (
                <div
                  key={seminar.date}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
                >
                  {/* Date badge */}
                  <div
                    className="shrink-0 w-20 h-20 rounded-lg flex flex-col items-center justify-center text-white"
                    style={{ backgroundColor: "#2563eb" }}
                  >
                    <span className="text-sm font-medium leading-none">
                      {seminar.dateLabel.month}月
                    </span>
                    <span className="text-2xl font-bold leading-tight">
                      {seminar.dateLabel.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-xl font-bold mb-2">
                      {seminar.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-1">
                        <span className="material-icons-outlined text-base" style={{ color: "#2563eb" }}>
                          place
                        </span>
                        {seminar.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="material-icons-outlined text-base" style={{ color: "#2563eb" }}>
                          sell
                        </span>
                        {seminar.price}
                      </span>
                    </div>
                  </div>

                  {/* Apply button */}
                  <div className="shrink-0">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-80"
                      style={{ backgroundColor: "#2563eb" }}
                    >
                      申し込む
                    </a>
                  </div>
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

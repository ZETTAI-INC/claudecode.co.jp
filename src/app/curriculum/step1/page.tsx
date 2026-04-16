import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "STEP1: AI開発基礎コース",
  description:
    "プログラミング未経験から始める、AI開発の基礎を学ぶコース。Claude Code・プロンプトエンジニアリング・HTML/CSS/JavaScript・Git/GitHubの基礎を段階的に習得。全14講座で基礎をマスター。",
  keywords: [
    "Claude Code",
    "AI開発 基礎",
    "プログラミング未経験",
    "リスキリング STEP1",
    "AI研修 基礎",
    "プロンプトエンジニアリング",
    "HTML CSS JavaScript",
    "Git GitHub",
    "おうとまくん",
  ],
  alternates: { canonical: "https://claudecode.co.jp/curriculum/step1" },
};

const lessons = [
  { id: 1, title: "Claude Codeとは?AI開発の新しい形", duration: "15:30" },
  { id: 2, title: "開発環境のセットアップとアカウント作成", duration: "12:45" },
  { id: 3, title: "プロンプトエンジニアリング入門", duration: "18:20" },
  { id: 4, title: "効果的な指示の出し方とコツ", duration: "20:15" },
  { id: 5, title: "初めてのWebアプリケーション開発", duration: "25:40" },
  { id: 6, title: "HTML/CSSの基礎とデザインの考え方", duration: "22:10" },
  { id: 7, title: "JavaScriptの基礎と動的なページ作成", duration: "28:30" },
  { id: 8, title: "Git/GitHubを使ったバージョン管理", duration: "19:55" },
  { id: 9, title: "Claude CodeでのUI/UXデザイン基礎", duration: "24:15" },
  { id: 10, title: "レスポンシブデザインの実装", duration: "26:50" },
  { id: 11, title: "アクセシビリティ対応の基本", duration: "21:30" },
  { id: 12, title: "実践: ポートフォリオサイトを作ろう", duration: "32:20" },
  { id: 13, title: "デバッグとトラブルシューティング", duration: "16:40" },
  { id: 14, title: "プロジェクトの総復習とベストプラクティス", duration: "23:45" },
];

export default function Step1Page() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-slate-900 text-white">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1 text-xs md:text-sm opacity-75 hover:opacity-100 mb-5"
            >
              ← カリキュラム一覧に戻る
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-slate-700 rounded text-xs md:text-sm font-bold">
                STEP 1
              </span>
              <span className="px-3 py-1 bg-white/10 rounded text-xs font-semibold">
                初級
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              AI開発基礎コース
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-90">
              プログラミング未経験から始める、AI開発の基礎を学ぶコース。
              <br className="hidden md:block" />
              Claude Code・プロンプトエンジニアリング・HTML/CSS/JavaScript・Git/GitHubの基礎を段階的に習得。
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-xs md:text-sm opacity-85">
              <span>⏱ 合計約5.5時間</span>
              <span>📚 全14講座</span>
              <span>🏆 修了証発行</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              カリキュラム(全14講座)
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
              {lessons.map((l) => (
                <div
                  key={l.id}
                  className="px-5 py-4 md:px-7 md:py-5 flex items-center gap-4 hover:bg-gray-50 transition"
                >
                  <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-slate-700 text-white flex items-center justify-center text-xs md:text-sm font-bold">
                    {String(l.id).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm md:text-base text-gray-900 font-medium leading-snug">
                    {l.title}
                  </span>
                  <span className="flex-shrink-0 text-xs md:text-sm text-gray-500 tabular-nums">
                    {l.duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition"
              >
                このコースを受講する
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

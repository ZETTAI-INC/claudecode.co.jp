import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "STEP2: 実務アプリ開発コース",
  description:
    "実務で使えるアプリケーション開発スキルを習得。React/Next.js・TypeScript・Tailwind CSSを活用した本格的な開発を全14講座で学習。",
  keywords: [
    "Claude Code",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "実務アプリ開発",
    "リスキリング STEP2",
    "フロントエンド開発",
    "タスク管理アプリ",
    "おうとまくん",
  ],
  alternates: { canonical: "https://claudecode.co.jp/curriculum/step2" },
};

const lessons = [
  { id: 1, title: "React入門: コンポーネントベース開発", duration: "22:15" },
  { id: 2, title: "Next.jsの基礎とルーティング", duration: "19:40" },
  { id: 3, title: "UIコンポーネントの設計と実装", duration: "26:30" },
  { id: 4, title: "Tailwind CSSでモダンなデザイン", duration: "24:10" },
  { id: 5, title: "レスポンシブデザインの実践", duration: "21:50" },
  { id: 6, title: "ステート管理とフォーム処理", duration: "28:20" },
  { id: 7, title: "TypeScriptで型安全な開発", duration: "25:15" },
  { id: 8, title: "APIとの連携とデータフェッチング", duration: "27:40" },
  { id: 9, title: "コンポーネントライブラリの活用", duration: "23:25" },
  { id: 10, title: "カスタムフックの作成", duration: "26:35" },
  { id: 11, title: "エラーハンドリングとデバッグ手法", duration: "24:50" },
  { id: 12, title: "実践: タスク管理アプリの開発", duration: "35:30" },
  {
    id: 13,
    title: "テスティング入門(Jest/React Testing Library)",
    duration: "29:15",
  },
  { id: 14, title: "デプロイとパフォーマンス最適化", duration: "23:45" },
];

export default function Step2Page() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-zinc-800 text-white">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1 text-xs md:text-sm opacity-75 hover:opacity-100 mb-5"
            >
              ← カリキュラム一覧に戻る
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-zinc-700 rounded text-xs md:text-sm font-bold">
                STEP 2
              </span>
              <span className="px-3 py-1 bg-white/10 rounded text-xs font-semibold">
                初級〜中級
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              実務アプリ開発コース
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-90">
              React/Next.jsを活用した本格的な開発スキルを習得。
              <br className="hidden md:block" />
              TypeScript・Tailwind CSS・テスティング・デプロイまでを実務レベルで学びます。
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-xs md:text-sm opacity-85">
              <span>⏱ 合計約6時間</span>
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
                  <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-zinc-700 text-white flex items-center justify-center text-xs md:text-sm font-bold">
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
                className="inline-block bg-zinc-800 hover:bg-zinc-900 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition"
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

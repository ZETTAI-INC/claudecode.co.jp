import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "STEP3: データベース連携コース",
  description:
    "データベースを活用した本格的なシステム開発を習得。SQL・PostgreSQL・Prisma ORM・バックエンドAPI・マイグレーションを全14講座で段階的に学習。",
  keywords: [
    "Claude Code",
    "データベース",
    "SQL",
    "PostgreSQL",
    "Prisma",
    "ORM",
    "バックエンド開発",
    "リスキリング STEP3",
    "CRUD操作",
    "データベース設計",
    "おうとまくん",
  ],
  alternates: { canonical: "https://claudecode.co.jp/curriculum/step3" },
};

const lessons = [
  { id: 1, title: "データベースの基礎とリレーショナルDB", duration: "20:30" },
  { id: 2, title: "SQLの基本操作とクエリ作成", duration: "24:15" },
  { id: 3, title: "テーブル設計とER図の作成", duration: "22:40" },
  { id: 4, title: "PostgreSQLのセットアップと接続", duration: "18:55" },
  { id: 5, title: "ORMとPrismaの活用", duration: "26:20" },
  { id: 6, title: "CRUD操作の実装", duration: "28:45" },
  { id: 7, title: "バックエンドAPIの構築", duration: "30:10" },
  { id: 8, title: "データの正規化とパフォーマンス最適化", duration: "25:30" },
  { id: 9, title: "インデックスとクエリ最適化", duration: "27:20" },
  { id: 10, title: "データマイグレーションの実践", duration: "23:45" },
  { id: 11, title: "バックアップとリカバリ戦略", duration: "21:35" },
  { id: 12, title: "実践: ブログシステムの開発", duration: "38:20" },
  { id: 13, title: "NoSQLとの比較と使い分け", duration: "25:50" },
  { id: 14, title: "セキュリティとトランザクション管理", duration: "27:15" },
];

export default function Step3Page() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-stone-800 text-white">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1 text-xs md:text-sm opacity-75 hover:opacity-100 mb-5"
            >
              ← カリキュラム一覧に戻る
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-stone-700 rounded text-xs md:text-sm font-bold">
                STEP 3
              </span>
              <span className="px-3 py-1 bg-white/10 rounded text-xs font-semibold">
                中級
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              データベース連携コース
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-90">
              データベースを活用した本格的なシステム開発。
              <br className="hidden md:block" />
              SQLとバックエンド開発、Prisma ORM、マイグレーションまでを習得します。
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-xs md:text-sm opacity-85">
              <span>⏱ 合計約6.5時間</span>
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
                  <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-stone-700 text-white flex items-center justify-center text-xs md:text-sm font-bold">
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
                className="inline-block bg-stone-800 hover:bg-stone-900 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition"
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

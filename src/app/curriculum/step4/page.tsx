import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "STEP4: API統合コース",
  description:
    "外部APIとの連携で高度なシステムを構築。RESTful API・OAuth認証・GraphQL・マイクロサービス・CI/CD・クラウドデプロイを全14講座で学習。",
  keywords: [
    "Claude Code",
    "API連携",
    "RESTful API",
    "OAuth",
    "JWT",
    "GraphQL",
    "マイクロサービス",
    "CI/CD",
    "クラウドデプロイ",
    "リスキリング STEP4",
    "おうとまくん",
  ],
  alternates: { canonical: "https://claudecode.co.jp/curriculum/step4" },
};

const lessons = [
  { id: 1, title: "RESTful APIの設計原則", duration: "23:20" },
  { id: 2, title: "APIエンドポイントの実装", duration: "26:45" },
  { id: 3, title: "外部APIとの連携方法", duration: "24:30" },
  { id: 4, title: "認証とJWTトークン管理", duration: "29:15" },
  { id: 5, title: "OAuth2.0とソーシャルログイン", duration: "27:50" },
  { id: 6, title: "APIのセキュリティ対策", duration: "25:40" },
  { id: 7, title: "WebhookとリアルタイムAPI", duration: "28:20" },
  { id: 8, title: "API連携のエラーハンドリング", duration: "22:35" },
  { id: 9, title: "GraphQL入門", duration: "26:40" },
  { id: 10, title: "マイクロサービスアーキテクチャ", duration: "31:25" },
  { id: 11, title: "CI/CDパイプラインの構築", duration: "28:50" },
  { id: 12, title: "実践: 決済システムとの統合開発", duration: "42:10" },
  { id: 13, title: "クラウドデプロイメント(AWS/Vercel)", duration: "33:15" },
  { id: 14, title: "API監視とパフォーマンスチューニング", duration: "30:25" },
];

export default function Step4Page() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-neutral-800 text-white">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1 text-xs md:text-sm opacity-75 hover:opacity-100 mb-5"
            >
              ← カリキュラム一覧に戻る
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-neutral-700 rounded text-xs md:text-sm font-bold">
                STEP 4
              </span>
              <span className="px-3 py-1 bg-white/10 rounded text-xs font-semibold">
                中級〜上級
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              API統合コース
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-90">
              外部APIとの連携で高度なシステムを構築。
              <br className="hidden md:block" />
              認証・セキュリティから本格的なシステム統合、CI/CD、クラウドデプロイまで。
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-6 text-xs md:text-sm opacity-85">
              <span>⏱ 合計約7時間</span>
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
                  <span className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-neutral-700 text-white flex items-center justify-center text-xs md:text-sm font-bold">
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
                className="inline-block bg-neutral-800 hover:bg-neutral-900 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition"
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

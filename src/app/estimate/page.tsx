import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "WEB制作 御見積書 | 株式会社ZETTAI",
  description:
    "株式会社ZETTAIが提供するWEB制作の御見積書ダウンロードページです。デザインのみ／管理画面込み／SEO・AIO対策基盤支援付きの3プランをご用意しています。",
  alternates: { canonical: "/estimate" },
  openGraph: { url: "https://claudecode.co.jp/estimate", title: "WEB制作 御見積書 | 株式会社ZETTAI" },
};

type Plan = {
  name: string;
  badge?: string;
  tagline: string;
  price: number;
  recommended?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "ベーシック",
    tagline: "デザイン制作のみ",
    price: 150000,
    features: [
      "ヒアリング・要件整理",
      "トップ＋下層ページのデザイン",
      "レスポンシブ対応（PC／タブレット／スマホ）",
      "静的コーディング・公開設置",
      "※ 管理画面（CMS）からの投稿は不可",
    ],
  },
  {
    name: "スタンダード",
    badge: "おすすめ",
    tagline: "管理画面（CMS）込み",
    price: 250000,
    recommended: true,
    features: [
      "ベーシックプランの全内容",
      "管理画面構築（投稿／編集／削除）",
      "画像アップロード・カテゴリ管理",
      "お問い合わせフォーム（自動返信付き）",
      "管理画面操作マニュアル（PDF）",
    ],
  },
  {
    name: "プレミアム",
    tagline: "SEO・AIO対策 基盤支援付き",
    price: 350000,
    features: [
      "スタンダードプランの全内容",
      "SEO内部対策（構造化データ実装）",
      "AIO対応（llms.txt・E-E-A-T 考慮の設計）",
      "表示速度チューニング（Core Web Vitals）",
      "Search Console／解析ツール導入",
      "公開後1ヶ月の運用サポート",
    ],
  },
];

const formatYen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

export default function EstimatePage() {
  return (
    <div id="page" className="site">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "WEB制作 御見積書", url: "https://claudecode.co.jp/estimate" },
        ]}
      />
      <Header />
      <main id="primary" className="site-main">
        {/* Page title */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ background: "#f5f8fa" }}
        >
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            <p
              className="text-xs md:text-sm font-bold mb-3 tracking-widest"
              style={{ color: "#2563eb" }}
            >
              ESTIMATE / 御見積書
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#333" }}
            >
              WEB制作 御見積書
            </h1>
            <p className="text-base md:text-lg" style={{ color: "#666" }}>
              株式会社ZETTAI が作成する WEB制作の御見積書です。
              <br className="hidden md:block" />
              下記ボタンから PDF をダウンロードのうえご検討ください。
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/estimate.pdf"
                download="ZETTAI_WEB制作見積書.pdf"
                className="inline-flex items-center gap-2 font-bold py-3 px-8 rounded-full text-white transition-opacity hover:opacity-90"
                style={{ background: "#2563eb" }}
              >
                <span
                  className="material-icons-outlined"
                  style={{ fontSize: 20 }}
                >
                  download
                </span>
                PDFをダウンロード
              </a>
              <a
                href="/estimate.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold py-3 px-8 rounded-full transition-colors hover:text-white hover:bg-blue-600"
                style={{
                  background: "#fff",
                  color: "#2563eb",
                  border: "2px solid #2563eb",
                }}
              >
                <span
                  className="material-icons-outlined"
                  style={{ fontSize: 20 }}
                >
                  description
                </span>
                ブラウザで見る
              </a>
            </div>
            <p className="mt-4 text-xs" style={{ color: "#888" }}>
              A4サイズ・1ページ ／ 発行日：2026年4月10日 ／ 有効期限：発行日より30日間
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section
          className="py-16 md:py-24"
          style={{ background: "#f5f8fa" }}
        >
          <div
            className="mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            style={{ maxWidth: 1200 }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white shadow-md flex flex-col overflow-hidden transition-shadow hover:shadow-lg ${
                  plan.recommended ? "md:scale-105" : ""
                }`}
                style={
                  plan.recommended
                    ? { outline: "2px solid #2563eb", outlineOffset: "-2px" }
                    : {}
                }
              >
                {plan.badge && (
                  <div
                    className="text-center text-white text-sm font-bold py-2"
                    style={{ background: "#2563eb" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <p
                    className="text-center text-xs font-bold mb-2 tracking-widest"
                    style={{ color: "#2563eb" }}
                  >
                    {plan.tagline}
                  </p>
                  <h2
                    className="text-xl font-bold text-center mb-6"
                    style={{ color: "#333" }}
                  >
                    {plan.name}
                  </h2>

                  <div className="text-center mb-2">
                    <span
                      className="font-bold text-4xl"
                      style={{ color: "#2563eb" }}
                    >
                      {formatYen(plan.price)}
                    </span>
                    <span
                      className="text-base font-medium ml-1"
                      style={{ color: "#666" }}
                    >
                      （税抜）
                    </span>
                  </div>
                  <p
                    className="text-center text-xs mb-8"
                    style={{ color: "#888" }}
                  >
                    税込 {formatYen(Math.round(plan.price * 1.1))}
                  </p>

                  <hr className="border-gray-200 mb-8" />

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "#333" }}
                      >
                        <span
                          className="material-icons-outlined text-lg mt-0.5 shrink-0"
                          style={{ color: "#2563eb", fontSize: 20 }}
                        >
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/estimate.pdf"
                    download="ZETTAI_WEB制作見積書.pdf"
                    className={`block text-center font-bold py-3 px-6 rounded-full transition-colors ${
                      plan.recommended
                        ? "text-white hover:opacity-90"
                        : "hover:text-white"
                    }`}
                    style={
                      plan.recommended
                        ? { background: "#2563eb", color: "#fff" }
                        : {
                            background: "#fff",
                            color: "#2563eb",
                            border: "2px solid #2563eb",
                          }
                    }
                  >
                    このプランでPDF取得
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Issuer / notes */}
        <section className="pb-16 md:pb-24" style={{ background: "#f5f8fa" }}>
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm grid gap-8 md:grid-cols-2">
              <div>
                <h2
                  className="text-lg md:text-xl font-bold mb-4"
                  style={{ color: "#333" }}
                >
                  発行元
                </h2>
                <p
                  className="text-xl font-bold mb-2"
                  style={{ color: "#2563eb" }}
                >
                  株式会社ZETTAI
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  WEB制作・SEO／AIO基盤支援
                  <br />
                  本見積に関するお問い合わせは担当までご連絡ください。
                </p>
              </div>
              <div>
                <h2
                  className="text-lg md:text-xl font-bold mb-4"
                  style={{ color: "#333" }}
                >
                  お取引条件
                </h2>
                <ul
                  className="text-sm leading-relaxed space-y-1.5"
                  style={{ color: "#666" }}
                >
                  <li>・ 制作期間の目安：2〜6週間（契約後・素材支給後から起算）</li>
                  <li>・ お支払い：契約時 50% ／ 納品検収後 50%（銀行振込）</li>
                  <li>・ 修正対応：各フェーズ2回まで無償</li>
                  <li>・ 本見積の有効期限：発行日より30日間</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "管理者画面 | Claude Code リスキリング研修",
  description: "運営向け管理画面",
  robots: { index: false, follow: false },
};

const adminLinks = [
  {
    label: "お問い合わせ一覧",
    href: "#",
    desc: "フォームから届いた問い合わせを確認",
    icon: "mail",
  },
  {
    label: "適合診断・見積り回答",
    href: "#",
    desc: "/consultation・/fit-check・/estimate からの送信内容",
    icon: "fact_check",
  },
  {
    label: "セミナー申込",
    href: "#",
    desc: "/seminars 経由の申込者一覧",
    icon: "event",
  },
  {
    label: "お知らせ・ブログ編集",
    href: "/info/",
    desc: "src/data/news.ts を編集してコミット",
    icon: "edit_note",
  },
  {
    label: "導入事例の管理",
    href: "/case/",
    desc: "src/components/CustomerCases 配下のデータを編集",
    icon: "business_center",
  },
];

export default function AdminPage() {
  return (
    <div id="page">
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px] py-16 px-4">
          <div className="mx-auto" style={{ maxWidth: 960 }}>
            <div className="mb-10 text-center">
              <span
                className="material-icons-outlined"
                style={{ fontSize: 40, color: "#2563eb" }}
              >
                admin_panel_settings
              </span>
              <h1 className="text-3xl font-bold mt-2" style={{ color: "#2563eb" }}>
                管理者画面
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                運営者向けの管理メニューです。外部の管理システム・コード編集に接続されています。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {adminLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 p-5 rounded-lg border border-gray-200 bg-white hover:border-blue-400 hover:shadow-sm transition"
                >
                  <span
                    className="material-icons-outlined"
                    style={{ color: "#2563eb", fontSize: 28 }}
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-900">
                      {item.label}
                    </span>
                    <span className="block text-xs text-gray-600 mt-1 leading-relaxed">
                      {item.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-xs text-gray-500 text-center">
              ※ 認証・外部サービス連携は未設定です。接続先が決まり次第、各リンクを差し替えてください。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

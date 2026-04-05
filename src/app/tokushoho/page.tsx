import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | CLAUDE CODE リスキリング研修",
};

const rows = [
  { label: "販売事業者", value: "株式会社ZETTAI" },
  { label: "代表責任者", value: "代表取締役（お問い合わせ時に開示）" },
  { label: "所在地", value: "東京都渋谷区（詳細はお問い合わせ時に開示）" },
  { label: "電話番号", value: "お問い合わせフォームよりご連絡ください" },
  { label: "メールアドレス", value: "info@claudecode.co.jp" },
  { label: "販売URL", value: "https://claudecode.co.jp/" },
  { label: "販売価格", value: "各プランページに記載（税別）" },
  { label: "商品代金以外の必要料金", value: "なし" },
  { label: "支払方法", value: "銀行振込、クレジットカード" },
  { label: "支払時期", value: "研修開始前までにお支払い" },
  { label: "サービス提供時期", value: "お申し込み確認後、別途ご案内いたします" },
  {
    label: "キャンセル・返金",
    value:
      "研修開始日の14日前まではキャンセル可能（全額返金）。13日前〜前日は研修費用の50%、当日以降は返金不可。",
  },
  {
    label: "動作環境",
    value:
      "インターネット接続環境、PC（Windows / Mac）、最新のWebブラウザ",
  },
];

export default function TokushohoPage() {
  return (
    <div id="page">
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px] py-16 px-4">
          <div className="mx-auto" style={{ maxWidth: 800 }}>
            <h1
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#2563eb" }}
            >
              特定商取引法に基づく表記
            </h1>

            <table className="w-full border-collapse">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-gray-200">
                    <th
                      className="py-4 px-4 text-left text-sm font-semibold align-top whitespace-nowrap"
                      style={{ color: "#2563eb", width: "30%" }}
                    >
                      {row.label}
                    </th>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "運営会社 | 株式会社ZETTAI 会社概要",
  description:
    "AIリスキリング研修「おうとまくん」を運営する株式会社ZETTAIの会社概要。所在地、設立、事業内容、AI研修・開発内製化支援の実績をご案内します。最短14日で非エンジニアをAI開発人材へ。",
  keywords: [
    "株式会社ZETTAI 会社概要",
    "おうとまくん 運営会社",
    "AI研修 企業",
    "Claude Code 運営",
    "AIリスキリング 会社",
    "法人研修 運営会社",
    "AI人材育成 企業",
    "株式会社ZETTAI",
    "おうとまくん",
    "Claude Code",
  ],
  alternates: {
    canonical: "https://claudecode.co.jp/company",
  },
  openGraph: {
    title: "運営会社 | 株式会社ZETTAI",
    description:
      "AIリスキリング研修「おうとまくん」を運営する株式会社ZETTAIの会社概要。AI研修と開発内製化支援で企業のDXを推進。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/company",
  },
};

const companyInfo = [
  { label: "会社名", value: "株式会社ZETTAI" },
  { label: "所在地", value: "東京都渋谷区" },
  { label: "設立", value: "2024年" },
  { label: "事業内容", value: "AI研修事業、ソフトウェア開発支援" },
  { label: "代表", value: "（記載なし）" },
];

export default function CompanyPage() {
  return (
    <div id="page">
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px] py-16 px-4">
          <div className="mx-auto" style={{ maxWidth: 800 }}>
            <h1 className="text-3xl font-bold text-center mb-12" style={{ color: "#2563eb" }}>
              運営会社
            </h1>

            <table className="w-full border-collapse">
              <tbody>
                {companyInfo.map((row) => (
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

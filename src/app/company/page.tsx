import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "運営会社 | Claude Code リスキリング研修",
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

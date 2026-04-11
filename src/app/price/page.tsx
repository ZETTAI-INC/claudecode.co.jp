import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubsidyFlow from "@/components/SubsidyFlow";

export const metadata: Metadata = {
  title: "料金プラン | CLAUDE CODE リスキリング研修",
};

const plans = [
  {
    name: "スタータープラン",
    price: "50万円",
    unit: "/月",
    recommended: false,
    features: [
      "10名まで",
      "オンライン研修",
      "基礎カリキュラム",
      "メールサポート",
    ],
  },
  {
    name: "スタンダードプラン",
    badge: "おすすめ",
    price: "120万円",
    unit: "/月",
    recommended: true,
    features: [
      "30名まで",
      "オンライン+対面研修",
      "カスタムカリキュラム",
      "専任サポート",
      "効果測定レポート",
    ],
  },
  {
    name: "エンタープライズプラン",
    price: "お問い合わせ",
    unit: "",
    recommended: false,
    features: [
      "人数無制限",
      "フルカスタム研修",
      "専任コンサルタント",
      "経営層向けレポート",
      "助成金申請サポート",
    ],
  },
];

export default function PricePage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        {/* Page title section */}
        <section
          className="py-16 md:py-24 text-center"
          style={{ background: "#f5f8fa" }}
        >
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#333" }}
            >
              料金プラン
            </h1>
            <p className="text-base md:text-lg" style={{ color: "#666" }}>
              貴社の規模・ニーズに合わせた最適なプランをお選びください
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
                  plan.recommended
                    ? "md:scale-105"
                    : ""
                }`}
                style={
                  plan.recommended
                    ? { outline: "2px solid #2563eb", outlineOffset: "-2px" }
                    : {}
                }
              >
                {/* Recommended badge */}
                {plan.badge && (
                  <div
                    className="text-center text-white text-sm font-bold py-2"
                    style={{ background: "#2563eb" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Plan name */}
                  <h2
                    className="text-xl font-bold text-center mb-6"
                    style={{ color: "#333" }}
                  >
                    {plan.name}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <span
                      className={`font-bold ${
                        plan.unit ? "text-4xl" : "text-2xl"
                      }`}
                      style={{ color: "#2563eb" }}
                    >
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span
                        className="text-base font-medium"
                        style={{ color: "#666" }}
                      >
                        {plan.unit}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <hr className="border-gray-200 mb-8" />

                  {/* Features */}
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

                  {/* CTA button */}
                  <Link
                    href="/consultation/"
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
                    {plan.price === "お問い合わせ"
                      ? "お問い合わせ"
                      : "無料相談はこちら"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note section */}
        <section className="pb-16 md:pb-24" style={{ background: "#f5f8fa" }}>
          <div className="mx-auto px-5" style={{ maxWidth: 1200 }}>
            {/* Intro about Subsidy */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
              <h2
                className="text-xl md:text-2xl font-bold mb-6 text-center"
                style={{ color: "#333" }}
              >
                助成金を活用してさらにお得に
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto"
                style={{ color: "#666" }}
              >
                リスキリング研修は、厚生労働省の「人材開発支援助成金」等の対象となる場合があります。
                エンタープライズプランでは助成金の申請サポートも行っておりますので、お気軽にご相談ください。
              </p>
            </div>

            {/* Detailed Subsidy Flow */}
            <SubsidyFlow />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

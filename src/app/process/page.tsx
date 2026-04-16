import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "助成金導入プロセス完全ガイド | 12ステップで申請〜入金まで",
  description:
    "人材開発支援助成金(事業展開等リスキリング支援コース)の導入プロセスを12ステップで完全解説。1名あたり実質負担約¥25,000(75%助成)。問い合わせから助成金入金まで平均6-12ヶ月。社労士連携で申請成功率95%以上。",
  keywords: [
    "助成金 リスキリング",
    "人材開発支援助成金",
    "事業展開等リスキリング支援コース",
    "DXリスキリング助成金",
    "助成金 申請",
    "リスキリング 導入プロセス",
    "AIリスキリング 助成金",
    "計画届",
    "GビズID",
    "社労士 助成金",
  ],
  alternates: { canonical: "https://claudecode.co.jp/process" },
  openGraph: {
    title: "助成金導入プロセス完全ガイド | 12ステップ",
    description:
      "問い合わせから助成金入金まで、12のステップで確実に実施。人材開発支援助成金を活用し、社労士連携により申請成功率95%以上。1名あたり実質負担約¥25,000(75%助成)。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/process",
  },
};

const keyPoints: { title: string; value: string; desc: string }[] = [
  {
    title: "助成金で戻る金額",
    value: "75%",
    desc: "¥100,000の支払 → 実質¥25,000(1名あたり)",
  },
  {
    title: "計画書の提出",
    value: "1か月前",
    desc: "研修開始の1か月前までに提出",
  },
  {
    title: "助成金の入金",
    value: "平均6ヶ月",
    desc: "申請してから入金まで",
  },
];

const steps: {
  num: string;
  title: string;
  duration: string;
  summary: string;
  details: string[];
}[] = [
  {
    num: "01",
    title: "まずは無料相談(お問い合わせ)",
    duration: "1-2営業日",
    summary: "課題とニーズをお聞かせください",
    details: [
      "🏢 企業様: お問い合わせフォームまたはお電話でご連絡",
      "🏢 企業様: 雇用保険加入状況、対象人数をお伝えください",
      "💼 当社: 助成金対象の可否を即座に判断しご回答します",
    ],
  },
  {
    num: "02",
    title: "要件確認とプラン提案",
    duration: "3-5営業日",
    summary: "最適な研修プランをご提案します",
    details: [
      "🏢 企業様: 受講予定者の業務内容をお伝えください",
      "💼 当社: 仕事との関連性を整理し、助成金要件を満たすカリキュラムを作成",
      "💼 当社: 受講管理システム(LMS)の設定方針をご提案",
    ],
  },
  {
    num: "03",
    title: "見積りと費用確認",
    duration: "2-3営業日",
    summary: "助成金を差し引いた実質負担額をご確認ください",
    details: [
      "💼 当社: 詳細な見積書を提出(助成金受給後の実質負担額も明示)",
      "🏢 企業様: 費用内容をご確認・ご承認ください",
      "💼 当社: 支払条件(初期支払+残金)とスケジュールを調整",
    ],
  },
  {
    num: "04",
    title: "契約締結",
    duration: "1-2営業日",
    summary: "研修契約を締結します",
    details: [
      "💼 当社: 契約書類一式をご送付",
      "🏢 企業様: 契約書にご署名・ご捺印(電子契約も可能)",
      "🤝 双方: 研修スケジュールを最終確定",
    ],
  },
  {
    num: "05",
    title: "計画届の作成・提出(重要)",
    duration: "⚠️ 訓練開始1か月前までに提出",
    summary: "労働局への事前申請です。当社が全面サポートします",
    details: [
      "💼 当社: 研修実施計画書、カリキュラム、受講者名簿を作成",
      "🏢 企業様: 内容をご確認いただき、最終承認",
      "💼 当社: 雇用関係助成金ポータルから電子申請、受理確認まで対応(GビズID必要)",
    ],
  },
  {
    num: "06",
    title: "研修費用の初期支払い",
    duration: "請求後5営業日以内",
    summary: "契約金額の一部をお支払いください(助成金は後払い)",
    details: [
      "💼 当社: 請求書を発行",
      "🏢 企業様: 契約書記載の初期支払額を銀行振込でお支払い",
      "💼 当社: 入金確認後、教材準備・LMS環境を整備",
    ],
  },
  {
    num: "07",
    title: "研修実施",
    duration: "標準学習時間10時間以上",
    summary: "従業員に研修を受講いただきます",
    details: [
      "🏢 企業様: 従業員に受講時間を確保(就業時間内推奨)",
      "💼 当社: LMSで受講開始・終了・進捗を自動記録",
      "🏢 企業様: 出席簿に署名・捺印をお願いします",
    ],
  },
  {
    num: "08",
    title: "研修完了・証拠書類の収集",
    duration: "研修後5営業日以内",
    summary: "助成金申請に必要な書類を準備します",
    details: [
      "💼 当社: 受講記録PDF、出席簿、演習成果物を収集",
      "💼 当社: 研修実績報告書を作成",
      "🏢 企業様: 支払証明書類(請求書・領収書・振込明細)をご準備",
    ],
  },
  {
    num: "09",
    title: "研修費用の残金支払い",
    duration: "請求後10営業日以内",
    summary: "研修完了を確認し、残金をお支払いください",
    details: [
      "💼 当社: 研修完了を確認後、残金の請求書を発行",
      "🏢 企業様: 残金を銀行振込でお支払い",
      "💼 当社: 領収書を発行(助成金申請の証憑になります)",
    ],
  },
  {
    num: "10",
    title: "助成金の申請(当社サポート)",
    duration: "⚠️ 研修終了日の翌日から2か月以内",
    summary: "労働局に助成金を申請します。当社が書類作成を全面サポート",
    details: [
      "💼 当社: 申請書類一式を作成(社労士監修)",
      "🏢 企業様: 申請内容をご確認・ご承認",
      "💼 当社: 雇用関係助成金ポータルから電子申請(GビズID必要)",
    ],
  },
  {
    num: "11",
    title: "審査・労働局からの照会対応",
    duration: "3-6ヶ月",
    summary: "労働局の審査に対応します。当社が回答をサポート",
    details: [
      "🏛️ 労働局: 提出書類の審査",
      "💼 当社: 労働局からの質問に対する回答書を作成",
      "🏢 企業様: 回答内容をご確認・ご承認",
      "🏛️ 労働局: 支給決定通知を発送",
    ],
  },
  {
    num: "12",
    title: "助成金入金(完了)",
    duration: "支給決定後1-2ヶ月",
    summary: "指定口座に助成金が入金されます",
    details: [
      "🏛️ 労働局: 支給決定通知書を発送",
      "🏛️ 労働局: 指定口座へ助成金を振込",
      "🏢 企業様: 入金確認後、営業外収益として会計処理(消費税不課税)",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "人材開発支援助成金 導入プロセス(リスキリング研修)",
  description:
    "人材開発支援助成金(事業展開等リスキリング支援コース)の申請から入金までを12ステップで解説。社労士監修・申請成功率95%以上。",
  totalTime: "P6M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: "25000",
  },
  step: steps.map((s) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.summary,
    position: Number(s.num),
  })),
};

export default function ProcessPage() {
  return (
    <div id="page" className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main">
        <section
          className="pt-28 pb-14 md:pt-36 md:pb-20 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-xs md:text-sm tracking-widest uppercase opacity-80 mb-3 px-3 py-1 rounded-full bg-white/10">
              Process
            </span>
            <h1 className="text-2xl md:text-5xl font-black mb-4 leading-tight">
              助成金導入プロセス
              <br className="md:hidden" />
              完全ガイド
            </h1>
            <p className="text-sm md:text-base leading-[1.9] opacity-95 max-w-3xl mx-auto">
              人材開発支援助成金(事業展開等リスキリング支援コース)を活用し、
              <br className="hidden md:block" />
              問い合わせから助成金入金まで12ステップで確実に実施。
              <br className="hidden md:block" />
              社労士連携で申請成功率95%以上。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {keyPoints.map((kp, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center"
                >
                  <p className="text-xs md:text-sm text-gray-500 mb-2">
                    {kp.title}
                  </p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-3">
                    {kp.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {kp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
                12ステップの流れ
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                問い合わせから助成金入金まで、平均6〜12ヶ月
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-2xl p-5 md:p-7 hover:shadow-sm transition bg-white"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm md:text-base font-black">
                      {s.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-1">
                        {s.title}
                      </h3>
                      <p className="text-xs md:text-sm text-emerald-700 font-semibold mb-2">
                        {s.duration}
                      </p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {s.summary}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 pl-0 md:pl-16 flex flex-col gap-2">
                    {s.details.map((d, k) => (
                      <li
                        key={k}
                        className="text-xs md:text-sm text-gray-600 leading-relaxed"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                助成金申請はすべて当社がサポート
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                計画届の作成、電子申請(GビズID)、労働局からの照会対応まで、
                <br className="hidden md:block" />
                社労士監修の書類を当社が作成。企業様の工数は最小限です。
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full transition"
              >
                無料相談はこちら
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

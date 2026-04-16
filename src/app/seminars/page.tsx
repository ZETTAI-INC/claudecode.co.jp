import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { upcomingSeminars, archivedSeminars } from "@/data/seminars";

export const metadata: Metadata = {
  title: "無料オンラインセミナー（毎週木曜）| おうとまくん",
  description:
    "おうとまくんAIリスキリング研修の毎週開催 無料オンラインセミナー。木曜20:00からGoogle Meetで60分、非エンジニアの現場社員が最短14日で業務ツールを内製化する実践事例と導入ステップ、助成金活用までお届けします。",
  keywords: [
    "無料セミナー",
    "AIセミナー",
    "Claude Code セミナー",
    "リスキリング",
    "オンラインセミナー",
    "内製化",
    "最短14日",
    "人材開発支援助成金",
    "法人研修",
    "AI人材育成",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/seminars" },
  openGraph: {
    title: "無料オンラインセミナー（毎週木曜）| おうとまくん",
    description:
      "毎週木曜20:00にGoogle Meetで60分。現場社員が最短14日で業務ツールを内製する実践事例と導入ステップをお届けします。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/seminars",
  },
};

const features = [
  { label: "参加費", value: "無料", sub: "何度でも参加可" },
  { label: "開催頻度", value: "毎週", sub: "木曜20:00定例" },
  { label: "形式", value: "Google Meet", sub: "オンライン60分" },
  { label: "定員", value: "先着30社", sub: "1社複数名OK" },
];

const steps = [
  {
    no: "01",
    title: "参加回を選ぶ",
    text: "今後の開催予定から、テーマ・日程が合う回を選択してください。各回ごとに専用ページをご用意しています。",
  },
  {
    no: "02",
    title: "専用フォームで申込",
    text: "選んだ回の詳細ページから、企業名・担当者名・役職・電話番号・メールを入力してお申込みください。",
  },
  {
    no: "03",
    title: "Meet URLをお届け",
    text: "1営業日以内に、選んだ回のGoogle MeetのURLをメールでお送りします。当日クリックで参加できます。",
  },
];

const faqs = [
  {
    q: "本当に無料ですか？後から請求されませんか？",
    a: "完全無料です。セミナー中・後も費用は一切発生しません。勧誘目的の強引な営業も行いません。",
  },
  {
    q: "競合他社でも参加できますか？",
    a: "申し訳ありませんが、研修事業者・同業のコンサルティング事業者様のご参加はお断りしております。ご了承ください。",
  },
  {
    q: "複数名で参加できますか？",
    a: "はい、1社から複数名のご参加を歓迎します。参加費は無料です。お申込みはお一人ずつ各回の詳細ページよりご登録ください。",
  },
  {
    q: "カメラ・マイクはオンにする必要がありますか？",
    a: "任意です。カメラ・マイクオフでの聴講のみのご参加も可能です。質問はチャットでも受け付けます。",
  },
  {
    q: "録画・資料の共有はありますか？",
    a: "セミナーの録画配信は行っておりません。当日ご都合が悪い場合は、別週の同内容セミナーへのお振替が可能です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeminarsPage() {
  return (
    <div id="page" className="site font-sans bg-[#fcfcfd] pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main pb-24 md:pb-0">

        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-gray-100 bg-white">
          <div className="mx-auto px-5 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Free Weekly Seminar
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              毎週開催、
              <br className="md:hidden" />
              Google Meetで60分。
              <br />
              <span className="text-blue-600">Claude Code無料セミナー</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              非エンジニアの現場社員が、14日で本番稼働する業務ツールを内製する。
              <br className="hidden md:block" />
              その全体像と成果物を、毎週定例のオンラインセミナーでご紹介します。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 mt-12 border border-gray-100 rounded-xl overflow-hidden shadow-sm max-w-3xl mx-auto">
              {features.map((f) => (
                <div key={f.label} className="bg-white p-5 flex flex-col items-center justify-center">
                  <span className="text-[11px] text-gray-500 font-bold mb-1 tracking-wide">{f.label}</span>
                  <span className="text-xl md:text-2xl font-black text-blue-600 mb-1">{f.value}</span>
                  <span className="text-[10px] text-gray-400">{f.sub}</span>
                </div>
              ))}
            </div>

            <a
              href="#upcoming"
              className="inline-flex items-center gap-2 mt-10 font-bold text-white bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-sm shadow-sm"
            >
              <span className="material-icons-outlined text-base">event</span>
              参加する回を選ぶ
            </a>
          </div>
        </section>

        {/* Upcoming Sessions */}
        <section id="upcoming" className="py-16 md:py-24 px-5 bg-white border-b border-gray-100">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="mb-10 md:mb-14">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                UPCOMING
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                今後の開催予定
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                毎週<strong>木曜20:00</strong>にGoogle Meetで開催。参加したい回の詳細ページから、専用フォームでお申込みください。
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {upcomingSeminars.map((s) => (
                <Link
                  key={s.slug}
                  href={`/seminars/${s.slug}/`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5"
                >
                  <div
                    className="shrink-0 w-20 h-20 rounded-lg flex flex-col items-center justify-center text-white"
                    style={{ backgroundColor: "#2563eb" }}
                  >
                    <span className="text-xs font-medium leading-none">{s.month}月</span>
                    <span className="text-3xl font-black leading-tight">{s.day}</span>
                    <span className="text-[10px] font-medium leading-none mt-0.5">({s.weekday})</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">
                        {s.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-bold">
                        <span className="material-icons-outlined text-sm">schedule</span>
                        {s.time}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-bold">
                        <span className="material-icons-outlined text-sm">videocam</span>
                        Google Meet
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-1">
                      {s.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {s.summary}
                    </p>
                  </div>

                  <div className="shrink-0 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors whitespace-nowrap">
                    詳細・申込へ
                    <svg width="8" height="12" viewBox="0 0 9 14" fill="none" className="ml-1">
                      <path d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z" fill="currentColor" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Archive */}
        <section className="py-16 md:py-24 px-5 bg-white border-y border-gray-100">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="mb-10 md:mb-14">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                ARCHIVE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                過去開催テーマ
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                これまでに扱ったテーマの一覧です。録画配信は行っていませんが、同テーマの再演リクエストは各回の申込時の備考欄よりお受けしています。
              </p>
            </div>

            <div className="border-t border-gray-100">
              {archivedSeminars.map((a) => (
                <div
                  key={a.slug}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-5 md:py-6 border-b border-gray-100"
                >
                  <div className="shrink-0 flex items-baseline gap-1 text-gray-500 w-28">
                    <span className="text-[11px] font-bold tracking-wide">{a.year}.</span>
                    <span className="text-lg font-black text-gray-800 tracking-tight">
                      {a.month}/{a.day}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-[17px] font-bold text-gray-900 mb-1 leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {a.summary}
                    </p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span className="material-icons-outlined text-sm">history</span>
                    archived
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-16 md:py-24 px-5">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="mb-14 text-center md:text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                FLOW
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                お申込みから参加までの流れ
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-6">
              {steps.map((s) => (
                <div key={s.no} className="flex-1 relative">
                  <div className="text-[11px] font-black text-blue-600 tracking-widest mb-3">
                    STEP {s.no}
                  </div>
                  <div className="h-px w-full bg-gray-200 mb-5 relative block">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-white"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-5 bg-white border-y border-gray-100">
          <div className="mx-auto" style={{ maxWidth: 800 }}>
            <div className="mb-12">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                よくある質問
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="pb-6 md:pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <h4 className="flex items-start gap-4 text-[15px] md:text-base font-bold text-gray-900 mb-3 leading-snug">
                    <span className="text-blue-600 font-black text-lg mt-[-2px]">Q.</span>
                    {item.q}
                  </h4>
                  <p className="flex items-start gap-4 text-sm text-gray-600 leading-relaxed md:pl-[34px]">
                    <span className="text-gray-300 font-black text-lg mt-[-2px] md:hidden">A.</span>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 px-5 text-center bg-gray-900 border-t border-gray-800 rounded-t-[3rem] mx-2 md:mx-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
          <div className="mx-auto relative z-10" style={{ maxWidth: 720 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
              まずは見てから、<br className="md:hidden" />
              検討してください。
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-8 font-medium">
              聴講のみ・カメラオフ参加もOK。<br className="md:hidden" />
              まずは毎週の無料セミナーで全体像を掴んでください。
            </p>
            <a
              href="#upcoming"
              className="inline-flex items-center gap-2 font-bold text-blue-600 bg-white px-8 md:px-12 py-4 rounded-full hover:bg-gray-50 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="material-icons-outlined text-lg">event</span>
              参加する回を選ぶ
            </a>
          </div>
        </section>

      </main>

      <a
        href="#upcoming"
        className="md:hidden fixed bottom-6 left-5 right-5 z-50 flex items-center justify-center gap-2 font-bold text-white bg-gray-900 py-4 rounded-xl shadow-2xl transition-transform active:scale-95"
      >
        <span className="material-icons-outlined text-base">event</span>
        <span className="text-sm tracking-wide">参加する回を選ぶ</span>
      </a>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "無料相談・適合診断（30分）| おうとまくん",
  description:
    "おうとまくんAI研修の無料オンライン相談・適合診断。対象部署／作りたい業務／セキュリティ前提の3点を30分ヒアリングし、最短14日で内製化できるか48時間以内に適合判定をお返しします。",
  keywords: [
    "無料相談",
    "AI研修 相談",
    "適合診断",
    "Claude Code",
    "リスキリング",
    "内製化",
    "最短14日",
    "人材開発支援助成金",
    "法人研修",
    "おうとまくん",
    "株式会社ZETTAI",
  ],
  alternates: { canonical: "https://claudecode.co.jp/consultation" },
  openGraph: {
    title: "無料相談・適合診断（30分）| おうとまくん",
    description:
      "対象部署・作りたい業務・セキュリティ前提の3点を30分でヒアリング。48時間以内に「最短14日で内製化できるか」の適合判定をお返しします。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/consultation",
  },
};

const topics = [
  {
    icon: "chat",
    title: "業務課題のヒアリング",
    text: "どの部署のどの業務をAIで内製化したいか、現状を整理しながら一緒に洗い出します。",
  },
  {
    icon: "groups",
    title: "受講者・推進体制の設計",
    text: "非エンジニアでも成果が出る受講者選定、社内の推進体制、上長巻き込みまで具体的にご提案します。",
  },
  {
    icon: "payments",
    title: "料金・助成金の活用",
    text: "厚労省 人材開発支援助成金 / DX分野リスキリング推進事業など、申請可否と実質負担をご案内します。",
  },
  {
    icon: "rocket_launch",
    title: "研修プランのカスタマイズ",
    text: "貴社の業務に合わせたカリキュラム調整、スケジュール、成果物のイメージまでその場で設計します。",
  },
];

const steps = [
  {
    no: "01",
    title: "フォームから予約",
    text: "下記フォームに貴社情報とご相談内容をご入力ください。1営業日以内に担当者よりご連絡いたします。",
  },
  {
    no: "02",
    title: "オンライン相談",
    text: "Google Meet / Zoom にて実施。現場の業務課題を伺い、その場で研修設計のご提案を行います。",
  },
  {
    no: "03",
    title: "提案書・見積のお届け",
    text: "相談内容をもとに、カスタマイズした研修プラン・スケジュール・見積書を即日〜3営業日以内に送付します。",
  },
];

const features = [
  { label: "相談料金", value: "無料", sub: "何度でも相談可" },
  { label: "所要時間", value: "30〜45分", sub: "オンライン対応" },
  { label: "対応エリア", value: "全国対応", sub: "対面もご相談可" },
  { label: "返信スピード", value: "1営業日", sub: "以内にご連絡" },
];

const faqs = [
  {
    q: "相談は本当に無料ですか？しつこい営業はありませんか？",
    a: "はい、ご相談は完全無料です。強引な営業や追客は一切行っておりません。ご検討状況に合わせて必要な情報のみお届けします。",
  },
  {
    q: "導入検討の初期段階でも相談できますか？",
    a: "もちろん可能です。「AIで何ができるか知りたい」「どの業務から着手すべきか整理したい」といった段階からお気軽にご相談ください。",
  },
  {
    q: "相談時に準備するものはありますか？",
    a: "特にご準備は不要です。気になっている業務課題や受講対象者のイメージがあれば、当日ヒアリングの中で一緒に整理します。",
  },
  {
    q: "複数名で参加しても大丈夫ですか？",
    a: "はい、経営層・人事・現場責任者など複数名でのご参加を歓迎しています。フォームの備考欄にご参加人数をご記入ください。",
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

export default function ConsultationPage() {
  return (
    <div id="page" className="site font-sans bg-[#fcfcfd] pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://claudecode.co.jp/" },
          { name: "適合診断", url: "https://claudecode.co.jp/consultation" },
        ]}
      />
      <Header />
      <main id="primary" className="site-main pb-24 md:pb-0">
        
        {/* Refined Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-gray-100 bg-white">
          <div className="mx-auto px-5 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Free Consultation
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              14日で内製化できるか、
              <br />
              30分で診断します
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              「対象部署」「作りたい業務」「セキュリティ前提」の3点だけ確認。
              <br className="hidden md:block" />
              相談後<strong>48時間以内</strong>に適合判定と概算の方向性をお返しします。
            </p>

            {/* Seamless Grid Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 mt-12 border border-gray-100 rounded-xl overflow-hidden shadow-sm max-w-3xl mx-auto">
              {features.map((f) => (
                <div key={f.label} className="bg-white p-5 flex flex-col items-center justify-center">
                  <span className="text-[11px] text-gray-500 font-bold mb-1 tracking-wide">{f.label}</span>
                  <span className="text-xl md:text-2xl font-black text-blue-600 mb-1">{f.value}</span>
                  <span className="text-[10px] text-gray-400">{f.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elevated Form Container */}
        <div id="consultation-form" className="py-16 md:py-20 relative z-10 -mt-8">
          <div className="mx-auto px-5" style={{ maxWidth: 1000 }}>
            {/* Softly shadowed box bringing focus to the form */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-12">
              <div className="text-center mb-10">
                <p className="text-blue-600 font-bold text-xs tracking-widest mb-3">
                  STEP 1 / 3
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  まずはフォームから予約
                </h2>
                <p className="text-sm text-gray-500">
                  入力は約60秒。<strong>1営業日以内</strong>に担当者よりご連絡いたします。
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Elegant Topics Grid */}
        <section className="py-16 md:py-24 px-5">
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="mb-12 md:mb-16">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                TOPICS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                無料相談で話せること
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                「何から相談すべきか決まっていない」段階でも大丈夫です。現場の困りごとを起点に、現状の整理を一緒に行います。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {topics.map((t) => (
                <div
                  key={t.title}
                  className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <span className="material-icons-outlined text-blue-600 text-2xl">
                      {t.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {t.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Timeline Flow */}
        <section className="py-16 md:py-24 px-5 bg-white border-y border-gray-100">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="mb-14 text-center md:text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                FLOW
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                ご相談から開始までの流れ
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-6">
              {steps.map((s) => (
                <div key={s.no} className="flex-1 relative">
                  <div className="text-[11px] font-black text-blue-600 tracking-widest mb-3">
                    STEP {s.no}
                  </div>
                  {/* Timeline Line */}
                  <div className="h-px w-full bg-gray-200 mb-5 relative block">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full ring-4 ring-white"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clean FAQ */}
        <section className="py-16 md:py-24 px-5">
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

        {/* Refined Bottom CTA */}
        <section className="py-16 md:py-20 px-5 text-center bg-gray-900 border-t border-gray-800 rounded-t-[3rem] mx-2 md:mx-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
          <div className="mx-auto relative z-10" style={{ maxWidth: 720 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
              もう迷わない。<br className="md:hidden" />
              まずは話すところから始めましょう。
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-8 font-medium">
              相談後に無理な営業は一切ありません。<br className="md:hidden" />
              情報収集段階でもお気軽にご予約ください。
            </p>
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-2 font-bold text-blue-600 bg-white px-8 md:px-12 py-4 rounded-full hover:bg-gray-50 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="material-icons-outlined text-lg">event_available</span>
              30分の適合診断を受ける
            </a>
          </div>
        </section>

      </main>

      {/* Elegant Sticky Mobile CTA */}
      <a
        href="#consultation-form"
        className="md:hidden fixed bottom-6 left-5 right-5 z-50 flex items-center justify-center gap-2 font-bold text-white bg-gray-900 py-4 rounded-xl shadow-2xl transition-transform active:scale-95"
      >
        <span className="material-icons-outlined text-base">mail_outline</span>
        <span className="text-sm tracking-wide">適合診断を予約する</span>
      </a>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "無料相談 | CLAUDE CODE リスキリング研修",
  description:
    "業務を一番知る社員が、2週間で作れる人材へ。貴社の業務課題・推進体制・助成金活用まで、専門家が無料でご相談を承ります。",
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
    title: "オンライン相談（30〜45分）",
    text: "Google Meet / Zoom にて実施。現場の業務課題を伺い、その場で研修プランの叩き台をご提案します。",
  },
  {
    no: "03",
    title: "提案書・見積をお届け",
    text: "相談内容をもとに、カスタマイズした研修プラン・スケジュール・見積書を3営業日以内に送付します。",
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

export default function ConsultationPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main pb-24 md:pb-0">
        {/* Hero */}
        <section
          className="pt-28 pb-10 md:pt-32 md:pb-14 text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #2563eb 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #60a5fa 0%, transparent 40%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)",
            }}
          />
          <div className="mx-auto px-4 relative" style={{ maxWidth: 1100 }}>
            <div className="text-center">
              <span className="inline-block text-sm tracking-[0.2em] uppercase opacity-80 mb-3">
                Free Consultation
              </span>
              <h1 className="text-3xl md:text-5xl font-black u-ff--headline leading-tight">
                無料相談
              </h1>
              <p className="mt-5 text-sm md:text-base opacity-95 max-w-2xl mx-auto leading-relaxed">
                貴社の業務課題から研修プラン・助成金活用まで、<br className="sp-only" />
                専門家が <strong>30〜45分のオンライン</strong> で丁寧にご案内します。
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 max-w-4xl mx-auto">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-2xl px-4 py-4 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <p className="text-xs opacity-80 mb-1">{f.label}</p>
                    <p className="text-lg md:text-xl font-black u-ff--headline">
                      {f.value}
                    </p>
                    <p className="text-[11px] opacity-75 mt-1">{f.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form — placed immediately after hero to minimize friction */}
        <div
          id="consultation-form"
          className="relative"
          style={{ background: "#F4FAFD" }}
        >
          <div className="mx-auto px-4 pt-10 md:pt-14" style={{ maxWidth: 1100 }}>
            <div className="text-center">
              <p className="text-[#2563eb] font-bold text-sm tracking-[0.1em] mb-2">
                STEP 1 / 3
              </p>
              <h2 className="text-2xl md:text-3xl font-black u-ff--headline text-[#151515] leading-[1.4]">
                まずはフォームから予約
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                入力は約60秒。<strong>1営業日以内</strong>に担当者よりご連絡いたします。
              </p>
            </div>
          </div>
          <ContactForm />
        </div>

        {/* What you can talk about */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-5">
                <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
                <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
                  TOPICS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#151515] u-ff--headline leading-[1.4] mb-4">
                無料相談で話せること
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                「何から相談すべきか決まっていない」段階でも大丈夫です。<br className="sp-only" />
                現場の困りごとを起点に、一緒に整理していきます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {topics.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl p-6 md:p-8 border border-[#e6edf5] bg-[#f8fafc] hover:border-[#2563eb] hover:bg-[#f0f6ff] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="material-icons-outlined flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl"
                      style={{ background: "#2563eb" }}
                    >
                      {t.icon}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#151515] mb-2 u-ff--headline">
                        {t.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-gray-600 leading-[1.8]">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA band */}
        <section
          className="py-10 md:py-14 px-4 text-white text-center"
          style={{
            background:
              "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <p className="text-lg md:text-2xl font-black u-ff--headline mb-4 leading-snug">
              「何を相談していいか分からない」<br className="sp-only" />
              段階でもOKです。
            </p>
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-3 bg-white text-[#1e40af] font-bold rounded-full px-8 md:px-10 py-3 md:py-4 hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              <span className="material-icons-outlined text-xl">mail_outline</span>
              予約フォームに戻る
            </a>
          </div>
        </section>

        {/* Flow */}
        <section className="py-16 md:py-24 px-4" style={{ background: "#F4FAFD" }}>
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-5">
                <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
                <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
                  FLOW
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#151515] u-ff--headline leading-[1.4]">
                ご相談の流れ
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {steps.map((s) => (
                <div
                  key={s.no}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative"
                >
                  <span
                    className="inline-block text-xs font-black tracking-widest mb-3"
                    style={{ color: "#2563eb" }}
                  >
                    STEP {s.no}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#151515] mb-3 u-ff--headline">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-[1.8]">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-5">
                <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
                <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#151515] u-ff--headline leading-[1.4]">
                無料相談についてのよくある質問
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[12px] border bg-[#f8fafc] border-[#e6edf5] p-5 md:p-6"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white font-black text-sm flex items-center justify-center">
                      Q
                    </span>
                    <p className="flex-1 text-[#151515] font-bold text-[14px] md:text-[16px] leading-[1.7] pt-1">
                      {item.q}
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-[#2563eb] text-[#2563eb] font-black text-sm flex items-center justify-center">
                      A
                    </span>
                    <p className="flex-1 text-[#444] text-[13px] md:text-[14px] leading-[1.9] pt-1">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 md:py-20 px-4 text-center bg-white">
          <div className="mx-auto" style={{ maxWidth: 720 }}>
            <h2 className="text-2xl md:text-3xl font-black u-ff--headline text-[#151515] mb-4 leading-snug">
              もう迷わない。<br className="sp-only" />
              まずは話すところから始めましょう。
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8">
              相談後に無理な営業は一切ありません。<br className="sp-only" />
              情報収集段階でもお気軽にご予約ください。
            </p>
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-3 font-bold text-white rounded-full px-10 py-4 hover:opacity-90 transition-opacity"
              style={{ background: "#2563eb" }}
            >
              <span className="material-icons-outlined text-xl">event_available</span>
              無料相談を予約する
            </a>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <a
        href="#consultation-form"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 font-bold text-white rounded-full py-4 shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)",
        }}
      >
        <span className="material-icons-outlined text-xl">mail_outline</span>
        <span>無料で相談を予約する</span>
      </a>
      <Footer />
    </div>
  );
}

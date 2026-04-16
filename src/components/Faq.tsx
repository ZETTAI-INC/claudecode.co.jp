"use client";

import React, { useState, type ReactNode } from "react";
import TermPopover from "@/components/TermPopover";
import { renderWithTerms } from "@/components/renderWithTerms";

type QA = {
  q: ReactNode;
  a: ReactNode;
};

const flowSteps: { num: string; title: string; duration: string; description: string }[] = [
  {
    num: "01",
    title: "お問い合わせ",
    duration: "当日〜翌営業日",
    description: "フォームまたは電話からご連絡ください。課題の概要をお伺いし、次のヒアリング日程を調整します。",
  },
  {
    num: "02",
    title: "課題ヒアリング",
    duration: "60〜90分",
    description: "本番導入したい業務・対象部署・受講候補者のスキル・セキュリティ前提を伺い、14日で本番導入できる対象かを見極めます。",
  },
  {
    num: "03",
    title: "カリキュラム提案 & お見積もり",
    duration: "1週間以内",
    description: "ヒアリング内容をもとに、14日で本番導入まで届くカリキュラムとお見積もりをカスタマイズしてご提示します。",
  },
  {
    num: "04",
    title: "ご契約 & 事前準備",
    duration: "2〜3週間",
    description: "契約締結後、本番導入する業務の選定・デプロイ先環境の準備・事前アンケートを進めます。",
  },
  {
    num: "05",
    title: "研修開始 → 14日後に本番導入",
    duration: "14日間〜",
    description: "初日からClaude Codeで本番導入する業務ツールの設計・実装に着手。修了日には1人1本のAIツールが御社の本番環境で稼働します。",
  },
];

const FlowTimeline: React.FC = () => (
  <div className="flex flex-col gap-3 mt-1">
    <p className="text-[12px] md:text-[13px] text-gray-600 font-bold mb-2" style={{ wordBreak: "keep-all" }}>
      お問い合わせから最短3週間で研修開始、そこから14日で本番導入まで到達します。
    </p>
    {flowSteps.map((step, i) => (
      <div key={step.num} className="flex gap-3 items-start bg-white rounded-lg p-3 md:p-4 border border-[#e6edf5]">
        <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eaf3ff] border-2 border-[#2563eb] flex flex-col items-center justify-center">
          <span className="text-[#2563eb] text-[8px] md:text-[9px] font-bold tracking-[0.1em] leading-none">STEP</span>
          <span className="text-[#2563eb] text-[13px] md:text-[15px] font-black italic leading-none mt-0.5">{step.num}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            <h4 className="text-[13px] md:text-[14.5px] font-black text-[#151515]" style={{ wordBreak: "keep-all" }}>
              {step.title}
            </h4>
            <span className="self-start inline-block text-[10px] md:text-[11px] text-[#2563eb] font-bold bg-[#eaf3ff] px-2 py-0.5 rounded-full whitespace-nowrap">
              {step.duration}
            </span>
          </div>
          <p className="text-[11.5px] md:text-[12.5px] text-[#555] leading-[1.7] font-bold" style={{ wordBreak: "keep-all" }}>
            {step.description}
          </p>
        </div>
        {i !== flowSteps.length - 1 && null}
      </div>
    ))}
  </div>
);

const faqs: QA[] = [
  {
    q: "お問い合わせから14日本番導入までの流れは？",
    a: <FlowTimeline />,
  },
  {
    q: "プログラミング未経験の社員でも、本当に14日でAIを業務に本番導入できますか？",
    a: "はい。本研修は業務知識のある非エンジニア職（営業・企画・事務・マーケティングなど）を主対象とし、受講者の約96%が14日間で自部署の業務ツールを自力で本番導入しています。Claude Codeが自然言語で実装を支援するため、従来のプログラミング研修のような文法学習は最小限で済みます。",
  },
  {
    q: "オンライン受講と対面受講、どちらに対応していますか？",
    a: "オンライン・対面・ハイブリッド、いずれも対応可能です。受講者の所在地や業務状況に合わせて柔軟に設計します。全国出張可能です。",
  },
  {
    q: "最小受講人数・最大受講人数を教えてください。",
    a: "基礎導入コースは5名から、社内講師育成コースは3名から受付可能です。上限は原則15名ですが、カスタマイズで拡張できます。",
  },
  {
    q: "研修内容は自社の業務に合わせてカスタマイズできますか？",
    a: "カスタマイズが前提です。事前ヒアリングで受講者の所属部署・業務課題を伺い、その課題をそのまま研修中の本番導入テーマに使います。修了時には、その課題を解決する1本のAIツールが御社の本番環境で稼働している状態になります。",
  },
  {
    q: "助成金・補助金は利用できますか？",
    a: "厚生労働省の人材開発支援助成金・DX分野リスキリング推進事業など、各種助成金の対象となる可能性があります。申請サポートもご相談ください。",
  },
  {
    q: "研修後に受講者が使えなくなる「形骸化」が心配です。",
    a: "本研修は修了後の伴走支援をセットにしており、実践開発コースは3ヶ月、社内講師育成コースは6ヶ月、専門メンターが質問対応と本番運用の定着を支援します。座学ではなく、14日で本番導入したAIツールを現場で使い続け、次の本番導入まで回す設計です。",
  },
  {
    q: "修了後の成果はどのように測定しますか？",
    a: "修了時点で各受講者が本番導入したAIツールの本数・稼働状況・業務時間削減効果をレポートします。理解度テストではなく、本番導入のインパクトで測定するのが本研修の特徴です。",
  },
  {
    q: "研修中に扱うデータの範囲と、実データの取り扱いはどうなりますか？",
    a: (
      <>
        原則としてマスク済みデータまたはテストデータを使用します。実データを使う必要がある場合は、
        <TermPopover termKey="NDA">NDA</TermPopover>
        締結のうえ、アクセス範囲と保持期間を書面で合意します。機密データを直接使う場合は、事前に御社セキュリティポリシーに沿った取り扱い方法を合意します。
      </>
    ),
  },
  {
    q: "アカウント・権限の管理、SSO/IdP連携は可能ですか？",
    a: (
      <>
        Claude Code のアカウントは受講者ごとに個別発行します。研修終了後の権限引き継ぎ・削除手順も事前に定義。御社の
        <TermPopover termKey="SSO">SSO/IdP連携</TermPopover>
        にも対応可能です。
      </>
    ),
  },
  {
    q: "デプロイ先の環境は指定できますか？閉域網でも対応できますか？",
    a: "デプロイ先は御社の既存環境（AWS / GCP / Azure / オンプレミス）を前提とします。閉域網での実施にも対応。デプロイ先が未定の場合は、ヒアリング時に一緒に検討します。",
  },
  {
    q: "御社側で準備が必要なものは何ですか？",
    a: "必要な準備は3つだけです。(1) 受講者のPC・ネットワーク環境、(2) 対象業務のヒアリング協力、(3) デプロイ先の環境情報。それ以外はすべて当社側で準備します。",
  },
  {
    q: "情シス・法務向けの確認事項や、導入前チェックリストはありますか？",
    a: (
      <>
        導入前チェックリストをご用意しています。データ保持ポリシー、外部
        <TermPopover termKey="API">API</TermPopover>
        通信先一覧、ログ取得範囲、契約終了後のデータ削除手順など、稟議に必要な情報をまとめてお渡しします。金融・医療・公共など機密性の高い業界での導入実績もあります。お問い合わせ時にご請求ください。
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[12px] border transition-colors duration-200 ${
                  isOpen
                    ? "bg-[#f0f6ff] border-[#2563eb]"
                    : "bg-[#f8fafc] border-[#e6edf5]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white font-black text-sm flex items-center justify-center">
                    Q
                  </span>
                  <span className="flex-1 text-[#151515] font-bold text-[14px] md:text-[16px] leading-[1.7] pt-1">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#2563eb] font-black text-xl transition-transform duration-200 pt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-[#2563eb] text-[#2563eb] font-black text-sm flex items-center justify-center">
                      A
                    </span>
                    <div className="flex-1 text-[#444] text-[13px] md:text-[14px] leading-[1.9] pt-1">
                      {renderWithTerms(item.a)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

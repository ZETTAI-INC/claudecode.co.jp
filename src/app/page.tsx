import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AdoptionTimeline from "@/components/AdoptionTimeline";
import ClientCompanies from "@/components/ClientCompanies";
import CaseStudies from "@/components/CaseStudies";
import AiServiceStrengths from "@/components/AiServiceStrengths";
import EssenceOfTraining from "@/components/EssenceOfTraining";
import DevelopmentSpeedComparison from "@/components/DevelopmentSpeedComparison";
import Pricing from "@/components/Pricing";
import RstaffingFv from "@/components/RstaffingFv";
import ResourceDownloadCta from "@/components/ResourceDownloadCta";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "プログラミング未経験の社員でも、本当に14日でAIを業務に本番導入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。本研修は業務知識のある非エンジニア職（営業・企画・事務・マーケティングなど）を主対象とし、受講者の約96%が14日間で自部署の業務ツールを自力で本番導入しています。Claude Codeが自然言語で実装を支援するため、従来のプログラミング研修のような文法学習は最小限で済みます。",
      },
    },
    {
      "@type": "Question",
      name: "オンライン受講と対面受講、どちらに対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "オンライン・対面・ハイブリッド、いずれも対応可能です。受講者の所在地や業務状況に合わせて柔軟に設計します。全国出張可能です。",
      },
    },
    {
      "@type": "Question",
      name: "最小受講人数・最大受講人数を教えてください。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基礎導入コースは5名から、社内講師育成コースは3名から受付可能です。上限は原則15名ですが、カスタマイズで拡張できます。",
      },
    },
    {
      "@type": "Question",
      name: "研修内容は自社の業務に合わせてカスタマイズできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "カスタマイズが前提です。事前ヒアリングで受講者の所属部署・業務課題を伺い、その課題をそのまま研修中の本番導入テーマに使います。修了時には、その課題を解決する1本のAIツールが御社の本番環境で稼働している状態になります。",
      },
    },
    {
      "@type": "Question",
      name: "助成金・補助金は利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省の人材開発支援助成金・DX分野リスキリング推進事業など、各種助成金の対象となる可能性があります。申請サポートもご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "研修後に受講者が使えなくなる「形骸化」が心配です。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本研修は修了後の伴走支援をセットにしており、実践開発コースは3ヶ月、社内講師育成コースは6ヶ月、専門メンターが質問対応と本番運用の定着を支援します。座学ではなく、14日で本番導入したAIツールを現場で使い続け、次の本番導入まで回す設計です。",
      },
    },
    {
      "@type": "Question",
      name: "修了後の成果はどのように測定しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "修了時点で各受講者が本番導入したAIツールの本数・稼働状況・業務時間削減効果をレポートします。理解度テストではなく、本番導入のインパクトで測定するのが本研修の特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "研修中に扱うデータの範囲と、実データの取り扱いはどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "原則としてマスク済みデータまたはテストデータを使用します。実データを使う必要がある場合は、NDA締結のうえ、アクセス範囲と保持期間を書面で合意します。機密データを直接使う場合は、事前に御社セキュリティポリシーに沿った取り扱い方法を合意します。",
      },
    },
    {
      "@type": "Question",
      name: "アカウント・権限の管理、SSO/IdP連携は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Code のアカウントは受講者ごとに個別発行します。研修終了後の権限引き継ぎ・削除手順も事前に定義。御社のSSO/IdP連携にも対応可能です。",
      },
    },
    {
      "@type": "Question",
      name: "デプロイ先の環境は指定できますか？閉域網でも対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "デプロイ先は御社の既存環境（AWS / GCP / Azure / オンプレミス）を前提とします。閉域網での実施にも対応。デプロイ先が未定の場合は、ヒアリング時に一緒に検討します。",
      },
    },
    {
      "@type": "Question",
      name: "御社側で準備が必要なものは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必要な準備は3つだけです。(1) 受講者のPC・ネットワーク環境、(2) 対象業務のヒアリング協力、(3) デプロイ先の環境情報。それ以外はすべて当社側で準備します。",
      },
    },
    {
      "@type": "Question",
      name: "情シス・法務向けの確認事項や、導入前チェックリストはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "導入前チェックリストをご用意しています。データ保持ポリシー、外部API通信先一覧、ログ取得範囲、契約終了後のデータ削除手順など、稟議に必要な情報をまとめてお渡しします。金融・医療・公共など機密性の高い業界での導入実績もあります。お問い合わせ時にご請求ください。",
      },
    },
  ],
};

export default function Home() {
  return (
    <div id="page" className="site is-page-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main">
        <div>
          <HeroBanner />
          <AiServiceStrengths />
          <EssenceOfTraining />
          <DevelopmentSpeedComparison />
          <AdoptionTimeline />
          <ClientCompanies />
          <CaseStudies />
          <Pricing />
          <RstaffingFv />
          <Faq />
          <ResourceDownloadCta />
          <ContactForm />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

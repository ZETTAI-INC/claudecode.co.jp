"use client";

import React, { useState } from "react";
import Image from "next/image";
import { renderWithTerms } from "@/components/renderWithTerms";

interface CaseStudy {
  image: string;
  title: string;
  company: string;
  ticker?: string;
  industry: string;
  scale: string;
  department: string;
  role: string;
  challenge: string;
  built: string;
  daysToLaunch: string;
  impact: string;
  tools: string;
  constraints: string;
}

const cases: CaseStudy[] = [
  {
    image: "/img/cases/fines-training.jpeg",
    title: "動画配信プラットフォームの広告レポート作成を自動化、運用工数を60%削減",
    company: "株式会社ファインズ",
    ticker: "東証グロース：5125",
    industry: "動画マーケティングDX",
    scale: "中小企業向け動画マーケティング支援・Videoクラウド運営",
    department: "広告運用部",
    role: "動画広告プランナー・運用担当",
    challenge:
      "中小企業クライアント向けに提供している動画広告・マンガ広告の運用レポートを、担当者が毎月手作業でスプレッドシートに集計。1社あたり2〜3時間、月間で100時間以上をレポート作成に費やしており、運用分析や改善提案に時間を割けない状況だった。",
    built: "動画広告KPI自動レポートジェネレーター（Videoクラウド連携）",
    daysToLaunch: "11日",
    impact: "レポート作成工数を60%削減し、運用担当が「分析・提案」に時間を再配分できる体制に。\n月間100時間以上の手作業集計をわずか数クリックで完了できるようになり、クライアントへの改善提案のサイクルも週次から日次に短縮されました。",
    tools: "Claude Code / Next.js / BigQuery / Looker Studio API",
    constraints:
      "クライアントの広告実績データを扱うため、研修では完全にマスク済みのダミーデータで開発。本番接続時には情報システム部門のセキュリティレビューを経て段階的にリリースする体制を構築。",
  },
  {
    image: "/img/cases/wiz-training.jpeg",
    title: "DXサービス300種を扱う営業組織が、提案書自動生成で商談数を2.5倍に",
    company: "株式会社WIZ",
    industry: "IT総合商社・DX支援",
    scale: "従業員925名（対象：法人パートナーDX事業部 約40名）",
    department: "法人営業部",
    role: "法人営業・DXコンシェルジュ",
    challenge:
      "通信・電力・SaaS等300を超えるDXサービスを取り扱う中、顧客ヒアリング内容から最適なサービス組み合わせを提案書に落とす作業が完全に属人的。ベテランと新人で提案書の品質に大きな差があり、新人の立ち上がりに3〜6ヶ月かかっていた。",
    built: "ヒアリングシート→最適サービス提案書 自動生成ツール",
    daysToLaunch: "13日",
    impact: "新人営業の提案書作成時間を1時間→15分へ短縮し、1人あたりの商談数が2.5倍に。\n提案書の品質もベテラン水準で揃い、新人の独り立ち期間が3〜6ヶ月から6週間に短縮。商材マスタの更新も営業メンバー自身で運用できる状態まで内製化。",
    tools: "Claude Code / Next.js / 社内CRM / Slack API",
    constraints:
      "顧客情報を扱うため研修中は架空の商談データを使用。本番リリース時にはアクセス権限を法人営業部内に限定し、情シス部門のログ監査ルールに準拠した設計で運用開始。",
  },
  {
    image: "/img/cases/xim-training.png",
    title: "ISマーケティング会社のSNS運用データ分析を自動化、提案サイクルを日次化",
    company: "株式会社XiM",
    industry: "ISマーケティング・ブランドデザイン",
    scale: "従業員100名規模（対象：マーケティング・クリエイティブ部門 12名）",
    department: "マーケティング・クリエイティブ部門",
    role: "マーケター・プランナー・ディレクター",
    challenge:
      "クライアントのSNSアカウント運用において、各媒体のインサイト・エンゲージメントデータを手作業でExcelに集計し、週次レポート作成に1案件あたり4時間を費やしていた。案件数の増加でレポート業務が肥大化し、クリエイティブ提案に時間を割けない構造的課題を抱えていた。",
    built: "マルチSNSインサイト統合ダッシュボード＆施策ドラフト自動生成Bot",
    daysToLaunch: "9日",
    impact: "SNS運用レポート作成を週4時間→30分に短縮し、クリエイティブ提案の立案サイクルを週次から日次へ。\nマーケターが施策ドラフトをClaude Codeに下書きさせることで、施策案の数が平均3倍に増え、クライアント満足度も改善。",
    tools: "Claude Code / Next.js / Meta Graph API / X API / Supabase",
    constraints:
      "クライアントのSNSアカウントAPIキーを扱うため、研修では自社の公式アカウントとダミーデータのみで実装・検証。本番運用時はクライアントごとに認証情報を分離し、アクセスログを全件保存する設計で対応。",
  },
  {
    image: "/img/cases/kagoshima-dashcamp.png",
    title: "鹿児島ダッシュキャンプに登壇、法人100社の前でClaude Code活用を語る",
    company: "鹿児島ダッシュキャンプ 登壇（デジライズ代表 チャエン氏と共演）",
    industry: "カンファレンス・業界イベント",
    scale: "参加法人 約100社",
    department: "主催：鹿児島ダッシュキャンプ実行委員会",
    role: "セッションテーマ：AI×地方について語ろう",
    challenge:
      "地方企業・スタートアップが抱える「AI導入の第一歩を踏み出せない」課題に対し、Claude Codeを活用した内製化のリアルな現場知を、全国から集まった経営者・事業責任者に直接届ける必要があった。",
    built: "40分のパネルセッション「AI×地方について語ろう」",
    daysToLaunch: "当日開催（2026年）",
    impact: "デジライズ代表・チャエン氏とのクロストークで、Claude Codeによる業務内製化の実事例と、地方企業がAI活用で勝ち筋を作る方法を法人100社に共有。\n登壇後は問い合わせが急増し、弊社研修サービスへの導入相談・地方企業からの支援依頼が拡大。",
    tools: "Claude Code / 実導入事例ベースのリアルトーク",
    constraints:
      "参加企業の業種が多岐にわたるため、特定業種に依存しない「内製化の型」に絞ってセッションを構成。",
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const c = cases[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="frontSectionCaseStudies" className="bg-white py-14 md:py-20 px-4 sm:px-6 font-sans text-[#333]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* --- Global Header --- */}
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl md:text-[28px] font-bold tracking-wider text-gray-800">
            導入事例
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest leading-none mb-1">
            Claude Code
          </div>
        </div>
        {/* Blue Thick Line */}
        <div className="w-full h-[5px] md:h-[6px] bg-[#1890FF] mb-12 md:mb-14"></div>

        {/* --- Single Case Display --- */}
        <div className="min-h-[480px]">
          <article key={currentIndex} className="w-full transition-opacity duration-300">
            
            {/* Top Section: Image & Info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
              
              {/* Image (Compact) */}
              <div className="md:w-[220px] lg:w-[260px] flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-gray-100 rounded-sm cursor-zoom-in group"
                  aria-label="画像を拡大"
                >
                  <Image
                    src={c.image}
                    alt={c.company}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    タップで拡大
                  </span>
                </button>
              </div>

              {/* Info (Right Side) */}
              <div className="flex-1 flex flex-col justify-center">
                
                {/* Title & Company */}
                <div className="mb-2">
                  {c.ticker && (
                    <span className="inline-block text-[10px] md:text-xs font-bold text-[#1890FF] bg-[#E6F4FF] border border-[#1890FF]/30 rounded px-2 py-0.5 mb-2">
                      {c.ticker}
                    </span>
                  )}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                    <h3 className="text-xl md:text-[28px] font-bold text-[#1890FF] tracking-wide whitespace-nowrap">
                      {renderWithTerms(c.company)} <span className="text-lg md:text-xl font-medium">様</span>
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-gray-600">
                      {c.built}の開発・提供
                    </p>
                  </div>
                </div>

                {/* Department & Role */}
                <div className="text-base md:text-lg font-bold text-gray-700 mb-5">
                  {c.department}　{c.role} 様
                </div>

                {/* Challenge Box (Compact) */}
                <div className="bg-[#F2F2F2] p-4 w-full rounded-sm">
                  <div className="text-xs font-bold text-gray-500 mb-1.5">
                    課題
                  </div>
                  <p className="font-bold text-[14px] md:text-base text-gray-800 leading-[1.6] tracking-wide">
                    {renderWithTerms(c.challenge)}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pl-0 md:pl-[250px] lg:pl-[290px]">
              
              {/* Left Column: 導入背景 / 制約 */}
              <div>
                <div className="text-[14px] md:text-[15px] font-bold text-[#A6A6A6] mb-2.5">
                  導入背景・制約
                </div>
                <div className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-[1.7] flex flex-col gap-3">
                  <p>{renderWithTerms(c.constraints)}</p>
                  <div className="bg-gray-50 p-2.5 mt-1 border-l-4 border-gray-300 text-[12px] md:text-[13px]">
                    <span className="text-gray-500 block text-[11px] mb-1">使用技術 / 環境</span>
                    {renderWithTerms(c.tools)}
                  </div>
                </div>
              </div>

              {/* Right Column: 得られた成果 */}
              <div>
                <div className="text-[14px] md:text-[15px] font-bold text-[#A6A6A6] mb-2.5">
                  得られた成果
                </div>
                <div className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-[1.7] flex flex-col gap-2">
                  {c.impact.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <div className="inline-block mt-2 font-black text-[#1890FF] text-[15px]">
                    公開までの期間：{c.daysToLaunch}
                  </div>
                </div>
              </div>

            </div>

          </article>
        </div>

        {/* --- Slider Controls --- */}
        <div className="flex items-center justify-center gap-6 mt-14 md:mt-16">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors cursor-pointer"
            aria-label="Previous Case"
          >
            ←
          </button>
          
          <div className="flex gap-3">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to case ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-[#1890FF] scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors cursor-pointer"
            aria-label="Next Case"
          >
            →
          </button>
        </div>

      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xl font-bold"
            aria-label="閉じる"
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={c.image}
              alt={c.company}
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}

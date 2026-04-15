"use client";

import React, { useState } from "react";
import Image from "next/image";
import { renderWithTerms } from "@/components/renderWithTerms";

interface CaseStudy {
  image: string;
  title: string;
  company: string;
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
    image: "/img/uploads/2024/03/ab7c30289fa514dce543f51f60922ae7.jpg",
    title: "開発部門100名がClaude Codeを習得し、開発工数50%削減を達成",
    company: "株式会社FINES（上場企業）",
    industry: "製造業",
    scale: "従業員800名（対象部門100名）",
    department: "生産管理部",
    role: "生産管理担当",
    challenge:
      "Excel台帳による工程管理が属人化し、担当者の退職リスクが経営課題に。外注の見積もりは「1,200万円・6ヶ月」と高額かつ長期間であり早急な解決策を求めていた。",
    built: "工程進捗ダッシュボード（Webアプリ）",
    daysToLaunch: "12日",
    impact: "開発工数50%削減、年間外注費▲800万円相当の内製化を実現。\n数ヶ月かかると言われていたダッシュボードを自社リソースのみでわずか12日で構築し、現場の属人化状態から素早く脱却することができました。",
    tools: "Claude Code / Next.js / Supabase / Render",
    constraints:
      "社内ネットワークのみという制約下で実施。実データはマスク済みのダミーデータを使用し、本番環境への切り替え時には情報システム部の厳格な承認を経て接続する体制を構築。",
  },
  {
    image: "/img/uploads/2024/02/c3e59afb1b9e8b9302dadc9db83a8df4.png",
    title: "納品スピード3倍を達成したSIerのAIペアプログラミング導入",
    company: "株式会社WIZ",
    industry: "IT・通信",
    scale: "従業員200名（対象チーム15名）",
    department: "受託開発チーム",
    role: "SE・プログラマー",
    challenge:
      "属人的なコーディングにより案件ごとにコード品質がバラつき、レビュー工数が開発時間全体の30%を占有。結果として納品遅延が常態化し組織全体の生産性低下を招いていた。",
    built: "AIコードレビュー＆自動生成ツール",
    daysToLaunch: "10日",
    impact: "納品速度が従来の3倍へと圧倒的に向上。\nさらにコードレビューにかかる工数を60%削減しつつ、AIによる確実なテスト生成でバグ発生率も40%低下させるなど、品質向上とスピードアップを両立しました。",
    tools: "Claude Code / GitHub Actions / Jest",
    constraints:
      "セキュリティの観点から顧客のソースコードは一切使用せず、自社内プロジェクトのコードのみを用いたセキュアな研修スキームにて実施。事前のNDA完全締結のもと遂行。",
  },
  {
    image: "/img/uploads/2024/02/13cf17df8b0af8de2e099ea6c60f09d5.png",
    title: "非エンジニア中心のスタートアップが業務効率化70%を実現",
    company: "株式会社XiM",
    industry: "SaaS",
    scale: "従業員30名（全社参加）",
    department: "事業推進部",
    role: "営業・CS・広報担当",
    challenge:
      "Googleスプレッドシートと手動メールによる顧客ステータス管理が限界に達し、オペレーションミスが多発していた。しかし新たなツール導入の予算は「月額10万円以内」と厳しい制限があった。",
    built: "顧客ステータス管理アプリ＆自動通知Bot",
    daysToLaunch: "9日",
    impact: "全体の業務効率化70%を達成し、これまで手作業で行っていた月間20時間の入力・対応作業を完全に自動化。\n顧客情報の対応漏れが事実上「ゼロ」になる劇的なオペレーション改善を実現しました。",
    tools: "Claude Code / Next.js / Supabase / Slack API",
    constraints:
      "SaaS企業としてのガバナンスに従い顧客データは完全マスク。テストデータ100件を用いた段階的な開発・検証フェーズを設け、本番切り替え時にCTOの最終承認を得るフローを策定。",
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
                <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-gray-100 rounded-sm">
                  <Image
                    src={c.image}
                    alt={c.company}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Info (Right Side) */}
              <div className="flex-1 flex flex-col justify-center">
                
                {/* Title & Company */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <h3 className="text-xl md:text-[28px] font-bold text-[#1890FF] tracking-wide">
                    {renderWithTerms(c.company)} <span className="text-lg md:text-xl font-medium">様</span>
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-gray-600 mt-1 md:mt-0 md:ml-3">
                    {c.built}の開発・提供
                  </p>
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
    </section>
  );
}

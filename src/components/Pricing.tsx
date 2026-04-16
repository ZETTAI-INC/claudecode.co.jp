import React from "react";
import { renderWithTerms } from "@/components/renderWithTerms";

export default function Pricing() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 font-sans text-[#333]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl md:text-[26px] font-bold tracking-wider text-gray-800 flex items-center gap-3">
            料金プラン
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest">
            Claude Code
          </div>
        </div>

        {/* Pricing Table Wrapper */}
        <div className="w-full overflow-x-auto pt-4 pb-6 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[800px] grid grid-cols-[minmax(150px,200px)_minmax(180px,1fr)_minmax(180px,1fr)_minmax(180px,1fr)] gap-[2px] bg-[#E5E7EB] border border-[#E5E7EB]">
            
            {/* --- Header Row --- */}
            {/* Top-left empty cell */}
            <div className="bg-white"></div>
            {/* Column Headers */}
            <div className="bg-[#7A7A7A] text-white font-bold py-4 px-2 text-center text-[15px] tracking-wide relative">
              Eラーニングコース
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white font-bold py-4 px-2 text-center text-[15px] md:text-[16px] tracking-wide relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-[11px] font-black px-4 py-0.5 rounded-full shadow-sm tracking-widest whitespace-nowrap border border-white">
                おすすめ
              </div>
              ハイブリッドコース
            </div>
            <div className="bg-[#7A7A7A] text-white font-bold py-4 px-2 text-center text-[15px] tracking-wide relative">
              完全対面コース
            </div>

            {/* --- Row 1: 基本利用料 / 料金目安 --- */}
            <div className="bg-[#F5F5F5] text-gray-700 font-bold py-6 px-4 flex items-center justify-center text-sm tracking-wide text-center">
              料金目安
            </div>
            <div className="bg-white flex flex-col items-center justify-center py-6 px-2 text-center">
              <span className="font-bold text-xl md:text-2xl text-gray-800">
                30万円〜<span className="text-sm font-bold"> / 月</span>
              </span>
            </div>
            <div className="bg-orange-50/70 flex flex-col items-center justify-center py-6 px-2 text-center shadow-[inset_0_0_0_2px_#fb923c]">
              <span className="font-black text-2xl md:text-3xl text-orange-600">
                50万円〜<span className="text-sm font-bold text-gray-800"> / 月</span>
              </span>
            </div>
            <div className="bg-white flex flex-col items-center justify-center py-6 px-2 text-center">
              <span className="font-bold text-xl md:text-2xl text-gray-800">
                120万円〜<span className="text-sm font-bold"> / 月</span>
              </span>
            </div>

            {/* --- Row 2: 期間・スケジュール --- */}
            <div className="bg-[#F5F5F5] text-gray-700 font-bold py-6 px-4 flex items-center justify-center text-sm tracking-wide text-center">
              期間・スケジュール
            </div>
            <div className="bg-white flex flex-col items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                14日間は追加料金なし<br />15日目以降は、各プランと同様
              </span>
              <span className="text-[11px] text-gray-500 mt-1 font-bold">※(オンデマンド期間の例)</span>
            </div>
            <div className="bg-orange-50/70 flex flex-col items-center justify-center py-4 px-4 text-center shadow-[inset_2px_0_0_0_#fb923c,inset_-2px_0_0_0_#fb923c]">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                2週間（対面+オンライン）<br />+ 伴走4週間
              </span>
            </div>
            <div className="bg-white flex flex-col items-center justify-center py-4 px-4 text-center relative group">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                2週間（フル対面）<br />+ 伴走4週間
              </span>
            </div>

            {/* --- Row 3: 受講形式 --- */}
            <div className="bg-[#F5F5F5] text-gray-700 font-bold py-6 px-4 flex items-center justify-center text-sm tracking-wide text-center">
              受講形式
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                完全オンライン / 自己ペース
              </span>
            </div>
            <div className="bg-orange-50/70 flex items-center justify-center py-4 px-4 text-center shadow-[inset_2px_0_0_0_#fb923c,inset_-2px_0_0_0_#fb923c]">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                対面 + オンライン併用
              </span>
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                講師が御社に常駐
              </span>
            </div>

            {/* --- Row 4: 受講上限人数 --- */}
            <div className="bg-[#F5F5F5] text-gray-700 font-bold py-6 px-4 flex items-center justify-center text-sm tracking-wide text-center">
              受講人数
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                人数上限なし（追加料金なし）
              </span>
            </div>
            <div className="bg-orange-50/70 flex items-center justify-center py-4 px-4 text-center shadow-[inset_2px_0_0_0_#fb923c,inset_-2px_0_0_0_#fb923c]">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                5〜15名 / 回
              </span>
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                5〜10名 / 回
              </span>
            </div>

            {/* --- Row 5: 伴走・サポート体制 --- */}
            <div className="bg-[#F5F5F5] text-gray-700 font-bold py-6 px-4 flex items-center justify-center text-sm tracking-wide text-center">
              サポート体制
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                チャット質問サポート30日<br />（追加料金なし）
              </span>
            </div>
            <div className="bg-orange-50/70 flex items-center justify-center py-4 px-4 text-center shadow-[inset_2px_0_0_0_#fb923c,inset_-2px_0_0_0_#fb923c,inset_0_-2px_0_0_#fb923c]">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                修了後3ヶ月のチャット伴走＋<br/>平日オンライン{renderWithTerms("コードレビュー")}<br/>（追加料金なし）
              </span>
            </div>
            <div className="bg-white flex items-center justify-center py-4 px-4 text-center">
              <span className="font-bold text-[13px] md:text-sm text-gray-800 leading-relaxed">
                修了後1ヶ月の現場フォローと<br/>対面でのチームビルディング
              </span>
            </div>

          </div>
        </div>

        {/* --- Conditions / Notes (Bottom Area) --- */}
        <div className="mt-12 text-left">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 tracking-wide">
            対象企業・法人の条件
          </h3>
          <p className="text-gray-700 font-bold text-[13px] md:text-sm leading-[1.8] tracking-wide">
            {renderWithTerms("自社内で14日本番導入を回す意志があること。")}実際の業務課題を題材に、本番導入まで到達するプロジェクトを設計すること。<br />
            記載の料金目安は受講人数・カスタマイズ内容により変動いたします。<br />
            ※ {renderWithTerms("厚生労働省の人材開発支援助成金・DX分野リスキリング推進事業など、各種助成金の対象となる可能性があります。")}
          </p>
        </div>

      </div>
    </section>
  );
}

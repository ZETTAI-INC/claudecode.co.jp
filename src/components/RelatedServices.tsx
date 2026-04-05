"use client";

import { useState } from "react";
import Image from "next/image";

const rows = [
  [
    {
      title: "Webサイト・LP制作",
      img: "/img/theme/home/mae-hojyo-image.svg",
      desc: "コーポレートサイトやLPを、デザインからコーディングまで高速に構築。このサイトもClaude Codeで作られています。",
    },
    {
      title: "業務自動化ツール",
      img: "/img/theme/home/super-efficiency-image.svg",
      desc: "日報作成、データ集計、レポート生成など、定型業務を自動化するスクリプトやツールを即座に開発できます。",
    },
  ],
  [
    {
      title: "社内Webアプリ開発",
      img: "/img/theme/home/mag-image.svg",
      desc: "顧客管理、在庫管理、勤怠管理など、必要なWebアプリを外注せずに自社で開発・保守できます。",
    },
    {
      title: "API連携ツール",
      img: "/img/theme/home/super-efficiency-image.svg",
      desc: "Slack、Google Sheets、社内システムなど、複数サービスを繋ぐAPI連携ツールを短時間で構築できます。",
    },
  ],
  [
    {
      title: "データ分析・可視化",
      img: "/img/theme/home/mae-hojyo-image.svg",
      desc: "売上や顧客データを自動で集計・グラフ化。経営判断に役立つダッシュボードを内製できます。",
    },
    {
      title: "チャットボット",
      img: "/img/theme/home/mag-image.svg",
      desc: "社内FAQ対応やカスタマーサポート用のAIチャットボットを、自社の情報に合わせて構築できます。",
    },
  ],
];

export default function RelatedServices() {
  const [showAll, setShowAll] = useState(false);
  const visibleRows = showAll ? rows : rows.slice(0, 1);

  return (
    <div className="my-12">
      <section>
        <div>
          <div className="block-title mb-6">CLAUDE CODEで作れるもの</div>

          <div className="mt-12 related-expand-wrap">
            {visibleRows.map((row, ri) => (
              <div key={ri} className={ri > 0 ? "mt-4" : ""}>
                <div className="flex justify-center professionalService_cardWrapper">
                  {row.map((item, ci) => (
                    <div key={ci} className="flex justify-center">
                      <div className="professionalMaeHojyoContent">
                        <div className="flex flex-col items-center">
                          <div className="my-6">
                            <h3 className="text-xl font-bold text-center">{item.title}</h3>
                          </div>
                          <div>
                            <Image
                              src={item.img}
                              alt={`${item.title}イメージ`}
                              width={400}
                              height={200}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="my-6 mx-6 text-sm">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {!showAll && (
              <div className="related-fade-overlay">
                <button
                  className="related-more__btn"
                  onClick={() => setShowAll(true)}
                >
                  もっと見る
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div>
            <p className="text-center text-xs pt-12">
              「CLAUDE CODE リスキリング研修」は<br className="sp-only" />
              株式会社ZETTAIが運営するサービスです
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

type Plan = {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  tagline: string;
  description: string;
  targets: string[];
  duration: string;
  format: string;
  recommendedPlan: string;
  outline: string[];
};

const plans: Plan[] = [
  {
    number: "01",
    title: "初級編",
    subtitle: "Basics",
    color: "#22c55e",
    tagline: "Claude Code に初めて触れる方へ",
    description:
      "プロンプト設計・ファイル操作・簡単なコード生成まで、AI開発の第一歩を踏み出す入門コース。",
    targets: ["プログラミング未経験者", "ビジネス職", "新入社員"],
    duration: "2週間（1日2〜3時間）",
    format: "Eラーニング / ハイブリッド",
    recommendedPlan: "Eラーニングコース（30万円〜 / 月）",
    outline: [
      "Claude Code のセットアップと基本操作",
      "業務を題材にしたプロンプト設計",
      "ファイル編集・簡易スクリプトの自動生成",
      "修了ワーク: 自部署の小さな業務ツールを1本作る",
    ],
  },
  {
    number: "02",
    title: "上級編",
    subtitle: "Advanced",
    color: "#2563eb",
    tagline: "エンジニアの開発フローに組み込む",
    description:
      "大規模コードベースの把握・リファクタリング・テスト自動化など、Claude Code を実装業務の中心に据えるための上級コース。",
    targets: ["エンジニア", "テックリード", "CTO"],
    duration: "2週間ブートキャンプ + 4週間伴走",
    format: "ハイブリッド / 完全対面",
    recommendedPlan: "ハイブリッドコース（50万円〜 / 月）",
    outline: [
      "既存リポジトリのコンテキスト投入と把握",
      "AI ペアプロでのリファクタリング実演",
      "テスト・レビューフローへの組み込み",
      "修了ワーク: 現行プロダクトへの機能追加PR",
    ],
  },
  {
    number: "03",
    title: "Skills編",
    subtitle: "Skills",
    color: "#f59e0b",
    tagline: "業務特化スキルを短期で身につける",
    description:
      "データ分析・API 連携・ドキュメント自動化など、実務で即戦力になる Claude Code 活用スキルを職種別に習得します。",
    targets: ["PM・ディレクター", "データ分析担当", "マーケター"],
    duration: "1週間集中（カスタムカリキュラム）",
    format: "ハイブリッド",
    recommendedPlan: "ハイブリッドコース（50万円〜 / 月）",
    outline: [
      "職種別ユースケースの棚卸し",
      "業務データを用いた分析・可視化",
      "API / SaaS 連携の自動化",
      "修了ワーク: 自職種の定例業務を1本自動化",
    ],
  },
  {
    number: "04",
    title: "DISPATCH編",
    subtitle: "Dispatch",
    color: "#8b5cf6",
    tagline: "Claude Code 人材を貴社に派遣",
    description:
      "Claude Code を使いこなすエンジニアを貴社プロジェクトに派遣。実プロジェクトに参画しながらチーム全体を底上げします。",
    targets: ["開発チーム", "人材不足の企業", "DX推進部門"],
    duration: "3ヶ月〜（月単位契約）",
    format: "常駐 / リモート併用",
    recommendedPlan: "完全対面コース（120万円〜 / 月）相当",
    outline: [
      "現場プロジェクトへのアサインとオンボーディング",
      "実装タスクの遂行と成果物レビュー",
      "チームメンバーへのOJT・ナレッジ移管",
      "契約満了時の内製化移行プラン策定",
    ],
  },
  {
    number: "05",
    title: "Cowork編",
    subtitle: "Cowork",
    color: "#ec4899",
    tagline: "ペアで実務を回しながら定着させる",
    description:
      "貴社エンジニアと Claude Code 専門家がペアで実務に取り組み、OJT形式でスキルを定着させるコース。",
    targets: ["実務適用したい企業", "内製化を目指すチーム"],
    duration: "2週間 + 4週間伴走",
    format: "完全対面",
    recommendedPlan: "完全対面コース（120万円〜 / 月）",
    outline: [
      "対象業務課題のスコープ確定",
      "ペア実装による課題解決",
      "コードレビューとチームビルディング",
      "修了後1ヶ月の現場フォロー",
    ],
  },
];

export default function CoursesSelector() {
  const [activeNumber, setActiveNumber] = useState(plans[0].number);
  const active = plans.find((p) => p.number === activeNumber) ?? plans[0];

  return (
    <section className="courses-selector">
      <div className="courses-selector__inner">
        <header className="courses-selector__header">
          <p className="courses-selector__lead">
            目的・レベルに合わせて、気になるコースを選んでください。
          </p>
        </header>

        <div
          className="courses-selector__tabs"
          role="tablist"
          aria-label="コース一覧"
        >
          {plans.map((p) => {
            const isActive = p.number === activeNumber;
            return (
              <button
                key={p.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`course-panel-${p.number}`}
                id={`course-tab-${p.number}`}
                onClick={() => setActiveNumber(p.number)}
                className={`courses-selector__tab${
                  isActive ? " is-active" : ""
                }`}
                style={
                  {
                    "--course-color": p.color,
                  } as React.CSSProperties & Record<string, string>
                }
              >
                <span className="courses-selector__tab-number">{p.number}</span>
                <span className="courses-selector__tab-titles">
                  <span className="courses-selector__tab-title">{p.title}</span>
                  <span className="courses-selector__tab-sub">
                    {p.subtitle}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <article
          className="courses-selector__panel"
          role="tabpanel"
          id={`course-panel-${active.number}`}
          aria-labelledby={`course-tab-${active.number}`}
          style={
            {
              "--course-color": active.color,
            } as React.CSSProperties & Record<string, string>
          }
        >
          <div className="courses-selector__panel-head">
            <span className="courses-selector__panel-number">
              {active.number}
            </span>
            <div>
              <h3 className="courses-selector__panel-title">
                {active.title}
                <span className="courses-selector__panel-sub">
                  {active.subtitle}
                </span>
              </h3>
              <p className="courses-selector__panel-tagline">
                {active.tagline}
              </p>
            </div>
          </div>

          <p className="courses-selector__panel-desc">{active.description}</p>

          <dl className="courses-selector__meta">
            <div className="courses-selector__meta-row">
              <dt>対象</dt>
              <dd>
                <span className="courses-selector__tags">
                  {active.targets.map((t) => (
                    <span key={t} className="courses-selector__tag">
                      {t}
                    </span>
                  ))}
                </span>
              </dd>
            </div>
            <div className="courses-selector__meta-row">
              <dt>期間・ボリューム</dt>
              <dd>{active.duration}</dd>
            </div>
            <div className="courses-selector__meta-row">
              <dt>受講形式</dt>
              <dd>{active.format}</dd>
            </div>
            <div className="courses-selector__meta-row">
              <dt>おすすめプラン</dt>
              <dd>{active.recommendedPlan}</dd>
            </div>
          </dl>

          <div className="courses-selector__outline">
            <h4 className="courses-selector__outline-title">カリキュラム概要</h4>
            <ol className="courses-selector__outline-list">
              {active.outline.map((item, i) => (
                <li key={i} className="courses-selector__outline-item">
                  <span className="courses-selector__outline-step">
                    STEP {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="courses-selector__cta">
            <Link href="/consultation/" className="courses-selector__cta-primary">
              このコースで無料相談する
            </Link>
            <Link href="/price/" className="courses-selector__cta-secondary">
              料金プランを見る
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

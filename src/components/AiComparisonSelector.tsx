"use client";

import { useState } from "react";

type Rival = {
  id: string;
  name: string;
  vendor: string;
  color: string;
  initials: string;
  tagline: string;
  positioning: string;
  strengths: string[];
  limits: string[];
  autonomy: string;
  contextWindow: string;
  pricing: string;
  bestFor: string;
};

const claude = {
  name: "Claude Code",
  vendor: "Anthropic",
  color: "#2563eb",
  positioning: "自律的なエージェント型コーディング",
  strengths: [
    "要件ヒアリング〜実装〜デプロイを End-to-End で自走",
    "大規模コンテキスト(1M tokens)で既存リポジトリを丸ごと把握",
    "コマンド実行・ファイル編集・テストまで一貫して実施",
    "業務プロセスそのものを自動化する発想で使える",
  ],
  autonomy: "○ 自律実行(Agentic Coding)",
  contextWindow: "最大 1M tokens(Opus)",
  pricing: "従量+サブスク / Enterprise 対応",
  bestFor: "業務ツール内製化・既存コード改修・AIエージェント導入",
};

const rivals: Rival[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    color: "#10A37F",
    initials: "GPT",
    tagline: "会話起点の汎用AIアシスタント",
    positioning: "会話ベースのタスク支援 / ブレインストーミング",
    strengths: [
      "文章生成・要約・翻訳の汎用性が高い",
      "画像生成・音声対話などマルチモーダルが充実",
      "ビジネス職を含め幅広い層が日常的に利用",
    ],
    limits: [
      "コードベース全体を俯瞰した改修には不向き",
      "実装〜デプロイの自動実行は別ツール連携が前提",
    ],
    autonomy: "△ 単発タスクの補助中心",
    contextWindow: "128K〜200K tokens(モデル依存)",
    pricing: "Plus / Team / Enterprise",
    bestFor: "企画・ライティング・一般業務の壁打ち",
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    color: "#1A73E8",
    initials: "G",
    tagline: "Google ワークスペース連携に強い汎用AI",
    positioning: "Google サービスと一体化した生産性AI",
    strengths: [
      "Gmail / Docs / Sheets との統合が強力",
      "長文ドキュメントの要約・分析が得意",
      "Google の社内データ活用と親和性が高い",
    ],
    limits: [
      "ターミナル連携やリポジトリ単位のコーディング支援は弱い",
      "自律的なマルチステップ実装は不得手",
    ],
    autonomy: "△ 部分的(ワークスペース内)",
    contextWindow: "最大 2M tokens(Gemini 1.5 Pro)",
    pricing: "Google Workspace 連動",
    bestFor: "ドキュメント・データ分析・社内ナレッジ検索",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    vendor: "GitHub / Microsoft",
    color: "#24292E",
    initials: "Co",
    tagline: "IDE 常駐のコード補完アシスタント",
    positioning: "エディタ内での逐次的コード補完",
    strengths: [
      "VS Code 等 IDE に深く統合され補完が速い",
      "関数単位・行単位の提案に強い",
      "エンジニアの個人生産性を底上げする",
    ],
    limits: [
      "業務要件からの実装設計や運用までは担当しない",
      "非エンジニアが単独で業務ツールを作る用途には向かない",
    ],
    autonomy: "△ 補完主体(Chat/Agent は別枠)",
    contextWindow: "開いているファイル中心",
    pricing: "Individual / Business / Enterprise",
    bestFor: "現役エンジニアの日常コーディング高速化",
  },
  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    color: "#000000",
    initials: "Cu",
    tagline: "AI ネイティブな開発エディタ",
    positioning: "AI前提で再設計された IDE",
    strengths: [
      "リポジトリを横断した編集・リファクタが速い",
      "複数モデル切替(Claude/GPT等)で柔軟に使える",
      "エンジニア個人のコーディング効率が大幅に上がる",
    ],
    limits: [
      "エディタ利用が前提で非エンジニアには導線が遠い",
      "研修・伴走といった人材育成面は別途必要",
    ],
    autonomy: "○ エージェントモード搭載",
    contextWindow: "モデル依存",
    pricing: "Pro / Business",
    bestFor: "エンジニアチームの開発速度を底上げ",
  },
];

export default function AiComparisonSelector() {
  const [activeId, setActiveId] = useState(rivals[0].id);
  const rival = rivals.find((r) => r.id === activeId) ?? rivals[0];

  return (
    <section className="ai-compare">
      <div className="ai-compare__inner">
        <header className="ai-compare__header">
          <span className="ai-compare__eyebrow">AI Tool Comparison</span>
          <h2 className="ai-compare__title">
            Claude Code と主要AIサービスを<br className="sp-only" />
            並べて比べる
          </h2>
          <p className="ai-compare__lead">
            比較したい AI サービスを選ぶと、Claude Code との違いを
            <br className="hidden md:block" />
            ポジショニング・得意領域・自律実行の観点で並べて表示します。
          </p>
        </header>

        <div
          className="ai-compare__tabs"
          role="tablist"
          aria-label="比較対象のAI"
        >
          {rivals.map((r) => {
            const isActive = r.id === activeId;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`ai-panel-${r.id}`}
                id={`ai-tab-${r.id}`}
                onClick={() => setActiveId(r.id)}
                className={`ai-compare__tab${isActive ? " is-active" : ""}`}
                style={
                  {
                    "--rival-color": r.color,
                  } as React.CSSProperties & Record<string, string>
                }
              >
                <span className="ai-compare__tab-badge">{r.initials}</span>
                <span className="ai-compare__tab-meta">
                  <span className="ai-compare__tab-name">{r.name}</span>
                  <span className="ai-compare__tab-vendor">{r.vendor}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="ai-compare__panel"
          role="tabpanel"
          id={`ai-panel-${rival.id}`}
          aria-labelledby={`ai-tab-${rival.id}`}
          style={
            {
              "--rival-color": rival.color,
            } as React.CSSProperties & Record<string, string>
          }
        >
          <p className="ai-compare__panel-tagline">{rival.tagline}</p>

          <div className="ai-compare__grid">
            <article className="ai-compare__col ai-compare__col--claude">
              <header className="ai-compare__col-head ai-compare__col-head--claude">
                <span className="ai-compare__col-badge">A</span>
                <div>
                  <h3 className="ai-compare__col-name">{claude.name}</h3>
                  <span className="ai-compare__col-vendor">{claude.vendor}</span>
                </div>
                <span className="ai-compare__recommend">おすすめ</span>
              </header>
              <dl className="ai-compare__spec">
                <div>
                  <dt>ポジショニング</dt>
                  <dd>{claude.positioning}</dd>
                </div>
                <div>
                  <dt>得意領域</dt>
                  <dd>
                    <ul className="ai-compare__list">
                      {claude.strengths.map((s) => (
                        <li key={s}>
                          <span className="ai-compare__check" aria-hidden>
                            ✓
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>自律実行</dt>
                  <dd className="ai-compare__strong">{claude.autonomy}</dd>
                </div>
                <div>
                  <dt>コンテキスト</dt>
                  <dd>{claude.contextWindow}</dd>
                </div>
                <div>
                  <dt>料金感</dt>
                  <dd>{claude.pricing}</dd>
                </div>
                <div>
                  <dt>ベストユース</dt>
                  <dd>{claude.bestFor}</dd>
                </div>
              </dl>
            </article>

            <div className="ai-compare__vs" aria-hidden>
              VS
            </div>

            <article className="ai-compare__col">
              <header className="ai-compare__col-head">
                <span
                  className="ai-compare__col-badge"
                  style={{ background: rival.color }}
                >
                  {rival.initials}
                </span>
                <div>
                  <h3 className="ai-compare__col-name">{rival.name}</h3>
                  <span className="ai-compare__col-vendor">{rival.vendor}</span>
                </div>
              </header>
              <dl className="ai-compare__spec">
                <div>
                  <dt>ポジショニング</dt>
                  <dd>{rival.positioning}</dd>
                </div>
                <div>
                  <dt>得意領域</dt>
                  <dd>
                    <ul className="ai-compare__list">
                      {rival.strengths.map((s) => (
                        <li key={s}>
                          <span
                            className="ai-compare__check ai-compare__check--muted"
                            aria-hidden
                          >
                            ✓
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>苦手・範囲外</dt>
                  <dd>
                    <ul className="ai-compare__list">
                      {rival.limits.map((l) => (
                        <li key={l}>
                          <span
                            className="ai-compare__check ai-compare__check--minus"
                            aria-hidden
                          >
                            ―
                          </span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>自律実行</dt>
                  <dd>{rival.autonomy}</dd>
                </div>
                <div>
                  <dt>コンテキスト</dt>
                  <dd>{rival.contextWindow}</dd>
                </div>
                <div>
                  <dt>料金感</dt>
                  <dd>{rival.pricing}</dd>
                </div>
                <div>
                  <dt>ベストユース</dt>
                  <dd>{rival.bestFor}</dd>
                </div>
              </dl>
            </article>
          </div>

          <p className="ai-compare__note">
            ※ 各社サービスは随時アップデートされています。上記は執筆時点の公開情報に基づく一般的な傾向です。
          </p>
        </div>
      </div>
    </section>
  );
}

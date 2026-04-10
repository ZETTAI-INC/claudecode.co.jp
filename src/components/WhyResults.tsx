"use client";

import Image from "next/image";

const managementCards = [
  {
    title: "カリキュラム",
    lead: "現場で即使える実践型プログラム！",
    text: "「成果に直結する実務シナリオ」をベースに設計しており、座学ではなく実践で習得します。",
    highlight: "受講初日からClaude Codeを使った開発フローを体験できるカリキュラム",
    highlightSuffix: "です。",
    img: "/saleslink/assets/images/img01_management.png",
  },
  {
    title: "評価",
    lead: '感覚ではなく"活用頻度 × 成果物"で判断！',
    text: "受講者の習熟度をすべて定量データで管理しており、主観的・感覚的な評価は行いません。",
    highlight: "データに基づく徹底した進捗管理",
    highlightSuffix: "によって、個人差を最小限に抑えています。",
    img: "/saleslink/assets/images/img02_management.png",
  },
  {
    title: "定着",
    lead: "成果が出るから現場で使い続けられる",
    text: "実務に直結するPDCA体制により、",
    highlight: "研修後すぐに開発スピードが体感できる",
    highlightSuffix:
      "ため、受講者のモチベーションが高まります。成果を実感できる環境があることで、日常業務でのAI活用が自然と定着します。",
    img: "/saleslink/assets/images/img03_management.png",
  },
  {
    title: "再現性",
    lead: "誰が使っても成果が出る状態へ",
    text: "プロジェクトごとのプロンプト設計、成功パターンのテンプレート化の徹底により、個人のスキルに依存せず、再現性の高いAI活用組織を実現しています。",
    highlight: "",
    highlightSuffix: "",
    img: "/saleslink/assets/images/img04_management.png",
  },
];

type Mark = "best" | "full" | "partial" | "none";
type Cell = { mark: Mark; label: string };

const comparisonRows: {
  question: string;
  cc: Cell;
  gpt: Cell;
  gem: Cell;
  cop: Cell;
}[] = [
  {
    question: "Webサイト・LPの生成",
    cc: { mark: "best", label: "一式を自動構築" },
    gpt: { mark: "full", label: "コード生成" },
    gem: { mark: "full", label: "コード生成" },
    cop: { mark: "partial", label: "IDE補完中心" },
  },
  {
    question: "Webアプリ・管理画面の構築",
    cc: { mark: "best", label: "DBまで実装" },
    gpt: { mark: "partial", label: "雛形のみ" },
    gem: { mark: "partial", label: "雛形のみ" },
    cop: { mark: "partial", label: "ファイル単位" },
  },
  {
    question: "スライド・営業資料の作成",
    cc: { mark: "best", label: "PPTX/MARP生成" },
    gpt: { mark: "full", label: "文面生成" },
    gem: { mark: "full", label: "Slides連携" },
    cop: { mark: "none", label: "非対応" },
  },
  {
    question: "画像・図版・アイコンの生成",
    cc: { mark: "full", label: "API連携/SVG" },
    gpt: { mark: "best", label: "DALL-E標準" },
    gem: { mark: "best", label: "Imagen標準" },
    cop: { mark: "none", label: "非対応" },
  },
  {
    question: "業務ツール・社内システムの作成",
    cc: { mark: "best", label: "実行・配布まで" },
    gpt: { mark: "full", label: "コード生成" },
    gem: { mark: "full", label: "コード生成" },
    cop: { mark: "partial", label: "IDE補完中心" },
  },
  {
    question: "データ分析・レポート生成",
    cc: { mark: "best", label: "実データを処理" },
    gpt: { mark: "full", label: "Code Interpreter" },
    gem: { mark: "full", label: "コード実行可" },
    cop: { mark: "none", label: "非対応" },
  },
  {
    question: "API連携・バッチ処理の自動化",
    cc: { mark: "best", label: "cron/CI連携" },
    gpt: { mark: "none", label: "ローカル不可" },
    gem: { mark: "none", label: "ローカル不可" },
    cop: { mark: "none", label: "非対応" },
  },
  {
    question: "モバイルアプリの試作",
    cc: { mark: "best", label: "ビルドまで" },
    gpt: { mark: "partial", label: "コード提案" },
    gem: { mark: "partial", label: "コード提案" },
    cop: { mark: "partial", label: "補完のみ" },
  },
  {
    question: "技術ドキュメント・READMEの作成",
    cc: { mark: "best", label: "コードから自動生成" },
    gpt: { mark: "full", label: "テキスト生成" },
    gem: { mark: "full", label: "テキスト生成" },
    cop: { mark: "full", label: "コメント補完" },
  },
  {
    question: "既存システムの改修・機能追加",
    cc: { mark: "best", label: "プロジェクト横断" },
    gpt: { mark: "partial", label: "貼付範囲のみ" },
    gem: { mark: "partial", label: "貼付範囲のみ" },
    cop: { mark: "full", label: "@workspace対応" },
  },
];

const markLabel: Record<Mark, string> = {
  best: "最適",
  full: "対応",
  partial: "一部対応",
  none: "非対応",
};

function Mark({ mark }: { mark: Mark }) {
  return (
    <span
      className={`wr-compare__mark wr-compare__mark--${mark}`}
      role="img"
      aria-label={markLabel[mark]}
    >
      {mark === "best" && (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="10" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )}
      {mark === "full" && (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )}
      {mark === "partial" && (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M10 3 L17.5 16.5 L2.5 16.5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {mark === "none" && (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M5 5 L15 15 M15 5 L5 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

function ScoreCell({ cell, highlighted = false }: { cell: Cell; highlighted?: boolean }) {
  return (
    <div
      className={`wr-compare__matrix-cell wr-compare__matrix-cell--score${
        highlighted ? " wr-compare__matrix-cell--cc" : ""
      }`}
      role="cell"
    >
      <Mark mark={cell.mark} />
      <span className="wr-compare__matrix-caption">{cell.label}</span>
    </div>
  );
}

export default function WhyResults() {
  return (
    <>
      {/* ===== なぜ結果を出せるのか ===== */}
      <section className="wr-reason">
        <div className="wr-reason__inner">
          <div className="wr-reason__text">
            <h2 className="wr-reason__title">
              Claude Code研修はなぜ結果を出せるのか？
            </h2>
            <p className="wr-reason__lead">
              受講者の
              <br />
              <span className="wr-accent">開発生産性を最大10倍</span>
              に引き上げます！
            </p>
            <p className="wr-reason__desc">
              どれだけ優れたAIツールがあっても、
              <br />
              それを使いこなす&quot;人&quot;がいなければ成果は生まれません。
            </p>
            <p className="wr-reason__desc">
              私たちの研修では、&quot;人&quot;の習熟度に徹底してこだわることで、AI導入にありがちな
              <br />
              <span className="wr-accent">
                「担当者によって活用レベルがバラつく」という問題を根本から解消
              </span>
              しています。
            </p>
          </div>
          <div className="wr-reason__bottom">
            <p>
              <span className="wr-accent">受講者全員が即戦力</span>
              としてClaude Codeを使いこなせるため、
              <br />
              確実に開発生産性が向上します。
            </p>
          </div>
        </div>
        <div className="wr-reason__img">
          <Image
            src="/saleslink/assets/images/img_reason.png"
            alt=""
            width={520}
            height={502}
          />
        </div>
      </section>

      {/* ===== 研修設計へのこだわり ===== */}
      <section className="wr-mgmt">
        <div className="wr-mgmt__inner">
          <div className="wr-section-header">
            <span className="wr-section-header__en">MANAGEMENT</span>
            <h2 className="wr-section-header__title">研修設計へのこだわり</h2>
          </div>
          <p className="wr-mgmt__lead">
            受講者の成長にとことんこだわっている私たちが
            <br />
            どのように研修を設計・運用しているのかをご紹介します。
          </p>

          <div className="wr-mgmt__list">
            {managementCards.map((c, i) => (
              <article key={c.title} className="wr-mgmt__row">
                <div className="wr-mgmt__photo">
                  <span className="wr-mgmt__bignum" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="wr-mgmt__photo-frame">
                    <Image
                      src={c.img}
                      alt=""
                      width={520}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <span className="wr-mgmt__photo-caption">{c.title}</span>
                  </div>
                </div>
                <div className="wr-mgmt__content">
                  <span className="wr-mgmt__label">
                    <span className="wr-mgmt__label-en">
                      CHAPTER {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="wr-mgmt__label-jp">{c.title}</span>
                  </span>
                  <h3 className="wr-mgmt__row-title">{c.lead}</h3>
                  <p className="wr-mgmt__row-text">
                    {c.text}
                    {c.highlight && (
                      <>
                        <mark className="wr-mgmt__marker">{c.highlight}</mark>
                        {c.highlightSuffix}
                      </>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 研修後も成果が持続する理由 */}
        <div className="wr-persist">
          <div className="wr-persist__inner">
            <div className="wr-persist__text">
              <h3 className="wr-persist__title">研修後も成果が持続する理由</h3>
              <p className="wr-persist__desc">
                受講者が実際に書いたプロンプトと生成結果をすべて記録・分析し、
                最適な活用パターンが身についているかまで細かくチェックします。
              </p>
              <p className="wr-persist__desc">
                受講者の共通認識として必ず持たせているのは、
                <br />
                <span className="wr-accent">
                  「AIは使うだけでなく、使いこなして初めて価値になる。」
                </span>
                ということです。
                <br />
                ツールを導入しただけでは生産性は上がらず、正しい活用法の習得が不可欠だと考えています。
              </p>
              <p className="wr-persist__lead">
                現場で即成果が出る実践力を、
                <br />
                <span className="wr-accent">確実に身につけられる研修</span>
                をお届けします。
              </p>
            </div>
            <div className="wr-persist__img">
              <Image
                src="/saleslink/assets/images/img_reason02.png"
                alt=""
                width={460}
                height={380}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 業務に生きるAIはどれか？ ===== */}
      <section className="wr-compare">
        <div className="wr-compare__inner">
          <div className="wr-compare__header">
            <span className="wr-compare__eyebrow">COMPARISON</span>
            <h2 className="wr-compare__title">
              Claude Codeで、何が作れるのか。
            </h2>
            <p className="wr-compare__subtitle">
              Web制作・スライド資料・画像生成・業務ツール――
              <br />
              実務に直結する10のアウトプットを、主要AI4サービスで比較しました。
            </p>
          </div>

          <div className="wr-compare__matrix" role="table" aria-label="Claude Code・ChatGPT・Gemini・Copilot比較表">
            <div className="wr-compare__matrix-head" role="row">
              <div className="wr-compare__matrix-cell wr-compare__matrix-cell--label" role="columnheader">
                <span className="wr-compare__matrix-head-eyebrow">DELIVERABLES</span>
                <span className="wr-compare__matrix-head-label">何が作れるか</span>
              </div>
              <div className="wr-compare__matrix-cell wr-compare__matrix-cell--cc-head" role="columnheader">
                <span className="wr-compare__matrix-badge">RECOMMENDED</span>
                <span className="wr-compare__matrix-col-name">Claude Code</span>
                <span className="wr-compare__matrix-col-tag">エージェント型</span>
              </div>
              <div className="wr-compare__matrix-cell wr-compare__matrix-cell--ai" role="columnheader">
                <span className="wr-compare__matrix-col-name">ChatGPT</span>
                <span className="wr-compare__matrix-col-tag">対話型</span>
              </div>
              <div className="wr-compare__matrix-cell wr-compare__matrix-cell--ai" role="columnheader">
                <span className="wr-compare__matrix-col-name">Gemini</span>
                <span className="wr-compare__matrix-col-tag">対話型</span>
              </div>
              <div className="wr-compare__matrix-cell wr-compare__matrix-cell--ai" role="columnheader">
                <span className="wr-compare__matrix-col-name">Copilot</span>
                <span className="wr-compare__matrix-col-tag">IDE補完</span>
              </div>
            </div>

            {comparisonRows.map((r, i) => (
              <div className="wr-compare__matrix-row" role="row" key={i}>
                <div className="wr-compare__matrix-cell wr-compare__matrix-cell--label" role="rowheader">
                  <span className="wr-compare__matrix-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="wr-compare__matrix-question">{r.question}</h3>
                </div>
                <ScoreCell cell={r.cc} highlighted />
                <ScoreCell cell={r.gpt} />
                <ScoreCell cell={r.gem} />
                <ScoreCell cell={r.cop} />
              </div>
            ))}
          </div>

          <ul className="wr-compare__matrix-legend" aria-label="凡例">
            <li>
              <Mark mark="best" />
              <span>最適</span>
            </li>
            <li>
              <Mark mark="full" />
              <span>対応</span>
            </li>
            <li>
              <Mark mark="partial" />
              <span>一部対応</span>
            </li>
            <li>
              <Mark mark="none" />
              <span>非対応</span>
            </li>
          </ul>

          <div className="wr-compare__closing">
            <p className="wr-compare__closing-text">
              質問に答えるだけのAIではなく、
              <span className="wr-compare__closing-mark">
                一緒に開発するAI
              </span>
              を。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 支援実績 ===== */}
      <section className="wr-cases-v2">
        <div className="wr-cases-v2__inner">
          <div className="wr-cases-v2__header">
            <span className="wr-cases-v2__eyebrow">CASES</span>
            <h2 className="wr-cases-v2__title">支援実績</h2>
            <p className="wr-cases-v2__subtitle">
              成果が出た手法だけを厳選。自社グループ事業での活用実績から、再現性のあるノウハウをお届けします。
            </p>
          </div>

          <div className="wr-cases-v2__list">
            <article className="wr-cases-v2__row">
              <div
                className="wr-cases-v2__row-image"
                role="img"
                aria-label="株式会社alterの導入事例 画像プレースホルダー"
              >
                <span>IMG</span>
              </div>
              <div className="wr-cases-v2__row-body">
                <div className="wr-cases-v2__row-meta">
                  <span className="wr-cases-v2__row-num">01</span>
                  <span className="wr-cases-v2__row-tag">自社グループ</span>
                  <h3 className="wr-cases-v2__row-name">株式会社alter</h3>
                </div>
                <p className="wr-cases-v2__row-result">
                  Claude Code導入わずか半年で、開発生産性が大幅に向上。
                </p>
                <ul className="wr-cases-v2__row-list">
                  <li>エンジニア全員がClaude Codeを日常業務で活用</li>
                  <li>コーディング工数を大幅削減し、企画・設計に集中</li>
                  <li>コードレビュー品質が向上し、バグ発生率が低下</li>
                  <li>新規プロジェクトの立ち上げスピードが向上</li>
                </ul>
              </div>
            </article>

            <article className="wr-cases-v2__row">
              <div
                className="wr-cases-v2__row-image"
                role="img"
                aria-label="株式会社アシスト様の導入事例 画像プレースホルダー"
              >
                <span>IMG</span>
              </div>
              <div className="wr-cases-v2__row-body">
                <div className="wr-cases-v2__row-meta">
                  <span className="wr-cases-v2__row-num">02</span>
                  <h3 className="wr-cases-v2__row-name">株式会社アシスト様</h3>
                </div>
                <p className="wr-cases-v2__row-result">
                  AI活用レベルが安定し、組織の属人化が解消。
                </p>
                <ul className="wr-cases-v2__row-list">
                  <li>全員がトップエンジニアと同水準のAI活用力を獲得</li>
                  <li>社内で安定したAI活用開発が完結する状態を実現</li>
                  <li>組織の属人化が解消し、開発品質の安定化に成功</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

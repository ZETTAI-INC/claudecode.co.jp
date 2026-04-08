"use client";

import { useState } from "react";
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

const comparisonRows = [
  { item: "コードベース全体の理解", cc: "〇", gpt: "△", gem: "△" },
  { item: "ターミナルから直接操作", cc: "〇", gpt: "×", gem: "×" },
  { item: "既存プロジェクトへの即適用", cc: "〇", gpt: "△", gem: "△" },
  { item: "ファイル横断の一括編集", cc: "〇", gpt: "×", gem: "×" },
  { item: "Git操作・PR作成の自動化", cc: "〇", gpt: "×", gem: "×" },
  { item: "テスト作成・実行の一気通貫", cc: "〇", gpt: "△", gem: "△" },
  { item: "大規模リファクタリング対応", cc: "〇", gpt: "×", gem: "×" },
  { item: "セキュリティ・コード品質の担保", cc: "〇", gpt: "△", gem: "△" },
  { item: "チーム開発ワークフローとの統合", cc: "〇", gpt: "×", gem: "×" },
  { item: "エンジニアの生産性向上実績", cc: "〇", gpt: "△", gem: "△" },
];

export default function WhyResults() {
  const [openCase, setOpenCase] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenCase((prev) => (prev === idx ? null : idx));

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

          <div className="wr-mgmt__grid">
            {managementCards.map((c, i) => (
              <div key={c.title} className="wr-mgmt__card">
                <div className="wr-mgmt__card-img">
                  <Image src={c.img} alt="" width={400} height={260} />
                </div>
                <div className="wr-mgmt__card-body">
                  <span className="wr-mgmt__card-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="wr-mgmt__card-title">{c.title}</h3>
                  <p className="wr-mgmt__card-lead">{c.lead}</p>
                  <p className="wr-mgmt__card-text">
                    {c.text}
                    {c.highlight && (
                      <>
                        <span className="wr-accent">{c.highlight}</span>
                        {c.highlightSuffix}
                      </>
                    )}
                  </p>
                </div>
              </div>
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
          <div className="wr-section-header">
            <h2 className="wr-section-header__title">
              業務に生きるAIはどれか？
            </h2>
          </div>

          <div className="wr-compare__table-wrap">
            <table className="wr-compare__table">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <td className="wr-compare__col-cc">
                    Claude
                    <br className="sp-only" />
                    Code
                  </td>
                  <td>
                    Chat
                    <br className="sp-only" />
                    GPT
                  </td>
                  <td>Gemini</td>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.item}>
                    <th>{r.item}</th>
                    <td className="wr-compare__col-cc">{r.cc}</td>
                    <td>{r.gpt}</td>
                    <td>{r.gem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="wr-compare__text">
            <p>
              ChatGPTやGeminiは「質問に答えるAI」。
              <br />
              Claude Codeは
              <span className="wr-accent">「一緒に開発するAI」</span>です。
            </p>
            <p>
              チャット画面にコードを貼り付けて回答を待つのではなく、
              <br />
              プロジェクトの中に入り込み、コードを読み、書き、テストし、コミットする。
            </p>
            <p>
              だからこそ、実務の現場で圧倒的な生産性の差が生まれます。
              <br />
              私たちの研修では、この
              <span className="wr-accent">&quot;実務直結のAI開発体験&quot;</span>
              を
              <br />
              すべてのエンジニアが再現できる状態まで引き上げます。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 支援実績 ===== */}
      <section className="wr-cases">
        <div className="wr-cases__inner">
          <div className="wr-section-header">
            <span className="wr-section-header__en">CASES</span>
            <h2 className="wr-section-header__title">支援実績</h2>
          </div>
          <p className="wr-cases__lead">
            &quot;成果が出た手法だけを厳選し提供できる&quot;のが私たちの研修です。
            <br />
            自社グループ事業での活用実績からも、再現性のあるノウハウ蓄積と、確かな成果をお届けすることができます。
          </p>

          {/* Case 1: alter */}
          <div className="wr-case-card">
            <h3 className="wr-case-card__title">
              <span className="wr-case-card__label">自社グループ</span>
              株式会社alter
            </h3>
            <div className="wr-case-card__body">
              <div className="wr-case-card__top">
                <div className="wr-case-card__img">
                  <Image
                    src="/saleslink/assets/images/img01_cases.png"
                    alt=""
                    width={320}
                    height={200}
                  />
                </div>
                <div className="wr-case-card__summary">
                  <h4 className="wr-case-card__result-title">導入後の成果</h4>
                  <p className="wr-case-card__result-lead">
                    Claude Code導入わずか半年で、開発生産性が大幅に向上
                  </p>
                  <ul className="wr-check-list">
                    <li>
                      エンジニア全員がClaude
                      Codeを日常業務で活用する体制を構築
                    </li>
                    <li>
                      コーディング工数を大幅に削減し、企画・設計に集中できる体制へ
                    </li>
                    <li>コードレビュー品質が向上し、バグ発生率が低下</li>
                    <li>新規プロジェクトの立ち上げスピードが飛躍的に向上</li>
                  </ul>
                </div>
              </div>

              <button
                className="wr-case-card__toggle"
                onClick={() => toggle(0)}
              >
                {openCase === 0 ? "閉じる" : "続きを見る"}
              </button>

              {openCase === 0 && (
                <div className="wr-case-card__detail">
                  <div className="wr-case-detail-grid">
                    <div className="wr-case-detail-box">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico01_cases.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                        取り組み内容
                      </h5>
                      <p>
                        <strong>対象</strong> ： 開発チーム全体
                        <br />
                        <strong>研修期間</strong> ： 3ヶ月間
                        <br />
                        <strong>ターゲット</strong> ： エンジニア組織
                        <br />
                        <strong>手法</strong> ： ハンズオン ×
                        実務プロジェクト適用
                      </p>
                    </div>
                    <div className="wr-case-detail-box">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico02_cases.svg"
                          alt=""
                          width={21}
                          height={21}
                        />
                        導入前の課題
                      </h5>
                      <p>
                        エンジニアが手作業で開発を行っており、下記の課題がありました。
                      </p>
                      <ul className="wr-check-list">
                        <li>
                          AIツールの導入が進まず生産性が頭打ちだった
                        </li>
                        <li>設計やレビューに十分な時間を割けない</li>
                      </ul>
                    </div>
                    <div className="wr-case-detail-box">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico03_cases.svg"
                          alt=""
                          width={21}
                          height={21}
                        />
                        支援内容
                      </h5>
                      <p>
                        Claude Codeの導入から定着までを一貫して支援しました。
                        <br />
                        開発現場ごとに異なる技術スタックに合わせたカリキュラムを設計。
                        <br />
                        プロンプト設計、コードレビュー活用、テスト自動化に注力しました。
                      </p>
                    </div>
                    <div className="wr-case-detail-box wr-case-detail-box--highlight">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico04_cases.svg"
                          alt=""
                          width={21}
                          height={21}
                        />
                        数字で見る、圧倒的な成果
                      </h5>
                      <div className="wr-case-numbers">
                        <div className="wr-case-numbers__item">
                          <dt>受講者数</dt>
                          <dd>全員定着</dd>
                        </div>
                        <div className="wr-case-numbers__item">
                          <dt>生産性向上</dt>
                          <dd>最大10倍</dd>
                        </div>
                        <div className="wr-case-numbers__item wr-case-numbers__item--wide">
                          <dt>研修後の活用継続率</dt>
                          <dd>95%以上</dd>
                        </div>
                      </div>
                      <div className="wr-case-point">
                        <div className="wr-case-point__img">
                          <Image
                            src="/saleslink/assets/images/img_point.jpg"
                            alt=""
                            width={200}
                            height={140}
                          />
                        </div>
                        <p>
                          業界水準を大きく上回る数値。
                          <br />
                          <span className="wr-accent">
                            大規模組織 × 多様な技術スタック
                          </span>
                          という
                          <br />
                          難易度の高い条件下でも、この成果を実現
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="wr-case-arrow">▼</div>

                  <div className="wr-case-strength">
                    <p className="wr-case-strength__lead">
                      難易度の高い組織にこそ、弊社の強みで差が出ます！
                    </p>
                    <div className="wr-case-strength__flex">
                      <p>
                        技術スタックが多様で複雑な組織ほどAI活用の定着が難しいからこそ、実務特化のカリキュラム設計が成果を左右します。
                      </p>
                      <ul className="wr-check-list">
                        <li>
                          【カリキュラム設計】
                          現場の技術に最適化したプログラム
                        </li>
                        <li>
                          【課題ヒアリング】
                          チームごとの課題に合わせた個別対応
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="wr-case-detail-box wr-case-detail-box--full">
                    <h5 className="wr-case-detail-box__title">
                      <Image
                        src="/saleslink/assets/images/ico05_cases.svg"
                        alt=""
                        width={23}
                        height={23}
                      />
                      支援結果へのコメント
                    </h5>
                    <p>
                      研修から成果が出るまでのスピードがとにかく速くて驚いています。
                      <br />
                      エンジニア全員のAI活用レベルが安定し、社内でも&quot;受けて正解だった&quot;という声が多く上がっています。
                      <br />
                      今後も継続的にお願いしたいです。
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Case 2: アシスト */}
          <div className="wr-case-card">
            <h3 className="wr-case-card__title">株式会社アシスト様</h3>
            <div className="wr-case-card__body">
              <div className="wr-case-card__top">
                <div className="wr-case-card__img">
                  <Image
                    src="/saleslink/assets/images/img02_cases.png"
                    alt=""
                    width={320}
                    height={200}
                  />
                </div>
                <div className="wr-case-card__summary">
                  <h4 className="wr-case-card__result-title">導入後の成果</h4>
                  <p className="wr-case-card__result-lead">
                    AI活用レベルが安定し、組織の属人化が解消。
                  </p>
                  <ul className="wr-check-list">
                    <li>
                      研修支援により全員がトップエンジニアと同水準のAI活用力を獲得
                    </li>
                    <li>
                      社内で安定したAI活用開発が完結する状態を実現
                    </li>
                    <li>
                      組織の属人化が解消し、開発品質の安定化に成功
                    </li>
                  </ul>
                </div>
              </div>

              <button
                className="wr-case-card__toggle wr-case-card__toggle--alt"
                onClick={() => toggle(1)}
              >
                {openCase === 1 ? "閉じる" : "続きを見る"}
              </button>

              {openCase === 1 && (
                <div className="wr-case-card__detail">
                  <div className="wr-case-detail-grid">
                    <div className="wr-case-detail-box">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico02_cases.svg"
                          alt=""
                          width={21}
                          height={21}
                        />
                        導入前の課題
                      </h5>
                      <p>
                        社内にAI活用を推進するメンバーはいるが、活用レベルが安定しておらず、属人化が強いため、組織としての再現性が実現できていない。
                      </p>
                    </div>
                    <div className="wr-case-detail-box">
                      <h5 className="wr-case-detail-box__title">
                        <Image
                          src="/saleslink/assets/images/ico03_cases.svg"
                          alt=""
                          width={21}
                          height={21}
                        />
                        支援内容
                      </h5>
                      <p>
                        全員が安定してClaude
                        Codeを活用できるよう勝ちパターンの分析・蓄積を実施。
                        <br />
                        再現性構築によって完全内製化を支援。
                      </p>
                    </div>
                  </div>
                  <div className="wr-case-detail-box wr-case-detail-box--full">
                    <h5 className="wr-case-detail-box__title">
                      <Image
                        src="/saleslink/assets/images/ico05_cases.svg"
                        alt=""
                        width={23}
                        height={23}
                      />
                      支援結果へのコメント
                    </h5>
                    <p>
                      成果が出ている人と出ていない人の差を言語化・仕組み化していただいたことでAI活用率・開発生産性ともに劇的に改善することができました。まさに組織のボトルネックを解消してもらったと感じています！
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 成果を出せる秘訣 */}
        <div className="wr-secret">
          <div className="wr-secret__inner">
            <h3 className="wr-secret__title">
              <span>成果を出せる秘訣</span>
            </h3>
            <ul className="wr-secret__list">
              <li>誰が受けても一定の成果が出る設計</li>
              <li>実務に直結した実践型カリキュラム</li>
              <li>数字をもとに改善を繰り返す運用</li>
            </ul>
            <p className="wr-secret__text">
              現場で成果を出すための研修設計を行っています。
              <br />
              実践演習と習熟度管理の徹底で、確実にAI活用力を定着。
            </p>
            <p className="wr-secret__text2">
              感覚ではなく、数字で改善することで
              <span className="wr-underline">成果が出るAI活用の仕組み</span>
              を構築しています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

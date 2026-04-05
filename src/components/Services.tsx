import Link from "next/link";

interface CourseProps {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  targets: string[];
  href: string;
}

const courses: CourseProps[] = [
  {
    number: "01",
    title: "初級編",
    subtitle: "Basics",
    color: "#22c55e",
    description:
      "Claude Codeの基本操作から学ぶ入門コース。プロンプトの書き方、ファイル操作、簡単なコード生成まで、AI開発の第一歩を踏み出します。",
    targets: ["プログラミング未経験者", "ビジネス職", "新入社員"],
    href: "/course/basics/",
  },
  {
    number: "02",
    title: "上級編",
    subtitle: "Advanced",
    color: "#2563eb",
    description:
      "実践的な開発フローにClaude Codeを組み込む上級コース。大規模コードベースの理解、リファクタリング、テスト自動化など高度なスキルを習得します。",
    targets: ["エンジニア", "テックリード", "CTO"],
    href: "/course/advanced/",
  },
  {
    number: "03",
    title: "Skills編",
    subtitle: "Skills",
    color: "#f59e0b",
    description:
      "業務特化型のスキル習得コース。データ分析、API開発、ドキュメント生成など、実務で即活用できるClaude Codeの専門スキルを短期集中で学びます。",
    targets: ["PM・ディレクター", "データ分析担当", "マーケター"],
    href: "/course/skills/",
  },
  {
    number: "04",
    title: "DISPATCH編",
    subtitle: "Dispatch",
    color: "#8b5cf6",
    description:
      "Claude Codeを使いこなせる人材を貴社に派遣。実際のプロジェクトにAIエンジニアが参画し、チーム全体のスキル底上げを実現します。",
    targets: ["開発チーム", "人材不足の企業", "DX推進部門"],
    href: "/course/dispatch/",
  },
  {
    number: "05",
    title: "Cowork編",
    subtitle: "Cowork",
    color: "#ec4899",
    description:
      "貴社のエンジニアとClaude Code専門家がペアで実務に取り組むコース。実際の業務課題を解決しながら、OJT形式でスキルを定着させます。",
    targets: ["実務適用したい企業", "内製化を目指すチーム"],
    href: "/course/cowork/",
  },
];


export default function Services() {
  return (
    <section className="section-services" id="contentServices">
      <div>
        <div className="flex justify-center contentServices_whoFor_title">
          CLAUDE CODE リスキリング研修は、<br className="sp-only" />
          あらゆる職種・レベルに対応した
        </div>
        <div className="flex justify-center contentServices_title">
          実践型AI開発スキル<br className="sp-only" />
          研修サービスです。
        </div>
      </div>

      {/* 01: 研修コース */}
      <div id="supportSubsidyApplications">
        <div className="supportSubsidyApplications_title">
          <span className="mr-3 supportSubsidyApplications_titleNumber">01</span>
          <span className="supportSubsidyApplications_titleText">研修コースから探す</span>
        </div>

        <div id="supportSubsidyApplications_content" className="pt-20">
          <div className="text-center mb-10">
            <span className="supportSubsidyApplications_description">
              目的・レベルに合わせて<br className="sp-only" />
              最適なコースを<br className="sp-only" />
              お選びいただけます。
            </span>
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <Link href={course.href} key={course.number} className="course-row" style={{ "--course-color": course.color } as React.CSSProperties}>
                <div className="course-row__left">
                  <span className="course-row__number">{course.number}</span>
                  <div className="course-row__bar" />
                  <div className="course-row__titles">
                    <h3 className="course-row__title">{course.title}</h3>
                    <span className="course-row__sub">{course.subtitle}</span>
                  </div>
                </div>
                <p className="course-row__desc">{course.description}</p>
                <div className="course-row__right">
                  <div className="course-row__tags">
                    {course.targets.map((t) => (
                      <span key={t} className="course-row__tag">{t}</span>
                    ))}
                  </div>
                  <span className="course-row__arrow">
                    <span className="material-icons-outlined">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 02: 使えるモデル */}
      <div id="applySubsidy">
        <div className="applySubsidy_title">
          <span className="mr-3 applySubsidy_titleNumber">02</span>
          <span className="applySubsidy_titleText">Claude Codeで使えるモデル</span>
        </div>

        <div id="applySubsidy_content" className="pt-20">
          <div className="text-center mb-5">
            <span className="applySubsidy_description">
              用途に応じて3つのモデルを<br className="sp-only" />
              使い分けることで、<br />
              コストと性能を<br className="sp-only" />
              最適化できます。
            </span>

            {/* ベンチマーク実績数字 */}
            <div className="models__achievement">
              <div className="models__achievement-inner">
                <div className="models__achievement-stat">
                  <span className="models__achievement-label">コーディング<br />ベンチマーク</span>
                  <span className="models__achievement-num">72.0</span>
                  <span className="models__achievement-unit">％</span>
                </div>
                <div className="models__achievement-divider" />
                <div className="models__achievement-stat">
                  <span className="models__achievement-label">Terminal-bench<br />2位との差</span>
                  <span className="models__achievement-num">+21</span>
                  <span className="models__achievement-unit">pt</span>
                </div>
                <div className="models__achievement-divider" />
                <div className="models__achievement-stat">
                  <span className="models__achievement-label">Agentic<br />Coding</span>
                  <span className="models__achievement-num">No.1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="models-table-wrap">
            <table className="models-table">
              <thead>
                <tr>
                  <th className="models-table__corner" />
                  <th className="models-table__th models-table__th--opus">
                    <span className="models-table__th-name">Opus 4</span>
                    <span className="models-table__th-sub">困ったらこれ</span>
                  </th>
                  <th className="models-table__th models-table__th--sonnet">
                    <span className="models-table__th-name">Sonnet 4</span>
                    <span className="models-table__th-sub">迷ったらこれ</span>
                  </th>
                  <th className="models-table__th models-table__th--haiku">
                    <span className="models-table__th-name">Haiku 4.5</span>
                    <span className="models-table__th-sub">速さ重視ならこれ</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="models-table__label">得意なこと</td>
                  <td>設計判断<br />大規模改修</td>
                  <td>日常開発<br />レビュー・テスト</td>
                  <td>コード補完<br />簡単な修正</td>
                </tr>
                <tr>
                  <td className="models-table__label">コンテキスト</td>
                  <td><strong className="models-table__em">1M</strong> tokens</td>
                  <td>200K tokens</td>
                  <td>200K tokens</td>
                </tr>
                <tr>
                  <td className="models-table__label">拡張思考</td>
                  <td><span className="models-table__circle">○</span></td>
                  <td><span className="models-table__circle">○</span></td>
                  <td><span className="models-table__dash">—</span></td>
                </tr>
                <tr>
                  <td className="models-table__label">速度</td>
                  <td>じっくり</td>
                  <td>ちょうどいい</td>
                  <td><strong>最速</strong></td>
                </tr>
                <tr>
                  <td className="models-table__label">コスト</td>
                  <td>高め</td>
                  <td>ちょうどいい</td>
                  <td><strong>最安</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

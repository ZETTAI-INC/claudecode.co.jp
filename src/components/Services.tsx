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
      "Claude Codeを使いこなせる人材を貴社に派遣。研修だけでなく、実際のプロジェクトにAIエンジニアが参画し、チーム全体のスキル底上げを実現します。",
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
      <div className="course-header">
        <h2 className="course-header__title">
          研修コースから探す
        </h2>
        <p className="course-header__desc">
          目的・レベルに合わせて最適なコースをお選びいただけます
        </p>
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
    </section>
  );
}

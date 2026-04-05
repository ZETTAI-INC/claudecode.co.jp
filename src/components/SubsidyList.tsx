import Link from "next/link";

interface CourseItem {
  name: string;
  description: string;
  href: string;
}

const courses: CourseItem[] = [
  {
    name: "Claude Code入門講座",
    description: "AIコーディングツールを初めて使う方向け",
    href: "/courses/introduction/",
  },
  {
    name: "プロンプトエンジニアリング実践",
    description: "効果的なAI指示出しスキルを身につけたい方向け",
    href: "/courses/prompt-engineering/",
  },
  {
    name: "AIペアプログラミング研修",
    description: "開発チームの生産性を向上させたい方向け",
    href: "/courses/pair-programming/",
  },
  {
    name: "AI駆動テスト自動化講座",
    description: "テスト工程のAI活用を検討中の方向け",
    href: "/courses/test-automation/",
  },
  {
    name: "レガシーコード改善AI活用講座",
    description: "既存システムの保守・改修を効率化したい方向け",
    href: "/courses/legacy-code/",
  },
  {
    name: "AIセキュリティ研修",
    description: "AIツール導入時のセキュリティ対策を学びたい方向け",
    href: "/courses/ai-security/",
  },
  {
    name: "マネジメント向けAIリテラシー研修",
    description: "経営層・管理職のAI理解を深めたい方向け",
    href: "/courses/management/",
  },
  {
    name: "AI活用DX推進リーダー育成講座",
    description: "社内のAI推進リーダーを育成したい方向け",
    href: "/courses/dx-leader/",
  },
  {
    name: "カスタム研修プログラム",
    description: "自社の課題に合わせた研修をご希望の方向け",
    href: "/contact/",
  },
  {
    name: "1on1 AIコーチング",
    description: "個別指導で集中的にスキルアップしたい方向け",
    href: "/courses/coaching/",
  },
];

export default function SubsidyList() {
  return (
    <section id="subsidySearch" className="section-subsidy">
      <div>
        <div className="block-title mb-6">研修コースから探す</div>
        <ul className="contentSubsidy_list">
          {courses.map((item) => (
            <li key={item.name}>
              <div className="subsidy-item">
                <Link
                  href={item.href}
                  className="p-btn--default p-button p-button--chevron-right"
                  style={{ background: "#fff" }}
                >
                  {item.name}
                </Link>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

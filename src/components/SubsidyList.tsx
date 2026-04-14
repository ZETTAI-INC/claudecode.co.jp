import Link from "next/link";

interface CourseItem {
  name: string;
  description: string;
  href: string;
}

const courses: CourseItem[] = [
  {
    name: "Excel台帳のWeb化",
    description: "属人化した管理台帳をチーム全員で使えるWebアプリに",
    href: "/case/#works",
  },
  {
    name: "日報・週報の自動集計",
    description: "手入力の報告書を自動集計＋ダッシュボード化",
    href: "/case/#works",
  },
  {
    name: "承認フローのアプリ化",
    description: "紙・メールの承認プロセスをワンクリック化",
    href: "/case/#works",
  },
  {
    name: "顧客ステータス管理",
    description: "スプレッドシートの顧客管理を対応漏れゼロのアプリに",
    href: "/case/#works",
  },
  {
    name: "在庫・発注管理ツール",
    description: "目視チェックの在庫管理をリアルタイム可視化",
    href: "/case/#works",
  },
  {
    name: "社内FAQ・ナレッジ検索",
    description: "散在するノウハウを検索できるツールに集約",
    href: "/case/#works",
  },
  {
    name: "営業実績ダッシュボード",
    description: "月次報告のための手集計をリアルタイム可視化",
    href: "/case/#works",
  },
  {
    name: "勤怠・シフト管理アプリ",
    description: "Excel管理のシフト表をチーム共有のWebアプリに",
    href: "/case/#works",
  },
  {
    name: "問い合わせ対応の自動振り分け",
    description: "受信した問い合わせを担当者へ自動ルーティング",
    href: "/case/#works",
  },
  {
    name: "データ分析・レポート自動生成",
    description: "散在するデータを1画面で可視化＋定期レポート",
    href: "/case/#works",
  },
];

export default function SubsidyList() {
  return (
    <section id="subsidySearch" className="section-subsidy">
      <div>
        <div className="block-title mb-6">まず、こんな業務から始められます</div>
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

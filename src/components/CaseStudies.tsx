import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  image: string;
  title: string;
  href: string;
  company: string;
  amount: string;
  employees: string;
  industry: string;
}

const cases: CaseStudy[] = [
  {
    image: "/img/uploads/2024/03/ab7c30289fa514dce543f51f60922ae7.jpg",
    title:
      "開発部門100名がClaude Codeを習得　大手製造業が実現した開発生産性200%向上の軌跡",
    href: "/case/manufacturing/",
    company: "大手製造業A社",
    amount: "開発工数50%削減",
    employees: "301名〜1000名",
    industry: "製造業",
  },
  {
    image: "/img/uploads/2024/02/c3e59afb1b9e8b9302dadc9db83a8df4.png",
    title:
      "納品スピード3倍を達成　SIerが語るAIペアプログラミング研修の導入効果",
    href: "/case/sier/",
    company: "SIer B社",
    amount: "納品速度3倍",
    employees: "51〜300名",
    industry: "IT・通信",
  },
  {
    image: "/img/uploads/2024/02/13cf17df8b0af8de2e099ea6c60f09d5.png",
    title:
      "非エンジニアがAIで業務自動化　スタートアップの全社員リスキリング成功事例",
    href: "/case/startup/",
    company: "スタートアップC社",
    amount: "業務効率化70%",
    employees: "〜50名",
    industry: "SaaS",
  },
];

export default function CaseStudies() {
  return (
    <section id="frontSectionCaseStudies" className="cs-section">
      <div className="cs-inner">
        <div className="cs-header">
          <span className="cs-header__sub">CASE STUDIES</span>
          <p className="cs-header__main">導入事例</p>
        </div>

        <div className="cs-grid">
          {cases.map((c) => (
            <Link key={c.href} href={c.href} className="cs-card">
              <div className="cs-card__img">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="cs-card__body">
                <p className="cs-card__title">{c.title}</p>
                <div className="cs-card__tags">
                  <span className="cs-card__tag cs-card__tag--accent">{c.amount}</span>
                  <span className="cs-card__tag">{c.industry}</span>
                  <span className="cs-card__tag">{c.employees}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="cs-more">
          <Link className="cs-more__btn" href="/case/">
            他の導入事例を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

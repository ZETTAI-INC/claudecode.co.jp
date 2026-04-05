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

function InfoLabel({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-1 mb-1 flex items-baseline" style={{ width: "50%" }}>
      <label
        className="mr-2 text-xs text-center border-current border-solid border rounded inline-block"
        style={{ minWidth: 62, color: "#3D75CA" }}
      >
        {label}
      </label>
      <span className="text-xs md:text-sm text-black">{value}</span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="frontSectionCaseStudies"
      className="pt-14 pb-12 md:py-20"
      style={{ background: "#F4FAFD" }}
    >
      <div className="l-container--casestudies">
        <div className="p-headline mb-8">
          <span className="p-headline__sub md:mb-2">CASE STUDIES</span>
          <p className="p-headline__main">導入事例</p>
        </div>

        <ul>
          {cases.map((c) => (
            <li key={c.href} className="md:flex mx-auto mb-8 md:mb-10">
              <div className="flex-none mb-4 md:mb-0 md:mr-8">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={320}
                  height={200}
                  className="rounded-lg object-cover w-full md:w-80"
                  style={{ height: 200 }}
                />
              </div>
              <div className="flex-1">
                <Link href={c.href}>
                  <p className="mb-3 md:mb-4 font-bold leading-normal text-base md:text-xl u-ff--headline">
                    {c.title}
                  </p>
                </Link>
                <div className="case-study-info flex flex-wrap py-3 px-6">
                  <InfoLabel label="企業名" value={c.company} />
                  <InfoLabel label="成果" value={c.amount} />
                  <InfoLabel label="規模" value={c.employees} />
                  <InfoLabel label="業種" value={c.industry} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <Link
            className="mx-auto font-bold p-button p-button--blue p-button--chevron-right p-button--shadow py-3 px-14"
            href="/case/"
          >
            他の導入事例を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

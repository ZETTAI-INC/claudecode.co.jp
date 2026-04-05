import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  logo: string;
  title: string;
  titleColor: string;
  description: string;
  buttonColor: string;
  buttonText: string;
  href: string;
  external?: boolean;
}

function ServiceCard({
  logo,
  title,
  titleColor,
  description,
  buttonColor,
  buttonText,
  href,
  external,
}: ServiceCardProps) {
  return (
    <div className="services-item">
      <div className="contentService_serviceLogoWrapper">
        <Image
          src={logo}
          alt={title}
          width={266}
          height={60}
          className="contentService_serviceLogo"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="contentService_rightContentWrapper">
        <p className="service-title mb-3 md:mt-6 mt-1" style={{ color: titleColor }}>
          {title}
        </p>
        <p className="service-description">{description}</p>
        <div className="grid justify-center">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-detail-button"
              style={{ background: buttonColor }}
            >
              {buttonText}
              <span className="material-icons-outlined" style={{ fontSize: 18, color: "#fff" }}>
                arrow_forward
              </span>
            </a>
          ) : (
            <Link href={href} className="service-detail-button" style={{ background: buttonColor }}>
              {buttonText}
              <span className="material-icons-outlined" style={{ fontSize: 18, color: "#fff" }}>
                arrow_forward
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const corporateServices: ServiceCardProps[] = [
  {
    logo: "/img/theme/home/logo_bank.svg",
    title: "エンタープライズ向け",
    titleColor: "#cca44e",
    description:
      "大企業のDX推進・AI人材育成のための研修プログラム。組織全体のAIリテラシー向上から、開発チームの生産性改善まで包括的にサポートします。",
    buttonColor: "#cca44e",
    buttonText: "詳しくはこちら",
    href: "/enterprise/",
  },
  {
    logo: "/img/theme/home/logo_sales.svg",
    title: "SIer・開発会社向け",
    titleColor: "#5eb6db",
    description:
      "システム開発会社のAI活用力を強化する研修プログラム。Claude Codeを活用した開発効率化のノウハウを実践的に提供します。",
    buttonColor: "#5eb6db",
    buttonText: "詳しくはこちら",
    href: "/sier/",
  },
  {
    logo: "/img/theme/home/logo_pro.svg",
    title: "スタートアップ向け",
    titleColor: "#3d75ca",
    description:
      "少数精鋭チームの開発生産性を最大化する研修プログラム。AI活用による高速開発手法を習得し、限られたリソースで最大の成果を実現します。",
    buttonColor: "#3d75ca",
    buttonText: "詳しくはこちら",
    href: "/startup/",
  },
];

const corporateServices2: ServiceCardProps[] = [
  {
    logo: "/img/theme/home/logo_funds.svg",
    title: "人事・研修担当者向け",
    titleColor: "#806530",
    description:
      "社員のAIスキル育成を推進したい人事・研修担当者向けサービス。研修設計のご相談から、効果測定、フォローアップまで一気通貫でご支援します。",
    buttonColor: "#806530",
    buttonText: "お問い合わせはこちら",
    href: "/contact/",
  },
  {
    logo: "/img/theme/home/logo_lease.svg",
    title: "教育機関向け",
    titleColor: "#7f7f7f",
    description:
      "大学・専門学校向けのAI開発カリキュラム導入支援。次世代のAIエンジニア育成に必要な教材・指導ノウハウを包括的にご提供します。",
    buttonColor: "#7f7f7f",
    buttonText: "お問い合わせはこちら",
    href: "/contact/",
  },
];

const individualServices: ServiceCardProps[] = [
  {
    logo: "/img/theme/home/logo_esg.svg",
    title: "エンジニア向け",
    titleColor: "#41ba44",
    description:
      "Claude Codeを使った実践的なAIペアプログラミング研修。コーディング、デバッグ、リファクタリングの効率を飛躍的に向上させます。",
    buttonColor: "#41ba44",
    buttonText: "詳しくはこちら",
    href: "/for-engineers/",
  },
  {
    logo: "/img/theme/home/logo_smes.svg",
    title: "PM・ディレクター向け",
    titleColor: "#f08438",
    description:
      "非エンジニアでもAI開発ツールを活用できるようになる研修。プロジェクト管理とAI活用の融合で、チーム全体の生産性を引き上げます。",
    buttonColor: "#f08438",
    buttonText: "詳しくはこちら",
    href: "/for-pm/",
  },
  {
    logo: "/img/theme/home/logo_startup.svg",
    title: "ビジネス職向け",
    titleColor: "#fd7a72",
    description:
      "プログラミング未経験でも安心。AIを活用した業務自動化・効率化スキルを基礎から学べる研修プログラムです。",
    buttonColor: "#fd7a72",
    buttonText: "詳しくはこちら",
    href: "/for-business/",
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

      <div className="flex justify-center mx-auto mt-16 relative mb-10 flex-wrap" style={{ maxWidth: 1200 }}>
        <a href="#supportSubsidyApplications" className="contentServices_supportSubsidyApplications_link">
          企業・チームで<br className="sp-only" />
          AI研修を<br className="sp-only" />
          導入したい
          <Image src="/img/theme/home/content-service-link-arrow.svg" alt="" width={24} height={24} className="mt-2" />
        </a>
        <a href="#applySubsidy" className="contentServices_applySubsidy_link">
          個人で<br className="sp-only" />
          AIスキルを<br className="sp-only" />
          習得したい
          <Image src="/img/theme/home/content-service-link-arrow.svg" alt="" width={24} height={24} className="mt-2" />
        </a>
      </div>

      {/* 01: Corporate Training */}
      <div id="supportSubsidyApplications">
        <div className="supportSubsidyApplications_title">
          <span className="mr-3 supportSubsidyApplications_titleNumber">01</span>
          <span className="supportSubsidyApplications_titleText">企業・チームでAI研修を導入したい</span>
        </div>

        <div id="supportSubsidyApplications_content" className="pt-20">
          <div className="text-center mb-5">
            <span className="supportSubsidyApplications_description">
              Claude Codeを活用すれば、<br />
              開発チームの生産性を<br className="sp-only" />
              飛躍的に向上できます。
            </span>
            <br />
            <div className="mt-6">
              研修設計から実施、効果測定まで<br className="sp-only" />
              一気通貫でご支援します。
            </div>
            <div className="flex justify-center">
              <Image
                src="/img/theme/home/support_subsidy_applications_image.svg"
                alt="企業向けAI研修"
                width={800}
                height={400}
                className="mt-5"
                style={{ width: "100%", maxWidth: 800, height: "auto" }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="pc-only mt-5"
              src="/img/theme/home/support_subsidy_applications_cooperation_corporate_portal_pc.svg"
              alt="研修フロー"
              width={1000}
              height={300}
              style={{ width: "100%", maxWidth: 1000, height: "auto" }}
            />
            <Image
              className="sp-only mt-5"
              src="/img/theme/home/support_subsidy_applications_cooperation_corporate_portal_sp.svg"
              alt="研修フロー"
              width={400}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="contentServiceListWrapper">
            <div className="contentServiceList">
              {corporateServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            <div className="contentServiceList">
              {corporateServices2.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02: Individual Training */}
      <div id="applySubsidy">
        <div className="applySubsidy_title">
          <span className="mr-3 applySubsidy_titleNumber">02</span>
          <span className="applySubsidy_titleText">個人でAIスキルを習得したい</span>
        </div>

        <div id="applySubsidy_content" className="pt-20">
          <div className="text-center mb-5">
            <span className="applySubsidy_description">
              AI時代のスキルを、<br />
              実践的に、確実に身につける。
            </span>
            <br />
            <span>
              現役エンジニア講師が、あなたのレベルに合わせたClaude Code活用スキルの習得をサポートします。
            </span>
            <div className="flex justify-center">
              <Image
                src="/img/theme/home/apply_subsidy_image.svg"
                alt="個人向けAI研修"
                width={800}
                height={400}
                className="mt-5"
                style={{ width: "100%", maxWidth: 800, height: "auto" }}
              />
            </div>
          </div>

          <div className="contentServiceListWrapper">
            <div className="contentServiceList">
              {individualServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

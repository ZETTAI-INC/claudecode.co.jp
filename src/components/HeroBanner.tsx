import Image from "next/image";

const partners = [
  { src: "/img/planb-fv/partner-anthropic.png", alt: "Anthropic", w: 128, h: 128 },
  { src: "/img/planb-fv/partner-openai.png", alt: "OpenAI", w: 128, h: 128 },
  { src: "/img/planb-fv/partner-google-ai.png", alt: "Google", w: 128, h: 128 },
  { src: "/img/planb-fv/partner-microsoft.png", alt: "Microsoft", w: 128, h: 128 },
  { src: "/img/planb-fv/partner-meta-ai.png", alt: "Meta", w: 128, h: 128 },
];

export default function HeroBanner() {
  return (
    <section className="planb-fv">
      <div className="planb-fv__bg">
        {/* Right-top wave */}
        <img
          className="planb-fv__wave planb-fv__wave--rt"
          src="/img/planb-fv/wave-rt-v2.svg"
          alt=""
        />
        {/* Left-bottom wave */}
        <img
          className="planb-fv__wave planb-fv__wave--lb"
          src="/img/planb-fv/wave-lb-v2.svg"
          alt=""
        />

        <div className="planb-fv__inner">
          {/* Left content */}
          <div className="planb-fv__content">
            <div className="planb-fv__badge">
              <Image
                src="/img/planb-fv/badge.svg"
                alt="&quot;AI時代の即戦力&quot;を育成！"
                width={326}
                height={54}
                priority
                style={{ width: "auto", height: "54px" }}
              />
            </div>

            <div className="planb-fv__stats">
              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  受講後<br />生産性向上率
                </span>
                <span className="planb-fv__stat-number">88</span>
                <span className="planb-fv__stat-unit">
                  <sup className="planb-fv__stat-note">※1</sup>％
                </span>
              </div>

              <div className="planb-fv__stat-divider" />

              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  受講者<br />満足度
                </span>
                <span className="planb-fv__stat-number">96.2</span>
                <span className="planb-fv__stat-unit">
                  <sup className="planb-fv__stat-note">※2</sup>％
                </span>
              </div>
            </div>

            <h1 className="planb-fv__heading">CLAUDE CODE<br />リスキリング研修</h1>

            <div className="planb-fv__cta">
              <a
                href="/resources/"
                className="planb-fv__btn planb-fv__btn--outline"
              >
                <span>研修資料をダウンロード</span>
                <Image src="/img/planb-fv/icon-doc.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="/contact/"
                className="planb-fv__btn planb-fv__btn--primary"
              >
                <span>無料相談する</span>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z" fill="white" stroke="white" strokeWidth="1"/>
                </svg>
              </a>
            </div>

            <div className="planb-fv__notes">
              <p>※1 2024年度の受講企業へのアンケート調査をもとに算出。</p>
              <p>研修受講後のチーム開発生産性が平均88.0%向上しています</p>
              <p>※2 2024年度の受講者アンケートにおける満足度</p>
            </div>
          </div>

          {/* Right illustration */}
          <div className="planb-fv__illust">
            <Image
              src="/img/planb-fv/hero-illust.webp"
              alt="CLAUDE CODE リスキリング研修"
              width={667}
              height={524}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Partner logos bar — white card overlapping FV bottom */}
      <div className="planb-fv__partners">
        <div className="planb-fv__partners-text-wrap">
          <p className="planb-fv__partners-text">
            最先端のAIプラットフォームと<br />連携した研修を提供しています
          </p>
        </div>
        <div className="planb-fv__partners-logos">
          {partners.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              style={{ width: "auto", height: "52px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

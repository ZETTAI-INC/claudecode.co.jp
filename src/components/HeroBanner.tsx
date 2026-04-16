import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="planb-fv">
      <div className="planb-fv__bg">
        <Image
          className="planb-fv__wave planb-fv__wave--rt"
          src="/img/planb-fv/wave-rt-v2.svg"
          alt=""
          width={600}
          height={400}
        />
        <Image
          className="planb-fv__wave planb-fv__wave--lb"
          src="/img/planb-fv/wave-lb-v2.svg"
          alt=""
          width={600}
          height={400}
        />

        <div className="planb-fv__inner">
          <div className="planb-fv__content">
            <div className="planb-fv__badge">
              <Image
                src="/img/planb-fv/badge.svg?v=2"
                alt="&quot;使えるAI力&quot;を装着！"
                width={326}
                height={54}
                priority
                style={{ width: "auto", height: "54px" }}
              />
            </div>

            {/* Desktop Heading */}
            <h1 className="planb-fv__heading hidden md:block leading-tight">
              「コードって何？」状態から<br />
              5日で<strong className="planb-fv__kenten">社員が自走</strong>する。<br />
              <span style={{ whiteSpace: "nowrap" }}>未経験特化のClaude Code研修。</span>
            </h1>

            {/* Mobile Heading */}
            <h1 className="planb-fv__heading md:hidden leading-[1.6]">
              「コードって何？」<br />
              状態から5日で<br />
              <strong className="planb-fv__kenten">社員が自走</strong>する。<br />
              未経験特化の<br />
              Claude Code研修。
            </h1>

            <p className="planb-fv__stat-note" style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#444",
              marginTop: "16px",
              marginBottom: "20px",
              maxWidth: "480px",
            }}>
              プログラミング経験ゼロの社員が、自分で業務ツールを
              <br />
              つくって公開できるようになる研修です。
            </p>

            <div className="planb-fv__stats">
              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  受講者の<br />非エンジニア率
                </span>
                <span className="planb-fv__stat-number">88</span>
                <span className="planb-fv__stat-unit">%</span>
              </div>

              <div className="planb-fv__stat-divider" />

              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  14日以内の<br />本番公開率
                </span>
                <span className="planb-fv__stat-number">96</span>
                <span className="planb-fv__stat-unit">%</span>
              </div>
            </div>

            <p className="planb-fv__stat-note">※ 自社パイロット研修実績（n=128）</p>

            <div className="planb-fv__cta">
              <a
                href="/consultation/"
                className="planb-fv__btn planb-fv__btn--primary"
              >
                <span>自社の業務が対象か、30分で診断する</span>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z" fill="white" stroke="white" strokeWidth="1"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="planb-fv__illust hidden md:block">
            <Image
              src="/img/planb-fv/hero-illust.webp"
              alt="非エンジニアが14日で業務ツールを本番公開する研修"
              width={667}
              height={524}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

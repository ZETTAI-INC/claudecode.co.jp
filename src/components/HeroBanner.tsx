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
              <span style={{
                display: "inline-block",
                background: "#fff3e0",
                color: "#e65100",
                fontWeight: 900,
                fontSize: "13px",
                letterSpacing: "0.08em",
                padding: "6px 18px",
                borderRadius: "100px",
                border: "1.5px solid #ffcc80",
              }}>
                非エンジニアの業務担当者が対象です
              </span>
            </div>

            <h1 className="planb-fv__heading" style={{ wordBreak: 'keep-all' }}>
              <span className="inline-block">営業・事務・企画の社員が、</span><br />
              <span className="inline-block">14日で<strong className="planb-fv__kenten">自部署の業務ツール</strong>を</span><br />
              <span className="inline-block">本番公開できる研修。</span>
            </h1>

            <p className="planb-fv__stat-note" style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#444",
              marginTop: "16px",
              marginBottom: "20px",
              maxWidth: "480px",
            }}>
              Excel台帳のWeb化、日報の自動集計、承認フローのアプリ化――
              <br />
              プログラミング経験ゼロから、現場で使える1本を納品します。
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

          <div className="planb-fv__illust">
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

      <div className="planb-fv__partners">
        <div className="planb-fv__partners-text-wrap">
          <p className="planb-fv__partners-text">
            <span>対象職種：</span>
            <strong style={{ color: '#151515' }}>営業・事務・企画・マーケ・生産管理・CS</strong>
            <span style={{ color: '#888', fontSize: '13px', marginLeft: '8px' }}>など非エンジニア全般</span>
          </p>
        </div>
      </div>
    </section>
  );
}

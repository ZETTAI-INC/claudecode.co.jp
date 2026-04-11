import Image from "next/image";

interface Partner {
  name: string;
  color: string;
}

const partners: Partner[] = [
  { name: "CLAUDECODE", color: "#D97757" },
  { name: "GITHUB", color: "#181717" },
  { name: "RENDER", color: "#000000" },
  { name: "SUPABASE", color: "#3ECF8E" },
];

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

            <div className="planb-fv__stats">
              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  未経験<br />スタート率
                </span>
                <span className="planb-fv__stat-number">88</span>
                <span className="planb-fv__stat-unit">％</span>
              </div>

              <div className="planb-fv__stat-divider" />

              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  アプリ開発<br />到達率
                </span>
                <span className="planb-fv__stat-number">96</span>
                <span className="planb-fv__stat-unit">％</span>
              </div>
            </div>

            <h1 className="planb-fv__heading">未経験から2週間で<br />"自走"AI開発者へ</h1>

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

          </div>

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

      <div className="planb-fv__partners">
        <div className="planb-fv__partners-text-wrap">
          <p className="planb-fv__partners-text">
            完全未経験から14日間で<br />これらを使いこなせるレベルへ
          </p>
        </div>
        <div className="planb-fv__partners-logos">
          {partners.map((p) => (
            <span
              key={p.name}
              className="planb-fv__partner-name"
              style={{ color: p.color }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

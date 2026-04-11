import Image from "next/image";

interface Partner {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  { 
    name: "CLAUDECODE", 
    color: "#D97757",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.809 10.6309H23.8814L16.5362 15.9682L19.3452 24.5991L12 19.2618L4.6548 24.5991L7.4638 15.9682L0.1186 10.6309H9.191L12 2Z" />
      </svg>
    )
  },
  { 
    name: "GITHUB", 
    color: "#181717",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  },
  { 
    name: "RENDER", 
    color: "#000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6h4.5c2.485 0 4.5 2.015 4.5 4.5S17.485 15 15 15h-2.5l-1.5 3h-2.5v-3h-1V6zM13 13.5h2c1.657 0 3-1.343 3-3s-1.343-3-3-3h-2v6z" />
      </svg>
    )
  },
  { 
    name: "SUPABASE", 
    color: "#3ECF8E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0zm-1.896 16.353c-.354.515.228.985.674.654L18.423 11.8c.414-.306.142-.907-.372-.907h-4.39l1.896-6.353c.356-.514-.226-.984-.672-.653L7.24 9.693c-.412.308-.14.908.374.908h4.391l-1.897 6.353z" />
      </svg>
    )
  },
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
                  非エンジニア<br />受講比率
                </span>
                <span className="planb-fv__stat-number">88</span>
                <span className="planb-fv__stat-unit">％</span>
              </div>

              <div className="planb-fv__stat-divider" />

              <div className="planb-fv__stat">
                <span className="planb-fv__stat-label">
                  業務アプリ<br />実装到達率
                </span>
                <span className="planb-fv__stat-number">96</span>
                <span className="planb-fv__stat-unit">％</span>
              </div>
            </div>

            <p className="planb-fv__stat-note">※ 自社パイロット研修実績（n=128）</p>

            <h1 className="planb-fv__heading" style={{ wordBreak: 'keep-all' }}>
              <span className="inline-block">「業務を知り尽くした社員」に、</span><br />
              <span className="inline-block">2週間で<strong className="planb-fv__kenten">つくるAI力</strong>を。</span>
            </h1>

            <div className="planb-fv__cta">
              <a
                href="/resources/"
                className="planb-fv__btn planb-fv__btn--outline"
              >
                <span>研修資料をダウンロード</span>
                <Image src="/img/planb-fv/icon-doc.svg" alt="" width={16} height={16} />
              </a>
              <a
                href="/consultation/"
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
          <p className="planb-fv__partners-text" style={{ wordBreak: 'keep-all' }}>
            <span className="inline-block">非エンジニア職が14日間で</span><br />
            <span className="inline-block">これらを<strong style={{ WebkitTextEmphasis: 'filled circle #ffab08', textEmphasis: 'filled circle #ffab08', color: '#ffab08', padding: '0 2px' }}>使いこなす</strong>レベルへ</span>
          </p>
        </div>
        <div className="planb-fv__partners-logos">
          {partners.map((p) => (
            <span
              key={p.name}
              className="planb-fv__partner-name"
              style={{ color: p.color, display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              {p.icon}
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

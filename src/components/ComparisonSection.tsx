import Image from "next/image";

export default function ComparisonSection() {
  return (
    <section className="comparison">
      <div className="comparison__inner">
        <h2 className="comparison__heading">
          <span>CLAUDE CODE研修の</span>
          <span>受講前と受講後を比べると...</span>
        </h2>

        <div className="comparison__grid">
          {/* Left — 受講前 */}
          <div className="comparison__col">
            <h3 className="comparison__col-title comparison__col-title--gray">
              受講前
            </h3>
            <div className="comparison__card comparison__card--gray comparison__card--image">
              <Image
                src="/img/comparison-before.webp"
                alt="受講前の課題：毎月のPL管理、スライド作成、勤怠管理、NDA作成、WEB・LP制作、リスト取得、保守運用"
                width={680}
                height={1013}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Right — 受講後 */}
          <div className="comparison__col">
            <h3 className="comparison__col-title comparison__col-title--accent">
              受講後
            </h3>
            <div className="comparison__card comparison__card--accent">
              <div className="comparison__benefits">
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">開発速度</p>
                  <p className="comparison__benefit-num">
                    <strong>3</strong><span>倍</span>
                  </p>
                </div>
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">生産性向上</p>
                  <p className="comparison__benefit-accent">
                    最大<br /><strong>88%</strong>
                  </p>
                </div>
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">コード品質</p>
                  <p className="comparison__benefit-accent">
                    <strong>大幅UP</strong>
                  </p>
                </div>
              </div>
              <div className="comparison__benefits-row">
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">残業時間</p>
                  <p className="comparison__benefit-accent">
                    <strong>激減</strong>
                  </p>
                </div>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">属人化</p>
                  <p className="comparison__benefit-accent">
                    <strong>解消</strong>
                  </p>
                </div>
              </div>
              <div className="comparison__benefits-row" style={{ marginTop: 16 }}>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">外注コスト</p>
                  <p className="comparison__benefit-accent">
                    <strong>削減</strong>
                  </p>
                </div>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">チーム力</p>
                  <p className="comparison__benefit-accent">
                    <strong>底上げ</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="comparison__bottom-text">
          研修後、チームの開発力が<strong>劇的に変わる！</strong>
        </p>
      </div>
    </section>
  );
}

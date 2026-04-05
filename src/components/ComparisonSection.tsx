export default function ComparisonSection() {
  return (
    <section className="comparison">
      <div className="comparison__inner">
        <h2 className="comparison__heading">
          <span>従来のAI研修と</span>
          <span>CLAUDE CODE研修を比べると...</span>
        </h2>

        <div className="comparison__grid">
          {/* Left — 従来のAI研修 */}
          <div className="comparison__col">
            <h3 className="comparison__col-title comparison__col-title--gray">
              従来のAI研修
            </h3>
            <div className="comparison__card comparison__card--gray">
              <div className="comparison__pain">
                <span className="comparison__pain-label">リソース過多</span>
              </div>
              <div className="comparison__items">
                <div className="comparison__item comparison__item--gray">
                  <span className="comparison__item-icon">📋</span>
                  <div>
                    <p className="comparison__item-title">外部講師との調整</p>
                  </div>
                </div>
                <div className="comparison__item comparison__item--gray">
                  <span className="comparison__item-icon">📅</span>
                  <div>
                    <p className="comparison__item-title">会場手配<br />スケジュール調整</p>
                  </div>
                </div>
                <div className="comparison__item comparison__item--gray">
                  <span className="comparison__item-icon">📝</span>
                  <div>
                    <p className="comparison__item-title">カリキュラムの<br />カスタマイズ依頼</p>
                  </div>
                </div>
                <div className="comparison__item comparison__item--gray">
                  <span className="comparison__item-icon">💰</span>
                  <div>
                    <p className="comparison__item-title">研修費用<br />相場 <strong>300万円〜</strong></p>
                  </div>
                </div>
                <div className="comparison__item-row">
                  <div className="comparison__item comparison__item--gray comparison__item--sm">
                    <p className="comparison__item-title">教材作成</p>
                  </div>
                  <div className="comparison__item comparison__item--gray comparison__item--sm">
                    <p className="comparison__item-title">長期<br />日程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — CLAUDE CODE 研修 */}
          <div className="comparison__col">
            <h3 className="comparison__col-title comparison__col-title--accent">
              CLAUDE CODE 研修
            </h3>
            <div className="comparison__card comparison__card--accent">
              <div className="comparison__benefits">
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">コスト</p>
                  <p className="comparison__benefit-num">
                    <strong>50</strong><span>万円〜</span>
                  </p>
                </div>
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">導入速度</p>
                  <p className="comparison__benefit-accent">
                    最短<br /><strong>2週間</strong>
                  </p>
                </div>
                <div className="comparison__benefit">
                  <p className="comparison__benefit-sub">カリキュラム</p>
                  <p className="comparison__benefit-accent">
                    <strong>自由</strong>
                  </p>
                </div>
              </div>
              <div className="comparison__benefits-row">
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">講師調整</p>
                  <p className="comparison__benefit-accent">
                    <strong>不要</strong>
                  </p>
                </div>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">会場手配</p>
                  <p className="comparison__benefit-accent">
                    <strong>不要</strong>
                  </p>
                </div>
              </div>
              <div className="comparison__benefits-row" style={{ marginTop: 16 }}>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">教材準備</p>
                  <p className="comparison__benefit-accent">
                    <strong>不要</strong>
                  </p>
                </div>
                <div className="comparison__benefit-card">
                  <p className="comparison__benefit-sub">効果測定</p>
                  <p className="comparison__benefit-accent">
                    <strong>自動</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="comparison__bottom-text">
          時間もお金も<strong>大幅コストカット！</strong>
        </p>
      </div>
    </section>
  );
}

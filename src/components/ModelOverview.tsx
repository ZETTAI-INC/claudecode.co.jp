import Image from "next/image";

export default function ModelOverview() {
  return (
    <section className="models">
      <div className="models__inner">
        <div className="block-title mb-6">Claude Codeで使えるモデル</div>
        <p className="models__lead">
          用途に応じて3つのモデルを使い分けることで、コストと性能を最適化できます
        </p>

        {/* ベンチマーク - PLAN-B風の実績表示 */}
        <div className="models__achievement">
          <div className="models__achievement-inner">
            <div className="models__achievement-stat">
              <span className="models__achievement-label">コーディング<br />ベンチマーク</span>
              <span className="models__achievement-num">72.0</span>
              <span className="models__achievement-unit">％</span>
            </div>
            <div className="models__achievement-divider" />
            <div className="models__achievement-stat">
              <span className="models__achievement-label">Terminal-bench<br />2位との差</span>
              <span className="models__achievement-num">+21</span>
              <span className="models__achievement-unit">pt</span>
            </div>
            <div className="models__achievement-divider" />
            <div className="models__achievement-stat">
              <span className="models__achievement-label">Agentic<br />Coding</span>
              <span className="models__achievement-num">No.1</span>
            </div>
          </div>
        </div>

        {/* モデル3枚 - services-item風 */}
        <div className="contentServiceList">
          <div className="services-item">
            <div className="contentService_serviceLogoWrapper">
              <Image
                src="/img/models/logo-opus.svg"
                alt="Opus 4"
                width={266}
                height={60}
                className="contentService_serviceLogo"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="contentService_rightContentWrapper">
              <p className="service-title mb-3 md:mt-6 mt-1" style={{ color: "#c0392b" }}>Opus 4</p>
              <p className="service-description">
                最も賢いモデル。複雑な設計判断、大規模リファクタリング、マルチファイル編集に。困ったらこれ。コンテキスト1M tokens、拡張思考対応。
              </p>
            </div>
          </div>

          <div className="services-item">
            <div className="contentService_serviceLogoWrapper">
              <Image
                src="/img/models/logo-sonnet.svg"
                alt="Sonnet 4"
                width={266}
                height={60}
                className="contentService_serviceLogo"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="contentService_rightContentWrapper">
              <p className="service-title mb-3 md:mt-6 mt-1" style={{ color: "#2563eb" }}>Sonnet 4</p>
              <p className="service-description">
                コスパ最強。日常的な開発、コードレビュー、テスト生成、バグ修正に。迷ったらまずこれ。コンテキスト200K tokens、拡張思考対応。
              </p>
            </div>
          </div>

          <div className="services-item">
            <div className="contentService_serviceLogoWrapper">
              <Image
                src="/img/models/logo-haiku.svg"
                alt="Haiku 4.5"
                width={266}
                height={60}
                className="contentService_serviceLogo"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="contentService_rightContentWrapper">
              <p className="service-title mb-3 md:mt-6 mt-1" style={{ color: "#16a34a" }}>Haiku 4.5</p>
              <p className="service-description">
                高速・低コスト。コード補完、簡単な修正、ドキュメント生成に。速さ重視ならこれ。コンテキスト200K tokens。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

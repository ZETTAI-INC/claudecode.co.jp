import "./ResourceDownloadCta.css";

export default function ResourceDownloadCta() {
  return (
    <section className="conversionArea">
      <div className="conversionArea__wrap">
        <div className="conversionArea__content">
          <div className="conversionArea__title">
            <span className="conversionArea__titleLead">
              <span className="conversionArea__titleStrong">今だけ</span>
              <span className="conversionArea__titleSmall">限定配布！</span>
            </span>
            教育マニュアル配布中
          </div>
          <div className="conversionArea__container">
            <div className="conversionArea__text">
              <div className="conversionArea__lead">
                お問い合わせいただいた方に無料配布
              </div>
              <ul className="conversionArea__list">
                <li className="conversionArea__listItem">
                  ・Claude Code 導入の実践手順
                </li>
                <li className="conversionArea__listItem">
                  ・社内展開ロードマップ
                </li>
                <li className="conversionArea__listItem">
                  ・現場で使えるプロンプト集
                </li>
              </ul>
            </div>
          </div>
          <a className="conversionArea__button" href="#contact">
            お問い合わせはこちら
            <img
              className="conversionArea__buttonBubble"
              src="/rstaffing/assets/images/conversionArea/bubble-801a28f308.png"
              alt="本ページ限定！ 教育マニュアル配布中"
              width={238}
              height={36}
            />
            <span className="conversionArea__arrow conversionArea__arrow--bar">
              {" "}
            </span>
            <span className="conversionArea__arrow conversionArea__arrow--top">
              {" "}
            </span>
            <span className="conversionArea__arrow conversionArea__arrow--bottom"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

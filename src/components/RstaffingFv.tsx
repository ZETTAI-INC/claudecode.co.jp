import "./RstaffingFv.css";

export default function RstaffingFv() {
  return (
    <div className="rstaffing-fv">
      <section className="mv">
        <div className="mv__wrap">
          <div className="mv__content">
            <div className="mv__textBlock">
              <h2 className="mv__title">
                <span className="mv__titleAccent">Claude Code</span><span className="mv__titleParticle">の</span>実践的ノウハウで、<br />
                社内の業務内製化を<strong className="mv__titleHighlight">最短で</strong>進める
              </h2>

              <div className="mv__servicesWrapper">
                <div className="mv__servicesDivider">
                  <span className="mv__dividerLine">＼</span>
                  企業の課題に合わせたコースをご用意
                  <span className="mv__dividerLine">／</span>
                </div>
                <div className="mv__serviceBoxes">
                  <span className="mv__serviceBox">基礎導入<br className="onlySp" />コース</span>
                  <span className="mv__serviceBox">実践開発<br className="onlySp" />コース</span>
                  <span className="mv__serviceBox">社内講師<br className="onlySp" />育成</span>
                </div>
              </div>
              
              <p className="mv__desc">
                スタートアップから大企業まで各種ユースケースに合わせてご提案します。<br />
                お気軽にご相談ください
              </p>

              <div className="mv__inquiryButton">
                <div className="inquiryButtonArea">
                  <a className="inquiryButtonArea__button" href="#contact">
                    研修資料ダウンロード
                    <div className="onlyPc --inline">・</div>
                    <br className="onlySp" />
                    無料相談はこちら
                    <span className="inquiryButtonArea__arrow"> </span>
                    <span className="inquiryButtonArea__arrow"> </span>
                    <span className="inquiryButtonArea__arrow"> </span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mv__illustrationBlock">
              <img src="/rstaffing/assets/images/mv/hero_illustration.png?v=2" alt="Claude Code Training" className="mv__illustrationImg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

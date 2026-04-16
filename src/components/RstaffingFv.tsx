import "./RstaffingFv.css";

export default function RstaffingFv() {
  return (
    <div className="rstaffing-fv">
      <section className="mv">
        <div className="mv__wrap">
          <div className="mv__content">
            <div className="mv__textBlock">
              <h2 className="mv__title" style={{ wordBreak: 'keep-all' }}>
                <span className="inline-block">次は御社の番です。</span><br />
                <span className="inline-block">14日後、<strong className="mv__titleHighlight">1本のAIツール</strong>が御社の本番環境で動きます</span>
              </h2>

              <div className="mv__servicesWrapper">
                <div className="mv__servicesDivider">
                  <span className="mv__dividerLine">＼</span>
                  お問い合わせ後の3ステップ
                  <span className="mv__dividerLine">／</span>
                </div>
                <div className="mv__serviceBoxes">
                  <div className="mv__serviceBox"><span>課題<br className="onlySp" />ヒアリング</span></div>
                  <div className="mv__serviceBox"><span>カリキュラム<br className="onlySp" />設計</span></div>
                  <div className="mv__serviceBox"><span>14日で<br className="onlySp" />本番導入</span></div>
                </div>
              </div>

              <p className="mv__desc">
                業種・規模を問わず、御社の業務課題に合わせて14日本番導入を設計します。<br />
                まずは30分で「自社業務が14日で本番導入できるか」を確認しましょう。
              </p>

              <div className="mv__inquiryButton">
                <div className="inquiryButtonArea">
                  <a className="inquiryButtonArea__button" href="/consultation/">
                    30分の適合診断を予約する
                    <span className="inquiryButtonArea__arrow"> </span>
                    <span className="inquiryButtonArea__arrow"> </span>
                    <span className="inquiryButtonArea__arrow"> </span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mv__illustrationBlock">
              <img src="/rstaffing/assets/images/mv/hero_illustration_v3.png?v=3" alt="Claude Code Training" className="mv__illustrationImg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

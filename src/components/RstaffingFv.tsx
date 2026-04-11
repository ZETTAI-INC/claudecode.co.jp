import "./RstaffingFv.css";

export default function RstaffingFv() {
  return (
    <div className="rstaffing-fv">
      <section className="mv">
        <div className="mv__wrap">
          <h2>
            <picture className="mv__people">
              <source
                srcSet="/rstaffing/assets/images/mv/pc-b59d3d450f.png"
                width="1440"
                height="864"
                media="(min-width: 1025px)"
              />
              <img
                className="mv__peopleImg"
                src="/rstaffing/assets/images/mv/sp-3bcf47e461.png"
                width="375"
                height="997"
                alt="Claude Codeで開発チームの生産性を最大化するリスキリング研修"
              />
            </picture>
          </h2>
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
      </section>
    </div>
  );
}

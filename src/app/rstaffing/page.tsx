"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function RstaffingPage() {
  useEffect(() => {
    const head = document.head;

    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "/rstaffing/assets/css/common.css";
    head.appendChild(cssLink);

    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
    head.appendChild(fontLink);

    return () => {
      cssLink.remove();
      preconnect1.remove();
      preconnect2.remove();
      fontLink.remove();
    };
  }, []);

  return (
    <>
      <Script
        src="/rstaffing/assets/js/common.js"
        strategy="afterInteractive"
      />
      <main>
        <header className="header" data-selector="header-area">
          <h1>
            <a href="#">
              <picture>
                <source
                  srcSet="/rstaffing/assets/images/common/pcLogo-6f803f9adc.png"
                  width="320"
                  height="35"
                  media="(min-width: 1025px)"
                />
                <img
                  className="header__logoImg"
                  src="/rstaffing/assets/images/header/spLogo-91ec5434ab.png"
                  width="100"
                  height="40"
                  alt="リクルートスタッフィング"
                />
              </picture>
            </a>
          </h1>
          <nav className="header__nav">
            <ul className="header__navList">
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#concern"
                  data-selector="header-nav-link"
                  title="concern"
                >
                  悩み・課題
                </a>
              </li>
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#reason"
                  data-selector="header-nav-link"
                  title="reason"
                >
                  選ばれる理由
                </a>
              </li>
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#study"
                  data-selector="header-nav-link"
                  title="study"
                >
                  事例
                </a>
              </li>
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#services"
                  data-selector="header-nav-link"
                  title="services"
                >
                  サービス一覧
                </a>
              </li>
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#flow"
                  data-selector="header-nav-link"
                  title="flow"
                >
                  導入までの流れ
                </a>
              </li>
              <li className="header__navListItem">
                <a
                  className="header__navListLink"
                  href="#qa"
                  data-selector="header-nav-link"
                  title="qa"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </nav>
          <a className="header__navButton" href="#inquiry">
            資料ダウンロード
            <br />
            お問い合わせはこちら
          </a>
          <button
            className="header__spButton"
            data-selector="hamburger-button"
            type="button"
          >
            <span className="header__spButtonItem"></span>
            <span className="header__spButtonItem"></span>
            <span className="header__spButtonText"></span>
          </button>
        </header>

        <section className="concern" data-section-area="concern">
          <div className="concern__headWrap" id="concern">
            <h2 className="concern__head concern__head--blue">
              <span className="concern__headTextEn">Concern</span>
              <span className="concern__headTextJp">
                こんなお悩み・課題は
                <br className="onlySp" />
                ありませんか？
              </span>
            </h2>
          </div>
          <div className="concern__outline">
            <span className="concern__headText">
              営業の
              <br />
              課題
            </span>
            <div className="concern__box">
              <p className="concern__text">
                商品はいいのに、
                <span className="concern__textStrong">
                  社内に営業の
                  <br className="onlySp" />
                  ノウハウがない
                </span>
              </p>
              <p className="concern__text">
                メンバーによって成果にバラつきが
                <br className="onlySp" />
                あり、組織で成果を
                <br className="onlyPc" />
                上げられる
                <br className="onlySp" />
                <span className="concern__textStrong">
                  マネジメント層が不足している
                </span>
              </p>
              <p className="concern__text">
                現在契約している営業代行会社が
                <br />
                <span className="concern__textStrong">
                  期待通りの成果を出せていない
                </span>
              </p>
            </div>
            <span className="concern__headText">
              カスタマー
              <br />
              サクセスの
              <br />
              課題
            </span>
            <div className="concern__box">
              <p className="concern__text">
                カスタマーサクセスの
                <br className="onlySp" />
                <span className="concern__textStrong">立ち上げ経験がない</span>
              </p>
              <p className="concern__text">
                カスタマーサクセス専任の人材を
                <br className="onlySp" />
                採用したが、
                <br className="onlyPc" />
                <span className="concern__textStrong">
                  教育に時間と
                  <br className="onlySp" />
                  コストがかかる
                </span>
              </p>
              <p className="concern__text">
                カスタマーサクセス部署を作ったが、
                <br />
                マネジメント層が
                <span className="concern__textStrong">
                  未経験者で
                  <br className="onlySp" />
                  チームが機能していない
                </span>
              </p>
              <p className="concern__text">
                解約率、アップセル率・
                <br className="onlySp" />
                クロスセル率が
                <br className="onlyPc" />
                横ばいで
                <br className="onlySp" />
                <span className="concern__textStrong">成長が鈍化している</span>
              </p>
            </div>
            <picture className="concern__peopleImg">
              <source
                srcSet="/rstaffing/assets/images/concern/pcPeople-93f8fa8d4f.png"
                width="368"
                height="500"
                media="(min-width: 1025px)"
              />
              <img
                src="/rstaffing/assets/images/concern/spPeople-38d98dfa73.png"
                width="200"
                height="380"
                alt="悩み・課題"
              />
            </picture>
          </div>
        </section>

        <section className="reason" data-section-area="reason">
          <div className="reason__wrap">
            <div className="reason__headWrap" id="reason">
              <h2 className="reason__head">
                <span className="reason__headTextEn">Reason</span>
                <span className="reason__headTextJp">
                  リクルート
                  <br className="onlySp" />
                  スタッフィングが
                  <br className="onlySp" />
                  選ばれる理由
                </span>
              </h2>
            </div>
            <ol className="reason__list">
              <li className="reason__item">
                <picture className="reason__itemNumber">
                  <source
                    srcSet="/rstaffing/assets/images/reason/number01-2a20248003.png"
                    width="96"
                    height="80"
                    media="(min-width: 1025px)"
                  />
                  <img
                    src="/rstaffing/assets/images/reason/spNumber01-733910fba9.png"
                    width="72"
                    height="64"
                    alt="1"
                  />
                </picture>
                <div className="reason__itemInner">
                  <h3 className="reason__itemTitle">
                    リクルートのノウハウが
                    <br className="onlySp" />
                    詰まった
                    <br className="onlyPc" />
                    KPIマネジメントで
                    <br className="onlySp" />
                    売れ続ける仕組みを構築
                  </h3>
                  <p className="reason__itemText">
                    計画の策定・業務の可視化・定型化によって
                    <br className="onlyPc" />
                    属人的ではなく”組織”で売れる仕組を構築。
                    <br />
                    実務者の入れ替わりによる品質低下も防ぎます。
                  </p>
                </div>
              </li>
              <li className="reason__item">
                <picture className="reason__itemNumber">
                  <source
                    srcSet="/rstaffing/assets/images/reason/number02-ee3f6ee871.png"
                    width="96"
                    height="80"
                    media="(min-width: 1025px)"
                  />
                  <img
                    src="/rstaffing/assets/images/reason/spNumber02-8e6c6f8614.png"
                    width="72"
                    height="64"
                    alt="2"
                  />
                </picture>
                <div className="reason__itemInner">
                  <h3 className="reason__itemTitle">
                    専任担当者が
                    <br className="onlySp" />
                    スタッフの研修～
                    <br />
                    営業活動をサポート
                  </h3>
                  <p className="reason__itemText">
                    案件毎に専任担当者を配置。
                    <br />
                    独自の評価システムKPIマネジメントで生産性の高い営業組織を構築。
                  </p>
                </div>
              </li>
              <li className="reason__item">
                <picture className="reason__itemNumber">
                  <source
                    srcSet="/rstaffing/assets/images/reason/number03-123480e7a3.png"
                    width="96"
                    height="80"
                    media="(min-width: 1025px)"
                  />
                  <img
                    src="/rstaffing/assets/images/reason/spNumber03-567f76ef69.png"
                    width="72"
                    height="64"
                    alt="3"
                  />
                </picture>
                <div className="reason__itemInner">
                  <h3 className="reason__itemTitle">
                    スピード×高精度で人材を選定
                    <br />
                    業界トップクラスの100万
                    <br className="onlySp" />
                    人を超えるスタッフが在籍
                    <sup className="reason__sup">※</sup>
                  </h3>
                  <p className="reason__itemText">
                    リクルートグループならではの人材調達力で、最短でリソースの確保が可能。
                    <br />
                    ビックデータを活用し、貴社にマッチした最適な人材を選定します。
                    <span className="reason__annotation">
                      ※登録スタッフ数：約112万人（2025年4月現在）
                    </span>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="conversionArea">
          <div className="conversionArea__wrap">
            <div className="conversionArea__content">
              <div className="conversionArea__title">
                <span className="conversionArea__titleLead">
                  <span className="conversionArea__titleStrong">5分</span>
                  <span className="conversionArea__titleSmall">でわかる！</span>
                </span>
                お役立ち資料2点セット
              </div>
              <div className="conversionArea__container">
                <div className="conversionArea__text">
                  <div className="conversionArea__lead">
                    2つの資料でこんなことがわかります
                  </div>
                  <ul className="conversionArea__list">
                    <li className="conversionArea__listItem">
                      ・弊社営業アウトソーシングの概要と強み
                    </li>
                    <li className="conversionArea__listItem">
                      ・導入企業数や規模、継続率
                    </li>
                    <li className="conversionArea__listItem">・導入事例</li>
                  </ul>
                </div>
              </div>
              <a className="conversionArea__button" href="#inquiry">
                資料ダウンロードはこちら
                <img
                  className="conversionArea__buttonBubble"
                  src="/rstaffing/assets/images/conversionArea/bubble-801a28f308.png"
                  alt="本ページ限定！ 導入事例集つき"
                  width="238"
                  height="36"
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

        <section className="caseStudy" data-section-area="study">
          <div className="caseStudy__headWrap" id="study">
            <h2 className="caseStudy__head">
              <span className="caseStudy__headTextEn">Case study</span>
              <span className="caseStudy__headTextJp">事例</span>
            </h2>
          </div>
          <div className="caseStudy__sliderArea">
            <ul
              className="caseStudy__sliderList"
              data-selector="carousel-slides"
            >
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/insideSales-7f8eb2fbdc.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/insideSales-f89f799ac8.jpg"
                    width="303"
                    height="187"
                    alt="圧倒的な営業力で、事業部全体の目標を弊社チームだけで達成"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    圧倒的な営業力で、事業部全体の目標を弊社チームだけで達成
                  </h3>
                  <p className="caseStudy__slideDescription">
                    全国の飲食小売店に対し、SaaS素材の新規開拓インサイドセールス業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">
                      インサイドセールス
                    </span>
                    <span className="caseStudy__slideTag">新規開拓</span>
                    <span className="caseStudy__slideTag">IT/SaaS</span>
                  </div>
                </div>
              </li>
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/settlement-1a27497002.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/settlement-6c5e9f477b.jpg"
                    width="303"
                    height="187"
                    alt="属人化しない仕組みづくりで、全メンバーが営業目標を達成"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    属人化しない仕組みづくりで、全メンバーが営業目標を達成
                  </h3>
                  <p className="caseStudy__slideDescription">
                    全国の飲食小売店に対し、決済サービスの新規獲得業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">
                      フィールドセールス
                    </span>
                    <span className="caseStudy__slideTag">
                      インサイドセールス
                    </span>
                    <span className="caseStudy__slideTag">決済サービス</span>
                  </div>
                </div>
              </li>
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/sales-81d127afc8.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/sales-9dd14393ab.jpg"
                    width="303"
                    height="187"
                    alt="全国展開する量販店のプロモーション戦略～販売をサポート"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    全国展開する量販店のプロモーション戦略～販売をサポート
                  </h3>
                  <p className="caseStudy__slideDescription">
                    パッケージソフトウェア/ハードウェアの販売支援業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">ラウンダー業務</span>
                    <span className="caseStudy__slideTag">
                      パッケージソフト/ハードウェア販売
                    </span>
                  </div>
                </div>
              </li>
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/credit-8bfceb7e0d.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/credit-8247596004.jpg"
                    width="303"
                    height="187"
                    alt="全国15000店舗以上の新規開拓に貢献"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    全国15000店舗以上の新規開拓に貢献
                  </h3>
                  <p className="caseStudy__slideDescription">
                    クレジットカードの新規開拓、アクセプタンス調査業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">
                      フィールドセールス
                    </span>
                    <span className="caseStudy__slideTag">新規開拓</span>
                    <span className="caseStudy__slideTag">調査業務</span>
                    <span className="caseStudy__slideTag">
                      クレジットカード
                    </span>
                  </div>
                </div>
              </li>
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/survey-b384f6de76.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/survey-41605889d7.jpg"
                    width="303"
                    height="187"
                    alt="市場調査からアポイント獲得、商品提案まで一気通貫でご支援"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    市場調査からアポイント獲得、商品提案まで一気通貫でご支援
                  </h3>
                  <p className="caseStudy__slideDescription">
                    官公庁および全国の地方自治体向け営業業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">
                      フィールドセールス
                    </span>
                    <span className="caseStudy__slideTag">官公庁</span>
                    <span className="caseStudy__slideTag">地方自治体</span>
                  </div>
                </div>
              </li>
              <li
                className="caseStudy__slider"
                data-selector="carousel-slide"
              >
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/caseStudy/pc/resource-d58632eb6a.jpg"
                    width="416"
                    height="257"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="caseStudy__sliderImg"
                    src="/rstaffing/assets/images/caseStudy/sp/resource-9e5dd0b910.jpg"
                    width="303"
                    height="187"
                    alt="キャリア・メーカーの社員のリソースを大幅に削減！"
                  />
                </picture>
                <div className="caseStudy__slideText">
                  <h3 className="caseStudy__slideHead">
                    キャリア・メーカーの社員のリソースを大幅に削減！
                  </h3>
                  <p className="caseStudy__slideDescription">
                    全国量販店およびGMSにて携帯販売コーナーの運営業務
                  </p>
                  <div className="caseStudy__tagArea">
                    <span className="caseStudy__slideTag">販売支援営業</span>
                    <span className="caseStudy__slideTag">量販店</span>
                    <span className="caseStudy__slideTag">GMS</span>
                    <span className="caseStudy__slideTag">携帯販売</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="caseStudy__sliderChange">
              <span
                className="caseStudy__sliderLine caseStudy__sliderLine--blue"
                data-selector="carousel-line-blue"
              ></span>
              <span
                className="caseStudy__sliderLine"
                data-selector="carousel-line"
              ></span>
              <button
                className="caseStudy__sliderButton"
                type="button"
                data-selector="carousel-button-prev"
                disabled
              >
                <span className="caseStudy__sliderPrevArrow"></span>
                <span className="caseStudy__sliderPrevArrow"></span>
                <span className="caseStudy__sliderPrevArrow"></span>
              </button>
              <button
                className="caseStudy__sliderButton"
                type="button"
                data-selector="carousel-button-next"
              >
                <span className="caseStudy__sliderNextArrow"></span>
                <span className="caseStudy__sliderNextArrow"></span>
                <span className="caseStudy__sliderNextArrow"></span>
              </button>
            </div>
          </div>
        </section>

        <section className="service" data-section-area="services">
          <div className="service__wrap">
            <div className="service__headWrap" id="services">
              <h2 className="service__head service__head--blue">
                <span className="service__headTextEn">Our services</span>
                <span className="service__headTextJp">サービス一覧</span>
              </h2>
            </div>
            <ul className="service__list">
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/sales-5a698e53b8.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/sales-80c23d1447.jpg"
                    width="327"
                    height="203"
                    alt="営業リストの作成・アポイントの獲得・商談～クロージングまで幅広く対応"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">
                    外勤営業
                    <br className="onlySp" />
                    <span className="service__itemTitle service__itemTitle--small">
                      (フィールドセールス)
                    </span>
                  </h3>
                  <p className="service__itemText">
                    営業リストの作成・アポイントの獲得・商談～クロージングまで幅広く対応
                  </p>
                </div>
              </li>
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/insideSales-cf79cfce0f.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/insideSales-e1f1e23399.jpg"
                    width="327"
                    height="203"
                    alt="顧客育成、インバウンド・アウトバウンド対応をサポート"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">
                    内勤営業
                    <br className="onlySp" />
                    <span className="service__itemTitle service__itemTitle--small">
                      (インサイドセールス)
                    </span>
                  </h3>
                  <p className="service__itemText">
                    顧客育成、インバウンド・アウトバウンド対応をサポート
                  </p>
                </div>
              </li>
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/salesEngineer-54822e231a.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/salesEngineer-48309a1e1c.jpg"
                    width="327"
                    height="203"
                    alt="営業に必要な市場調査・分析・レポーティング対応などをサポート"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">
                    営業支援業務
                    <br className="onlySp" />
                    <span className="service__itemTitle service__itemTitle--small">
                      (セールスエンジニア)
                    </span>
                  </h3>
                  <p className="service__itemText">
                    営業に必要な市場調査・分析・レポーティング対応などをサポート
                  </p>
                </div>
              </li>
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/callCenter-3de9e85ebf.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/callCenter-c902b042a2.jpg"
                    width="327"
                    height="203"
                    alt="取引単価の向上や解約率の改善をサポート"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">
                    コールセンター&
                    <br />
                    カスタマーサクセス
                  </h3>
                  <p className="service__itemText service__itemText--oneLineText">
                    取引単価の向上や解約率の改善をサポート
                  </p>
                </div>
              </li>
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/rounder-c9678222f4.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/rounder-416c16e447.jpg"
                    width="327"
                    height="203"
                    alt="既存顧客に定期的に訪問し、商品の提案・受注・商品発送業務をサポート"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">ラウンダー業務</h3>
                  <p className="service__itemText service__itemText--oneLineTitle">
                    既存顧客に定期的に訪問し、商品の提案・受注・商品発送業務をサポート
                  </p>
                </div>
              </li>
              <li className="service__item">
                <picture>
                  <source
                    srcSet="/rstaffing/assets/images/service/pc/salesSupport-c94b48ec1c.jpg"
                    width="368"
                    height="228"
                    media="(min-width: 1025px)"
                  />
                  <img
                    className="service__itemImage"
                    src="/rstaffing/assets/images/service/sp/salesSupport-e8be77ca59.jpg"
                    width="327"
                    height="203"
                    alt="商品の魅力をアピールし、新規ユーザーの契約獲得まで一貫して販促活動サポート"
                  />
                </picture>
                <div className="service__itemInner">
                  <h3 className="service__itemTitle">
                    販売支援
                    <br className="onlySp" />
                    <span className="service__itemTitle service__itemTitle--small">
                      (セールスプロモーション)
                    </span>
                  </h3>
                  <p className="service__itemText">
                    商品の魅力をアピールし、新規ユーザーの契約獲得まで一貫して販促活動サポート
                  </p>
                </div>
              </li>
            </ul>
            <div className="service__inquiryButton">
              <div className="inquiryButtonArea">
                <a className="inquiryButtonArea__button" href="#inquiry">
                  資料ダウンロード
                  <div className="onlyPc --inline">・</div>
                  <br className="onlySp" />
                  お問い合わせはこちら
                  <span className="inquiryButtonArea__arrow"> </span>
                  <span className="inquiryButtonArea__arrow"> </span>
                  <span className="inquiryButtonArea__arrow"> </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flow" data-section-area="flow">
          <div className="flow__wrap">
            <div className="service__headWrap" id="flow">
              <h2 className="service__head">
                <span className="service__headTextEn">Flow</span>
                <span className="service__headTextJp">導入までの流れ</span>
              </h2>
            </div>
            <ol className="flow__list">
              <li className="flow__item">
                <span className="flow__itemNumber">01</span>
                <h3 className="flow__itemTitle">
                  課題・ニーズ
                  <br className="onlyPc" />
                  ヒアリング
                </h3>
                <p className="flow__itemText">
                  依頼を検討している背景や課題、現状の業務についてヒアリング
                </p>
              </li>
              <li className="flow__item">
                <span className="flow__itemNumber">02</span>
                <h3 className="flow__itemTitle">見積り作成</h3>
                <p className="flow__itemText">
                  ヒアリング結果に基づき、アウトソーシングプランと概算費用を提示
                </p>
              </li>
              <li className="flow__item">
                <span className="flow__itemNumber">03</span>
                <h3 className="flow__itemTitle">
                  業務分析・
                  <br className="onlyPc" />
                  立ち上げ準備
                </h3>
                <p className="flow__itemText">
                  スーパーバイザーを派遣し、アウトソーシング開始に向けた準備を実施
                </p>
              </li>
              <li className="flow__item">
                <span className="flow__itemNumber">04</span>
                <h3 className="flow__itemTitle">契約締結</h3>
                <p className="flow__itemText">仕様書を作成し、契約締結</p>
              </li>
              <li className="flow__item">
                <span className="flow__itemNumber">05</span>
                <h3 className="flow__itemTitle">
                  アウトソーシング
                  <br className="onlyPc" />
                  開始
                </h3>
                <p className="flow__itemText">
                  アウトソーシング開始後は、スーパーバイザーより運営状況をレポート
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="qa" data-section-area="qa">
          <div className="qa__headWrap" id="qa">
            <h2 className="qa__head">
              <span className="qa__headTextEn">Q&amp;A</span>
              <span className="qa__headTextJp">よくある質問</span>
            </h2>
          </div>
          <details className="qa__item" data-selector="accordion-details">
            <summary className="qa__summary" data-selector="accordion-summary">
              <span className="qa__q">Q</span>
              <span className="qa__question">
                サービス対応エリアは全国ですか？
              </span>
              <span className="qa__accordion"></span>
            </summary>
            <div className="qa__answerArea" data-selector="accordion-content">
              <p className="qa__answer">
                はい、本サービスは日本全国でのご支援が可能です。
                <br />
                サービス開始前のヒアリングも原則リモートコミュニケーションを前提としておりますのでご安心ください。
              </p>
            </div>
          </details>
          <details className="qa__item" data-selector="accordion-details">
            <summary className="qa__summary" data-selector="accordion-summary">
              <span className="qa__q">Q</span>
              <span className="qa__question">
                どのぐらいの費用がかかるのでしょうか？
              </span>
              <span className="qa__accordion"></span>
            </summary>
            <div className="qa__answerArea" data-selector="accordion-content">
              <p className="qa__answer">
                ご支援内容によって変動するため、まずはお気軽にご相談ください。
                <br />
                ご要望に応じてお見積りをご提出いたします。
              </p>
            </div>
          </details>
          <details className="qa__item" data-selector="accordion-details">
            <summary className="qa__summary" data-selector="accordion-summary">
              <span className="qa__q">Q</span>
              <span className="qa__question">
                最低稼働期間、最低稼働人数は？
              </span>
              <span className="qa__accordion"></span>
            </summary>
            <div className="qa__answerArea" data-selector="accordion-content">
              <p className="qa__answer">
                稼働期間は最低3か月、稼働人数は3名からご支援させていただいております。
              </p>
            </div>
          </details>
          <details className="qa__item" data-selector="accordion-details">
            <summary className="qa__summary" data-selector="accordion-summary">
              <span className="qa__q">Q</span>
              <span className="qa__question">
                就業拠点を用意することはできますか？
              </span>
              <span className="qa__accordion"></span>
            </summary>
            <div className="qa__answerArea" data-selector="accordion-content">
              <p className="qa__answer">はい、可能でございます。</p>
            </div>
          </details>
        </section>

        <section className="conversionArea">
          <div className="conversionArea__wrap">
            <div className="conversionArea__content">
              <div className="conversionArea__title">
                <span className="conversionArea__titleLead">
                  <span className="conversionArea__titleStrong">5分</span>
                  <span className="conversionArea__titleSmall">でわかる！</span>
                </span>
                お役立ち資料2点セット
              </div>
              <div className="conversionArea__container">
                <div className="conversionArea__text">
                  <div className="conversionArea__lead">
                    2つの資料でこんなことがわかります
                  </div>
                  <ul className="conversionArea__list">
                    <li className="conversionArea__listItem">
                      ・弊社営業アウトソーシングの概要と強み
                    </li>
                    <li className="conversionArea__listItem">
                      ・導入企業数や規模、継続率
                    </li>
                    <li className="conversionArea__listItem">・導入事例</li>
                  </ul>
                </div>
              </div>
              <a className="conversionArea__button" href="#inquiry">
                資料ダウンロードはこちら
                <img
                  className="conversionArea__buttonBubble"
                  src="/rstaffing/assets/images/conversionArea/bubble-801a28f308.png"
                  alt="本ページ限定！ 導入事例集つき"
                  width="238"
                  height="36"
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

        <section className="inquiry" id="inquiry">
          <div className="inquiry__form">
            <iframe
              id="inquiry__iframe"
              className="inquiry__iframe"
              src="https://krs.bz/itstaffing/m?f=90"
              data-js="fixedForm__iframe"
              scrolling="no"
            ></iframe>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__wrap">
            <div className="footer__logo">
              <a href="#">
                <img
                  className="footer__logoImg"
                  src="/rstaffing/assets/images/footer/logo-2943c780d0.png"
                  width="120"
                  height="45"
                  alt="リクルート"
                />
              </a>
              <span className="footer__copyRight">
                (C) Recruit Staffing Co., Ltd.
              </span>
            </div>
            <div className="footer__policy">
              <span className="footer__privacy">
                <a
                  className="footer__privacyLink"
                  href="https://www.r-staffing.co.jp/sol/cont/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プライバシーポリシー
                </a>
              </span>
              <a
                className="footer__using"
                href="https://www.r-staffing.co.jp/sol/cont/terms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ご利用にあたって
              </a>
              <img
                className="footer__privacyImg"
                src="/rstaffing/assets/images/footer/logo_pb_ft.png"
                width="43"
                height="44"
                alt="プライバシーマーク"
              />
            </div>
          </div>
        </footer>

        <section
          className="floatingBanner is-hide"
          data-selector="floating-banner"
        >
          <a className="floatingBanner__link" href="#inquiry">
            <img
              className="onlyPc floatingBanner__img"
              src="/rstaffing/assets/images/floatingBanner/PCbanner-42eef66bd6.png"
              alt="お役立ち資料2点セット。資料ダウンロードはこちら"
              width="440"
              height="135"
            />
            <img
              className="onlySp floatingBanner__img"
              src="/rstaffing/assets/images/floatingBanner/SPbanner-7d37fbd4ef.png"
              alt="お役立ち資料2点セット。資料ダウンロードはこちら"
              width="344"
              height="107"
            />
          </a>
        </section>
      </main>
    </>
  );
}

"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SaleslinkPage() {
  useEffect(() => {
    // Dynamically load CSS files to avoid conflicts with global styles
    const cssFiles = [
      "/saleslink/assets/css/lib/slick.css",
      "/saleslink/assets/css/lib/slick-theme.css",
      "/saleslink/assets/css/base.css",
      "/saleslink/assets/css/top.css",
    ];

    const linkElements: HTMLLinkElement[] = [];
    cssFiles.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;
      document.head.appendChild(link);
      linkElements.push(link);
    });

    // Add Google Fonts
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap";
    document.head.appendChild(fontLink);

    return () => {
      linkElements.forEach((el) => el.remove());
      preconnect1.remove();
      preconnect2.remove();
      fontLink.remove();
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="l-header">
          <header>
            <div className="header__inner">
              <div className="logo-wrap">
                <h1 className="h-logo">
                  <a href="/saleslink">
                    <img
                      src="/saleslink/assets/images/h_logo.svg"
                      alt="Sales Link"
                    />
                  </a>
                </h1>
                <div className="h-lead">
                  <ul className="lead__txt">
                    <li>BtoB専門</li>
                    <li>テレアポ代行</li>
                    <li>全国対応</li>
                  </ul>
                </div>
              </div>
              <div className="h-contact">
                <a href="tel:0644007859" className="h-tel">
                  <p className="tel">
                    <span className="jp nopc">電話相談</span>
                    <span className="en nosp">06-4400-7859</span>
                  </p>
                  <p className="tel-txt">
                    受付時間 10:00～17:00 <br className="nopc" />
                    土日祝除く
                  </p>
                </a>
                <div className="h-btn">
                  <a
                    href="#form"
                    className="button c-hover smoothscroll -ico_form"
                  >
                    資料請求
                  </a>
                  <a
                    href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
                    target="_blank"
                    className="button c-hover -ico_consultation"
                  >
                    無料相談
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <main>
          <div id="contents" className="main_cnts">
            {/* FV Section */}
            <div className="sec-fv">
              <div className="sec-fv__wrapper">
                <div className="l-wrapper">
                  <div className="fv-txt">
                    <h2 className="ttl">
                      高単価BtoB商材特化｜テレアポ代行サービス
                    </h2>
                    <p className="lead-txt">
                      営業成果<span className="small">の</span>
                      <br />
                      <span className="col01">不確実性</span>
                      <span className="small">を</span>排除
                    </p>
                    <h3 className="subttl">
                      <span>成果が出る人材のみ選抜した運用</span>
                    </h3>
                    <p className="txt">
                      成果が安定しない80％を切り離し、
                      <br />
                      常に結果を残せる20%だけで運用することで、
                      <br />
                      外注リスクとなる
                      <span className="strong">「担当者の成果差」</span>
                      を解消します。
                    </p>
                    <div className="btn_wrap">
                      <a
                        href="#form"
                        className="c-button c-hover smoothscroll -ico_form"
                      >
                        資料請求
                      </a>
                      <a
                        href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
                        target="_blank"
                        className="c-button c-hover -ico_consultation"
                      >
                        無料相談
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Worries Section */}
            <section className="sec-worries">
              <div className="l-inner js-anime fadeIn">
                <h2 className="worries-ttl">
                  <span className="small">
                    営業活動でテレアポしてもアポが取れない…
                  </span>
                  そんなお悩みありませんか？
                </h2>
                <div className="worries-box_wrap">
                  <dl className="worries-box">
                    <dt className="box-ttl">
                      <span className="ico">
                        <img
                          src="/saleslink/assets/images/ico01_worries.svg"
                          alt=""
                        />
                      </span>
                      社内テレアポ
                    </dt>
                    <dd className="box-cnts">
                      <ul className="check-list">
                        <li>
                          <span>
                            新規アポイントが
                            <br className="nosp" />
                            取れない
                          </span>
                        </li>
                        <li>
                          <span>
                            社員がテレアポを
                            <br className="nosp" />
                            嫌々やってる
                          </span>
                        </li>
                        <li>
                          <span>
                            営業にテレアポを義務化
                            <br className="nosp" />
                            すると
                            <br className="nopc" />
                            離職率が上がり
                            <br className="nosp" />
                            社員が定着しない
                          </span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <dl className="worries-box">
                    <dt className="box-ttl">
                      <span className="ico">
                        <img
                          src="/saleslink/assets/images/ico02_worries.svg"
                          alt=""
                        />
                      </span>
                      テレアポ代行
                    </dt>
                    <dd className="box-cnts">
                      <ul className="check-list">
                        <li>
                          <span>
                            そもそもアポが
                            <br className="nosp" />
                            入らない
                            <br />
                            入っても質が低い
                          </span>
                        </li>
                        <li>
                          <span>
                            商材の説明をしても
                            <br className="nosp" />
                            理解してもらえない
                          </span>
                        </li>
                        <li>
                          <span>
                            担当アポインターの
                            <br className="nosp" />
                            当たり外れが激しく
                            <br />
                            成果が安定しない
                          </span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <dl className="worries-box">
                    <dt className="box-ttl">
                      <span className="ico">
                        <img
                          src="/saleslink/assets/images/ico03_worries.svg"
                          alt=""
                        />
                      </span>
                      内製化
                    </dt>
                    <dd className="box-cnts">
                      <ul className="check-list">
                        <li>
                          <span>
                            社内に
                            <br className="nosp" />
                            ノウハウが残らない
                          </span>
                        </li>
                        <li>
                          <span>
                            アポインターを
                            <br className="nosp" />
                            管理する人材がいない
                          </span>
                        </li>
                        <li>
                          <span>
                            営業コストが
                            <br className="nosp" />
                            外部に流れ続ける
                          </span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section className="sec-solution">
              <div className="l-inner js-anime fadeIn">
                <h2 className="solution-ttl">
                  そのような
                  <br className="nopc" />
                  インサイドセールスに関する
                  <br />
                  お悩みを解決します！
                </h2>
                <p className="lead-txt">
                  確実なアポイントを獲得し、営業活動をご支援します。
                </p>
                <div className="solution-box_wrap">
                  <div className="solution-box01">
                    <ul className="check-list">
                      <li>
                        <span className="col01">
                          上位<span className="strong">20</span>%
                        </span>
                        のアポインターのみをアサイン。
                        <br />
                        成果が出ない人材は使いません。
                      </li>
                      <li>
                        担当者や決裁者の直通番号を
                        <span className="col01">
                          <span className="strong">230</span>万件
                        </span>
                        保有しています。
                      </li>
                      <li>
                        1時間あたり
                        <span className="col01">
                          <span className="strong">40</span>コール!!
                        </span>
                        架電数にこだわります。
                      </li>
                      <li>
                        今まさにキーワード検索している企業を
                        <br />
                        自動で検知し、
                        <span className="col01">
                          リアルタイムでアプローチ。
                        </span>
                      </li>
                      <li>
                        泥臭さだけでなく
                        <span className="col01">
                          <span className="strong">2,688,000</span>件
                        </span>
                        の架電データを
                        <br />
                        もとに、企業の勝ちパターンを確実に見つけます。
                      </li>
                    </ul>
                  </div>
                  <div className="solution-box02">
                    <h3 className="subttl">
                      <img
                        src="/saleslink/assets/images/ttl_solution.svg"
                        alt="最短10日で支援開始可能"
                      />
                    </h3>
                    <ul className="solution-list">
                      <li>即戦力をアサイン</li>
                      <li>丸投げ可能</li>
                      <li>膨大な架電データ</li>
                      <li>インテントセールス</li>
                      <li>徹底管理</li>
                      <li>内製化支援</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Reason Section */}
            <section className="sec-reason">
              <div className="reason__wrapper">
                <div className="l-wrapper js-anime fadeIn">
                  <div className="txt-wrap">
                    <h2 className="ttl">
                      ZETTAIのテレアポ代行はなぜ結果を出せるのか？
                    </h2>
                    <p className="lead-txt">
                      成果を出せる
                      <br />
                      <span className="strong col01">
                        上位20％のアポインターだけ
                      </span>
                      で運用します！
                    </p>
                    <p className="txt">
                      洗練されたトークスクリプトやデータに基づいた営業手法も、
                      <br />
                      それを使いこなす&quot;人&quot;がいなければ成果は生まれません。
                    </p>
                    <p className="txt">
                      ZETTAIでは、&quot;人&quot;に徹底してこだわることで、外注リスクとなりがちな
                      <br />
                      <span className="strong col01">
                        「担当者によって成果がブレる」という問題を根本から解消
                      </span>
                      しています。
                    </p>
                  </div>
                  <div className="txt-wrap02">
                    <p className="txt">
                      <span className="bg-white">
                        <span className="col01">メンバー全員が即戦力</span>
                        となる資質を備えているため、
                      </span>
                      <span className="bg-white">
                        確実にアポイントを獲得できます。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Management Section */}
            <section className="sec-management">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">人材へのこだわり</h2>
                  <p className="en subttl">MANAGEMENT</p>
                </div>
                <p className="lead-txt">
                  架電する人にとことんこだわっているZETTAIが
                  <br />
                  どのように人材をマネージメントしているのかを
                  <br className="nopc" />
                  ご紹介します。
                </p>
                <div className="box-wrap">
                  <div className="box">
                    <h3 className="box-ttl">採用</h3>
                    <p className="box-lead">
                      採用前から徹底的に絞り込みます！
                    </p>
                    <p className="box-txt">
                      「成果に必要な100項目の独自基準」を設定しており、成果を見て採用を行っています。
                      <br />
                      実際、
                      <span className="col01">
                        月間100名以上を採用しても実務稼働まで進むのは約20名ほどとなっています。
                      </span>
                    </p>
                    <div className="box-img">
                      <img
                        src="/saleslink/assets/images/img01_management.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="box-ttl">評価</h3>
                    <p className="box-lead">
                      感覚ではなく&quot;行動量 × 成果&quot;で判断！
                    </p>
                    <p className="box-txt">
                      私たちは育成と評価の軸をすべて定量データで管理しており、主観的・感覚的な評価は行いません。
                      <br />
                      <span className="col01">
                        データに基づく徹底した管理と育成
                      </span>
                      によって、個人差を最小限に抑えています。
                    </p>
                    <div className="box-img">
                      <img
                        src="/saleslink/assets/images/img02_management.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="box-ttl">定着</h3>
                    <p className="box-lead">成果がでるから定着率が高い</p>
                    <p className="box-txt">
                      成果に繋がるPDCA体制により、
                      <span className="col01">
                        1日のアポ獲得数が3〜5件以上を獲得できる
                      </span>
                      ようになるため、アポインターの仕事への自信が高まります。成果創出を前提とした環境があることで、お客様への価値提供に集中できます。
                    </p>
                    <div className="box-img">
                      <img
                        src="/saleslink/assets/images/img03_management.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="box">
                    <h3 className="box-ttl">再現性</h3>
                    <p className="box-lead">誰が行っても成果が出る状態へ</p>
                    <p className="box-txt">
                      プロジェクトごとの基準（KPI）の明確化、録音分析による成功パターンの言語化の徹底により、個人のスキルに依存せず、再現性の高いインサイドセールス組織を実現しています。
                    </p>
                    <div className="box-img">
                      <img
                        src="/saleslink/assets/images/img04_management.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reason02">
                <div className="l-wrapper js-anime fadeIn">
                  <div className="flex">
                    <div className="flex-txt">
                      <h3 className="reason-ttl">
                        良質なアポイントを安定提供できる理由
                      </h3>
                      <p className="reason-txt">
                        実際に喋った内容を全て文字起こし+録音をとり、商談前に伝えるべき点が
                        <br className="nosp" />
                        伝えられているか？まで細かくチェックし、アポイントの品質を担保します。
                      </p>
                      <p className="reason-txt">
                        アポインターの共通認識として必ず持たせているのは、
                        <br className="nosp" />
                        <span className="col01">
                          「お客様は受注にならないと売上にならない。」
                        </span>
                        ということです。
                        <br />
                        アポ数をたくさん納品しても受注につながらなければ、ご継続いただくことは不可能だと考えています。
                      </p>
                      <p className="lead-txt">
                        受注確度の高い有意義な商談ができるよう、
                        <br />
                        <span className="col01">良質なアポイントだけをお届け</span>
                        します。
                      </p>
                    </div>
                    <div className="flex-img">
                      <img
                        src="/saleslink/assets/images/img_reason02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy Section */}
            <section className="sec-strategy">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">成果につながる戦略設計</h2>
                  <p className="en subttl">STRATEGY</p>
                </div>

                <ul id="tab_list">
                  <li className="active tab_list1">
                    <a href="#tab1" className="c-hover">
                      架電前設計
                    </a>
                  </li>
                  <li className="tab_list2">
                    <a href="#tab2" className="c-hover">
                      仮説設計
                    </a>
                  </li>
                  <li className="tab_list3">
                    <a href="#tab3" className="c-hover">
                      リスト設計
                    </a>
                  </li>
                  <li className="tab_list4">
                    <a href="#tab4" className="c-hover">
                      スクリプト設計
                    </a>
                  </li>
                </ul>
                <ul id="tab_content">
                  <li className="tab1">
                    <div className="tab__inner">
                      <h3 className="ttl">
                        テレアポの勝敗は、
                        <br className="nopc" />
                        架電前の準備で決まる
                      </h3>
                      <p className="txt">
                        私たちは
                        <span className="col01">
                          成果が出る確率を最大化する設計
                        </span>
                        にこだわります。
                        <br />
                        ターゲット選定、課題仮説、リスト戦略、価値訴求、スクリプト設計、KPI定義までを一気通貫で設計し、架電前の準備を徹底的に構造化することで、
                        <span className="col01">
                          初回接触から精度の高いコミュニケーションを実現
                        </span>
                        します。
                        <br />
                        事前設計が整っているからこそ、架電の瞬間からズレのない会話が生まれ、結果として高い成果につながります。
                      </p>
                      <div className="gray-box">
                        <h4 className="subttl">架電前設計の流れ</h4>
                        <picture>
                          <source
                            srcSet="/saleslink/assets/images/img01_strategy_sp.png"
                            media="(max-width:767px)"
                          />
                          <img
                            src="/saleslink/assets/images/img01_strategy.png"
                            alt="STEP01ターゲット選定 STEP02課題仮説の検討 STEP03リスト戦略 STEP04価値訴求の検討 STEP05スクリプト設計 STEP06KPI定義"
                          />
                        </picture>
                      </div>
                      <div className="btn-box -prev c-hover">
                        <a href="#tab4" className="to_tab4 btn"></a>
                      </div>
                      <div className="btn-box -next c-hover">
                        <a href="#tab2" className="to_tab2 btn"></a>
                      </div>
                    </div>
                  </li>
                  <li className="tab2">
                    <div className="tab__inner">
                      <h3 className="ttl">
                        架電先の本質的な課題を捉えた仮説
                      </h3>
                      <p className="txt">
                        当社では、
                        <span className="col01">
                          累計260万件以上の架電データ
                        </span>
                        をもとに分析を行い、架電先企業の課題を3つのカテゴリに整理しています。その中で最も「刺さる課題」を仮説として設計し、ABテストで検証を行い、
                        <span className="col01">アポ獲得率が最大化</span>
                        される切り口を確立します。
                        <br />
                        その結果、サービス紹介にとどまる他のテレアポ代行会社では実現できない、高いアポ率を安定して維持しています。
                      </p>
                      <div className="gray-box">
                        <h4 className="subttl">企業が抱える3つの課題</h4>
                        <picture>
                          <source
                            srcSet="/saleslink/assets/images/img02_strategy_sp.png"
                            media="(max-width:767px)"
                          />
                          <img
                            src="/saleslink/assets/images/img02_strategy.png"
                            alt="課題 01集客・リード獲得 課題 02コスト削減 課題 03アフターフォローの充実"
                          />
                        </picture>
                        <p className="lead">
                          どの課題が最も刺さるかを仮説・検証し、
                          <br className="nopc" />
                          決裁者との商談率と受注率を向上
                        </p>
                      </div>
                      <div className="btn-box -prev c-hover">
                        <a href="#tab1" className="to_tab1 btn"></a>
                      </div>
                      <div className="btn-box -next c-hover">
                        <a href="#tab3" className="to_tab3 btn"></a>
                      </div>
                    </div>
                  </li>
                  <li className="tab3">
                    <div className="tab__inner">
                      <h3 className="ttl">
                        受付ブロックを突破！
                        <br className="nopc" />
                        決裁者接触率を高めるリスト設計
                      </h3>
                      <p className="txt">
                        テレアポの成果は、「誰に架電するか」で大きく変わります。
                        <br />
                        多くの代行会社が代表番号中心のリストを使う中、当社は
                        <span className="col01">
                          担当者・決裁者へ直接つながるリスト構築
                        </span>
                        に注力しています。
                        <br />
                        また、
                        <span className="col01">
                          今まさにキーワードを検索している企業を自動で検知し、リアルタイムでアプローチするインテントセールス
                        </span>
                        も導入しており、今探しているホットなニーズに直接アプローチできます。初回接触から商談につながる確率を高めます。
                      </p>
                      <div className="gray-box">
                        <h4 className="subttl">当社リストの特長</h4>
                        <picture>
                          <source
                            srcSet="/saleslink/assets/images/img03_strategy_sp.png"
                            media="(max-width:767px)"
                          />
                          <img
                            src="/saleslink/assets/images/img03_strategy.png"
                            alt="・国内最大級 520万社以上の法人データベースを活用 ・部署・担当者直通データ 160万件以上 ・人物情報／部署情報／役職情報の付与が可能 ・過去の接点データ・課題履歴を統合"
                          />
                        </picture>
                      </div>
                      <div className="btn-box -prev c-hover">
                        <a href="#tab2" className="to_tab2 btn"></a>
                      </div>
                      <div className="btn-box -next c-hover">
                        <a href="#tab4" className="to_tab4 btn"></a>
                      </div>
                    </div>
                  </li>
                  <li className="tab4">
                    <div className="tab__inner">
                      <h3 className="ttl">データに基づく会話設計</h3>
                      <p className="txt">
                        トークスクリプトを、話し方や感覚ではなく受注率が最大化される会話比率の設計しています。
                        <br />
                        63,200コール分の架電データから、アポインター：お客様＝7：3のバランスが、受注につながりやすい会話構造であることが分かりました。
                        <br />
                        説明しすぎず、聞きすぎない。成果につながる会話量を数値で定義し、誰が架電しても同水準の成果が出るスクリプトを設計します。
                      </p>
                      <div className="gray-box">
                        <h4 className="subttl">
                          会話比率別 受注率
                          <br className="nopc" />
                          (アポインター：お客様)
                        </h4>
                        <picture>
                          <source
                            srcSet="/saleslink/assets/images/img04_strategy_sp.png"
                            media="(max-width:767px)"
                          />
                          <img
                            src="/saleslink/assets/images/img04_strategy.png"
                            alt="5：5▶21.62％ 6：4▶50.00％ 7：3▶83.33％ 8：2▶50.00％"
                          />
                        </picture>
                      </div>
                      <div className="btn-box -prev c-hover">
                        <a href="#tab3" className="to_tab3 btn"></a>
                      </div>
                      <div className="btn-box -next c-hover">
                        <a href="#tab1" className="to_tab1 btn"></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="strategy-lead">
                <div className="l-wrapper js-anime fadeIn">
                  <p className="lead-txt">
                    営業成果の&quot;不確実性&quot;を徹底排除し、
                    <br />
                    良質なアポイントで営業機会を創出
                  </p>
                  <p className="txt">
                    営業のプロフェッショナルとして、
                    <br className="nopc" />
                    必ずご満足いただける結果を出します！
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="cta-wrap grad03">
              <div className="cta-inner js-anime fadeIn">
                <p className="cta-txt">
                  テレアポ代行サービスに関するお問い合わせは、
                  <br className="nopc" />
                  下記よりお気軽にご連絡ください。
                </p>
                <div className="cta-flex">
                  <div className="cta-tel">
                    <a href="tel:0644007859" className="tel-link">
                      <p className="tel-num en">06-4400-7859</p>
                      <p className="tel-txt">
                        受付時間 10:00～17:00 土日祝除く
                      </p>
                      <span className="arrow nopc"></span>
                    </a>
                  </div>
                  <div className="cta-form">
                    <a
                      href="#form"
                      className="c-button c-hover smoothscroll -ico_form"
                    >
                      資料請求
                    </a>
                    <a
                      href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
                      target="_blank"
                      className="c-button c-hover -ico_consultation"
                    >
                      無料相談
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <section className="sec-comparison">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">他社比較</h2>
                </div>
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>比較項目</th>
                      <td>
                        <span>
                          セールス
                          <br className="nopc" />
                          リンク
                        </span>
                      </td>
                      <td>
                        テレアポ
                        <br className="nopc" />
                        特化会社
                      </td>
                      <td>
                        営業全般
                        <br className="nopc" />
                        代行会社
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>高単価BtoB対応</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>〇</td>
                    </tr>
                    <tr>
                      <th>無形・課題解決型商材</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>△</td>
                    </tr>
                    <tr>
                      <th>人材の選抜基準が明確</th>
                      <td>〇</td>
                      <td>△</td>
                      <td>△</td>
                    </tr>
                    <tr>
                      <th>部署/決裁者の直通リストを保有</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>△</td>
                    </tr>
                    <tr>
                      <th>受注につながる設計</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>〇</td>
                    </tr>
                    <tr>
                      <th>稼働前の戦略設計</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>△</td>
                    </tr>
                    <tr>
                      <th>テストコール実施</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <th>膨大な実データに基づく運用</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <th>内製化まで伴走</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr>
                      <th>教育・仕組み化支援</th>
                      <td>〇</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                  </tbody>
                </table>
                <p className="txt">
                  設計 × 人材 × データ ×
                  再現性を軸に、高単価BtoBという最難関の営業領域で、
                  <br className="nosp" />
                  「受注につながるアポイント」に本気でコミットする成果直結型の営業支援会社です。
                </p>
                <p className="txt">
                  私たちは、アポの&quot;数&quot;を並べるだけの会社でも、何でも請け負うだけの営業代行でもありません。
                </p>
                <p className="txt">
                  私たちが提供するのは、属人化したノウハウではなく、
                  <br className="nosp" />
                  誰がやっても成果に近づける
                  <span className="col01">
                    &quot;売れる営業の型&quot;
                  </span>
                  そのもの。
                </p>
                <p className="txt">
                  その型をもとに戦略を設計し、現場に落とし込み、KPI管理と改善を回し続けることで、
                  <br />
                  受注という結果が出るまで、貴社の営業を支援します。
                </p>
              </div>
            </section>

            {/* Cases Section */}
            <section className="sec-cases bgcol01">
              <div className="l-inner js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">支援実績</h2>
                  <p className="en subttl">CASES</p>
                </div>
                <p className="lead-txt">
                  &quot;成果が出た施策だけを厳選し提供できる&quot;のが
                  <br className="nopc" />
                  ZETTAIです。
                  <br />
                  自社事業での検証実績からも、
                  <br className="nopc" />
                  再現性のあるノウハウ蓄積と、確かな成果を
                  <br className="nopc" />
                  お届けすることができます。
                </p>
                <div className="slider-wrap">
                  <div className="case-slider">
                    <div className="cases-box slick-slide">
                      <h3 className="cases-box__ttl">
                        <span className="small">自社事例</span>
                        Claude Codeによる開発生産性向上
                      </h3>
                      <div className="cases-box__inner">
                        <div className="flex">
                          <div className="flex-img">
                            <img
                              src="/saleslink/assets/images/img01_cases.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-txt">
                            <h4 className="ttl">導入後の成果</h4>
                            <p className="lead">
                              営業に参画してわずか1年で、年間18億円の売上を創出
                            </p>
                            <ul className="check-list">
                              <li>
                                7人のアポインターだけで2,903アポ獲得 / 731受注
                              </li>
                              <li>
                                1日平均15件のアポイントを納品し、商談機会を最大化
                              </li>
                              <li>
                                営業はテレアポ業務から解放され、提案に専念できる体制へ
                              </li>
                              <li>商談品質が向上し、受注率が大幅アップ</li>
                            </ul>
                          </div>
                        </div>
                        <div className="acd_btn more-links">
                          <span>続きを見る</span>
                        </div>
                        <div className="acd_cnts more-wrap">
                          <div className="two-column">
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico01">
                                  <img
                                    src="/saleslink/assets/images/ico01_cases.svg"
                                    width={18}
                                    alt=""
                                  />
                                </span>
                                取り組み内容
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  <span className="strong">商材</span> ：
                                  新規HP制作＋HP運用
                                  <br />
                                  <span className="strong">商材単価</span> ：
                                  150万〜400万円
                                  <br />
                                  <span className="strong">ターゲット</span> ：
                                  中小企業
                                  <br />
                                  <span className="strong">手法</span> ：
                                  決裁者へのテレアポ営業
                                </p>
                              </div>
                            </div>
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico02">
                                  <img
                                    src="/saleslink/assets/images/ico02_cases.svg"
                                    width={21}
                                    alt=""
                                  />
                                </span>
                                導入前の課題
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  営業がテレアポから商談までを一気通貫で対応しており下記の課題がありました。
                                </p>
                                <ul className="check-list">
                                  <li>
                                    内製での架電アポ獲得量に限界を感じた
                                  </li>
                                  <li>
                                    商談準備や顧客理解に時間を割けない
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico03">
                                  <img
                                    src="/saleslink/assets/images/ico03_cases.svg"
                                    width={21}
                                    alt=""
                                  />
                                </span>
                                支援内容
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  アポイント創出業務をすべて請け負いました。
                                  <br />
                                  ホームページ制作は無形商材であり、アポイントの獲得難易度が高い傾向があります。
                                  <br />
                                  そのため、架電数、スクリプト作成、切り返しトークに注力しました。
                                </p>
                              </div>
                            </div>
                            <div className="column-box -red">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico04">
                                  <img
                                    src="/saleslink/assets/images/ico04_cases.svg"
                                    width={21}
                                    alt=""
                                  />
                                </span>
                                数字で見る、圧倒的な成果
                              </h5>
                              <div className="column-box__inner">
                                <div className="results-flex">
                                  <div className="number-wrap">
                                    <dl className="results-number">
                                      <dt className="results-number__ttl">
                                        アポ獲得数
                                      </dt>
                                      <dd className="results-number__txt">
                                        2,903件
                                      </dd>
                                    </dl>
                                    <dl className="results-number">
                                      <dt className="results-number__ttl">
                                        受注件数
                                      </dt>
                                      <dd className="results-number__txt">
                                        730件
                                      </dd>
                                    </dl>
                                  </div>
                                  <div className="rate-wrap">
                                    <dl className="results-rate">
                                      <dt className="results-rate__ttl">
                                        アポ → 受注率
                                      </dt>
                                      <dd className="results-rate__txt">
                                        ：約25%
                                      </dd>
                                    </dl>
                                  </div>
                                </div>
                                <div className="results-flex02">
                                  <div className="flex-img">
                                    <img
                                      src="/saleslink/assets/images/img_point.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex-txt">
                                    <p className="txt">
                                      業界水準を大きく上回る数値。
                                      <br />
                                      <span className="col01">
                                        高単価 × 新規 × 無形商材
                                      </span>
                                      という
                                      <br />
                                      厳しい条件下でも、この成果を実現
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="arrow">
                            <img
                              src="/saleslink/assets/images/arrow.svg"
                              alt="▼"
                            />
                          </div>
                          <div className="txt_wrap">
                            <p className="lead-txt">
                              難易度の高い商材にこそ、弊社の強みで
                              <br className="nopc" />
                              差分が出ます！
                            </p>
                            <div className="flex">
                              <div className="flex-cnts01">
                                <p>
                                  高単価で比較検討されやすい商材ほど
                                  <br className="nosp" />
                                  決裁者につながるので、リスト戦略×刺さる
                                  <br className="nosp" />
                                  スクリプト設計が成果を左右します。
                                </p>
                              </div>
                              <div className="flex-cnts02">
                                <ul className="check-list">
                                  <li>
                                    【リスト戦略】
                                    決裁者へ最短でつながるアプローチ
                                  </li>
                                  <li>
                                    【課題仮説の検討】
                                    決裁者の課題を引き出す丁寧な
                                    <br className="nopc" />
                                    ヒアリング
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="acd_close_btn more-links">
                          <span>閉じる</span>
                        </div>
                      </div>
                    </div>
                    <div className="cases-box slick-slide">
                      <h3 className="cases-box__ttl">
                        <span className="small">自社事例</span>
                        Claude Code研修プログラム
                      </h3>
                      <div className="cases-box__inner">
                        <div className="flex">
                          <div className="flex-img">
                            <img
                              src="/saleslink/assets/images/img02_cases.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-txt">
                            <h4 className="ttl">導入後の成果</h4>
                            <p className="lead">
                              アポ数・商談化率が安定し、組織の属人化が解消。
                            </p>
                            <ul className="check-list">
                              <li>
                                アポインター育成支援により全員がトップ２名と同水準まで向上
                              </li>
                              <li>
                                社内で安定したアポイント創出が完結する状態を実現
                              </li>
                              <li>
                                組織の属人化が解消し、売上の安定化に成功
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="acd_btn more-links">
                          <span>続きを見る</span>
                        </div>
                        <div className="acd_cnts more-wrap">
                          <div className="two-column">
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico02">
                                  <img
                                    src="/saleslink/assets/images/ico02_cases.svg"
                                    width={21}
                                    alt=""
                                  />
                                </span>
                                導入前の課題
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  社内にインサイドセールス部門はあるが、アポイントの質・量が安定しておらず、属人化が強いため、組織としての再現性が実現できていない。
                                </p>
                              </div>
                            </div>
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico03">
                                  <img
                                    src="/saleslink/assets/images/ico03_cases.svg"
                                    width={21}
                                    alt=""
                                  />
                                </span>
                                支援内容
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  全員が安定してアポイントを獲得できるよう勝ちパターンの分析・蓄積を実施。
                                  <br />
                                  再現性構築によって完全内製化を支援。
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="one-column">
                            <div className="column-box">
                              <h5 className="column-box__ttl">
                                <span className="ico -ico05">
                                  <img
                                    src="/saleslink/assets/images/ico05_cases.svg"
                                    width={23}
                                    alt=""
                                  />
                                </span>
                                支援結果へのコメント
                              </h5>
                              <div className="column-box__inner">
                                <p className="txt">
                                  成果が出ている人と出ていない人の差を言語化・仕組み化していただいたことでアポイント数・商談実施率ともに劇的に改善することができました。まさに組織のボトルネックを解消してもらったと感じています！
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="acd_close_btn more-links">
                          <span>閉じる</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider__nav"></div>
                </div>
              </div>
              <div className="sec-results">
                <div className="l-inner js-anime fadeIn">
                  <h3 className="sec-results__ttl">
                    <span>成果を出せる秘訣</span>
                  </h3>
                  <ul className="results-list">
                    <li>
                      誰がやっても
                      <br className="nosp" />
                      一定の成果が出る設計
                    </li>
                    <li>
                      成果が出ない人材は
                      <br className="nosp" />
                      アサインしない
                    </li>
                    <li>
                      数字をもとに
                      <br className="nosp" />
                      改善を繰り返す運用
                    </li>
                  </ul>
                  <p className="results-txt">
                    受注に繋げるための営業設計を行っています。
                    <br />
                    上位20%のアポインターのみ稼働し、
                    <br className="nopc" />
                    スクリプト・運用の徹底管理。
                  </p>
                  <p className="results-txt02">
                    感覚ではなく、数字で改善することで
                    <br className="nopc" />
                    <span className="border">成果が出る営業の仕組み</span>
                    を構築しています。
                  </p>
                </div>
              </div>
            </section>

            {/* CTA 2 */}
            <div className="cta-wrap grad03">
              <div className="cta-inner js-anime fadeIn">
                <p className="cta-txt">
                  テレアポ代行サービスに関するお問い合わせは、
                  <br className="nopc" />
                  下記よりお気軽にご連絡ください。
                </p>
                <div className="cta-flex">
                  <div className="cta-tel">
                    <a href="tel:0644007859" className="tel-link">
                      <p className="tel-num en">06-4400-7859</p>
                      <p className="tel-txt">
                        受付時間 10:00～17:00 土日祝除く
                      </p>
                      <span className="arrow nopc"></span>
                    </a>
                  </div>
                  <div className="cta-form">
                    <a
                      href="#form"
                      className="c-button c-hover smoothscroll -ico_form"
                    >
                      資料請求
                    </a>
                    <a
                      href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
                      target="_blank"
                      className="c-button c-hover -ico_consultation"
                    >
                      無料相談
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow Section */}
            <section className="sec-flow">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">稼働開始までの流れ</h2>
                </div>
                <p className="lead-txt">
                  「いきなり架電」ではなく、
                  <br className="nopc" />
                  勝てる状態を作ってからスタートします
                </p>
                <div className="flow-box__wrap">
                  <div className="flow-box -box01">
                    <p className="flow-box__subttl">
                      <span className="num en">PHASE 01</span>
                      <span className="jp">設計準備</span>
                    </p>
                    <h3 className="flow-box__ttl">現状把握と戦略の土台作り</h3>
                    <div className="step-box step01">
                      <h4 className="step-box__ttl en">STEP 01</h4>
                      <div className="step-box__inner">
                        <p className="lead">事前ヒアリングシート</p>
                        <p className="txt">
                          商材・競合優位性・KPIを整理し、
                          <br className="nosp" />
                          現状を可視化
                        </p>
                      </div>
                    </div>
                    <div className="step-box step02">
                      <h4 className="step-box__ttl en">STEP 02</h4>
                      <div className="step-box__inner">
                        <p className="lead">目標設計のお打ち合わせ</p>
                        <p className="txt letter-spacing">
                          「誰に・何を・どう売るか」を明確化し、
                          <br className="nosp" />
                          共有KPIを設定
                        </p>
                      </div>
                    </div>
                    <div className="step-box step03">
                      <h4 className="step-box__ttl en">STEP 03</h4>
                      <div className="step-box__inner">
                        <p className="lead">架電リスト設計お打ち合わせ</p>
                        <p className="txt">
                          成果を左右するリスト設計を策定し、優先条件を決定
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flow-box -box02">
                    <p className="flow-box__subttl">
                      <span className="num en">PHASE 02</span>
                      <span className="jp">実践検証</span>
                    </p>
                    <h3 className="flow-box__ttl">
                      データに基づく&quot;型&quot;の作成
                    </h3>
                    <div className="step-box step01">
                      <h4 className="step-box__ttl en">STEP 04</h4>
                      <div className="step-box__inner">
                        <p className="lead">ターゲットリスト作成</p>
                        <p className="txt">
                          無駄打ちを防ぐ、決裁者に&quot;繋がる&quot;リスト作成
                        </p>
                      </div>
                    </div>
                    <div className="step-box step02">
                      <h4 className="step-box__ttl en">STEP 05</h4>
                      <div className="step-box__inner">
                        <p className="lead">トークスクリプト作成</p>
                        <p className="txt">
                          独自ノウハウを元に「勝てる型」のスクリプト設計
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="step-box step03">
                        <h4 className="step-box__ttl en">STEP 06</h4>
                        <div className="step-box__inner">
                          <p className="lead">テストコール</p>
                          <p className="txt letter-spacing">
                            ISマネージャーによるテスト検証
                          </p>
                        </div>
                      </div>
                      <div className="step-box step03">
                        <h4 className="step-box__ttl en">STEP 07</h4>
                        <div className="step-box__inner">
                          <p className="lead">改善反映</p>
                          <p className="txt">切り返しトークの改善</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flow-box -box03">
                    <p className="flow-box__subttl">
                      <span className="num en">PHASE 03</span>
                      <span className="jp">体制構築</span>
                    </p>
                    <h3 className="flow-box__ttl">強い布陣でスタート</h3>
                    <div className="step-box step01">
                      <h4 className="step-box__ttl en">STEP 08</h4>
                      <div className="step-box__inner">
                        <p className="lead">アポインターのアサイン</p>
                        <p className="txt">
                          成果実績のある人材を厳選して
                          <br className="nosp" />
                          アサイン
                        </p>
                      </div>
                    </div>
                    <div className="step-box step02">
                      <h4 className="step-box__ttl en">STEP 09</h4>
                      <div className="step-box__inner">
                        <p className="lead">研修・ロープレ</p>
                        <p className="txt">
                          スクリプト理解とロープレで初動成果を向上
                        </p>
                      </div>
                    </div>
                    <div className="step-box step04">
                      <h4 className="step-box__ttl en">STEP 10</h4>
                      <div className="step-box__inner">
                        <p className="lead">キックオフ・稼働開始</p>
                        <p className="txt">認識を揃え、本稼働を開始</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lead-txt02">
                  <span className="col01">最短10日</span>で稼働開始可能です
                </p>
              </div>
            </section>

            {/* Step Section */}
            <section className="sec-step bgcol01">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">完全内製化までの伴走ステップ</h2>
                </div>
                <p className="lead-txt">
                  営業代行で終わらせず、
                  <br className="nopc" />
                  &quot;成果が出る営業組織&quot;を自社に残します
                </p>
                <div className="step-box__wrap">
                  <div className="step-box">
                    <h3 className="step-box__ttl">
                      <span className="num en">STEP 01</span>ナレッジ共有
                    </h3>
                    <div className="step-box__inner">
                      <p className="lead">成果物の納品・資産化</p>
                      <p className="txt">
                        社内で再現できる形でノウハウをすべて共有
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <h3 className="step-box__ttl">
                      <span className="num en">STEP 02</span>育成ノウハウ提供
                    </h3>
                    <div className="step-box__inner">
                      <p className="lead">組織・管理体制の構築</p>
                      <p className="txt">
                        アドバイザーとして自走できる組織作りを支援有
                      </p>
                    </div>
                  </div>
                  <div className="step-box">
                    <h3 className="step-box__ttl">
                      <span className="num en">STEP 03</span>完全内製化へ
                    </h3>
                    <div className="step-box__inner">
                      <p className="lead">自社だけで回る体制へ</p>
                      <p className="txt">
                        再現性ある成果プロセスを定着させ内製化完了
                      </p>
                    </div>
                  </div>
                </div>
                <p className="lead-txt02">
                  <span className="col01">
                    契約終了後も、貴社の中に
                    <br />
                    成果を出し続ける仕組みが
                    <br className="nopc" />
                    残ること
                  </span>
                  が私たちのゴールです。
                </p>
              </div>
            </section>

            {/* Flow 02 Section */}
            <section className="sec-flow02">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">ご契約までの流れ</h2>
                </div>
                <p className="lead-txt">
                  お問い合わせから最短10日で稼働開始。
                  <br />
                  イメージをご共有し、ご納得いただいた上で
                  <br className="nopc" />
                  ご契約へ進みます。
                </p>
                <div className="contract-flow">
                  <dl className="contract-flow__box">
                    <dt className="ttl">
                      <span className="num en">01</span>
                      お問い合わせ・無料相談
                    </dt>
                    <dd className="txt">
                      フォームまたはお電話にて、課題や現在の状況を簡易ヒアリングします。
                    </dd>
                  </dl>
                  <dl className="contract-flow__box">
                    <dt className="ttl">
                      <span className="num en">02</span>
                      ヒアリングお打ち合わせ
                    </dt>
                    <dd className="txt">
                      商材・ターゲット・営業課題・現在の数値感を確認し、戦い方の方向性を整理。
                    </dd>
                  </dl>
                  <dl className="contract-flow__box">
                    <dt className="ttl">
                      <span className="num en">03</span>ターゲット・トーク・
                      <br className="nosp" />
                      リストのご提案
                    </dt>
                    <dd className="txt">
                      「この内容で実際にアポ獲得が見込めるか」をご契約前に確認できます。
                    </dd>
                  </dl>
                  <dl className="contract-flow__box">
                    <dt className="ttl">
                      <span className="num en">04</span>お見積り・条件の
                      <br className="nosp" />
                      すり合わせ
                    </dt>
                    <dd className="txt">
                      体制・工数・目標に基づき、最適なプランとKPI（役割・範囲）をご提示。
                    </dd>
                  </dl>
                  <dl className="contract-flow__box">
                    <dt className="ttl">
                      <span className="num en">05</span>ご契約・稼働準備へ
                    </dt>
                    <dd className="txt">
                      内容にご納得いただいた上で契約締結。イメージのズレを最小限に防ぎます。
                    </dd>
                  </dl>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="sec-faq bgcol01">
              <div className="l-wrapper js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">よくあるご質問</h2>
                </div>
                <div className="faq-box acd">
                  <div className="faq-box__q acd_btn">
                    <p className="txt">
                      テレアポ代行の料金は
                      <br className="nopc" />
                      いくらですか？（目安・料金表）
                    </p>
                  </div>
                  <div className="faq-box__a acd_cnts">
                    <p className="txt">
                      こちらの資料をご確認ください。
                      <a href="#form" className="smoothscroll">
                        ＞資料請求
                      </a>
                    </p>
                  </div>
                </div>
                <div className="faq-box acd">
                  <div className="faq-box__q acd_btn">
                    <p className="txt">
                      通話内容の録音データを
                      <br className="nopc" />
                      自社で確認することはできますか？
                    </p>
                  </div>
                  <div className="faq-box__a acd_cnts">
                    <p className="txt">可能です。</p>
                  </div>
                </div>
                <div className="faq-box acd">
                  <div className="faq-box__q acd_btn">
                    <p className="txt">
                      対応できない業種・商材はありますか？
                    </p>
                  </div>
                  <div className="faq-box__a acd_cnts">
                    <p className="txt">
                      toC、水商売、FXなどのハイリスクハイリターンな金融商品は弊社で取り扱いません。
                    </p>
                  </div>
                </div>
                <div className="faq-box acd">
                  <div className="faq-box__q acd_btn">
                    <p className="txt">
                      実際に電話をかけるのはどんな人ですか？
                      <br className="nopc" />
                      また担当は固定で途中で変更は可能ですか？
                    </p>
                  </div>
                  <div className="faq-box__a acd_cnts">
                    <p className="txt">
                      弊社の厳しい基準をクリアした上位20%の成績を残すアポインターのみです。
                      <br />
                      アポインターは基本固定となります。変更をご希望の場合はご相談ください。
                    </p>
                  </div>
                </div>
                <div className="faq-box acd">
                  <div className="faq-box__q acd_btn">
                    <p className="txt">
                      1名だけの稼働や、
                      <br className="nopc" />
                      小規模な体制でも対応してもらえますか？
                    </p>
                  </div>
                  <div className="faq-box__a acd_cnts">
                    <p className="txt">対応可能です。ご相談ください。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <section id="form" className="sec-contact">
              <div className="js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">資料請求フォーム</h2>
                  <p className="en subttl">CONTACT</p>
                </div>
                <div className="form-wrapper">
                  <form className="form" id="contactForm" method="post" action="#">
                    <div className="form-style">
                      <div className="form-input">
                        <div className="form-input__ttl">
                          お問い合わせ種別
                          <span className="required">必須</span>
                        </div>
                        <div className="form-input__cnts">
                          <div className="radio_flex">
                            <span className="input-radio">
                              <label>
                                <input
                                  type="radio"
                                  name="type"
                                  value="資料請求"
                                />
                                <span className="list-item-label">
                                  <span className="input-radio__label">
                                    資料請求
                                  </span>
                                </span>
                              </label>
                            </span>
                            <span className="input-radio">
                              <label>
                                <input
                                  type="radio"
                                  name="type"
                                  value="無料相談"
                                />
                                <span className="list-item-label">
                                  <span className="input-radio__label">
                                    無料相談
                                  </span>
                                </span>
                              </label>
                            </span>
                            <span className="input-radio">
                              <label>
                                <input
                                  type="radio"
                                  name="type"
                                  value="その他"
                                />
                                <span className="list-item-label">
                                  <span className="input-radio__label">
                                    その他
                                  </span>
                                </span>
                              </label>
                            </span>
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            会社名<span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="text" name="companyname" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            ご担当者名<span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="text" name="name" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            部署名<span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="text" name="department" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            役職<span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="text" name="post" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            メールアドレス
                            <span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="email" name="mail" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            電話番号<span className="required">必須</span>
                          </div>
                          <div className="form-input__cnts">
                            <input type="tel" name="tel" />
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="form-input__ttl">
                            お問い合わせ内容
                            <span className="any">任意</span>
                          </div>
                          <div className="form-input__cnts">
                            <textarea name="message"></textarea>
                          </div>
                        </div>
                        <div className="agree-wrap">
                          <span className="input-checkbox">
                            <label>
                              <input
                                type="checkbox"
                                id="chkbox"
                                name="agree"
                                value="1"
                              />
                              <span className="list-item-label">
                                <span className="input-checkbox__label">
                                  「
                                  <a href="/saleslink/privacy/">
                                    プライバシーポリシー
                                  </a>
                                  」に同意して
                                  <br className="nopc" />
                                  お問い合わせする。
                                </span>
                              </span>
                            </label>
                          </span>
                        </div>
                        <div className="btn_wrap">
                          <div className="form-button">
                            <input
                              className="c-button c-hover"
                              id="submit"
                              type="submit"
                              value="入力内容を確認する"
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* Company Section */}
            <section className="sec-conmpany bgcol01">
              <div className="js-anime fadeIn">
                <div className="c-title">
                  <h2 className="ttl">会社概要</h2>
                  <p className="en subttl">COMPANY</p>
                </div>
                <div className="sec-conmpany__inner">
                  <div className="img">
                    <img
                      src="/saleslink/assets/images/img_company.jpg"
                      alt=""
                    />
                  </div>
                  <div className="l-wrapper conmpany-tbl">
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">会社名</dt>
                      <dd className="conmpany-tbl__txt">
                        株式会社ZETTAI
                      </dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">設立</dt>
                      <dd className="conmpany-tbl__txt">2026年1月9日</dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">代表取締役</dt>
                      <dd className="conmpany-tbl__txt">甲田　葵</dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">所在地</dt>
                      <dd className="conmpany-tbl__txt">
                        大阪府大阪市北区梅田
                        <br />
                        3丁目2-123イノゲート大阪10階
                      </dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">資本金</dt>
                      <dd className="conmpany-tbl__txt">5000万円</dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">従業員数</dt>
                      <dd className="conmpany-tbl__txt">
                        51人（グループ合計）
                      </dd>
                    </dl>
                    <dl className="conmpany-tbl__box">
                      <dt className="conmpany-tbl__ttl">顧問弁護士</dt>
                      <dd className="conmpany-tbl__txt">三宅法律事務所</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <div className="l-footer">
          <footer>
            <div className="f-wrapper">
              <ul className="f-nav">
                <li className="f-nav__items">
                  <a href="#contents" className="smoothscroll">
                    トップページ
                  </a>
                </li>
                <li className="f-nav__items">
                  <a href="#form" className="smoothscroll">
                    資料請求
                  </a>
                </li>
                <li className="f-nav__items">
                  <a
                    href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
                    target="_blank"
                  >
                    無料相談
                  </a>
                </li>
                <li className="f-nav__items">
                  <a href="/saleslink/privacy/">プライバシーポリシー</a>
                </li>
              </ul>
              <p className="copy">
                &copy; Sales Link All rights reserved.
              </p>
            </div>
          </footer>
        </div>

        <div className="fixed-wrap nopc">
          <div className="f-contact">
            <a href="tel:0644007859" className="f-tel">
              <p className="tel">
                <span className="jp nopc">電話相談</span>
              </p>
              <p className="tel-txt">
                受付時間 10:00～17:00{" "}
                <br className="nopc" />
                土日祝除く
              </p>
            </a>
            <a
              href="#form"
              className="button c-hover smoothscroll -ico_form"
            >
              資料請求
            </a>
            <a
              href="https://timerex.net/s/sr.owner.kanri_2e67/1977de19/"
              target="_blank"
              className="button c-hover -ico_consultation"
            >
              無料相談
            </a>
          </div>
        </div>
      </div>

      {/* Scripts */}
      <Script
        src="/saleslink/assets/js/lib/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/saleslink/assets/js/lib/jquery.inview.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/saleslink/assets/js/lib/slick.js"
        strategy="afterInteractive"
      />
      <Script
        src="/saleslink/assets/js/common/common.js"
        strategy="afterInteractive"
      />
      <Script
        src="/saleslink/assets/js/jquery.validate.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/saleslink/assets/js/messages_ja.js"
        strategy="afterInteractive"
      />
      <Script
        src="/saleslink/assets/js/contact.js"
        strategy="afterInteractive"
      />
    </>
  );
}

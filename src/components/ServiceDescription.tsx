import Image from "next/image";

const cards = [
  {
    challenge: "ゼロからの壁",
    challengeDesc:
      "プログラミング未経験者に、何から教えればいいか分からない。独学では遠回りで、実務に活かせるレベルまで到達できない。",
    stat: "未経験者の独学挫折率は70%以上と言われている",
    topImg: "/img/service/card1_top.png",
    solution: "14日間の逆算カリキュラム",
    solutionDesc:
      "「2週間後にアプリを自作できる」から逆算した短期集中カリキュラム。未経験者が最短で自走レベルに到達します。",
    bottomImg: "/img/service/card1_bottom.png",
  },
  {
    challenge: "座学で終わる壁",
    challengeDesc:
      "動画やテキスト中心の研修では「知っている」で止まり、現場では「結局使えない」と形骸化してしまう。",
    stat: "座学型AI研修の実務活用率はわずか15%",
    topImg: "/img/service/card2_top.png",
    solution: "1日目から手を動かす実践型",
    solutionDesc:
      "初日からClaude Codeでコードを書き、アプリを作り、本番デプロイまで体験。「使える」を最初から体に染み込ませます。",
    bottomImg: "/img/service/card2_bottom.png",
  },
  {
    challenge: "忘却の壁",
    challengeDesc:
      "2週間で覚えても、現場に戻ると手が止まる。独りになった瞬間、学んだはずの内容がすぐ抜け落ちてしまう。",
    stat: "研修内容の87%は30日以内に忘れられる",
    topImg: "/img/service/card3_top.png",
    solution: "研修後も続く伴走サポート",
    solutionDesc:
      "修了後も専門メンターが継続伴走。Learn → Practice → Feedback → Improveのサイクルで現場定着まで支援します。",
    bottomImg: "/img/service/card3_bottom.png",
  },
];

export default function ServiceDescription() {
  return (
    <div className="for-home">
      <div className="for-home-container sd-wrap">
        {/* ヘッドライン */}
        <div className="text-center home_serviceDescriptionText">
          未経験が2週間で<br className="sp-only" />
          「
          <span className="home_serviceDescriptionText-strong">
            自走できる
          </span>
          」までの
          <br className="sp-only" />
          全てを設計。
        </div>
        <p className="sd-subtitle">
          未経験者の育成が失敗する原因は
          <br className="pc-only" />
          「ゼロから・座学で終わる・忘却」の3つの壁。
          <br />
          CLAUDE CODE リスキリング研修は、この3つを14日間で一気通貫に突破させます。
        </p>

        {/* 3カード */}
        <div className="sd-cards">
          {cards.map((card, i) => (
            <div key={i} className="sd-card">
              {/* 上部：課題 */}
              <div className="sd-card__top">
                <span className="sd-card__label sd-card__label--issue">
                  ISSUE {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="sd-card__challenge">{card.challenge}</h3>
                <p className="sd-card__text">{card.challengeDesc}</p>
                <div className="sd-card__img">
                  <Image
                    src={card.topImg}
                    alt={card.challenge}
                    width={200}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <p className="sd-card__stat">{card.stat}</p>
              </div>

              {/* 矢印 */}
              <div className="sd-card__arrow">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* 下部：解決策 */}
              <div className="sd-card__bottom">
                <span className="sd-card__label sd-card__label--solution">
                  SOLUTION
                </span>
                <h4 className="sd-card__solution">{card.solution}</h4>
                <p className="sd-card__text">{card.solutionDesc}</p>
                <div className="sd-card__img">
                  <Image
                    src={card.bottomImg}
                    alt={card.solution}
                    width={200}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

const cards = [
  {
    challenge: "学習の課題",
    challengeDesc:
      "AIツールは増え続けるのに、何から学べばいいかわからない。独学では非効率で、実務に活かせるレベルに到達できない。",
    stat: "AI導入企業の70%が「人材不足」を課題に挙げている",
    topImg: "/img/service/card1_top.png",
    solution: "体系的カリキュラムで即戦力化",
    solutionDesc:
      "初級から上級まで段階的に学べるカリキュラムで、最短ルートでClaude Codeを使いこなせる人材に育成します。",
    bottomImg: "/img/service/card1_bottom.png",
  },
  {
    challenge: "活用の課題",
    challengeDesc:
      "ツールを導入しても、現場では「結局使えない」「何に使えばいいか分からない」と形骸化してしまう。",
    stat: "AI活用率わずか15% — 導入しても8割以上が未活用",
    topImg: "/img/service/card2_top.png",
    solution: "実務ベースのハンズオン研修",
    solutionDesc:
      "受講者自身の業務課題をテーマに、実際にClaude Codeでプロダクトを作りながら学ぶ実践形式です。",
    bottomImg: "/img/service/card2_bottom.png",
  },
  {
    challenge: "定着の課題",
    challengeDesc:
      "研修直後は使えても、日常業務に戻ると忘れてしまう。一度きりの研修ではスキルが定着しない。",
    stat: "研修内容の87%は30日以内に忘れられる",
    topImg: "/img/service/card3_top.png",
    solution: "伴走サポートで確実に定着",
    solutionDesc:
      "研修後も専門メンターが伴走。Learn → Practice → Feedback → Improve のサイクルでスキルを確実に定着させます。",
    bottomImg: "/img/service/card3_bottom.png",
  },
];

export default function ServiceDescription() {
  return (
    <div className="for-home">
      <div className="for-home-container sd-wrap">
        {/* ヘッドライン */}
        <div className="text-center home_serviceDescriptionText">
          AI開発の<br className="sp-only" />
          「
          <span className="home_serviceDescriptionText-strong">
            使いこなせない
          </span>
          」を
          <br className="sp-only" />
          解決します。
        </div>
        <p className="sd-subtitle">
          企業がAIツールを導入しても成果が出ない原因は
          <br className="pc-only" />
          「学習・活用・定着」の3つの壁。
          <br />
          CLAUDE CODE リスキリング研修は、この3つを一気通貫で解決します。
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

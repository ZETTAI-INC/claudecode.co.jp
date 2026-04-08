import Image from "next/image";

const items = [
  {
    img: "/img/recommend/recommend01.svg",
    title: "AIで<em>業務効率化</em>したい",
    desc: "日常業務をAIで自動化・効率化したいが、何から始めればいいかわからない。",
  },
  {
    img: "/img/recommend/recommend02.svg",
    title: "<em>社内DX</em>を推進したい",
    desc: "社内のDX推進を任されたが、具体的なツールやスキルが不足している。",
  },
  {
    img: "/img/recommend/recommend03.svg",
    title: "<em>エンジニア</em>の生産性を上げたい",
    desc: "開発チームの生産性を向上させ、少人数でも大きな成果を出したい。",
  },
  {
    img: "/img/recommend/recommend04.svg",
    title: "AI研修で<em>失敗</em>した経験がある",
    desc: "過去にAI研修を受けたが、実務に活かせず効果を実感できなかった。",
  },
  {
    img: "/img/recommend/recommend05.svg",
    title: "<em>非エンジニア</em>にも使わせたい",
    desc: "営業や企画など、非エンジニア職にもAI活用スキルを身につけさせたい。",
  },
  {
    img: "/img/recommend/recommend06.svg",
    title: "<em>外注コスト</em>を削減したい",
    desc: "Web制作や業務ツール開発の外注費を抑え、内製化を進めたい。",
  },
];

export default function RecommendSection() {
  return (
    <section className="recommend">
      <div className="recommend__inner">
        <p className="recommend__sub">CLAUDE CODE リスキリング研修は</p>
        <h2 className="recommend__heading">
          このようなお客様向けの<br className="sp-only" />サービスです
        </h2>
        <span className="recommend__en">Recommend</span>

        <div className="recommend__grid">
          {items.map((item, i) => (
            <div key={i} className="recommend__card">
              <div className="recommend__icon">
                <Image
                  src={item.img}
                  alt=""
                  width={140}
                  height={140}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <h3
                className="recommend__card-title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="recommend__card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

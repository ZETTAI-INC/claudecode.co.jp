const restaurants = [
  {
    name: "店舗名 サンプル 01",
    genre: "焼肉",
    area: "東京・恵比寿",
    description:
      "厳選された和牛を使用した本格焼肉店。AI予約管理で来店体験を最適化。",
  },
  {
    name: "店舗名 サンプル 02",
    genre: "イタリアン",
    area: "東京・代官山",
    description:
      "シェフ自慢の本格ナポリピッツァと自家製パスタ。週替わりメニュー配信を自動化。",
  },
  {
    name: "店舗名 サンプル 03",
    genre: "和食",
    area: "京都・祇園",
    description:
      "旬の食材を活かした懐石料理。多言語メニューと予約導線を完全自動化。",
  },
  {
    name: "店舗名 サンプル 04",
    genre: "ラーメン",
    area: "大阪・心斎橋",
    description:
      "豚骨ベースの濃厚スープが看板。SNS運用と注文オペレーションをAI化。",
  },
  {
    name: "店舗名 サンプル 05",
    genre: "カフェ",
    area: "神戸・三宮",
    description:
      "スペシャルティコーヒーと自家製スイーツ。在庫管理と発注をデータドリブン化。",
  },
  {
    name: "店舗名 サンプル 06",
    genre: "寿司",
    area: "福岡・天神",
    description:
      "江戸前寿司の伝統を守る老舗。インバウンド向けの多言語対応を実装。",
  },
];

export default function Restaurants() {
  return (
    <section className="wr-restaurants">
      <div className="wr-restaurants__inner">
        <div className="wr-restaurants__header">
          <span className="wr-restaurants__eyebrow">PARTNERS</span>
          <h2 className="wr-restaurants__title">取引飲食店のご紹介</h2>
          <p className="wr-restaurants__subtitle">
            私たちのClaude Code研修・AI開発支援を導入いただいている飲食店パートナーをご紹介します。
          </p>
        </div>

        <div className="wr-restaurants__grid">
          {restaurants.map((r, i) => (
            <article key={i} className="wr-restaurants__card">
              <div
                className="wr-restaurants__card-image"
                role="img"
                aria-label={`${r.name}の画像プレースホルダー`}
              >
                <span>IMG</span>
              </div>
              <div className="wr-restaurants__card-meta">
                <span className="wr-restaurants__card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="wr-restaurants__card-genre">{r.genre}</span>
              </div>
              <h3 className="wr-restaurants__card-name">{r.name}</h3>
              <p className="wr-restaurants__card-area">{r.area}</p>
              <p className="wr-restaurants__card-desc">{r.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

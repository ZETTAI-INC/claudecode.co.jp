type Plan = {
  name: string;
  format: string;
  target: string;
  duration: string;
  capacity: string;
  includes: string[];
  priceNote: string;
  recommended?: boolean;
};

const plans: Plan[] = [
  {
    name: "Eラーニングコース",
    format: "完全オンライン / 自己ペース",
    target: "自社のペースで全社展開したい企業",
    duration: "14日間（オンデマンド）",
    capacity: "人数上限なし",
    includes: [
      "全14日分の動画教材＆実装課題",
      "Claude Code の実務活用カリキュラム",
      "チャット質問サポート（30日間）",
      "修了テスト・修了証の発行",
    ],
    priceNote: "お見積もりください",
  },
  {
    name: "ハイブリッドコース",
    format: "対面 + オンライン併用",
    target: "対面の伴走とオンラインの柔軟性を両立したい企業",
    duration: "2週間（対面+オンライン）+ 伴走4週間",
    capacity: "5〜15名 / 回",
    includes: [
      "Eラーニング教材＋ライブ講義",
      "キックオフ・中間・最終回は対面開催",
      "平日はオンライン伴走・コードレビュー",
      "自部署の業務課題を題材にした実装演習",
      "修了後3ヶ月のチャット伴走サポート",
    ],
    priceNote: "お見積もりください",
    recommended: true,
  },
  {
    name: "完全対面コース",
    format: "講師が御社に常駐",
    target: "集中合宿型でチーム全員を一気に底上げしたい企業",
    duration: "2週間（フル対面）+ 伴走4週間",
    capacity: "5〜10名 / 回",
    includes: [
      "講師が御社オフィスに常駐し対面指導",
      "業務課題のヒアリング＆設計支援",
      "対面ワークショップ・実装伴走",
      "チームビルディング込みの集中育成",
      "修了後1ヶ月の現場フォロー",
    ],
    priceNote: "お見積もりください",
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              PRICING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            料金プラン
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            学習スタイルに応じた3つのコースをご用意しています（完全Eラーニング／対面＋オンラインのハイブリッド／完全対面）。
            <br className="hidden md:block" />
            料金は受講人数・カスタマイズ内容により変動するため、お見積もりにてご案内します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[16px] p-8 md:p-10 flex flex-col border-2 transition-all duration-300 ${
                plan.recommended
                  ? "bg-[#f0f6ff] border-[#2563eb] shadow-[0_12px_32px_rgba(37,99,235,0.15)]"
                  : "bg-[#f8fafc] border-transparent hover:border-[#2563eb] hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl md:text-2xl font-bold text-[#151515] mb-2">
                {plan.name}
              </h3>
              <div
                className={`inline-block self-start text-[11px] md:text-[12px] font-bold px-2.5 py-1 rounded-full mb-3 ${
                  plan.recommended
                    ? "bg-[#2563eb] text-white"
                    : "bg-[#e6edf5] text-[#2563eb]"
                }`}
              >
                {plan.format}
              </div>
              <p className="text-[#555] text-[13px] md:text-[14px] leading-[1.7] mb-6 min-h-[3rem]">
                {plan.target}
              </p>

              <div className="space-y-2 mb-6 pb-6 border-b border-[#e6edf5]">
                <div className="flex justify-between text-[13px] md:text-[14px]">
                  <span className="text-[#888]">期間</span>
                  <span className="text-[#151515] font-bold">{plan.duration}</span>
                </div>
                <div className="flex justify-between text-[13px] md:text-[14px]">
                  <span className="text-[#888]">受講人数</span>
                  <span className="text-[#151515] font-bold">{plan.capacity}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] md:text-[14px] text-[#444] leading-[1.7]"
                  >
                    <span className="text-[#2563eb] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="text-[#888] text-[12px] md:text-[13px] mb-2">料金</div>
                <div className="text-[#151515] font-black text-lg md:text-xl mb-4">
                  {plan.priceNote}
                </div>
                <a
                  href="/consultation/"
                  className={`block w-full py-3 rounded-full font-bold text-sm md:text-base transition-colors ${
                    plan.recommended
                      ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                      : "bg-white text-[#2563eb] border-2 border-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                  }`}
                >
                  お見積もり依頼
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#888] text-[13px] md:text-[14px] mt-10 leading-[1.8]">
          ※ 厚生労働省の人材開発支援助成金・DX分野リスキリング推進事業など、各種助成金の対象となる可能性があります。
        </p>
      </div>
    </section>
  );
}

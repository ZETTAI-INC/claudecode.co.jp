type Testimonial = {
  initial: string;
  name: string;
  role: string;
  company: string;
  before: string;
  after: string;
  quote: string;
};

// TODO: 実在の受講者コメントに差し替えてください（氏名・所属・写真含む）。
// 現状はプレースホルダです。
const testimonials: Testimonial[] = [
  {
    initial: "S",
    name: "営業企画 Sさん",
    role: "営業企画部 マネージャー",
    company: "製造業 / 従業員数 500名",
    before: "Excelでの顧客管理に限界、外注見積もりは毎回数百万",
    after: "14日後、社内向け顧客管理アプリを自力で公開",
    quote:
      "プログラミング経験ゼロでしたが、自分が毎日触っている業務だったので、何を作ればいいかは最初から見えていました。Claude Codeが実装を肩代わりしてくれるので、業務知識がそのまま武器になる感覚です。",
  },
  {
    initial: "H",
    name: "人事 Hさん",
    role: "人事部 リスキリング担当",
    company: "サービス業 / 従業員数 1,200名",
    before: "過去のAI研修は「知ってる」で終わり、現場で使われなかった",
    after: "修了者が部署ごとに業務改善ツールを量産する状態へ",
    quote:
      "これまでのAI研修と決定的に違ったのは、修了日にツールが残ることでした。受講者が上司に「今日からこれ使ってください」と渡せるので、研修投資の説明責任がクリアになりました。",
  },
  {
    initial: "Y",
    name: "経理 Yさん",
    role: "経理部 課長",
    company: "IT業 / 従業員数 300名",
    before: "月次締めの集計作業に毎月40時間、自動化したくてもエンジニア不在",
    after: "締め作業を自動化するツールを自作、月次40時間→5時間へ",
    quote:
      "エンジニアに発注する前に、自分で要件を整理しようとしてもうまく言語化できない問題がありました。Claude Codeに話しかけながら作ると、逆に要件が明確になる。これは新しい体験でした。",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            受講者の声
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            業務を一番知る社員が、14日後にどう変わったか。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8fafc] rounded-[16px] p-8 md:p-10 border border-[#e6edf5] flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e6edf5]">
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <h3 className="text-[#151515] font-bold text-[15px] md:text-base">
                    {t.name}
                  </h3>
                  <div className="text-[#555] text-[12px] md:text-[13px]">{t.role}</div>
                  <div className="text-[#888] text-[11px] md:text-[12px]">{t.company}</div>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                <div>
                  <div className="text-[#888] text-[11px] font-bold tracking-[0.1em] mb-1">
                    BEFORE
                  </div>
                  <p className="text-[#555] text-[13px] leading-[1.7]">{t.before}</p>
                </div>
                <div>
                  <div className="text-[#2563eb] text-[11px] font-bold tracking-[0.1em] mb-1">
                    AFTER（14日後）
                  </div>
                  <p className="text-[#151515] text-[13px] font-bold leading-[1.7]">
                    {t.after}
                  </p>
                </div>
              </div>

              <blockquote className="mt-auto pt-6 border-t border-[#e6edf5] text-[#444] text-[13px] md:text-[14px] leading-[1.9] italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

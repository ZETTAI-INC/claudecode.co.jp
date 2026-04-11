type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "外勤営業（フィールドセールス）",
    description:
      "お客様先への訪問・商談・クロージングまで、現場で成果を出す営業活動を代行します。",
  },
  {
    number: "02",
    title: "内勤営業（インサイドセールス）",
    description:
      "電話・メール・オンライン商談を通じて、見込み顧客の育成から商談化までを担います。",
  },
  {
    number: "03",
    title: "営業支援業務（セールスエンジニア）",
    description:
      "提案書作成・技術サポート・導入支援など、営業プロセス全般をバックアップします。",
  },
  {
    number: "04",
    title: "コールセンター&カスタマーサクセス",
    description:
      "問い合わせ対応から取引単価の向上・解約率の改善まで、顧客接点を一貫して支援します。",
  },
  {
    number: "05",
    title: "ラウンダー業務",
    description:
      "店舗巡回・陳列・販促物設置など、現場での販売促進活動を全国規模で実施します。",
  },
  {
    number: "06",
    title: "販売支援（セールスプロモーション）",
    description:
      "イベント・キャンペーン・店頭施策の企画から運営まで、ブランド価値向上を後押しします。",
  },
];

export default function RecruitKnowhow() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden font-sans">
      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            企業の持続的な成長をサポートする
            <br className="hidden md:block" />
            幅広いサービスをご用意
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            リクルートグループのノウハウを活かし、営業領域のあらゆる課題に対応します
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#f8fafc] rounded-[16px] p-8 md:p-10 relative overflow-hidden flex flex-col group border-2 border-transparent hover:border-[#2563eb] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d8ebff] group-hover:bg-[#2563eb] transition-colors duration-300"></div>

              {/* Large Background Number */}
              <div className="absolute -top-4 -right-2 text-[100px] font-black italic text-[#eef3f9] group-hover:text-[#e6f0fb] transition-colors duration-300 select-none pointer-events-none z-0 leading-none">
                {service.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-5">
                  <span className="inline-block text-[#2563eb] font-black text-sm tracking-[0.15em]">
                    SERVICE {service.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#151515] mb-4 leading-snug">
                  {service.title}
                </h3>

                <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.8] flex-1">
                  {service.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#2563eb] transition-colors duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#94a3b8] group-hover:text-white transition-colors duration-300"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="inline-block text-[#151515] text-base md:text-lg font-bold leading-[1.8] bg-[#eaf3fc] px-6 md:px-10 py-4 md:py-5 rounded-full">
            中小企業から大企業まで
            <br className="md:hidden" />
            さまざまな課題に合わせてご提案します
          </p>
        </div>
      </div>
    </section>
  );
}

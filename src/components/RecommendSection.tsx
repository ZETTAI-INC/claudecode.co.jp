import Image from "next/image";

const items = [
  {
    img: "/img/recommend/recommend01_t.png",
    title: "AIで<em>業務効率化</em>したい",
    desc: "日常業務をAIで自動化・効率化したいが、何から始めればいいかわからない。",
  },
  {
    img: "/img/recommend/recommend02_t.png",
    title: "<em>社内DX</em>を推進したい",
    desc: "社内のDX推進を任されたが、具体的なツールやスキルが不足している。",
  },
  {
    img: "/img/recommend/recommend03_t.png",
    title: "<em>エンジニア</em>の生産性を上げたい",
    desc: "開発チームの生産性を向上させ、少人数でも大きな成果を出したい。",
  },
  {
    img: "/img/recommend/recommend04_t.png",
    title: "AI研修で<em>失敗</em>した経験がある",
    desc: "過去にAI研修を受けたが、実務に活かせず効果を実感できなかった。",
  },
  {
    img: "/img/recommend/recommend05_t.png",
    title: "<em>非エンジニア</em>にも使わせたい",
    desc: "営業や企画など、非エンジニア職にもAI活用スキルを身につけさせたい。",
  },
  {
    img: "/img/recommend/recommend06_t.png",
    title: "<em>外注コスト</em>を削減したい",
    desc: "Web制作や業務ツール開発の外注費を抑え、内製化を進めたい。",
  },
];

export default function RecommendSection() {
  return (
    <section className="bg-[#eaf3fc] py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden font-sans">
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">CLAUDE CODE リスキリング研修</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight">
            このようなお客様向けのサービスです
          </h2>
        </div>

        {/* Corporate Creative Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {items.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[16px] p-8 md:p-10 relative overflow-hidden flex flex-col group border-2 border-transparent hover:border-[#2563eb] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d8ebff] group-hover:bg-[#2563eb] transition-colors duration-300"></div>
              
              {/* Large Background Number (Creative Element) */}
              <div className="absolute -top-4 -right-2 text-[100px] font-black italic text-[#f4f7fb] group-hover:text-[#f0f6fc] transition-colors duration-300 select-none pointer-events-none z-0 leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                {/* Large Transparent Icon Container */}
                <div className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] mb-8 flex items-center justify-center overflow-visible shrink-0 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                  <Image
                    src={item.img}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(37,99,235,0.12)]"
                    quality={100}
                  />
                </div>
                
                <h3
                  className="text-lg md:text-xl font-bold text-[#151515] mb-4 leading-snug [&>em]:not-italic [&>em]:text-[#2563eb] [&>em]:bg-[#eaf3fc] [&>em]:px-1.5 [&>em]:rounded"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                
                <p className="text-[#555] text-[14px] md:text-[15px] leading-[1.8] flex-1">
                  {item.desc}
                </p>

                {/* Bottom decorative arrow */}
                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center group-hover:bg-[#2563eb] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#94a3b8] group-hover:text-white transition-colors duration-300">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


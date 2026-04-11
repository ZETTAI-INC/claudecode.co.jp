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
    <section className="bg-gradient-to-b from-[#f4f9ff] to-white py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 relative pt-8">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-7xl md:text-[8rem] lg:text-[10rem] font-black text-[#e8f2fc] select-none z-0 tracking-widest whitespace-nowrap overflow-visible">
            RECOMMEND
          </span>
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[#2563eb] font-bold tracking-[0.2em] text-xs md:text-sm mb-4 border border-[#bfdbfe] shadow-sm px-5 py-2 rounded-full bg-white bg-opacity-80 backdrop-blur-sm">CLAUDE CODE リスキリング研修</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-[1.3] md:leading-tight">
              このようなお客様向けの<br className="block sm:hidden" />サービスです
            </h2>
          </div>
        </div>

        {/* Ultra-Clean Corporate Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 pb-16">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center px-2 sm:px-4"
            >
              
              {/* Minimalist Icon Container */}
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] mb-6 md:mb-8 flex items-center justify-center bg-white rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-50 group-hover:shadow-[0_10px_35px_rgba(37,99,235,0.08)] group-hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={item.img}
                  alt=""
                  width={110}
                  height={110}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              
              <h3
                className="text-[1.1rem] md:text-xl font-bold text-[#222] mb-3 md:mb-4 leading-snug [&>em]:not-italic [&>em]:text-[#2563eb]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              
              <p className="text-[#666] text-[13.5px] md:text-[15px] leading-[1.8] max-w-[90%] md:max-w-full">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

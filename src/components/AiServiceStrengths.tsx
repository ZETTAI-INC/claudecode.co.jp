import React from "react";
import { renderWithTerms } from "@/components/renderWithTerms";

const POINTS = [
  {
    num: "01",
    title: "2週間で「社内に実装者を残す」",
    list: [
      "外注に出していた業務ツール開発を、社内メンバーが自走で完遂できる状態まで引き上げ",
      "研修後に残るのは知識ではなく、本番リリース済みの成果物"
    ]
  },
  {
    num: "02",
    title: "非エンジニアを実装者に変える",
    list: [
      "営業・企画・事務職でも、業務ツールを自力で設計・実装・公開できるレベルまで到達",
      "高騰するAI人材採用に依存せず、既存社員で内製体制を構築"
    ]
  },
  {
    num: "03",
    title: "修了後も続く伴走サポート",
    list: [
      "研修修了後に手が止まらないよう、現場定着まで専門メンターが継続支援",
      "学んだ内容を「使い続けられる」状態まで仕組み化"
    ]
  }
];

const AiServiceStrengths: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-24 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative">
          <span className="text-[13px] md:text-[14px] font-bold text-[#2563eb] tracking-[0.25em] mb-3 opacity-90 uppercase">
            Common Struggles
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black text-[#29034f] tracking-wide relative pb-5">
            こんなお悩みございませんか？
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-gradient-to-r from-[#2563eb] to-[#ff5c00] rounded-full opacity-80"></div>
          </h2>
        </div>

        {/* --- Top Area: Struggles (Desktop Grid, Mobile Flex) --- */}
        <div className="relative w-full max-w-5xl mx-auto mb-16">
          
          {/* Background bubbles decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 400" fill="none">
              <circle cx="150" cy="100" r="15" fill="#a0b0c0" />
              <circle cx="300" cy="250" r="8" fill="#a0b0c0" />
              <circle cx="800" cy="120" r="20" fill="#a0b0c0" />
              <circle cx="700" cy="300" r="12" fill="#a0b0c0" />
              <circle cx="200" cy="350" r="25" fill="#e0e0e0" />
              <circle cx="850" cy="300" r="30" fill="#e0e0e0" />
              <circle cx="500" cy="80" r="10" fill="#e0e0e0" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 relative z-10">
            
            {/* Left Column (2 bubbles) */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {/* Bubble: Left Top */}
              <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">{renderWithTerms("内製化が進まない")}</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  {renderWithTerms("PoCは作れても、本番運用まで持っていける人材が社内にいない")}
                </p>
                {/* Tail pointing towards center-right */}
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#f0f0f0]"></div>
              </div>

              {/* Bubble: Left Bottom */}
              <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">属人化が止まらない</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  AI活用が一部社員に依存、退職リスクで事業が止まりかねない
                </p>
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-[#e8e8e8]"></div>
              </div>
            </div>

            {/* Center Column (1 bubble + Human SVG) */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-[32%]">
              {/* Bubble: Center Top */}
              <div className="bg-[#ebebeb] rounded-xl p-5 relative shadow-sm w-full">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">外注費が膨らむ一方</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  軽微な機能追加でも毎回外注、年間コストが事業計画を圧迫する
                </p>
                <div className="hidden lg:block absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#ebebeb]"></div>
              </div>

              {/* Human & Scribble Icon */}
              <div className="relative w-48 h-48 flex items-center justify-center mt-4">
                {/* Scribble background */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#b3b3b3" strokeWidth="3" className="w-full h-full opacity-70">
                    <path d="M50 20 C20 10, 10 40, 30 60 C50 80, 80 70, 70 40 C60 10, 20 20, 30 50 C40 80, 80 50, 50 20 Z" />
                    <path d="M30 30 C10 50, 40 80, 70 60 C100 40, 70 10, 50 30 C30 50, 50 90, 80 60" />
                    <circle cx="50" cy="50" r="40" stroke="#d9d9d9" strokeDasharray="5,5" />
                  </svg>
                </div>
                {/* Human Silhouette (Frustrated/Confused pose) */}
                <div className="relative z-10 text-black">
                  <svg width="80" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="4" r="3" />
                    <path d="M12 8 C8 8, 5 10, 4 13 L8 14 L8 22 L11 22 L11 16 L13 16 L13 22 L16 22 L16 14 L20 13 C19 10, 16 8, 12 8 Z" />
                    <path d="M4 13 L1 10 M20 13 L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column (2 bubbles) */}
            <div className="flex flex-col gap-6 w-full lg:w-[32%]">
              {/* Bubble: Right Top */}
              <div className="bg-[#f0f0f0] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">AI人材が採用できない</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  年収レンジを上げても採れない、採れても定着しない
                </p>
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#f0f0f0]"></div>
              </div>

              {/* Bubble: Right Bottom */}
              <div className="bg-[#e8e8e8] rounded-xl p-5 relative shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-3 text-[#333]">{renderWithTerms("PoCで止まる")}</h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  生成AIの検証は進むが、業務に落ちる実装まで到達しない
                </p>
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-[#e8e8e8]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* --- Middle Banner: Solution Statement --- */}
        <div className="relative bg-[#1e5eb0] text-white py-6 md:py-8 text-center text-xl md:text-3xl font-bold tracking-wide shadow-md">
          そのお悩み、私たちが解決します！
          {/* Downward Triangle */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-[#1e5eb0]"></div>
        </div>

        {/* --- Bottom Area: 3 Points --- */}
        <div className="pt-20 lg:pt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative px-2">
          {POINTS.map((point, index) => (
            <div key={index} className="flex flex-col relative z-10 pt-8">
              
              {/* Giant Background Number */}
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[100px] lg:text-[130px] font-bold text-[#e1effc] opacity-60 pointer-events-none tracking-tighter leading-none -z-10 font-sans">
                {point.num}
              </div>

              {/* POINT! Text */}
              <div className="text-center text-[#2563eb] text-xl font-bold italic tracking-widest mb-4">
                POINT!
              </div>

              {/* Point Title */}
              <h3 className="text-center text-[#333] text-[17px] md:text-lg font-bold mb-6 min-h-[3rem] flex items-center justify-center relative">
                <span className="relative z-10 pb-2 border-b-2 border-[#b3d4ff]">
                  {point.title}
                </span>
              </h3>

              {/* Point List */}
              <ul className="space-y-4">
                {point.list.map((item, i) => (
                  <li key={i} className="flex items-start text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                    <span className="text-[#2563eb] font-bold mr-2 mt-0.5">•</span>
                    <span>{renderWithTerms(item)}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AiServiceStrengths;

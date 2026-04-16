"use client";

export default function FitAssessment() {
  const goodFit = [
    {
      text: "定型業務や属人化業務が多い",
      detail: "Claude Code で自動化・ツール化しやすい領域が明確にある",
    },
    {
      text: "対象部署が1つに絞れている",
      detail: "まず1チームで成功事例をつくり、横展開する段階がある",
    },
    {
      text: "現場責任者がいる",
      detail: "研修後の定着と改善を推進できるキーパーソンが社内にいる",
    },
    {
      text: "小〜中規模の社内ツールから始められる",
      detail: "14日間で本番公開可能なスコープに設定できる",
    },
  ];

  const badFit = [
    {
      text: "基幹システムをいきなり内製化したい",
      detail: "14日間の研修で基幹刷新はスコープ外です",
    },
    {
      text: "受講候補者が決まっていない",
      detail: "人選が未定だと研修設計とゴール設定ができません",
    },
    {
      text: "セキュリティ要件が未整理",
      detail: "情シス・法務との事前合意がないと契約後に止まります",
    },
    {
      text: "何を作るか決まっていない",
      detail: "課題が見えていない段階では研修効果が薄くなります",
    },
  ];

  return (
    <section className="fit-ai relative bg-[#030712] py-16 md:py-28 px-4 sm:px-6 font-sans overflow-hidden">

      {/* Animated grid */}
      <div className="fit-ai__grid absolute inset-0" />

      {/* Scan line */}
      <div className="fit-ai__scanline absolute left-0 w-full h-[2px]" />

      {/* Floating particles */}
      <div className="fit-ai__particle fit-ai__particle--1" />
      <div className="fit-ai__particle fit-ai__particle--2" />
      <div className="fit-ai__particle fit-ai__particle--3" />
      <div className="fit-ai__particle fit-ai__particle--4" />
      <div className="fit-ai__particle fit-ai__particle--5" />

      {/* Glow orbs */}
      <div className="absolute top-[-200px] left-[10%] w-[500px] h-[500px] rounded-full bg-[#f97316] opacity-[0.03] blur-[150px]" />
      <div className="absolute bottom-[-150px] right-[10%] w-[400px] h-[400px] rounded-full bg-[#06b6d4] opacity-[0.05] blur-[130px]" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-5 py-2 rounded-full border border-[#f97316]/20 bg-[#f97316]/[0.04]">
            <span className="fit-ai__pulse w-2 h-2 rounded-full bg-[#f97316]" />
            <span className="text-[#f97316] font-mono font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
              Fit Check
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-white leading-[1.4] tracking-tight mb-4">
            向いている会社、
            <br className="md:hidden" />
            向いていない会社
          </h2>
          <p className="text-[#64748b] text-base md:text-lg leading-[1.9] font-mono text-sm">
            成約率を上げるために「誰でも歓迎」はやめました。
            <br className="hidden md:block" />
            お互いの時間を無駄にしないための適合条件です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Good Fit */}
          <div className="fit-ai__card fit-ai__card--good relative rounded-[16px] p-6 md:p-8">
            {/* Animated border glow */}
            <div className="fit-ai__border-glow fit-ai__border-glow--orange absolute inset-0 rounded-[16px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="relative">
                  <span className="fit-ai__pulse-ring w-11 h-11 rounded-full bg-[#f97316] text-white flex items-center justify-center text-lg font-black">
                    &#10003;
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  向いている会社
                </h3>
                <span className="ml-auto font-mono text-[10px] text-[#f97316]/60 tracking-widest">MATCH</span>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li
                    key={item.text}
                    className="fit-ai__item group relative bg-[#f97316]/[0.03] border border-[#f97316]/10 rounded-[10px] p-4 transition-all duration-500 hover:border-[#f97316]/40 hover:bg-[#f97316]/[0.08] hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[#f97316]/40 mt-1 tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-bold text-white text-[14px] md:text-[15px] mb-1">
                          {item.text}
                        </p>
                        <p className="text-[#64748b] text-[12px] md:text-[13px] leading-[1.7]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bad Fit */}
          <div className="fit-ai__card fit-ai__card--bad relative rounded-[16px] p-6 md:p-8">
            <div className="fit-ai__border-glow fit-ai__border-glow--gray absolute inset-0 rounded-[16px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-11 h-11 rounded-full bg-[#1e293b] border border-[#334155] text-[#64748b] flex items-center justify-center text-lg font-black">
                  &#10005;
                </span>
                <h3 className="text-xl md:text-2xl font-black text-[#94a3b8] tracking-tight">
                  向いていない会社
                </h3>
                <span className="ml-auto font-mono text-[10px] text-[#475569]/60 tracking-widest">MISMATCH</span>
              </div>
              <ul className="space-y-3">
                {badFit.map((item, i) => (
                  <li
                    key={item.text}
                    className="fit-ai__item group relative bg-white/[0.02] border border-[#1e293b] rounded-[10px] p-4 transition-all duration-500 hover:border-[#334155] hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[#334155] mt-1 tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-bold text-[#94a3b8] text-[14px] md:text-[15px] mb-1">
                          {item.text}
                        </p>
                        <p className="text-[#475569] text-[12px] md:text-[13px] leading-[1.7]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#64748b] text-[13px] md:text-[15px] leading-[1.8]">
            条件に当てはまるかわからない場合も、30分の適合診断で判断できます。
          </p>
        </div>
      </div>
    </section>
  );
}

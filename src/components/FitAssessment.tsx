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
    <section className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              FIT CHECK
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            向いている会社、
            <br className="md:hidden" />
            向いていない会社
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            成約率を上げるために「誰でも歓迎」はやめました。
            <br className="hidden md:block" />
            お互いの時間を無駄にしないための適合条件です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-[20px] border-2 border-[#2563eb] p-6 md:p-8 shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-lg font-black">
                &#10003;
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#151515]">
                向いている会社
              </h3>
            </div>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li
                  key={item.text}
                  className="bg-[#eaf3ff] rounded-[12px] p-4"
                >
                  <p className="font-bold text-[#151515] text-[14px] md:text-[16px] mb-1">
                    {item.text}
                  </p>
                  <p className="text-[#555] text-[12px] md:text-[13px] leading-[1.7]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[20px] border-2 border-[#e6edf5] p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-[#ef4444] text-white flex items-center justify-center text-lg font-black">
                &#10005;
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#151515]">
                向いていない会社
              </h3>
            </div>
            <ul className="space-y-4">
              {badFit.map((item) => (
                <li
                  key={item.text}
                  className="bg-[#fef2f2] rounded-[12px] p-4"
                >
                  <p className="font-bold text-[#151515] text-[14px] md:text-[16px] mb-1">
                    {item.text}
                  </p>
                  <p className="text-[#555] text-[12px] md:text-[13px] leading-[1.7]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#555] text-[13px] md:text-[15px] leading-[1.8]">
            条件に当てはまるかわからない場合も、30分の適合診断で判断できます。
          </p>
        </div>
      </div>
    </section>
  );
}

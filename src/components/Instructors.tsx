type Instructor = {
  initial: string;
  name: string;
  role: string;
  background: string;
  expertise: string[];
};

// TODO: 実在の講師情報に差し替えてください（氏名・経歴・写真）。
// 現状はプレースホルダです。
const instructors: Instructor[] = [
  {
    initial: "T",
    name: "Lead Instructor A",
    role: "チーフインストラクター",
    background:
      "大手SIer出身。AIを活用した業務ツール内製化支援を100社以上経験。",
    expertise: ["Claude Code", "業務要件設計", "社内展開"],
  },
  {
    initial: "K",
    name: "Lead Instructor B",
    role: "シニアインストラクター",
    background:
      "非エンジニア出身。営業職からリスキリングでClaude活用の実装者に転身した経験を持つ。",
    expertise: ["非エンジニア育成", "業務アプリ設計", "定着支援"],
  },
  {
    initial: "M",
    name: "Lead Instructor C",
    role: "メンター統括",
    background:
      "修了後の伴走メンタリングを統括。現場定着まで支援する仕組みを設計。",
    expertise: ["現場伴走", "コードレビュー", "運用設計"],
  },
];

export default function Instructors() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block"></span>
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              INSTRUCTORS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-6">
            現場で実装してきた
            <br className="hidden md:block" />
            講師陣が教えます
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            全講師が自ら業務ツールを内製化してきた実務経験者です。
            <br className="hidden md:block" />
            教科書通りではなく、現場で詰まるポイントを熟知しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className="bg-white rounded-[16px] p-8 md:p-10 border border-[#e6edf5] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.08)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-black text-3xl flex-shrink-0">
                  {inst.initial}
                </div>
                <div>
                  <div className="text-[#2563eb] text-[12px] font-bold tracking-[0.1em] mb-1">
                    {inst.role}
                  </div>
                  <h3 className="text-[#151515] font-bold text-lg md:text-xl">
                    {inst.name}
                  </h3>
                </div>
              </div>

              <p className="text-[#555] text-[13px] md:text-[14px] leading-[1.8] mb-6 min-h-[5rem]">
                {inst.background}
              </p>

              <div className="flex flex-wrap gap-2">
                {inst.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-[#eaf3ff] text-[#2563eb] text-[12px] font-bold px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

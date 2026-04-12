import Image from "next/image";

interface CaseStudy {
  image: string;
  title: string;
  company: string;
  industry: string;
  scale: string;
  department: string;
  role: string;
  challenge: string;
  built: string;
  daysToLaunch: string;
  impact: string;
  tools: string;
  constraints: string;
}

const cases: CaseStudy[] = [
  {
    image: "/img/uploads/2024/03/ab7c30289fa514dce543f51f60922ae7.jpg",
    title: "開発部門100名がClaude Codeを習得し、開発工数50%削減を達成",
    company: "大手製造業A社",
    industry: "製造業",
    scale: "従業員800名（対象部門100名）",
    department: "生産管理部",
    role: "生産管理担当者（非エンジニア）",
    challenge:
      "Excel台帳による工程管理が属人化し、担当者の退職リスクが経営課題に。外注見積もりは1,200万円・6ヶ月。",
    built: "工程進捗ダッシュボード（Webアプリ）",
    daysToLaunch: "12日",
    impact: "開発工数50%削減、年間外注費▲800万円相当の内製化を実現",
    tools: "Claude Code / Next.js / Supabase / Render",
    constraints:
      "社内ネットワークのみ。実データはマスク済みを使用、本番切り替え時に情シス承認を経て接続。",
  },
  {
    image: "/img/uploads/2024/02/c3e59afb1b9e8b9302dadc9db83a8df4.png",
    title: "納品スピード3倍を達成したSIerのAIペアプログラミング導入",
    company: "SIer B社",
    industry: "IT・通信",
    scale: "従業員200名（対象チーム15名）",
    department: "受託開発チーム",
    role: "SE・プログラマー",
    challenge:
      "案件ごとにコード品質がバラつき、レビュー工数が開発時間の30%を占有。納品遅延が常態化。",
    built: "AIコードレビュー＆テスト自動生成ツール",
    daysToLaunch: "10日",
    impact: "納品速度3倍、レビュー工数60%削減、バグ発生率40%低下",
    tools: "Claude Code / GitHub Actions / Jest",
    constraints:
      "顧客コードは一切使用せず、社内プロジェクトのコードのみで研修を実施。NDA締結済み。",
  },
  {
    image: "/img/uploads/2024/02/13cf17df8b0af8de2e099ea6c60f09d5.png",
    title: "非エンジニア中心のスタートアップが業務効率化70%を実現",
    company: "スタートアップC社",
    industry: "SaaS",
    scale: "従業員30名（全社参加）",
    department: "事業推進部",
    role: "営業企画・CS・マーケティング担当者",
    challenge:
      "Googleスプレッドシートとメールで回していた顧客管理が限界。ツール導入予算は月10万円以内。",
    built: "顧客ステータス管理アプリ＆自動通知Bot",
    daysToLaunch: "9日",
    impact: "業務効率化70%、対応漏れゼロ化、月間20時間の手作業を自動化",
    tools: "Claude Code / Next.js / Supabase / Slack API",
    constraints:
      "SaaSのため顧客データは完全マスク。テストデータ100件で開発し、本番切り替え時にCTO承認。",
  },
];

export default function CaseStudies() {
  return (
    <section id="frontSectionCaseStudies" className="bg-[#f8fafc] py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#2563eb] font-bold tracking-[0.1em] text-sm md:text-base">
              CASE STUDIES
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-[#151515] leading-[1.4] tracking-tight mb-4">
            導入事例
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-[1.9]">
            「すごかった」ではなく、再現条件を公開します。
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {cases.map((c) => (
            <article
              key={c.company}
              className="bg-white rounded-[20px] overflow-hidden border border-[#e6edf5] shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[280px] lg:w-[320px] flex-shrink-0">
                  <div className="relative h-[200px] md:h-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="flex-1 p-5 md:p-7">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] md:text-[12px] font-bold text-white bg-[#2563eb] px-2.5 py-1 rounded-full">
                      {c.industry}
                    </span>
                    <span className="text-[11px] md:text-[12px] font-bold text-[#2563eb] bg-[#eaf3ff] px-2.5 py-1 rounded-full">
                      {c.scale}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-[#151515] mb-4 leading-[1.6]">
                    {c.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[12px] md:text-[13px]">
                    <div className="flex gap-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">対象部署</span>
                      <span className="text-[#151515] font-medium">{c.department}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">受講者職種</span>
                      <span className="text-[#151515] font-medium">{c.role}</span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">元の課題</span>
                      <span className="text-[#151515] font-medium">{c.challenge}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">作ったもの</span>
                      <span className="text-[#151515] font-bold">{c.built}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">公開日数</span>
                      <span className="text-[#ff5c00] font-black">{c.daysToLaunch}</span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">成果</span>
                      <span className="text-[#2563eb] font-bold">{c.impact}</span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">使用環境</span>
                      <span className="text-[#151515] font-medium">{c.tools}</span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span className="text-[#888] flex-shrink-0 w-[5.5em]">制約・前提</span>
                      <span className="text-[#555] text-[11px] md:text-[12px] leading-[1.7]">
                        {c.constraints}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

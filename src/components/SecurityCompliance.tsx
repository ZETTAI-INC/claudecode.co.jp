export default function SecurityCompliance() {
  const items = [
    {
      icon: "storage",
      title: "扱うデータの範囲",
      description:
        "研修中に扱うのは、対象部署の業務データ（マスク済み or テストデータ）です。機密データを直接使う場合は、事前に御社セキュリティポリシーに沿った取り扱い方法を合意します。",
    },
    {
      icon: "visibility_off",
      title: "実データの扱い",
      description:
        "原則としてマスク済みデータまたはテストデータを使用します。実データを使う必要がある場合は、NDA締結のうえ、アクセス範囲と保持期間を書面で合意します。",
    },
    {
      icon: "admin_panel_settings",
      title: "アカウント・権限の管理",
      description:
        "Claude Code のアカウントは受講者ごとに個別発行。研修終了後の権限引き継ぎ・削除手順も事前に定義します。御社のSSO/IdP連携にも対応可能です。",
    },
    {
      icon: "cloud_upload",
      title: "デプロイ先の前提",
      description:
        "デプロイ先は御社の既存環境（AWS / GCP / Azure / オンプレミス）を前提とします。閉域網での実施にも対応。デプロイ先が未定の場合は、ヒアリング時に一緒に検討します。",
    },
    {
      icon: "laptop_mac",
      title: "端末・OS",
      description:
        "推奨環境は Mac です。Windowsでも受講可能ですが、WSL2 または Git for Windows の事前セットアップが必要で、環境起因のエラーが起きやすいため非推奨です。メモリは16GB以上推奨、32GBあるとより安定します。",
    },
    {
      icon: "build",
      title: "御社側の事前準備",
      description:
        "必要な準備は3つだけです。(1) 受講者のPC・ネットワーク環境、(2) 対象業務のヒアリング協力、(3) デプロイ先の環境情報。それ以外はすべて当社側で準備します。",
    },
    {
      icon: "gavel",
      title: "情シス・法務の確認事項",
      description:
        "導入前チェックリストをご用意しています。データ保持ポリシー、外部API通信先一覧、ログ取得範囲、契約終了後のデータ削除手順など、稟議に必要な情報をまとめてお渡しします。",
    },
  ];

  return (
    <section className="bg-[#151515] py-16 md:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-5 bg-[#2563eb] block" />
            <span className="text-[#60a5fa] font-bold tracking-[0.1em] text-sm md:text-base">
              SECURITY & OPERATIONS
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black text-white leading-[1.4] tracking-tight mb-4">
            セキュリティと運用体制
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg leading-[1.9]">
            現場が前向きでも、ここが不透明だと稟議で止まります。
            <br className="hidden md:block" />
            情シス・法務が確認すべき項目を先に開示します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#1e293b] rounded-[16px] p-5 md:p-7 border border-[#334155] hover:border-[#2563eb] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="material-icons-outlined text-[#60a5fa] text-2xl">
                  {item.icon}
                </span>
                <h3 className="text-base md:text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#94a3b8] text-[13px] md:text-[14px] leading-[1.8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#94a3b8] text-[13px] md:text-[14px] mb-4">
            金融・医療・公共など機密性の高い業界での導入実績があります
          </p>
          <a
            href="/consultation/"
            className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold text-sm md:text-base px-6 py-3 rounded-full hover:bg-[#1d4ed8] transition-colors"
          >
            導入前チェックリストを請求する
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path
                d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z"
                fill="white"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

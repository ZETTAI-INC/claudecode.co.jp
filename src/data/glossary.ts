export type GlossaryEntry = {
  label: string;
  reading?: string;
  description: string;
  example?: string;
};

export const GLOSSARY: Record<string, GlossaryEntry> = {
  RAG: {
    label: "RAG",
    reading: "ラグ／検索拡張生成",
    description:
      "自社のマニュアルや社内データをAIに参照させて、社内事情に沿った回答を作らせる仕組みです。AIが社外の一般情報だけでなく、御社の独自情報をもとに答えられるようになります。",
    example: "社内規程PDFを読ませて『有給の取り方』を社員向けに自動回答",
  },
  RPA: {
    label: "RPA",
    reading: "ロボティック・プロセス・オートメーション",
    description:
      "パソコン上の定型作業（コピー&ペースト・転記・集計など）をソフトに代行させる自動化技術です。",
    example: "毎朝の売上データ集計とメール送信を自動実行",
  },
  API: {
    label: "API",
    reading: "エーピーアイ",
    description:
      "外部のサービスやシステムとAIをつなぐ『接続口』のことです。これがあると、SlackやSalesforce、社内システムにAIを組み込めます。",
    example: "AIが自動でSlackに通知を送る／kintoneに記録する",
  },
  SDK: {
    label: "SDK",
    reading: "エスディーケー／ソフトウェア開発キット",
    description:
      "アプリやサービスにAIを組み込むための部品セットです。エンジニアが自社サービスにAIを埋め込む際に使います。",
  },
  CLI: {
    label: "CLI",
    reading: "シーエルアイ／コマンドライン操作",
    description:
      "マウスではなく文字（コマンド）でコンピュータを操作する画面のことです。Claude Codeはこの画面で動きます。",
  },
  IDE: {
    label: "IDE",
    reading: "アイディーイー／統合開発環境",
    description:
      "プログラマがコードを書くための専用エディタです。代表例はVS Code、Cursorなど。",
  },
  MCP: {
    label: "MCP",
    reading: "エムシーピー",
    description:
      "AIを社内ツール（Slack、Notion、Salesforceなど）と安全につなぐための共通規格です。1度つなげば、いろいろなAIから同じツールを呼び出せます。",
  },
  SSO: {
    label: "SSO / IdP連携",
    reading: "シングルサインオン",
    description:
      "社員が1度のログインで複数のサービスを使えるようにする仕組みです。Microsoft 365 や Google Workspace 等の認証基盤(IdP)と連携できます。情シス部門にとっての標準的な対応事項です。",
  },
  NDA: {
    label: "NDA",
    reading: "秘密保持契約",
    description:
      "業務で知り得た情報を外部に漏らさないことを書面で約束する契約です。実データを扱う研修の前に締結します。",
  },
  SIer: {
    label: "SIer",
    reading: "エスアイヤー",
    description:
      "システムインテグレーター。企業のシステム開発を請け負うIT企業のことです（例：NTTデータ、富士通、アクセンチュア等）。",
  },
  CodeInterpreter: {
    label: "Code Interpreter",
    reading: "コード・インタープリター",
    description:
      "ChatGPT が表計算やデータ分析を裏でPythonコードを書いて実行する機能です。グラフ作成や集計が得意。",
  },
  Workspace: {
    label: "@workspace",
    reading: "アット・ワークスペース",
    description:
      "GitHub Copilot の機能で、開いているプロジェクト全体をAIに理解させて回答させる指示記号です。",
  },
  Cowork: {
    label: "Cowork",
    reading: "コワーク（実務伴走型）",
    description:
      "弊社のサービス区分の1つ。研修終了後も、実務の業務改善・ツール開発を講師が一緒に伴走するプランです。",
  },
  CI: {
    label: "CI連携",
    reading: "シーアイ／継続的インテグレーション",
    description:
      "コードの変更を自動でチェック・ビルド・テストして本番に反映する仕組みです。エンジニアの定型作業を自動化できます。",
  },
  Cron: {
    label: "cron",
    reading: "クロン",
    description:
      "決まった時刻に自動で処理を動かす仕組み（例：毎朝9時にレポートを生成）。",
  },
  Deploy: {
    label: "デプロイ",
    description:
      "作ったアプリやツールを、社内外の人が使える『本番環境』に上げて公開することです。",
    example: "社内ポータルにダッシュボードを配置して誰でも見られる状態にする",
  },
  Workflow: {
    label: "ワークフロー",
    description:
      "業務の一連の流れ。『受注→承認→請求→入金確認』のように、手順のつながりを指します。AIでこの流れ全体を自動化できます。",
  },
  Requirement: {
    label: "要件定義",
    description:
      "作るシステムや業務の『何をどこまでやるか』を最初に整理する工程です。ここが曖昧だと手戻りが発生します。",
  },
  Stack: {
    label: "技術スタック",
    description:
      "そのシステムを作るために使う技術の組み合わせ（プログラミング言語・データベース・クラウド基盤など）を指します。",
    example: "Next.js / Supabase / Vercel の3点セット",
  },
  Debug: {
    label: "デバッグ",
    description:
      "プログラムの不具合（バグ）を見つけて直す作業です。AIは原因特定と修正案の提示を自動化します。",
  },
  Prompt: {
    label: "プロンプト",
    description:
      "AIに対する指示文のことです。『何を』『どう』出力してほしいかを自然言語で書く設計が成果を左右します。",
  },
  Insourcing: {
    label: "内製化",
    description:
      "これまで外注していた開発・運用を社内で自前で行える状態にすることです。スピードとコスト両方で効きます。",
  },
  OnPrem: {
    label: "オンプレミス",
    reading: "オンプレ",
    description:
      "自社の建物や自社データセンター内にあるサーバで運用する形態。クラウド（AWS/GCP等）に対する対義語です。",
  },
  Closed: {
    label: "閉域網",
    description:
      "インターネットと切り離された専用のネットワーク。金融や公共で使われ、外部からアクセスできない分セキュリティが高くなります。",
  },
  SaaS: {
    label: "SaaS",
    reading: "サース／サービスとしてのソフトウェア",
    description:
      "インストール不要でブラウザから使えるソフトウェアのことです。Salesforce、Slack、Notion等が該当。",
  },
  License: {
    label: "ライセンス",
    description:
      "ソフトウェアやAIを使う権利そのものを指します。1ライセンス＝1アカウント分、という単価で販売されるのが一般的です。",
  },
  Seat: {
    label: "シート",
    description:
      "1人分の利用枠を『1シート』と数える単位。『10シート契約』＝10人まで使える、の意味です。",
  },
  Agent: {
    label: "AIエージェント",
    description:
      "指示された目的に向かって自分で計画・実行できるAIのこと。従来の『質問→回答』型と違い、ファイル操作や複数ツールの連携まで自律的に行います。",
  },
  Batch: {
    label: "バッチ処理",
    description:
      "まとまった量のデータを、時刻指定でまとめて処理することです（例：毎晩1時に全店売上を集計）。",
  },
  PoC: {
    label: "PoC",
    reading: "ピーオーシー／概念実証",
    description:
      "新しい技術が本当に業務で使えるかを、小規模な試作で検証する取り組みです。全社導入前の安全策。",
  },
  Reskilling: {
    label: "リスキリング",
    description:
      "既存社員に新しいスキル（特にAI・デジタル領域）を習得させる取り組みのこと。国も助成金で後押ししています。",
  },
  ROI: {
    label: "ROI",
    reading: "アールオーアイ／投資対効果",
    description:
      "かけた費用に対して、どれだけ効果（コスト削減・売上増）があったかを示す指標です。",
  },
  KPI: {
    label: "KPI",
    reading: "ケーピーアイ／重要業績評価指標",
    description:
      "目標達成の度合いを測るために継続的に追う指標（例：月間問合せ件数、削減時間）。",
  },
  PDCA: {
    label: "PDCA",
    description:
      "Plan（計画）→ Do（実行）→ Check（検証）→ Act（改善）の繰り返しによる業務改善サイクルのこと。",
  },
  Dashboard: {
    label: "ダッシュボード",
    description:
      "売上・進捗・KPIなどの指標を、一画面でまとめて見られるようにした画面のことです。",
  },
  Backend: {
    label: "バックエンド",
    description:
      "ユーザーから見えない、サーバー側で動く部分（データ処理・ログイン認証など）を指します。",
  },
  Frontend: {
    label: "フロントエンド",
    description:
      "ユーザーがブラウザで実際に見て操作する、画面側の部分を指します。",
  },
  PairProg: {
    label: "ペアプログラミング",
    description:
      "2人1組でコードを書く開発手法。1人が書き、もう1人がレビューしながら進めます。AIがこの相方役を担うこともあります。",
  },
  CodeReview: {
    label: "コードレビュー",
    description:
      "書かれたコードを他のエンジニアがチェックして品質を担保する工程です。AIが一次レビューを代行します。",
  },
  Repository: {
    label: "リポジトリ",
    description:
      "ソースコードをバージョン管理しながら保管する置き場所のこと（GitHub等）。変更履歴が全て残ります。",
  },
};

export type GlossaryKey =
  | "RAG"
  | "RPA"
  | "API"
  | "SDK"
  | "CLI"
  | "IDE"
  | "MCP"
  | "SSO"
  | "NDA"
  | "SIer"
  | "CodeInterpreter"
  | "Workspace"
  | "Cowork"
  | "CI"
  | "Cron"
  | "Deploy"
  | "Workflow"
  | "Requirement"
  | "Stack"
  | "Debug"
  | "Prompt"
  | "Insourcing"
  | "OnPrem"
  | "Closed"
  | "SaaS"
  | "License"
  | "Seat"
  | "Agent"
  | "Batch"
  | "PoC"
  | "Reskilling"
  | "ROI"
  | "KPI"
  | "PDCA"
  | "Dashboard"
  | "Backend"
  | "Frontend"
  | "PairProg"
  | "CodeReview"
  | "Repository";

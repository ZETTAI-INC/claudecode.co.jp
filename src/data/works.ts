export interface WorkItem {
  id: string;
  title: string;
  icon: string;
  desc: string;
  details: string[];
  category: string;
  img?: string;
}

export const works: WorkItem[] = [
  {
    id: "website",
    title: "Webサイト・LP制作",
    icon: "language",
    desc: "コーポレートサイトやLPを、デザインからコーディングまで高速に構築。このサイトもClaude Codeで作られています。",
    details: [
      "レスポンシブ対応のコーポレートサイト",
      "商品・サービスのランディングページ",
      "ブログ・メディアサイト",
      "ポートフォリオサイト",
      "イベント告知ページ",
    ],
    category: "Web制作",
  },
  {
    id: "automation",
    title: "業務自動化ツール",
    icon: "smart_toy",
    desc: "日報作成、データ集計、レポート生成など、定型業務を自動化するスクリプトやツールを即座に開発できます。",
    details: [
      "日報・週報の自動生成",
      "Excelデータの自動集計・整形",
      "メール送信の自動化",
      "ファイル整理・リネームツール",
      "定型レポートの自動作成",
    ],
    category: "業務効率化",
  },
  {
    id: "webapp",
    title: "社内Webアプリ開発",
    icon: "apps",
    desc: "顧客管理、在庫管理、勤怠管理など、必要なWebアプリを外注せずに自社で開発・保守できます。",
    details: [
      "顧客管理（CRM）システム",
      "在庫管理アプリ",
      "勤怠管理・シフト管理",
      "社内申請ワークフロー",
      "タスク管理ボード",
    ],
    category: "アプリ開発",
  },
  {
    id: "api",
    title: "API連携ツール",
    icon: "hub",
    desc: "Slack、Google Sheets、社内システムなど、複数サービスを繋ぐAPI連携ツールを短時間で構築できます。",
    details: [
      "Slack通知ボットの構築",
      "Google Sheets自動連携",
      "外部APIからのデータ取得",
      "Webhook受信・処理システム",
      "複数サービス間のデータ同期",
    ],
    category: "API連携",
  },
  {
    id: "data",
    title: "データ分析・可視化",
    icon: "bar_chart",
    desc: "売上や顧客データを自動で集計・グラフ化。経営判断に役立つダッシュボードを内製できます。",
    details: [
      "売上ダッシュボード",
      "顧客分析レポート",
      "KPI自動トラッキング",
      "CSV/Excelデータの可視化",
      "リアルタイムモニタリング画面",
    ],
    category: "データ分析",
  },
  {
    id: "chatbot",
    title: "チャットボット",
    icon: "forum",
    desc: "社内FAQ対応やカスタマーサポート用のAIチャットボットを、自社の情報に合わせて構築できます。",
    details: [
      "社内FAQボット",
      "カスタマーサポートチャット",
      "商品レコメンドボット",
      "予約受付チャットボット",
      "社内ナレッジ検索ボット",
    ],
    category: "AI活用",
  },
  {
    id: "cli",
    title: "CLIツール・スクリプト",
    icon: "terminal",
    desc: "開発・運用で使うコマンドラインツールやシェルスクリプトを、目的に合わせて素早く作成できます。",
    details: [
      "デプロイ自動化スクリプト",
      "ログ解析ツール",
      "バッチ処理スクリプト",
      "DB マイグレーションツール",
      "環境セットアップ自動化",
    ],
    category: "開発ツール",
  },
  {
    id: "testing",
    title: "テストコード自動生成",
    icon: "bug_report",
    desc: "既存コードに対するユニットテスト・E2Eテストを自動生成。テストカバレッジを大幅に向上させます。",
    details: [
      "ユニットテストの自動生成",
      "E2Eテストシナリオ作成",
      "APIテストの自動化",
      "リグレッションテスト構築",
      "テストデータの自動生成",
    ],
    category: "品質管理",
  },
  {
    id: "docs",
    title: "ドキュメント自動生成",
    icon: "description",
    desc: "コードからAPI仕様書やREADMEを自動生成。技術ドキュメントの作成・更新を効率化します。",
    details: [
      "API仕様書（OpenAPI）生成",
      "README自動作成",
      "コード内コメント自動付与",
      "社内Wikiの自動更新",
      "変更履歴の自動生成",
    ],
    category: "ドキュメント",
  },
  {
    id: "mobile",
    title: "モバイルアプリ開発",
    icon: "phone_iphone",
    desc: "React NativeやFlutterを使ったクロスプラットフォームアプリの開発を、AIの力で加速します。",
    details: [
      "業務用モバイルアプリ",
      "プロトタイプの高速開発",
      "既存Webアプリのモバイル対応",
      "プッシュ通知システム",
      "オフライン対応アプリ",
    ],
    category: "アプリ開発",
  },
  {
    id: "refactor",
    title: "コードリファクタリング",
    icon: "autorenew",
    desc: "レガシーコードの改善、パフォーマンス最適化、モダンな設計への移行をAIが支援します。",
    details: [
      "レガシーコードのモダン化",
      "パフォーマンス最適化",
      "セキュリティ脆弱性の修正",
      "コード品質の向上",
      "フレームワーク移行支援",
    ],
    category: "開発ツール",
  },
  {
    id: "email",
    title: "メール・通知システム",
    icon: "mail",
    desc: "メールテンプレート管理、自動配信、通知システムなど、コミュニケーション基盤を構築します。",
    details: [
      "メール自動配信システム",
      "HTMLメールテンプレート作成",
      "リマインダー通知ボット",
      "アラート監視・通知システム",
      "メルマガ配信ツール",
    ],
    category: "業務効率化",
  },
];

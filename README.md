# claudecode.co.jp

株式会社ZETTAI が提供する「CLAUDE CODE リスキリング研修」公式サイトのソースコードです。Claude Code を活用した AI 開発スキル習得を、企業・個人向けに支援する実践型研修サービスを紹介しています。

公開 URL: https://claudecode.co.jp

## 技術スタック

- **Next.js** 16.2.2 (App Router / Webpack dev)
- **React** 19.2
- **TypeScript** 5
- **Tailwind CSS** v4 (`@tailwindcss/postcss`)
- **Fonts**: M PLUS 1p / Noto Sans JP / Noto Serif JP / Roboto (`next/font`)

> ⚠️ この Next.js は 16 系で、従来の App Router から API・規約・ファイル構成に破壊的変更が入っています。コードを書く前に `node_modules/next/dist/docs/` の関連ガイドを必ず確認してください（`AGENTS.md` 参照）。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## スクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバー起動（Webpack） |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint 実行 |

## ディレクトリ構成

```
src/app/            各ページ（App Router）
  ├─ page.tsx       ホーム
  ├─ courses/       コース一覧
  ├─ curriculum/    カリキュラム
  ├─ price/         料金プラン
  ├─ compare/       他社比較
  ├─ case/          導入事例
  ├─ seminars/      セミナー
  ├─ works/         実績
  ├─ consultation/  無料相談
  ├─ contact/       お問い合わせ
  ├─ estimate/      見積もり
  ├─ company/       会社情報
  ├─ info/          お知らせ
  ├─ resources/     資料
  ├─ saleslink/     代理店リンク
  ├─ privacy/       プライバシーポリシー
  ├─ terms/         利用規約
  └─ tokushoho/     特定商取引法表記
public/             画像・OGP・favicon などの静的アセット
scripts/            補助スクリプト
```

## ホーム（`src/app/page.tsx`）のセクション構成

営業導線に沿って「掴み → 課題共感 → 位置づけ → サービス理解 → Why → 具体像 → 証拠 → ROI → 料金 → クロージング」の順で構成しています。

| # | セクション | 役割 |
| --- | --- | --- |
| 1 | `HeroBanner` | ファーストビュー・キャッチコピー |
| 2 | `AiServiceStrengths` | お悩み共感（内製化停滞・属人化・外注費） |
| 3 | `TargetAudience` | ターゲット層と提供価値の位置づけ |
| 4 | `ClaudeCodeOverview` | Claude Code とは／サービス概要 |
| 5 | `BeforeAfter` | 研修前後の社員像の変化 |
| 6 | `TalentDevelopment` | 14日で成果が出る理由（氷山モデル） |
| 7 | `DevelopmentSpeedComparison` | 未経験からの最短学習（学習速度 1/10） |
| 8 | `AiDevelopmentWorkflow` | 一般的なAI研修との設計思想の違い |
| 9 | `SubsidyList` | こんな業務から始められる（業務例） |
| 10 | `AdoptionTimeline` | 導入後 14〜90日の段階的成果 |
| 11 | `CaseStudies` | 導入事例 |
| 12 | `WhyResults` | AI開発の投資対効果 |
| 13 | `RoiEquation` | ROI 10倍の仕組み |
| 14 | `Pricing` | 料金プラン |
| 15 | `RstaffingFv` | 3ステップ導入イメージ |
| 16 | `Flow` | お問い合わせから研修開始までの標準フロー |
| 17 | `Faq` | よくあるご質問 |
| 18 | `ResourceDownloadCta` | 資料ダウンロードCTA |
| 19 | `ContactForm` | お問い合わせフォーム |

## ドキュメント

- `AGENTS.md` — AI エージェント向けの作業ガイドライン（Next.js 16 の注意事項など）
- `CLAUDE.md` — Claude Code 用プロジェクト指示（`AGENTS.md` を参照）

## ライセンス

本リポジトリのソースコードおよびコンテンツの著作権は株式会社ZETTAI に帰属します。

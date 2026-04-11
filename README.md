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

## ドキュメント

- `AGENTS.md` — AI エージェント向けの作業ガイドライン（Next.js 16 の注意事項など）
- `CLAUDE.md` — Claude Code 用プロジェクト指示（`AGENTS.md` を参照）

## ライセンス

本リポジトリのソースコードおよびコンテンツの著作権は株式会社ZETTAI に帰属します。

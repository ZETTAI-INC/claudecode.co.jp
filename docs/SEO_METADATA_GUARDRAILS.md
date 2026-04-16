# SEO Metadata ガードレール

**目的**: 並列作業で各ページのSEOメタデータを改善する際、**設計からブレない**ためのルール集。全エージェントはこのファイルを唯一の拠り所とする。

## 絶対ルール(違反禁止)

1. **編集対象は `src/app/**/page.tsx` のみ**。コンポーネント(`src/components/`)、レイアウト、設定ファイルは触らない。
2. **JSXレンダリング部分は変更しない**。`export default function` 以下のreturn文は既存のまま。
3. **新規ファイル作成禁止**(このタスクでは metadata 追加・改善のみ)。
4. **既存importの削除禁止**。足りないimportを追加するのみ。
5. **`@/` エイリアス解決先は `./src/`**。
6. **Next.js 16 Metadata API** を使用。`export const metadata: Metadata = { ... }` の形。
7. **変更後 `npm run build` が通ることを確認**(最後に検証される)。
8. **他ページを参照しない**。担当ページ以外のmetadataは読んでも変更しない。

## Metadata必須フィールド

全てのページ(admin/ を除く)は以下を必ず含む:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "〈ページ固有タイトル〉", // ← template: "%s | CLAUDE CODE リスキリング研修" が layout 側で付く
  description: "〈説明120〜160文字〉",
  keywords: [ /* 8〜15語の配列 */ ],
  alternates: {
    canonical: "https://claudecode.co.jp〈path〉",
  },
  openGraph: {
    title: "〈OG用タイトル(30〜60字)〉",
    description: "〈OG用説明(60〜120字)〉",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp〈path〉",
  },
};
```

## フィールド別ルール

### title
- layout の template `"%s | CLAUDE CODE リスキリング研修"` で末尾自動付与されるので、**ページ固有部分のみ**記載
- 長さ: ページ固有部分で 15〜40文字
- 必須要素: 主要キーワード1つ + ページ特性
- 例:
  - ✅ `"法人研修プラン・料金 | おうとまくん"`
  - ❌ `"料金ページ"`(主要キーワードなし)
  - ❌ `"AIリスキリング おすすめ|CLAUDE CODE リスキリング研修|株式会社ZETTAI"`(templateと重複)

### description
- 120〜160字(日本語)
- 主要キーワード2〜3個を自然に含む
- 具体的な数字 or ベネフィットを入れる
- 「おうとまくん」ブランド名は原則含める
- 例: `"AIリスキリング研修「おうとまくん」の料金プラン。1ステップ10万円、助成金活用で実質負担18%〜。中小企業75%補助、大企業65%補助。"`

### keywords
- 8〜15個の配列
- 内訳目安:
  - 主要キーワード(head): 2〜3個
  - ロングテール: 4〜8個
  - ブランド/固有名詞: 2〜3個(`おうとまくん`, `Claude Code`, `株式会社ZETTAI` 等)
- 重複排除、同義語を冗長に並べない
- 以下は**各ページで候補から選ぶ**:
  - head: `リスキリング`, `AIリスキリング`, `Claude Code`, `AI研修`, `企業研修`, `法人研修`
  - long-tail: `リスキリング おすすめ`, `非エンジニア 開発`, `プログラミング未経験`, `助成金75%`, `開発内製化`, `最短14日`, `AI人材育成`, `DX研修`
  - brand: `おうとまくん`, `株式会社ZETTAI`

### alternates.canonical
- 必ず絶対URL `https://claudecode.co.jp〈path〉`
- 末尾スラッシュは**付けない**(Next.jsデフォルトに合わせる)
- 例: `"https://claudecode.co.jp/price"` (OK), `"https://claudecode.co.jp/price/"` (NG)

### openGraph
- `title` / `description` は metadata の title/description とは別に簡潔版を書く
- `url` は canonical と同じ
- `type: "website"`, `locale: "ja_JP"` 固定
- `images` は特別な指定がない限り layout のデフォルトで十分(省略可)

### twitter
- layout デフォルトでカード形式は設定済なので、ページ個別の `twitter` は省略可
- 特別な文言にしたい場合のみ `title` / `description` を追加

## ページタイプ別ガイド

### サービス紹介ページ (`/courses`, `/curriculum`, `/price`, `/case`)
- title: サービス名 + 主要ベネフィット
- description: 提供内容 + 数字(実績/料金/期間) + 助成金言及
- keywords: service系 head + ブランド + 具体的サービス名

### リード獲得ページ (`/contact`, `/consultation`, `/estimate`, `/fit-check`)
- title: アクション動詞 + 目的
- description: 何ができる/何がもらえる + 時間コスト(例: 3分で無料見積もり)
- keywords: action系 (`問い合わせ`, `相談`, `見積もり`) + 主題

### 情報ページ (`/info`, `/resources`, `/seminars`)
- title: 情報種別 + 更新頻度を示唆
- description: どんな情報があるか、更新性
- keywords: 情報種別 + 対象読者

### 比較・判断ページ (`/compare`, `/fit-check`)
- title: 比較対象 or 判断テーマ
- description: 判断材料として何が得られるか
- keywords: 比較キーワード

### 法的ページ (`/privacy`, `/terms`, `/tokushoho`)
- title: 法定文書名
- description: 短めでOK (50〜100字)
- keywords: 4〜6個で十分
- canonical 必須
- openGraph は任意(省略可)

### 法人/業界特化 (`/claude-code-houjin`)
- ※ 既に実装済 — このガードレール対象外

### 新規作成済ページ(対象外)
以下は既に適切なmetadataが設定されているため **変更禁止**:
- `/llmo-reskilling`
- `/faq`
- `/process`
- `/claude-code-houjin`
- `/curriculum/step1` 〜 `/curriculum/step4`

## 特殊ケース

### ルートページ `/` (`src/app/page.tsx`)
- layout のデフォルトmetadataを継承するため、**個別のexport const metadataは不要**
- もし追加する場合でも description/keywords は layout と重複しない情報に限定
- **このタスクではroot pageに metadata exportを追加しない**(layoutと二重になる)

### リダイレクトページ `/works` (`src/app/works/page.tsx`)
- 中身が `redirect("/case/#works")` のみ
- metadata追加不要(リダイレクトされるため)
- **変更禁止**

### client componentページ `/saleslink` (`src/app/saleslink/page.tsx`)
- `"use client"` ディレクティブが付いている場合、`export const metadata` は**使えない**(Next.js 16 制約)
- 対応: `metadata.ts` 別ファイル or `layout.tsx` に metadata を置く
- このタスクでは **`src/app/saleslink/layout.tsx` を新規作成して metadata を置く** 方針で対応
- このケースのみ新規ファイル作成を許可

### 動的ルート `/info/[slug]`, `/seminars/[slug]`
- `generateMetadata` 関数で動的生成
- 既に実装済なら変更不要(中身を確認して、明らかに不足ならキーワード/canonical追加)
- `export const metadata` は**使わない**(動的生成と競合するため)

## ブランド・文言統一

以下は全ページで表記ゆれを防ぐため固定:
- ブランド名: **おうとまくん**(ひらがな、カタカナ「オートマクン」は使わない)
- 運営会社: **株式会社ZETTAI**
- 研修期間: **最短14日**(「30日」は古い記述なので使わない)
- 助成金: **人材開発支援助成金**(正式名称)
- 助成率: **中小企業75%、大企業65%**
- 実質負担: **中小企業18%、大企業31%**

## 禁止事項(SEO悪化につながる)

- キーワードの詰め込み(keyword stuffing)
- description に絵文字を多用(Google検索結果で表示されない場合あり)
- title に記号連発(`| | |` 連打)
- 全ページ同じ description を使い回す(重複と判定される)
- noindex/nofollow を追加する(layout の robots設定を上書きしない)

## 検証方法

各エージェントは作業後に以下を**自エージェント内で**確認:

1. 該当ファイルの `export const metadata` が上記スキーマを満たすか目視
2. title/description/keywords/canonical/openGraph が全て存在するか
3. ブランド表記が統一されているか
4. 完了報告に「変更したファイル一覧」「各ファイルでの変更内容サマリ(1行)」を必ず含める

最後の `npm run build` は親エージェントが一括で実行するので、各エージェントは実行しない。

# 旧サイト → 新サイト SEO維持移行計画

**対象**: `claudecode.co.jp` ドメインを旧実装(`/Users/a1/claudecodepeople-1`)から新実装(本リポ)へ切替える際のSEO資産維持計画。

**原則**:
- 旧サイトのSEO流入(20,000PV、SEO1位の被リンク資産)を落とさない
- 新サイトの現行UI(「14日で本番導入」LPリビルド)は基本そのまま維持
- `はりぼて` である旧サイトのコンテンツは本質的な新UIへ移行
- 長期視点: URLはシンプル・キーワードリッチ・ぶれないこと最優先

---

## 1. 最終URLマッピング表

### カテゴリA: 同一URLでそのまま受ける (変更なし)

| URL | 旧 | 新 | 備考 |
|---|---|---|---|
| `/` | ✅ | ✅ | トップLP(新UI) |
| `/company` | ✅ | ✅ | 会社情報(新UI) |
| `/curriculum` | ✅ | ✅ | カリキュラム一覧(新UI) |
| `/contact` | ✅ | ✅ | 問合せ(新UI) |
| `/privacy` | ✅ | ✅ | プライバシー(新UI) |
| `/terms` | ✅ | ✅ | 利用規約(新UI) |

### カテゴリB: 301 リダイレクト (旧URL → 新URL)

| 旧URL | 新URL | 理由 |
|---|---|---|
| `/about` | `/company` | 内容が重複。`/company` に統合 |
| `/pricing` | `/price` | 短い新URLを正に。301で被リンク継承 |
| `/case-studies` | `/case` | 短い新URLを正に。301で被リンク継承 |
| `/capabilities` | `/works` | 提供能力=事例として`/works`に統合 |
| `/support` | `/company` | 講師紹介を`/company`に統合(弱SEOページ独立させない) |
| `/legal` | `/tokushoho` | 特商法ページを正に |
| `/blog` | `/info` | お知らせ・ブログを `/info` に統合 |
| `/blog/[id]` | `/info` | 個別記事は全て `/info` 一覧へ(流入ゼロのため問題なし) |
| `/curriculum/[step]/lesson/[lessonId]` | `/curriculum/[step]` | レッスン詳細はステップページへ |

### カテゴリC: 新規作成 (URL保持・新UIで構築) — **SEO重要**

| URL | 旧ページ概要 | 優先度 | 新UI実装方針 |
|---|---|---|---|
| `/llmo-reskilling` | おうとまくんLP(最大のSEO流入源、「おうとまくん」「AIリスキリング」) | 🔴P0 | 新サイトのデザイン言語で作り直し。旧の構造/コピーは参考に。JSON-LD維持 |
| `/faq` | よくある質問(「リスキリング FAQ」系) | 🔴P0 | FAQSchema JSON-LD必須。新UIでアコーディオン構成 |
| `/process` | 12ステップ助成金申請プロセス(「助成金 リスキリング」) | 🟠P1 | 新UIでステップ構成。助成金計算ロジック維持 |
| `/claude-code-houjin` | 法人特化LP(「法人 研修」「法人 Claude Code」) | 🟠P1 | 新UIで法人向け導線 |
| `/curriculum/step1` | STEP1基礎コース | 🟡P2 | 新UIで詳細ページ |
| `/curriculum/step2` | STEP2実務アプリ開発 | 🟡P2 | 同上 |
| `/curriculum/step3` | STEP3 | 🟡P2 | 同上 |
| `/curriculum/step4` | STEP4 | 🟡P2 | 同上 |

### カテゴリD: 新サイトのみのURL (維持)

以下は旧サイトに無く、新サイト独自で追加されたURL。SEO流入は未確立だがそのまま維持して将来の資産形成:
`/compare`, `/consultation`, `/fit-check`, `/estimate`, `/resources`, `/saleslink`, `/seminars`, `/seminars/[slug]`, `/works`, `/courses`, `/price`, `/case`, `/info`, `/info/[slug]`, `/tokushoho`

---

## 2. 必須引継ぎSEO要素

### 2.1 Google Search Console verification code
旧 `app/layout.tsx` にある以下コードを新サイト `src/app/layout.tsx` の `metadata.verification.google` に追加。これが無いとSearch Console認証が切れる:

```
wPE2aYp1rqupJ8GTYonOzeNMFUZ8qTwgZZuvUi4JvJ4
```

### 2.2 旧サイトのメインキーワード (新トップページメタに反映検討)

- リスキリング / AIリスキリング / リスキリング おすすめ
- おうとまくん(ブランド)
- 非エンジニア 開発 / プログラミング未経験 開発
- Claude Code / Cursor / Windsurf
- 助成金 75% / 人材開発支援助成金
- 株式会社ZETTAI

現状の新サイトlayout metadataは `Claude Code` 系に寄っており、「リスキリング」「おうとまくん」のキーワード重みが弱い。トップページの `keywords` 配列と `description` を旧のキーワード構成を踏まえて拡充する。

### 2.3 構造化データ (JSON-LD)
新サイトlayoutには既に `Organization` / `WebSite` / `Service` の JSON-LD 実装あり。旧サイトにある追加スキーマを補完:
- `FAQPage` スキーマ: `/faq` 新規作成時に追加
- `BreadcrumbList` スキーマ: 主要ページに追加(既に `BreadcrumbJsonLd.tsx` コンポーネント有り)
- `CorporateServiceSchema`(旧)相当を補完

---

## 3. 実装ステップ

### Phase 1: 301リダイレクト実装 (最優先・30分)
`next.config.ts` に以下を実装:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      { source: "/pricing", destination: "/price", permanent: true },
      { source: "/case-studies", destination: "/case", permanent: true },
      { source: "/capabilities", destination: "/works", permanent: true },
      { source: "/support", destination: "/company", permanent: true },
      { source: "/legal", destination: "/tokushoho", permanent: true },
      { source: "/blog", destination: "/info", permanent: true },
      { source: "/blog/:id*", destination: "/info", permanent: true },
      { source: "/curriculum/:step/lesson/:lessonId", destination: "/curriculum/:step", permanent: true },
    ];
  },
};

export default nextConfig;
```

`permanent: true` = HTTP 308 Permanent Redirect(Next.jsのデフォルト)。これによりGoogleが被リンクの評価を新URLに継承する。

### Phase 2: Verification code追加 (5分)
`src/app/layout.tsx` の `metadata` に以下を追加:

```ts
verification: {
  google: "wPE2aYp1rqupJ8GTYonOzeNMFUZ8qTwgZZuvUi4JvJ4",
},
```

### Phase 3: P0ページ新規作成 (2-3時間)
優先順に実装:
1. `/llmo-reskilling` — 旧LPの構造・キーワードを新UIコンポーネント(HeroBanner, Flow, Faq, CtaSection等)で再構築。metadata.title/description/keywords は旧のコピーを保持
2. `/faq` — アコーディオンUI + FAQPage JSON-LD

### Phase 4: P1ページ新規作成 (2時間)
3. `/process` — 12ステップ構成、助成金計算
4. `/claude-code-houjin` — 法人向け

### Phase 5: P2ページ新規作成 (1時間)
5. `/curriculum/step1` ~ `/curriculum/step4` — 4ステップ詳細

### Phase 6: sitemap.ts 更新 (10分)
`src/app/sitemap.ts` の `staticRoutes` に以下を追加:
- `/llmo-reskilling` (priority: 0.95, weekly)
- `/faq` (priority: 0.9, monthly)
- `/process` (priority: 0.85, monthly)
- `/claude-code-houjin` (priority: 0.9, monthly)
- `/curriculum/step1` ~ `/curriculum/step4` (priority: 0.8, monthly)

旧URLは301で吸収されるので **sitemapには含めない**(Search Consoleに混乱させない)。

### Phase 7: ビルド・dev検証 (30分)
- `npm run build` でクリーンビルド確認
- dev起動後、全カテゴリBの旧URLにアクセス → 301リダイレクト確認
- 全カテゴリCの新URLが正常表示確認
- View Source で各ページの `<title>`, `<meta description>`, `<link canonical>` 確認

---

## 4. デプロイ後の Google Search Console 手順

### 4.1 旧サイトの退避 (user側で実施)
- 旧サイト(`claudecodepeople-1`)のデプロイ先を `claudecode.co.jp` から外す
- 必要なら `old.claudecode.co.jp` サブドメインに退避(noindex設定)
- 同一URLに新旧が同時にある状態を作らない(重複コンテンツ回避)

### 4.2 新サイトのSearch Console登録
1. Search Console にログイン
2. プロパティ `https://claudecode.co.jp` は既存のまま(verification code引継ぎ済のため再認証不要)
3. **サイトマップ送信**: `Sitemaps` → `https://claudecode.co.jp/sitemap.xml` を送信(または既存送信済なら再クロール要求)
4. **URL検査ツール** で主要新ページ(`/llmo-reskilling`, `/faq`, `/process`, `/claude-code-houjin`, `/curriculum/step1-4`)を手動クロール申請

### 4.3 監視(デプロイ後2-4週間)
- `Coverage` レポート: 404・エラーURLがないか
- `Enhancements` → `Sitemaps`: インデックス状況
- 特に旧URL(301元)が `Redirect` としてカウントされているか確認
- オーガニック検索流入の推移(Analytics/Search Console両方)

### 4.4 ロールバック条件
以下のいずれかが発生したら `backup-new-lp` ブランチへ戻す:
- インデックス済URL数が2週間で50%以上減少
- 主要キーワード順位が10位以上ダウン
- 404エラー率が5%超

---

## 5. 実装結果(チェックリスト)

### 実装完了 ✅

- [x] `next.config.ts` に301(308 Permanent)リダイレクト実装 — 9件
- [x] `src/app/layout.tsx` に Google verification code追加
- [x] トップmetadata `keywords` / `description` / OG / Twitter をおうとまくん/リスキリング重視に差替
- [x] `/llmo-reskilling` 新規作成 + Course JSON-LD + 全SEOメタ
- [x] `/faq` 新規作成 + FAQPage JSON-LD (12問)
- [x] `/process` 新規作成 + HowTo JSON-LD (12ステップ)
- [x] `/claude-code-houjin` 新規作成 + Service/FAQPage JSON-LD
- [x] `/curriculum/step1` 新規作成 (14講座)
- [x] `/curriculum/step2` 新規作成 (14講座)
- [x] `/curriculum/step3` 新規作成 (14講座)
- [x] `/curriculum/step4` 新規作成 (14講座)
- [x] `sitemap.ts` を新URL構造に合わせて更新(27静的URL)
- [x] `npm run build` クリーン通過 (46静的ページ生成)
- [x] 全9件リダイレクト動作確認 (308 + location header 正常)
- [x] 全7件新規ページ表示確認 (HTTP 200)
- [x] `/sitemap.xml` 正常出力確認
- [x] `robots.txt` LLMボット許可維持確認

### デプロイ後(user側で実施)

#### 必須手順
- [ ] 旧サイト(`claudecodepeople-1`)を `claudecode.co.jp` のRender向け本番デプロイから切り離し
- [ ] 新サイト(本リポ)を `claudecode.co.jp` にデプロイ
- [ ] デプロイ直後に外部から `curl -I https://claudecode.co.jp/pricing` で308確認
- [ ] Search Console にログインし、プロパティ `https://claudecode.co.jp` が認証済みか確認(verification code引継済のため自動認証される想定)
- [ ] Search Console の `サイトマップ` メニューで `https://claudecode.co.jp/sitemap.xml` を再送信
- [ ] URL検査ツールで以下8件をインデックス申請:
  - `/llmo-reskilling`
  - `/faq`
  - `/process`
  - `/claude-code-houjin`
  - `/curriculum/step1`
  - `/curriculum/step2`
  - `/curriculum/step3`
  - `/curriculum/step4`

#### 任意(推奨)
- [ ] 旧URLが残っているコンテンツ(外部バックリンク等)が多い場合、旧サイトは`old.claudecode.co.jp`サブドメインに一定期間残して `noindex` + canonical指定
- [ ] PR TIMESなど外部プレスリリースに `/llmo-reskilling` への直接リンクを追加(被リンク新設)
- [ ] Bing Webmaster Tools にも同様にサイトマップ送信(国内1-2%シェアだがBing/Copilot経由流入確保)

#### 監視(デプロイ後2-4週間)
- [ ] デプロイ翌日: Search Console `Coverage` で `送信されたURL` のクロール開始を確認
- [ ] 1週間後: `Coverage` → `有効` URL数が27件前後まで増加しているか
- [ ] 1週間後: `Coverage` → `除外` の中で旧URLが `Redirect`扱いで計上されているか(301/308処理成功の証左)
- [ ] 2週間後: オーガニック検索流入推移 — 前月比で75%以上を維持しているか
- [ ] 4週間後: 主要キーワード(`リスキリング おすすめ`, `おうとまくん`, `Claude Code 法人`) のランキング推移

### 緊急ロールバック条件
以下いずれかが発生した場合、Renderで旧コミットにロールバック:
- インデックス済URL数が2週間で50%以上減少
- オーガニック検索流入が2週間で30%以上減少
- 主要キーワード順位が3位以上下落
- 500/404エラー率が5%超

ロールバック後、問題のページだけ修正して再デプロイ。

---

## 6. 作業量(実績)

| Phase | 内容 | 見積 | 状態 |
|---|---|---|---|
| 1 | 301リダイレクト | 30分 | ✅ 完了 |
| 2 | Verification code + top metadata | 5分 | ✅ 完了 |
| 3 | P0ページ(`/llmo-reskilling`, `/faq`) | 2-3時間 | ✅ 完了 |
| 4 | P1ページ(`/process`, `/claude-code-houjin`) | 2時間 | ✅ 完了 |
| 5 | P2ページ(`/curriculum/step1-4`) | 1時間 | ✅ 完了 |
| 6 | sitemap更新 | 10分 | ✅ 完了 |
| 7 | ビルド + dev検証 | 30分 | ✅ 完了 |

## 7. 実装ファイル一覧

### 新規作成
- `src/app/llmo-reskilling/page.tsx` — おうとまくんLP(Course JSON-LD)
- `src/app/faq/page.tsx` — よくある質問(FAQPage JSON-LD, 12問)
- `src/app/process/page.tsx` — 助成金12ステップ(HowTo JSON-LD)
- `src/app/claude-code-houjin/page.tsx` — 法人向けLP(Service/FAQPage JSON-LD)
- `src/app/curriculum/step1/page.tsx` — AI開発基礎(14講座)
- `src/app/curriculum/step2/page.tsx` — 実務アプリ開発(14講座)
- `src/app/curriculum/step3/page.tsx` — データベース連携(14講座)
- `src/app/curriculum/step4/page.tsx` — API統合(14講座)

### 変更
- `next.config.ts` — 9件の301リダイレクト(`redirects()`)
- `src/app/layout.tsx` — Google verification code + キーワード強化版metadata
- `src/app/sitemap.ts` — 新構造の全27静的URL + newsEntries動的URL

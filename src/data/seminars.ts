export interface UpcomingSeminar {
  slug: string;
  date: string;
  weekday: string;
  time: string;
  month: string;
  day: string;
  title: string;
  tag: string;
  summary: string;
  agenda: string[];
  capacity: string;
  host: string;
}

export interface ArchivedSeminar {
  slug: string;
  date: string;
  month: string;
  day: string;
  year: string;
  title: string;
  summary: string;
}

export const upcomingSeminars: UpcomingSeminar[] = [
  {
    slug: "2026-04-16-claude-code-intro",
    date: "2026/4/16",
    weekday: "木",
    time: "20:00 - 21:00",
    month: "4",
    day: "16",
    title: "Claude Code入門 — 14日で何が作れるか",
    tag: "初心者向け",
    summary:
      "非エンジニアでも業務ツールを内製できる時代の全体像を、最新のデモとあわせてお届けします。",
    agenda: [
      "Claude Codeとは何か（10分）",
      "14日で作れる業務ツールのデモ（20分）",
      "導入ステップと費用感の概算（20分）",
      "Q&Aタイム（10分）",
    ],
    capacity: "先着30社（1社複数名可）",
    host: "株式会社ZETTAI 研修事業部",
  },
  {
    slug: "2026-04-23-tools-demo-10",
    date: "2026/4/23",
    weekday: "木",
    time: "20:00 - 21:00",
    month: "4",
    day: "23",
    title: "現場社員が作った業務ツール10選（デモ中心）",
    tag: "デモ",
    summary:
      "Excel台帳のWeb化、日報自動集計、承認フロー化など、14日で本番稼働した実例を画面共有で解説します。",
    agenda: [
      "現場内製ツール10事例の早回しデモ（40分）",
      "業種別の向き/不向きの見極め方（10分）",
      "Q&Aタイム（10分）",
    ],
    capacity: "先着30社（1社複数名可）",
    host: "株式会社ZETTAI 研修事業部",
  },
  {
    slug: "2026-04-30-subsidy-roi",
    date: "2026/4/30",
    weekday: "木",
    time: "20:00 - 21:00",
    month: "4",
    day: "30",
    title: "助成金と費用対効果の設計 — 実質負担の作り方",
    tag: "経営・人事",
    summary:
      "人材開発支援助成金、DX分野リスキリング推進事業などを活用した実質負担の設計と、ROIの標準モデルをご紹介。",
    agenda: [
      "活用可能な助成金の整理（15分）",
      "申請から支給までのスケジュール（15分）",
      "研修ROIのモデル計算と事例（20分）",
      "Q&Aタイム（10分）",
    ],
    capacity: "先着30社（1社複数名可）",
    host: "株式会社ZETTAI 研修事業部",
  },
  {
    slug: "2026-05-07-rollout-pitfalls",
    date: "2026/5/7",
    weekday: "木",
    time: "20:00 - 21:00",
    month: "5",
    day: "7",
    title: "失敗事例から学ぶ、社内展開のボトルネック",
    tag: "DX推進",
    summary:
      "導入時によくある抵抗、現場巻き込みの失敗パターン、成功した企業の共通点を実例ベースで共有します。",
    agenda: [
      "ボトルネック5分類（20分）",
      "成功企業の共通点（20分）",
      "参加者の状況別ディスカッション（10分）",
      "Q&Aタイム（10分）",
    ],
    capacity: "先着30社（1社複数名可）",
    host: "株式会社ZETTAI 研修事業部",
  },
];

export const archivedSeminars: ArchivedSeminar[] = [
  {
    slug: "2026-04-09-claude-vs-others",
    date: "2026/4/9",
    year: "2026",
    month: "4",
    day: "9",
    title: "Claude Codeとは何か・他AIツールとの違い",
    summary: "Cursor / Copilot / ChatGPTとの使い分け、内製化に向く理由を整理しました。",
  },
  {
    slug: "2026-04-02-non-engineer-era",
    date: "2026/4/2",
    year: "2026",
    month: "4",
    day: "2",
    title: "非エンジニアが開発できる時代の到来",
    summary: "パイロット研修受講者128名の実績と、習熟曲線の実データをご紹介しました。",
  },
  {
    slug: "2026-03-26-internal-dx-crossroad",
    date: "2026/3/26",
    year: "2026",
    month: "3",
    day: "26",
    title: "業務内製化とDX推進の交差点",
    summary: "外注中心のDXから内製中心DXへの移行パターンと、推進組織の作り方を議論。",
  },
  {
    slug: "2026-03-19-excel-webapp-live",
    date: "2026/3/19",
    year: "2026",
    month: "3",
    day: "19",
    title: "Excel台帳Web化のライブデモ",
    summary: "手元のExcelをClaude Codeで30分でWebアプリ化するプロセスを画面共有で実演。",
  },
  {
    slug: "2026-03-12-rollout-principles",
    date: "2026/3/12",
    year: "2026",
    month: "3",
    day: "12",
    title: "社内展開を成功させる3つの原則",
    summary: "導入時のよくある抵抗・ハレーション、現場巻き込みの実例を共有しました。",
  },
];

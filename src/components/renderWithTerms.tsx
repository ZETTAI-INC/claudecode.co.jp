import React, { type ReactNode } from "react";
import TermPopover from "@/components/TermPopover";
import { GLOSSARY, type GlossaryKey } from "@/data/glossary";

/**
 * 文字列中に含まれる用語を自動で TermPopover に置き換える。
 * 用語ごとに matcher（表記ゆれ）を定義しておき、最長一致で置換する。
 * 既に React ノード（ReactElement / 配列）が渡ってきた場合はそのまま返す。
 */
type Rule = { key: GlossaryKey; pattern: RegExp; display?: string };

// 長い/特殊表記を先に置いて最長一致させる。
const RULES: Rule[] = [
  { key: "SSO", pattern: /SSO\/IdP連携|SSO\/IdP|SSO/g },
  { key: "CodeInterpreter", pattern: /Code Interpreter/g },
  { key: "Workspace", pattern: /@workspace/g },
  { key: "PairProg", pattern: /ペアプログラミング/g },
  { key: "CodeReview", pattern: /コードレビュー/g },
  { key: "Reskilling", pattern: /リスキリング/g },
  { key: "Requirement", pattern: /要件定義/g },
  { key: "Stack", pattern: /技術スタック/g },
  { key: "Workflow", pattern: /ワークフロー/g },
  { key: "Agent", pattern: /AIエージェント/g },
  { key: "Insourcing", pattern: /内製化/g },
  { key: "OnPrem", pattern: /オンプレミス/g },
  { key: "Closed", pattern: /閉域網/g },
  { key: "Dashboard", pattern: /ダッシュボード/g },
  { key: "Backend", pattern: /バックエンド/g },
  { key: "Frontend", pattern: /フロントエンド/g },
  { key: "Repository", pattern: /リポジトリ/g },
  { key: "Deploy", pattern: /デプロイ/g },
  { key: "Debug", pattern: /デバッグ/g },
  { key: "Prompt", pattern: /プロンプト/g },
  { key: "License", pattern: /ライセンス/g },
  { key: "Batch", pattern: /バッチ処理/g },
  { key: "SaaS", pattern: /SaaS/g },
  { key: "PoC", pattern: /PoC/g },
  { key: "ROI", pattern: /ROI/g },
  { key: "KPI", pattern: /KPI/g },
  { key: "PDCA", pattern: /PDCA/g },
  { key: "RAG", pattern: /RAG/g },
  { key: "RPA", pattern: /RPA/g },
  { key: "API", pattern: /API/g },
  { key: "SDK", pattern: /SDK/g },
  { key: "CLI", pattern: /CLI/g },
  { key: "MCP", pattern: /MCP/g },
  { key: "IDE", pattern: /IDE/g },
  { key: "NDA", pattern: /NDA/g },
  { key: "SIer", pattern: /SIer/g },
  { key: "Cowork", pattern: /Cowork/g },
  { key: "CI", pattern: /CI連携/g },
  { key: "Cron", pattern: /\bcron\b/g },
];

/**
 * @param onlyFirst true の場合、同じ用語の2回目以降のマッチには ? を付けない（視覚ノイズ軽減）。
 */
export function renderWithTerms(input: ReactNode, onlyFirst = true): ReactNode {
  if (typeof input !== "string") return input;
  if (!input) return input;

  // 全ルールのマッチを位置順に集約
  type Match = { start: number; end: number; rule: Rule; text: string };
  const matches: Match[] = [];
  for (const rule of RULES) {
    const re = new RegExp(rule.pattern.source, rule.pattern.flags);
    let m: RegExpExecArray | null;
    let count = 0;
    while ((m = re.exec(input)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, rule, text: m[0] });
      count++;
      if (onlyFirst && count >= 1) break;
    }
  }
  if (matches.length === 0) return input;

  // 重なりがある場合は最初に出現＆長いもの優先
  matches.sort((a, b) => a.start - b.start || b.end - b.end - (a.end - a.start));
  const filtered: Match[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start < cursor) continue;
    filtered.push(m);
    cursor = m.end;
  }

  const out: ReactNode[] = [];
  let pos = 0;
  filtered.forEach((m, i) => {
    if (m.start > pos) out.push(input.slice(pos, m.start));
    if (GLOSSARY[m.rule.key]) {
      out.push(
        <TermPopover key={`${m.start}-${i}`} termKey={m.rule.key}>
          {m.text}
        </TermPopover>
      );
    } else {
      out.push(m.text);
    }
    pos = m.end;
  });
  if (pos < input.length) out.push(input.slice(pos));
  return <>{out}</>;
}

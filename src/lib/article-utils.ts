const CHARS_PER_MIN = 500;

export function readingTime(text: string): number {
  const chars = text.replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(chars / CHARS_PER_MIN));
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function extractHeadings(body: string): string[] {
  return body
    .split("\n\n")
    .filter((p) => p.startsWith("■ "))
    .map((p) => p.replace("■ ", ""));
}

export function relativeDate(iso: string): string {
  const now = new Date();
  const d = new Date(iso);
  const diff = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "今日";
  if (diff === 1) return "昨日";
  if (diff < 7) return `${diff}日前`;
  if (diff < 30) return `${Math.floor(diff / 7)}週間前`;
  if (diff < 365) return `${Math.floor(diff / 30)}ヶ月前`;
  return `${Math.floor(diff / 365)}年前`;
}

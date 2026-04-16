import type { MetadataRoute } from "next";
import { newsEntries } from "@/data/news";

const BASE = "https://claudecode.co.jp";

const staticRoutes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/llmo-reskilling", priority: 0.95, changeFrequency: "weekly" },
  { path: "/claude-code-houjin", priority: 0.9, changeFrequency: "monthly" },
  { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
  { path: "/curriculum", priority: 0.9, changeFrequency: "weekly" },
  { path: "/curriculum/step1", priority: 0.8, changeFrequency: "monthly" },
  { path: "/curriculum/step2", priority: 0.8, changeFrequency: "monthly" },
  { path: "/curriculum/step3", priority: 0.8, changeFrequency: "monthly" },
  { path: "/curriculum/step4", priority: 0.8, changeFrequency: "monthly" },
  { path: "/price", priority: 0.9, changeFrequency: "weekly" },
  { path: "/case", priority: 0.9, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.9, changeFrequency: "monthly" },
  { path: "/process", priority: 0.85, changeFrequency: "monthly" },
  { path: "/compare", priority: 0.8, changeFrequency: "monthly" },
  { path: "/consultation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fit-check", priority: 0.7, changeFrequency: "monthly" },
  { path: "/estimate", priority: 0.7, changeFrequency: "monthly" },
  { path: "/seminars", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
  { path: "/works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/saleslink", priority: 0.6, changeFrequency: "monthly" },
  { path: "/info", priority: 0.6, changeFrequency: "weekly" },
  { path: "/company", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/tokushoho", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
  const newsEntriesSitemap: MetadataRoute.Sitemap = newsEntries.map((e) => ({
    url: `${BASE}/info/${e.slug}`,
    lastModified: e.date ? new Date(e.date) : now,
    changeFrequency: e.type === "blog" ? "monthly" : "yearly",
    priority: e.type === "blog" ? 0.8 : 0.6,
  }));
  return [...staticEntries, ...newsEntriesSitemap];
}

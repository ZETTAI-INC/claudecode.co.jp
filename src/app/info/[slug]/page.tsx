import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import { newsEntries, getNewsBySlug } from "@/data/news";
import {
  readingTime,
  formatDate,
  extractHeadings,
} from "@/lib/article-utils";

export function generateStaticParams() {
  return newsEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNewsBySlug(slug);
  if (!entry) return {};
  const desc = entry.body.replace(/\s+/g, " ").trim().slice(0, 140);
  const url = `https://claudecode.co.jp/info/${entry.slug}`;
  return {
    title: `${entry.title} | Claude Code リスキリング研修`,
    description: desc,
    alternates: { canonical: `/info/${entry.slug}` },
    openGraph: {
      type: "article",
      url,
      title: entry.title,
      description: desc,
      publishedTime: entry.date,
      section: entry.category,
      tags: entry.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: desc,
    },
  };
}

function buildJsonLd(entry: NonNullable<ReturnType<typeof getNewsBySlug>>) {
  const url = `https://claudecode.co.jp/info/${entry.slug}`;
  const desc = entry.body.replace(/\s+/g, " ").trim().slice(0, 200);
  const publisher = {
    "@type": "Organization",
    name: "株式会社ZETTAI",
    logo: {
      "@type": "ImageObject",
      url: "https://claudecode.co.jp/favicon.png",
    },
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://claudecode.co.jp/" },
          { "@type": "ListItem", position: 2, name: "お知らせ・ブログ", item: "https://claudecode.co.jp/info" },
          { "@type": "ListItem", position: 3, name: entry.title, item: url },
        ],
      },
      {
        "@type": entry.type === "blog" ? "BlogPosting" : "NewsArticle",
        headline: entry.title,
        description: desc,
        datePublished: entry.date,
        dateModified: entry.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: entry.category,
        ...(entry.tags ? { keywords: entry.tags.join(", ") } : {}),
        inLanguage: "ja-JP",
        author: publisher,
        publisher,
        isPartOf: { "@id": "https://claudecode.co.jp/#website" },
        wordCount: entry.body.replace(/\s/g, "").length,
        timeRequired: `PT${readingTime(entry.body)}M`,
      },
    ],
  };
}

function slugify(text: string): string {
  return encodeURIComponent(text.replace(/\s+/g, "-"));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNewsBySlug(slug);
  if (!entry) notFound();

  const jsonLd = buildJsonLd(entry);
  const mins = readingTime(entry.body);
  const headings = extractHeadings(entry.body);
  const charCount = entry.body.replace(/\s/g, "").length;

  const related = newsEntries
    .filter((e) => e.slug !== entry.slug && e.type === entry.type)
    .slice(0, 3);

  return (
    <div id="page" className="site">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="primary" className="site-main">
        <section className="pt-8 pb-12 md:py-20">
          <div className="mx-auto px-5 md:px-4" style={{ maxWidth: 800 }}>
            {/* Header — stacked on mobile for clarity */}
            <div className="mb-5 md:mb-6">
              {/* Row 1: date + badge */}
              <div className="flex items-center gap-2 mb-3">
                <time className="text-xs md:text-sm text-gray-400 tabular-nums">
                  {formatDate(entry.date)}
                </time>
                <span
                  className="inline-flex items-center justify-center text-[11px] md:text-xs font-bold text-white rounded px-2.5 md:px-3 py-0.5"
                  style={{
                    backgroundColor:
                      entry.type === "blog" ? "#059669" : "#2563eb",
                  }}
                >
                  {entry.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-3xl font-bold leading-[1.4] md:leading-snug">
                {entry.title}
              </h1>

              {/* Row 2: reading info — below title on mobile */}
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  約{mins}分で読めます
                </span>
                <span className="text-gray-300">
                  {charCount.toLocaleString()}文字
                </span>
              </div>
            </div>

            {/* Tags — scrollable on mobile */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex gap-2 mb-5 md:mb-6 overflow-x-auto pb-1 -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap scrollbar-none">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5 whitespace-nowrap shrink-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Table of Contents — collapsible on mobile */}
            {headings.length >= 3 && <TableOfContents headings={headings} />}

            <hr className="border-gray-200 mb-6 md:mb-8" />

            {/* Article Body */}
            <article id="article-body" className="news-detail__body">
              {entry.body.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("■ ")) {
                  const text = paragraph.replace("■ ", "");
                  return (
                    <h2
                      key={i}
                      id={`heading-${slugify(text)}`}
                      className="text-base md:text-xl font-bold mt-8 md:mt-10 mb-3 md:mb-4 text-gray-900 scroll-mt-16 md:scroll-mt-20 border-l-[3px] border-blue-500 pl-3 md:border-l-0 md:pl-0"
                    >
                      {text}
                    </h2>
                  );
                }
                if (paragraph.startsWith("・")) {
                  const items = paragraph.split("\n").filter(Boolean);
                  return (
                    <ul key={i} className="mb-5 md:mb-6 space-y-2.5 md:space-y-2">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="text-[13px] md:text-base leading-relaxed text-gray-700 flex items-start gap-2.5 md:gap-2"
                        >
                          <span className="text-blue-500 mt-[7px] md:mt-1.5 shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6">
                              <circle cx="3" cy="3" r="3" fill="currentColor" />
                            </svg>
                          </span>
                          {item.replace(/^・/, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="mb-5 md:mb-6 text-[14px] md:text-base leading-[1.95] md:leading-[1.9] text-gray-700 whitespace-pre-wrap"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </article>

            <hr className="border-gray-200 mt-10 md:mt-12 mb-6 md:mb-8" />

            {/* Blog CTA — full-width button on mobile */}
            {entry.type === "blog" && (
              <div className="bg-blue-50 rounded-xl p-5 md:p-6 mb-8 text-center">
                <p className="text-sm font-bold text-gray-800 mb-1.5 md:mb-2">
                  Claude Codeの導入・研修をご検討中ですか？
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  30分の無料適合診断で、貴社に最適なプランをご提案します。
                </p>
                <Link
                  href="/consultation/"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-blue-600 rounded-full w-full md:w-auto px-6 py-3 md:py-2.5 hover:bg-blue-700 active:bg-blue-800 transition-colors"
                >
                  無料で相談する
                </Link>
              </div>
            )}

            {/* Related Articles — card style on mobile */}
            {related.length > 0 && (
              <div className="mb-8 md:mb-10">
                <p className="text-sm font-bold text-gray-800 mb-3 md:mb-4">
                  {entry.type === "blog" ? "関連ブログ記事" : "関連するお知らせ"}
                </p>
                <div className="space-y-2 md:space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/info/${r.slug}/`}
                      className="flex items-start gap-3 p-3.5 md:p-3 rounded-xl md:rounded-lg bg-gray-50 md:bg-transparent hover:bg-gray-100 active:bg-gray-200 transition-colors group"
                    >
                      <span
                        className="shrink-0 mt-1.5 md:mt-1 inline-block w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            r.type === "blog" ? "#059669" : "#2563eb",
                        }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] md:text-sm text-gray-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 md:line-clamp-1">
                          {r.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                          <time>{formatDate(r.date)}</time>
                          <span>{readingTime(r.body)}分で読める</span>
                        </div>
                      </div>
                      {/* Arrow on mobile */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="shrink-0 mt-1 text-gray-300 md:hidden"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back link — large tap target */}
            <div className="text-center">
              <Link
                href="/info/"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:opacity-70 active:opacity-50 transition-opacity py-3 px-4"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                お知らせ・ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

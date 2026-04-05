import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsEntries, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return newsEntries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getNewsBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} | CLAUDE CODE リスキリング研修`,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getNewsBySlug(slug);
  if (!entry) notFound();

  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="py-12 md:py-20">
          <div className="mx-auto px-4" style={{ maxWidth: 800 }}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <time className="text-sm text-gray-500">{entry.date}</time>
                <span
                  className="inline-flex items-center justify-center text-xs font-bold text-white rounded px-3 py-0.5"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  {entry.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                {entry.title}
              </h1>
            </div>

            <hr className="border-gray-200 mb-8" />

            <div className="news-detail__body">
              {entry.body.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-6 text-sm md:text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>

            <hr className="border-gray-200 mt-12 mb-8" />

            <div className="text-center">
              <Link
                href="/info/"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:opacity-70 transition-opacity"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                お知らせ一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

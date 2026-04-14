import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsEntries } from "@/data/news";

export const metadata: Metadata = {
  title: "お知らせ | Claude Code リスキリング研修",
};

export default function InfoPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <section className="py-12 md:py-20">
          <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
            <div className="p-headline mb-8 md:mb-12">
              <span className="p-headline__sub mb-2">NEWS</span>
              <p className="p-headline__main">お知らせ</p>
            </div>

            <ul>
              {newsEntries.map((entry, i) => (
                <li key={entry.slug}>
                  <Link
                    className="py-5 md:p-5 flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-0 hover:opacity-70 transition-opacity"
                    style={{
                      borderBottom: "solid 1px #E5DFDB",
                      ...(i === 0 ? { borderTop: "solid 1px #E5DFDB" } : {}),
                    }}
                    href={`/info/${entry.slug}/`}
                  >
                    <time className="w-24 flex-none text-sm text-gray-500">
                      {entry.date}
                    </time>
                    <span
                      className="inline-flex items-center justify-center text-xs font-bold text-white rounded px-3 py-0.5 flex-none"
                      style={{ backgroundColor: "#2563eb", minWidth: 100 }}
                    >
                      {entry.category}
                    </span>
                    <p className="md:ml-6 w-full md:w-auto">{entry.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

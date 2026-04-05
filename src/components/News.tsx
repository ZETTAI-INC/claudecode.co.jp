import Link from "next/link";
import { newsEntries } from "@/data/news";

export default function News() {
  const displayItems = newsEntries.slice(0, 4);

  return (
    <section className="py-10 md:py-20">
      <div className="l-container--news">
        <div className="p-headline mb-4 md:mb-6">
          <span className="p-headline__sub mb-2">NEWS</span>
          <p className="p-headline__main">お知らせ</p>
        </div>

        <ul>
          {displayItems.map((item, i) => (
            <li key={item.slug}>
              <Link
                className="py-5 md:p-5 flex"
                style={{
                  borderBottom: "solid 1px #E5DFDB",
                  ...(i === 0 ? { borderTop: "solid 1px #E5DFDB" } : {}),
                }}
                href={`/info/${item.slug}/`}
              >
                <p className="w-24 mr-2 md:mr-10 flex-none">{item.date}</p>
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/info/"
            className="mx-auto font-bold p-button p-button--chevron-right p-button--shadow py-3 px-14 p-button--blue"
          >
            もっと見る
          </Link>
        </div>
      </div>
    </section>
  );
}

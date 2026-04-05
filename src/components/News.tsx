import Link from "next/link";

interface NewsItem {
  date: string;
  title: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    date: "2026-04-01",
    title: "Claude Code最新アップデート対応 新カリキュラムをリリースしました",
    href: "/info/new-curriculum/",
  },
  {
    date: "2026-03-25",
    title: "【無料セミナー】AI時代のエンジニアに求められるスキルとは 4/15開催",
    href: "/info/seminar-0415/",
  },
  {
    date: "2026-03-18",
    title: "企業向けカスタム研修プログラムの提供を開始しました",
    href: "/info/custom-program/",
  },
  {
    date: "2026-03-10",
    title: "導入企業数100社を突破いたしました",
    href: "/info/100-companies/",
  },
];

export default function News() {
  return (
    <section className="py-10 md:py-20">
      <div className="l-container--news">
        <div className="p-headline mb-4 md:mb-6">
          <span className="p-headline__sub mb-2">NEWS</span>
          <p className="p-headline__main">お知らせ</p>
        </div>

        <ul>
          {newsItems.map((item, i) => (
            <li key={item.href}>
              <Link
                className="py-5 md:p-5 flex"
                style={{
                  borderBottom: "solid 1px #E5DFDB",
                  ...(i === 0 ? { borderTop: "solid 1px #E5DFDB" } : {}),
                }}
                href={item.href}
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

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "研修プログラム", href: "/#contentServices" },
  { label: "料金プラン", href: "/price/" },
  { label: "導入事例", href: "/case/" },
  { label: "セミナー情報", href: "/seminars/" },
  { label: "お役立ち資料", href: "/resources/" },
  { label: "お知らせ", href: "/info/" },
];

const bottomLinks = [
  { label: "運営会社", href: "/company/" },
  { label: "プライバシーポリシー", href: "/privacy/" },
  { label: "利用規約", href: "/terms/" },
];

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer">
      <div className="pt-6 pb-10 md:py-10 mx-auto md:flex justify-between" style={{ maxWidth: 1200 }}>
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            CLAUDECODE研修
          </Link>
        </div>

        <ul className="text-xs flex flex-wrap justify-center md:justify-end items-center md:font-bold">
          <li className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto md:mr-2.5 sp-only">
            <Link href="/">TOP</Link>
          </li>
          {footerLinks.map((item) => (
            <li
              key={item.label}
              className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto md:mr-2.5"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-600 py-6">
        <ul className="text-xs flex flex-wrap justify-center items-center gap-4 mb-4">
          {bottomLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <p className="text-xs text-center text-gray-400">
          © 株式会社ZETTAI
        </p>
      </div>
    </footer>
  );
}

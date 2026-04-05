"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "研修プログラム", href: "#contentServices" },
  { label: "料金プラン", href: "/price/" },
  { label: "導入事例", href: "/case/" },
  { label: "セミナー情報", href: "/seminars/" },
  { label: "お役立ち資料", href: "/resources/" },
  { label: "お知らせ", href: "/info/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header bg-white mx-auto flex flex-wrap justify-between md:justify-center items-stretch md:items-center md:items-start md:py-2 md:pr-3 pl-5 md:pl-8 fixed left-0 right-0 md:top-4 top-0 z-50">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: "#1a1a1a" }}>
          CLAUDECODE研修
        </Link>
      </div>

      <nav className="flex-1 w-auto">
        <div className="flex justify-end items-center mt-4 md:mt-0">
          <button
            className="menu-toggle ml-2 h-full border-none pr-5 md:hidden"
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src="/img/theme/hamburger_menu.svg"
              alt="メニュー"
              width={24}
              height={24}
            />
          </button>
        </div>

        <ul
          id="primary-menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex pt-3 md:pt-0 justify-end font-bold flex-wrap flex-col md:flex-row absolute md:relative left-0 right-0 top-full md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 md:z-auto px-5 md:px-0 pb-4 md:pb-0`}
        >
          {menuItems.map((item) => (
            <li key={item.label} className="text-sm py-3 md:py-0 md:mx-2">
              <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="text-sm py-3 md:py-0 md:mx-2 text-pink-500">
            <Link href="/resources/" onClick={() => setIsMenuOpen(false)}>
              資料ダウンロード
            </Link>
          </li>
          <li className="md:hidden py-3">
            <Link
              href="/contact/"
              className="p-button p-button--info p-button--shadow p-button--chevron-right text-sm font-bold py-2 px-6 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談する
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/contact/"
        className="site-header__trial flex-shrink-0 p-button p-button--info py-2.5 px-6 text-sm hidden md:block font-bold"
      >
        無料相談
      </Link>
    </header>
  );
}

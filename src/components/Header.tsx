"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "適正診断", href: "/fit-check/", icon: "checklist" },
  { label: "コース一覧", href: "/courses/", icon: "school" },
  { label: "料金プラン", href: "/price/", icon: "payments" },
  { label: "AI比較", href: "/compare/", icon: "compare_arrows" },
  { label: "事例", href: "/case/", icon: "cases" },
  { label: "無料セミナー", href: "/seminars/", icon: "videocam" },
  { label: "お知らせ", href: "/info/", icon: "campaign" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header header">
      <div className="header__inner">
        <Link href="/" className="header__logo" aria-label="CLAUDECODE研修">
          <span className="header__logo-mark">CLAUDECODE</span>
          <span className="header__logo-sub">研修</span>
        </Link>

        <button
          className="header__burger"
          aria-controls="primary-menu"
          aria-expanded={isMenuOpen}
          aria-label="メニュー"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`header__burger-line ${isMenuOpen ? "header__burger-line--open" : ""}`} />
        </button>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.label} className="header__menu-item">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  <span className="material-icons-outlined header__menu-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/consultation/"
            className="header__cta"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-icons-outlined header__menu-icon">mail_outline</span>
            無料相談
          </Link>
        </nav>
      </div>
    </header>
  );
}

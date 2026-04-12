import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "研修プログラム", href: "/#contentServices" },
  { label: "料金プラン", href: "/price/" },
  { label: "導入事例", href: "/case/" },
  { label: "セミナー情報", href: "/seminars/" },
  { label: "お知らせ", href: "/info/" },
];

const supportLinks = [
  { label: "お役立ち資料", href: "/resources/" },
  { label: "よくある質問", href: "/#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

const legalLinks = [
  { label: "利用規約", href: "/terms/" },
  { label: "プライバシーポリシー", href: "/privacy/" },
  { label: "特定商取引法に基づく表記", href: "/tokushoho/" },
];

const corporateLinks = [
  { label: "運営会社", href: "/company/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA bar */}
      <div className="footer__cta-bar">
        <div className="footer__cta-inner">
          <div className="footer__cta-text">
            <p className="footer__cta-heading">
              14日で内製化できる業務か、<strong>30分で診断</strong>します
            </p>
            <p className="footer__cta-sub">
              対象部署・作りたい業務・セキュリティ前提の3点だけ確認します
            </p>
          </div>
          <div className="footer__cta-buttons">
            <Link href="/consultation/" className="footer__cta-btn footer__cta-btn--primary">
              <span className="material-icons-outlined footer__btn-icon">mail_outline</span>
              30分の適合診断を受ける
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo-link">
              <Image
                src="/img/logo.svg"
                alt="CLAUDE CODE 研修"
                width={200}
                height={32}
                style={{ display: "block", width: "auto", height: "28px", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="footer__brand-desc">
              Claude Codeを活用した実践型AI研修で、<br />
              企業のDX人材育成をサポートします。
            </p>
            <div className="footer__brand-contact">
              <div className="footer__contact-row">
                <span className="material-icons-outlined footer__contact-icon">mail</span>
                <a href="mailto:info@claudecode.co.jp" className="footer__contact-value">info@claudecode.co.jp</a>
              </div>
              <div className="footer__contact-row">
                <span className="material-icons-outlined footer__contact-icon">location_on</span>
                <span className="footer__contact-value">東京都渋谷区</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer__nav">
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">サービス</h3>
              <ul className="footer__nav-list">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">サポート</h3>
              <ul className="footer__nav-list">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="footer__nav-title footer__nav-title--mt">企業情報</h3>
              <ul className="footer__nav-list">
                {corporateLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">法務・規約</h3>
              <ul className="footer__nav-list">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-links">
            <Link href="/terms/">利用規約</Link>
            <span className="footer__bottom-divider">|</span>
            <Link href="/privacy/">プライバシーポリシー</Link>
            <span className="footer__bottom-divider">|</span>
            <Link href="/tokushoho/">特定商取引法に基づく表記</Link>
          </div>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} 株式会社ZETTAI All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

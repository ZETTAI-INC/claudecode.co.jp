import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セールスリンク｜高単価BtoB商材特化のテレアポ代行サービス",
  description:
    "株式会社セールスリンクは高単価BtoB商材特化のテレアポ代行サービスを通じて営業活動をご支援する会社です。",
  keywords: "株式会社セールスリンク",
  openGraph: {
    title: "セールスリンク｜高単価BtoB商材特化のテレアポ代行サービス",
    url: "https://saleslink.jp",
    description:
      "株式会社セールスリンクは高単価BtoB商材特化のテレアポ代行サービスを通じて営業活動をご支援する会社です。",
    type: "website",
    siteName: "セールスリンク",
    images: ["/saleslink/assets/images/ogp.jpg"],
    locale: "ja_JP",
  },
  icons: {
    icon: "/saleslink/favicon.ico",
  },
};

export default function SaleslinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

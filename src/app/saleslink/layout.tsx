import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZETTAI｜高単価BtoB商材特化のテレアポ代行サービス",
  description:
    "株式会社ZETTAIは高単価BtoB商材特化のテレアポ代行サービスを通じて営業活動をご支援する会社です。",
  keywords: "株式会社ZETTAI",
  openGraph: {
    title: "ZETTAI｜高単価BtoB商材特化のテレアポ代行サービス",
    url: "https://saleslink.jp",
    description:
      "株式会社ZETTAIは高単価BtoB商材特化のテレアポ代行サービスを通じて営業活動をご支援する会社です。",
    type: "website",
    siteName: "ZETTAI",
    images: ["/ogp.png"],
    locale: "ja_JP",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function SaleslinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

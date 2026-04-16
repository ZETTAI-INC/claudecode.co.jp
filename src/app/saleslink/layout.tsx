import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalesLink｜高単価BtoB商材特化のテレアポ代行",
  description:
    "株式会社ZETTAIが提供するSalesLinkは、高単価BtoB商材に特化したテレアポ代行サービス。AI研修「おうとまくん」運営会社のノウハウで営業活動を支援します。",
  keywords: [
    "SalesLink",
    "テレアポ代行",
    "BtoB 営業代行",
    "高単価商材 営業",
    "株式会社ZETTAI",
    "おうとまくん",
    "営業支援サービス",
    "インサイドセールス",
  ],
  alternates: {
    canonical: "https://claudecode.co.jp/saleslink",
  },
  openGraph: {
    title: "SalesLink｜高単価BtoB商材特化のテレアポ代行",
    description:
      "株式会社ZETTAIが提供する高単価BtoB商材特化のテレアポ代行サービス「SalesLink」。営業活動を効率化します。",
    type: "website",
    locale: "ja_JP",
    url: "https://claudecode.co.jp/saleslink",
    siteName: "SalesLink",
    images: ["/ogp.png"],
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

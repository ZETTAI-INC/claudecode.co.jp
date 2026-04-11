import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "営業代行・カスタマーサクセス・コールセンター代行なら【リクルートスタッフィング】",
  description:
    "リクルートのノウハウが詰まったKPIマネジメントで中長期で成果を出す仕組みを構築。中小企業から大企業まで様々な課題に合わせてご提案させていただきます。",
  keywords:
    "アウトソーシング,業務委託,BPO,営業代行,カスタマーサクセス代行,コールセンター代行,インサイドセールス,販売支援(セールスプロモーション),コールセンター&カスタマーサクセス,販売支援営業業務,ラウンダー業務,営業支援業務,リクルートスタッフィング",
  openGraph: {
    title:
      "営業代行・カスタマーサクセス・コールセンター代行なら【リクルートスタッフィング】",
    url: "https://www.r-staffing.co.jp/sol/contents/client/lp/sales_01/",
    description:
      "リクルートのノウハウが詰まったKPIマネジメントで中長期で成果を出す仕組みを構築。中小企業から大企業まで様々な課題に合わせてご提案させていただきます。",
    type: "website",
    siteName:
      "営業代行・カスタマーサクセス・コールセンター代行なら【リクルートスタッフィング】",
    images: [
      "https://www.r-staffing.co.jp/sol/contents/client/lp/sales_01/assets/images/ogp-6897686cad.jpg",
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/rstaffing/assets/images/favicon-c7f42e4e15.png",
  },
};

export default function RstaffingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

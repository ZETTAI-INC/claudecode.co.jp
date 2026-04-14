import type { Metadata } from "next";
import {
  M_PLUS_1p,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Roboto,
} from "next/font/google";
import "./globals.css";

const mplus1p = M_PLUS_1p({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mplus1p",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claudecode.co.jp"),
  title: "CLAUDE CODE リスキリング研修 | 株式会社ZETTAI",
  description:
    "Claude Codeを活用したAI開発スキルの習得を、企業・個人向けにサポート。実践型リスキリング研修サービス。",
  openGraph: {
    locale: "ja_JP",
    siteName: "CLAUDE CODE リスキリング研修",
    type: "website",
    title: "CLAUDE CODE リスキリング研修 | 株式会社ZETTAI",
    url: "https://claudecode.co.jp/",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "CLAUDE CODE リスキリング研修 | 株式会社ZETTAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAUDE CODE リスキリング研修 | 株式会社ZETTAI",
    images: ["/ogp.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      dir="ltr"
      className={`${mplus1p.variable} ${notoSansJP.variable} ${notoSerifJP.variable} ${roboto.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

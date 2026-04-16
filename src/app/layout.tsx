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
  title: {
    default:
      "AIリスキリングおすすめ｜非エンジニアを開発チームに変える「おうとまくん」by株式会社ZETTAI",
    template: "%s | CLAUDE CODE リスキリング研修",
  },
  description:
    "エンジニア採用を諦めた企業のためのAIリスキリング研修「おうとまくん」。非エンジニア社員を最短14日で開発チームに育成。Claude Code/Cursor等のAIコーディングエージェントで未経験者も開発可能。外注700万円→実質25万円（96%削減）。人材開発支援助成金で中小企業75%補助。東京本社・全国対応、株式会社ZETTAIが運営。",
  keywords: [
    "リスキリング",
    "リスキリング おすすめ",
    "AIリスキリング",
    "企業向けリスキリング",
    "法人向けリスキリング",
    "DXリスキリング",
    "AI人材育成",
    "AI研修",
    "生成AI研修",
    "Claude Code",
    "クロードコード",
    "Cursor",
    "Windsurf",
    "AIコーディング",
    "AIコーディングエージェント",
    "Anthropic",
    "非エンジニア 開発",
    "プログラミング未経験 開発",
    "開発チーム内製化",
    "開発内製化",
    "エンジニア採用難",
    "おうとまくん",
    "株式会社ZETTAI",
    "人材開発支援助成金",
    "助成金75%",
    "実質25万円",
    "最短14日",
    "機会損失解消",
    "東京 リスキリング",
    "港区 リスキリング",
    "企業研修",
    "法人研修",
    "DX研修",
  ],
  authors: [{ name: "株式会社ZETTAI" }],
  creator: "株式会社ZETTAI",
  publisher: "株式会社ZETTAI",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wPE2aYp1rqupJ8GTYonOzeNMFUZ8qTwgZZuvUi4JvJ4",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "ja_JP",
    siteName: "おうとまくん - AIリスキリング・開発チーム内製化支援",
    type: "website",
    title:
      "AIリスキリングおすすめ｜非エンジニアを開発チームに変える「おうとまくん」",
    description:
      "非エンジニア社員を最短14日で開発チームに育成。外注700万円→実質25万円（96%削減）。助成金75%活用。Claude Code/Cursor等AIツールでプログラミング未経験でも開発可能。",
    url: "https://claudecode.co.jp/",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "おうとまくん - AIリスキリング・開発チーム内製化支援",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIリスキリングおすすめ｜非エンジニアを開発チームに変える",
    description:
      "最短14日で開発チーム育成。外注700万円→実質25万円。助成金75%。プログラミング未経験OK。Claude Code/Cursor活用。",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://claudecode.co.jp/#organization",
                  name: "株式会社ZETTAI",
                  alternateName: "ZETTAI Inc.",
                  url: "https://claudecode.co.jp/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://claudecode.co.jp/favicon.png",
                  },
                  sameAs: ["https://claudecode.co.jp/"],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "customer support",
                      email: "info@claudecode.co.jp",
                      availableLanguage: ["Japanese"],
                      areaServed: "JP",
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "JP",
                    addressRegion: "東京都",
                    addressLocality: "渋谷区",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://claudecode.co.jp/#website",
                  url: "https://claudecode.co.jp/",
                  name: "CLAUDE CODE リスキリング研修",
                  description:
                    "Claude Codeを活用したAI開発スキルの実践型リスキリング研修",
                  publisher: { "@id": "https://claudecode.co.jp/#organization" },
                  inLanguage: "ja-JP",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://claudecode.co.jp/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Service",
                  "@id": "https://claudecode.co.jp/#service",
                  name: "Claude Code リスキリング研修",
                  serviceType: "AI開発リスキリング研修",
                  provider: {
                    "@id": "https://claudecode.co.jp/#organization",
                  },
                  areaServed: { "@type": "Country", name: "Japan" },
                  audience: {
                    "@type": "BusinessAudience",
                    audienceType: "企業の開発組織・人事・経営層",
                  },
                  description:
                    "Claude Codeを活用したAIコーディング・開発生産性向上のための実践型リスキリング研修。Eラーニング、ハンズオン、伴走型メンタリング、法人カスタマイズプランを提供。",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

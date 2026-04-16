import React from "react";

interface Company {
  name: string;
  domain: string;
}

const companies: Company[] = [
  // Global
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Sourcegraph", domain: "sourcegraph.com" },
  { name: "GitLab", domain: "gitlab.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Perplexity", domain: "perplexity.ai" },
  { name: "Replit", domain: "replit.com" },
  { name: "Cursor", domain: "cursor.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Asana", domain: "asana.com" },
  { name: "Robinhood", domain: "robinhood.com" },
  { name: "Quora", domain: "quora.com" },
  { name: "Zoom", domain: "zoom.us" },
  { name: "DoorDash", domain: "doordash.com" },
  { name: "Instacart", domain: "instacart.com" },

  // Japan
  { name: "KDDI", domain: "kddi.com" },
  { name: "LINEヤフー", domain: "yahoo.co.jp" },
  { name: "楽天グループ", domain: "rakuten.co.jp" },
  { name: "サイバーエージェント", domain: "cyberagent.co.jp" },
  { name: "メルカリ", domain: "mercari.com" },
  { name: "DeNA", domain: "dena.com" },
  { name: "Sansan", domain: "sansan.com" },
  { name: "DMM.com", domain: "dmm.com" },
  { name: "マネーフォワード", domain: "moneyforward.com" },
  { name: "SmartHR", domain: "smarthr.jp" },
  { name: "LayerX", domain: "layerx.co.jp" },
  { name: "グリー", domain: "gree.net" },
];

const CompanyLogo: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 flex-shrink-0">
      <div className="w-8 h-8 rounded shadow-sm bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
        <img
          src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
          alt={`${company.name} logo`}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="font-bold text-[#1F2937] text-[14px] tracking-tight whitespace-nowrap">
        {company.name}
      </span>
    </div>
  );
};

export default function ClientCompanies() {
  const third = Math.ceil(companies.length / 3);
  const row1 = companies.slice(0, third);
  const row2 = companies.slice(third, third * 2);
  const row3 = companies.slice(third * 2);

  return (
    <section className="bg-white py-14 md:py-24 px-4 sm:px-6 font-sans text-[#333] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* --- Header --- */}
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl md:text-[28px] font-bold tracking-wider text-gray-800">
            Claude Code 活用企業
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest leading-none mb-1">
            Claude Code
          </div>
        </div>
        <div className="w-full h-[5px] md:h-[6px] bg-[#1890FF] mb-12 md:mb-16"></div>

        {/* --- Subtitle --- */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-[16px] md:text-[22px] font-bold text-gray-700 tracking-wider">
            世界中の企業がClaude Codeで開発を加速しています
          </h3>
        </div>
      </div>

      {/* --- Marquee Row 1 (left) --- */}
      <div className="relative mb-5 overflow-hidden">
        <div className="flex w-max animate-marquee-left">
          {[...row1, ...row1, ...row1].map((company, i) => (
            <CompanyLogo key={`r1-${i}`} company={company} />
          ))}
        </div>
      </div>

      {/* --- Marquee Row 2 (right) --- */}
      <div className="relative mb-5 overflow-hidden">
        <div className="flex w-max animate-marquee-right">
          {[...row2, ...row2, ...row2].map((company, i) => (
            <CompanyLogo key={`r2-${i}`} company={company} />
          ))}
        </div>
      </div>

      {/* --- Marquee Row 3 (left) --- */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee-left">
          {[...row3, ...row3, ...row3].map((company, i) => (
            <CompanyLogo key={`r3-${i}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}

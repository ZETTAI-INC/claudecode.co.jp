import React from "react";

interface Company {
  name: string;
  domain: string;
}

const companies: Company[] = [
  // US & Global
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
  { name: "Zoom", domain: "zoom.us" },
  { name: "Asana", domain: "asana.com" },
  { name: "GitLab", domain: "gitlab.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Sourcegraph", domain: "sourcegraph.com" },
  { name: "Perplexity", domain: "perplexity.ai" },
  { name: "Quora", domain: "quora.com" },
  { name: "Robinhood", domain: "robinhood.com" },
  
  // Japan
  { name: "KDDI", domain: "kddi.com" },
  { name: "LINEヤフー", domain: "yahoo.co.jp" },
  { name: "楽天グループ", domain: "rakuten.co.jp" },
  { name: "サイバーエージェント", domain: "cyberagent.co.jp" },
  { name: "メルカリ", domain: "mercari.com" },
  { name: "DeNA", domain: "dena.com" },
  { name: "Sansan", domain: "sansan.com" },
  { name: "DMM.com", domain: "dmm.com" },
  { name: "グリー", domain: "gree.net" },
  { name: "マネーフォワード", domain: "moneyforward.com" },
];

const CompanyLogo: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <div className="flex items-center justify-start sm:justify-center p-3 md:p-4 opacity-[0.65] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Favicon Icon container */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded shadow-sm bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 relative overflow-hidden p-1.5">
          {/* Using raw img tag to avoid Next.js Image domain configurations for external favicon APIs */}
          <img 
            src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`} 
            alt={`${company.name} logo`} 
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Company Name */}
        <div className="font-bold text-[#1F2937] text-[14px] md:text-[16px] tracking-tight whitespace-nowrap">
          {company.name}
        </div>
      </div>
    </div>
  );
};

export default function ClientCompanies() {
  return (
    <section className="bg-white py-14 md:py-24 px-4 sm:px-6 font-sans text-[#333]">
      <div className="max-w-[1040px] mx-auto">
        
        {/* --- Global Header --- */}
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl md:text-[28px] font-bold tracking-wider text-gray-800">
            導入企業
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest leading-none mb-1">
            Claude Code
          </div>
        </div>
        {/* Blue Thick Line */}
        <div className="w-full h-[5px] md:h-[6px] bg-[#1890FF] mb-12 md:mb-16"></div>

        {/* --- Subtitle --- */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-[16px] md:text-[22px] font-bold text-gray-700 tracking-wider">
            スタートアップから大手企業まで幅広い内製化を支援しています
          </h3>
        </div>

        {/* --- Logos Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 md:gap-y-10 gap-x-2 md:gap-x-4">
          {companies.map((company, index) => (
            <CompanyLogo key={index} company={company} />
          ))}
        </div>

      </div>
    </section>
  );
}

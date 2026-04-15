import React from 'react';

const CeoMessage: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-5 md:px-16 bg-white border-t border-black/10 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
        {/* Photo */}
        <div className="w-full md:w-2/5 flex justify-center shrink-0">
          <div className="relative">
            <img 
              src="/img/theme/home/ogata-optimized.webp" 
              alt="CEO 小潟 一" 
              className="w-full max-w-[280px] md:max-w-[340px] drop-shadow-2xl object-contain"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center py-4 md:py-10">
          <h2 className="text-2xl md:text-[2rem] font-black tracking-tighter leading-[1.6] mb-8 text-black">
            キャッチコピーが<br />
            入りますキャッチコピーが入ります
          </h2>
          
          <p className="text-[13px] md:text-[14px] font-bold leading-[2.2] text-gray-600 mb-10 text-justify tracking-wide">
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
          </p>
          
          {/* Signature */}
          <div className="flex flex-col items-end pt-2">
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-black/60 mb-2">運営会社 株式会社ZETTAI</span>
            <div className="flex items-baseline gap-3">
              <span className="text-xl md:text-2xl font-black tracking-[0.15em] text-black mb-1">小潟 一</span>
            </div>
            <span className="text-xs md:text-sm font-bold tracking-widest text-black/40">CEO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;

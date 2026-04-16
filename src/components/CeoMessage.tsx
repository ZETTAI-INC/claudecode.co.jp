import React from 'react';

const CeoMessage: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-5 md:px-16 bg-[#FAFAFA] border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto flex justify-end">
        <div className="flex flex-col items-end">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-slate-400 mb-3">運営会社 株式会社ZETTAI</span>
          <div className="flex items-end gap-5">
            <span className="text-[11px] sm:text-[13px] font-semibold tracking-[0.1em] text-slate-400 mb-[3px]">代表取締役 / CEO</span>
            <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-slate-900">一翔</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;

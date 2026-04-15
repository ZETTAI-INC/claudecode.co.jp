import React from 'react';

const CeoMessage: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-5 md:px-16 bg-white border-t border-black/10 relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
        {/* Photo */}
        <div className="w-full md:w-2/5 flex justify-center shrink-0">
          <div className="relative">
            <img 
              src="/img/theme/home/issho.png" 
              alt="CEO 一翔" 
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
            圧倒的な開発スピードを生み出す<br />
            「最強のペアプロパートナー」
          </h2>
          
          <p className="text-[13px] md:text-[14px] font-bold leading-[2.2] text-gray-600 mb-10 text-justify tracking-wide">
            Claude Codeは、単なる開発補助ツール以上の可能性を秘めています。私たちの開発現場では、Claude Codeの導入により、これまで数日かかっていたコーディング作業がわずか数時間に短縮され、劇的な生産性向上を実現しました。エンジニアはルーチンワークから解放され、より創造的でユーザー価値の高い設計に集中できるようになります。この革新的なAIエージェントは、社内のナレッジを共有し、チーム全体のスキルを底上げする強力な味方でもあります。株式会社ZETTAIは、Claude Codeの持つ圧倒的なポテンシャルを最大限に引き出し、お客様のビジネスに圧倒的なスピードと品質をもたらすことをお約束します。
          </p>
          
          {/* Signature */}
          <div className="flex flex-col items-end pt-2">
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-black/60 mb-2">運営会社 株式会社ZETTAI</span>
            <div className="flex items-baseline gap-3">
              <span className="text-xl md:text-2xl font-black tracking-[0.15em] text-black mb-1">一翔</span>
            </div>
            <span className="text-xs md:text-sm font-bold tracking-widest text-black/40">CEO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;

import React from 'react';

const MentorshipSupport: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-sans text-[#333]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-[24px] font-bold tracking-wider text-gray-800">
            圧倒的な伴走サポート
          </h2>
          <div className="text-[#1890FF] font-black text-lg md:text-xl tracking-widest">
            Claude Code
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-16 px-4">
          <p className="text-[16px] md:text-[20px] font-bold leading-[1.8] tracking-wide text-gray-700">
            高学歴・理系の若手AI人材を中心に専門メンター陣を構築。<br className="hidden md:block" />
            AIネイティブ世代の吸収力で絶えず最新ナレッジを蓄積し、未経験の視点に立って徹底伴走します。
          </p>
        </div>

        {/* Diagram Area */}
        <div className="relative w-full overflow-x-auto pb-6 mt-10 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="relative min-w-[800px] max-w-[800px] h-[500px] mx-auto">

          
          {/* SVG Arrows Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 500" preserveAspectRatio="none">
            <defs>
              {/* Blue Arrowhead Right/Up */}
              <marker id="arrow-blue-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#1890FF" />
              </marker>
              {/* Gray Arrowhead Right/Up */}
              <marker id="arrow-gray-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#6B7280" />
              </marker>
              {/* Blue Arrowhead Left/Down */}
              <marker id="arrow-blue-down" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 0 L 0 5 L 10 10 z" fill="#1890FF" />
              </marker>
              {/* Gray Arrowhead Left/Down */}
              <marker id="arrow-gray-down" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 0 L 0 5 L 10 10 z" fill="#6B7280" />
              </marker>
            </defs>

            {/* Top <-> Bottom Left */}
            {/* Blue line (Top to BottomLeft, slightly offset outside) */}
            <line x1="380" y1="180" x2="230" y2="350" stroke="#1890FF" strokeWidth="2" markerEnd="url(#arrow-blue-up)" />
            {/* Gray line (BottomLeft to Top, slightly offset inside) */}
            <line x1="260" y1="370" x2="410" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow-gray-up)" />

            {/* Top <-> Bottom Right */}
            {/* Blue line (BottomRight to Top, outside) */}
            <line x1="570" y1="350" x2="420" y2="180" stroke="#1890FF" strokeWidth="2" markerEnd="url(#arrow-blue-up)" />
            {/* Gray line (Top to BottomRight, inside) */}
            <line x1="390" y1="200" x2="540" y2="370" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow-gray-up)" />

            {/* Bottom Left <-> Bottom Right */}
            {/* Blue line (Left to Right, top) */}
            <line x1="250" y1="400" x2="550" y2="400" stroke="#1890FF" strokeWidth="2" markerEnd="url(#arrow-blue-up)" />
            {/* Gray line (Right to Left, bottom) */}
            <line x1="550" y1="425" x2="250" y2="425" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow-gray-up)" />
          </svg>

          {/* Node: Top (若手エースAIメンター) */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white px-6 py-2 rounded-xl z-10 w-[200px]">
            {/* Three Blue People Icon */}
            <div className="relative text-[#1890FF] w-24 h-16 flex justify-center items-end mb-2">
              <svg viewBox="0 0 100 60" fill="currentColor" className="w-full h-full">
                {/* Left Person */}
                <circle cx="25" cy="20" r="10" />
                <path d="M 5 55 Q 5 35 25 35 Q 45 35 45 55 Z" />
                {/* Right Person */}
                <circle cx="75" cy="20" r="10" />
                <path d="M 55 55 Q 55 35 75 35 Q 95 35 95 55 Z" />
                {/* Center Person (Larger & Front) */}
                <circle cx="50" cy="15" r="12" className="text-[#0D6EDA]" />
                <path d="M 25 60 Q 25 35 50 35 Q 75 35 75 60 Z" className="text-[#0D6EDA]" />
              </svg>
            </div>
            <span className="font-bold text-lg text-[#1890FF] tracking-wide">若手エースAIメンター</span>
            <span className="text-[10px] text-gray-500 font-bold mt-1">(高学歴・理系人材)</span>
          </div>

          {/* Node: Bottom Left (企業・研修受講者) */}
          <div className="absolute top-[75%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white px-2 py-2 rounded-xl z-10 w-[180px]">
            {/* Gray Building Icon */}
            <div className="text-gray-600 w-16 h-20 mb-3">
              <svg viewBox="0 0 60 80" fill="currentColor" className="w-full h-full">
                <rect x="10" y="20" width="40" height="60" rx="2" />
                <rect x="5" y="75" width="50" height="5" />
                {/* Windows */}
                <rect x="15" y="25" width="8" height="8" fill="white" />
                <rect x="26" y="25" width="8" height="8" fill="white" />
                <rect x="37" y="25" width="8" height="8" fill="white" />
                
                <rect x="15" y="40" width="8" height="8" fill="white" />
                <rect x="26" y="40" width="8" height="8" fill="white" />
                <rect x="37" y="40" width="8" height="8" fill="white" />
                
                <rect x="15" y="55" width="8" height="8" fill="white" />
                <rect x="26" y="55" width="8" height="8" fill="white" />
                <rect x="37" y="55" width="8" height="8" fill="white" />
                
                {/* Door */}
                <rect x="25" y="68" width="10" height="12" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-base text-gray-700 tracking-wide text-center">企業・受講者</span>
            <span className="text-[10px] text-gray-500 font-bold mt-1">(未経験スタート)</span>
          </div>

          {/* Node: Bottom Right (ZETT-AI ナレッジ) */}
          <div className="absolute top-[75%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white px-2 py-2 rounded-xl z-10 w-[180px]">
            {/* Blue Building Icon */}
            <div className="text-[#1890FF] w-[80px] h-20 mb-3 flex items-end">
              <svg viewBox="0 0 80 80" fill="currentColor" className="w-full h-full">
                <rect x="5" y="40" width="20" height="40" rx="1" />
                <rect x="28" y="20" width="24" height="60" rx="1" />
                <rect x="55" y="30" width="20" height="50" rx="1" />
                
                {/* Windows Building 1 */}
                <rect x="8" y="45" width="6" height="6" fill="white" />
                <rect x="16" y="45" width="6" height="6" fill="white" />
                <rect x="8" y="55" width="6" height="6" fill="white" />
                <rect x="16" y="55" width="6" height="6" fill="white" />
                
                {/* Windows Building 2 */}
                <rect x="32" y="25" width="6" height="6" fill="white" />
                <rect x="42" y="25" width="6" height="6" fill="white" />
                <rect x="32" y="35" width="6" height="6" fill="white" />
                <rect x="42" y="35" width="6" height="6" fill="white" />
                <rect x="32" y="45" width="6" height="6" fill="white" />
                <rect x="42" y="45" width="6" height="6" fill="white" />
                <rect x="32" y="55" width="6" height="6" fill="white" />
                <rect x="42" y="55" width="6" height="6" fill="white" />
                
                {/* Windows Building 3 */}
                <rect x="58" y="35" width="6" height="6" fill="white" />
                <rect x="68" y="35" width="6" height="6" fill="white" />
                <rect x="58" y="45" width="6" height="6" fill="white" />
                <rect x="68" y="45" width="6" height="6" fill="white" />
                <rect x="58" y="55" width="6" height="6" fill="white" />
                <rect x="68" y="55" width="6" height="6" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-base text-[#1890FF] tracking-wide text-center">AI進化ノウハウ</span>
            <span className="text-[10px] text-gray-500 font-bold mt-1">(ZETT-AIナレッジ)</span>
          </div>

          {/* Text Labels for Arrows */}
          
          {/* Top <-> Bottom Left Labels */}
          {/* Blue Label */}
          <div className="absolute top-[35%] left-[26%] -translate-x-1/2 -translate-y-1/2 text-left bg-white/80 px-1 py-0.5 rounded z-20">
            <span className="text-xs md:text-sm font-bold text-[#1890FF]">未経験の視点に立つ伴走支援</span>
          </div>
          {/* Gray Label */}
          <div className="absolute top-[45%] left-[38%] -translate-x-1/2 -translate-y-1/2 text-left bg-white/80 px-1 py-0.5 rounded z-20">
            <span className="text-xs font-bold text-gray-700">挫折や疑問点のリアルな共有</span>
          </div>

          {/* Top <-> Bottom Right Labels */}
          {/* Blue Label */}
          <div className="absolute top-[35%] left-[74%] -translate-x-1/2 -translate-y-1/2 text-right bg-white/80 px-1 py-0.5 rounded z-20">
            <span className="text-xs md:text-sm font-bold text-[#1890FF]">最新AI技術の爆速吸収</span>
          </div>
          {/* Gray Label */}
          <div className="absolute top-[45%] left-[62%] -translate-x-1/2 -translate-y-1/2 text-right bg-white/80 px-1 py-0.5 rounded z-20">
            <span className="text-xs font-bold text-gray-700">現場ノウハウの蓄積・体系化</span>
          </div>

          {/* Bottom Left <-> Bottom Right Labels */}
          {/* Blue Label (Top line) */}
          <div className="absolute top-[75%] left-[50%] -translate-x-1/2 text-center bg-white/90 px-3 py-1 rounded z-20 whitespace-nowrap">
            <span className="text-xs md:text-sm font-bold text-[#1890FF]">常にアップデートされる『生きた教材』の提供</span>
          </div>
          {/* Gray Label (Bottom line) */}
          <div className="absolute top-[85%] left-[50%] -translate-x-1/2 text-center bg-white/90 px-3 py-1 rounded z-20 whitespace-nowrap">
            <span className="text-xs font-bold text-gray-700">業務への実装を通じたユースケースの共有</span>
          </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MentorshipSupport;

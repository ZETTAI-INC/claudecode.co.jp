import React from 'react';

export default function SubsidyFlow() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8" style={{ fontFamily: "sans-serif" }}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        人材開発助成金（事業展開等リスキリング支援コース）申請の流れ
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        人材開発支援助成金では、研修開始の<strong className="text-gray-900 text-lg">1ヶ月前</strong>までに、
        労働局に訓練実施計画届などの申請書を提出する必要があります。
        また、研修修了日から2ヶ月以内に支給申請を行う必要があります。
      </p>

      {/* Overflow container for timeline to ensure no squishing on mobile */}
      <div className="overflow-x-auto pb-8 mb-4">
        <div className="min-w-[1000px] relative">
          
          {/* Months Row */}
          <div className="flex bg-[#f3f4f6] text-gray-500 font-medium text-center text-sm py-2 mb-2">
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <div key={m} className={`flex-1 ${m !== 6 ? 'border-r border-white' : ''}`}>
                {m}ヶ月
              </div>
            ))}
          </div>

          {/* Phases Row */}
          <div className="flex h-12 text-center text-sm font-bold shadow-sm relative z-10 mb-20 gap-[2px]">
            {/* 1 */}
            <div className="flex-[1.2] bg-[#cbf4f9] text-[#008e9b] flex items-center justify-center relative"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)' }}>
              申込内容の確認
            </div>
            {/* 2 */}
            <div className="flex-[1.5] bg-[#9ee5ed] text-[#008e9b] flex items-center justify-center relative -ml-3"
                 style={{ clipPath: 'polygon(15px 50%, 0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)', paddingLeft: '15px' }}>
              研修実施計画届提出
            </div>
            {/* 3 */}
            <div className="flex-[2.0] bg-[#4cc9d4] text-white flex items-center justify-center relative -ml-3"
                 style={{ clipPath: 'polygon(15px 50%, 0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)', paddingLeft: '15px' }}>
              研修の実施
            </div>
            {/* 4 */}
            <div className="flex-[1.5] bg-[#32afba] text-white flex items-center justify-center relative -ml-3"
                 style={{ clipPath: 'polygon(15px 50%, 0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)', paddingLeft: '15px' }}>
              支給申請書の提出
            </div>
            {/* 5 */}
            <div className="flex-[1.8] bg-[#009ca6] text-white flex items-center justify-center relative -ml-3"
                 style={{ clipPath: 'polygon(15px 50%, 0 0, 100% 0, 100% 100%, 0 100%)', paddingLeft: '15px' }}>
              助成金支給の可否決定
            </div>
          </div>

          {/* Steps Row (with explicit positions) */}
          <div className="relative h-[250px] w-full mt-4">
            
            <div className="absolute top-0 w-full flex justify-between items-start px-2">
              <StepBox label="AT" title="受講の相談" />
              <Arrow />
              <StepBox label="AT" title="受講申込" />
              <Arrow />
              <StepBox label="労働局" title="利用申請の提出" isRed
                 bottomNote={<BotNote1 />} />
              <Arrow />
              <StepBox label="労働局" title="申請書類の精査" isRed />
              <Arrow />
              <StepBox label="AT" title="受講料の支払い" />
              <Arrow />
              <StepBox label="AT" title="受講開始" />
              
              <div className="flex items-center justify-center self-center h-full pt-10" style={{ width: '120px' }}>
                <div className="relative w-full h-12 bg-gray-500 rounded flex items-center justify-center text-white text-xs font-bold"
                     style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)' }}>
                  1講座平均1ヶ月
                </div>
              </div>

              <StepBox label="AT" title="受講修了" />
              <Arrow />
              <StepBox label="労働局" title="助成金支給申請" isRed
                 bottomNote={<BotNote2 />} />
              
              <div className="flex items-center text-gray-300 tracking-[0.5em] text-lg self-center pt-10 px-4">
                ●●●●●
              </div>
              <Arrow />
              <StepBox label="労働局" title="助成金の受給" isRed
                 bottomNote={<BotNote3 />} />
            </div>

            {/* Absolute Annotations top */}
            <TopNoteBox 
              text={<>修正や疑義があれば指摘あり。<br/>問題なければ受理の連絡。「認定」という制度はなし</>} 
              left="10%" top="-65px" 
              lineStyle={{ height: '30px', left: '100%', top: '100%', borderLeft: '1px solid #999', borderBottom: '1px solid #999', width: '20px' }} 
            />
            <TopNoteBox 
              text={<>申請が受理された後<br/>「10営業日」でお支払い</>} 
              left="41%" top="-40px" 
              lineStyle={{ height: '20px', left: '50%', top: '100%', borderLeft: '1px solid #999' }} 
            />
            <TopNoteBox 
              text={<>提出書類に虚偽などがある場合、支給否決となる場合あり</>} 
              left="75%" top="-40px" 
            />

          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-end justify-between">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {/* Legend */}
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 text-xs font-bold w-12 text-center rounded-sm">AT</span>
              <span>…貴社とAT間に必要な手続き</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-700 text-white px-2 py-0.5 text-xs font-bold w-12 text-center rounded-sm">労働局</span>
              <span>…貴社と労働局間に必要な手続き</span>
            </div>
          </div>
          {/* Capsule Button */}
          <div className="bg-[#009ca6] text-white text-center font-bold text-xl py-4 px-10 rounded-full shadow-md w-full md:w-[450px]">
            余裕を持った申請をお願いいたします
          </div>
        </div>

        {/* Warning Box */}
        <div className="border border-red-300 bg-[#fff5f5] p-5 rounded-lg w-full md:w-1/2 relative">
          <div className="text-red-600 font-bold mb-2 flex items-center gap-1">
            <span className="text-sm">《注意事項》</span>
          </div>
          <ul className="text-red-600 text-xs space-y-1 pl-1">
            <li className="flex items-start"><span className="mr-1">●</span>労働局への申請書類の提出は、受講開始の前日より起算して1ヶ月前までとなります。</li>
            <li className="flex items-start"><span className="mr-1">●</span>受講スケジュール申請後の変更には、変更申請が必要になります。</li>
            <li className="flex items-start"><span className="mr-1">●</span>申請通りに受講されない場合、助成金が支給されない場合があります。</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

// Subcomponents

function StepBox({ label, title, isRed = false, bottomNote }: { label: string; title: string; isRed?: boolean; bottomNote?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Box */}
      <div className="w-[45px] shadow-sm flex flex-col overflow-hidden">
        <div className={`h-[28px] ${isRed ? 'bg-red-700' : 'bg-black'} flex items-center justify-center text-white text-[10px] font-bold`}>
          {label}
        </div>
        <div className="bg-[#f3f4f6] text-gray-800 text-[13px] font-bold h-[120px] flex items-center justify-center p-2"
             style={{ writingMode: 'vertical-rl', background: '#f5f5f5', border: '1px solid #eee', borderTop: 'none' }}>
          {title}
        </div>
      </div>
      
      {/* Bottom Note Container */}
      {bottomNote && (
        <div className="absolute top-[170px] left-1/2 transform -translate-x-1/2 w-max text-center">
          <div className="relative">
            {/* Arrow logic can go here or inside bottomNote */}
            {bottomNote}
          </div>
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-gray-300 self-center text-xl pt-10 px-1">
      ▶
    </div>
  );
}

function BotNote1() {
  return (
    <div className="flex flex-col items-center">
      {/* Up Arrow symbol pointing to the box */}
      <div className="w-[1px] h-4 bg-gray-400 mb-1 relative text-gray-400 flex flex-col justify-start items-center">
        <span className="absolute -top-[10px] text-xs">▲</span>
      </div>
      <div className="text-xs text-gray-700 font-bold whitespace-nowrap leading-tight">
        初回受講日の<br/>
        <span className="text-[#009ca6] text-sm">約1ヶ月前に</span>提出
      </div>
    </div>
  );
}

function BotNote2() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-4 bg-gray-400 mb-1 relative text-gray-400 flex flex-col justify-start items-center">
        <span className="absolute -top-[10px] text-xs">▲</span>
      </div>
      <div className="text-xs text-gray-700 font-bold whitespace-nowrap leading-tight">
        受講終了日の翌日から起算して<br/>
        <span className="text-[#009ca6] text-sm">2ヶ月以内</span>に申請が必要
      </div>
    </div>
  );
}

function BotNote3() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="text-xs text-gray-700 font-bold whitespace-nowrap leading-tight mb-1">
        支給申請後<br/>
        <span className="text-base text-gray-800">約2ヶ月〜での還付</span>
      </div>
      <div className="text-[10px] text-gray-500">
        (労働局や時期によって期間が変動)
      </div>
    </div>
  );
}

function TopNoteBox({ text, left, top, lineStyle }: { text: React.ReactNode, left: string, top: string, lineStyle?: React.CSSProperties }) {
  return (
    <div className="absolute text-[10px] text-gray-500 whitespace-nowrap z-20" style={{ left, top }}>
      {text}
      {lineStyle && (
        <div className="absolute" style={lineStyle}></div>
      )}
    </div>
  );
}

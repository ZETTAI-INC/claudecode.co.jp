import React from 'react';

export default function ClaudeDesktopFeatures() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-4 sm:px-6 font-sans text-gray-900 border-t border-gray-100">
      <div className="max-w-[1040px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Claude Logo Placeholder */}
          <div className="flex items-center gap-2 mb-8">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d97757]" fill="currentColor">
              <path d="M12 2L12.5 8L18 7.5L14 11.5L19 16L13.5 14L12 20L10.5 14L5 16L10 11.5L6 7.5L11.5 8L12 2Z" />
            </svg>
            <span className="text-[22px] font-semibold font-serif tracking-tight text-gray-900">Claude</span>
          </div>

          <h2 className="text-[28px] md:text-[34px] font-bold text-gray-900 mb-5 tracking-tight">
            デスクトップでClaudeを最大限に活用
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            デスクトップアプリを使用すると、Claudeがコードを書いたり、ファイルを<br className="hidden md:block" />
            操作したり、タスクを自動化したりする間、他の作業に集中できます。
          </p>
        </div>

        {/* Cards Container */}
        <div className="bg-white border border-gray-200/80 rounded-[32px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
            
            {/* Card 1: Chat */}
            <div className="flex flex-col h-[500px]">
              <div className="p-8 pb-0">
                <span className="inline-flex items-center bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600 rounded-md mb-6 tracking-wider">
                  思考用
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">チャット</h3>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 font-medium">
                  質問したり、ブレインストーミング<br />
                  したり、一緒に問題に取り組んだり<br />
                  できます。
                </p>
                <div className="font-bold text-[15px] text-gray-900">セットアップ不要</div>
              </div>
              
              <div className="flex-1 mt-6 relative overflow-hidden flex items-end justify-center">
                {/* Visual Area */}
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: 'center bottom' }}></div>
                
                <div className="relative w-full h-full flex flex-col items-center justify-end px-8 pb-8">
                  {/* Message Bubble */}
                  <div className="bg-white border border-gray-200 shadow-sm p-4 text-[13px] text-gray-800 font-medium rounded-2xl rounded-bl-sm w-[90%] -ml-10 z-10">
                    2026年の収益を見積もって<br />いただけますか？
                  </div>
                  {/* Pink Chart Map */}
                  <div className="bg-white border border-gray-200 shadow-sm p-3 rounded-lg w-[75%] -mr-16 -mt-3 z-0">
                    <div className="flex items-end gap-[3px] h-12 justify-center opacity-80">
                      <div className="w-2.5 bg-[#d97795] h-[30%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[50%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[40%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[20%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[80%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[60%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[75%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[90%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[45%] rounded-t-sm"></div>
                      <div className="w-2.5 bg-[#d97795] h-[35%] rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Cowork */}
            <div className="flex flex-col h-[500px]">
              <div className="p-8 pb-0">
                <span className="inline-flex items-center bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600 rounded-md mb-6 tracking-wider">
                  複雑な作業向け
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">Cowork</h3>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 font-medium">
                  ファイルやアプリ間で作業できま<br />
                  す。繰り返し可能なワークフローを<br />
                  構築しましょう。
                </p>
                <div className="font-bold text-[15px] text-gray-900">デスクトップのみ</div>
              </div>
              
              <div className="flex-1 mt-6 relative overflow-hidden flex items-end justify-center">
                {/* Visual Area */}
                <div className="absolute inset-x-0 bottom-0 top-10 opacity-60 border-t border-gray-100" style={{ backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                <div className="relative w-full h-[220px] flex items-center justify-center -mb-2">
                  {/* Background Stack Cards */}
                  <div className="absolute top-4 left-6 w-[70%] h-32 bg-white border border-gray-200 rounded-xl shadow-sm transform -rotate-6"></div>
                  <div className="absolute top-6 left-8 w-[70%] h-32 bg-white border border-gray-200 rounded-xl shadow-sm transform -rotate-3 text-[10px] text-gray-300 p-2 opacity-50">1<br/>2<br/>3</div>
                  
                  {/* Main Card */}
                  <div className="absolute top-10 left-10 right-8 bg-white border border-gray-200 rounded-xl shadow-md p-5 pb-6">
                    {/* Icons */}
                    <div className="flex gap-2 mb-4">
                      {/* Fake Calendar Icon */}
                      <div className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center text-blue-500 font-bold text-[10px]">31</div>
                      {/* Fake Drive Icon */}
                      <div className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-1">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-green-500">
                           <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {/* Fake Slack Icon */}
                      <div className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-600">
                           <path d="M5 8h14v8H5z" />
                        </svg>
                      </div>
                    </div>
                    {/* Text */}
                    <p className="text-[13px] text-gray-800 font-medium leading-[1.6]">
                      チームから更新情報を収集し、週<br />次サマリーを送信
                    </p>
                    <p className="text-[12px] text-gray-400 mt-2 font-medium">
                      毎週金曜日 午後5:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Code */}
            <div className="flex flex-col h-[500px]">
              <div className="p-8 pb-0">
                <span className="inline-flex items-center bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600 rounded-md mb-6 tracking-wider">
                  構築用
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">コード</h3>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-6 font-medium">
                  コードベース内で直接コードを読み<br />
                  取り、書き込み、修正します。
                </p>
                <div className="font-bold text-[15px] text-gray-900">デスクトップのみ</div>
              </div>
              
              <div className="flex-1 mt-6 relative overflow-hidden flex items-end justify-center">
                {/* Visual Area */}
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1px)', backgroundSize: '15px 15px', backgroundPosition: 'center bottom' }}></div>
                
                <div className="relative w-[85%] mb-4 z-10">
                  {/* Clawd Animation Video */}
                  <div className="absolute -top-[55px] right-0 z-0 pointer-events-none drop-shadow-sm">
                    <video aria-hidden="true" tabIndex={-1} autoPlay muted loop playsInline className="w-[100px] h-auto">
                      <source src="/images/install-hub/clawd-laptop.mov" type="video/quicktime" />
                      <source src="/images/install-hub/clawd-laptop.webm" type="video/webm" />
                    </video>
                  </div>
                  
                  {/* Terminal Window */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] w-full relative z-10 pb-12 overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-1.5 px-4 h-10 border-b border-gray-100/50 bg-[#Fdfdfd]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Terminal Content */}
                    <div className="p-4 pt-5 font-mono text-[12px] leading-relaxed relative">
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-red-500 font-bold">{'>'}</span>
                        <span className="text-gray-800 font-bold font-sans">サインアップフローの認証バグを修<br/>正</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#d97757] font-bold">{'+'}</span>
                        <span className="text-[#d97757] font-sans font-medium">Brewing...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
};

const AlienOctopusIcon = () => {
  const pixelMap = [
    "  #######  ",
    "  #######  ",
    "  # ### #  ",
    "  # ### #  ",
    "  #######  ",
    " ######### ",
    "  # # # #  ",
    "  # # # #  ",
  ];
  return (
    <svg viewBox="0 0 11 8" width="100%" height="100%" fill="currentColor">
      {pixelMap.map((row, y) =>
        row.split("").map((char, x) => 
          char === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1.05" height="1.05" shapeRendering="crispEdges" /> : null
        )
      )}
    </svg>
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "こんにちは！研修や導入に関するご質問など、何でもお気軽にお尋ねください。",
      timestamp: new Date(0),
    },
  ]);

  useEffect(() => {
    setMounted(true);
    setMessages((prev) =>
      prev.map((m) => (m.id === "msg-1" ? { ...m, timestamp: new Date() } : m))
    );
  }, []);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<"chat" | "form">("chat");

  // Form State
  const [form, setForm] = useState({ company: "", name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen && activeTab === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, activeTab]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: inputVal.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");

    setTimeout(() => {
      const botMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "bot",
        text: "お問い合わせありがとうございます。担当の者が確認いたします。詳細なお見積りやご相談は、「お問い合わせ」タブのフォームよりご連絡いただけますとスムーズです。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (text: string, isAction: boolean = false) => {
    if (isAction && text === "contact_form") {
      setActiveTab("form");
      return;
    }

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      let replyText = "ありがとうございます。順次担当よりご案内いたします。詳細な資料をご希望の場合は、ぜひ「お問い合わせ」タブよりご連絡ください。";
      if (text.includes("料金")) {
        replyText = "料金プランはご利用人数や期間によってカスタマイズ可能です。詳細は料金比較セクションをご覧いただくか、お問い合わせください。";
      } else if (text.includes("研修内容")) {
        replyText = "14日間のブートキャンプで、非エンジニアでもWebアプリ開発ができるレベルまで引き上げる実践カリキュラムをご用意しています。";
      }
      
      const botMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "bot",
        text: replyText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     setSubmitted(true);
  };

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Chat Button (Floating) */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#ff5c00] to-[#ffab08] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
        aria-label="チャットを開く"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed z-50 bottom-6 right-6 lg:bottom-10 lg:right-10 w-[90%] sm:w-[380px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto translate-y-0"
            : "scale-95 opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a2f55] to-[#1a4a7a] text-white pt-4 px-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                AI
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">ご相談窓口</h3>
                <p className="text-[11px] text-white/80">自動応答ボット</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="チャットを閉じる"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex mt-auto">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 pb-2 text-[13px] font-bold border-b-[3px] transition-colors ${
                activeTab === "chat" ? "border-white text-white" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              チャット
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`flex-1 pb-2 text-[13px] font-bold border-b-[3px] transition-colors ${
                activeTab === "form" ? "border-[#ff5c00] text-white" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              お問い合わせ
            </button>
          </div>
        </div>

        {/* Tab Content: Chat */}
        <div className={`flex-1 flex flex-col overflow-hidden ${activeTab === 'chat' ? 'block' : 'hidden'}`}>
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f8f9fa] flex flex-col gap-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full gap-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Bot Avatar */}
              {msg.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-white border border-[#e5e7eb] text-[#ff5c00] flex items-center justify-center flex-shrink-0 mt-1 p-1.5 shadow-sm">
                  <AlienOctopusIcon />
                </div>
              )}

              <div className={`flex flex-col max-w-[75%] ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#ff5c00] text-white rounded-tr-sm"
                      : "bg-white text-[#333] border border-[#e5e7eb] rounded-tl-sm relative"
                  }`}
                >
                  {/* Little speech bubble tail for bot */}
                  {msg.sender === "bot" && (
                     <div className="absolute top-3 -left-1.5 w-3 h-3 bg-white border-l border-b border-[#e5e7eb] transform rotate-45 rounded-sm"></div>
                  )}
                  <span className="relative z-10">{msg.text}</span>
                </div>
                <span suppressHydrationWarning className="text-[10px] text-[#aaa] mt-1 px-1">
                  {mounted
                    ? msg.timestamp.toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </span>

                {/* Show Quick Replies under the first bot message */}
                {msg.id === "msg-1" && (
                  <div className="flex flex-wrap gap-2 mt-3 w-full">
                    <button onClick={() => handleQuickReply("研修内容について")} className="bg-white border border-[#ff5c00] text-[#ff5c00] text-[11px] font-bold py-1.5 px-3 rounded-full hover:bg-[#fff5f0] transition-colors shadow-sm">
                      研修内容について
                    </button>
                    <button onClick={() => handleQuickReply("料金の目安")} className="bg-white border border-[#ff5c00] text-[#ff5c00] text-[11px] font-bold py-1.5 px-3 rounded-full hover:bg-[#fff5f0] transition-colors shadow-sm">
                      料金の目安
                    </button>
                    <button onClick={() => handleQuickReply("contact_form", true)} className="bg-[#ff5c00] text-white text-[11px] font-bold py-1.5 px-3 rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center gap-1 mt-1 w-full justify-center">
                      お問い合わせフォームを開く
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-[#eee] bg-white">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="質問を入力..."
              className="flex-1 bg-[#f4f4f5] border border-transparent focus:border-[#ff5c00] focus:bg-white rounded-full px-4 py-2 text-sm outline-none transition-colors text-[#333]"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-10 h-10 rounded-full bg-[#ff5c00] text-white flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#e05100] transition-colors"
              aria-label="送信"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-ml-0.5"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
        </div>

        {/* Tab Content: Form */}
        <div className={`flex-1 overflow-y-auto p-4 bg-white ${activeTab === "form" ? "block" : "hidden"}`}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 className="font-bold text-[#333] mb-2">送信完了しました</h4>
              <p className="text-[12px] text-[#666] leading-relaxed">
                お問い合わせありがとうございます。<br/>内容を確認の上、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 pb-4">
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1">会社名 <span className="text-[#ff5c00]">*</span></label>
                <input required type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full bg-[#f4f4f5] border border-transparent focus:bg-white focus:border-[#ff5c00] rounded-lg px-3 py-2 text-[13px] outline-none transition-colors text-[#333]" placeholder="株式会社 ZETTAI" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1">お名前 <span className="text-[#ff5c00]">*</span></label>
                <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-[#f4f4f5] border border-transparent focus:bg-white focus:border-[#ff5c00] rounded-lg px-3 py-2 text-[13px] outline-none transition-colors text-[#333]" placeholder="山田 太郎" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1">メールアドレス <span className="text-[#ff5c00]">*</span></label>
                <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-[#f4f4f5] border border-transparent focus:bg-white focus:border-[#ff5c00] rounded-lg px-3 py-2 text-[13px] outline-none transition-colors text-[#333]" placeholder="example@company.jp" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#444] mb-1">お問い合わせ内容 <span className="text-[#ff5c00]">*</span></label>
                <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="w-full bg-[#f4f4f5] border border-transparent focus:bg-white focus:border-[#ff5c00] rounded-lg px-3 py-2 text-[13px] outline-none transition-colors text-[#333]" placeholder="ご相談内容をご記入ください"></textarea>
              </div>
              <button type="submit" className="mt-2 w-full bg-[#ff5c00] text-white font-bold py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity text-[13px]">
                上記内容で送信する
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

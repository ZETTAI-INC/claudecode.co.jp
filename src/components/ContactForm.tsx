"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  company: string;
  name: string;
  email: string;
  department: string;
  goal: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    department: "",
    goal: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"interest" | "apply">("interest");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__bg">
        <div className="contact__inner">
          <p className="contact__sub">CONTACT</p>
          
          <div className="flex flex-col sm:flex-row justify-center mb-10 gap-2 sm:gap-4">
            <div className="inline-flex bg-gray-100 p-1 rounded-full mx-auto sm:mx-0">
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); setActiveTab("interest"); }}
                className={`px-4 md:px-8 py-3 rounded-full text-[13px] md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "interest"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                研修に興味ある方
              </button>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); setActiveTab("apply"); }}
                className={`px-4 md:px-8 py-3 rounded-full text-[13px] md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === "apply"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                申し込みたい方
              </button>
            </div>
          </div>

          {activeTab === "interest" ? (
            <>
              <h2 className="contact__heading" style={{ wordBreak: 'keep-all' }}>
                <span className="inline-block">14日で本番導入</span>
                <span className="inline-block">できる業務か、</span><br className="md:hidden" />
                <span className="inline-block"><strong>30分で診断</strong>します</span>
              </h2>
              <div className="contact__lead" style={{ wordBreak: 'keep-all' }}>
                <p style={{ marginBottom: "8px" }}>
                  <span className="inline-block">「対象部署」</span>
                  <span className="inline-block">「本番導入したい業務」</span>
                  <span className="inline-block">「セキュリティ前提」の</span>
                  <span className="inline-block" style={{ color: "#2563eb", fontWeight: "bold" }}>3点だけ</span>
                  <span className="inline-block">確認します。</span>
                </p>
                <p>
                  <span className="inline-block">担当者から<strong>24時間以内</strong>に</span>
                  <span className="inline-block">お電話いたします。</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="contact__heading" style={{ wordBreak: 'keep-all' }}>
                <span className="inline-block">14日本番導入研修の</span><br className="md:hidden" />
                <span className="inline-block"><strong>お申し込み</strong></span>
              </h2>
              <div className="contact__lead" style={{ wordBreak: 'keep-all' }}>
                <p style={{ marginBottom: "8px" }}>
                  <span className="inline-block">本番導入の開始時期やカリキュラム内容の詳細など、</span>
                  <span className="inline-block">今後の具体的なご案内をスムーズに進めます。</span>
                </p>
                <p>
                  <span className="inline-block">担当者から<strong>24時間以内</strong>に</span>
                  <span className="inline-block">お電話いたします。</span>
                </p>
              </div>
            </>
          )}

          {submitted ? (
            <div className="contact__thanks">
              <p className="contact__thanks-icon">&#10003;</p>
              <p className="contact__thanks-title">
                お問い合わせありがとうございます
              </p>
              <div className="contact__thanks-text" style={{ textAlign: "left", maxWidth: "480px", margin: "0 auto" }}>
                <p style={{ marginBottom: "16px" }}>
                  以下の流れで進めます。
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>1.</span>
                    <span><strong>24時間以内</strong>に担当者からお電話でご連絡</span>
                  </li>
                  <li style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>2.</span>
                    <span>30分のオンライン相談で「対象部署」「本番導入したい業務」「セキュリティ前提」を確認</span>
                  </li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>3.</span>
                    <span>相談後<strong>48時間以内</strong>に14日本番導入の適合判定と概算をお返しします</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">
                    会社名<span className="contact__required">必須</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="contact__input"
                    placeholder="株式会社ZETTAI"
                    required
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">
                    お名前<span className="contact__required">必須</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="山田 太郎"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">
                    メールアドレス
                    <span className="contact__required">必須</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="example@company.co.jp"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">
                    対象部署
                  </label>
                  <input
                    type="text"
                    name="department"
                    className="contact__input"
                    placeholder="営業部、生産管理部 など"
                    value={form.department}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">
                  本番導入したい業務ツールを一言
                </label>
                <input
                  type="text"
                  name="goal"
                  className="contact__input"
                  placeholder="例：Excel台帳のWeb化、日報の自動集計 など"
                  value={form.goal}
                  onChange={handleChange}
                />
              </div>

              <p className="contact__privacy">
                <a href="/privacy/" target="_blank" rel="noopener noreferrer">
                  プライバシーポリシー
                </a>
                に同意の上、送信してください。
              </p>

              <button type="submit" className="contact__submit">
                <span>{activeTab === "interest" ? "30分の適合診断を申し込む" : "14日本番導入研修のお申し込みを完了する"}</span>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                  <path
                    d="M1.16 12.85c-.14-.17-.22-.37-.22-.58 0-.21.07-.39.22-.55l4.6-4.6L1.13 2.49c-.14-.14-.21-.33-.2-.57.01-.24.08-.42.22-.56.18-.18.36-.26.56-.25.2.01.38.1.53.25l5.21 5.21c.09.09.14.17.18.26.04.09.05.18.05.29s-.02.2-.05.29c-.04.09-.09.17-.18.26l-5.18 5.18c-.16.16-.34.23-.55.22-.2-.01-.4-.08-.56-.22z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

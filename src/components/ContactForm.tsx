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
          <h2 className="contact__heading">
            14日で内製化できる業務か、
            <br className="sp-only" />
            <strong>30分で診断</strong>します
          </h2>
          <p className="contact__lead">
            「対象部署」「作りたい業務」「セキュリティ前提」の3点だけ確認します。
            <br />
            担当者より<strong>1営業日以内</strong>にご連絡いたします。
          </p>

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
                    <span><strong>1営業日以内</strong>に担当者からメールでご連絡</span>
                  </li>
                  <li style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>2.</span>
                    <span>30分のオンライン相談で「対象部署」「作りたい業務」「セキュリティ前提」を確認</span>
                  </li>
                  <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>3.</span>
                    <span>相談後<strong>48時間以内</strong>に適合判定と概算の方向性をお返しします</span>
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
                  作りたい業務ツールを一言
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
                <span>30分の適合診断を申し込む</span>
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

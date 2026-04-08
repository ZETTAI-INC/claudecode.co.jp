"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

const categories = [
  "研修プログラムについて",
  "料金・お見積りについて",
  "助成金の活用について",
  "導入スケジュールについて",
  "その他",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
            まずはお気軽に<strong>ご相談</strong>ください
          </h2>
          <p className="contact__lead">
            研修内容・料金・助成金の活用など、<br className="sp-only" />
            どんなことでもお問い合わせください。<br />
            担当者より<strong>1営業日以内</strong>にご連絡いたします。
          </p>

          {submitted ? (
            <div className="contact__thanks">
              <p className="contact__thanks-icon">&#10003;</p>
              <p className="contact__thanks-title">
                お問い合わせありがとうございます
              </p>
              <p className="contact__thanks-text">
                内容を確認の上、担当者よりご連絡いたします。
              </p>
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
                  <label className="contact__label">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    className="contact__input"
                    placeholder="03-1234-5678"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">
                  お問い合わせ種別
                  <span className="contact__required">必須</span>
                </label>
                <select
                  name="category"
                  className="contact__input contact__select"
                  required
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__label">
                  お問い合わせ内容
                  <span className="contact__required">必須</span>
                </label>
                <textarea
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="ご質問やご要望をご記入ください"
                  rows={5}
                  required
                  value={form.message}
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
                <span>上記に同意して送信する</span>
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

"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  company: string;
  name: string;
  role: string;
  phone: string;
  email: string;
}

interface Props {
  sessionSlug: string;
  sessionTitle: string;
  sessionDate: string;
  sessionTime: string;
}

export default function SeminarForm({
  sessionSlug,
  sessionTitle,
  sessionDate,
  sessionTime,
}: Props) {
  const [form, setForm] = useState<FormData>({
    company: "",
    name: "",
    role: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact__thanks">
        <p className="contact__thanks-icon">&#10003;</p>
        <p className="contact__thanks-title">お申し込みありがとうございます</p>
        <div
          className="contact__thanks-text"
          style={{ textAlign: "left", maxWidth: "520px", margin: "0 auto" }}
        >
          <p style={{ marginBottom: "16px" }}>
            <strong>{sessionDate}（{sessionTime}）</strong>
            <br />
            「{sessionTitle}」にお申し込みいただきました。
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>1.</span>
              <span><strong>1営業日以内</strong>にご登録メールへGoogle MeetのURLをお送りします</span>
            </li>
            <li style={{ display: "flex", gap: "8px", marginBottom: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>2.</span>
              <span>当日、届いたURLからご参加ください（カメラ・マイクは任意）</span>
            </li>
            <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ color: "#2563eb", fontWeight: 900, flexShrink: 0 }}>3.</span>
              <span>セミナー後、希望者には<strong>30分の個別適合診断</strong>もご案内します</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <input type="hidden" name="sessionSlug" value={sessionSlug} />
      <input type="hidden" name="sessionTitle" value={sessionTitle} />

      <div className="contact__form-row">
        <div className="contact__field">
          <label className="contact__label">
            企業名<span className="contact__required">必須</span>
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
            担当者名<span className="contact__required">必須</span>
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
            役職<span className="contact__required">必須</span>
          </label>
          <input
            type="text"
            name="role"
            className="contact__input"
            placeholder="人事部長、DX推進担当 など"
            required
            value={form.role}
            onChange={handleChange}
          />
        </div>
        <div className="contact__field">
          <label className="contact__label">
            電話番号<span className="contact__required">必須</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="contact__input"
            placeholder="03-1234-5678"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact__field">
        <label className="contact__label">
          メールアドレス<span className="contact__required">必須</span>
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

      <p className="contact__privacy">
        <a href="/privacy/" target="_blank" rel="noopener noreferrer">
          プライバシーポリシー
        </a>
        に同意の上、送信してください。
      </p>

      <button type="submit" className="contact__submit">
        <span>この回に申し込む</span>
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
  );
}

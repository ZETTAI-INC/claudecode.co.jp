"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const painItems = [
  "社内フォーム制作",
  "ダッシュボード作成",
  "定型業務の自動化",
  "簡易LP・社内ツール",
  "業務改善アプリ",
  "保守・軽微改修",
  "外注見積もり待ち",
];

function Counter({ end, visible }: { end: number; visible: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const steps = 45;
    const inc = end / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(cur));
    }, 25);
    return () => clearInterval(timer);
  }, [visible, end]);
  return <>{visible ? val : 0}</>;
}

export default function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [confetti, setConfetti] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    fetch("/lottie/confetti.json").then((r) => r.json()).then(setConfetti);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="cmp" ref={ref}>
      <div className="cmp__inner">
        <h2 className="cmp__heading">
          CLAUDE CODE研修の
          <br className="sp-only" />
          受講前と受講後を比べると...
        </h2>

        <div className="cmp__layout">
          {/* ── 受講前 ── */}
          <div className="cmp__side cmp__side--before">
            <span className="cmp__side-label cmp__side-label--before">受講前</span>

            <div className="cmp__before-card">
              <div className="cmp__before-illust">
                <Image
                  src="/img/comparison-before.webp"
                  alt="受講前：業務に追われる様子"
                  width={300}
                  height={450}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="cmp__before-msg">
                社内のあらゆる改善が<br />外注頼みで止まっている
              </p>
              <div className="cmp__before-pills">
                {painItems.map((t) => (
                  <span key={t} className="cmp__pill">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── 矢印 ── */}
          <div className="cmp__center">
            <div className="cmp__center-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* ── 受講後 ── */}
          <div className="cmp__side cmp__side--after">
            <span className="cmp__side-label cmp__side-label--after">受講後</span>

            <div className="cmp__after-card">
              {confetti && vis && (
                <div className="cmp__confetti">
                  <Lottie animationData={confetti} loop={false} style={{ width: "100%", height: "100%" }} />
                </div>
              )}

              {/* ヒーロー数値 */}
              <div className="cmp__nums">
                <div className="cmp__num-block">
                  <span className="cmp__num-sub">業務ツール1本の公開まで</span>
                  <span className="cmp__num-big">
                    <Counter end={4} visible={vis} />
                    <small>日</small>
                  </span>
                </div>
                <div className="cmp__num-div" />
                <div className="cmp__num-block">
                  <span className="cmp__num-sub">研修期間</span>
                  <span className="cmp__num-big">
                    <Counter end={14} visible={vis} />
                    <small>日</small>
                  </span>
                </div>
              </div>

              {/* 成果リスト */}
              <ul className="cmp__results">
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#22c55e" }} />
                  <span className="cmp__result-text">軽微な改修は<strong>社内で当日対応</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#f97316" }} />
                  <span className="cmp__result-text">外注見積もり待ちが<strong>0日</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#8b5cf6" }} />
                  <span className="cmp__result-text">AI活用を<strong>全部署へ横展開</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#ef4444" }} />
                  <span className="cmp__result-text">業務改善が<strong>現場から自走</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="cmp__bottom">
          研修後、社内に<strong>「自走する実装者」</strong>が残る
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const painItems = [
  "毎月のPL管理",
  "スライド作成",
  "勤怠管理",
  "NDA作成",
  "WEB・LP制作",
  "リスト取得",
  "保守運用",
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
                全部ひとりで抱えて、<br />毎日が精一杯...
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
                  <span className="cmp__num-sub">開発速度</span>
                  <span className="cmp__num-big">
                    <Counter end={3} visible={vis} />
                    <small>倍</small>
                  </span>
                </div>
                <div className="cmp__num-div" />
                <div className="cmp__num-block">
                  <span className="cmp__num-sub">生産性向上</span>
                  <span className="cmp__num-pre">最大</span>
                  <span className="cmp__num-big">
                    <Counter end={88} visible={vis} />
                    <small>%</small>
                  </span>
                </div>
              </div>

              {/* 成果リスト */}
              <ul className="cmp__results">
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#22c55e" }} />
                  <span className="cmp__result-text">コード品質が<strong>大幅アップ</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#f97316" }} />
                  <span className="cmp__result-text">残業時間が<strong>激減</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#8b5cf6" }} />
                  <span className="cmp__result-text">属人化を<strong>解消</strong></span>
                </li>
                <li className="cmp__result">
                  <span className="cmp__result-dot" style={{ background: "#ef4444" }} />
                  <span className="cmp__result-text">外注コストを<strong>削減</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="cmp__bottom">
          研修後、チームの開発力が<strong>劇的に変わる！</strong>
        </p>
      </div>
    </section>
  );
}

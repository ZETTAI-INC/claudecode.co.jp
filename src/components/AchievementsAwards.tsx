import React from 'react';
import './AchievementsAwards.css';

const LaurelWreathSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gold-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C99F4A" />
        <stop offset="30%" stopColor="#F9DF8D" />
        <stop offset="70%" stopColor="#E0B65D" />
        <stop offset="100%" stopColor="#A87A29" />
      </linearGradient>
      <linearGradient id="gold-grad-left" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C99F4A" />
        <stop offset="30%" stopColor="#F9DF8D" />
        <stop offset="70%" stopColor="#E0B65D" />
        <stop offset="100%" stopColor="#A87A29" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#glow)">
      {/* 左側の枝と葉 */}
      <g transform="translate(150, 160)">
        {/* 枝 */}
        <path d="M 0 100 C -120 100, -150 -10, -80 -100" stroke="url(#gold-grad-left)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        
        {/* 葉っぱ */}
        <g fill="url(#gold-grad-left)">
          {/* 上部 */}
          <path d="M -80 -100 C -85 -115, -65 -115, -70 -100 C -65 -105, -75 -105, -80 -100" />
          <path d="M -90 -70 C -110 -80, -95 -105, -80 -85 C -85 -80, -80 -80, -90 -70" />
          <path d="M -60 -75 C -40 -90, -50 -110, -65 -90 C -60 -85, -65 -85, -60 -75" />

          {/* 中上部 */}
          <path d="M -105 -35 C -130 -45, -115 -75, -95 -50 C -100 -45, -95 -45, -105 -35" />
          <path d="M -65 -45 C -45 -60, -55 -85, -75 -60 C -65 -55, -75 -55, -65 -45" />

          {/* 中央 */}
          <path d="M -115 5 C -145 -5, -125 -40, -100 -10 C -110 -5, -100 -5, -115 5" />
          <path d="M -65 -5 C -40 -20, -55 -50, -80 -20 C -70 -15, -80 -15, -65 -5" />

          {/* 中下部 */}
          <path d="M -110 45 C -140 40, -125 0, -95 30 C -105 35, -95 35, -110 45" />
          <path d="M -55 35 C -30 20, -45 -10, -75 20 C -60 25, -75 25, -55 35" />

          {/* 下部 */}
          <path d="M -85 85 C -115 85, -105 45, -70 70 C -80 75, -70 75, -85 85" />
          <path d="M -30 75 C -5 65, -25 35, -55 60 C -40 65, -55 65, -30 75" />
        </g>
        
        {/* 装飾の星・点 */}
        <circle cx="-50" cy="-110" r="2.5" fill="url(#gold-grad-left)" />
        <circle cx="-110" cy="-90" r="2" fill="url(#gold-grad-left)" />
        <circle cx="-135" cy="-20" r="3" fill="url(#gold-grad-left)" />
        <circle cx="-40" cy="0" r="2" fill="url(#gold-grad-left)" />
        <circle cx="-120" cy="60" r="2.5" fill="url(#gold-grad-left)" />
      </g>

      {/* 右側の枝と葉 */}
      <g transform="translate(150, 160)">
        {/* 枝 */}
        <path d="M 0 100 C 120 100, 150 -10, 80 -100" stroke="url(#gold-grad-right)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        
        {/* 葉っぱ */}
        <g fill="url(#gold-grad-right)">
          {/* 上部 */}
          <path d="M 80 -100 C 85 -115, 65 -115, 70 -100 C 65 -105, 75 -105, 80 -100" />
          <path d="M 90 -70 C 110 -80, 95 -105, 80 -85 C 85 -80, 80 -80, 90 -70" />
          <path d="M 60 -75 C 40 -90, 50 -110, 65 -90 C 60 -85, 65 -85, 60 -75" />

          {/* 中上部 */}
          <path d="M 105 -35 C 130 -45, 115 -75, 95 -50 C 100 -45, 95 -45, 105 -35" />
          <path d="M 65 -45 C 45 -60, 55 -85, 75 -60 C 65 -55, 75 -55, 65 -45" />

          {/* 中央 */}
          <path d="M 115 5 C 145 -5, 125 -40, 100 -10 C 110 -5, 100 -5, 115 5" />
          <path d="M 65 -5 C 40 -20, 55 -50, 80 -20 C 70 -15, 80 -15, 65 -5" />

          {/* 中下部 */}
          <path d="M 110 45 C 140 40, 125 0, 95 30 C 105 35, 95 35, 110 45" />
          <path d="M 55 35 C 30 20, 45 -10, 75 20 C 60 25, 75 25, 55 35" />

          {/* 下部 */}
          <path d="M 85 85 C 115 85, 105 45, 70 70 C 80 75, 70 75, 85 85" />
          <path d="M 30 75 C 5 65, 25 35, 55 60 C 40 65, 55 65, 30 75" />
        </g>
        
        {/* 装飾の星・点 */}
        <circle cx="50" cy="-110" r="2.5" fill="url(#gold-grad-right)" />
        <circle cx="110" cy="-90" r="2" fill="url(#gold-grad-right)" />
        <circle cx="135" cy="-20" r="3" fill="url(#gold-grad-right)" />
        <circle cx="40" cy="0" r="2" fill="url(#gold-grad-right)" />
        <circle cx="120" cy="60" r="2.5" fill="url(#gold-grad-right)" />
      </g>
    </g>
  </svg>
);

const achievements = [
  {
    year: 'TRACK RECORD',
    number: '96',
    unit: '%',
    label: '14日以内公開率',
  },
  {
    year: 'TRACK RECORD',
    number: '88',
    unit: '%',
    label: '非エンジニア率',
  }
];

export default function AchievementsAwards() {
  return (
    <section className="achievements-awards">
      <div className="achievements-awards__inner">
        <div className="achievements-awards__list">
          {achievements.map((item, index) => (
            <div className="achievements-awards__item" key={index}>
              <div className="achievements-awards__laurel">
                <LaurelWreathSVG />
              </div>
              <div className="achievements-awards__content">
                <div className="achievements-awards__year">
                  <span style={{ fontSize: '12px', marginRight: '4px' }}>★ ★ ★</span>
                  {item.year}
                  <span style={{ fontSize: '12px', marginLeft: '4px' }}>★ ★ ★</span>
                </div>
                <div className="achievements-awards__number-box">
                  <span className="achievements-awards__number">{item.number}</span>
                  <span className="achievements-awards__unit">{item.unit}</span>
                </div>
              </div>
              <div className="achievements-awards__ribbon-wrap">
                <div className="achievements-awards__ribbon-tail-l"></div>
                <div className="achievements-awards__ribbon-tail-r"></div>
                <div className="achievements-awards__ribbon">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

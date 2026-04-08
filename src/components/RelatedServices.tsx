"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import type { WorkItem } from "@/data/works";

const rows = [
  [
    {
      ...works[0],
      img: "/img/theme/home/mae-hojyo-image.svg",
    },
    {
      ...works[1],
      img: "/img/theme/home/super-efficiency-image.svg",
    },
  ],
  [
    {
      ...works[2],
      img: "/img/theme/home/mag-image.svg",
    },
    {
      ...works[3],
      img: "/img/theme/home/super-efficiency-image.svg",
    },
  ],
  [
    {
      ...works[4],
      img: "/img/theme/home/mae-hojyo-image.svg",
    },
    {
      ...works[5],
      img: "/img/theme/home/mag-image.svg",
    },
  ],
];

/* ── ポップアップ ── */
function WorkPopup({
  item,
  onClose,
}: {
  item: WorkItem;
  onClose: () => void;
}) {
  return (
    <div className="works-popup-overlay" onClick={onClose}>
      <div className="works-popup" onClick={(e) => e.stopPropagation()}>
        <button className="works-popup__close" onClick={onClose}>
          <span className="material-icons">close</span>
        </button>

        <div className="works-popup__icon-wrap">
          <span className="material-icons-outlined works-popup__icon">
            {item.icon}
          </span>
        </div>

        <h3 className="works-popup__title">{item.title}</h3>
        <span className="works-popup__category">{item.category}</span>
        <p className="works-popup__desc">{item.desc}</p>

        <div className="works-popup__details">
          <p className="works-popup__details-label">作れるものの例</p>
          <ul className="works-popup__list">
            {item.details.map((d) => (
              <li key={d} className="works-popup__list-item">
                <span className="material-icons works-popup__check">
                  check_circle
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/works" className="works-popup__cta" onClick={onClose}>
          全てのカテゴリを見る
          <span className="material-icons" style={{ fontSize: 18 }}>
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}

/* ── メインセクション ── */
export default function RelatedServices() {
  const [showAll, setShowAll] = useState(false);
  const [popup, setPopup] = useState<WorkItem | null>(null);
  const visibleRows = showAll ? rows : rows.slice(0, 1);

  return (
    <div className="my-12">
      <section>
        <div>
          <div className="block-title mb-6">CLAUDE CODEで作れるもの</div>

          <div className="mt-12 related-expand-wrap">
            {visibleRows.map((row, ri) => (
              <div key={ri} className={ri > 0 ? "mt-4" : ""}>
                <div className="flex justify-center professionalService_cardWrapper">
                  {row.map((item, ci) => (
                    <div key={ci} className="flex justify-center">
                      <div
                        className="professionalMaeHojyoContent"
                        style={{ cursor: "pointer" }}
                        onClick={() => setPopup(item)}
                      >
                        <div className="flex flex-col items-center">
                          <div className="my-6">
                            <h3 className="text-xl font-bold text-center">
                              {item.title}
                            </h3>
                          </div>
                          <div>
                            <Image
                              src={item.img}
                              alt={`${item.title}イメージ`}
                              width={400}
                              height={200}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="my-6 mx-6 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {!showAll && (
              <div className="related-fade-overlay">
                <button
                  className="related-more__btn"
                  onClick={() => setShowAll(true)}
                >
                  もっと見る
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path
                      d="M1 1L7 7L13 1"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}

            {showAll && (
              <div className="related-more" style={{ marginTop: 32 }}>
                <Link href="/works" className="related-more__link">
                  全てを見る
                  <span className="material-icons" style={{ fontSize: 20 }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            )}
          </div>

          <div>
            <p className="text-center text-xs pt-12">
              「CLAUDE CODE リスキリング研修」は
              <br className="sp-only" />
              株式会社ZETTAIが運営するサービスです
            </p>
          </div>
        </div>
      </section>

      {popup && <WorkPopup item={popup} onClose={() => setPopup(null)} />}
    </div>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { works } from "@/data/works";

const categories = Array.from(new Set(works.map((w) => w.category)));

export default function WorksPage() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? works.filter((w) => w.category === active) : works;

  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        {/* Hero */}
        <section
          className="pt-28 pb-14 md:pt-36 md:pb-20 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
          }}
        >
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <span className="inline-block text-sm tracking-widest uppercase opacity-80 mb-3">
              Works
            </span>
            <h1 className="text-3xl md:text-5xl font-bold u-ff--headline">
              CLAUDE CODEで作れるもの
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              研修を通じて、これらのプロダクトを自分の手で作れるようになります
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-10" style={{ background: "#F4FAFD" }}>
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="works-filter">
              <button
                className={`works-filter__btn ${active === null ? "works-filter__btn--active" : ""}`}
                onClick={() => setActive(null)}
              >
                すべて
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`works-filter__btn ${active === cat ? "works-filter__btn--active" : ""}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-14 md:py-20" style={{ background: "#F4FAFD" }}>
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div className="works-grid">
              {filtered.map((item) => (
                <article key={item.id} className="works-card">
                  <div className="works-card__header">
                    <div className="works-card__icon-wrap">
                      <span className="material-icons-outlined works-card__icon">
                        {item.icon}
                      </span>
                    </div>
                    <span className="works-card__category">{item.category}</span>
                  </div>

                  <h2 className="works-card__title">{item.title}</h2>
                  <p className="works-card__desc">{item.desc}</p>

                  <div className="works-card__details">
                    <p className="works-card__details-label">作れるものの例</p>
                    <ul className="works-card__list">
                      {item.details.map((d) => (
                        <li key={d} className="works-card__list-item">
                          <span className="material-icons works-card__check">
                            check_circle
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 u-ff--headline">
                これらを自分の手で作れるようになる
              </h2>
              <p className="text-gray-600 mb-8">
                CLAUDE CODE リスキリング研修で、実践的なAI開発スキルを身につけましょう。
              </p>
              <a
                href="/consultation/"
                className="inline-block font-bold text-white rounded-full px-10 py-4 transition-opacity hover:opacity-80"
                style={{ background: "#2563eb" }}
              >
                無料相談はこちら
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeminarForm from "@/components/SeminarForm";
import { upcomingSeminars } from "@/data/seminars";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return upcomingSeminars.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const seminar = upcomingSeminars.find((s) => s.slug === slug);
  if (!seminar) return { title: "無料セミナー" };
  return {
    title: `${seminar.title} | 無料セミナー | CLAUDE CODE`,
    description: seminar.summary,
  };
}

export default async function SeminarDetailPage({ params }: Params) {
  const { slug } = await params;
  const seminar = upcomingSeminars.find((s) => s.slug === slug);
  if (!seminar) notFound();

  return (
    <div id="page" className="site font-sans bg-[#fcfcfd] pb-10">
      <Header />
      <main id="primary" className="site-main pb-24 md:pb-0">

        {/* Breadcrumb / Back */}
        <div className="pt-28 md:pt-32 pb-4 px-5">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <Link
              href="/seminars/"
              className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span className="material-icons-outlined text-base">chevron_left</span>
              セミナー一覧に戻る
            </Link>
          </div>
        </div>

        {/* Session Hero */}
        <section className="pb-12 md:pb-16 border-b border-gray-100 bg-white">
          <div className="mx-auto px-5" style={{ maxWidth: 1000 }}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div
                className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl flex flex-col items-center justify-center text-white shadow-md"
                style={{ backgroundColor: "#2563eb" }}
              >
                <span className="text-sm font-medium leading-none">{seminar.month}月</span>
                <span className="text-4xl md:text-5xl font-black leading-tight">{seminar.day}</span>
                <span className="text-xs font-medium leading-none mt-1">({seminar.weekday})</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-bold px-2.5 py-1 rounded tracking-wide">
                    {seminar.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 font-bold">
                    <span className="material-icons-outlined text-sm">schedule</span>
                    {seminar.time}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 font-bold">
                    <span className="material-icons-outlined text-sm">videocam</span>
                    Google Meet
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-600 font-bold">
                    <span className="material-icons-outlined text-sm">payments</span>
                    無料
                  </span>
                </div>
                <h1 className="text-2xl md:text-[32px] font-extrabold text-gray-900 mb-4 tracking-tight leading-snug">
                  {seminar.title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {seminar.summary}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Session Info Grid */}
        <section className="py-10 md:py-12 px-5">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Agenda */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-icons-outlined text-blue-600 text-xl">list_alt</span>
                  <h2 className="text-base md:text-lg font-bold text-gray-900">当日のアジェンダ</h2>
                </div>
                <ul className="space-y-3">
                  {seminar.agenda.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-icons-outlined text-blue-600 text-xl">info</span>
                  <h2 className="text-base md:text-lg font-bold text-gray-900">開催概要</h2>
                </div>
                <dl className="space-y-3 text-sm">
                  <div className="flex gap-4">
                    <dt className="shrink-0 w-20 text-gray-500 font-bold">日時</dt>
                    <dd className="text-gray-800 font-bold">{seminar.date}（{seminar.weekday}）{seminar.time}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 w-20 text-gray-500 font-bold">形式</dt>
                    <dd className="text-gray-800">Google Meet（URLはお申込み後にメール送付）</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 w-20 text-gray-500 font-bold">参加費</dt>
                    <dd className="text-gray-800 font-bold">無料</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 w-20 text-gray-500 font-bold">定員</dt>
                    <dd className="text-gray-800">{seminar.capacity}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="shrink-0 w-20 text-gray-500 font-bold">主催</dt>
                    <dd className="text-gray-800">{seminar.host}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <div id="seminar-form" className="pt-6 pb-16 md:pb-20 px-5">
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 md:p-12">
              <div className="text-center mb-10">
                <p className="text-blue-600 font-bold text-xs tracking-widest mb-3">
                  REGISTRATION
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                  この回に申し込む
                </h2>
                <p className="text-sm text-gray-500">
                  <strong>{seminar.date}（{seminar.weekday}）{seminar.time}</strong>の回にお申込みいただけます。
                  <br />
                  1営業日以内にGoogle MeetのURLをお送りします。
                </p>
              </div>
              <SeminarForm
                sessionSlug={seminar.slug}
                sessionTitle={seminar.title}
                sessionDate={seminar.date}
                sessionTime={seminar.time}
              />
            </div>
          </div>
        </div>

        {/* Other Sessions */}
        <section className="py-16 md:py-20 px-5 bg-white border-y border-gray-100">
          <div className="mx-auto" style={{ maxWidth: 1000 }}>
            <div className="mb-10">
              <span className="text-blue-600 font-bold tracking-widest text-xs block mb-2">
                OTHER SESSIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                他の開催回
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {upcomingSeminars
                .filter((s) => s.slug !== seminar.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/seminars/${s.slug}/`}
                    className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-4 md:p-5 flex items-center gap-4"
                  >
                    <div
                      className="shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center text-white"
                      style={{ backgroundColor: "#2563eb" }}
                    >
                      <span className="text-[10px] font-medium leading-none">{s.month}月</span>
                      <span className="text-xl font-black leading-tight">{s.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">
                          {s.tag}
                        </span>
                        <span className="text-xs text-gray-500 font-bold">{s.time}</span>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
                        {s.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-blue-600 group-hover:underline whitespace-nowrap">
                      詳細 →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

      </main>

      <a
        href="#seminar-form"
        className="md:hidden fixed bottom-6 left-5 right-5 z-50 flex items-center justify-center gap-2 font-bold text-white bg-gray-900 py-4 rounded-xl shadow-2xl transition-transform active:scale-95"
      >
        <span className="material-icons-outlined text-base">videocam</span>
        <span className="text-sm tracking-wide">この回に申し込む</span>
      </a>
      <Footer />
    </div>
  );
}

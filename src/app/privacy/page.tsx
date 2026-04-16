import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Claude Code リスキリング研修",
  description:
    "株式会社ZETTAIが運営するClaude Code リスキリング研修における個人情報の取り扱いについて定めたプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div id="page">
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px] py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-10 text-center">
              プライバシーポリシー
            </h1>

            <p className="mb-8 leading-relaxed">
              株式会社ZETTAI（以下「当社」といいます）は、「Claude Code
              リスキリング研修」（以下「本サービス」といいます）の運営にあたり、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                1. 個人情報の取得について
              </h2>
              <p className="leading-relaxed">
                当社は、本サービスの提供にあたり、以下の方法で適法かつ公正な手段により個人情報を取得いたします。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 leading-relaxed">
                <li>お問い合わせフォームへのご入力</li>
                <li>研修お申し込み時のご登録</li>
                <li>セミナー・イベントへのお申し込み</li>
                <li>資料ダウンロード時のご登録</li>
                <li>その他、本サービスのご利用に伴う情報の提供</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                2. 個人情報の利用目的
              </h2>
              <p className="leading-relaxed">
                当社は、取得した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 leading-relaxed">
                <li>本サービスの提供・運営</li>
                <li>研修プログラムに関するご案内・ご連絡</li>
                <li>お問い合わせへの対応</li>
                <li>セミナー・イベント等のご案内</li>
                <li>サービス改善のための分析・調査</li>
                <li>新サービスや関連情報のご案内</li>
                <li>契約・請求に関する事務処理</li>
                <li>その他、上記利用目的に付随する業務</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                3. 個人情報の第三者提供
              </h2>
              <p className="leading-relaxed">
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 leading-relaxed">
                <li>法令に基づく場合</li>
                <li>
                  人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                </li>
                <li>
                  国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                4. 個人情報の管理
              </h2>
              <p className="leading-relaxed">
                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                5. Cookie（クッキー）について
              </h2>
              <p className="leading-relaxed">
                本サービスでは、お客様の利便性向上やアクセス状況の分析のためにCookieを使用する場合があります。Cookieによりお客様個人を特定することはありません。なお、ブラウザの設定によりCookieの受け取りを拒否することが可能ですが、その場合、本サービスの一部機能がご利用いただけない場合があります。
              </p>
              <p className="mt-3 leading-relaxed">
                また、当社はGoogle
                Analyticsなどのアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                6. お問い合わせ窓口
              </h2>
              <p className="leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg leading-relaxed">
                <p className="font-bold mb-2">株式会社ZETTAI</p>
                <p>CLAUDE CODE リスキリング研修 運営事務局</p>
                <p className="mt-2">
                  メール：
                  <a
                    href="mailto:info@claudecode.co.jp"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    info@claudecode.co.jp
                  </a>
                </p>
              </div>
            </section>

            <p className="text-sm text-gray-500 text-right">
              制定日：2025年4月1日
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

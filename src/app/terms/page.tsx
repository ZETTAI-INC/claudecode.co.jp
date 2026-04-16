import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "利用規約 | Claude Code リスキリング研修",
  description:
    "Claude Code リスキリング研修の利用規約です。本サービスをご利用いただくすべてのお客様に適用される条件を定めています。",
};

export default function TermsPage() {
  return (
    <div id="page">
      <Header />
      <main id="primary" className="site-main">
        <div className="mt-[64px] py-16 px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-12">利用規約</h1>

            <p className="text-sm text-gray-600 mb-10 leading-relaxed">
              本利用規約（以下「本規約」といいます。）は、株式会社ZETTAI（以下「当社」といいます。）が提供する「CLAUDE
              CODE
              リスキリング研修」（以下「本サービス」といいます。）の利用に関する条件を定めるものです。本サービスをご利用いただくすべてのお客様（以下「利用者」といいます。）は、本規約に同意のうえご利用ください。
            </p>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第1条（適用範囲）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  本規約は、本サービスの利用に関し、当社と利用者との間のすべての関係に適用されます。
                </li>
                <li>
                  当社が本サービスに関して別途定める個別規定、ガイドライン等（以下「個別規定等」といいます。）は、本規約の一部を構成するものとします。
                </li>
                <li>
                  本規約と個別規定等の内容が異なる場合には、個別規定等の内容が優先して適用されます。
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第2条（サービス内容）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  本サービスは、Claude
                  Codeを活用したリスキリング研修プログラムの提供を目的としています。具体的なサービス内容は、当社が別途定めるところによります。
                </li>
                <li>
                  当社は、利用者に事前に通知することなく、本サービスの内容を変更し、または本サービスの提供を中止もしくは終了することができるものとします。
                </li>
                <li>
                  当社は、本サービスの変更、中止または終了により利用者に生じた損害について、一切の責任を負いません。
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第3条（利用料金）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  本サービスの利用料金は、当社が別途定める料金表に従うものとします。
                </li>
                <li>
                  利用者は、当社が指定する支払方法により、所定の期日までに利用料金を支払うものとします。
                </li>
                <li>
                  支払済みの利用料金は、法令に別段の定めがある場合を除き、理由のいかんを問わず返金いたしません。
                </li>
                <li>
                  当社は、利用者に事前に通知のうえ、利用料金を改定することができるものとします。
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第4条（禁止事項）
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>
                  当社、他の利用者またはその他第三者の知的財産権、肖像権、プライバシー権、名誉その他の権利もしくは利益を侵害する行為
                </li>
                <li>
                  本サービスで提供される研修教材、資料等を当社の許諾なく複製、転載、配布、販売する行為
                </li>
                <li>
                  本サービスのサーバーまたはネットワークの機能を妨害する行為
                </li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスまたはこれを試みる行為</li>
                <li>
                  他の利用者に関する個人情報等を収集または蓄積する行為
                </li>
                <li>不正な目的を持って本サービスを利用する行為</li>
                <li>
                  その他、当社が不適切と判断する行為
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第5条（知的財産権）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  本サービスにおいて提供される研修教材、テキスト、動画、画像その他一切のコンテンツ（以下「本コンテンツ」といいます。）に関する著作権その他の知的財産権は、当社または当社に使用を許諾した権利者に帰属します。
                </li>
                <li>
                  利用者は、当社の事前の書面による承諾なく、本コンテンツを複製、改変、頒布、公衆送信その他の方法により利用してはなりません。
                </li>
                <li>
                  利用者が本サービスの利用に際して作成した成果物の知的財産権は利用者に帰属します。ただし、当社が提供した本コンテンツの部分についてはこの限りではありません。
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第6条（免責事項）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティに関する欠陥、エラー、バグ、権利侵害等を含みます。）がないことを明示的にも黙示的にも保証しておりません。
                </li>
                <li>
                  当社は、本サービスに起因して利用者に生じたあらゆる損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。
                </li>
                <li>
                  当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                </li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">
                第7条（規約の変更）
              </h2>
              <ol className="list-decimal list-inside text-sm text-gray-700 leading-relaxed space-y-2">
                <li>
                  当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。
                </li>
                <li>
                  変更後の本規約は、当社が別途定める場合を除き、当社ウェブサイト上に表示した時点より効力を生じるものとします。
                </li>
                <li>
                  本規約の変更後に利用者が本サービスを利用した場合、変更後の規約に同意したものとみなします。
                </li>
              </ol>
            </section>

            <p className="text-sm text-gray-500 text-right">
              2025年4月1日 制定
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

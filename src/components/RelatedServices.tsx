import Image from "next/image";
import Link from "next/link";

export default function RelatedServices() {
  return (
    <div className="my-12">
      <section>
        <div>
          <div className="block-title mb-6">CLAUDE CODE リスキリング研修 関連サービス</div>

          <div className="mt-12">
            <div className="flex justify-center professionalService_cardWrapper">
              <div className="flex justify-center">
                <div className="professionalMaeHojyoContent">
                  <div className="flex flex-col items-center">
                    <div className="my-6">
                      <Image
                        src="/img/theme/home/logo-mae-hojyo.svg"
                        alt="eラーニング"
                        width={300}
                        height={60}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div>
                      <Image
                        src="/img/theme/home/mae-hojyo-image.svg"
                        alt="eラーニングイメージ"
                        width={400}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="my-6 mx-6 text-sm">
                      いつでもどこでも学べるオンデマンド型eラーニング。動画教材とハンズオン演習で、自分のペースでClaude Codeを習得できます。
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link className="flex mt-6 mx-6 text-sm items-center" href="/e-learning/">
                      サービスサイトを見る
                      <Image
                        className="ml-2"
                        src="/img/theme/home/right-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mx-3" />

              <div className="flex justify-center">
                <div className="professionalAiContent">
                  <div className="flex flex-col items-center">
                    <div className="my-6">
                      <Image
                        src="/img/theme/home/logo-gpt4.svg"
                        alt="AI開発環境構築支援"
                        width={300}
                        height={60}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div>
                      <Image
                        src="/img/theme/home/super-efficiency-image.svg"
                        alt="AI開発環境構築支援イメージ"
                        width={400}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="my-6 mx-6 text-sm">
                      Claude Codeの導入・設定から、社内ガイドライン策定、セキュリティポリシーの整備まで。AI開発環境の構築を包括的にご支援します。
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link className="flex mt-6 mx-6 text-sm items-center" href="/environment-setup/">
                      サービスサイトを見る
                      <Image
                        className="ml-2"
                        src="/img/theme/home/right-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-center">
                <div className="professionalMagContent">
                  <div className="flex flex-col items-center">
                    <div className="my-6">
                      <Image
                        src="/img/theme/home/logo-mag.svg"
                        alt="ナレッジベース"
                        width={300}
                        height={60}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div>
                      <Image
                        src="/img/theme/home/mag-image.svg"
                        alt="ナレッジベースイメージ"
                        width={400}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="my-6 mx-6 text-sm">
                      受講者限定のナレッジベース＆コミュニティ。最新のAI開発Tips、活用事例、Q&Aを共有し、継続的なスキルアップを支援します。
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link className="flex mt-6 mx-6 text-sm items-center" href="/knowledge/">
                      サービスサイトを見る
                      <Image
                        className="ml-2"
                        src="/img/theme/home/right-arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                </div>
                <div className="magBlankContent" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-center text-xs pt-12">
              「CLAUDE CODE リスキリング研修」は<br className="sp-only" />
              claudecode.co.jpが提供するサービスです
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

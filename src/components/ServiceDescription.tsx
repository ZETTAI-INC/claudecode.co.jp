import Image from "next/image";

export default function ServiceDescription() {
  return (
    <div className="for-home">
      <div className="for-home-container">
        <div className="text-center home_serviceDescriptionText">
          AI開発の<br className="sp-only" />
          「<span className="home_serviceDescriptionText-strong">使いこなせない</span>」を
          <br className="sp-only" />
          解決します。
        </div>
        <div className="flex justify-center">
          <Image
            className="pc-only py-7"
            src="/img/theme/home/home-serviceDescription-pc.svg"
            alt="サービス説明"
            width={1056}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            className="sp-only"
            src="/img/theme/home/home-serviceDescription-sp.svg"
            alt="サービス説明"
            width={400}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

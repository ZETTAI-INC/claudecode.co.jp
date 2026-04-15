import Image from "next/image";

interface LogoItem {
  src: string;
  width: number;
  height: number;
}

const gallery1: LogoItem[] = [
  { src: "/img/uploads/2023/05/d48939-16-488945-0-1.png", width: 650, height: 362 },
  { src: "/img/uploads/2025/01/dfa7bcf172698d6da5b3ff90795ecb00.webp", width: 972, height: 607 },
  { src: "/img/uploads/2025/01/fff2a42ce5c136d7b8be4449f84df96c.png", width: 904, height: 294 },
  { src: "/img/uploads/2023/07/logo.png", width: 241, height: 31 },
  { src: "/img/uploads/2024/02/b57e858107920c49cc431fc5b086f846.jpeg", width: 1200, height: 630 },
  { src: "/img/uploads/2025/01/69d6e28f56eeabc5c905f9bfc1ee7a64.jpg", width: 800, height: 166 },
  { src: "/img/uploads/2025/01/1920cdeba6c6df7a83079b82b754fc6a.jpg", width: 2269, height: 220 },
  { src: "/img/uploads/2023/01/logo-6.png", width: 862, height: 219 },
  { src: "/img/uploads/2023/01/5559106f249fdc5078b4ba0a1a3d9f70.png", width: 269, height: 82 },
  { src: "/img/uploads/2024/07/f8a188e9d00fe1b58db37993db856e7b.png", width: 478, height: 150 },
  { src: "/img/uploads/2023/11/logo.png", width: 452, height: 92 },
  { src: "/img/uploads/2023/09/ogp.png", width: 642, height: 181 },
  { src: "/img/uploads/2023/05/f81fd2e4c52864042852c112ce927ae2.jpg", width: 360, height: 76 },
  { src: "/img/uploads/2024/04/030ba02f216c006e679e6d83c9aa912f.png", width: 872, height: 154 },
  { src: "/img/uploads/2024/05/e0d08acb71ce35137281c71d433d3f52.png", width: 1076, height: 264 },
  { src: "/img/uploads/2024/05/2900ba0a48eb56686f6c01ebaa5dfa60.png", width: 640, height: 122 },
  { src: "/img/uploads/2024/07/3f2cd0f87b9ff571149f9d9796c0b944.png", width: 486, height: 164 },
  { src: "/img/uploads/2025/01/GB_logo-1.png", width: 550, height: 185 },
  { src: "/img/uploads/2024/09/7f7744e084a9ed2bd17a3f431997d982.png", width: 395, height: 128 },
  { src: "/img/uploads/2024/09/65bf3a05eddf705d1b05457753c94796.jpg", width: 776, height: 170 },
  { src: "/img/uploads/2025/01/cc78a0443c858652020dc88be5a4bdd1.png", width: 979, height: 168 },
  { src: "/img/uploads/2025/01/e43a14e4fad36905d41e9c51e6418d88.png", width: 490, height: 103 },
  { src: "/img/uploads/2025/01/c6029e7235364d14895c340f1071ee8b.png", width: 1672, height: 536 },
  { src: "/img/uploads/2025/01/4f0b4dbe32993fa1818e487e2b551cbf.jpeg", width: 1172, height: 300 },
  { src: "/img/uploads/2025/01/7df2f3e8892503b4e03f0194c65ff3c2.png", width: 364, height: 142 },
  { src: "/img/uploads/2025/01/fb4258a40416c1c7bd2d865b2fb61df8.png", width: 1722, height: 392 },
  { src: "/img/uploads/2025/01/Minato_Bank_Logo.svg_.png", width: 1599, height: 419 },
  { src: "/img/uploads/2023/11/msins-01.png", width: 222, height: 88 },
  { src: "/img/uploads/2025/01/d165a9fcc42e99e36f541ce64a97f4ff.jpg", width: 2560, height: 576 },
  { src: "/img/uploads/2025/10/image001-1.jpg", width: 1038, height: 240 },
];

const gallery2: LogoItem[] = [
  { src: "/img/uploads/2023/05/6f8259a3a4c3567d41e4f709cef288ed.png", width: 255, height: 98 },
  { src: "/img/uploads/2023/05/99b4c8d1d35ed570c13231606fbe2673.png", width: 229, height: 220 },
  { src: "/img/uploads/2021/11/company_dothomes.png", width: 280, height: 80 },
  { src: "/img/uploads/2022/07/66c19942ab4ba346fdb64ccc04cde373.png", width: 264, height: 62 },
  { src: "/img/uploads/2021/11/company_eatori.png", width: 280, height: 80 },
  { src: "/img/uploads/2021/11/company_hybrid.png", width: 280, height: 80 },
  { src: "/img/uploads/2021/11/company_startpass.png", width: 280, height: 80 },
  { src: "/img/uploads/2024/01/37b695a6c9172af0b1ef8e45da9167b8.jpeg", width: 1200, height: 630 },
  { src: "/img/uploads/2024/02/78342645cc201fe9a91b0db8e6632204.png", width: 180, height: 180 },
  { src: "/img/uploads/2024/04/sp-1fe90d2e92b8a788488802331c75f987-9e8e565c9dac53ebbc128a3032fb7a8f.jpeg", width: 200, height: 200 },
  { src: "/img/uploads/2024/04/c3f4b804ca493785f02c505d45b1750f.png", width: 258, height: 111 },
  { src: "/img/uploads/2024/05/1da9ab630a9e66f2206496ad5bcdc7bd.png", width: 606, height: 116 },
  { src: "/img/uploads/2024/05/a885d4e597d6057143f9c004c8546525.png", width: 1088, height: 136 },
  { src: "/img/uploads/2024/07/372555c1fa724b131bbdd73a2aa123dd.png", width: 482, height: 362 },
];

const gallery3: LogoItem[] = [
  { src: "/img/uploads/2023/07/66c19942ab4ba346fdb64ccc04cde373-2.png", width: 250, height: 55 },
  { src: "/img/uploads/2023/05/f81fd2e4c52864042852c112ce927ae2.png", width: 519, height: 97 },
  { src: "/img/uploads/2023/05/f8c0e571dab690ac46849eae796fa188.png", width: 281, height: 179 },
  { src: "/img/uploads/2023/05/d099d886ed65ef765625779e628d2c5f.png", width: 541, height: 93 },
  { src: "/img/uploads/2022/06/66c19942ab4ba346fdb64ccc04cde373-4.png", width: 235, height: 69 },
  { src: "/img/uploads/2022/06/logo.png", width: 248, height: 60 },
  { src: "/img/uploads/2022/07/66c19942ab4ba346fdb64ccc04cde373-1.png", width: 373, height: 87 },
  { src: "/img/uploads/2024/01/b327feb3e77cb6d4e47605d297691069.png", width: 1718, height: 1133 },
];

function LogoGallery({ logos }: { logos: LogoItem[] }) {
  return (
    <div className="logo-gallery">
      {logos.map((logo, i) => (
        <div key={i} className="logo-gallery-item">
          <Image
            src={logo.src}
            alt="導入企業ロゴ"
            width={logo.width}
            height={logo.height}
            style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ScrollingLogos() {
  const allLogos = [...gallery1, ...gallery2, ...gallery3];

  return (
    <div className="home_scrollingLogosContainer">
      <div className="home_scrollingLogosWrapper">
        <div className="scrollingLogos">
          <LogoGallery logos={allLogos} />
        </div>
        <div className="scrollingLogos">
          <LogoGallery logos={allLogos} />
        </div>
      </div>
    </div>
  );
}

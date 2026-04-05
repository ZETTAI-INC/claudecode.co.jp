const win = window;

const d = document;



d.addEventListener("DOMContentLoaded", function () {

  if (

    d.body.classList.contains("sales") ||

    d.body.classList.contains("jigyou-saikouchiku") ||

    d.body.classList.contains("bank") ||

    d.body.classList.contains("pro") ||

    d.body.classList.contains("esg") ||

    d.body.classList.contains("advisor") ||

    d.body.classList.contains("monozukuri-hojyo") ||

    d.body.classList.contains("procedure") ||

    d.body.classList.contains("jigyosyokeimahojyokin") ||
    d.body.classList.contains("powered-by-gpt")

  ) {

    getEventNews().then(function (data) {

      const slides = d.querySelectorAll(".swiper-slide");

      slides.forEach(function (slide, i) {

        const date = data[i].date.split("T")[0].split("-").join(".");

        const title = data[i].title.rendered;

        const link = data[i].link;

        const imgSrc = data[i]._embedded["wp:featuredmedia"][0].source_url;



        const HTML = `

                        <a href="${link}" target="_blank">

                            <img class="w-full h-40 md:h-44 object-cover" width="344" height="180" loading="lazy" src="${imgSrc}">

                            <div class="px-4 pt-4 pb-6 bg-white">

                                <div class="mb-2 md:mb-4 flex items-center">

                                    <label class="text-xs mr-3 hidden">無料</label>

                                    <span class="text-xs md:text-sm font-bold">${date}</span>

                                </div>

                                <p

                                class="text-sm md:text-lg font-bold leading-snug"

                                style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;">${title}</p>

                            </div>

                        </a>

                    `;

        slide.classList.add("shadow-lg");

        slide.innerHTML = HTML;

      });

      const swiper = new Swiper(".front-event-swiper", {

        centeredSlides: true,

        slidesPerView: 1.3,

        spaceBetween: 20,

        loop: true,

        loopFillGroupWithBlank: true,

        autoplay: {

          delay: 5000,

        },

        breakpoints: {

          768: {

            slidesPerView: 4,

            spaceBetween: 32,

          },

        },

        pagination: {

          el: ".swiper-pagination",

          clickable: true,

        },

        navigation: {

          nextEl: ".swiper-button-next",

          prevEl: ".swiper-button-prev",

        },

      });

    });

  }



  const container = document.querySelector(".home_scrollingLogosWrapper");

  if (container) {

    const firstSet = container.firstElementChild.cloneNode(true);

    container.appendChild(firstSet);

  }



  const proContainer = document.querySelector(".pro_scrollingLogosWrapper");

  if (proContainer) {

    const firstSet = proContainer.firstElementChild.cloneNode(true);

    proContainer.appendChild(firstSet);

  }



  const salesContainer = document.querySelector(".sales_scrollingLogosWrapper");

  if (salesContainer) {

    const firstSet = salesContainer.firstElementChild.cloneNode(true);

    salesContainer.appendChild(firstSet);

  }



  setTimeout(() => {

    // ホーム画面に遷移して URL に contentServices のハッシュが含まれている場合、

    // dom のレンダリング後に該当箇所までスクロールする。

    const contentServicesElement = document.getElementById("contentServices");

    if (

      location.pathname === "/" &&

      location.hash === "#contentServices" &&

      contentServicesElement

    ) {

      contentServicesElement.scrollIntoView();

    }

  }, 1000);



  // 各画面のサービス一覧リンクの設定をする処理。

  // 各画面ごとに仕様が異なるため、js で制御をしている。



  // TODO: modal-service-list-handlers クリック時モーダルは表示しなくなるため、

  // データに保存されている class 名や php の class 名は別途見直す

  const modalServiceListHandlers = Array.from(

    d.getElementsByClassName("modal-service-list-handlers")

  );

  if (modalServiceListHandlers.length > 0) {

    modalServiceListHandlers.forEach((handler) => {

      const anchorElements = handler.getElementsByTagName("a");

      if (anchorElements.length === 1 && handler.innerText === "サービス一覧") {

        anchorElements[0].setAttribute("href", "/#contentServices");

        if (location.pathname !== "/") {

          anchorElements[0].setAttribute("target", "_blank");

        }

      }



      if (location.pathname !== "/" && handler instanceof HTMLAnchorElement) {

        handler.setAttribute("target", "_blank");

      }

    });

  }

});

win.addEventListener("load", function () {});



// 運営からのお知らせデータを取ってくる

async function getEventNews() {

  const res = await fetch(

    "https://biz.stayway.jp/wp-json/wp/v2/hojyo_news/?_embed&per_page=4"

  );

  const data = await res.json();

  return data;

}


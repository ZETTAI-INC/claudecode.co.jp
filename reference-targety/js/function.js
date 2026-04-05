// モーダル
$(function () {
  var state = true;
  var scrollpos;
  $(".hamburger").click(function () {
    if (state == true && $(".hamburger").hasClass("active")) {
      $(".bg").removeClass("show");
      $(".hamburger").removeClass("active");
      $(".global").fadeOut();
    } else {
      $(".bg").addClass("show");
      $(".hamburger").addClass("active");
      $(".global").fadeIn();
      state = true;
      $(".global li a").on("click", function () {
        $(".bg").removeClass("show");
        $(".hamburger").removeClass("active");
        $(".global").fadeOut();
      });
    }
  });
});

// スムーススクロール/ページ内
$(window).on("load", function () {
  var header = $(".cmn_header");
  $('a[href^="#"]').on("click", function () {
    var gap = header.outerHeight();
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - gap;

    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});
// スムーススクロール/ページ外
$(function () {
  var urlHash = location.hash;
  if (urlHash) {
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      var headerHight = 84;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $("body,html").stop().animate({ scrollTop: position }, 0);
    }, 100);
  }
});

// タブ切り替え
$(function () {
  $(".tab").on("click", function () {
    var idx = $(".tab").index(this);
    $(this).addClass("active").siblings(".tab").removeClass("active");
    $(this).closest(".tab_lists").next(".tab_content_wrap").find(".tab_content").removeClass("active");
    $(".tab_content").eq(idx).addClass("active");
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
      $(function () {
        if ($(".scroll_wrap").length) {
          new ScrollHint(".scroll_wrap", {
            suggestiveShadow: true,
            scrollHintIconAppendClass: "scroll-hint-icon-white",
            remainingTime: 5000,
            i18n: {
              scrollable: "スクロールできます",
            },
          });
        }
      });
    }
  });
});

// sec01_スライダー
$(function () {
  if ($(".sec01_slider").length) {
    //if ($(".wrapper").hasClass("top_page")) {
    var swiper1 = new Swiper(".sec01_slider", {
      slidesPerView: "auto",
      spaceBetween: "10%",
      loop: true,
      centeredSlides: true,
      disableOnInteraction: false,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          spaceBetween: 0,
        },
      },
    });
  }
});
// スライド
$(function () {
  if ($(".slider").length) {
    const slideCount = document.querySelectorAll(".slider .swiper-slide").length;
    let mySwiper = null;
    if (slideCount >= 2) {
      // Swiper初期化
      let mySwiper = new Swiper(".slider", {
        slidesPerView: "auto",
        spaceBetween: "10%",
        loop: true,
        centeredSlides: true,
        preventClicks: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            spaceBetween: 0,
          },
        },
      });
    } else {
      // Swiper解除
      if (mySwiper) {
        mySwiper.destroy(false, true);
      }
      // スタイルを元に戻す
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        swiperWrapper.style.width = "auto";
      }
    }
    //スライドが1枚だった場合はslideNoneというクラスを付与する
    const slideLength = document.querySelectorAll(".slider .swiper-slide").length;
    if (slideLength == 1) {
      $(".slider").addClass("disabled");
    }
  }
});

//　アコーディオン
$(function () {
  $(".sec10 .ac_parent").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});

// 横スクロール促し/SP
$(window).on("load resize", function () {
  if ($(".scroll_wrap").length) {
    var winW = $(window).width();
    var devW = 767;
    if (winW <= devW) {
      $(function () {
        new ScrollHint(".scroll_wrap", {
          suggestiveShadow: true,
          scrollHintIconAppendClass: "scroll-hint-icon-white",
          remainingTime: 5000,
          i18n: {
            scrollable: "スクロールできます",
          },
        });
      });
    }
  }
});

$(function () {
  if ($(".c-frontpagesec10Slider").length) {
    new Swiper(".c-frontpagesec10Slider", {
      slidesPerView: "auto",
      spaceBetween: "10%",
      loop: true,
      centeredSlides: true,
      disableOnInteraction: false,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          spaceBetween: 0,
        },
      },
      pagination: {
        el: ".c-frontpagesec10Slider--pagination",
        clickable: true,
      },
    });
  }
});

/**
 * headerの追従
 */
const header = () => {
  /**
   * @type {Element} header
   */
  const headerArea = document.querySelector('[data-selector=header-area]');

  /**
   * @type {Element} クリックする要素
   */
  const navLinkList = document.querySelectorAll(
    '[data-selector=header-nav-link]'
  );

  /**
   * @type {Element} 監視セクション
   */
  const sectionList = document.querySelectorAll('[data-section-area]');

  /**
   * @type {string} ヘッダー全体をアクティブにするクラス
   */
  const ACTIVE = 'is-active';

  /**
   * @type {string} メニューを表示する際のクラス名
   */
  const SPACTIVE = 'is-spActive';

  /**
   * @type {string} リンクをアクティブにするクラス
   */
  const LINKACTIVE = 'is-linkActive';

  /**
   * 監視対象が監視内に入ったときに動作
   * @param {IntersectionObserverEntry[]} entries IntersectionObserverEntryオブジェクトの配列
   * @param {IntersectionObserver} observer IntersectionObserverインスタンス
   * @return {void}
   */
  const observerCall = (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      const linkId = target.getAttribute('data-section-area');
      const link = document.querySelector(`a[title=${linkId}]`);
      if (isIntersecting) {
        link.classList.add(LINKACTIVE);
      } else {
        link.classList.remove(LINKACTIVE);
      }
    });
  };

  /**
   * IntersectionObserverのオプション
   * @property {Element|Document|null} root 交差監視の対象
   * @property {string} rootMargin 交差を検知するrootからの距離
   * @property {FrozenArray<number>} threshold callbackが呼ばれる監視対象の最初と最後の割合
   */
  const options = {
    root: null,
    rootMargin: '-30% 0px -70%',
    threshold: 0,
  };

  /**
   * @type {IntersectionObserver} IntersectionObserverインスタンス
   */
  const observer = new IntersectionObserver(observerCall, options);

  sectionList.forEach((target) => {
    observer.observe(target);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerArea.classList.add(ACTIVE);
    } else {
      headerArea.classList.remove(ACTIVE);
    }
  });

  navLinkList.forEach((link) => {
    link.addEventListener('click', () => {
      headerArea.classList.remove(SPACTIVE);
    });
  });
};

/**
 *ハンバーガーメニューの開閉
 */
const hamburger = () => {
  /**
   * @type {Element} 開閉する要素
   */
  const headerArea = document.querySelector('[data-selector=header-area]');

  /**
   * @type {Element} 開閉を発火させる要素
   */
  const menuButton = document.querySelector('[data-selector=hamburger-button]');

  /**
   * @type {string} メニューを表示する際のクラス名
   */
  const ACTIVE = 'is-spActive';

  /**
   * ハンバーガメニュークリック時にクラスをつけ外しする
   * @return {void}
   */
  const classToggle = () => {
    headerArea.classList.toggle(ACTIVE);
  };

  /**
   * ハンバーガメニュークリック時の動作
   * @return {void}
   */
  menuButton.addEventListener('click', () => {
    classToggle();
  });
};

/**
 *slider
 */
const carousel = () => {
  /**
   * @type {number} 画面の幅
   */
  const windowWidth = window.innerWidth;

  /**
   * @type {number} ブレイクポイント
   */
  const breakPoint = 1024;

  /**
   * @type {Symbol} SPの状態
   */
  const isSp = windowWidth <= breakPoint;

  /**
   * @type {Element} 前に戻る要素
   */
  const prevButton = document.querySelector(
    '[data-selector=carousel-button-prev]'
  );

  /**
   * @type {Element} 次に進む要素
   */
  const nextButton = document.querySelector(
    '[data-selector=carousel-button-next]'
  );

  /**
   * @type {Element} スライド全体の要素
   */
  const slides = document.querySelector('[data-selector=carousel-slides]');

  /**
   * @type {NodeList} スライドする要素
   */
  const slideList = document.querySelectorAll('[data-selector=carousel-slide]');

  /**
   * @type {number} スライドする要素の数
   */
  const slideNum = slideList.length;

  /**
   * @type {number} スライドする要素のmargin
   */
  const slideMargin = Number(
    window
      .getComputedStyle(slideList[slideNum - 1])
      .getPropertyValue('margin-left')
      .split('px')[0]
  );

  /**
   * @type {number} スライドする要素の幅
   */
  const slideWidth = slideList[slideNum - 1].clientWidth + slideMargin;

  /**
   * @type {Element} 変更する青いバー要素
   */
  const slideLineBlue = document.querySelector(
    '[data-selector=carousel-line-blue]'
  );

  /**
   * @type {Element} 変更するバー要素
   */
  const slideLine = document.querySelector('[data-selector=carousel-line]');

  /**
   * @type {number} 表示しているスライドの枚数を管理
   */
  const displayIndex = isSp ? 1 : 3;

  /**
   * @type {number} バーの長さ
   */
  const lineWidth = slideLineBlue.clientWidth + slideLine.clientWidth;

  /**
   * @type {number} 表示しているスライドのindexを管理
   */
  let currentIndex = 0;

  /**
   * ボタンをdisableにする
   * @param {Element} target ボタン要素
   * @return {void}
   */
  const setDisable = (target) => {
    target.setAttribute('disabled', true);
  };

  /**
   * ボタンのdisableを外す
   * @param {Element} target ボタン要素
   * @return {void}
   */
  const unsetDisable = (target) => {
    target.removeAttribute('disabled');
  };

  /**
   * 表示したいスライドまでスライドする
   * @param {object} target オブジェクト
   * @param {number} index スライドのindex
   * @return {void}
   */
  const moveSlide = (index) => {
    slides.scroll({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  };

  /**
   * ボタンの表示状態を変更
   * @param {number} index スライドのindex
   * @return {void}
   */
  const changeButtonStatus = (index) => {
    const firstSlide = index === 0;
    const lastSlide = index === slideNum - displayIndex;

    unsetDisable(prevButton);
    unsetDisable(nextButton);

    if (firstSlide) {
      setDisable(prevButton);
    } else if (lastSlide) {
      setDisable(nextButton);
    }
  };

  /**
   * バーの長さの変更
   * @param {number} index スライドのindex
   * @return {void}
   */
  const changeLineWidth = (index) => {
    const blueLine = (lineWidth / slideNum) * (index + displayIndex);
    slideLineBlue.setAttribute('style', `width:${blueLine}px`);
    slideLine.setAttribute('style', `width:${lineWidth - blueLine}px`);
  };

  /**
   * スライド変更時に動作する
   * @param {number} index スライドのindex
   * @return {void}
   */
  const changeSlide = (index, move) => {
    if (move) {
      moveSlide(index);
    } else {
      changeButtonStatus(index);
      changeLineWidth(index);
    }
  };

  prevButton.addEventListener('click', () => {
    currentIndex -= 1;
    changeSlide(currentIndex, true);
  });

  nextButton.addEventListener('click', () => {
    currentIndex += 1;
    changeSlide(currentIndex, true);
  });

  slides.addEventListener('scroll', ({ target }) => {
    currentIndex = Math.round(target.scrollLeft / slideWidth);
    changeSlide(currentIndex, false);
  });
};

/**
 *qaの開閉時のアニメーション
 */
const accordion = () => {
  /**
   * アニメーションの時間
   * @property {number} duration アニメーションの時間
   * @property {string} easing アニメーションの動き
   */
  const animationTime = {
    duration: 400,
    easing: 'ease-out',
  };

  /**
   * アコーディオンを閉じるときのキーフレーム
   */
  const closeAnimation = (content) => [
    {
      height: `${content.offsetHeight}px`, // height: "auto"だとうまく計算されないため要素の高さを指定する
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];

  /**
   * アコーディオンを開くときのキーフレーム
   */
  const openAnimation = (content) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: `${content.offsetHeight}px`,
      opacity: 1,
    },
  ];

  /**
   * @type {Element} アコーディオンの要素
   */
  const details = document.querySelectorAll(
    '[data-selector=accordion-details]'
  );

  /**
   * @type {string} アニメーション実行中を管理するデータ属性
   */
  const RUNNING_DATA = 'data-animation-status';

  /**
   * @type {string} アニメーション実行中の値
   */
  const RUNNING_VALUE = 'running';

  /**
   * 閉じるアニメーション時の処理
   * @param {element} アコーディオン全体の要素
   * @param {content} 表示する要素
   * @return {void}
   */
  const closeAccordion = (element, content) => {
    const closingAnimation = content.animate(
      closeAnimation(content),
      animationTime
    );
    element.setAttribute(RUNNING_DATA, RUNNING_VALUE);

    closingAnimation.onfinish = () => {
      element.removeAttribute('open');
      element.setAttribute(RUNNING_DATA, '');
    };
  };

  /**
   * 表示するアニメーション時の処理
   * @param {element} アコーディオン全体の要素
   * @param {content} 表示する要素
   * @return {void}
   */
  const openAccordion = (element, content) => {
    element.setAttribute('open', 'true');
    const openingAnimation = content.animate(
      openAnimation(content),
      animationTime
    );
    element.setAttribute(RUNNING_DATA, RUNNING_VALUE);

    openingAnimation.onfinish = () => {
      element.setAttribute(RUNNING_DATA, '');
    };
  };

  details.forEach((element) => {
    const summary = element.querySelector('[data-selector=accordion-summary]');
    const content = element.querySelector('[data-selector=accordion-content]');

    summary.addEventListener('click', (event) => {
      event.preventDefault();

      if (element.getAttribute(RUNNING_DATA) === RUNNING_VALUE) {
        return;
      }

      if (element.open) {
        closeAccordion(element, content);
      } else {
        openAccordion(element, content);
      }
    });
  });
};

/**
 * ページ内リンクのスムーススクロール
 */
const smoothScroll = () => {
  /**
   * ターゲット位置までスクロール
   * @param {Element} eventElem
   * @return {void}
   */
  const scroll = (eventElem) => {
    const href = eventElem.getAttribute('href');
    const targetElem =
      href === '#' ? document.body : document.querySelector(href);
    const targetRect = targetElem.getBoundingClientRect().top;
    const currentPosition = window.pageYOffset;
    const top = targetRect + currentPosition;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  /**
   * @type {NodeList} ページ内リンクの要素
   */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scroll(e.currentTarget);
    });
  });
};

/**
 * 追従バナーの表示切り替え
 */
const followingBanner = () => {
  /**
   * @type {string} 非表示にするクラス
   */
  const HIDE = 'is-hide';

  /**
   * @type {Element} 追従する要素
   */
  const followingBannerElement = document.querySelector(
    '[data-selector=floating-banner]'
  );

  /**
   * @type {Element} 交差を監視させる要素
   */
  const target = document.querySelector('[data-selector=main-visual]');

  /**
   * IntersectionObserverのオプション
   * @property {Element|Document|null} root 交差監視の対象
   * @property {string} rootMargin 交差を検知するrootからの距離
   * @property {FrozenArray<number>} threshold callbackが呼ばれる監視対象の最初と最後の割合
   */
  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: '0px', // ビューポートの中心を判定基準にする
    threshold: 0, // 閾値は0
  };

  /**
   * 監視対象が監視内に入ったときに動作
   * @param {IntersectionObserverEntry[]} entries IntersectionObserverEntryオブジェクトの配列
   * @param {IntersectionObserver} observer IntersectionObserverインスタンス
   * @return {void}
   */
  const observerCall = (entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        followingBannerElement.classList.add(HIDE);
      } else {
        followingBannerElement.classList.remove(HIDE);
      }
    });
  };

  /**
   * @type {IntersectionObserver} IntersectionObserverインスタンス
   */
  const observer = new IntersectionObserver(observerCall, options);

  observer.observe(target);
};

header();
hamburger();
carousel();
accordion();
smoothScroll();
followingBanner();

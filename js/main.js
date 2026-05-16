const hamburger = document.querySelector(".header__hamburger");
const drawer = document.querySelector(".header__drawer");
const drawerLinks = document.querySelectorAll(".header__drawer-link");
const headerButton = document.querySelector(".header__button");

// ハンバーガーメニュー開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  drawer.classList.toggle("is-active");
  const isOpen = hamburger.classList.contains("is-active");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

// ドロワーメニュークリック時に閉じる
drawerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeDrawer();
  });
});

// 予約ボタンクリック時にも閉じる
headerButton.addEventListener("click", () => {
  closeDrawer();
});

// 閉じる処理を関数化
function closeDrawer() {
  hamburger.classList.remove("is-active");
  drawer.classList.remove("is-active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "メニューを開く");
}

/* ==========================
       予約ボタン
========================== */
(function () {
  const topBtn = document.getElementById("page-reserve");
  if (!topBtn) return;

  function getShowPoint() {
    // スマホ
    if (window.innerWidth <= 768) {
      return 150;
    }

    // PC
    return 300;
  }

  function toggleTopBtn() {
    const scroll = window.scrollY;
    const showPoint = getShowPoint();

    if (scroll > showPoint) {
      if (!topBtn.classList.contains("UpMove")) {
        topBtn.classList.remove("DownMove");
        topBtn.classList.add("UpMove");
      }
    } else {
      if (topBtn.classList.contains("UpMove")) {
        topBtn.classList.remove("UpMove");
        topBtn.classList.add("DownMove");
      }
    }
  }

  window.addEventListener("scroll", toggleTopBtn);
  window.addEventListener("resize", toggleTopBtn);

  toggleTopBtn(); // 初期判定
})();

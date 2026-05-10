const hamburger = document.querySelector(".header__hamburger");

const drawer = document.querySelector(".header__drawer");

const drawerLinks = document.querySelectorAll(".header__drawer-link, .header__drawer-button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  drawer.classList.toggle("is-active");

  const isOpen = hamburger.classList.contains("is-active");

  hamburger.setAttribute("aria-expanded", isOpen);

  hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

drawerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");

    drawer.classList.remove("is-active");

    hamburger.setAttribute("aria-expanded", "false");

    hamburger.setAttribute("aria-label", "メニューを開く");
  });
});

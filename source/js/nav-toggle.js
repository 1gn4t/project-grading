export function switchNav() {
  const toggle = document.querySelector(".main-header__toggle");
  const nav = document.querySelector(".main-nav");

  toggle.classList.remove("main-header__toggle--nojs");
  nav.classList.remove("main-nav--nojs");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("main-header__toggle--active");
    nav.classList.toggle("main-nav--show");
  });
}

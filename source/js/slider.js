import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
});

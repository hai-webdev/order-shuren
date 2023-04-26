// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import swiper from "swiper";

import { WOW } from "wowjs";

new WOW().init();
const bannerSwiper = new swiper(".banner-swiper", {
  loop: true,
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
});

const videoSwiper = new swiper(".video-swiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 108,
      slidesPerGroup: 3,
    },
  },
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  pagination: {
    el: ".video-pagination",
    clickable: true,
  },
});

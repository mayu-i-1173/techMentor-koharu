// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerMenu = document.querySelector(".hamburger-menu");
//   const navi = document.getElementById("hamburger-navigation");
//   const mask = document.querySelector(".header-mask");
//   hamburgerMenu.addEventListener("click", function () {
//     navi.classList.toggle("active");
//     hamburgerMenu.classList.toggle("active");
//     navi.classList.toggle("in");
//     mask.classList.toggle("active");
//   });
//   mask.addEventListener("click", function () {
//     navi.classList.toggle("active");
//     hamburgerMenu.classList.toggle("active");
//     navi.classList.toggle("in");
//     mask.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector("header");
  let btn = document.querySelector(".header__toggleBtn");
  let mask = document.querySelector(".header__mask");

  // メニューを開閉する
  btn.addEventListener("click", function () {
    if (!nav.classList.contains("open")) {
      nav.classList.add("open");
    } else {
      nav.classList.remove("open");
    }
  });

  if (!mask) {
    return false;
  }

  // マスクをクリックしてメニューを閉じる
  mask.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

"use strict";

const navBtn = document.querySelector(".hamburger");
const navMenus = document.querySelector(".nav-menus");
const navHeight = document.querySelector(".nav");

navBtn.addEventListener("click", function () {
  navHeight.classList.toggle("change-nav");
});

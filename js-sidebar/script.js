"use strict";

const aside = document.querySelector(".sidebar");
const buttonToggle = document.querySelector(".hamburger");
const body = document.getElementsByTagName("body");
const xButton = document.querySelector(".x-button");
const checkButton = document.querySelector(".btn");

aside.style.display = "flex";

let check = 0;
let total = 0;
buttonToggle.addEventListener("click", function () {
  total++;
  check = total - 1;
  if (check % 2 === 0) {
    aside.style.display = "none";
    checkButton.style.display = "flex";
  } else {
    aside.style.display = "flex";
    checkButton.style.display = "none";
  }
});

xButton.addEventListener("click", function () {
  total++;
  check = total - 1;
  if (check % 2 === 0) {
    aside.style.display = "none";
    checkButton.style.display = "flex";
  } else {
    aside.style.display = "flex";
    checkButton.style.display = "none";
  }
});

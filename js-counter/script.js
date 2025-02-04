"use strict";

const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");
const number = document.querySelector(".number");
let nr = document.getElementById("nr");
nr = 5;
console.log(nr);
console.log(number.textContent);

increaseBtn.addEventListener("click", function () {
  const getNumberIncreased = function () {
    return (number.textContent = nr++);
  };
  getNumberIncreased();
});

decreaseBtn.addEventListener("click", function () {
  const getNumberDecreased = function () {
    return (number.textContent = nr--);
  };
  getNumberDecreased();
});

resetBtn.addEventListener("click", function () {
  resetNumber();
});

function resetNumber() {
  nr = 0;
  return (number.textContent = nr);
}

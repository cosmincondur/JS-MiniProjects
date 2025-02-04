"use strict";

const userPhoto = document.querySelector(".photo img");
const userOne = new Image();
userOne.src = "imgs/user1.svg";
const userTwo = new Image();
userTwo.src = "imgs/user2.svg";
const userThree = new Image();
userThree.src = "imgs/user3.svg";
const userName = document.querySelector(".user span");
const userRole = document.querySelector(".role span");
const userDescription = document.querySelector(".description p");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnSur = document.querySelector(".btn");

const reviews = [
  {
    id: 1,
    user: `I'm CC`,
    role: "Front-End Developer",
    photo: userOne,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt blanditiis? Saepe officia amet fugiat perspiciatis maiores vitae et ipsa illum nisi voluptatem, quos, dicta fuga ipsam at libero magni.`,
  },
  {
    id: 2,
    user: `I'm BB`,
    role: "Back-End Developer",
    photo: userTwo,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    user: `I'm AA`,
    role: "Full-Stack Developer",
    photo: userThree,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illo explicabo excepturi voluptas quo, nisi culpa at laudantium reprehenderit nesciunt corrupti neque vel quia, sint dolores quae iusto harum eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt blanditiis? Saepe officia amet fugiat perspiciatis maiores vitae et ipsa illum nisi voluptatem, quos, dicta fuga ipsam at libero magni.`,
  },
];

let i = 0;
const showReview = function (i) {
  userName.textContent = reviews[i].user;
  userRole.textContent = reviews[i].role;
  userDescription.textContent = reviews[i].description;
  userPhoto.src = reviews[i].photo.src;
};
//photo.src = photo.src
// userName.textContent = reviews[2].userName;
//Continue for all, write a function that chages evryting based on the i and after that add event on click to add i++

// //WORKING !!!
// showReview(2);
//Now, add i++ to right and i-- to right arrow with addEventListener and run the function after everyclick

btnRight.addEventListener("click", function () {
  i++;
  if (i > reviews.length - 1) {
    i = 0;
  }
  showReview(i);
});
btnLeft.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = reviews.length - 1;
  }
  showReview(i);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(3));

btnSur.addEventListener("click", function () {
  i = getRandomInt(3);
  showReview(i);
});

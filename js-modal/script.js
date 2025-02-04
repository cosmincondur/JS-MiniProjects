"use strict";

const openModal = document.querySelector('.open-modal');
const modalWindow = document.querySelector('.modal-window');
const xButton = document.querySelector('.x-button');

openModal.addEventListener('click', function () {
    modalWindow.style.display = "flex";
})
xButton.addEventListener('click', function () {
    modalWindow.style.display = "none";
})
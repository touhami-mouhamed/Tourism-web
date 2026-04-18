let head = document.querySelector("header");


let menu = document.querySelector('.menu');
let cancel = document.querySelector('.cancel');
let slide = document.querySelector('.main-nav');
let scrollBar = document.querySelector('body');
head.classList.add("stick");
menu.onclick = () => {
    scrollBar.classList.add('no-overflow');
    menu.classList.add('menu-disappear');
    cancel.classList.add('cancel-appear');
    slide.classList.add('slide-show');
    head.classList.remove("stick");
};

cancel.onclick = () => {
    scrollBar.classList.remove('no-overflow');
    menu.classList.remove('menu-disappear');
    cancel.classList.remove('cancel-appear');
    slide.classList.remove('slide-show');
    head.classList.add("stick");
};
"use strict";

export const burgerMenu = () => {
    document.querySelector("#navbar__burger").addEventListener("click", () => {
        const navMenu = document.querySelector("#navbar__menu");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
};
// const burger = document.getElementById("navbar__burger");
// const navMenu = document.getElementById("navbar__menu");

// burger.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//     document.body.classList.toggle("no-scroll");
// });
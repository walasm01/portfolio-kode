"use strict";

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});
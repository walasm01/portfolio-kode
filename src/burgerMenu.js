"use strict";

export const burger = document.querySelector("#navbar__burger").addEventListener("click", () => {
    const navMenu = document.getElementById("navbar__menu");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});
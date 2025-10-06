"use strict";

export const burgerControls = document.querySelector("#navbar__burger").addEventListener("click", () => {
    const navMenu = document.getElementById("navbar__menu");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    
    const burgerBtn = document.querySelector("#navbar__burger");
    const isExpanded = burgerBtn.getAttribute("aria-expanded") === "false";
    burgerBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    const isHidden = navMenu.getAttribute("aria-hidden") === "true";
    navMenu.setAttribute("aria-hidden", isHidden ? "false" : "true"); 
});
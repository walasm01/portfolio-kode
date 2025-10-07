"use strict";

// Jeg finder burgeren i DOM og lytter efter clicks
export const burgerControls = document.querySelector("#navbar__burger").addEventListener("click", () => {
    // Jeg finder menuen som åbnes af burgeren i DOM
    const navMenu = document.getElementById("navbar__menu");
    // Når burgeren klikkes toggles navMenu's active-klasse, hvilket gør den synlig og usynlig
    navMenu.classList.toggle("active");
    // Når navMenu er åben, skal man ikke kunne scrolle
    document.body.classList.toggle("no-scroll");
    
    // Følgende er for at ændre på aria-labels:
    // Jeg finder burgeren i DOM og giver den et navn
    const burgerBtn = document.querySelector("#navbar__burger");
    // Hvis aria-expanded=false, så er isClosed=true
    const isExpanded = burgerBtn.getAttribute("aria-expanded") === "false";
    // Dette er en ternary operator, som er en kompakt if-else påstand.
    // Hvis isExpanded=true, så sæt aria-expanded=true, hvis ikke, så sæt aria-expanded=false
    burgerBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    // Samme logik gælder her:
    const isShown = navMenu.getAttribute("aria-hidden") === "true";
    navMenu.setAttribute("aria-hidden", isShown ? "false" : "true"); 
});
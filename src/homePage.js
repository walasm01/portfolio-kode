"use strict";

// Denne JS-fil tilhører hjem-siden og kontakt-siden.

// Alle projekter er eksporteret fra casesPage.js, men jeg vil kun vise 2 projekter på forsiden. Så jeg importerer kun de 2 projekter som jeg vil vise.
import { cameleonCreative } from "./casesPage.js";
import { ibaVidensbank } from "./casesPage.js";

// Når siden læses, så bliver display()-metoden brugt på de 2 projekter, som jeg har importeret.
document.addEventListener("DOMContentLoaded", () => {
    // Jeg finder den container, som jeg vil placerer mine projekter i
    const projectsContainerSome = document.getElementById("projects__container--some");
    // "beforeend" gør, at projekterne bliver sat ind lige før ending-tag af containeren. Så er jeg sikke på, at de kommer ind i den rigtige rækkefølge.
    projectsContainerSome.insertAdjacentHTML("beforeend", cameleonCreative.display());
    projectsContainerSome.insertAdjacentHTML("beforeend", ibaVidensbank.display());
});

// jeg importerer burgermenuens egenskaber, så burgermenuen virker på de tilhørende sider.
import { burgerControls } from "./uiComponents/burgerMenu.js";
"use strict";

import { cameleonCreative } from "./casesPage.js";
import { ibaVidensbank } from "./casesPage.js";

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainerSome = document.getElementById("projects__container--some");
    projectsContainerSome.insertAdjacentHTML("beforeend", cameleonCreative.display());
    projectsContainerSome.insertAdjacentHTML("beforeend", ibaVidensbank.display());
});

import { burger } from "./burgerMenu.js";
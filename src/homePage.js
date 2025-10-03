"use strict";

import { cameleonCreative } from "./casesPage.js";
import { datasikkerhed } from "./casesPage.js";

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainerSome = document.getElementById("projects__container--some");
    projectsContainerSome.insertAdjacentHTML("beforeend", cameleonCreative.display());
    projectsContainerSome.insertAdjacentHTML("beforeend", datasikkerhed.display());
});

import { burger } from "./burgerMenu.js";
'use strict';

/*
<section class="project">
    <div class="project-title">
        <h3>CAMELEON CREATIVE</h3>
        <p class="undertitle">IBA Multimediedesigner</br>2. semester - 1. projekt</p>
    </div>
    <div class="project-content">

        <img class="main-img" src="img/cc-phone-and-pc-mockup.png" alt="">

        <div class="sec-content">
            <div class="sec-text">
                <h4>Et Multimediebureau</h4>
                <p>
                    Dette var et gruppeprojekt, hvor formålet var at lave en brandstrategi og en visuel kampagne for vores eget nystartede multimediebureau. I projektet har vi arbejdet iterativt med bl.a.:
                </p>
                <ul>
                    <li>Udarbejdelse af visuelle elementer for brandet, såsom logo, lavet i Adobe Illustrator</li>
                    <li>En high-fidelity visuel prototype af et responsivt website på figma</li>
                    <li>En designmanual for vores brand, lavet i Adobe InDesign</li>
                </ul>
            </div>
            <img class="sec-img" src="img/cc-visitkort.png" alt="">
            <div class="sec-text">
                <h4>Min rolle</h4>
                <p>
                    Resultatet blev et farverigt og energisk brand for vores multimediebureau, som vi kalder for Cameleon Creative. Hele brandet er baseret på kamæleonen, da den er et symbol på kreativitet. Jeg havde et større ansvar i at udvikle brandets visuelle identitet, hvilket indebar farvevalg, fonte, udarbejdelse af logo mm. Alle disse elementer skulle jeg forbinde til en konkret og konsistent visuel brandidentitet, som kommer til udtryk i figma prototypen.
                </p>
            </div>
            <img class="sec-img" src="img/cc-designguide-mockup.png" alt="">
        </div>

        <div class="icons">
            <img class="icon" src="img/illustrator.png" alt="Adobe illustrator ikon">
            <img class="icon" src="img/indesign.png" alt="Adobe InDesign ikon">
            <img class="icon" src="img/figma.png" alt="Figma ikon">
        </div>

    </div>
    </section>
*/

class Project {
    constructor({
        title, 
        link, 
        undertitle, 
        mainImg, 
        mainAltText, 
        secImgs, 
        description, 
        descriptionTitle, 
        descriptionList, 
        result, 
        resultTitle, 
        icons
    }) {
        this.title = title;
        this.link = link;
        this.undertitle = undertitle;
        this.mainImg = mainImg;
        this.mainAltText = mainAltText;
        this.secImgs = secImgs;
        this.description = description;
        this.descriptionTitle = descriptionTitle;
        this.descriptionList = descriptionList;
        this.result = result;
        this.resultTitle = resultTitle;
        this.icons = icons;
    }

    display() {
        return `
        <section class="project">
            <div class="project-title">
                <h3><a href="${this.link}" target="_blank">${this.title}</a></h3>
                <p class="undertitle">${this.undertitle}</p>
            </div>
            <div class="project-content">
                <img class="main-img" src="${this.mainImg}" alt="${this.mainAltText}">
                <div class="sec-content">
                    <div class="sec-text">
                        <h4>${this.descriptionTitle}</h4>
                        <p>
                            ${this.description}
                        </p>
                        <ul>
                            ${this.descriptionList}
                        </ul>
                    </div>
                    ${this.secImgs.map(img => `<img class="sec-img" src="${img}">`).join('')}
                    <div class="sec-text">
                        <h4>${this.resultTitle}</h4>
                        <p>
                            ${this.result}
                        </p>
                    </div>
                </div>
                <div class="icons">
                    <p class="icons-text">Disse værktøjer har jeg brugt i projektet:</p>
                    <div class="icon-container">
                        ${this.icons.map(icon => `<img class="icon" src="${icon}" alt="">`).join('')}
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}


const cameleonCreative = new Project({
    title: "CAMELEON CREATIVE",
    link: "https://www.figma.com/proto/sbqT4mJCSFvGOB05ujexYz/Branding-Projekt?page-id=724%3A1085&node-id=887-1573&p=f&viewport=479%2C820%2C0.05&t=aN9T4XDCHno2LTir-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=887%3A1573",
    undertitle: "IBA Multimediedesigner</br>2. Semester, 1. Projekt",
    mainImg: "img/cc-phone-and-pc-mockup.png",
    mainAltText: "Cameleon Creative hjemmeside på PC og mobil",
    descriptionTitle: "Et Multimediebureau",
    description: 
        "Dette var et gruppeprojekt, hvor formålet var at lave en brandstrategi og en visuel kampagne for vores eget nystartede multimediebureau. I projektet har vi arbejdet iterativt med bl.a.:",
    descriptionList: `
        <li>Udarbejdelse af visuelle elementer for brandet, såsom logo, lavet i Adobe Illustrator</li>
        <li>En high-fidelity visuel prototype af et responsivt website på figma</li>
        <li>En designmanual for vores brand, lavet i Adobe InDesign</li>`,
    secImgs: ["img/cc-visitkort.png", "img/cc-designguide-mockup.png"],
    resultTitle: "Min rolle",
    result: 
        "Resultatet blev et farverigt og energisk brand for vores multimediebureau, som vi kalder for Cameleon Creative. Hele brandet er baseret på kamæleonen, da den er et symbol på kreativitet. Jeg havde et større ansvar i at udvikle brandets visuelle identitet, hvilket indebar farvevalg, fonte, udarbejdelse af logo mm. Alle disse elementer skulle jeg forbinde til en konkret og konsistent visuel brandidentitet, som kommer til udtryk i figma prototypen.",
    icons: ["img/figma-sticker-v2.png", "img/illustrator-sticker-v2.png", "img/indesign-sticker-v2.png", "img/photoshop-sticker.png", "img/aftereffect-sticker.png", "img/wordpress-sticker.png"]
});

const datasikkerhed = new Project({
    title: "SPILLET OM DATASIKKERHED",
    link: "https://walterliaoasmussen.dk/datasikkerhed",
    undertitle: "IBA Multimediedesigner</br>2. Semester, 2. Projekt",
    mainImg: "img/datasikkerhed-laptop-and pc-mockup-v3.png",
    mainAltText: "Spillet om datasikkerhed på PC og mobil",
    descriptionTitle: "Branching Scenarier",
    description: 
        "Dette var et individuelt projekt, hvor formålet var at formidle information om datasikkerhed gennem branching-scenarier. Dette skulle gøres på en kreativ og informativ måde med HTML, CSS og JavaScript. Til dette har jeg arbejdet med bl.a.:",
    descriptionList: `
        <li>Brainstorming og sketching af branching scenarier</li>
        <li>Iterativ og responsiv kodning med HTML, CSS og JavaScript</li>`,
    secImgs: ["img/datasikkerhed-branching.jpg", "img/datasikkerhed-phone-mockup.png"],
    resultTitle: "Et responsivt resultat",
    result: 
        "Jeg endte med at lave et spil om datasikkerhed, hvor man ville blive præsenteret for forskellige “Smishing” (SMS phishing) scenarier med forskellige svarmuligheder. Ud fra hvad man svarede kunne man få 6 forskellige slutninger.",
    icons: ["img/figma-sticker-v2.png", "img/html5-sticker.png", "img/css3-sticker.png", "img/js-sticker.png"]
});

document.addEventListener("DOMContentLoaded", () => {
    const projectsSection = document.querySelector(".projects");
    if (projectsSection) {
        projectsSection.insertAdjacentHTML("beforeend", cameleonCreative.display());
        projectsSection.insertAdjacentHTML("beforeend", datasikkerhed.display());
    }
});
"use strict";

// Dette er en skabelon for alle projekterne
export default class Project {
    // Jeg laver en array til alle projekterne
    static allProjects = [];

    // Her er alle de måder hvorpå projekterne differentierer sig, altså de bestemte egenskaber for alle projekterne
    constructor({
        projectId,
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
        icons,
        stickerImg,
    }) {
        this.projectId = projectId;
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
        this.stickerImg = stickerImg;

        // Når et instance af et Project laves, så bliver det pushed til min allProjects-array. Dette gøres, så jeg kan display hvert projekt automatisk uden at skulle kalde display()-metoden hver gang.
        Project.allProjects.push(this);
    }

    // Display()-metoden for hvordan projektet skal skrives ind med HTML
    display() {
        return `
        <section id="${this.projectId}" class="project">
            <div class="project__title">
                <h3><a href="${this.link}" target="_blank">${this.title}</a></h3>
                <p class="undertitle">${this.undertitle}</p>
            </div>
            <div class="project__main">
                <div class="icons">
                    <p class="icons__text">Disse værktøjer har jeg brugt i projektet:</p>
                    <div class="icons__container">
                        ${this.icons.map(icon => `<img class="icon" src="${icon}" alt="">`).join('')}
                    </div>
                </div>
                <img class="project__img--main" src="${this.mainImg}" alt="${this.mainAltText}">
                <div class="project__content">
                    <div class="project__text">
                        <h4>${this.descriptionTitle}</h4>
                        <p>
                            ${this.description}
                        </p>
                        <ul>
                            ${this.descriptionList}
                        </ul>
                    </div>
                    ${this.secImgs.map(img => `<img class="project__img--secondary" src="${img}" alt="">`).join('')}
                    <div class="project__text">
                        <h4>${this.resultTitle}</h4>
                        <p>
                            ${this.result}
                        </p>
                    </div>
                </div>
            </div>
            <a class="link__sticker" href="${this.link}" target="_blank"><img src="${this.stickerImg}" alt=""></a>
        </section>
        `;
    };
};
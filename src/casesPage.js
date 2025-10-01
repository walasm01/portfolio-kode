"use strict";

import Project from "./projectClass.js";

const greyWolf = new Project({
    projectId: "project__greywolf",
    title: "GREY WOLF",
    link: "",
    undertitle: "IBA Multimediedesigner</br>1. Semester, 1. Projekt",
    mainImg: "img/gw-double-phone-mockup.png",
    mainAltText: "Grey Wolf hjemmeside vist på to telefoner",
    descriptionTitle: "Bæredygtig tøjvirksomhed",
    description: 
        "Dette var et gruppeprojekt, hvor formålet var at lave en mobil webløsning for en fiktiv opstartsvirksomhed “Grey Wolf” med bæredygtighed i fokus. I projektet har vi arbejdet iterativt med bl.a.:",
    descriptionList: `
        <li>Målgrupperesearch vha. real-life interviews</li>
        <li>Udvikling af Grey Wolf-brandet baseret på bæredygtighedstemaet</li>
        <li>En high-fidelity visuel mobil prototype udarbejdet i figma</li>`,
    secImgs: ["img/gw-jacket-mockup.png", "img/gw-label-mockup.png"],
    resultTitle: "Fra Roskildetelt til udendørstøj",
    result: 
        "Grey Wolf har et tæt samarbejde med Roskilde Festival, hvor de indsamler de efterladte festivaltelte, og bruger materialet til at lave langtidsholdbart udendørstøj. I gruppen havde vi et tæt samarbejde, men hvor vi hver især havde vores egne fokusområder. Jeg havde et stort ansvar i udviklingen af Grey Wolfs brandidentitet og deres visuelle udtryk på figma-prototypen.",
    icons: ["img/figma-sticker-v2.png", "img/illustrator-sticker-v2.png"],
    stickerImg: "img/greywolf-character-sticker.png",
});

const ibaVidensbank = new Project({
    projectId: "project__iba",
    title: "IBA VIDENSBANK",
    link: "",
    undertitle: "IBA Multimediedesigner</br>1. Semester, 2. Projekt",
    mainImg: "img/iba-vidensbank-phone-mockup.png",
    mainAltText: "Iba's vidensbank vist på en skærm",
    descriptionTitle: "En webtilgængelig vidensbank",
    description: 
        "Dette var et individuelt projekt, hvor formålet var at kode en webtilgængelig og responsiv webplatform. Her ville IBA's ansatte nemt og hurtigt kunne tilgå informationer og guides til diverse programmer. I projektet har jeg arbejdet iterativt med bl.a.:",
    descriptionList: `
        <li>Reasearch af målgruppens behov via. spørgeskema</li>
        <li>Kodning i HTML og CSS med fokus på webtilgængelighed og responsivitet</li>
        <li>Brugertest til fejlfinding og forbedring af hjemmesiden</li>`,
    secImgs: ["img/iba-vidensbank-monitor-mockup.png"],
    resultTitle: "Brugervenlighed og responsivitet",
    result: 
        "Projektet endte i en fuldt funktionel hjemmeside opbygget med HTML og CSS, som jeg kalder for “IBA's Vidensbank”. Gennem testing og iterativ forbedring er den blevet brugervenlig, fuldt responsiv og mere eller mindre webtilgængelig. Havde jeg haft mere tid til opgaven, havde jeg lagt mere fokus på at forbedre webtilgængeligheden.",
    icons: ["img/figma-sticker-v2.png", "img/html5-sticker-white.png", "img/css3-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

const godsetUng = new Project({
    projectId: "project__godset",
    title: "GODSET UNG",
    link: "",
    undertitle: "IBA Multimediedesigner</br>1. Semester, 3. Projekt",
    mainImg: "img/godset-poster-mockup.png",
    mainAltText: "En plakat for Godset Ung",
    descriptionTitle: "En forlængelse af Godset",
    description: 
        "Til dette gruppeprojekt havde vi en rigitg virksomhed ind over projektet. Vi skulle lave en hjemmeside til Godset i Kolding, og udvikle en idé til et alkoholfrit event til unge 14-17 årige. I projektet har vi arbejdet iterativt med bl.a.:",
    descriptionList: `
        <li>Udvikling af Godset Ung-konceptet som forlængelse af Godset</li>
        <li>Responsiv kodning i HTML og CSS af en webplatform for Godset Ung</li>`,
    secImgs: ["img/godset-double-phone-mockup.png", "img/godset-plector-mockup.png"],
    resultTitle: "Kaos Kaos Kaos",
    result: 
        "Vi endte med at kode en prototype til en social platform, som vi kaldte for Godset Ung. På denne sociale platform samles Danmarks musikinteresserede unge, hvor de kan dele deres fælles interesser for musik. Derudover udviklede vi en idé til et alkoholfrit event på Godset, som vi kaldte for Kaos Band, hvor unge ville samles over en weekend for at koordinere en musikalsk performance.",
    icons: ["img/figma-sticker-v2.png", "img/html5-sticker-white.png", "img/css3-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

const cameleonCreative = new Project({
    projectId: "project__cameleon",
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
    resultTitle: "Den kreative kamæleon",
    result: 
        "Resultatet blev et farverigt og energisk brand for vores multimediebureau, som vi kalder for Cameleon Creative. Jeg havde et større ansvar i at udvikle brandets visuelle identitet, hvilket indebar farvevalg, fonte, udarbejdelse af logo mm. Alle disse elementer skulle jeg forbinde til en konkret og konsistent visuel brandidentitet, som kommer til udtryk i figma prototypen.",
    icons: ["img/figma-sticker-v2.png", "img/illustrator-sticker-v2.png", "img/indesign-sticker-v2.png", "img/photoshop-sticker.png", "img/aftereffect-sticker.png", "img/wordpress-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

const datasikkerhed = new Project({
    projectId: "project__data",
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
    resultTitle: "Ik fald for fup!",
    result: 
        "Jeg endte med at lave et spil om datasikkerhed, hvor man ville blive præsenteret for forskellige “Smishing” (SMS phishing) scenarier med forskellige svarmuligheder. Ud fra hvad man svarede kunne man få 6 forskellige slutninger.",
    icons: ["img/figma-sticker-v2.png", "img/html5-sticker-white.png", "img/css3-sticker.png", "img/js-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

const harald = new Project({
    projectId: "project__harald",
    title: "HARALD TANDLÆGERNE",
    link: "https://walterliaoasmussen.dk/datasikkerhed",
    undertitle: "IBA Multimediedesigner</br>2. Semester, 2. Projekt",
    mainImg: "img/harald-instagram-mockup.png",
    mainAltText: "Mockup af et Harald Tandlæger instagram oplæg",
    descriptionTitle: "Flere tandlæger!",
    description: 
        "Dette var et gruppeprojekt, hvor vi skulle lave et produkt for en rigtig virksomhed. Opgaven var at lave en revision af tandlægekæden Harald Tandlægernes hjemmeside med fokus på at tiltrække flere tandlæger til deres klinikker. Til dette har vi arbejdet med bl.a.:",
    descriptionList: `
        <li>Udarbejdelse af en hjemmeside prototype med WordPress med fokus på SEO</li>
        <li>Udarbejdelse af forskellige kampagner til sociale medier med figma</li>`,
    secImgs: ["img/harald-tote-bag.png", "img/harald-monitor-mockup2.png"],
    resultTitle: "Haralds nye SEO Wordpress side",
    result: 
        "Som løsning til projektet endte vi med at lave en SEO WordPress hjemmeside til Harald Tandlægerne, som beholdte de fleste designelementer af deres eksisterende hjemmeside, men hvor vi prøvede at give den et mere simpelt og moderne udtryk. Derudover fik vi lavet noget SoMe content for at tiltrække den yngre målgruppe af tandlægestuderende.",
    icons: ["img/figma-sticker-v2.png", "img/wordpress-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

const hkPlaybook = new Project({
    projectId: "project__playbook",
    title: "HK'S AI PLAYBOOK",
    link: "https://walterliaoasmussen.dk/datasikkerhed",
    undertitle: "IBA Multimediedesigner</br>2. Semester, 2. Projekt",
    mainImg: "img/playbook-monitor-mockup.png",
    mainAltText: "Mockup af HK's AI playbook på en skærm",
    descriptionTitle: "AI til fagforeningen HK",
    description: 
        "Dette var et gruppeprojekt, og her skulle vi lave et produkt til fagforeningen HK. Formålet var at lave en playbook med et sæt spilleregler for effektivt og ansvarligt brug af AI i deres arbejde. Til dette har vi arbejdet med bl.a.:",
    descriptionList: `
        <li>Prompt-engineering for effektivisering af vores samarbejde med AI</li>
        <li>Udarbejdelse af en playbook, der effektivt formidler information om AI</li>`,
    secImgs: ["img/playbook-book-mockup.png"],
    resultTitle: "I samarbejde med AI",
    result: 
        "I dette projekt fik vi lavet en AI Playbook, der formidlede information om ansvarligt og effektivt brug af AI i HK's arbejde med webinarer og kurser. Vi har i processen arbejdet ekstensivt med prompt-engineering for at få mest ud af vores AI brug som muligt. Jeg havde til ansvar at opsætte al den information, vi ville formidle i playbooken, på en letlæselig og overskuelig måde med Adobe InDesign.",
    icons: ["img/indesign-sticker.png"],
    stickerImg: "img/proaximon-sticker.png",
});

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects__container");
    Project.allProjects.forEach(project => projectsContainer.insertAdjacentHTML("beforeend", project.display()));
});

import { burgerMenu } from "./burgerMenu.js";
burgerMenu();
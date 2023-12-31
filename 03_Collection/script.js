import { collection } from "./collection.js";

collection.forEach(game => {
    const main = document.querySelector("main");
    const card = document.createElement("section");
    card.classList.add("card")
    card.addEventListener("mouseenter", scaleCard);
    card.addEventListener("mouseleave", scaleCardDown);

    const image = document.createElement("img");
    image.src = game.image;
    image.classList.add("card-image")
    card.appendChild(image);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card-content");

    const p = document.createElement("p");
    p.classList.add("genres")
    let text = getGenres(game.genre);
    let textNode = document.createTextNode(text);
    p.appendChild(textNode);
    contentDiv.appendChild(p);

    const title = document.createElement("h3");
    title.classList.add("title");
    let titleText = document.createTextNode(game.name);
    title.appendChild(titleText);
    contentDiv.appendChild(title);

    const developer = document.createElement("h4");
    let developerName = document.createTextNode(game.developer);
    developer.appendChild(developerName);
    contentDiv.appendChild(developer);

    const pRelease = document.createElement("p");
    let releaseDate = document.createTextNode(game.releaseDate);
    pRelease.appendChild(releaseDate);
    contentDiv.appendChild(pRelease);

    const pRating = document.createElement("p");
    let rating = document.createTextNode(game.rating + "/10");
    pRating.appendChild(rating);
    contentDiv.appendChild(pRating);

    const hr = document.createElement("hr");
    contentDiv.append(hr);
    const a = document.createElement("a");
    a.href = game.link;
    const svg = document.createElement("img");
    svg.src = "./images/steam.svg";
    a.appendChild(svg);
    contentDiv.append(a);
    card.appendChild(contentDiv);
    main.appendChild(card);
});

function getGenres(list) {
    let string = "";
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        string += element;
        if (i !== list.length-1) string += ", ";
    }
    return string;
}

function scaleCard(event) {
    event.target.style.transform = 'scale(1.2)';
    event.target.style.zIndex = 1;
    for (const child of document.body.children[1].childNodes) {
        if (child.nodeType === 1 && !child.isEqualNode(event.target)) {
            child.style.filter = 'blur(2px)';
        }
    }
}

function scaleCardDown(event) {
    event.target.style.transform = 'scale(1)';
    event.target.style.zIndex = 0;
    for (const child of document.body.children[1].childNodes) {
        if (child.nodeType === 1 && !child.isEqualNode(event.target)) {
            child.style.filter = 'blur(0px)';
        }
    }
}

const searchbox = document.querySelector("#search");
searchbox.addEventListener("keyup", filterCards);

function filterCards(event) {
    let keyword = event.target.value;
    const main = document.querySelector("main");
    for (const child of main.childNodes) {
        if (child.nodeType === 1) {
            child.style.display = "block";
        }
    }
    console.log(keyword)
    for (const child of main.childNodes) {
        if (child.nodeType === 1 && keyword !== "") {
            const title = child.querySelector(".title");
            if (!title.innerHTML.toLowerCase().includes(keyword.toLowerCase())) child.style.display = "none";
        }
    }
}
import { collection } from "./collection.js";
collection.forEach(game => {
    const main = document.querySelector("main");
    const card = document.createElement("section");
    card.classList.add("card")

    const image = document.createElement("img");
    image.src = game.image;
    card.appendChild(image);

    const p = document.createElement("p");
    let text = getGenres(game.genre);
    let textNode = document.createTextNode(text);
    p.appendChild(textNode);
    card.appendChild(p);

    const title = document.createElement("h2");
    let titleText = document.createTextNode(game.name);
    title.appendChild(titleText);
    card.appendChild(title);

    const developer = document.createElement("h3");
    let developerName = document.createTextNode(game.developer);
    developer.appendChild(developerName);
    card.appendChild(developer);

    const pRelease = document.createElement("p");
    let releaseDate = document.createTextNode(game.releaseDate);
    pRelease.appendChild(releaseDate);
    card.appendChild(pRelease);

    const pRating = document.createElement("p");
    let rating = document.createTextNode(game.rating + "/10");
    pRating.appendChild(rating);
    card.appendChild(pRating);

    main.appendChild(card);
});

function getGenres(list) {
    let string = "";
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        string += element;
        if (i !== list.length-1) string += ",";
    }
    return string;
}

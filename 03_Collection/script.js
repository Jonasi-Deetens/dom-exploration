import { collection } from "./collection.js";
collection.forEach(game => {
    const main = document.querySelector("main");
    const card = document.createElement("section");
    card.classList.add("card")

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

import { pokemons } from "./pokemons.js";

const main = document.querySelector("main");
pokemons.forEach(pokemon => {

    const card = document.createElement("section");
    card.classList.add("card");

    //Add card image
    const imageFigure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = pokemon.image;
    image.classList.add("card-image");
    imageFigure.classList.add("card-figure");
    imageFigure.appendChild(image);
    card.appendChild(imageFigure);

    //Add card types
    const typeParagraph = document.createElement("p");
    pokemon.types.forEach( type => {

        const spanItem = document.createElement("span");
        spanItem.textContent = type;
        spanItem.classList.add("span-item");
        typeParagraph.appendChild(spanItem);

        switch(type) {
            case 'ghost':
                spanItem.style.backgroundColor = "purple";
                spanItem.style.color = "white";
            break;
            
            case 'electric':
                spanItem.style.backgroundColor = "yellow";
            break;
            
            case 'normal':
                spanItem.style.backgroundColor = "gray";
            break;
            
            case 'fairy':
                spanItem.style.backgroundColor = "pink";
            break;
            
            case 'water':
                spanItem.style.backgroundColor = "blue";
                spanItem.style.color = "white";
            break;
        }

    });
    card.appendChild(typeParagraph);

    //Add card title
    const title = document.createElement("h1");
    title.textContent = pokemon.name;
    title.classList.add("card-title");
    card.appendChild(title);

    //Add buy button
    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.textContent = "Buy";
    card.appendChild(buyButton);
    
    //Add price paragraph
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = pokemon.price + " $";
    priceParagraph.classList.add("card-price");
    card.appendChild(priceParagraph);

    main.appendChild(card);
});
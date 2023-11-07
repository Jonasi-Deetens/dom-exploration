import { pokemons } from "./pokemons.js";

let totalPrice = 0;
let cartIsOpen = false;
let shoppingCart = [];

const cartButton = document.querySelector(".shopping-basket-button");
cartButton.addEventListener("click", openCart);

const clearCartButton = document.querySelector(".clear-cart-button");
clearCartButton.addEventListener("click", clearShoppingCart);

const searchBar = document.querySelector("#search");
searchBar.addEventListener("keyup", filterCards);

const main = document.querySelector("main").children[1];
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
    buyButton.textContent = "Catch";
    buyButton.addEventListener("click", () => { addToCart(pokemon) });
    card.appendChild(buyButton);
    
    //Add price paragraph
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = pokemon.price.toFixed(2) + " $";
    priceParagraph.classList.add("card-price");
    card.appendChild(priceParagraph);

    main.appendChild(card);
    updateTotalPrice();
});

function addToCart(pokemon) {
    let containsPokemon = false;
    shoppingCart.forEach(cartItem => {
        if (cartItem.pokemon === pokemon) {
            containsPokemon = true;
            cartItem.amount += 1;
        }
    });
    
    if (!containsPokemon) {
        shoppingCart.push({
            pokemon: pokemon,
            amount: 1
        })
    }

    updateShoppingCart();
}

function clearShoppingCart() {
    shoppingCart = [];
    updateShoppingCart();
}

function openCart() {
    const cart = document.querySelector("#shopping-cart-content");
    if (cartIsOpen) cart.style.display = "none";
    else cart.style.display = "block";

    cartIsOpen = !cartIsOpen;
}

function filterCards(event) {
    const titles = document.querySelectorAll(".card-title");
    const tags = document.querySelectorAll(".span-item");
    
    titles.forEach(title => {
        if (title.textContent.toLowerCase().includes(event.target.value.toLowerCase())) title.parentElement.style.display = "block";
        else title.parentElement.style.display = "none";
    })
}

function updateShoppingCart() {
    const cart = document.querySelector("#shopping-cart-content");
    const tbl = document.querySelector("#shopping-cart-table");
    tbl.innerHTML = "";

    shoppingCart.forEach(row => {
        const tr = tbl.insertRow();

        const cellOne = tr.insertCell();
        cellOne.textContent = row.pokemon.name;
        cellOne.style.float = "left";

        const cellTwo = tr.insertCell();
        cellTwo.textContent = row.pokemon.price.toFixed(2) + " $";

        const cellThree = tr.insertCell();
        cellThree.textContent = "x";
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.value = row.amount;
        input.name = row.pokemon.name + "Amount";
        input.classList.add("cart-amount-input");
        input.addEventListener("change", (e) => { changeAmount(e, row.pokemon) });
        cellThree.appendChild(input);

        const cellFour = tr.insertCell();
        cellFour.textContent = "Price: " + (row.pokemon.price * row.amount).toFixed(2) + " $" ;
        cellFour.style.float = "left";

        const cellFive = tr.insertCell();
        const removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("X"));
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => { removeCartItem(row.pokemon) });
        cellFive.appendChild(removeButton);

    });

    updateTotalPrice();
    cart.appendChild(tbl);
}

function changeAmount(event, pokemon) {
    shoppingCart.forEach(cartItem => {
        if (cartItem.pokemon === pokemon) {
            if (event.target.value >= 0) cartItem.amount = event.target.value;
            else event.target.value = 0;
        }
    });
    updateShoppingCart();
}

function removeCartItem(pokemon) {
    shoppingCart.forEach(cartItem => {
        console.log(cartItem.pokemon);
        console.log(shoppingCart.indexOf(cartItem));
        if (cartItem.pokemon === pokemon) shoppingCart.splice(shoppingCart.indexOf(cartItem),1);
    });
    updateShoppingCart();
}

function updateTotalPrice() {
    const priceElements = document.querySelectorAll(".total-price");
    totalPrice = 0;
    shoppingCart.forEach(cartItem => {
        totalPrice += cartItem.pokemon.price * cartItem.amount;
    });

    priceElements.forEach(priceElement => {
        priceElement.textContent = totalPrice.toFixed(2);
    });
}
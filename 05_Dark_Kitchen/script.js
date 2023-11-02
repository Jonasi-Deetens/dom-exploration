import { positiveMoods } from "./positiveMoods.js";
import { negativeMoods } from "./negativeMoods.js";
//Declare body styling
let lightMode = true;
let shoppingList = [];
const body = document.body;
body.style.backgroundImage = "url(./images/positivity-background.png)";

////Add header content

//Add title
const header = body.childNodes[1];
const headerDiv = document.createElement("div");
const h1 = document.createElement("h1");
let textNode = document.createTextNode("Welcome to Positivity!");
h1.appendChild(textNode);
headerDiv.appendChild(h1);

const p = document.createElement("p");
let pTextNode = document.createTextNode("Buy some positive emotions, for those negative days.");
p.appendChild(pTextNode);
headerDiv.appendChild(p);

header.appendChild(headerDiv);

//Add shoppingcart button
const shoppingCartButton = document.createElement("button");
let shoppingCartImage = document.createElement("img");
shoppingCartImage.src = "./images/shopping-cart.png";
shoppingCartImage.classList.add("button-image");

shoppingCartButton.appendChild(shoppingCartImage);
shoppingCartButton.addEventListener("click", showShoppingCart);
shoppingCartButton.classList.add("button-shopping")
header.appendChild(shoppingCartButton);

//Add lightmode button
const lightmodeButton = document.createElement("button");
let textNodeButton = document.createTextNode("Dark mode");
lightmodeButton.appendChild(textNodeButton);
lightmodeButton.classList.add("button-dark");
lightmodeButton.addEventListener("click", changeTheme);
header.appendChild(lightmodeButton);

createCards(positiveMoods);
////Add cards
function createCards(list) {
    clearMain();
    const main = document.querySelector("main");
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    list.forEach(mood => {
        const card = document.createElement("section");
        card.classList.add("card")
        if(!lightMode) card.classList.add("dark");

        const image = document.createElement("img");
        image.src = mood.image;
        image.classList.add("card-image")
        card.appendChild(image);

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("card-content");

        const title = document.createElement("h3");
        title.classList.add("title");
        let titleText = document.createTextNode(mood.name);
        title.appendChild(titleText);
        contentDiv.appendChild(title);
        
        const price = document.createElement("p");
        let priceText;
        if(lightMode) priceText = document.createTextNode(mood.price + " $");
        else priceText = document.createTextNode(mood.price);
        price.appendChild(priceText);
        contentDiv.appendChild(price);
                
        //Add buy button
        const buyButon = document.createElement("button");
        let textNodeBuyButton = document.createTextNode("Add to cart");
        buyButon.appendChild(textNodeBuyButton);
        buyButon.addEventListener("click", function() {
            addToCart(mood);
        })
        contentDiv.appendChild(buyButon);

        card.appendChild(contentDiv);
        cardWrapper.appendChild(card);
    });
    main.appendChild(cardWrapper);
    ////Create shopping cart
    const asideElement = document.createElement("aside");
    const articleElement = document.createElement("article");

    const totalPriceTextElement = document.createElement("p");
    totalPriceTextElement.textContent = "Total price: ";
    articleElement.appendChild(totalPriceTextElement);
    
    const totalPriceValueElement = document.createElement("p");
    totalPriceValueElement.textContent = "0.00 $";
    totalPriceValueElement.id = "total-price";
    articleElement.appendChild(totalPriceValueElement);

    asideElement.appendChild(articleElement);
    main.appendChild(asideElement);
}

function clearMain() {
    const main = document.querySelector("main");
    main.innerHTML = "";
}

function changeTheme() {
    lightMode = !lightMode;
    if (!lightMode) {
        body.style.backgroundImage = "url(./images/bad-vibes.jpg)";
        h1.innerHTML = "Why so negative?";
        h1.style.color = "red";
        p.innerHTML = "Why be positive? Everything sucks.";
        p.style.color = "white";
        lightmodeButton.innerHTML = "Light mode";
        lightmodeButton.classList.remove("button-dark");
        createCards(negativeMoods);
    } else {
        body.style.backgroundImage = "url(./images/positivity-background.png)";
        h1.innerHTML = "Welcome to Positivity!";
        h1.style.color = "black";
        p.innerHTML = "Buy some positive emotions, for those negative days.";
        p.style.color = "black";
        lightmodeButton.innerHTML = "Dark mode";
        lightmodeButton.classList.add("button-dark");
        createCards(positiveMoods);
    }
    shoppingList = [];
    console.log(shoppingList);
}

function showShoppingCart() {
    const asideElement = document.querySelector("aside");
    let display = asideElement.style.display;

    if(display === "block"){        
        asideElement.style.display = "none";
    } else {
        asideElement.style.display = "block";
    }
}

function addToCart(mood) {
    shoppingList.push(mood);
    const aside = document.querySelector("aside");
    const article = document.createElement("article");
    
    const articleName = document.createElement("p");
    articleName.textContent = mood.name;
    article.appendChild(articleName);

    const articlePrice = document.createElement("p");
    articlePrice.textContent = mood.price + "$";
    article.appendChild(articlePrice);

    aside.insertBefore(article, aside.children[0]);
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPriceElement = document.querySelector("#total-price");
    let totalPrice = 0;

    shoppingList.forEach(item => {
        totalPrice += parseFloat(item.price);
    });
    totalPriceElement.textContent = totalPrice + " $";
}
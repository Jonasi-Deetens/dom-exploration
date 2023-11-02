const buttonsList = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".", "=", "+"];
let mathString = "0"

const main = document.querySelector("main");
const screenElement = document.createElement("section");
screenElement.classList.add("screen");

const pElement = document.createElement("p");
pElement.textContent = mathString;
pElement.classList.add("screen-message");
screenElement.appendChild(pElement);


const buttonsElement = document.createElement("section");
buttonsElement.classList.add("buttons");

buttonsList.forEach(button => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = button;
    buttonElement.addEventListener("click", addToScreen)

    buttonsElement.appendChild(buttonElement);
});

main.appendChild(screenElement);
main.appendChild(buttonsElement);

function addToScreen(event) {
    const screenText = document.querySelector("screen-message");
    let key = event.target.textContent;
    switch (key) {
        case "X":
            evaluateMath();
            if (mathString !== "0") mathString += " * ";
            break;

        case "/":
            evaluateMath();
            if (mathString !== "0") mathString += " / ";
            break;

        case "+":
            evaluateMath();
            if (mathString !== "0") mathString += " + ";
            break;

        case "-":
            evaluateMath();
            if (mathString !== "0") mathString += " - ";                
            break;
    
        case "%":
            evaluateMath();
            convertToDecimal();
            break;
            
        case "AC":
            mathString = "0";
            break;

        case "=":
            evaluateMath();
            break;

        default:
            if (mathString === "0") mathString = event.target.textContent;
            else if (mathString !== "0") {
                mathString += event.target.textContent;
            }
    }
    pElement.textContent = mathString;
}

function evaluateMath() {
    mathString = Function('return ' + mathString)();
}

function convertToDecimal() {
    mathString = mathString / 100;
}
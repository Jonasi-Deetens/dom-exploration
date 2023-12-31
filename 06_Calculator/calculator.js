const buttonsList = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];
const functionsList = ["(", ")", "%", "AC", "/", "*", "-", ".", "=", "+"];
let lastPressedButton = "";
let mathString = "0";

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
    if (functionsList.includes(button)) buttonElement.classList.add("function-button");

    buttonsElement.appendChild(buttonElement);
});

main.appendChild(screenElement);
main.appendChild(buttonsElement);

function addToScreen(event) {
    let key = event.target.textContent;
    let addLastKey = true;

    switch (key) {
        
        case "(":
            if (mathString === "0" || lastPressedButton === "=") mathString = event.target.textContent;
            else if (mathString !== "0" && functionsList.includes(lastPressedButton)) {
                mathString += event.target.textContent;
            } else addLastKey = false;
            break;
            
        case ")":
            if (mathString === "0" || lastPressedButton === "=") mathString = event.target.textContent;
            else if (mathString !== "0" && !functionsList.includes(lastPressedButton)) {
                mathString += event.target.textContent;
            } else addLastKey = false;
            break;

        case "*":
            if (mathString !== "0" && (!functionsList.includes(lastPressedButton) || lastPressedButton === "=" || lastPressedButton === ")")) mathString += " * ";
            else if (mathString === "0") mathString += " * ";
            else if (functionsList.includes(lastPressedButton) && lastPressedButton !== key) {
                mathString = mathString.substring(0, mathString.lastIndexOf(lastPressedButton)) + '* ';
            } else addLastKey = false;
            break;

        case "/":
            if (mathString !== "0" && (!functionsList.includes(lastPressedButton) || lastPressedButton === "=" || lastPressedButton === ")")) mathString += " / ";
            else if (mathString === "0") mathString += " / ";
            else if (functionsList.includes(lastPressedButton) && lastPressedButton !== key) {
                mathString = mathString.substring(0, mathString.lastIndexOf(lastPressedButton)) + '/ ';
            } else addLastKey = false;
            break;

        case "+":
            if (mathString !== "0" && (!functionsList.includes(lastPressedButton) || lastPressedButton === "=" || lastPressedButton === ")")) mathString += " + ";
            else if (mathString === "0") mathString += " + ";
            else if (functionsList.includes(lastPressedButton) && lastPressedButton !== key) {
                mathString = mathString.substring(0, mathString.lastIndexOf(lastPressedButton)) + '+ ';
            } else addLastKey = false;
            break;

        case "-":
            if (mathString !== "0" && (!functionsList.includes(lastPressedButton) || lastPressedButton === "=" || lastPressedButton === ")")) mathString += " - ";
            else if (mathString === "0") mathString += " - ";
            else if (functionsList.includes(lastPressedButton) && lastPressedButton !== key) {
                mathString = mathString.substring(0, mathString.lastIndexOf(lastPressedButton)) + '- ';
            } else addLastKey = false;         
            break;
        
        case ".":
            if (mathString !== "0" && !functionsList.includes(lastPressedButton)) {            
                let stringArray = mathString.split(/(\s+)/);
                if (!stringArray[stringArray.length-1].includes(".")) mathString += ".";
            }
            addLastKey = false;
            break;
    
        case "%":
            if (mathString !== "0" && (!functionsList.includes(lastPressedButton) || lastPressedButton === "=")) {
                convertToDecimal();
            }
            addLastKey = false;
            break;
            
        case "AC":
            mathString = "0";
            break;

        case "=":
            evaluateMath();
            break;

        default:
            if (mathString === "0" || lastPressedButton === "=") mathString = event.target.textContent;
            else if (mathString !== "0" && lastPressedButton !== "=" && lastPressedButton !== ")") {
                mathString += event.target.textContent;
            } else addLastKey = false;
    }
    if (addLastKey) lastPressedButton = key;
    pElement.textContent = mathString;
}

function evaluateMath() {
    mathString = Function('return ' + mathString)();
}

function convertToDecimal() {
    let stringArray = mathString.split(/(\s+)/);
    stringArray[stringArray.length-1] /= 100;
    mathString = "";

    for (let index = 0; index < stringArray.length; index++) {
        mathString += stringArray[index];
        if (index != stringArray.length - 1) mathString += " ";
    }
}
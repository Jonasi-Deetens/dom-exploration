const changeLabelText = (e) => {
    const span = document.querySelector("#display-firstname");
    let text = document.createTextNode(e.target.value);

    span.innerHTML = "";
    span.appendChild(text);
}

const unhideText = (e) => {
    const truthSection = document.querySelector("#a-hard-truth");
    if (e.target.value >= 18) {
        truthSection.style = "";
    } else {
        truthSection.style.visibility = "hidden";
    }
}

const inputs = document.querySelectorAll("input");
const input = inputs[0];
input.addEventListener("keyup", changeLabelText);

const ageInput = inputs[1];
ageInput.addEventListener("keyup", unhideText);
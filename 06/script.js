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

const checkPassword = (e) => {
    if (e.target.value.length < 6) {
        e.target.style.backgroundColor = "red";
    } else {
        e.target.style.backgroundColor = "white";
    }
}

const confirmPassword = (e, input) => {
    const pwd = document.getElementById("pwd");
    if (e.target.value === pwd.value) {
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = "red";
    }
}

const toggle = (e) => {
    console.log(e.target.value)
    if (e.target.value === "light") 
    {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
}

const inputs = document.querySelectorAll("input");
const input = inputs[0];
input.addEventListener("keyup", changeLabelText);

const ageInput = inputs[1];
ageInput.addEventListener("keyup", unhideText);

const passwordInput = inputs[2];
const confirmPasswordInput = inputs[3];
passwordInput.addEventListener("keyup", checkPassword);
confirmPasswordInput.addEventListener("keyup", confirmPassword);

const darkModeToggle = document.querySelector("#toggle-darkmode");
darkModeToggle.addEventListener("change", toggle);

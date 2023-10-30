const changeLabelText = (e) => {
    const span = document.querySelector("#display-firstname");

    let text = document.createTextNode(e.target.value);

    span.innerHTML = "";
    span.appendChild(text);
}

const input = document.querySelector("input");
input.addEventListener("keyup", changeLabelText);
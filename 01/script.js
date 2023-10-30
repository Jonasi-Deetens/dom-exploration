const title = document.getElementsByTagName("title")[0];
console.log(title);
title.innerHTML = "Modifying the DOM";

document.body.style.backgroundColor = "#FF69B4";

for (const child of document.body.childNodes) {
    console.log(child);
}

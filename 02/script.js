const importantItems = document.getElementsByClassName("important");

for (const item of importantItems) {
    item.setAttribute("title","This is an important item");
}

const images = document.getElementsByTagName('img');

for (const image of images) {
    if (!image.classList.contains("important"))
    {
        image.hidden = true;
    }
}

const pElements = document.getElementsByTagName("p");

for (const p of pElements) {
    console.log(p.innerHTML);
    p.classList.forEach(element => {
        console.log(element);
    });
    if (p.classList.length === 0) p.style.backgroundColor = 'rgb('+ Math.random()*250 +', '+ Math.random()*250 +', ' + Math.random()*250 +')';
}
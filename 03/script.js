const article = document.getElementsByTagName("article")[0];
const learners = ["Jonasi", "Thiery", "Allesandro", "Alex", "Pieter", "Eduarda"];
let randomLearners = [];

while (learners.length !== 0) {
    let randomValue = Math.round(Math.random()*(learners.length-1));
    
    randomLearners.push(learners[randomValue]);
    learners.splice(randomValue, 1);
}

randomLearners.forEach(learner => {
    const newSection = document.createElement("section");
    const rgb = [Math.random()*250, Math.random()*250, Math.random()*250];
    newSection.style.backgroundColor = 'rgb('+ rgb[0] +', '+ rgb[1] +', '+ rgb[2] +')';

    const p = document.createElement("p");
    let text = document.createTextNode(learner);
    p.appendChild(text);
    p.style.color = contrast(rgb);

    newSection.append(p);
    article.appendChild(newSection);
});

function contrast(rgb) {
    const threshold = 149;
    brightness = (299*rgb[0] + 587*rgb[1] + 114*rgb[2]) / 1000

    return (brightness > threshold) ? '#000000' : '#ffffff';
}


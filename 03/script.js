const article = document.getElementsByTagName("article")[0];
const learners = ["Jonasi", "Thiery", "Allesandro", "Alex", "Pieter", "Eduarda"];

learners.forEach(learner => {
    const newSection = document.createElement("section");
    newSection.style.backgroundColor = 'rgb('+ Math.random()*250 +', '+ Math.random()*250 +', ' + Math.random()*250 +')';

    const p = document.createElement("p");
    let text = document.createTextNode(learner);
    p.appendChild(text);

    newSection.append(p);
    article.appendChild(newSection);
});
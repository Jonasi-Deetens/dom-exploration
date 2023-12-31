const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  const newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  newDiv.classList.add(e.target.classList[1]);
  newDiv.addEventListener('click', clickOnDisplayedSquare)

  const wrapper = document.querySelector(".displayedsquare-wrapper");
  wrapper.appendChild(newDiv);

  const listItem = document.createElement("li");
  let text = document.createTextNode("["+ getElapsedTime() +"] Created a new "+ e.target.classList[1] + " square.");
  listItem.appendChild(text);

  const list = document.querySelector("ul");
  list.appendChild(listItem);
}

const clickOnDisplayedSquare = (e) => {
    console.log(e.target.classList[1])
    window.prompt(e.target.classList[1]);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener("keypress", (key) => {
    if (key.key === "Space") {
        const rgb = [Math.random()*250, Math.random()*250, Math.random()*250];
        document.body.style.backgroundColor = 'rgb('+ rgb[0] +', '+ rgb[1] +', '+ rgb[2] +')';
        
        const listItem = document.createElement("li");
        let text = document.createTextNode("["+ getElapsedTime() +"] Pressed spacebar.");
        listItem.appendChild(text);

        const list = document.querySelector("ul");
        list.appendChild(listItem);
    }
    if (key.code === "KeyL") {
        console.log("del")
        const items = document.getElementsByTagName("li");
        while(items.length != 0) {
            items[0].remove();
        }
    }
    if (key.code == "KeyS") {
        console.log("del")
        const items = document.getElementsByClassName("displayedsquare");
        while(items.length != 0) {
            items[0].remove();
        }
    }
});
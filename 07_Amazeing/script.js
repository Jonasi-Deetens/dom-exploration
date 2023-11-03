let CURRENT_LEVEL = [];
let currentLevelId = 0;
let playerPosition = []

const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ];
  
  const LEVEL_2 = [
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ];
  
  const LEVEL_3 = [
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","S","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*","*","*","*",".","*","*","*"],
    ["*",".",".",".",".",".",".","*"],
    ["*",".","*","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*",".",".","*","*","*",".","*"],
    ["*","*",".","*","*","*","*","*"],
    ["*","T",".","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"]
  ];

  const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3];
  
  CURRENT_LEVEL = LEVELS[currentLevelId];

  generateLevel();

  function generateLevel() {
    const main = document.querySelector("main");
    main.style.width = 50 * CURRENT_LEVEL[0].length + "px";
    main.style.height = 50 * CURRENT_LEVEL.length + "px";
    main.innerHTML = "";
    for (let i = 0; i < CURRENT_LEVEL.length; i++) {
  
      for (let j = 0; j < CURRENT_LEVEL[i].length; j++) {
          
          const div = document.createElement("div");
          div.classList.add("square");
  
          switch (CURRENT_LEVEL[i][j]) {
              case "S":
                  playerPosition = [j, i]
                  div.classList.add("player");
              break;
              case ".":
                  div.classList.add("floor");
                  break;
              case "T":
                  div.classList.add("treasure");
                  break;
          
              default:
                  div.classList.add("wall");
                  break;
          }
  
          main.appendChild(div);
      }
      
    }
  }

  document.body.addEventListener("keyup", movePlayer);

  function movePlayer(event) {
    switch (event.code) {
        case "ArrowUp":
            if (CURRENT_LEVEL[playerPosition[1] - 1][playerPosition[0]] === "T") {
                changeLevel();
            }
            else if (playerPosition[1] > 0) {
                if (CURRENT_LEVEL[playerPosition[1] - 1][playerPosition[0]] !== "*") {
                    let copy = CURRENT_LEVEL[playerPosition[1] - 1][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1] - 1][playerPosition[0]] = CURRENT_LEVEL[playerPosition[1]][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0]] = copy;

                    playerPosition[1] -= 1;
                }
            }
            break;
        case "ArrowDown":
            if (CURRENT_LEVEL[playerPosition[1] + 1][playerPosition[0]] === "T") {
                changeLevel();
            }
            else if (playerPosition[1] < CURRENT_LEVEL.length) {
                if (CURRENT_LEVEL[playerPosition[1] + 1][playerPosition[0]] !== "*") {
                    let copy = CURRENT_LEVEL[playerPosition[1] + 1][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1] + 1][playerPosition[0]] = CURRENT_LEVEL[playerPosition[1]][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0]] = copy;

                    playerPosition[1] += 1;
                }
            }
            break;
        case "ArrowLeft":
            if (CURRENT_LEVEL[playerPosition[1]][playerPosition[0] - 1] === "T") {
                changeLevel();
            }
            else if (playerPosition[0] > 0) {
                if (CURRENT_LEVEL[playerPosition[1]][playerPosition[0] - 1] !== "*") {

                    let copy = CURRENT_LEVEL[playerPosition[1]][playerPosition[0] - 1];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0] - 1] = CURRENT_LEVEL[playerPosition[1]][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0]] = copy;

                    playerPosition[0] -= 1;

                }
            }
            break;
        case "ArrowRight":
            if (CURRENT_LEVEL[playerPosition[1]][playerPosition[0] + 1] === "T") {
                changeLevel();
            }
            else if (playerPosition[0] < CURRENT_LEVEL[0].length) {
                if (CURRENT_LEVEL[playerPosition[1]][playerPosition[0] + 1] !== "*") {

                    let copy = CURRENT_LEVEL[playerPosition[1]][playerPosition[0] + 1];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0] + 1] = CURRENT_LEVEL[playerPosition[1]][playerPosition[0]];
                    CURRENT_LEVEL[playerPosition[1]][playerPosition[0]] = copy;

                    playerPosition[0] += 1;

                }
            }
            break;
        default:

            break;
    }

    generateLevel();
  }

  function changeLevel() {
    currentLevelId++;
    if (currentLevelId > 2) currentLevelId = 0;
    CURRENT_LEVEL = LEVELS[currentLevelId];
  }
var timer = 30;
var score = 0;
var highScore = 0;
var highScore=localStorage.getItem('HighScore')||0;
function randomNum() {
  var rando = Math.random() * 9;
  rando = Math.floor(rando) + 1;
  return rando;
}
// function makebubble() {
//   var outerdiv = document.getElementsByClassName("bubbles")[0];
//   for (var i = 0; i < 120; i++) {
//     rando = randomNum();
//     var create = document.createElement("div");
//     create.setAttribute("class", "bubble");
//     create.textContent = rando;
//     outerdiv.appendChild(create);
//   }
// }

function makebubble() {
    var outerdiv = document.getElementsByClassName("bubbles")[0];
    var containerWidth = outerdiv.clientWidth;
    var containerHeight = outerdiv.clientHeight;
    
    var bubblesPerRow = Math.floor(containerWidth / 60); 
    var bubblesPerColumn = Math.floor(containerHeight / 60);
    
    var totalBubbles = bubblesPerRow * bubblesPerColumn;

    for (var i = 0; i < totalBubbles; i++) {
        rando = randomNum();
        var create = document.createElement("div");
        create.setAttribute("class", "bubble");
        create.textContent = rando;
        outerdiv.appendChild(create);
    }
}


function changeBubble() {
  var bubbless = document.getElementsByClassName("bubble");
  for (var i = 0; i < bubbless.length; i++) {
    var rand = randomNum();
    bubbless[i].textContent = rand;
  }
}
var rando = randomNum();
function hitt() {
  document.querySelector("#new").textContent = rando;
}
function restartGame() {
    timer = 30;
    score = 0;
    document.querySelector("#time").textContent = timer;
    document.querySelector("#scored").textContent = score;
    document.querySelector(".bubbles").innerHTML = ""; // Clear existing bubbles
    makebubble();  
    hitt();  
    runTimer(); 
}
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerint);
      updateHighScore();
      document.querySelector(
        ".bubbles"
      ).innerHTML = `
      <div class=game-over>
      <h1>Game Over</h1>
      <button id='restart' onclick='restartGame()'>Restart Game</button>
      </div>`;
    }
  }, 1000);
}
function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector("#Highscore").textContent = highScore;
    localStorage.setItem('HighScore',highScore)
  }
}
function newhit() {
  var rand = randomNum();
  document.querySelector("#new").textContent = rand;
  rando = rand;
}
var score = 0;
function clic() {
  document.querySelector(".bubbles").addEventListener("click", function (a) {
    if (a.target.classList.contains("bubble")) {
      var clicked = parseInt(a.target.textContent);
      if (clicked == rando) {
        score = score + 10;
        document.querySelector("#scored").textContent = score;
        newhit();
        changeBubble();
      } else {
        score = score - 5;
        document.querySelector("#scored").textContent = score;
        newhit();
        changeBubble();
      }
    }
  });
}
var storedHighScore = localStorage.getItem('HighScore');
if (storedHighScore) {
  highScore = parseInt(storedHighScore);
  document.querySelector("#Highscore").textContent = highScore;
}
makebubble();
hitt();
runTimer();
clic();

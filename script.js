console.log("welcome to pussy");
let turn = new Audio("tic tac toe/ting.mp3");
turn.playbackRate = 2;
let gameover = new Audio("tic tac toe/gameover.mp3");
gameover.playbackRate = 0.5;
let shot = "X";
let isgameover = false;

const changeShot = () => {
  return (shot === "X" ? "0" : "X");
}

//blink


//function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");



  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  wins.forEach((e) => {
    if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && boxtext[e[0]].innerHTML !== "") {
      document.querySelector(".info").innerHTML = boxtext[e[0]].innerHTML + " Won!";
      gameover.play();
      document.querySelector(".celebration").style.display = "flex";
      isgameover = true;
      function blink(){
        boxtext[e[0]].style.color = "#4e00c2";
        boxtext[e[1]].style.color = "#4e00c2";
        boxtext[e[2]].style.color = "#4e00c2";
      }
      // function unblink(){
      //   boxtext[e[0]].style.color = "#ffe4b8";
      //   boxtext[e[1]].style.color = "#ffe4b8";
      //   boxtext[e[2]].style.color = "#ffe4b8";
      // }
      
      blink();
      
    }
  });
}

//reset cicked
let res = document.getElementById("reset");
res.addEventListener("click", () => {
  location.reload();
})

//game logic
let boxes = document.querySelectorAll(".box");
boxes.forEach((cell) => {
  let boxtext = cell.querySelector(".boxtext");
  cell.addEventListener("click", () => {
    if (boxtext.innerHTML === "" && !isgameover) {
      boxtext.innerHTML = shot;
      checkWin();
      shot = changeShot();
      if (!isgameover)
        document.querySelector(".info").innerHTML = "Turn for " + shot;
      turn.play();
    }
  })
})
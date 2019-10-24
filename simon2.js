const thisGame = [0,1,2,3,1,2,0,4]
// const thisGame = [3,2,1,0]
//a65 s83 d68 f70 g71
const KEYARRAY = [65, 83, 68, 70, 71]
const TIMEOUT = 1000
let userKeys = []
let turn = 1

const KEYS = document.querySelectorAll(".key")

let COLORS = 
// {red yellow green aqua blue} x {dark, light}
   [  ["#B22102", "#F92E02"], 
      ["#AEA722", "#F5F902"],
      ["#37A501", "#57F908"],
      ["#048C88", "#01FCF4"],
      ["#011F90", "#0233F9"]  ]

function keysMatch(){
   let subGame = thisGame.slice(0, turn)
   for (var k = 0; k < subGame.length; k++) {
      if (userKeys[k] != subGame[k]){
         return false
      } 
   }
   return true 
}

//sets keyboard controls when called
function keydown(eo) {
   keyIndex = KEYARRAY.indexOf(eo.keyCode)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][1]
}

function keyup(eo) {
   keyIndex = KEYARRAY.indexOf(eo.keyCode)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][0] 

   userKeys.push(keyIndex)
   if(userKeys.length === turn){
      if (keysMatch()) {
         userKeys = []
         turn++
         // alert("pause")
         playGame()
      } else {
         alert("game over")
      }
   }
}

//sets initial keys colors when called
function setColors(index) {
   KEYS[index].style.backgroundColor = COLORS[index][0]
}

//flashes sequence when called
function flash(index, keyindex) {
   setTimeout(function() {
      KEYS[keyindex].style.backgroundColor = COLORS[keyindex][1]
   }, TIMEOUT * (index));
   setTimeout(function() {
      KEYS[keyindex].style.backgroundColor = COLORS[keyindex][0]
   }, TIMEOUT * (index + .5));
}

// https://zeit.co/blog/async-and-await
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
 }

function playGame() {
   sleep(TIMEOUT).then(() => {
      let subGame = thisGame.slice(0, turn)
      console.log(subGame)
      for(var i = 0;i < turn; i++) {
         flash(i, subGame[i])
      }   
   })
}

//onload
document.addEventListener("keydown", keydown, false)
document.addEventListener("keyup", keyup, false)


for (var i = 0; i < KEYS.length; i++) {
   setColors(i)
}

document.querySelector(".keyboard")
   .addEventListener("submit", function(eo){
      eo.preventDefault()
      turn = 1
      userKeys = []
      console.log(turn)
      console.log(thisGame)
      //thisGame = [random list]
      
      playGame()
   })

// for testing (click next for moving on)
// document.querySelector(".keyboard")
//    .addEventListener("submit", function(eo){
//       eo.preventDefault() 
//       playGame(subGames[turn])
//       turn++
//    })


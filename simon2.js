const thisGame = [0,1,2,3,1,2,0,4]
//a65 s83 d68 f70 g71
const KEYARRAY = [65, 83, 68, 70, 71]

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
function keydown() {
   keyIndex = KEYARRAY.indexOf(eo.keyCode, 0)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][1]
}

function keyup(eo){
   keyIndex = KEYARRAY.indexOf(eo.keyCode, 0)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][0] 

   userKeys.push(keyIndex)

   if (keysMatch()){
      turn++
      playGame(turn)
   } else {
      alert("game over")
   }
}

//sets initial keys colors when called
function setColors(index) {
   KEYS[index].style.backgroundColor = COLORS[index][0]
}

function flash(index) {
   const T = 1000
   setTimeout(function() {
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][1]
   }, T * (index));
   setTimeout(function() {
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][0]
   }, T * (index + .5));
}

//passes game into an array of arrays, each being thisGame+i long
function parseGame(sequence) {//Yet to be used
   let parsedGame = []
   for (var s = 1; s <= sequence.length; s++) {
      let steps = []
      parsedGame.push(steps.concat(sequence.slice(0,s)))
   }
   return parsedGame
}

function playGame(numKeys) {
   let subGame = thisGame.slice(0, turn)

   for(var i = 0;i < numKeys; i++) {
      flash(subGame[i])
   }
}

//onload
document.addEventListener("keydown", keydown, false)
document.addEventListener("keyup", keyup, false)


for (var i = 0; i < KEYS.length; i++) {
   setColors(i)
}

let subGames = parseGame(thisGame)

playGame(turn)

// for testing (click next for moving on)
document.querySelector(".keyboard")
   .addEventListener("submit", function(eo){
      eo.preventDefault() 
      playGame(subGames[turn])
      turn++
   })


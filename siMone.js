
const TIMEOUT = 400

const GAMES = 
[[0,4],[0,1,3,2,4], [0,1,2,3,1,2,0,4], [0,2,1,3,2,4,3,1,0]
 [4,3,2,1,3,2,4,0], [2,3,4,2,1,2,3,1,0,4,2,4,0,1,2,3,0] 
 [0,2,4,2,3,2,1,2,0,2,3,2,1,3,0,3,4,4,4,2,0,0,0]]
let sequence = 0
let userKeys = []
let turn = 0

const KEYS = document.querySelectorAll(".key")

let COLORS = 
// {red yellow green aqua blue} x {dark, light}
[["#B22102", "#F92E02"], 
 ["#AEA722", "#F5F902"],
 ["#37A501", "#57F908"],
 ["#048C88", "#01FCF4"],
 ["#011F90", "#0233F9"]]


function playAudio(){
   document.querySelector("#kick").play()
}


function keysMatch() {
   let subGame = GAMES[sequence].slice(0, turn)

   for (var k = 0; k < turn; k++) {
      if (userKeys[k] != subGame[k]) {
         return false
      } 
   }
   return true 
}

function keyControl() {
   //                a   s   d   f   g
   const KEYARRAY = [65, 83, 68, 70, 71]

   function keydown(eo) {
      // playAudio()
      keyIndex = KEYARRAY.indexOf(eo.keyCode)
      KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][1]
   }

   function keyup(eo) {
      // pauseAudio()
      keyIndex = KEYARRAY.indexOf(eo.keyCode)
      KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][0] 
      
      userKeys.push(keyIndex)

      if (userKeys.length === turn) {//got all the keys? 
         if (keysMatch()) {
            userKeys = []
            turn++
            if (turn > GAMES[sequence].length){
               alert("SUCCESS! (you completed this round")
               turn = 0
               sequence++
               flashKeys() 
            }

            flashKeys()
         } else {
            alert("FAIL (wrong key)")
         }
      }
   }

   document.addEventListener("keydown", keydown, false)
   document.addEventListener("keyup", keyup, false)
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

// https://davidwalsh.name/javascript-sleep-function
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
 }

function flashKeys() {
   sleep(TIMEOUT).then(() => {
      let subGame = GAMES[sequence].slice(0, turn)
      console.log(`current sequence ${subGame}`)
      console.log(`turn: ${turn}`)
      for(var i = 0;i < turn; i++) {
         flash(i, subGame[i])
      }   
   })
}

//ONLOAD
keyControl()

for (var i = 0; i < KEYS.length; i++) {
   KEYS[i].style.backgroundColor = COLORS[i][0]
}

//
document.querySelector(".keyboard")
   .addEventListener("submit", function(eo){
      eo.preventDefault()
      turn = 1
      userKeys = []
      
      console.log(`full sequence: ${GAMES[sequence]}`)
      //thisGame = [random list]

      flashKeys()
   })



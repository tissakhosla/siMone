let T = 500
let form = document.querySelector(".keyboard")
let USER = []
let thisGame = [0,1,2,3,1,2,0,4]
                  //a65 s83 d68 f70 g71
let thisKeyArray = [65, 83, 68, 70, 71]
let KEYS = document.querySelectorAll(".key")

let COLORS = 
// {red yellow green aqua blue} x {dark, light}
            [["#B22102", "#F92E02"], 
            ["#AEA722", "#F5F902"],
            ["#37A501", "#57F908"],
            ["#048C88", "#01FCF4"],
            ["#011F90", "#0233F9"]]

//sets keyboard controls when called
function keyControl(keyArray){
   document.addEventListener("keydown", function(eo){
      console.log(eo)
      keyIndex = keyArray.indexOf(eo.keyCode, 0)
      KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][1]
   }, false)
   document.addEventListener("keyup", function(eo){
      console.log(eo)
      keyIndex = keyArray.indexOf(eo.keyCode, 0)
      KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][0]  
   }, false)
}

//sets initial keys colors when called
function setColors(index){
   KEYS[index].style.backgroundColor = COLORS[index][0]
}

// runs whole sequence, needs to be implemented with parsedGame
function flash(index){
   setTimeout(function(){
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][1]
   }, T * (index));
   setTimeout(function(){
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][0]
   }, T * (index + .5));
}

//passes game into an array of arrays, each being thisGame+i long
function parseGame(sequence){//Yet to be used
   let parsedGame = []
   for (var s = 1; s <= sequence.length; s++){
      let steps = []
      parsedGame.push(steps.concat(sequence.slice(0,s)))
   }
   return parsedGame
}//YET UNUSED // although it works

keyControl(thisKeyArray)

for (var i = 0; i < KEYS.length; i++){
   setColors(i)
}

// for(var i = 0;i < thisGame.length; i++){
//    flash(i)
// }

let j = 0
let it = parseGame(thisGame)
form.addEventListener("submit", function(eo){
      eo.preventDefault() 
      for(var i = 0;i < it[j].length; i++){
         flash(i)
      }
      j++
      console.log(j)
   })







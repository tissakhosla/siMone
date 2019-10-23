let T = 300
let form = document.querySelector(".keyboard")
let thisGame = [0,0,1,1,2,2,3,3,0,0,1,2,4,3,3,2,1,2,1,4]
let KEYS = document.querySelectorAll(".key")
let COLORS = 
// {red yellow green aqua blue} x {dark, light}
            [["#B22102", "#F92E02"], 
            ["#AEA722", "#F5F902"],
            ["#37A501", "#57F908"],
            ["#048C88", "#01FCF4"],
            ["#011F90", "#0233F9"]]


//sets initial keys colors
function setColors(index){
   KEYS[index].style.backgroundColor = COLORS[index][0]
   return
}

function flash(index){
   setTimeout(function(){
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][1]

   }, T * (index));
   setTimeout(function(){
      KEYS[thisGame[index]].style.backgroundColor = COLORS[thisGame[index]][0]
   }, T * (index + .5));
}

function blink(eo){
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

for (var i = 0; i < KEYS.length; i++){
   setColors(i)
}

for (i = 0; i < KEYS.length; i++){
   KEYS[i].addEventListener("click", blink)
   }

for(var i = 0;i < thisGame.length; i++){
   flash(i)
}

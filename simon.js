let form = document.querySelector(".keyboard")
let cards = document.querySelectorAll(".card")
let t = 500

function parseGame(sequence){
   let parsedGame = []
   for (var s = 1; s <= sequence.length; s++){
      let steps = []
      parsedGame.push(steps.concat(sequence.slice(0,s)))
   }
   return parsedGame
}

// let simon = parseGame(game)
// console.log(simon)

function blink(index){
   setTimeout(function(){
      cards[game[index]].style.backgroundColor = "red"
   }, t * (index));
   setTimeout(function(){
      cards[game[index]].style.backgroundColor = ""
   }, t * (index + 1));
}

let game = [0,1,2,4,0,3,0]


for(var i = 0;i < game.length; i++){
   blink(i)
}
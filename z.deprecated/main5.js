//Functional w/ repeats ie game = [0,0,1,1,2,2,3,3]
let form = document.querySelector(".keyboard")
let cards = document.querySelectorAll(".key")
let t = 1000

function parseGame(sequence){
   let parsedGame = []
   for (var s = 1; s <= sequence.length; s++){
      let steps = []
      parsedGame.push(steps.concat(sequence.slice(0,s)))
   }
   return parsedGame
}

function blink(index){
   setTimeout(function(){
      cards[game[index]].style.backgroundColor = "red"
   }, t * (index));
   setTimeout(function(){
      cards[game[index]].style.backgroundColor = ""
   }, t * (index + 1));
}

let game = [0,0,1,1,0,3,0]
// let simon = parseGame(game)
// console.log(simon)

for(var i = 0;i < game.length; i++){
   blink(i)
}





// function flash(){
//    setTimeout(function() {
//       cards[game[0]].style.backgroundColor = "red"
//       setTimeout(function unflash(){
//          cards[game[0]].style.backgroundColor = ""
//       }, t)
//       setTimeout(flash, t + 500)
//    }, t)
// }

// 


// function blink(happy){
//    setTimeout(function(){
//       happy.style.backgroundColor = "red"
//    }, 100)
//    setTimeout(function(){
//       happy.style.backgroundColor = ""
//    }, 200);

// flash()

// let thisRound = simon[4]
// for(var j = 0; j < simon.length; j++){
//    let thisRound = simon[j]
//    console.log(simon[j])
//    for(var i = 0;i < thisRound.length; i++){
//       let k = i;
//       setTimeout(function(){
//          cards[thisRound[k]].style.backgroundColor = "red"
//          console.log(1)
//       }, t * (k + 1), i);
//       setTimeout(function(){
//          cards[thisRound[k]].style.backgroundColor = ""
//       }, t * (k + 2));
//    }``
// }


// for (var i = 0; i < cards.length; i++){
//    cards[i].addEventListener("click", function(){
//       console.log("clicked")
//    })
// }






// function add(sequence){
//    let steps = []
//    for (var s = 1; s <= sequence.length; s++){
//       let thisStep = steps.concat(sequence.slice(0,s))
//       console.log(thisStep)
//       }
//    }
// }


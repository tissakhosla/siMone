
let game = [0,1,2,4,0,3,0]
let cards = document.querySelectorAll(".card")
let t = 500
let form = document.querySelector(".keyboard")

console.log(game);
console.log(cards);


function parseGame(sequence){
   let eachPlay = []
   for (var s = 1; s <= sequence.length; s++){
      let steps = []
      eachPlay.push(steps.concat(sequence.slice(0,s)))
   }
   return eachPlay
}

console.log(parseGame(game))


for(var i = 0;i < game.length; i++){
   let k = i;
   setTimeout(function(){
      card[game[k]].style.backgroundColor = "red"
   }, t * (k + 1));
   setTimeout(function(){
      card[game[k]].style.backgroundColor = ""
   }, t * (k + 2));
}

// function blink(happy){
//    setTimeout(function(){
//       happy.style.backgroundColor = "red"
//    }, 100)
//    setTimeout(function(){
//       happy.style.backgroundColor = ""
//    }, 200);



// for (var i = 0; i < cards.length; i++){
//    cards[i].addEventListener("click", function(){
//       console.log("clicked")
//    })
// }




// game.forEach(
//    function (element){
//          card[element].style.backgroundColor = "red"
//          setTimeout(flash, t + 500)
//    }
// )   




// function flash(){
//    setTimeout(function() {
//       card[game[0]].style.backgroundColor = "red"
//       setTimeout(function unflash(){
//          card[game[0]].style.backgroundColor = ""
//       }, t)
//       setTimeout(flash, t + 500)
//    }, t)
// }

// flash()




// function add(sequence){
//    let steps = []
//    for (var s = 1; s <= sequence.length; s++){
//       let thisStep = steps.concat(sequence.slice(0,s))
//       console.log(thisStep)
//       }
//    }
// }


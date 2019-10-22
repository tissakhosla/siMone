


let game = [0,1,2,4,0,3,0]
let card = document.querySelectorAll(".card")
let t = 500
let form = document.querySelector(".keyboard")
let steps = []

// game.forEach

function flash(){
   card[game[0]].style.backgroundColor = "red"
   setTimeout(function unflash(){
      card[game[0]].style.backgroundColor = ""
   }, t)
   setTimeout(flash, t + 500)
}

setTimeout(flash(game), t)

// for(var i = 0;i < game.length; i++){
//    let k = i;
//    setTimeout(function(){
//       card[game[k]].style.backgroundColor = "red"
//    }, t * (k + 1));
//    setTimeout(function(){
//       card[game[k]].style.backgroundColor = ""
//    }, t * (k + 2));
// }

// for (var s = 1; s < game.length; s++){
//    let thisStep = steps
//    console.log(steps.concat(game.slice(0,s)))
// }
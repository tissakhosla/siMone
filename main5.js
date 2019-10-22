
setTimeout(function bar(){
   console.log("What?");
   setTimeout(bar, 500)
}, 500)


let game = [0,1,2,4,0,3,0]
let card = document.querySelectorAll(".card")
let t = 500
let form = document.querySelector(".keyboard")
let steps = []

setTimeout(function flash(){
   console.log("What?");
   card[game[0]].style.backgroundColor = "red"
   card[game[1]].style.backgroundColor = "red"
   card[game[2]].style.backgroundColor = "red"
   setTimeout(function unflash(){
   card[game[0]].style.backgroundColor = ""
   card[game[1]].style.backgroundColor = ""
   card[game[2]].style.backgroundColor = "" 
   setTimeout(flash, 500) 
   }, 500)
}, 500)

// for(var i = 0;i < game.length; i++){
//    let k = i;
//    setTimeout(function(){
//       card[game[k]].style.backgroundColor = "red"
//    }, t * (k + 1));
//    setTimeout(function(){
//       card[game[k]].style.backgroundColor = ""
//    }, t * (k + 2));
// }

// function recursion() {
//    console.log("*")
//    setTimeout(function(){
//       recursion()
//    }, 1000)
// }
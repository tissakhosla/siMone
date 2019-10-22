
let game = [0,2,4,2,0,3,0]
let card = document.querySelectorAll(".card")


setTimeout(function(){card[game[0]].style.backgroundColor = "red"}, 1000)

setTimeout(function(){card[game[0]].style.backgroundColor = ""}, 2000)
setTimeout(function(){card[game[1]].style.backgroundColor = "red"}, 2000)

setTimeout(function(){card[game[1]].style.backgroundColor = ""}, 3000)
setTimeout(function(){card[game[2]].style.backgroundColor = "red"}, 3000)

setTimeout(function(){card[game[2]].style.backgroundColor = ""}, 4000)
setTimeout(function(){card[game[3]].style.backgroundColor = "red"}, 4000)

setTimeout(function(){card[game[3]].style.backgroundColor = ""}, 5000)
setTimeout(function(){card[game[4]].style.backgroundColor = "red"}, 5000)

setTimeout(function(){card[game[4]].style.backgroundColor = ""}, 5000)
setTimeout(function(){card[game[5]].style.backgroundColor = "red"}, 5000)

// setTimeout(function(){setInterval(function(){
//    for (var i = 0; i < game.length; i++){
//       card[game[i]].style.backgroundColor = "red"
//      }
//    }, 300)
// }, 6000)

// setInterval(function(){
//    for (var i = 0; i < card.length; i++){
//       card[i].style.backgroundColor = "blue"
//    }
// }, )
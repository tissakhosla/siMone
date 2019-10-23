///FUNCTIONAL repeats!! = check the unflash, there has to be space!
let game = [0,0,4,2,0,0]
let KEYS = document.querySelectorAll(".key")
t = 500

setTimeout(function(){KEYS[game[0]].style.backgroundColor = "red"}, t)

setTimeout(function(){KEYS[game[0]].style.backgroundColor = ""}, t*2)
setTimeout(function(){KEYS[game[1]].style.backgroundColor = "red"}, t*2.5)

setTimeout(function(){KEYS[game[1]].style.backgroundColor = ""}, 3000)
setTimeout(function(){KEYS[game[2]].style.backgroundColor = "red"}, 3000)

setTimeout(function(){KEYS[game[2]].style.backgroundColor = ""}, 4000)
setTimeout(function(){KEYS[game[3]].style.backgroundColor = "red"}, 4000)

setTimeout(function(){KEYS[game[3]].style.backgroundColor = ""}, 5000)
setTimeout(function(){KEYS[game[4]].style.backgroundColor = "red"}, 5000)

setTimeout(function(){KEYS[game[4]].style.backgroundColor = ""}, 5000)
setTimeout(function(){KEYS[game[5]].style.backgroundColor = "red"}, 5000)

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
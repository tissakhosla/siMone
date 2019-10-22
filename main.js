


// class Game {
//     constructor(keyboards, songs)
// }

// class Keyboard {
//     constructor(divs)
// }

// class Song {
//     constructor(notes){
//         this.notes = notes
//     }
// }

// class Note {
//     constructor(sound, attack, release, div) {
//         this.sound = sound,
//         this.attack = attack,
//         this.release = release,
//         this.div = div
//     }
// }

// class Cycle {
//     constructor(notes, div){
//         // this.notes = notes// an array of note objects?
//         this.div = div//etc.
//     }
// }

// class Simple {
//     constructor(div, time){
//         this.div = []
//         this.time = time,
//         this.color = color
//     }
//     wait() {
    
//         setTimeout(function(){this.div.style.backgroundColor = this.color}, this.time)
//     }
// }

// let jsBach = new Simple(game, 500)












//    for (var i = 0; i < game.length; i++){
//       // console.log(i)
//       // console.log(typeof i)
//       // console.table(game[i])
//       board.addEventListener("submit", function(eo){
//          console.log(eo)
//       })


   
// }


// console.dir(card)




// for (i = 1; i < game.length + 1; i++){
//     console.log(i)
//     console.dir(buttons[game[i]].style.backgroundColor)
//     buttons[game[i]].style.backgroundColor = "red"
//     console.dir(buttons[game[i]].style.backgroundColor)
    // let thisDivsColor = buttons[game[i]].style.backgroundColor;
    // function changeIt(to){
    //     to = "red"
    //     return to
    // }
    // setTimeout(changeIt(thisDivsColor), i*1000)
// }




let game = [0,1,2,3,2,3,1,4]
let card = document.querySelectorAll(".card")


// setTimeout(function(){card[game[0]].style.backgroundColor = "red"}, 1000)

// setTimeout(function(){card[game[0]].style.backgroundColor = ""}, 2000)
// setTimeout(function(){card[game[1]].style.backgroundColor = "red"}, 2000)

// setTimeout(function(){card[game[1]].style.backgroundColor = ""}, 3000)
// setTimeout(function(){card[game[2]].style.backgroundColor = "red"}, 3000)

// setTimeout(function(){card[game[2]].style.backgroundColor = ""}, 4000)
// setTimeout(function(){card[game[3]].style.backgroundColor = "red"}, 4000)

// setTimeout(function(){card[game[3]].style.backgroundColor = ""}, 5000)
// setTimeout(function(){card[game[4]].style.backgroundColor = "red"}, 5000)

// setTimeout(function(){card[game[4]].style.backgroundColor = ""}, 5000)
// setTimeout(function(){card[game[5]].style.backgroundColor = "red"}, 5000)

// setTimeout(function(){card[game[5]].style.backgroundColor = ""}, 6000)
// setTimeout(function(){card[game[6]].style.backgroundColor = "red"}, 6000)

// setTimeout(function(){card[game[6]].style.backgroundColor = ""}, 7000)
// setTimeout(function(){card[game[7]].style.backgroundColor = "red"}, 7000)

setInterval(function(){
   for (var i = 0; i < game.length; i++){
      card[game[i]].style.backgroundColor = "red"
   }
}, 200)

setInterval(function(){
   for (var i = 0; i < card.length; i++){
      card[i].style.backgroundColor = "blue"
   }
}, 400)

    

console.log ("Wear Elive")
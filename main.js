


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





























let game = [0,1,2,3,2,3,1,4]
let buttons = document.querySelectorAll(".button")
console.dir(buttons)

setTimeout(function(){buttons[game[0]].style.backgroundColor = "red"}, 1000)

setTimeout(function(){buttons[game[0]].style.backgroundColor = ""}, 2000)
setTimeout(function(){buttons[game[1]].style.backgroundColor = "red"}, 2000)

setTimeout(function(){buttons[game[1]].style.backgroundColor = ""}, 3000)
setTimeout(function(){buttons[game[2]].style.backgroundColor = "red"}, 3000)

setTimeout(function(){buttons[game[2]].style.backgroundColor = ""}, 4000)
setTimeout(function(){buttons[game[3]].style.backgroundColor = "red"}, 4000)

setTimeout(function(){buttons[game[3]].style.backgroundColor = ""}, 5000)
setTimeout(function(){buttons[game[4]].style.backgroundColor = "red"}, 5000)

setTimeout(function(){buttons[game[4]].style.backgroundColor = ""}, 5000)
setTimeout(function(){buttons[game[5]].style.backgroundColor = "red"}, 5000)

setTimeout(function(){buttons[game[5]].style.backgroundColor = ""}, 6000)
setTimeout(function(){buttons[game[6]].style.backgroundColor = "red"}, 6000)

setTimeout(function(){buttons[game[6]].style.backgroundColor = ""}, 7000)
    

console.log ("Wear Elive")
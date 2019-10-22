
let game = [0,2,1,3,2,4,0]
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
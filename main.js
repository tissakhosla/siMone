
let game = [0,2,1,3,2,4,0]
let buttons = document.querySelectorAll(".button")
console.dir(buttons)

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

    
    setTimeout(function(){buttons[game[0]].style.backgroundColor = "red"}, 2000)
    
    setTimeout(function(){buttons[game[1]].style.backgroundColor = "red"}, 4000)
    
    setTimeout(function(){buttons[game[2]].style.backgroundColor = "red"}, 6000)
    
    setTimeout(function(){buttons[game[3]].style.backgroundColor = "red"}, 8000)


console.log ("Wear Elive")
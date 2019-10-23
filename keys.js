//a65 s83 d68 f70 g71
let keysArray = [65, 83, 68, 70, 71]

document.addEventListener("keydown", function(eo){
   console.log(eo)
   keyIndex = keysArray.indexOf(eo.keyCode, 0)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][1]
}, false)

document.addEventListener("keyup", function(eo){
   console.log(eo)
   keyIndex = keysArray.indexOf(eo.keyCode, 0)
   KEYS[keyIndex].style.backgroundColor = COLORS[keyIndex][0]
}, false)

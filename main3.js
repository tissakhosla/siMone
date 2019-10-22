let game = [0,1,2,4]
let card = document.querySelectorAll(".card")
let t = 500

   // setInterval(function() {card[game[0]].style.backgroundColor = "red"}, t*1)
   // setInterval(function(){card[game[0]].style.backgroundColor = ""}, t*2)
let sec = 0
setInterval(function(){
   sec++
   console.log(sec)
}, 1000)

setTimeout(function() {
   setInterval(function(){
      card[game[0]].style.backgroundColor = "red"
   }, t)
   setInterval(function(){
      card[game[0]].style.backgroundColor = ""
   }, t*2)

}, t*3)

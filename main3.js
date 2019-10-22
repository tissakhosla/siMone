let game = [0,1,2,4,0]
let card = document.querySelectorAll(".card")
let t = 500

   // setInterval(function() {card[game[0]].style.backgroundColor = "red"}, t*1)
   // setInterval(function(){card[game[0]].style.backgroundColor = ""}, t*2)

for(var i = 0;i < game.length; i++){
   let k = i;
   setTimeout(function(){
      card[game[k]].style.backgroundColor = "red"
   }, t * (k + 1));
   setTimeout(function(){
      card[game[k]].style.backgroundColor = ""
   }, t * (k + 2));

}


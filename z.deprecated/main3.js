let game = [0,1,2,4,0,3,0]
let card = document.querySelectorAll(".card")
let t = 500
let form = document.querySelector(".keyboard")
let steps = []

for (var s = 1; s < game.length; s++){
   let thisStep = steps
   console.log(steps.concat(game.slice(0,s)))


   for(var i = 0;i < steps.length; i++){
      let k = i;
      setTimeout(function(){
         card[steps[k]].style.backgroundColor = "red"
      }, t * (k + 1));
      setTimeout(function(){
         card[steps[k]].style.backgroundColor = ""
      }, t * (k + 2));
   }

}

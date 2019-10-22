
for(var i = 0;i < 5; i++){
   let k = i;
   setTimeout(function(){
       console.log('count ', k);
   }, 3000 * (k + 1));
}

for(var i = 0;i < 5; i++){
   let k = i;
   setTimeout(function(){
       console.log('count ', k);
   }, 3000 * (k + 1));
}

//from https://codehandbook.org/understanding-settimeout-inside-for-loop-in-javascript/
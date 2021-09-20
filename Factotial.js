/*
https://www.codewars.com/kata/57a049e253ba33ac5e000212
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial 
*/

function factorial(n){
  let mult =1;
 for (i=1; i <= n; i ++ ){
   mult = mult * i;
 }
return mult;
}



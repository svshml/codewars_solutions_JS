/*
https://www.codewars.com/kata/546e2562b03326a88e000020

In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/

function squareDigits(num){
  num = String(num);
  let newString='';
 for ( let i = 0; i < num.length; i++){
   newString+= Math.pow(num[i],2);
 }
  return Number(newString);  
}

/*
https://www.codewars.com/kata/5708f682c69b48047b000e07
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3)==15
multiply(10)==250
multiply(200)==25000
multiply(0)==0
multiply(-3)==-15
*/

function multiply(number){
 let strNumber = Math.abs(number)+ '';
  return number * 5** strNumber.length;
}

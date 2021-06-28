/*
https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/

function getSumOfDigits(integer) {
  let sum = 0;
  integer = String(integer);
  for(let i = 0; i < integer.length; i++) {
    sum+= 1*integer[i];
  }
  return sum;
}

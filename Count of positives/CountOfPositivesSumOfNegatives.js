/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
 let count =0;
 let sum = 0;
  let arr=[];
  if ( Array.isArray(input)=== false || input.length === 0) return [] ;
  for( i = 0; i <= input.length-1; i++){
   (input[i] > 0)? count++ : sum+= input[i];
 } 
  arr.push(count, sum);
  return arr;
  }

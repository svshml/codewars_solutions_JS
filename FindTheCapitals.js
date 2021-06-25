/*
https://www.codewars.com/kata/539ee3b6757843632d00026b

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
  let arr = [];
  let wordU = word.toUpperCase();
   for ( i = 0; i< word.length; i++){
   if (wordU[i] === word[i])
       arr.push(i);
 } 
  return arr;
}

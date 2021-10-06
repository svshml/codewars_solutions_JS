/*
https://www.codewars.com/kata/55a75e2d0803fea18f00009d
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). 
*/
function slope([a, b, c, d]){
  let y = d - b
  let x = c - a;
  return ( x === 0)? 'undefined': (''+ y / x);
}

/*
https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4
Task
Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

function leastLarger(a,i) {
  const arr = a.filter(el => el > a[i]);
  const min = Math.min(...arr);
  return (arr.length == undefined)? -1 : a.indexOf(min);
}

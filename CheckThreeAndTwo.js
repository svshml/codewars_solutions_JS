/*
https://www.codewars.com/kata/5a9e86705ee396d6be000091
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
function checkThreeAndTwo(array) {
  let a = array.filter(el => el =='a').length
  let b = array.filter(el => el =='b').length
  let c = array.filter(el => el =='c').length
 return (Math.max(a,b,c) == 3 && Math.min(a,b,c) == 0) 
}

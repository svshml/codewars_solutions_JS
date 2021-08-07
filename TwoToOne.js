/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


function longest(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
   let arr = arr1.concat(arr2);
 let a =arr.filter((el,i) => i === arr.indexOf(el)); 
 a = a.sort();
  return a.join('');
}


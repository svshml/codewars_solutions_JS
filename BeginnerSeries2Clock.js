/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s){
  return (s + m * 60 + h *3600) *1000;
}
console.log(0,1,1);

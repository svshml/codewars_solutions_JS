/*
https://www.codewars.com/kata/5aa39ba75084d7cf45000008
Given that
f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1
You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'
*/

function solve(n) {
  if (n == 0) return '0';
  if (n == 1) return '01';

  let prev = '0';
  let curr = '01';
  let next;
  
  for(let i=1; i < n; i++) {
    next = curr + prev;
    prev = curr;
    curr = next;    
  }
  return  next;
  
}

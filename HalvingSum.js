/*
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
  let sum = 0;
  let i = 0;
  do {sum = sum + Math.floor (n / 2** i);
  i++;
  } while (Math.floor (n / 2** i) >= 1);
return sum;    
}

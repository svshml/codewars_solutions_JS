/*
https://www.codewars.com/kata/58e230e5e24dde0996000070
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13
*/

function nextPrime(n){
  if (n === 0) {
    return 2;
  }
  n = n + 1;
   for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0){
      return nextPrime(n);
    }
  }
  return n;
}

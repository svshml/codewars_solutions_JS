/*
https://www.codewars.com/kata/580777ee2e14accd9f000165

Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
*/

function skiponacci(n) {    
  let fib = [1, 1];
    let num = 0;
    for (let i = 2; i < n; i++) {
        num = fib[i - 1] + fib[i - 2];
        fib.push(num)
    }
    let result = fib.filter((el, i) => i % 2 === 0);
 return n % 2 !== 0 ? result.join(' skip ') : result.join(' skip ') + ' skip';
}

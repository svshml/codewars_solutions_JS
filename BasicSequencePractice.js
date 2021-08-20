/*
https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: 
"the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. 
Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

function sumOfN(n) {
  let arr =[];
  let j = 0;
  if (n.length !== 0) arr.push(0);
for (i = 1; i <= Math.abs(n) ;i++){
 if ( n > 0) { arr.push(i+j); j= j +i;
               } 
  if ( n < 0 ) { arr.push( -1*(i+ j) ); j= j + i; 
              } 
}
return arr;
}


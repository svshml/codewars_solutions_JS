/*
https://www.codewars.com/kata/5effa412233ac3002a9e471d
*/

function add(num1, num2) {
  let res='';
  let n1 = ('' + num1);
  let n2 = ('' + num2);
  let mlen = Math.max(n1.length, n2.length);

  n1 = n1.padStart(mlen, '0');
  n2 = n2.padStart(mlen, '0');
 
  for ( i = 0; i<mlen ;i++) {
    res += (1*n1[i] + 1*n2[i]);    
  }  
  return Number(res);
}

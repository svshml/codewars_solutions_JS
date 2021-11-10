/*
https://www.codewars.com/kata/56eff1e64794404a720002d2
*/

function testit(s){
  const arr = s.toLowerCase().replace(/[^"word"]/g, '').split('');
  var ar=[];
  var cnt=0;
  for (i=0; i < arr.length; i++){
    if (ar.join('')=='' && arr[i] == 'w') ar.push('w');
    if (ar.join('')=='w' && arr[i] == 'o') ar.push('o');
    if (ar.join('')=='wo' && arr[i] == 'r') ar.push('r');
    if (ar.join('')=='wor' && arr[i] == 'd') {cnt++; ar =[];};
  }
 return cnt;
}



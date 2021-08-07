/*
https://www.codewars.com/kata/5731861d05d14d6f50000626
*/

function bigToSmall(arr){
let result=[];
for ( i=0;i<arr.length;i++){
result= result.concat(arr[i])
}
  result.sort((a, b) => a - b ); 
  result.reverse();
 return result.join('>');
}


/*
https://www.codewars.com/kata/5a91a7c5fd8c061367000002

*/

function minimumSteps(numbers, value){
  let arr = numbers.sort((a, b) => a-b);
  let sum = 0;
  for (i =0; i< arr.length; i++){
    sum += arr[i];
    if (sum >=value) break;
    
  }
  return i;
}

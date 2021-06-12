/*
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

*/


function removeConsecutiveDuplicates(s) {
 let arr= s.split(' ');
 let newArr = [];
 newArr.push(arr[0])
  for(i = 0; i < arr.length-1; i++){
    if (arr[i] !== arr[i+1]){
    newArr.push(arr[i+1]);
    }
  }
 return newArr.join(' ');
} 

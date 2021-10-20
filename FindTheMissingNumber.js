/*
https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d
You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. 
Write a function to find and return this number. What are the time and space complexities of your solution?
*/

function missingNo(nums) {
 nums = nums.sort((a,b)=> (a - b));
  for (let i =0; i < 100; i++){
   if ( nums [i] !== i ){
     missedNum = i;
     break;
   }
  }
 return missedNum;
}

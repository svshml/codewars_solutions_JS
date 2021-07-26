/*
https://www.codewars.com/kata/5a04133e32b8b998dc000089

An element in an array is dominant if it is greater than all elements to its right. 
You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
More examples in the test cases.

Good luck!
*/

function solve(arr){
let res = []; 
let flag;
  for (i=0; i< arr.length-1; i++){  
    flag = true;
    for (j=i+1; j< arr.length; j++){
       if (arr[i] <arr[j]) {flag = false;
    break;}
     } 
    if (flag === true && !res.includes(arr[i])) res.push(arr[i]);
  }
  if (!res.includes(arr[arr.length-1])) res.push(arr[arr.length-1])
    return res;
}

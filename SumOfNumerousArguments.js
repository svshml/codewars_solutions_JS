/*
https://www.codewars.com/kata/55c5b03f8c28da9a51000045
After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. 
If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 
*/

function findSum(...arr){
  if (arr.length == 0)
    return 0;
  else 
    return arr.filter(el=> el < 0).length > 0 ?  -1 : arr.reduce((el,sum)=> el+sum);
}

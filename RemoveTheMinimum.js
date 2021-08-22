/*
https://www.codewars.com/kata/563cf89eb4747c5fb100001b
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
 let min = numbers[0];
 let j=0;
for (i=0; i< numbers.length;i++) {
  if( min > numbers[i]) {min =numbers[i]; j=i;}
}
 
 return numbers.slice(0,j).concat(numbers.slice(j+1));; 
}

/*
https://www.codewars.com/kata/576b93db1129fcf2200001e6
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/

function sumArray(array) {
  if (Array.isArray(array) != true || array.length === 0 || array.length === 1) return 0;
  let min =Math.min(...array);
  let max =Math.max(...array);
  let sum =0;
  for( i =0; i< array.length; i++){
    sum+= array[i];
  }
 return sum-max - min;
}

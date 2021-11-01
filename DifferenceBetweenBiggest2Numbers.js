/*
https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9
You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.
*/

function diffBig2(arr) {
  let max = Math.max(...arr);
  if ( arr.indexOf(max) !== arr.lastIndexOf(max))
    return  0;
  else
    
   arr = arr.filter(el=> el != max);
   let max1 = Math.max(...arr);
 
  return max - max1  ;
}

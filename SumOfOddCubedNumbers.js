/*
https://www.codewars.com/kata/580dda86c40fa6c45f00028a

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL 
if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  let sum = 0;
for(i=0; i <arr.length;i++){
  if (typeof(arr[i]) === 'number') {
   if (arr[i]**3 % 2 !== 0) sum+= arr[i]**3;
    }
  else {sum = undefined;
  break;}
}
return (arr.length === 0)? undefined : sum;
}


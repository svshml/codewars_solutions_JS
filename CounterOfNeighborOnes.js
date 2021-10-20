/*
https://www.codewars.com/kata/56ec1e8492446a415e000b63
Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

function onesCounter(input) {
 return input.join('').split('0').map(el => el.length).filter(el => el > 0); 
}



function onesCounter(input) {
  let sum =0;
  let arr =[];
for (let i=0; i < input.length ;i++){
 if (input[i] == 1 && input[i+1]== 1)
   sum+= 1;
  else if (input[i] == 1 && input[i+1]== 0 || input[i] == 1 && i == input.length -1 ){
    sum+= 1;
    arr.push(sum);
    sum = 0;
  }
  }
  return arr;
}

/*
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
*/

function minSum(arr) {
  arr.sort( (a,b)=> b-a)
  let result= 0;
  let L =arr.length
  for(i=0; i <L/2;i++){
    result+= arr[0]* arr[arr.length-1];
    arr.pop();
    arr.shift();
  }
  return result;
}

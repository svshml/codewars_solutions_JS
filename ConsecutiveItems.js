/*
https://www.codewars.com/kata/5f6d533e1475f30001e47514
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, 
and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

function consecutive(arr, a, b) {
  let res;
  for (i=0; i< arr.length; i++) {
    if (arr[i] === a) {       
      if (arr[i+1] === b || arr[i-1] === b) {
        res = true; break;
      }
      else {res = false; break;}
    }    
  }  
  return res;
}

/*
https://www.codewars.com/kata/570597e258b58f6edc00230d

This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. 
Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. 
If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
*/

function array(arr){
  let arrReal = arr.split(',');
  arrReal.pop();
  arrReal.shift();
  return (arrReal.length <1)? null : arrReal.join(' ');
}

/*
https://www.codewars.com/kata/5a87449ab1710171300000fd
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
*/

function tidyNumber(n){
  const arr=n.toString().split('');
  for (i=0; i<arr.length-1; i++)
  {
  if (arr[i] <= arr[i+1]) {continue}
  else { return false}; 
  }
  return true;
}

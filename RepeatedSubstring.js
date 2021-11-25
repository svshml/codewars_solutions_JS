/*
https://www.codewars.com/kata/5491689aff74b9b292000334
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. 
The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde";
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
*/

function f(s) {
 let repeat;
 let count = 1; 
  for(let i = 1; i <= s.length; i++){
    if ( s.length % i == 0 && s.slice(0, s.length / i).repeat(i) == s){
      repeat = s.slice(0, s.length / i);
      count = i;
      }
   } 
 return [repeat, count];
}

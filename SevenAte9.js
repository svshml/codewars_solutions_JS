/*
https://www.codewars.com/kata/559f44187fa851efad000087
Write a function that removes every lone 9 that is inbetween 7s.

sevenAte9('79712312') => '7712312'
sevenAte9('79797') => '777'
Input: String Output: String
*/
function sevenAte9(str){
let str1 = str[0];
 for(let i=1; i < str.length-1;i++){
  if (str[i-1] ==7 && str[i+1] ==7 && str[i] ==9)
    continue;
   else str1 += str[i];
 
 } 
return str1 + str.slice(-1);
}

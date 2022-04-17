/*
https://www.codewars.com/kata/55de6173a8fbe814ee000061
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

*/
function unusedDigits() {
  let str='';
  for(i = 0; i < arguments.length; i++){    
    str+= arguments[i];
  }
    
  let res='';
  for (i = 0; i < 10; i++){ 
    if (!str.includes(i) ) 
      res+= i;
  }  
  
  return res ;
}

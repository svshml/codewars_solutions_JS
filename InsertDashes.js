/*
https://www.codewars.com/kata/55960bbb182094bc4800007b/javascript
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  let str = String(num);
  let newStr = "";
   for(let i=0; i < str.length - 1; i++){
     if (str[i] % 2 != 0 && str[i+1] % 2 != 0) 
       newStr += str[i] + "-";
     else 
       newStr += str[i];
    }
  return newStr + str[str.length-1];
}

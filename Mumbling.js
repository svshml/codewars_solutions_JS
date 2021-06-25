/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let str = s[0].toUpperCase();
 for(i =1;i < s.length;i++){
   if (i === 1) str+= '-';
   str+= s[i].toUpperCase();
   for(j=1; j <= i; j++){
     str+= s[i].toLowerCase();
   }
 if (i !== s.length-1)  str+= '-';
 } 
  return str.slice();
}

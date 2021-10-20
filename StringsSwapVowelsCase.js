/*
https://www.codewars.com/kata/5803c0c6ab6c20a06f000026

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.
*/

function swapVowelCase(str) {
const vowels = ['a','e','o','u','i', 'A','E','O','U','I'];
let vflag = false;
const arr =[];
  for (let i =0; i < str.length; i++){ 
   vflag = false;
   for (let j =0; j < vowels.length; j++){       
    if (str[i] == vowels[j] && j <=4){
      arr.push(str[i].toUpperCase());
      vflag = true;
      break;
    }
    else if (str[i] == vowels[j] && j >4){
      arr.push(str[i].toLowerCase());
      vflag = true;
      break;
    }
   }
    if (!vflag) arr.push(str[i]); 
  }
    
  return arr.join('');
  }

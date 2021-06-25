/*
https://www.codewars.com/kata/5590961e6620c0825000008f

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS

Examples
""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"
*/

function swap(str){
let strNew='';
for (let i =0; i< str.length; i++){
 if (str[i].toUpperCase() === str[i])
    strNew+= str[i].toLowerCase();
 else if (str[i].toLowerCase() === str[i]) 
   strNew+= str[i].toUpperCase();
  else strNew+= str[i];
}
  return strNew;
}

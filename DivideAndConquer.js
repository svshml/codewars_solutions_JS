/*
https://www.codewars.com/kata/57eaec5608fed543d6000021

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
*/
function divCon(x){
  let sumStr =0;
  let sumNum = 0;
  for ( i = 0; i <x.length; i++){
   if ( typeof(x[i]) === 'number') sumNum+= x[i];
   if ( typeof(x[i]) === 'string') sumStr+= 1*x[i]; 
  }
  return sumNum - sumStr;
}

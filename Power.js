/*
https://www.codewars.com/kata/562926c855ca9fdc4800005b
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.

FUNDAMENTALSNUMBERS
*/
function numberToPower(number, power){
  let i = 0;
  let multi = 1;
 do {if (power === 0) multi = 1;
     else multi = multi *number;
     i++;} while (i < power);
      return multi;
}

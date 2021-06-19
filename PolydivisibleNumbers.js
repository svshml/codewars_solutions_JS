/*
https://www.codewars.com/kata/5e4217e476126b000170489b

A polydivisible number is divisible in an unusual way. The first digit is cleanly divisible by 1, the first two digits are cleanly divisible by 2, 
the first three by 3, and so on.

Examples
Let's take the number 1232 as an example.

1     / 1 = 1     // Works
12    / 2 = 6     // Works
123   / 3 = 41    // Works
1232  / 4 = 308   // Works
1232 is a polydivisible number.

However, let's take the number 123220 and see what happens.

 1      /1 = 1    // Works
 12     /2 = 6    // Works
 123    /3 = 41   // Works
 1232   /4 = 308  // Works
 12322  /5 = 2464.4         // Doesn't work
 123220 /6 = 220536.333...  // Doesn't work
123220 is not polydivisible.

Your job: check if a number is polydivisible or not.
Return true if it is, and false if it isn't.
*/


function polydivisible(x) {
  let L = String(x);
  let result = true;
  for(i = 1; i <= L.length; i++){
   if (L.substring(0, i)*1 % i  !== 0) {
     result = false;
     break;
     }
    }
  return result;    
}

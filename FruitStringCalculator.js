/*
https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3

Given a string of words and numbers. Extract the expression including:

the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.

Example:

"Panda has 48 apples and loses 4" returns 44

"Jerry has 34 apples and gains 6" returns 40

"loses" and "gains" are the only two words describing operators.

Should be a nice little kata for you :)

Note: No fruit debts nor bitten apples = The numbers are integers and no negatives
*/

function calculate(string) {
let arr = string.split(' ');
return  arr.includes( 'loses')?  arr[2] - arr[6] : 1*arr[2] + 1*arr[6];  
}

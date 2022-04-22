/*
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s){
 let arr = s.split('');
 let lowerLetter = s.replace(/[^a-z]+/g, '').length;
 let upperLetter = s.replace(/[^A-Z]+/g, '').length;
 let number =  s.replace(/[^0-9]/g, '').length;
 return [upperLetter, lowerLetter, number, arr.length - upperLetter - lowerLetter - number];
}

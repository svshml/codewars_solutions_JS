/*
codewars.com/kata/57a1fd2ce298a731b20006a4
Write function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
 return x.toLowerCase().split('').reverse().join('') === x.toLowerCase() ;
}

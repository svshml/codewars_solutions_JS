/*
https://www.codewars.com/kata/57293671c98f77e84b000065

Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/
function type(value) {
  let newValue = String({}.toString.call(value)).toLowerCase();
  return newValue.substring(8, newValue.length-1);
}

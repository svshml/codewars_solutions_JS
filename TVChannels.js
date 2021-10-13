/*
https://www.codewars.com/kata/5836dce6966f8d1d43000007
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). 
Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) 
is assigned to a whole number (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/

function redarr(arr) {
arr.sort();
let uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
});
let obj = {
  "0": uniqueArray[0],
}
uniqueArray.forEach((e, i) => obj[i] = e);
return obj;
}

/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){ 
 const arr = s.split(' ');
 let min = arr[0].length
  for (let i=1; i < arr.length; i++){
    if (min > arr[i].length)
    min = arr[i].length;
  }
return min;
}

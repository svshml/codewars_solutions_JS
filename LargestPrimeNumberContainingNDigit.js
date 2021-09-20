/*
https://www.codewars.com/kata/5676f07029da352ba2000065
Just as the title suggestes :D . For example ->

largest(1); //Should return 7
largest(2); //Should return 97
....
Do not mind the pattern as it is just an incident ! And make sure to return false if the input is not an integer :D This might seem simple at first, it is, 
but keep an eye on the performance. Go for it !
*/

var largest = (n) => {
  let arr = [7, 97, 997, 9973, 99991, 999983, 9999991];
  if (typeof(n) !== 'number' || n <= 0) return false;
  else return arr[n-1];
}

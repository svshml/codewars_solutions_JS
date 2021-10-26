/*
https://www.codewars.com/kata/5a662a02e626c54e87000123
*/

function extraPerfect(n){
 return [...Array(n+1).keys()].filter (el => el % 2 !==0);
}

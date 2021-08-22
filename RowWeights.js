/*
https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

*/

function rowWeights(array){
  let team1= 0;
  let team2 =0;
  let arr =[];
 for (i=0; i< array.length;i++){
  (i% 2 === 0)? team1+= array[i] : team2+= array[i];
 }
  arr.push(team1, team2);
  return arr;
}

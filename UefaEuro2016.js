/*
https://www.codewars.com/kata/57613fb1033d766171000d60

Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

function uefaEuro2016(teams, scores){
  let a = `At match ${teams[0]} - ${teams[1]}, `;
  let b;
  (scores[0] > scores[1])?  b = `${teams[0]} won!`  : null; 
  (scores[0] < scores[1])?  b = `${teams[1]} won!`  : null; 
  (scores[0] == scores[1])? b = `teams played draw.`: null; 
  return a + b;
}

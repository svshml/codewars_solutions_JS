/*
https://www.codewars.com/kata/595519279be6c575b5000016
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
*/

function battle(x, y) {
  const alphabet = [0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  console.log(alphabet.indexOf(x[1]))
  let valueX =  x.split('').reduce((sum, el) => alphabet.indexOf(el) + sum, 0); 
  let valueY =  y.split('').reduce((sum, el) => alphabet.indexOf(el) + sum, 0);
  console.log (valueX ,valueY)
   if   (valueX > valueY) 
     return x;
  else if (valueX < valueY) 
     return y;
  else
     return "Tie!"; 
}

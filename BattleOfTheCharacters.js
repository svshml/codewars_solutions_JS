/*
https://www.codewars.com/kata/595e9f258b763bc2d2000032

Groups of characters decided to make a battle. Help them to figure out what group is more powerful. 
Create a function that will accept 2 variables and return the one who's stronger.

Rules
Each character has its own power:
  A = 1, B = 2, ... Y = 25, Z = 26
  a = 0.5, b = 1, ... y = 12.5, z = 13
Only alphabetical characters can and will participate in a battle.
Only two groups to a fight.
Group whose total power (a + B + c + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples
"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"
*/

function battle(x, y) {
  const althabet1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const althabet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let sumX = 0;
  let sumY = 0;
  
  for(let i=0; i< x.length; i++){
    if (althabet1.indexOf(x[i])>= 0 )
      sumX+= althabet1.indexOf(x[i]) + 1;
    else 
      sumX+= (althabet2.indexOf(x[i]) + 1) / 2;
  }
  
  for(let i=0; i< y.length; i++){
    if(althabet1.indexOf(y[i])>= 0)
      sumY+= althabet1.indexOf(y[i]) + 1;
    else 
      sumY+= (althabet2.indexOf(y[i]) + 1) / 2;
  }
  
 return (sumX > sumY)? x : (sumY > sumX)?  y : "Tie!";
}

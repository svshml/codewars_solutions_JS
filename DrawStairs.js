/*
https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

function drawStairs(n) {
  let stair='';
  for (i=0; i < n; i++) {
    if (i != 0) stair += '\n';
    for (k=0; k<i; k++) {
      stair+=' '
    }     
    stair+='I';   
  }    
  return stair;
}

/*
https://www.codewars.com/kata/57d448c6ba30875437000138

Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any 
possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. 
There will always be valid arguments.
*/

function roots(a,b,c){
  let x = ( b + Math.sqrt(b*b - 4*a*c)) / 2*a;
  let x2 = ( b - Math.sqrt(b*b - 4*a*c)) / 2*a;
  if (isNaN(x+x2)) return null
  return +(-b/a).toFixed(2);
}

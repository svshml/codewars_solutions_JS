/*
https://www.codewars.com/kata/57f759bb664021a30300007d
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
let newX ='';
for (let i =0; i< x.length;i++){
  if (x[i] == 'a')
    newX+= 'b'
  else if (x[i] == 'b')
    newX+= 'a'
  else 
    newX+= 'c';
}
  return newX;
}

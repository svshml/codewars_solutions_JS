/*
https://www.codewars.com/kata/5808c8eff0ed4210de000008
To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'
*/
function part(x){
 const names= ['Partridge','PearTree','Chat', 'Dan', 'Toblerone', 'Lynn','AlphaPapa','Nomad'];
  let result ='';
 for(let i=0; i<x.length; i++){
   for(let j=0; j<names.length; j++){
     if (x[i] == names[j]){
         result +='!';
         break;
         }
   }
 }
  return (result)?
  'Mine\'s a Pint'+result : 'Lynn, I\'ve pierced my foot on a spike!!';
}

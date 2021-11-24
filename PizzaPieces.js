/*
https://www.codewars.com/kata/5551dc71101b2cf599000023
In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day she ordered one for dinner, and then some Italian friends appeared at her room. 
The problem is that there were many people who ask for a piece of pizza at that moment, and she had a knife that only cuts straight.

Given the number of pizza cuts, find the maximum amount of pieces of pizza that you can get (not necessarily of equal size). 
If the number of cuts is negative, return -1 instead (or Nothing in Haskell).
*/

function maxPizza(cuts) {
  if (cuts < 0){
     return -1;
        }
  else if (cuts == 0){
      return 1;
        }
  else if (cuts == 1){
      return 2;
       } 
  else if (cuts == 2){
      return 3;
        }
    else
      return  7 + ((cuts + 4) *(cuts - 3))/2;     
  
}

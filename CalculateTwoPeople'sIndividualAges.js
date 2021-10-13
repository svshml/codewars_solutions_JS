/*
https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
Create a function that takes in the sum and age difference of two people, calculates their individual ages, 
and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum,difference){
  let age1 = (sum + difference) /2;
  let age2 = (sum - difference)/2;
  if (sum < 0 || difference < 0 || age1 < 0 || age2 < 0)
    return null;
  else 
    return [age1, age2]; 
    
};

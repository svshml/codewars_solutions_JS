/*
https://www.codewars.com/kata/57a429e253ba3381850000fb
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bMindex = weight / height** 2;
  if ( bMindex <= 18.5) return "Underweight";
  else if (bMindex<= 25) return "Normal";
  else if (bMindex <= 30) return "Overweight";
  else return "Obese";
}

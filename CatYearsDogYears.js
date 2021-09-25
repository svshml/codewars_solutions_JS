/*
https://www.codewars.com/kata/5a6d3bd238f80014a2000187
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var ownedCatAndDog = function(catYears, dogYears) {
 let catRealYears;
  if (catYears - 15 < 0) catRealYears = 0;
  else if (catYears - 15 >= 0 && catYears - 15 < 9 ) catRealYears = 1;
  else if (catYears - 24 >= 0 && catYears - 27 <= 0) catRealYears = 2;
  else catRealYears = ((catYears - 15 - 9)/ 4) + 2;
  
  let dogRealYears;
  if (dogYears - 15 < 0) dogRealYears = 0;
  else if (dogYears - 15 >= 0 && dogYears - 15 < 9  ) dogRealYears = 1;
  else if (dogYears - 24 === 0 && dogYears -28 <= 0) dogRealYears = 2;
  else dogRealYears = ((dogYears - 15 - 9)/ 5) + 2;
  
  return [ Math.trunc(catRealYears), Math.trunc(dogRealYears)];
}

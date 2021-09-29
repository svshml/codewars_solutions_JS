/*
https://www.codewars.com/kata/57b58827d2a31c57720012e8

In this kata you will have to write a function that takes litres and pricePerLitre as arguments. 
Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, 
and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. 
Return the toal cost rounded to 2 decimal places.
Also you can guess that there will not be negative or non-numeric inputs.
*/

function fuelPrice(litres, pricePerLitre) {
  let price;
  if( litres < 2) price = litres * pricePerLitre;
  else if (litres < 4) price = litres * (pricePerLitre -0.05);
  else if (litres < 6) price = litres * (pricePerLitre -0.1);
  else if (litres < 8) price = litres * (pricePerLitre -0.15);
  else if (litres < 10) price = litres * (pricePerLitre -.2);
  else  price = litres * (pricePerLitre -0.25);
  return 1*price.toFixed(2);  
}

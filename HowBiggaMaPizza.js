/*
https://www.codewars.com/kata/5e9c06f95ea5b30033903194
Task
Welcome to ma pizza shop!

I hava the bigga spherical blob of dough.

And I wanna squisha ma dough to a circle to maka ma famous pizza base!

You just choosa the "crispy" crust or the "thick" crust.

So, how bigga ma pizza gonna be?

Input
blob = my dough blob diameter

crust = "crispy" or "thick"

Output
Pizza radius
Notes
All data is valid

Blob diameter is >= 0

Input/Output units are same

The "crispy" crust pizzas are 1 unit deep

The "thick" crust pizzas are 5 units deep

Near enough is good enough. If your answer is correct withn 0.001 then the test should pass.
*/

function howBiggaMaPizza(blob, crust) {
  return (4/3*(blob/2)**3 / ((`${crust}` === "crispy")? 1 : 5))**0.5 ;
}

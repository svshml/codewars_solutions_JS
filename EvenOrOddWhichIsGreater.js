/*
https://www.codewars.com/kata/57f7b8271e3d9283300000b4
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. 
Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let arrEven = str.split('').filter(el => el % 2 == 0).map(el => Number(el)).reduce((sum, el) => sum + el);
  
  let arrOdd = str.split('').filter(el => el % 2 != 0).map(el => Number(el)).reduce((sum, el) => sum + el);
  
  
  return  (arrEven > arrOdd)? "Even is greater than Odd" : 
  (arrEven == arrOdd)? "Even and Odd are the same" : "Odd is greater than Even" ;
}

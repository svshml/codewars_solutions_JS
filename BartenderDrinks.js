/*
https://www.codewars.com/kata/568dc014440f03b13900001d

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"         	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"      	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	      "Your tax dollars"
"Rapper"	          "Cristal"
anything else     	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/


function getDrinkByProfession(param){
let arr = [["jabroni", "Patron Tequila"], ["school counselor", "Anything with Alcohol"], 
           ["programmer", "Hipster Craft Beer"],["bike gang member","Moonshine"],
           ["politician","Your tax dollars"], ["rapper","Cristal"]];
  let result = "Beer";
for (let i =0; i < arr.length;i++){
  if (arr[i][0] === param.toLowerCase()) result = arr[i][1];
 }
  return result;
}

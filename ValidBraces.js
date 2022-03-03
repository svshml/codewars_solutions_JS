/*
https://www.codewars.com/kata/5277c8a221e209d3f6000b56

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(braces){
  const arr1 = "[({";
  const arr2 = "])}";
  let temp = [];
  let a;
  let b;
   if (braces.length <2) 
    return false;
  for(let i = 0; i < braces.length; i++){
    a = arr1.indexOf(braces[i]);
    b = arr2.indexOf(braces[i]);
    if (a >= 0) 
      temp.push(braces[i]);
    else if (b >= 0) {      
      if (arr1.indexOf(temp[temp.length-1]) == b) 
        temp.pop();  
      else 
        return false;
    }
  }
  return (temp.length == 0)? true : false;
}

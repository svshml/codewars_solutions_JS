/*
https://www.codewars.com/kata/577e9095d648a15b800000d4
Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). 
You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. 
You need to evaluate the expression.

For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, 
hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. 
Assume that expression is always valid and division is always an integer division.
*/

function postfixEvaluator(string) {
 const mathOps = ["+","-","*","/"];
 const arr  = string.split(' ');
 var temp = [];
 var a;
 var b;
  for (i =0; i < arr.length; i++){
   if (mathOps.indexOf( arr[i])<0 ) temp.push(arr[i])
   else {
     b= 1*ar.pop();
     a= 1*ar.pop();
     if (arr[i]=='+') temp.push(a + b); 
     if (arr[i]=='-') temp.push(a - b); 
     if (arr[i]=='*') temp.push(a * b);  
     if (arr[i]=='/') temp.push(Math.round(a / b)); 
   }   
 } 
 return temp[0];
}


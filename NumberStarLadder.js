/*
https://www.codewars.com/kata/5631213916d70a0979000066

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3

*/

function pattern(n){
  let str='1';
  let a='';
for (i=1; i < n; i++){
  a+= '*' ;
 str+= '\n1'+ a+ (i+1); 
}
 return str;
}

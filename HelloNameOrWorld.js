/*
https://www.codewars.com/kata/57e3f79c9cb119374600046b

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ""       => "Hello, World!" # name is an empty String
*/

function hello(name) {
  let result;
 if ( name === undefined || name.length === 0 ) result = 'Hello, World!';
  else {
 let nameN =name[0].toUpperCase();
 for( let i =1; i <name.length; i++){
 nameN+= name[i].toLowerCase();  
 } 
result = 'Hello, '+  `${nameN}!`;
  }
  return result;
}

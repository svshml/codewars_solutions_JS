/*
https://www.codewars.com/kata/590f5b4a7bbb3e246000007d
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.


*/
function comes_after(str,l) {
let result = '';
  for (let i=0; i < str.length-1; i++){
   if (str[i].toLowerCase() == l.toLowerCase() && str[i+1].match(/^[a-z]+$/i))
    result = result + str[i+1];    
 }
  return result;
}

function comes_after(str,l) {
  return str.split('').filter((el, i, arr)=> i>0 && arr[i-1].toLowerCase() == l.toLowerCase() && el.match(/^[a-z]+$/i)).join('')
}

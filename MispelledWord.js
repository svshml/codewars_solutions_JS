/*
https://www.codewars.com/kata/5892595f190ca40ad0000095
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
It checks if the word2 differs from word1 by only one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ only by one character.
*/
var mispelled = function(word1, word2){
  let count = 0;
  let maxL = Math.max(word1.length, word2.length);
  
   if ( word1.includes(word2)=== true || word2.includes(word1) === true){
      count = Math.abs(word1.length - word2.length);
  }
  else {
    for( let i=0; i < maxL; i++){
    if ( word1[i] !== word2[i])
      count++; 
      }
  }
return count <= 1;
}

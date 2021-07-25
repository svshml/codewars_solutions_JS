/*
https://www.codewars.com/kata/56786a687e9a88d1cf00005d

You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. 
You will return true if it is valid, or false if it is not.

For example:

"abcabc" is a valid word because 'a' appears twice, 'b' appears twice, and'c' appears twice.
"abcabcd" is NOT a valid word because 'a' appears twice, 'b' appears twice, 'c' appears twice, but 'd' only appears once!
"123abc!" is a valid word because all of the characters only appear once in the word.

For this kata, capitals are considered the same as lowercase letters. Therefore: 'A' == 'a' .

#Input A string (no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < string < 100.

#Output true if the word is a valid word, or false if the word is not valid.
*/

function validateWord(s){
  let ss = s.replace(/\d+/g, '').toLowerCase();
  let cnt; 
  let etaloncnt;
  let lastindex;
  for (i=0; i<ss.length; i++){
    cnt = 0;
    lastindex = -1;
    for (j=0; j <ss.length; j++){
      if ((lastindex = ss.indexOf(ss[i], lastindex + 1)) !== -1) cnt++;
      else break;
    }    
    if (i===0) etaloncnt = cnt;
    else if(cnt !=etaloncnt) return false;
  }
  return true;
}


/*
https://www.codewars.com/kata/55d410c492e6ed767000004f

Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
*/

function vowel2index(str) {
  let arr = ['a','e','u','i','o'];
  let newStr= [];
  let str1 = str.split('');
  console.log(str);
  for (let i =0; i<str1.length;i++){
    
    (arr.includes(str1[i].toLowerCase()))? 
            newStr.push(i+1) :
    newStr.push(str[i]);
  }
 return newStr.join('');
}

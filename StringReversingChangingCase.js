/*
https://www.codewars.com/kata/58305403aeb69a460b00019a
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
*/
function reverseAndMirror(s1,s2) {
  let s1New = s1.split('').reverse().join('') + s1;
  let s2New = s2.split('').reverse().join('') ;
  let s3 = s2New + '@@@' + s1New ;
  let s3New =[];
  
  for (let i = 0;i < s3.length; i++){
    if ( s3[i].toUpperCase() === s3[i] ){
      s3New.push(s3[i].toLowerCase());
    }
      else {
        s3New.push(s3[i].toUpperCase());
      }
    }
  return s3New.join('');
}

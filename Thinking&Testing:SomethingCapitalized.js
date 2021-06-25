/*
https://www.codewars.com/kata/56d93f249c844788bc000002
*/

function testit(s){
  let str = '';
  for (i=0; i< s.length-1; i++){
    if (s[i+1] ===' ') str+= s[i].toUpperCase();
    else  str+= s[i];
  }
  if (s.length >0) str+= s[s.length-1].toUpperCase();
  return str;
}

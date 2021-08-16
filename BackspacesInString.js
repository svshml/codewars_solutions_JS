/*
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/
function cleanString(s) {
  let res = '';
  let curr = '';
  
  for (i=0; i< s.length; i++){
    curr = s.slice(i, i+1);
    if (curr !='#') res = res + curr;
    if (curr ==='#' && res.length>0) res = res.slice(0,-1);
  }
  return res;
}


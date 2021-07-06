/*
https://www.codewars.com/kata/54592a5052756d5c5d0009c3
*/

function head(arr){
 return arr.filter((el,i) => i ===0).join()*1;
}

function tail(arr){
 return arr.filter((el,i) => i !==0);
}
function init(arr){
 return arr.filter((el,i) => i !== arr.length-1);
}

function last(arr){
 return arr.filter((el,i) => i == arr.length-1).join()*1;
}


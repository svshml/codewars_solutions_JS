/*
https://www.codewars.com/kata/57216d4bcdd71175d6000560
*/
function padIt(str,n){
  let result = str;
  let i = 1;
do { if ( i%2 !== 0) result = '*' + result ;
    else result = result + '*';
   i++;
   } while (i <= n);
  
  return result;
}


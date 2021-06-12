//https://www.codewars.com/kata/5768a693a3205e1cc100071f

/* Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/



function initializeNames(name){
  let arr = name.split(' ');
  let newArr=[];
   for ( i = 0; i < arr.length; i++){
     if (i > 0 & i < arr.length-1) { newArr.push(arr[i][0].toUpperCase() +'.') ;
     } else if (arr[i].length > 1){
     newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length));
       }
   }
  return newArr.join(' ');
}

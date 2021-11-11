/*
https://www.codewars.com/kata/5650ab06d11d675371000003

The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

var splitInParts = function(s, partLength){
 return s.split('').map((el,i,arr)=>( (i+1) % partLength == 0 )? arr[i]+=' ': arr[i] = arr[i]).join('').trim();
}

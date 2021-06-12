/*
https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript

Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

*/

function hydrate(s) {
let arr = s.replace(/[a-z, \s]/g,'').split('');
let sum =0;
for(i = 0; i <arr.length; i++){
 sum+= Number(arr[i]); 
}
 return (sum === 1)? sum + " glass of water" : sum + " glasses of water"
} 

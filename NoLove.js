/*
https://www.codewars.com/kata/58be5aff9fb673ada300004c
That naughty cat of yours has been scrambling all over your keyboard. Funnily enough, it somehow managed to type some numbers in. 
In your rush to push it away, you noticed that you had 69s all over your arrays! Remember, if there are certain numbers in a string, 
they should remain in the array Quick, filter them out before the big boss man finds out.
*/

var noLove = function (arr) {
 return arr.filter(el => el !== 69);
}


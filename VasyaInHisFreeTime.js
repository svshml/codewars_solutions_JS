/*
https://www.codewars.com/kata/556eed2836b302917b0000a3

Vasya isn't really good at math. However, he wants to get a good mark for the class. So he made a deal with his teacher. 
"I wil study very hard and will be able to solve any given problem!" - Vasya said.

Finally, today is the time to show what Vasya achieved. He solved the given task immediately. Can you?

Task:
You are given a system of equations:

a2+b=na+b2=m a^2 + b = n \\ a + b^2=ma 
2
 +b=n
a+b 
2
 =m
In JS, C# and Java the parameters of the system: 1 ≤ n, m ≤ 1000

You should count, how many there are pairs of integers (a, b) (0 ≤ a, b) which satisfy the system.

*/

function CalculateString( n,  nums)
{
 let one = n - nums.replace(/0/g,'').length;
  let zero = n - one;
  return Math.abs(one - zero);
}

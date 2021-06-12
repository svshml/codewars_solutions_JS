/*
https://www.codewars.com/kata/5857e8bb9948644aa1000246
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. 
Each duration is a present Santa has to distribute. Determine whether he can do it in 24 hours or not.
*/


function determineTime(durations){
  let hours=0;
  let min=0;
  let sec=0;
  durations.map(el=> el.split(':').map((el,i)=>i===0?hours+= el*1:i===1?min+= el*1:sec+=el*1))
  min+=sec/60;
  hours+=min/60;
  return (hours <= 24);
  }

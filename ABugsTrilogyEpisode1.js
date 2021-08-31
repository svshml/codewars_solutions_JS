/*
https://www.codewars.com/kata/562e98755e9214cd2500003d
Our friend Pac has finally decided to pursue a career in the coding industry.
He is a newbie, he needs to learn properly.
Therefore, Pac wants to apply for the worldwide famous -and very demanding-
'C0d3r 1ns1d3' Academy for beginners.
In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
He has been sent an email from the Academy with the following instructions,

Dear Pac,  
This is the first exercise. Find out what's wrong and fix the code.  
You have 15 minutes to send a solution.  
Good Luck.
*/

function yourFutureCareer(){ 
  let career = Math.random();
    if (career < 0.33) 
      return  'FrontEnd Developer';
     else if (career < 0.66) 
      return 'BackEnd Developer';
     else 
      return 'Full-Stack Developer';
 }

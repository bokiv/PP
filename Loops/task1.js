/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen. */

/*  for (var x = 0;x < 10;x++){
    x = x + 1;
      console.log(x * x);
        // x = x + 1;
  } */

   
  for (var i = 0;i <= 15;i++){
      
      if(i % 2 === 0){
         console.log(i + ' is even.');
     }
     else{
         console.log(i + ' is odd.');
     }
    
     }

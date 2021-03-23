/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. 
var b =[2 , 4, -2, 7, -2, 4, -2];
var  a = b.length;
var j=a-1;

var result = '';

 for(i=0;i<j;i++)
 { if(b[i]===b[j])
   { result='symmetric';
     j--;


   }
   else{
       result='nonsymmetric';
       break;
   }

 }
 console.log(result);*/
 var b =[2 , 4, -2, 7, -2, 4, 2];
 var  a = b.length;
 var result = true;
 for(i =0, j=a-1 ; i < j; i ++, j--){
   (b[i] === b[j]) ? result = 'symmetric' : result = 'not symmetric'
   if(result === 'not symmetric')
   break;
 }
 console.log(result);


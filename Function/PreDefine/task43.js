/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */
'use strict'
function minArray(){
    var smalest = 0;
    var m = 0;

    if(a[0] < a[1]){
     smalest = a[0]; 
     m = 1;
    }
   else{
       smalest = a[1];
       m = 2;
    }
    for(var i =2; i< a.length; i ++){
         if(a[i] < smalest){
      smalest = a[i];
      m = i;
         }
    }
    return m;
}

var a = [4 , 2, 2, -1, 6];

console.log(minArray(a));
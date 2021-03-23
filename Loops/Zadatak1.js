/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes */
 var e = 3;
var a = [5 , -4.2, 3, 7];
var check = '';

for(i = 0;i <a.length; i++){
    if(a[i] === e){
  check = 'yes'; 
  break;
}
  else{
check = "no";
 }
}
console.log(check);
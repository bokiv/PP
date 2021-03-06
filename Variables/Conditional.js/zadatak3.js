/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */
var c1= 0;
var c2=-1; 
var c3= 4; 
if (c1>c2 && c1>c3) 
{
 if (c2>c3)
 { 
console.log(c1 + ", " + c2 + ", " + c3);
 }
 else 
{ 
console.log(c1 + ", " + c3 + ", " +c2);
 } 
}
 else if (c2>c1 && c2 >c3)
 {
 if (c1>c3) 
{ 
console.log(c2 + ", " + c1 + ", " +c3);
 } 
else
 {
 console.log(c2 + ", " + c3 + ", " +c1);
 } 
} 
else if (c3>c1 && c3>c2)
 {
 if (c1>c2) 
{ 
console.log(c3 + ", " + c1 + ", " +c2); 
} 
else 
{ 
console.log(c3 + ", " + c2 + ", " +c1);
 } 
}
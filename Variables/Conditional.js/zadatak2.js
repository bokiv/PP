/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var b1 = -5;
var b2 = -2;
var b3 = -6;
var b4 = 0;
var b5 = -1;

if(b1>b2 && b1>b3 && b1>b4 && b1>b5)
{
    console.log(b1)
}
else if(b2>b1 && b2>b3 && b2>b4 && b2>b5 ) {
    console.log(b2)
}
else if( b3>b1 && b3>b2 && b3>b4 && b3>b5) {
    console.log(b3)
}
else if( b4>b1 && b4>b2 && b4>b3 && b4>b5) {
    console.log(b4)
}
else if( b5>b1 && b5>b2 && b5>b3 && b5>b4) {
    console.log(b5)
}
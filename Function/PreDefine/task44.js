/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */
function secondMinElement(){
    var min = Infinity;
 secondMin = Infinity; 
for (var i= 0; i< a.length; i++) {
    if (a[i]< min) {
        secondMin = min;
        min = a[i]; 
    } else if(a[i]< secondMin) {
        secondMin = a[i]; 
    }
}
return secondMin;
}
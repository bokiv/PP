/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */
var a = [4 , 2, 2, -1, 6]
/*var smallest = 0;
var secsmall = 0;

if(a[0] < a[1])
{
     smallest = a[0];
     secsmall = a[1]; 
}
else
    {
     smallest = a[1];
     secsmall = a[0];
    }
for(i =2; i < a.length; i ++)
{
    if(a[i] < smallest)
    {
        secsmall = smallest;
        smallest = a[i];
    }
    else if(smallest == secsmall)
    {
        smallest = secsmall;
        secsmall = a[i];
    }
    else if(a[i] < secsmall && a[i] > smallest)
    {
        secsmall = a[i];
    }

}
console.log(secsmall);*/
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

//console.log('Smallest number: ' + min);
console.log('Second smallest number: ' + secondMin);

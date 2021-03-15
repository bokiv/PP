//1. Write an array of months in a year. Using console.log display June, October and January
//from the array.
var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
console.log(months[5], months[9],months[0]);


//2. Write an arrays of days in a week. Using console.log display Sunday from the array.
var d = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
console.log(d[6], d[d.length-1]);

//3. Print all negative elements from the array [2, -4, 5, -2, -11].

var a = [2,-4,5,-2,-11];
console.log(a[1],a[3],a[4]);

//4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
 //   72, 14, 9].Indeksi deljivi sa 3.

 var num = [5,15,-5,20,12,18,72,14,9];
 console.log(num[0],num[3],num[6]);

 /*5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element. */

var n = [[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
//console.log(n[0][3]),

console.log(n[2]);
console.log(n[2][2]);
 
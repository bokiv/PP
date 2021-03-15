//3. Write a program to compute the sum and product of an array of integers.
var array = [3,4,5,6,7,8,9,10];
var s = 0;
var p = 1;
for(var i = 0; i < array.length;i ++){
     s += array[i];
     p *= array[i];
}
console.log('suma niza:' + s + " \nproizvod niza:" + p);

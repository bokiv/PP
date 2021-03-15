//4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var string ='';
for(var i = 0;i < 8 ; i++){
      string += x[i] ; 
}
console.log(string);

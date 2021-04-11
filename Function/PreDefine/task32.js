/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] */
var arr = [NaN, 0, 15, false, -22, "",  undefined, 47, null];
var join = '';

function string(){
    for(var i = 0; i <arr.length; i ++){
        if(isNaN(arr[i])){
         }
        else if(arr[i] === null) {

        }
        else{
        join += '' + arr[i];
        }
    }
    return join;
}
console.log(string());
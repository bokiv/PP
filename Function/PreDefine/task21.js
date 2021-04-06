/*1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false*/
var a = '';
var value = 'My random string';

function isString(value) {
    if(isNaN(value) === true && value !== undefined){
       var a = true;
    }
    else{
       var a = false;
    }
    return a;
}

console.log(isString(value));
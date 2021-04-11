/* 3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;*/
var a = 'Ha';


function concatenates(n) {

  for( var i = 0; i < n-1; i ++){
      a += 'Ha';
    }
 return a;   
}
var n = 7;
console.log(concatenates(n));
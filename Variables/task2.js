//Logicki operatori
/*12. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/
/*var a = 5;
var b = " 5 ";
var c = "" ;

console.log( a == b)
console.log( a === b)
console.log( typeof c)
console.log( a && c)
console.log( a || b)
console.log(!!c)*/

/*13. Use the console to check the results you think should go in the following table:

p q p &amp;&amp; q p || q
true true
true false
false true
false false

14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

/*var p = true ;
var q = true ;

console.log( p && q)
console.log( p || q)*/

/*var p = false ;
var q = true ;

console.log( p && q)
console.log( p || q)*/

/*var p = true ;
var q = false ;

console.log( p && q)
console.log( p || q)*/

var p = false ;
var q = false ;

console.log( p && q)
console.log( p || q)

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

var d = 121;
console.log( (d === 54)  + " tacne godine.")
console.log( (d < 0) + ' godine su negativne.' )
console.log( (d>120) + '  godine vece od 120.')

/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var lim = 165;

console.log((lim>60 && lim<120) + ' bezbedna voznja.')


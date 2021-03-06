//br.1,2,3
var m = "Danas je super.";
console.log(m)


var plavoNebo = "Ne pada kisa.";

console.log(plavoNebo)


//br.4
var broj = 3-2-31;

console.log(broj)

var br = 3*5-7/3;

console.log(br)

var b = 4/2-1.14*3;

console.log(b)

//br.5
var ban = 1.2;
var k = 1000;
var gr = ban*k;

console.log('Banane su teske= ' + gr + ' grama.')

/*br.6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…*/

var ana = 5 ;
var tom = 30 ;
var kasa = ana*60;
var kast = tom*60;

console.log('Ana kasni  ' + kasa + ' sekundi.');
console.log('Tom kasni ' + kast + ' sekundi.')

/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/

var usb = 4 ;
var gb = 1000;
var usbstick = usb * gb;
 console.log('Usb stick have ' + usbstick + ' MB')

 var art = 98;
 var ukupno =  usbstick * gb / art;
console.log('Broj clanaka na usb-u je: ' + ukupno )

/*9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/

var a = 10 ;
var b = a * 2;
console.log( b )
//Drugi nacin skraceno.
console.log( a *= 2  )

var q = 10 ;
var y = q + 3;
console.log( y )
//Drugi nacin skraceno.
console.log( q +=3)

/*10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var s1 = "Borislav";
var s2 = " 54";
var s3 =",nema macku.";
var s = s1 + s2 ;

console.log( s + s3)

console.log( typeof s1 )
console.log( typeof s2 )
console.log( typeof s )
console.log( typeof s3 )
console.log()

/*11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56*/
var g = " number ";
console.log(typeof g)
var h = true ;
console.log( typeof h )
var i = null ;
console.log( typeof i )
var j = " false "; 
console.log( typeof j ) 
var k = 56 ;
console.log(typeof  k )

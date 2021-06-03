/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

var duplicateAllElements = function(arr){
  var duplicate = [];
  arr.forEach(function(elem) {
    duplicate.push(elem , elem);
  });
 return duplicate;
}

var sample = [2, 4, 7, 11, -2, 1];

console.log(duplicateAllElements(sample));

/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

 function removeDuplicate(arr){
    return arr.filter((value , index) => arr.indexOf(value) === index).sort(function(a , b){
        return a - b;
    });
 }
 var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
 console.log(removeDuplicate(arr));

 /* 3. a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function oddNumber(a){
  
  if(a.length %2 === 0){
    return false;
  }
  else{
    return true;
  }
};
var a = [1, 2, 9, 2, 1];
console.log(oddNumber(a));


var b = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
 function middSmalerElemets(b){
  elements = [];
  function middElement(b){
    if(b.length %2 === 0){
      return 'error';
    }
    else{
      c = (b.length + 1)/2
      return c - 1;
    }
  }
   for(var i = 0; i < b.length;i ++){
     if(b[i] < b[middElement(b)]){
       elements.push(b[i]); 
     }
     
   }return elements.length;
 }
 console.log(middSmalerElemets(b));

 /*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */

var a = [1, 4, -2, 11, 8, 1, -2, 3];

function minValue(a) {
  return Math.min.apply( Math, a);
}

function indexOfSmallest(a) {
  return a.lastIndexOf(minValue(a));
 }

console.log(minValue(a));
console.log(indexOfSmallest(a));

/*5.a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */

var findSmalerElements = function(array , b){
  var findElements = [];

  array.forEach(function(elem){
    if(elem < b){
    findElements.push(elem);
    }
  });

  return findElements;
  }
var sample = [2, 3, 8, -2, 11, 4];
var b = 6;

var result = findSmalerElements(sample , b);
console.log(result);

/*b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */;

var findElements = function(arr , b) {
  var elements = [];
  arr.forEach(function(elem){
      if(elem.toLowerCase().includes(b)){
        elements.push(elem);
      }    
  });
  return elements;
}

var sample = ["JavaScript", "Programming", "fun", "product"];
var check = "pro";
 var result = findElements(sample, check);
    
console.log(result);

/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/
var findElements = function(_arr,_callback){
  
  }  


var sample = ["JavaScript", "Programming", "fun", "product"];
var check = "pro";
 var result = findElements(sample, check);
    
console.log(result);

/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.
*/
 /* var shoppingList = function(array){
    var priceProducts = [];
   array.forEach(function(elm){
    priceProducts.push(array.price[elm]);

   });
    return priceProducts;
  }*/
  var totalPrice = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; i ++){
      sum += array[i].price;
    };
    return sum;
  }
  var avgPrice = function(array){
    var sum = 0;
    var j =0;
    for(var i = 0; i < array.length; i ++){
      sum += array[i].price;
      j = j + 1;
    }
    return sum/j;
  };
  var itemMaxPrice = function(array){
    var max = array[0].price;
    var j =0;
    var ime = '';
    for(var i = 0; i < array.length; i ++){
      if(max < array[i].price){
        max =array[i].price; 
        j = i;
      }
      ime = array[j].name.toUpperCase();
       
    };
    return ime;
    
  }
 
 var sample = [
  {name: "apples", price: 100},
  {name: "milk", price: 80},
  {name:"banana", price: 150}
 ];
  console.log(sample);
  //console.log(shoppingList(sample));
  console.log(totalPrice(sample));
  console.log(avgPrice(sample));
  console.log(itemMaxPrice(sample));

  /*7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/

//Write a function that checks if a given string is written in all capitals.

function checkLetters(string){
  if(string === string.toUpperCase()){
    return "Given string is written in all capitals";
  }
  else {
    return "Given string is not written in all capitals";
  }
};
var sample = "TODAY IS BEAUTIFUL DAY";
console.log(checkLetters(sample));

//Write a function that checks if a given string contains any digits.

 function checkStringForNumbers(input){
  var  str = String(input);
  for( var i = 0; i < str.length; i++){
            console.log(str.charAt(i));
      if(!isNaN(str.charAt(i))){ 
        //if the string is a number, do the following
          return "Have number.";
      }
  }
}
var input = "aab7bbb";
console.log(checkStringForNumbers(input));

//c. Write a function that checks if a given string is a valid hexadecimal color.


function isValidHex(color) {
  if(!color || typeof color !== 'string') return false;

  // Validate hex values
  if(color.substring(0, 1) === '#') color = color.substring(1);

  switch(color.length) {
    case 3: return /^[0-9A-F]{3}$/i.test(color);
    case 6: return /^[0-9A-F]{6}$/i.test(color);
    case 8: return /^[0-9A-F]{8}$/i.test(color);
    default: return false;
  }

  return false;
}

var color = "#F10000";
console.log(isValidHex(color));

//d. Write a function that checks if a given number belongs to the interval from 1900
//to 2018.

function checkNumber (num){
  if(num > 1900 && num < 2018){
    return true;
  }
  else {
    return false;
  }
}

var num = 2010;
console.log(checkNumber(num));
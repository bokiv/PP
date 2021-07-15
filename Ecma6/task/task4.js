//4. Write a function that filters all even elements of the array.
let arr = [6 ,11 ,9 ,0 ,3];

//let filterArr = arr.filter(num => num%2 === 0);




const filterAllEven = arr => 
     arr.filter(num => num%2 === 0); 


console.log(filterAllEven(arr));
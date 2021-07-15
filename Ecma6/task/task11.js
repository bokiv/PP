//  Write a function that calculates the product of the elements of the array.
//  Input: [2, 8, 3]
//  Output: 48

let arr = [2, 8, 3];
let prod = 1;

let arrProd = (arr) => {
    for(e of arr){
        prod *= e;
    }
    return prod;
} 


console.log(arrProd(arr));

// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let arrInput = [1.6, 11.34, 9.23, 7, 3.11, 8];

let integerNumber = arrInput.filter(element => {
    return (Number.isInteger(element));
})

console.log(integerNumber);

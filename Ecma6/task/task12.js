// Write a function that calculates the maximum of the given array. 
//     Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

let arr = [2, 7, 3, 8, 5.4];

let maxNumber = arr => {
    return Math.max(...arr);
}

console.log(maxNumber(arr));
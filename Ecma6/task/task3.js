// Write a function that increases each element of the given array by the given value. 
// If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const arr = [4, 6, 11, -9, 2.1];

const newArr = (arr, n) => {
    if(!n) {
        let increseArr = arr.map(e => { 
            return e + 1;
        })
        return increseArr;
    } else {
        let incereseArrNew = arr.map(e => {
            return e + n;
        })
        return incereseArrNew;
    }
}

console.log(newArr(arr, 2));
console.log(newArr(arr));

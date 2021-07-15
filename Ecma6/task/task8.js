// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

let index =  ""; 

let indefOfEleGreaterThenTen = (arr) => {
    arr.forEach(e => {
       if(e > 10) {
        index += `${arr.indexOf(e)}, `;
       }
       return index;
    })    
}

indefOfEleGreaterThenTen([1.6, 11.34, 29.23, 7, 3.11, 18])
console.log(index);
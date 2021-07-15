// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]


let arrArg = [23, 11.5, 9, "abc", 45, 28, 553];
let newArrInte = [];

let findNumberFive = arrArg.filter(element => {
    let integerNum = (Number.isInteger(element));
    if(integerNum) {
        let num = element.toString();
        for(let i = 0; i < num.length; i++){
            if(num[i] === "5"){
                newArrInte.push(num);
                return newArrInte;
            }
        }
    }
    
})

console.log(findNumberFive);

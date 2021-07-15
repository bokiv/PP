// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

let arrString = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
let newArrStr = [];

let filterArr = arrString.filter(element => {
    for(let i = 0; i < element.length; i++){
        if(element[i].includes("js") || element[i].includes("JS")){
            newArrStr.push(element)
            return newArrStr;
        }
    }
})

console.log(filterArr);
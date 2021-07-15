// Create an array of persons. A person should be an object with name and age 
// properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.  

const arrObj = [
    {name: "Gordana", age: 52}, 
    {name:"Mirjana", age: 21}, 
    {name: "Ljiljana", age: 55},
    {name: "Zoran", age: 40}    
];

let personOlderThan25 = arr => {
    let personNew = "";
    for (let i = 0; i < arr.length; i++){
        if(arr[i].age > 25){
           personNew += `${arr[i].name}, `
        }
    }
    return personNew;
}

console.log(personOlderThan25(arrObj));

let personOlderThan40 = arr =>{
    let older = arr.filter(person => {
        if(person.age > 40) {
            return true;
        }
    })
    older.forEach(ele => {
        console.log(ele.name);
    })
}
let personOlderThan20 = arr =>{
    let older = arr.filter(person => {
        if(person.age > 20) {
            return true;
        }
    })
    older.forEach(ele => {
        console.log(ele.name);
    })
}

console.log(personOlderThan25(arrObj));

//1. Write a function that capitalizes the first letter of each string argument it receives.
const strings = ["hello", "there", "ES", 6];

const capitalize = (...arr) => {
    return strings
    .filter( item => typeof item === 'string')
    .map( item => item[0].toUpperCase() + item.slice(1))
                     
}

console.log(capitalize(strings));

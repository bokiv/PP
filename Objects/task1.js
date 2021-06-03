/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */
 var coffe = {
     strength: 'mild',
     flavour: 'brown shugar',
     milk: true,
     sugar:true,
     name: 'cappucino'
 }
 /*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/
var myFavoriteMovie = {
    name: "The Lord of the Rings",
  actor: "Elijah Wood",
  director: "Peter Jackson",
  genre: "Fantasy/Adventure",
  popularity: 90/100,

};

console.log(typeof myFavoriteMovie);

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */

function createProject(desc, lang, url, dev){
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDev: dev,
        printRepesitory: function() {
            console.log(url);
        },
        isJavaScript: function() {
            return lang === 'JavaScript';
        },
        isDevelopment: function() {
            return dev ? 'project is in development' : 'project is not in development'
        }
    }
    return project;
}
calculator = createProject('Program that calculates..', 'JavaScript', 'http//github.com/bokiv/calculator', true);

blog = createProject('blog portal...', '#c', 'http//github.com/bokiv/blog', false);

console.log(calculator);
console.log(blog);

calculator.printRepesitory();
blog.printRepesitory();

console.log(calculator.isDevelopment());
console.log(blog.isDevelopment());

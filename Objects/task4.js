/*function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes")
            } else {
                console.log("This meal is prepared longer than 15 minutes")
            }
        },
        deleteIngredient: function () {
            arrIngredients.slice(2);
        }
    }       
}
function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes")
            } else {
                console.log("This meal is prepared longer than 15 minutes")
            }
        },
        deleteIngredient: function () {
            arrIngredients.splice(index, 1);
        }
    }       
}

console.log(testRecipe)*/

function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes");
            } else {
                console.log("This meal is prepared longer than 15 minutes");
            }
        },
        deleteIngredient: function () {
            arrIngredients.slice(2);
        },
    }
    return recipe;
}


var recipe1 = testRecipe("Gibanica", "pita", 3, ["kore", "sir", "voda", "brasno", "so", "ulje"], 60, "Mix everything");

console.log(recipe1);



function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes")
            } else {
                console.log("This meal is prepared longer than 15 minutes")
            }
        },
        deleteIngredient: function () {
            arrIngredients.splice(index, 1);
        }
    }       
}

console.log(testRecipe)

function testRecipe(name, type, complexity, arrIngredients, time, instructions) {
    if (complexity < 1 || complexity > 5) {
        return "Please enter value between 1 and 5"
    }
    var recipe = {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingredientsList: arrIngredients,
        prepTime: time,
        prepInstructions: instructions,
        printIngredients: function () {
            console.log(arrIngredients);
        },
        checkTime: function () {
            if (time < 15) {
                console.log("This meal can be prepared in less than 15 minutes");
            } else {
                console.log("This meal is prepared longer than 15 minutes");
            }
        },
        deleteIngredient: function () {
            arrIngredients.slice(2);
        },
    }
    return recipe;
}


var recipe1 = testRecipe("Gibanica", "pita", 3, ["kore", "sir", "voda", "brasno", "so", "ulje"], 60, "Mix everything");

console.log(recipe1);







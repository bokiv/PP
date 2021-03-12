/* Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */

var city = "Beograd";
var message2 = "";
switch (city) {
    case "Beograd":
    case "Novi Sad":
    case "Kragujevac":

        message2 = "Serbia";
        break;

    case "Sarajevo":
    case "Banja Luka":
    case "Tuzla":

        message2 = "Bosnia and Herzegovina";
        break;

    case "Skopje":
    case "Stip":
    case "Ohrid":

        message2 = "North Macedona";
        break;

    case "Maribor":
    case "Ljubljana":
    case "Porec":

        message2 = "Slovenia";
        break;

    case "Podgorica":
    case "Herceg-Novi":
    case "Niksic":

        message2 = "Montenegro";
        break;
        
    default: message2 = "Please choose a different city";
        break;
}
console.log(message2);
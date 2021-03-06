/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

var broj = 32;
var razlika = broj - 13;

if (razlika < 0){
    razlika = -1 * razlika;
}

(broj > 13) ? console.log(razlika * 2) : console.log(razlika);

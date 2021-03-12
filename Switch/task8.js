/* 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */
var operator = "/";
var broj1 = 25;
var broj2 = 2;
var result = "";

switch (operator){
    case "+" :
      result = (broj1 + broj2);
      console.log(broj1 + "+" + broj2 + '=' + result );
    break;
    case '-':
        result = (broj1 - broj2);
        console.log(broj1 + "-" + broj2 + '=' + result);
        break;
    case '*' :
      result = (broj2 * broj1);
      console.log(broj1 + "*" + broj2 + '=' + result);
      break;
    
    case '/' :
      if (broj2 === 0) {
      console.log('Number cant be divided by zero')}
     else{    
      result = (broj1 / broj2 );
      console.log(broj1 + "/" + broj2 + '=' + result)}
      break;

      default :
       console.log('Uknown operator')
     break;

    

  
      
      
     
}
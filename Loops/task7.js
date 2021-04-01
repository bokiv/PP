//7. Write a program that computes average marks of the following students. Then use this
//average to determine the corresponding grade.
var studenti = [['David' , 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var ocene = 0;

for (var i = 0; i < studenti.length; i ++){
ocene += studenti[i][1];
var prosek = (ocene/studenti.length);
}
 console.log(' Average grade' + ': ' + (ocene / studenti.length));
     if (prosek < 60)
     {
         console.log(' Grade : F');
     }
     else if(prosek < 70)
     {
         console.log(' Grade : D');
     }
     else if(prosek < 80)
     {
         console.log(' Grade : C');
     }
     else if(prosek < 90)
     {
         console.log(' Grade : B');
     }
     else if(prosek < 100)
     {
         console.log(' Grade : A ')
     } 
    
    
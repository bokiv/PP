"use strict";

(function(){
    var CONTINETS = Object.freeze({
        ASIA: 'AS',EUROPA: 'EU' ,AFRICA: 'AF' ,SOUTHAMERICA: 'SA' ,NORTHAMERICA: 'NA' , AUSTRALIA: 'AU'
    });
    function Country(nameCountry , odds , continent){
        if (!nameCountry || !odds || !continent){
            throw new Error("Fields nameountry,odds and continent are required")
        }
        this.name = nameCountry;
        this.odds = odds;
        this.continent = continent;

    }
    function Person(namePerson, surname, dateOfBirth){
        if (!namePerson || !surname || !dateOfBirth){

             throw new Error('Fields namePerson,surname and dateofBirth are required')
        }
        this.name = namePerson;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getData = function(){
        return this.name + ' ' + this.surname + '' + ' ' + this.dateOfBirth;
        }
    }
    function Player(person ,betAmount ,nameCountry){
        if (!person || !(person instanceof Person) || !betAmount){
            throw new Error('Invalid person and betAmount input')
        }
        if (!nameCountry || !(nameCountry instanceof  Country) || !betAmount){
            throw new Error('Invalid country and betAmount input')
        }
        this.person = person;
        this.nameCountry = nameCountry;
        this.betAmount = betAmount;
        var now = new Date;
        var currentYear = now.getFullYear();
        

        this.getData = function() {
           return this.nameCountry.name + ', ' + this.betAmount * this.nameCountry.odds + ' eur, ' + this.person.name + ' ' + this.person.surname + ', ' +(currentYear - person.dateOfBirth.split('.')[2]) ; 
            

        }
    }
    function Address(country , city , postalCode , streetAndNumber){
        if (!country || !city || !postalCode || !streetAndNumber){
            throw new Error('Invalid country,city,postal code street and number input');
        }
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;
        this.getData = function() {
            return this.streetAndNumber + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
        }
    }
    function bettingPlace(address , listOfPlayers){
        if(!address || !listOfPlayers){
            throw new Error('Invalid address and listOfPlayers input')
        }
        this.address = [];
        this.listOfPlayers = [];
    }
    















//testing
try{
    var country1 = new Country('SR', 1.5, CONTINETS.EUROPA);
    var person1 = new Person('Marko' , 'Maric', '24.09.1990.')
    var player1 = new Player(person1 , 1200 , country1)
    var address1 = new Address('SR' , 'Belgrade' , 11000 ,'Resavska 43');
   // var betAmount1 = new BetAmount("J.Gagarina 49" , )

    console.log(player1.getData());

}
catch (error){
    console.log('Error message:' + error.message);
}



})()
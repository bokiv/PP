"use strict";

(function (){

function Person(name , surname) {
    if (!name || !surname) {
        throw new Error("Fields name and surname required");
    }
    this.name = name;
    this.surname = surname;
    this.getData = function() {
        return this.name + " " + this.surname;
    }
}

function Seat(number , category) {
    category = category || 'e';
    number = number || Math.floor(91 * Math.random() + 10);

    if (!number || !category) {
        throw new Error('Fields number and category are required');
    }
    if (!['e', 'b'].includes(category)) {
        throw new Error('Invalid input category')
    }
    this.number = number;
    this.category = category;
    this.getData = function() {
        return this.number + ', ' + this.category.toUpperCase();
    }
}

function Passenger(person , seat){
    if(!person || !(person instanceof Person)){
        throw new Error('Invalid person input')
    }
    if (!seat || !(seat instanceof Seat)){
        throw new Error ('Invalid seat input')  
    }
    this.person = person;
    this.seat = seat;
    this.getData = function() {
        return this.seat.getData() + ', ' + this.person.getData();

    }
    
}

function Flight(relation, date){
    if (!relation || !date) {
        throw new Error('Fields relation and date are requiered')
    }
    this.relation = relation;
    this.date = date;
    this.listOfPassenger = [];
    this.addPassenger = function(passenger) {
        if (!passenger || !(passenger instanceof Passenger)) {
            throw new Error('Invalid passenger input')
        }
        this.listOfPassenger.push(passenger);
    }
    this.getData = function () {
        var result = '';
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        result +='\t' +  day + '.' + month + '.' + year + ', ' + this.relation + '\n';
        this.listOfPassenger.forEach(function(passenger){
            result += '\t\t' + passenger.getData() + '\n'
        })
        return result;

    }
}

function Airport() {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    this.addFlight = function(flight) {
        if(!flight || !(flight instanceof Flight)) {
            throw new Error('Invalid flight input')
        }
        this.listOfFlights.push(passenger);
    }
}








 //console.log('Hi');
 //test
 try {
     var person1 = new Person('Petar', 'Petrovic');
     var person2 = new Person('Stojan', 'Stojanovic')
     var seat1 = new Seat();
     var seat2 = new Seat(22 , 'b');
     var passenger1 = new Passenger(person1, seat1)
     var passenger2 = new Passenger(person2, seat2)
     var flight1 = new Flight('Belgrade - Wiena', 'Oct 25 2017')
     var flight2 = new Flight('Wiena - Madrid', 'Nov 11 2017')
     var nikolaTesla = new Airport();
     flight1.addPassenger(passenger1);
     flight1.addPassenger(passenger2);
     flight2.addPassenger(passenger1);
     flight2.addPassenger(passenger2);
 
     nikolaTesla.addFlight(flight1);
     nikolaTesla.addFlight(flight2);
     console.log(flight1.getData());
 }catch (error) {
     console.log('Error message:' + error.message);
 }  
})()
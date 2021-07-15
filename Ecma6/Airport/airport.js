(function(){
    class Person{
        constructor(name , surname){
            this.name = name;
            this.surname = surname;
        }
        getData(){
            return`${this.name} ${this.surname}`;
        }
    }
    class Seat {
        constructor(number ,category){
            category = category || 'e';
            number = number || Math.floor(91 * Math.random() + 10);

            this.number = number;
            this.category = category;
        }
        getData(){
            return`${this.number},${this.category}`
        }
    }
    class Passenger extends Person {
        constructor(name ,surname, seat){
            super(name,surname)
        }
    }
})






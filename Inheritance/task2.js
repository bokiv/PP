class Person {
    constructor(name ,surname){
        this.name = name
    this.surname =surname

    }
    getFullName(){
        console.log(this.name + " " + this.surname);
    }
}

//Employee

class Employee extends Person {
    constructor(name, surname, job , salary) {
    super(name, surname,)
    this.job = job
    this.salary = salary
    }
    getData(){
        console.log(this.getFullName + " " + this.salary);
    }
    getSalary(){
        console.log(this.salary);
    }
    increaseSalary(percent){
        var sum = (this.salary / 100) * percent + this.salary;
        this.salary = sum; 
    }

}
//Developer
class Developer extends Employee{
    constructor(name ,surname ,job ,salary ,specialization){
        super(name , surname ,job ,salary)
        this.specialization = specialization
    }
    getSpecialization(){
        console.log(this.specialization);
    }
}
//Manager
class Manager extends Employee{
    constructor(name ,surname ,job ,salary ,department){
        super(name , surname ,job ,salary)   
    this.department = department
    }
    getDepartment(){
        console.log(this.department);
    }
    changeDepartment(newDepartment){
        this.department = newDepartment
        console.log(this.department);
    }
}
//Testing
var person1 = new Person("Bora", "Djordjevic");
var employee1 = new Employee("Pera", "Peric", "jsDeveloper", 1000);
var developer1 = new Developer(
  "Laza",
  "Lazic",
  "fullStackDeveloper",
  2000,
  "fullStack"
);
var manager1 = new Manager(
  "Peros",
  "Perosic",
  "Manager",
  1500,
  "High-Level-Managment"
);

console.log(person1);
manager1.getDepartment();
employee1.increaseSalary(10);
console.log(employee1);
developer1.getSpecialization();
manager1.changeDepartment("Head department");
console.log(manager1);

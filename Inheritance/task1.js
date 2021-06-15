function Person(name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function(){
    return this.name + " " + this.surname;
}
Person.prototype.printInfo = function(){
    console.log(this.getFullName());
}
//Employee
function Employee(name, surname, job, salary){
    Person.call(this , name ,surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function(){
    var data = this.getFullName();
    console.log(data + " " + this.salary)
}
Employee.prototype.getSalary = function(){
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function (percent) {
    var sum = (this.salary / 100) * percent + this.salary;
    this.salary = sum; 
  };
  

//Developer
function Developer(name, surname, job, salary , specialization){
    Employee.call(this , name , surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function(){
    console.log(this.specialization);
}

  


//Manager
function Manager(name, surname, job, salary , department){
    Employee.call(this , name , surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function(){
    console.log(this.department);
}
Manager.prototype.changeDepartment = function(newDepartment){
     this.department = newDepartment;
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


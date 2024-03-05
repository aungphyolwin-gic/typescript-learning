"use strict";
//---------------
// Class
//---------------
class Employee {
    constructor(name, salary) {
        this.employeeName = name;
        this.salary = salary;
    }
    greet() {
        console.log("Good Morning " + this.employeeName);
    }
}
let employee1 = new Employee("John", 2000);
// console.log(employee1.employeeName);
employee1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegateWork() {
        console.log('Manager delegating work by ' + this.employeeName); //can't access on private
    }
}
let manager1 = new Manager("Mike");
manager1.delegateWork();
manager1.greet();
// console.log(manager1.employeeName);

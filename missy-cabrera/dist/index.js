"use strict";
let age = 28;
if (age < 50)
    age += 10;
console.log(age);
let numbers = [];
let firstName;
let user = [1, 'missy'];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'missy',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function processEvents() {
    let count = 0;
    while (count < 100) {
        console.log("test: ", count);
        count++;
    }
}
processEvents();
console.log("test");
console.log('Hello Missy');
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let account = new Account(1, 'Missy', 0);
account.deposit(100);
console.log(typeof account);
class Student {
    constructor(name, semester, course) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }
    get courses() {
        return this.course;
    }
    set courses(thecourse) {
        this.course = thecourse;
    }
}
let student = new Student("Missy", 8, "Web Development");
student.course = "Data structure";
console.log("Course purchased is " + student.courses);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'missy';
seats.A2 = 'may';
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map
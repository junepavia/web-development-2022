"use strict";
function render(document) {
    if (typeof document === 'string') {
        document.toLowerCase;
    }
}
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amout");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid Amout");
        this._balance += value;
    }
}
let account = new Account(1001, "Erwin", 1000000);
account.balance = 1;
class SeatAssigment {
}
let seats = new SeatAssigment();
seats.A1 = "Erwin";
seats['A2'] = "Al";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.lastName + ',' + this.firstName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('Takeing a test');
    }
}
let studen = new Student(1, 'Erwin', 'Jumamil');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Student(1, 'Juan', 'Cross'),
    new Teacher('Erwin', 'Jumamil'),
    new Principal('Rey', 'Jumamil'),
    new Teacher('Al', 'Dragon')
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a Circle');
    }
}
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(1);
class Store1 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store1 = new Store1();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
let items = {
    name: 'a',
    price: 1
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
class ProfileComponent {
}
//# sourceMappingURL=index.js.map
var age = 28;
if (age < 50)
    age += 10;
console.log(age);
//2 main types assignment =explicit & implicit
var numbers = []; //explicit
var firstName; // implicit
// tuple
var user = [1, 'missy']; //restricted by 2 values only
var mySize = 2 /* Size.Medium */;
console.log(mySize);
// function
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
var employee = {
    id: 1,
    name: 'missy',
    retire: function (date) {
        console.log(date);
    }
};
//union Type |
function kgToLbs(weight) {
    //narrowing
    if (typeof weight === 'number')
        // weight.
        return weight * 2.2;
    else //{ weight.}
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100;
//nullable types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
// optional chaining
//nullish coaelscing ??
var speed = null;
var ride = {
    //speed !==  null ? speed: 30 simplify by ??
    speed: speed !== null && speed !== void 0 ? speed : 30 //30 will be the default value if speed is not null
};
// type assertion
/*let phone =<HTMLInputElement>   documentElementById('phone') //as HTMLInputElement;
//HTMLElement
//HTMLInputElement
phone.value  */
//type unknown
function render(document) {
    // narrowing
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    //document.move();
    //document.fly();
    //document.whateverWeWant();
}
//never type
function processEvents() {
    while (true) {
        //read a message from queue
    }
}
processEvents();
console.log('Hello Missy');

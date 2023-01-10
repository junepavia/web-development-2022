function myFunction() {
    const idNo = 20211001; // constant value
    let firstName = 'Erwin';//string
    let lastName = 'Jums'; // string
    var x = 6;
    var y = 5; // variables
    z = x + y; // undeclared variables
    document.getElementById("demo").innerHTML =
    idNo + "<br>" + lastName + "<br>" + firstName + "<br>" +z;
}

function myFunction2() {
    let a = 5;
    let b = 6;
    let c = a + b; //addtion
    let d = a - b; // subtraction
    let e = a * b; // Multiplication
    let f = a ** b; // Exponential
    let g = b / a ; //Division
    let h = b % a;  //modulus
    a++; 
    b--;
    let q = a; // Increment
    let w = b; // Decrement
    let length = 16;                               // Number
    let lastName = "Johnson";                      // String
    let x = {firstName:"John", lastName:"Doe"};    // Object
    let y = 7 + "shadow"; // if adding number and string the number will be converted into string
    document.getElementById("demo3").innerHTML =
    c + "<br>"+ d + "<br>"+ e + "<br>" + f + "<br>"+ g
    + "<br>"+ h + "<br>"+ q + "<br>" + w + "<br>"+ length + "<br>"+
    lastName + "<br>"+ x + "<br>"+ y;
}
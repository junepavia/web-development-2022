/*Arithmetic*/
let a = 2;
    let b = (5 + 10) * a;
    document.getElementById("arith").innerHTML = b;
/*Strings operator concatenates*/
let text1 = 'Bien';
    let text2 = "De Guzman";
    let text3 = text1 + " " + text2;
    document.getElementById("string1").innerHTML = text3;  
/*Assignment Operator*/
let text4 = "Hello, ";
    text4 += "I am Bien Marco de Guzman";
    document.getElementById("assope1").innerHTML = text4;
/*Adding a number and a string, returns a string.*/  
let q = 2 + 1;
    let w = "30" + 5;
    let e = "Returns a string" + 1000;
    document.getElementById("snums").innerHTML =
    q + "<br>" + w + "<br>" + e;  
/*Increment*/    
let o = 10;
        o++;
        let d = o;
        document.getElementById("incren").innerHTML = d;
/*Data Types*/  
let x;         // Now x is undefined
    x = 0;         // Now x is a Number
    x = "Bien Marco";    // Now x is a String
    document.getElementById("dtype").innerHTML = x;
/*Exponential*/
let y = 149e5;
    let z = 143e-2;   
    document.getElementById("expo").innerHTML =
    y + "<br>" + z;    
/*Boolean*/
let p = 8;
    let m = 2;
    let n = 8;
    document.getElementById("boolean").innerHTML =
    (p == n) + "<br>" + (p == m) + "<br>" + (m == n);    
/*Array always start zero-based which is 0 is 1*/    
const planet = ["Pluto","Mars","Jupiter","Saturn","Earth"];     
    document.getElementById("arrayy").innerHTML = "The planet is: "+ planet[4];
/*Javascript Objects returns an array whose elements are strings 
    corresponding to the enumerable string-keyed property values found directly upon object*/ 
const me = {
    firstName : "Bien",
    lastName  : "De Guzman",
    age     : 22,
    sport : "Basketball"
    };            
    document.getElementById("obje").innerHTML =
    me.lastName + " favourite sport is "+ me.sport;   
/*Function The return statement stops the execution of a function and returns a value*/ 
var f = myFunction(10, 20);
    document.getElementById("func").innerHTML = f;       
    function myFunction(x, y) {
        return "Multiply is equal to: "+ x * y;
    }   
/*HTML events are "things" that happen to HTML elements*/    
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
/**/         
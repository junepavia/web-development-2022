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

/*String length*/    
let text = "BIENMARCODEGUZMAN";
document.getElementById("stringer").innerHTML = text.length;

/*Strings as Object(strings can also be defined as objects with the keyword new)*/
let l = "Marco";
let k = new String("Bien");
document.getElementById("obs").innerHTML =
typeof l + "<br>" + typeof k;

/*String Slice*/
let fruit = "Apple, Banana, Manggo";
let part = fruit.slice(0,5);
document.getElementById("slices").innerHTML = part; 

/*Substring*/
let str = "Apple, Banana, Kiwi";
document.getElementById("subs").innerHTML = str.substring(7);

/*Replace method replaces a specified value with another value in a string*/
function myName() {
    let me = document.getElementById("replace").innerHTML;
    document.getElementById("replace").innerHTML =
    me.replace("Pogi","De Guzman");
}

/*Concat joins two or more strings*/
let text5 = "HTML";
let text6 = "CSS";
let text7 = " and JavaScript"
let text8 = text5.concat(" ",text6,text7);
document.getElementById("concat").innerHTML = text8;

/*method returns the index of (position of) the first occurrence of a string in a string*/
let textt = "Please locate where 'locate' occurs!";
document.getElementById("indof").innerHTML = textt.indexOf("occurs");

/*matchAll method returns an iterator 
containing the results of matching a string against a string (or a regular expression).*/
let text10 = "This is lorem not a lorem about lorem about"
const iterator = text10.matchAll("about");
document.getElementById("matchs").innerHTML = Array.from(iterator);

/*Include method returns true if a string contains a specified value*/
let text11 = "Hello We Are Venom";
document.getElementById("includes").innerHTML = text11.includes("Spiderman");

/*Startswith method returns true if a string begins with a specified value*/
let text12 = "I am Venom";
document.getElementById("starts").innerHTML = text12.startsWith("I");

/*EndsWith method returns true if a string ends with a specified value*/
let text13 = "Peter Parker";
document.getElementById("end").innerHTML = text13.endsWith("Peter");

/*Template Literals use back-ticks (``) rather than the quotes ("") to define a string*/
let text14 = `Im Bien`;
document.getElementById("tic").innerHTML = text14;

/*Variables Substitution*/
let firstName = "Bien";
let lastName = "De Guzman";
let text15 = `Hello sir,  ${firstName} ${lastName}!`;
document.getElementById("vs").innerHTML = text15;
/**/
/**/
/**/
/**/
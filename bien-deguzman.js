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

/*Integers (numbers without a period or exponent notation) are accurate up to 15 digits*/
let xx = 777777777777777;//15 numbers
let yy = 9999999999999999;//16 numbers round off
document.getElementById("inte").innerHTML = xx + "<br>" + yy;

/*Javascript Numbers*/
let xxx = 5;
let yyy = 6;
let zzz = xxx + yyy; //JavaScript uses the + operator to concatenate the strings
document.getElementById("pnum2").innerHTML = zzz;

/*NaN*/
document.getElementById("notan").innerHTML = "Not a Number = " + 100 / "Apple";
document.getElementById("notan2").innerHTML = "A Number = " + 100 / 10;

/*Infinity*/
let myNumber = 3; 
let txt16 = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt16 = txt16 + myNumber + "<br>";
}
document.getElementById("infi").innerHTML = txt16;

/*BigInt*/
let x17 = 9999999999999999;//16 int only accurate 15 digits
let y17 = BigInt("9999999999999999");//16 bigInt store big integer values that are too big to be represented
document.getElementById("bigi").innerHTML = x17 + "<br>" + y17;

/*toString*/
let x18 = 101;
document.getElementById("tos").innerHTML =
  x18.toString() + "<br>" +
   (101).toString() + "<br>" +
   (99 + 2).toString();

/*toExponential*/
let x19 = 1.234;
document.getElementById("expo2").innerHTML =
  x19.toExponential(1) + "<br>" + 
  x19.toExponential(2) + "<br>" + 
  x19.toExponential(3) + "<br>" + 
  x19.toExponential(4);

/*ToFixed*/
let x20 = 1.656;
document.getElementById("fix").innerHTML =
  x20.toFixed() + "<br>" +
  x20.toFixed(2) + "<br>" +
  x20.toFixed(4) + "<br>" +
  x20.toFixed(5);

/*ToPrecision*/
let x21 = 1.656;
document.getElementById("prec").innerHTML = 
  x21.toPrecision() + "<br>" +
  x21.toPrecision(2) + "<br>" +
  x21.toPrecision(4) + "<br>" +
  x21.toPrecision(5); 

/*The largest possible number in JavaScript*/
let x22 = Number.MAX_VALUE;
document.getElementById("maxv").innerHTML = x22;

/*smallest number possible in JavaScript*/
let x23 = Number.MIN_VALUE;
document.getElementById("minv").innerHTML = x23;

/*JavaScript array elements are accessed using numeric indexes (starting from 0)*/
const arr = ["One", "Two", "Three" ,"Four"];
document.getElementById("arr").innerHTML = arr[2];

/*This statement changes the value of the first element in arr1*/
const arr1 = ["One", "Two", "Three","Four"];
arr1[0] = "Zero";
document.getElementById("arr1").innerHTML = arr1;

/*Access the Full Array the full array can be accessed by referring to the array name*/
const me1 = ["Bien", "Marco", "De Guzman"];
document.getElementById("arr2").innerHTML = me1;

/*Length property of an array returns the length of an array (the number of array elements)*/
const fruits = ["Banana", "Orange", "Apple", "Mango","Watermelon"];
document.getElementById("arr3").innerHTML = fruits.length;

/*push method way to add a new element to an array is using the push() method*/
const me2 = ["Bien", "Marco"];
document.getElementById("arr4").innerHTML = me2;
function myFunction1() {
  me2.push("De Guzman");
  document.getElementById("arr4").innerHTML = me2;
}
/*Associative Arrays with named indexes are called associative arrays (or hashes)*/
const me3 = [];
me3[0] = "Bien";
me3[1] = "Marco";
me3[2] = "De Guzman";
me3[3] = 1;
document.getElementById("arr5").innerHTML =
me3[0] + " " + me3.length;

/*The typeof operator, when used on an array, returns object*/
//const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("arr6").innerHTML = typeof fruits1;
const fruits0 = ["Banana", "Orange", "Apple"];
document.getElementById("arr6").innerHTML = Array.isArray(fruits0);

/*String to Array*/
const fruits2 = ["Banana", "Orange", "Avocado"];
document.getElementById("meth1").innerHTML = fruits2.toString();

/*The join() method joins array elements into a string. */
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("meth2").innerHTML = fruits3.join(" + ");//It this example we have used " * " as a separator between the elements

/*Pop method removes the last element from an array*/
const foods = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("meth3").innerHTML = foods;
foods.pop();
document.getElementById("meth4").innerHTML = foods;
foods.pop();
document.getElementById("meth5").innerHTML = foods;

/*Push method method adds a new element to an array (at the end)*/
const foods1 = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("meth6").innerHTML = foods1;
foods1.push("Hotdog");
document.getElementById("meth7").innerHTML = foods1;

/*Shift method removes the first array element and "shifts" all other elements to a lower index*/
const foods2 = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("meth8").innerHTML = foods2;
foods2.shift();
document.getElementById("meth9").innerHTML = foods2;

/*Unshift method adds new elements to the beginning of an array*/
const foods3 = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("meth10").innerHTML = foods3;
foods3.unshift("Adobo");
document.getElementById("meth11").innerHTML = foods3;

/*Array elements are accessed using their index number*/
const foods4 = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("change1").innerHTML = foods4;
foods4[1] = "Afritada";
document.getElementById("change2").innerHTML = foods4;

/*Deleting elements leaves undefined holes in an array*/
const foods5 = ["Tinola", "Menudo", "Sinigang", "Spam"];
document.getElementById("ad1").innerHTML =
"Ang lutong ulam ay: " + foods5[0];
delete foods5[0];//Deleted 0 start
document.getElementById("ad2").innerHTML =
"Ang lutong ulam ay: " + foods5[0];

/*Concat() method creates a new array by merging (concatenating) existing arrays*/
const Girls = ["Missy", "Princess"];
const Boys = ["Bien", "Brent", "Al", "Erwin", "Ziegler",...Girls];
const myProgrammer = Girls.concat(Boys);
document.getElementById("merges").innerHTML = myProgrammer;

/* */
/* */
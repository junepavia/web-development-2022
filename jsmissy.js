
function test() {
  document.getElementById("missy2").innerHTML = "My first Javascript.";
  document.getElementById("missy3").innerHTML = 5 + 3;
  document.getElementById("missy4").innerHTML = 88.88;
}
function test1(){
  var x, y, m;
  x = 20;
  y = 8;
  m = x + y;
  document.getElementById("missy5").innerHTML =
   " my m is"+ " " + m + ".";
}
function test2(){
  let name,surname,age ;
  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  age = document.getElementById("age").value;
  document.getElementById("missy6").innerHTML =
    name + " " + surname +" "+
   " " + age +" " +"y/o.";
}
function test3(){
  const peso = 55.38
  const dollar = document.getElementById("dollar").value;
  document.getElementById("missy7").innerHTML =
  "Php"+ " " + dollar * peso ; 
}
function test4(){
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value; 
  document.getElementById("missy8").innerHTML =
  "Product:"+ " " + num1 * num2 ;
}
  function test5(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 =parseFloat(num1) + parseFloat(num2);
  document.getElementById("missy9").innerHTML = "Sum:"
  +" "+ num3;
  }
  function test6(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
  document.getElementById("missy10").innerHTML =
  "Quotient:"+ " " + num1 / num2 ;
}
  function test7(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let minus = num1 - num2;
   document.getElementById("missy11").innerHTML =
  "Difference:"+ " " + minus ; 
} 
function test8(){
  const person = {
    firstName: "Missy",
    lastName: "Cabrera",
    age: 28,
    fullName: function() { let myname = "missy";
      return myname + " " + this.lastName +" "
      + this.age +"y.o";
    }
  };
  document.getElementById("missy12").innerHTML = person.fullName();
}
function test9() {
  let text = document.getElementById("text").value;
  let text1 ="   Programmer developer       ";
  let text2 = text1.trimEnd();
  document.getElementById("missy13").innerHTML = text;
  document.getElementById("missy14").innerHTML ="<mark>Length:</mark>" +" "+ text.length;
  document.getElementById("missy15").innerHTML = "<mark>Slice:</mark>" +" "+ text.slice(8,13);
  document.getElementById("missy16").innerHTML = "<mark>Substring:</mark>" +" "+ text.substr(7);
  document.getElementById("missy17").innerHTML =
   "<mark>Replace:</mark>" +" "+ text.replace(" Missy","Misung");
  document.getElementById("missy18").innerHTML = 
  "<mark>ReplaceAll:</mark>" +" "+ text.replaceAll("Missy","Misung");
  document.getElementById("missy19").innerHTML = "<mark>UPPERCASE:</mark>" +" "+ text.toUpperCase();
  document.getElementById("missy20").innerHTML = "<mark>lowercase:</mark>" +" "+ text.toLowerCase();
  document.getElementById("missy21").innerHTML = "<mark>concat:</mark>" +" "+ text.concat(" ",text1);
  document.getElementById("missy22").innerHTML = 
  "<mark>trimEnd:</mark>" +text1.length +" "+"End lenght:"+ text2.length;
  document.getElementById("missy23").innerHTML = "<mark>padEnd:</mark>" +" "+ text.padEnd(5,"8");
  document.getElementById("missy24").innerHTML = "<mark>charAt:</mark>" +" "+ text.charAt(3);
  document.getElementById("missy25").innerHTML = "<mark>charCodeAt:</mark>" +" "+ text.charCodeAt(3);
  document.getElementById("missy26").innerHTML = "<mark>Property access[]:</mark>" +" "+ text[3];
}
 function test10() {
  let temp = "Missy" ;
  let temp1 ="Cabrera";
  let temp2 = `Hello ${temp}, ${temp1}!` ;
  document.getElementById("missy27").innerHTML = temp2;
}
  function test11() {
  let a = 123e5;
  let b = 123e-5;
  document.getElementById("missy28").innerHTML = a + "<br>" + b;
  }
  function test12() {
    let c = 999999999999999;
    let d = 9999999999999999;
    let e = 12345678901234567890123n;
    document.getElementById("missy29").innerHTML = c + "<br>" + d + "<br>BigInt "+ e;
}
function test13() {
  const f = parseFloat(document.getElementById("nummethods").value);
  document.getElementById("missy30").innerHTML = f;
  document.getElementById("missy31").innerHTML ="<mark>toString:</mark>" +" "+ f.toString();
  document.getElementById("missy32").innerHTML =
   "<mark>toExponential(4):</mark>" +" "+ f.toExponential(4);
  document.getElementById("missy33").innerHTML = "<mark>toFixed(3):</mark>" +" "+ f.toFixed(3);
  document.getElementById("missy34").innerHTML = "<mark>toPrecision(6):</mark>" +" "+ f.toFixed(6);
}
function test14() {
  let g = ["cat", "dog", "rabbit", "tiger", "monkey","goat",
  "snake","rooster","horse"]
  let h = g[document.getElementById("arra").value];
  let i =["rat", "ants", "flies", "frog"]
   document.getElementById("missy35").innerHTML=`Have a ${h}!`;
   document.getElementById("missy36").innerHTML ="<mark>toString:</mark>" +" "+ g.toString();
   document.getElementById("missy37").innerHTML ="<mark>join:</mark>" +" "+ g.join("&");
   document.getElementById("missy38").innerHTML ="<mark>pop:</mark>" +" "+g; g.pop();
   document.getElementById("mis38").innerHTML ="<mark>pop2:</mark>" +" "+ g;
   document.getElementById("missy39").innerHTML ="<mark>shift:</mark>" +" "+g.shift();
   document.getElementById("mis39").innerHTML ="<mark>shift2:</mark>" +" "+ g;
   document.getElementById("missy40").innerHTML ="<mark>concat:</mark>" +" "+g.concat(i);
   document.getElementById("missy41").innerHTML ="<mark>sortalpha:</mark>" +" "+g; g.sort();
   document.getElementById("missy42").innerHTML ="<mark>alphabetically:</mark>" +" "+ g ;
   document.getElementById("missy43").innerHTML =
   "<mark>sortrev:</mark>" +" "+g;g.sort(); g.reverse();
   document.getElementById("missy44").innerHTML ="<mark>reverse:</mark>" +" "+ g ;
}
function test15() {
  let j = ['Missy', 'Erwin', 'Al', 'Princess','Brent','Bien','Zieg'];
  j.push(document.getElementById("pushy").value);
         // console.log(j);
document.getElementById("missy45").innerHTML =j.join(" ");
}
function test16() {
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction0);

document.getElementById("missy46").innerHTML = numbers2;

function myFunction0(value, index, array) {
  return value * 2;
}
}
function test17(){
  const numbers = [45, 4, 9, 16, 25,2,38];
  const overnumm = numbers.filter(myFunction);
  document.getElementById("missy47").innerHTML = overnumm;

  function myFunction(value, index, array) {
    return value > document.getElementById("numm").value ;
  }}
  function test18(){
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduceRight(myFunction3);
  
  document.getElementById("missy48").innerHTML = "The sum is " + sum;
  
  function myFunction3(total, value, index, array) {
    return total + value;
  }}
  function test19(){
  const numb = [15, 4, 9, 16, 10];
let someOver18 = numb.some(myFunction5);
document.getElementById("missy49").innerHTML = "Some over 18 is " + someOver18 +"["+numb+"]";
function myFunction5(value, index, array) {
  return value > 18;
}}
function test20(){
const numbe = [4, 9, 16, 25, 29];
let first = numbe.find(myFunction6);

document.getElementById("missy50").innerHTML = "First number over 18 is " + first+"["+numbe+"]";

function myFunction6(value, index, array) {
  return value > 18;
}}

/*function test9( m )
 { return (8-4) * (m-36);
  document.getElementById(missy12).innerHTML = test9(58);*/




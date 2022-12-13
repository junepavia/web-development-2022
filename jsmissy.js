
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

/*function test9( m )
 { return (8-4) * (m-36);
  document.getElementById(missy12).innerHTML = test9(58);*/




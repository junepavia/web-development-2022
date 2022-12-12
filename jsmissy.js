
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
    fullName: function() {
      return this.firstName + " " + this.lastName +" "
      + this.age +"y.o";
    }
  };
  document.getElementById("missy12").innerHTML = person.fullName();
}

/*function test9( m )
 { return (8-4) * (m-36);}
  document.getElementById(missy12).innerHTML = test9(58);*/




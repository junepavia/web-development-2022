
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
  


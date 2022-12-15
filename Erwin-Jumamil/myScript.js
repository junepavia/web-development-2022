function noreset(){
  let getValue= document.getElementById("num1");
  let getValue1= document.getElementById("num2");
        if (getValue.value !="" || getValue1.value !="") {
            getValue.value = "";
            getValue1.value ="";
        }
}
function answer(test){
  if (test == "+"){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML=(x + y).toFixed(4);
  } else if (test == "-"){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML=(x - y).toFixed(4);
  }else if (test == "*"){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML=(x * y).toFixed(4);
  }else if (test == "/"){
    let x = parseFloat(document.getElementById("num1").value);
    let y = parseFloat(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML=(x / y).toFixed(4);
    
  }
}
function myFunction4() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("test1").innerHTML ="<img src='"+x+"'style='width:100%' />";
  }
  function word(){
    let word =document.getElementById('word').value;
    document.getElementById('length').innerHTML=word.length;
    document.getElementById('sliced').innerHTML=word.slice(7,13);
    document.getElementById('substring').innerHTML=word.substring(7,13);
    document.getElementById('substr').innerHTML=word.substr(7,6);

}
function replace(){
  let text1 = document.getElementById("searchWord").value;
  let text = document.getElementById("replaced").innerHTML;
  document.getElementById("replaced").innerHTML =
  text.replace("The inputed sentence will be replaced",text1);
}
function locator(){
  let searchWord = document.getElementById("searchWord").value
  document.getElementById("indexof").innerHTML = searchWord.indexOf("locate");
  document.getElementById("lastindexof").innerHTML = searchWord.lastIndexOf("locate");
  document.getElementById("lastindexofError").innerHTML = searchWord.lastIndexOf("Erwin");
  document.getElementById("search").innerHTML = searchWord.search("locate");
  const myArr= searchWord.match("ocate");
  document.getElementById("match").innerHTML = myArr.length + " " + myArr;

}
function total(){
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let test1 = document.getElementById("test1").value;
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo2").innerHTML = html;
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
document.getElementById("demo1").innerHTML = total;
let firstName = "Erwin";
let lastName = "Rey";
let text = `Welcome ${firstName}, ${lastName}!`;
document.getElementById("demo").innerHTML = text;
}
const namelist = [];
function attendance(){
  let addname = document.getElementById("name").value;
  namelist.push(addname);
  let display = `<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FULL NAME</th>
    </tr>
  </thead>
  <tbody>`;
      for (const x of namelist) {
        let i=x.indexOf(namelist);
        display += `<tr>
                    <th scope="row">${i}</th>
                    <td>${x}</td>
                    </tr>`;
        }
    display+=`
            </tbody>
            </table>`;
  document.getElementById("anList").innerHTML=display;
}
  function deleted (){
    console.log(namelist)
    namelist.pop();
    let display = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">FULL NAME</th>
      </tr>
    </thead>
    <tbody>`;
        for (const x of namelist) {
          let i=1;
          display += `<tr>
                      <th scope="row">${i}</th>
                      <td>${x}</td>
                      </tr>`;
          }
      display+=`
              </tbody>
              </table>`;
    document.getElementById("anList").innerHTML=display;
}
const justiceLeague = ["Batman", "Superman", "Aquaman", "Flash"];
const marvel = ["Captain America", "Ironman", "Thor", "Hulk"];
document.getElementById("toString").innerHTML = justiceLeague.toString();
document.getElementById("join").innerHTML = justiceLeague.join(" ! ");
function insertHero(){
  let newHero = document.getElementById("newHero").value;
  // justiceLeague.push(newHero);
  // justiceLeague[0]=(newHero);//using index number
  justiceLeague[justiceLeague.length] = (newHero); // insert using length
  document.getElementById("join").innerHTML = justiceLeague.join(" @ ");
}
function deleteHero(){
  // justiceLeague.pop();
  delete justiceLeague[0];
  document.getElementById("join").innerHTML = justiceLeague.join(" # ");
}
function shiftHero(){
  justiceLeague.shift(); // Delete the first element
  document.getElementById("join").innerHTML = justiceLeague.join(" $ ");
}
function unShiftHero(){
  let newHero = document.getElementById("newHero").value;
  justiceLeague.unshift(newHero);// insert in the firtst index
  document.getElementById("join").innerHTML = justiceLeague.join(" % ");
}
const joinForce = justiceLeague.concat(marvel); 
document.getElementById("joinForce").innerHTML = joinForce;
function sortHero(){
  joinForce.sort();
  // joinForce.reverse();
  document.getElementById("joinForce").innerHTML = joinForce;
}
const numbers = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = numbers;
numbers.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = numbers;
document.getElementById("demo").innerHTML = numbers;  
function myFunction() {
  numbers.sort(function(){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = numbers;
}
numbers.sort(function(a, b){return a-b});
document.getElementById("demo5").innerHTML = numbers[0];
numbers.sort(function(a, b){return b-a});
document.getElementById("demo6").innerHTML = numbers[0];
document.getElementById("demo3").innerHTML = myArrayMax(numbers);
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
document.getElementById("demo7").innerHTML = myArrayMin(numbers);
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
const numberlist = [45, 4, 9, 16, 25];
document.getElementById("demo8").innerHTML = numberlist;
let txt = "";
numberlist.forEach(myFunction1);
document.getElementById("demo9").innerHTML = txt;
function myFunction1(value, index, array) {
  txt += value + "<br>"; 
}

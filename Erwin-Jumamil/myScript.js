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
    
  }else{
    document.getElementById("ans").innerHTML="You Entered invalid Operator";
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
const numberslist = [45, 4, 9, 16, 25];
const numbers2 = numberslist.map(arrayMap);
document.getElementById("arrayMap").innerHTML = numbers2;
function arrayMap(value, index, array) {
  return value * 2;
}
const over18 = numberslist.filter(arrayFilter);
document.getElementById("arrayFilter").innerHTML = over18;
function arrayFilter(value, index, array) {
  return value > 18;
}
let sum = numberslist.reduce(arrayReduce);
document.getElementById("arrayReduce").innerHTML = "The sum is " + sum;
function arrayReduce(total, value, index, array) {
  return total + value;
}
let sum1 = numberslist.reduceRight(arrayReduceRight);
document.getElementById("arrayReduceRight").innerHTML = "The sum is " + sum1;
function arrayReduceRight(total, value, index, array) {
  return total + value;
}
let someOver18 = numberslist.some(arraySome);
document.getElementById("arraySome").innerHTML = "Some over 18 is = " + someOver18;
function arraySome(value, index, array) {
  return value > 18;
}
const fruits = ["Apple[0]", "Orange[1]", "Apple[2]", "Mango[3]"];
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits1.indexOf("Apple");
document.getElementById("fruits").innerHTML = fruits;
document.getElementById("arrayIndexOf").innerHTML = "Apple is found in position " + position;
let position1 = fruits1.lastIndexOf("Apple");
document.getElementById("arrayLastOf").innerHTML = "Apple is found in position " + position1;
const numberCount = [4, 9, 16, 25, 29];
let first = numberCount.find(arrayFind);
document.getElementById("arrayFind").innerHTML = "First number over 18 is " + first;
document.getElementById("numbers").innerHTML = numberCount;
function arrayFind(value, index, array) {
  return value > 18;
}
document.getElementById("arrayFindIndex").innerHTML = "First number over 18 has index " 
+ numberCount.findIndex(arrayFindIndex);
function arrayFindIndex(value, index, array) {
  return value > 18;
}


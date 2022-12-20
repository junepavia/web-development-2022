let words = "miles"
const justiceLeague = ["Batman", "Superman", "Aquaman", "Flash"];
const marvel = ["Captain America", "Ironman", "Thor", "Hulk"];
let joinForce = [...words,...marvel,...justiceLeague];
document.getElementById("justiceLeague").innerHTML = justiceLeague;
document.getElementById("marvel").innerHTML = marvel;
document.getElementById("spreadOperator").innerHTML = joinForce;
let text = "";
for (let x of justiceLeague) {
let y = justiceLeague.indexOf(x)
	text += y+" "+ x + "<br>";
}
document.getElementById("forOfLoop").innerHTML = text;
let language = "Spider-Man";
let text2 = "";
for (let x of language) {
  text2 += x + "<br>";
}
document.getElementById("forOfLoop2").innerHTML = text2;
// Create a Map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  document.getElementById("arrayMap").innerHTML = fruits.get("apples");
  function getScores() {
    return [70, 80, 90, 100];
 }
 let scores = getScores();
 let  x = scores[0], 
      y = scores[1], 
      z = scores[2];
document.getElementById("score1").innerHTML = x;
document.getElementById("score2").innerHTML = y;
document.getElementById("score3").innerHTML = z;
let [a, b, c] = getScores();
document.getElementById("score4").innerHTML = a;
document.getElementById("score5").innerHTML = b;
document.getElementById("score6").innerHTML = c;
let [d, e ,...args] = getScores();
document.getElementById("score7").innerHTML = d;// 70
document.getElementById("score8").innerHTML = e;// 70
document.getElementById("score9").innerHTML = args;// 70
let f, g;
[f, g] = [10, 20];
document.getElementById("score10").innerHTML = f; // 10
document.getElementById("score11").innerHTML = g; // 20
let add = function (x, y) {
	return x + y;
};
document.getElementById("normalFunction").innerHTML = add(10,20); // 20
let addArrowFunction = (x, y) => x + y;
document.getElementById("arrowFunction").innerHTML = addArrowFunction(10,20); // 20
let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers); // [6,4,2]
let number = [4,2,6];
number.sort((a,b) => b - a);
console.log(number); // [6,4,2]

let myPromise = new Promise ((confirm, reject) =>{
let myfeeling = true;
  if(myfeeling == true){
    confirm('"I LOVE YOU"')
  }else{
    reject("Study First")
  }
})

myPromise.then((message) =>{
    document.getElementById("trueFeelings").innerHTML = 'My feelings is true '+ message;
}).catch((message) =>{
  document.getElementById("falseFeelings").innerHTML = 'Sorry '+ message;
})
let text1 ="Hello world, welcome to the universe.";
let text3 = Array.from("ERWINREY");
document.getElementById("text1").innerHTML = text1.includes("world");
document.getElementById("text2").innerHTML = text1.startsWith("Hello");
document.getElementById("text3").innerHTML = text1.endsWith(".");
document.getElementById("text4").innerHTML = text3;
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits1.keys();    
let words1 = "";
for (let x of keys) {
  words1 += x + "<br>";
}
document.getElementById("demo12").innerHTML = words1;
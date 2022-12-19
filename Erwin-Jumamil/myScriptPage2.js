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
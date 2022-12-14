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
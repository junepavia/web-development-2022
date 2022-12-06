
function subtraction(){
    var firstNo, secondNo, sum;
    firstNo=parseInt(document.getElementById("firstNo").value)
    secondNo=parseInt(document.getElementById("secondNo").value)
    sum = firstNo - secondNo;
    document.getElementById("operator").innerHTML= "-"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
    //document.write(sum);
     // alert(sum);
     //console.log(sum)
}

function multiply(){
    var firstNo, secondNo, sum;
    firstNo=parseInt(document.getElementById("firstNo").value)
    secondNo=parseInt(document.getElementById("secondNo").value)
    sum = firstNo * secondNo;
    document.getElementById("operator").innerHTML= "*"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
    //document.write(sum);
     // alert(sum);
     //console.log(sum)
}
function divide(){
    var firstNo, secondNo, sum;
    firstNo=parseInt(document.getElementById("firstNo").value)
    secondNo=parseInt(document.getElementById("secondNo").value)
    sum = firstNo / secondNo;
    document.getElementById("operator").innerHTML= "/"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
   // document.write(sum);
     //  alert(sum);
     //console.log(sum)
}
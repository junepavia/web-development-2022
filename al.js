function subtraction(){
    var firstno,secondno,sum;
    firstno=parseInt(document.getElementById("firstno").value)
    secondno=parseInt(document.getElementById("secondno").value)
    sum = firstno - secondno;
    document.getElementById("operator").innerHTML= "-"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
    //document.write(sum);
     // alert(sum);
     //console.log(sum)
}

function multiply(){
    var firstno,secondno,sum;
    firstno=parseInt(document.getElementById("firstno").value)
    secondno=parseInt(document.getElementById("secondno").value)
    sum = firstno * secondno;
    document.getElementById("operator").innerHTML= "*"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
    //document.write(sum);
     // alert(sum);
     //console.log(sum)
}
function divide(){
    var firstno,secondno,sum;
    firstno=parseInt(document.getElementById("firstno").value)
    secondno=parseInt(document.getElementById("secondno").value)
    sum = firstno / secondno;
    document.getElementById("operator").innerHTML= "/"
   //document.getElementById("sum").value=sum;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sum").style.color="white";
   // document.write(sum);
     //  alert(sum);
     //console.log(sum)
}
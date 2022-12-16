function popUp() {
    alert("BONJOUR!!!")}
  function over() {
     document.getElementById('over').style.backgroundColor='red';}            
  function out() {
      document.getElementById('over').style.backgroundColor="lime";}            
  function dclick() {
      document.getElementById("dbclick").innerHTML = "Surprise!!!";}
  function blurInput() {
      var x = document.getElementById("fname");
      x.value = x.value.toUpperCase();}
  function mouseDown(){
      document.getElementById('clk').innerHTML= "HELP"}
  function mouseUp(){
      document.getElementById('clk').innerHTML= "01001000 01000101 01001100 01010000"}
  function errorLoading(){
      alert("The program failed successfully!");}
  function docload(){
      alert("Welcome!");}
  function chkname(){
      var name,output;
      name=document.getElementById('name').value
      const owner="Al Christian";
      const owner1="al christian";
     if (name == owner){
          output = "Log in Successfully!";}
          else if(name==owner1){
              output= "Log in Successfully!";}
          else{
              output="INTRUDER ALERT!!!";}
          document.getElementById('logIn').innerHTML=output;
       }
  function checkLength(){
      var string,start,end;
      string=document.getElementById('string').value
      start=document.getElementById('start').value
      end=document.getElementById('end').value
      part=string.slice(start,end);
      document.getElementById('lngth').innerHTML=string.length;
      document.getElementById('partOfSent').innerHTML=part;
          }

  function change(){
      var input1, newInput1, replaced,newSent; 
      input1=document.getElementById('input').value
      newInput1=document.getElementById('newInput').value
      replaced=document.getElementById('replaced').value
      newSent=input1.replace(newInput1,replaced);//new sentence
      document.getElementById('rep').innerHTML =newSent;
      document.getElementById('newInput1').innerHTML=replaced;//used to display
      document.getElementById('ndx').innerHTML = newSent.indexOf(replaced);
      document.getElementById('input1').innerHTML=newInput1;//used to display
      document.getElementById('lastndx').innerHTML = newSent.lastIndexOf(newInput1);
      document.getElementById('srchWord').innerHTML=newInput1;//used to display
      document.getElementById('srchWord1').innerHTML = input1.search(/newInput1/i);
      }

      function mtchMethod(){
          var mtch, srchMatch;
          const vowel=
          mtch=document.getElementById('mtch').value;
          srchMatch=document.getElementById('srchMatch').value;
          
          if(mtch.match(srchMatch)){
              document.getElementById('exist').innerHTML="Word Exist";
          }
          else{
              document.getElementById('exist').innerHTML="Word Does not Exist"
          }
          document.getElementById('tru').innerHTML=mtch.includes(srchMatch);
      }

      function seWith(){
          var sWith, eWith, paraWith;
          sWith=document.getElementById('sWith').value;
          eWith=document.getElementById('eWith').value;
          paraWith=document.getElementById('paraWith').value;

          document.getElementById("stWith").innerHTML = paraWith.startsWith(sWith,4);
          document.getElementById("enWith").innerHTML = paraWith.endsWith(eWith);
          
      }
      function integerExample(){
        let x =123456789012345899987;
        let y=0.2;
        let z=0.1;
        let t=y+z;
        let str="20";
        let str1="10";
        let str2="Al";
        //JavaScript strings can have numeric content:
        //JavaScript will try to convert strings to numbers in all numeric operations:
        document.getElementById("int").innerHTML=x;
        document.getElementById("flt").innerHTML=t;
        document.getElementById("str").innerHTML=str+y;
        document.getElementById("cncat").innerHTML=str+str1;
        document.getElementById("nan").innerHTML=str1*str2;
        document.getElementById("typ").innerHTML=typeof str;
      }
      function bigInt(){
        let x = 9999999999999999;
        let y = BigInt("9999999999999999");
        let z = 9999999999999999n;
        document.getElementById("bgint").innerHTML = 
        x + "<br>" + y +"<br>" + z;
      }
      function numMethods(){
        let no=5;
        let stri=no.toString();
        let exp = 3.14157;
        document.getElementById('toStr').innerHTML=" no is a "+ typeof no +"<br>"+"stri is a " + typeof stri;
        document.getElementById("toExp").innerHTML =
        "To Exponential values " + "<br>" +
        exp.toExponential(1) + "<br>" + 
        exp.toExponential(2) + "<br>" + 
        exp.toExponential(4) + "<br>" + 
        exp.toExponential(6);
        
        document.getElementById("toFix").innerHTML =
        "To Fix values " + "<br>" +
        exp.toFixed(1) + "<br>" +
        exp.toFixed(2) + "<br>" +
        exp.toFixed(4) + "<br>" +
        exp.toFixed(6);
//Difference is toFixed() count starts after decimal point but toPrecision() count starts before decimal point.
        document.getElementById("toPrec").innerHTML = 
        "To Precision values " + "<br>" +
        exp.toPrecision(1) + "<br>" +
        exp.toPrecision(2) + "<br>" +
        exp.toPrecision(4) + "<br>" +
        exp.toPrecision(6);  
        

      }
      function intAndfloat(){
        var no=document.getElementById("integer").value;
        var parsNo=parseInt(document.getElementById("integer").value);
        var fltNo=parseFloat(document.getElementById("integer").value);

        document.getElementById("ans").innerHTML = 
        no +" "+typeof no + "<br>" + 
        parsNo + " " + typeof parsNo + "<br>" + fltNo + " " + typeof fltNo;
            }
        
    const person=["Juan","Al","Stan","Lee","Peter","Lois","Chris"];
    document.getElementById('displayArr').innerHTML=person+ "<br>" + "The length of the array is "+ person.length ;
    
     
      function addElem(){
        let newElem=document.getElementById("newElem").value;
        person.push(newElem);
        document.getElementById('newArr').innerHTML=person+ "<br>" + "The length of the array is "+ person.length +" <br>" +person.sort()+" <br>" +person.reverse();
      }
      function  noElem(){
        let numElem=document.getElementById("showElem").value;
        person.length=numElem;
        document.getElementById('nArr').innerHTML=person+ "<br>" + "The length of the array is "+ person.length;
      }
      function ind(){
        //accessing elements of array using number indices
        const person1=["Juan","Al","Stan","Lee","Peter","Lois","Chris"];
        let dplay="";
        
        for( let i=0; i<person1.length; i++){
            dplay +=person1[i] +"<br>"
            document.getElementById("personDisplay").innerHTML =dplay;
        }
      }
      
      function conv()
      {
        const Names = ["Peter", "Jones", "Stewie", "Brian"];
        document.getElementById("cn").innerHTML =Names.toString();
        document.getElementById("jn").innerHTML = Names.join(" and ");
        delLast=Names.pop();
        document.getElementById("na").innerHTML = Names;
        document.getElementById("ne").innerHTML = delLast;
        delFirst=Names.shift();
        document.getElementById("shft").innerHTML = Names;
        document.getElementById("shft1").innerHTML = delFirst;
        Names.unshift("Quagmire");
        document.getElementById("ushft").innerHTML = Names;
        

      }
      function concatStr(){
    const animals=["Dog","Cat","Mouse"];
    const fruits=["Durian","Mango","Pineapple"];
    const combined = animals.concat(fruits);
    
    document.getElementById("mix").innerHTML = combined;
    animals.splice(0,2, "Cow", "Rooster");
    document.getElementById("anmls").innerHTML = animals;
    document.getElementById("demo1").innerHTML = fruits;
    const slce = combined.slice(2,5);
    document.getElementById("demo").innerHTML = slce;
     }   
//search element of array
     const phones=["Samsung","Huawei","Lenovo","Iphone","Nokia","LG", "Blackberry","Alcatel", "Xiaomi", "Oppo", "ROG", "Sony"];
     document.getElementById('dElement').innerHTML=phones;
     document.getElementById('expArr').innerHTML=phones;
     function  searchElement(){
      let userinput=document.getElementById('userinput').value;
     
      for(let i=0; i<phones.length; i++){
        const name=phones[i];   
        if(name.toLowerCase()===userinput){
        document.getElementById("typeIdhere").innerHTML = "Element exist in index " + i;}
     }
    }
    //foreach
    
    function  frEach(){
      let txt="";  //current value(required), (optional)index at array
      phones.forEach(function scanArr(item,index){
        txt +="Index: "+index+"<mark>"+item+"</mark>" +"<br>";});
      document.getElementById("displayHere").innerHTML = txt;
        }
        //map
    function  mapFunc(){
      const num=["10","30","40","70","110"]
      const newNum=num.map(function makeArr(digit){return digit*digit+2;})
      document.getElementById("displayMap1").innerHTML = num;
      document.getElementById("displayMap").innerHTML = newNum;
        }
    function filterFunc(){
      const num1=[10,30,41,75,103];
      const ans=num1.filter(fltr);
      document.getElementById("displayFilter").innerHTML = ans;
      function fltr(value){
        return value <40;
      }
    }
    //reduce
    function reduc(){
    const num2=[500,30,112,5,203,112,112,112];
    let redu=num2.reduce(rReduc);
    let Rredu=num2.reduceRight(rReduc);
    let evrNum=num2.every(evry);
    let someNum=num2.some(evry);
    let findNum=num2.find(fnd);
    let ndex=num2.indexOf(112);
    let Lndex=num2.lastIndexOf(112);
    document.getElementById('displayReduce').innerHTML= "Total is "+redu;
    document.getElementById('displayReduceright').innerHTML= "Total is "+Rredu;
    document.getElementById('displayEvery').innerHTML= evrNum;
    document.getElementById('displaySome').innerHTML= someNum;
    document.getElementById('displayFind').innerHTML= findNum;
    document.getElementById('displayIndex').innerHTML= ndex;
    document.getElementById('displaylastIndex').innerHTML= Lndex;
    function rReduc(total, value){
      return total - value;
    }
    function evry(value){
        return value >112;
    }
    function fnd(number){
      return number <30;
    }
  }
   //normal function
   /*function guessNum (){
      let guess=document.getElementById('guess').value;
      randm=Math.floor(Math.random()*10);
      
      if(guess==randm)
      {
        alert("You Guessed it Right!");
      }
      else{
        alert("Wrong! The number was " +randm)
      }
   }*/

   //arrow function

   let guess=document.getElementById('guess').value;
   console.log(guess);
   let randm=Math.floor(Math.random()*10);
   let guessNum = (guess, randm) => {
    console.log(randm);
    console.log(guess);
      if (randm==guess){
        console.log(randm,"random");
        console.log(guess,"guess");
      return alert(`${randm} is right`);
    
    }

      else
      return alert("Wrong! The number was ");
    }
   


   //for/ofloop
   
     
     /*function  searchElement1(){
      const phones1=["Samsung","Huawei","Lenovo","Iphone","Nokia","LG", "Blackberry","Alcatel", "Xiaomi", "Oppo", "ROG", "Sony"];
      let userinput=document.getElementById('userinput1').value;
      let brand="";
      for(let i of phones1){
        brand=i;  
        if(brand.toLowerCase()===userinput1){
        document.getElementById("typeIdhere").innerHTML = "Element exist";}
     }
    }*/
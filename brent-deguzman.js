var x = myFunction(8, 6); // a=8 * b=6
      document.getElementById("func1").innerHTML = x;
      //use to display the data
      function myFunction(a, b) {
        //statements that performs a task or calculates a value
        return a * b; // return will be x ang give the product
      }
      function toFahrenheit(f) {
        return (30 * 9) / 5 + 32;
      } // Convertion Celsius to Fahrentheit
      document.getElementById("func2").innerHTML =
        "30 Degree Celsius is equal to " +
        toFahrenheit() +
        " degree Fahrentheit";
      // () is use to only show the result
      const person = {
        firstName: "John",
        lastName: "Wick",
        id: "[Excomminicado]",
        fullName: function () {
          return this.firstName + " " + this.lastName + " " + this.id;
        }, //this --> use to call content in same group
      };
      document.getElementById("obj1").innerHTML = person.fullName();
      function displayDate() {
        document.getElementById("event").innerHTML = Date();
      }
      let text = "Galaxy the Dog"; // string - sequence of characters
      document.getElementById("string").innerHTML = text;
      let text2 = "Dori the Cat"; // single or double quote is accepted
      document.getElementById("string2").innerHTML = text2;
      let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZalphabet";
      document.getElementById("string3").innerHTML = text3.length;
      let p = "String"; // declaring using new will create on object
      let q = new String("String"); // q is an object
      document.getElementById("string4").innerHTML = p === q;
      // avoid using new as keyword it will slow down the page
      let text4 = "Elephant, Raccoon, Tiger";
      let part = text4.slice(10, 17); //Slice Method can use - value[-5]
      document.getElementById("string5").innerHTML = part;
      let str = "Elephant, Raccoon, Tiger"; // substring cut on 19 then take 4 string
      document.getElementById("string6").innerHTML = str.substr(19, 5);
      function functionreplace() {
        //text.replace is case sensitive
        let text5 = document.getElementById("string7").innerHTML;
        document.getElementById("string7").innerHTML = text5.replace(
          /MELON/i, // switch to /MELON/i
          "Banana"
        );
      }
      function functioncase() {
        let text = document.getElementById("string8").innerHTML;
        //document.getElementById("string8").innerHTML = text.toUpperCase();
        document.getElementById("string8").innerHTML = text.toLowerCase();
      }
      let lorem = "wap"; //padding string
      //lorem = lorem.padStart(12, "badu");
      lorem = lorem.padEnd(12, "badu");
      document.getElementById("string9").innerHTML = lorem;
      const mapa = "One Punch Man";
      document.getElementById("string10").innerHTML = mapa.charAt(0);
      document.getElementById("string11").innerHTML = mapa.charCodeAt(2);
      const sample = "This text is for string search text fish";
      document.getElementById("strings1").innerHTML = sample.indexOf("for");
      sample.lastIndexOf("text");
      const match = sample.match(/is/gi);
      document.getElementById("strings2").innerHTML =
        match.length + " " + match;
      //gi = global, case-insensitive
      const match1 = sample.matchAll(/text/gi);
      document.getElementById("strings3").innerHTML = Array.from(match1);
      //Array.from() - create a new array instance from a given array
      document.getElementById("strings4").innerHTML = sample.includes("string");
      document.getElementById("strings5").innerHTML = sample.startsWith("This");
      document.getElementById("strings6").innerHTML = sample.endsWith("fish");
      let templi = `What's up World`;
      document.getElementById("temp1").innerHTML = templi;
      let templit = `Hello there my name is "Brent" `;
      document.getElementById("temp2").innerHTML = templit;
      let templa = `The slow
                  red turtle
                  rolls over
                  the quick cat`;
      document.getElementById("temp3").innerHTML = templa;
      let firstName = "Galaxy";
      let lastName = "da Dog";
      let templat = `What's up ${firstName}, ${lastName}!`;
      document.getElementById("temp4").innerHTML = templat;
      let price = 20;
      let VAT = 0.345;
      let disc = 2;
      let total = `Total: ${((price * (1 + VAT)) / disc).toFixed(5)}`;
      //toFixed () converts a number to a string
      document.getElementById("temp5").innerHTML = total;

      //Numbers
      let f = 3.1416;
      document.getElementById("numb").innerHTML = f;
      let g = 42e3; //Decimal Places
      let h = 42e-3;
      document.getElementById("numb1").innerHTML = g + "<br>" + h;
      let j = 999999999999999;
      document.getElementById("numb2").innerHTML = j;
      let k = 30; //k = "30"
      let l = 25; //l = "25";
      let m = k + l; //+ operator to concatenate the strings
      document.getElementById("numb3").innerHTML = m;
      // subtract, divide, and multiply will convert string
      document.getElementById("numb4").innerHTML = 2 * "Two";
      //number and non-numeric string
      let n = NaN;
      document.getElementById("numb5").innerHTML = typeof n;
      document.getElementById("numb6").innerHTML = typeof Infinity;
      let dizNumb = 5;
      let txt = "";
      while (dizNumb != Infinity) {
        dizNumb = dizNumb * dizNumb;
        txt = txt + dizNumb + "<br>";
      }
      document.getElementById("numb7").innerHTML = txt;
      let r = 1 / 0;
      let s = -2 / 0;
      document.getElementById("numb8").innerHTML = r + "<br>" + s;
      document.getElementById("numb9").innerHTML = BigInt("12345678901234599");
      let t = 9007199254740996 == 9007199254740997;
      document.getElementById("numb0").innerHTML = t;
      let u = Number.MIN_SAFE_INTEGER;
      document.getElementById("numb01").innerHTML = u;
      document.getElementById("numb02").innerHTML =
        Number.isInteger(55) + "<br>" + Number.isInteger(55.1);
      //Fraction and Decimal are not integer
      let aa = 420;
      document.getElementById("numbet").innerHTML =
        aa.toString() +
        "<br>" +
        (420).toString() +
        "<br>" +
        (400 + 20).toString();
      let ab = 2.456;
      document.getElementById("numbet1").innerHTML =
        ab.toExponential() +
        "<br>" +
        ab.toExponential(2) +
        "<br>" +
        ab.toExponential(4);
      document.getElementById("numbet2").innerHTML =
        ab.toFixed(0) +
        "<br>" +
        ab.toFixed(2) +
        "<br>" +
        ab.toFixed(4) +
        "<br>";
      document.getElementById("numbet3").innerHTML =
        ab.toPrecision() +
        "<br>" +
        ab.toPrecision(2) +
        "<br>" +
        ab.toPrecision(4) +
        "<br>";
      let ac = Number.EPSILON;
      document.getElementById("numpro1").innerHTML = ac;
      let ad = Number.MIN_VALUE;
      document.getElementById("numpro2").innerHTML = ad;
      //3Ways to Access Object Properties
      const car = {
        name: "Toyota",
        some: "Ford",
        kotse: "Honda",
        type: {
          model: "Avanza",
          model1: "Fortuner",
          model3: "HI-ACE",
        },
      };
      document.getElementById("ways1").innerHTML = car.type.model1;
      //expression.identifier
      const placeholder = { lorem: "ipsum", lurem: "dolor" };
      document.getElementById("ways2").innerHTML = placeholder["lorem"];
      const aboutMe = {
        name: "Brent",
        position: "Second",
        birthDate: "April 11, 1995",
      };
      const { name, position, birthDate } = aboutMe;
      console.log(name);
      console.log(position);
      console.log(birthDate);
      document.getElementById("ways3").innerHTML = `position ${birthDate}`;
      //const { identifier } = expression; you can extract as many properties as you'd like
      
      //Arrays
      const Toyota = ["Avanza", "Veloz", "Innova", "Fortuner"];
      document.getElementById("array").innerHTML = Toyota;
      //array_name = ["sample0" , "sample1"]
      const Ford = [];
        Ford[0]= "Everest";
        Ford[1]= "Ranger";
        Ford[2]= "Raptor";
      document.getElementById("array1").innerHTML = Ford;
      const Honda = new Array("City", "Civic", "Odyssey");
      Honda[0] = "CR-V"; //Replacing an Array Element
      document.getElementById("array2").innerHTML = Honda;
      document.getElementById("array3").innerHTML = Ford[2];
      document.getElementById("array4").innerHTML = typeof Toyota;
      const Cars = [];
        Cars[0]= Toyota;
        Cars[1]= Ford;
        Cars[2]= Honda[2]
      document.getElementById("array5").innerHTML = Cars;
      document.getElementById("array6").innerHTML = Toyota.length;
      Toyota.sort();
      document.getElementById("array7").innerHTML = Toyota;
      let forf = "<ul>";
        Ford.forEach(forfunction);
        forf += "</ul>";
      document.getElementById("array8").innerHTML = forf;
      function forfunction(value) {
        forf += "<li>" + value + "</li>";
      } 
      const Mitsubishi = ["Mirage", "Xpander", "Montero", "Strada"]
      Mitsubishi.push("L300") //Add element in array
      document.getElementById("array9").innerHTML = Mitsubishi;
      const Chevrolet = ["Camaro", "Trailblazer", "Spark"];
      Chevrolet[5] = "Corvette";
      let chevi = Chevrolet.length;
      let chevitext = "";
      for (i = 0; i < chevi; i++) {// ++ increment one by one
        chevitext += Chevrolet[i] + "<br>";
      }
      document.getElementById("array0").innerHTML = chevitext;
      const Sample = new Array (30); // const Sample = [30]
      document.getElementById("arrayer").innerHTML = Sample;
      document.getElementById("arrayer1").innerHTML = Array.isArray(Toyota); 
      //document.getElementById("arrayer1").innerHTML = Toyota instanceof Array;
      //typeof returns string while instance of return boolean
      document.getElementById("arrmet").innerHTML = Honda.join(" @ ");
      //to specify seperator
      const BMW = ["X8", "iX", "M850", "Z4 M40i", "M2 Competition"];
      BMW.pop()//remove last element | switch innerHTML
      document.getElementById("arrmet1").innerHTML = BMW;
      document.getElementById("arrmet2").innerHTML = BMW.push("M5");
      const Ducati = ["Diavel", "Panigale", "Streetfighter", "Multistrada"];
      Ducati.shift(); //remove first element
      document.getElementById("arrmet3").innerHTML = Ducati;
      Ducati.unshift("Supersport"); // Add new element in beginning
      document.getElementById("arrmet4").innerHTML = Ducati;
      delete Ducati[1]; // Delete element on the index
      document.getElementById("arrmet5").innerHTML = Ducati[1];
      const CarNMotor = BMW.concat(Ducati);
      document.getElementById("arrmet6").innerHTML = CarNMotor;
      const Berry = ["Rasp", "Blue", "Goji"]; //splice by lenght not index
      Berry.splice(1, 0, "Cloud", "Straw"); // parameters (where to add, how many to be remove after)
      document.getElementById("arrmet7").innerHTML = Berry;
      const Reddish = Berry.slice(2); 
      // Slice 2 element out of array and form new but does not change anything from source array
      document.getElementById("arrmet8").innerHTML = Berry + "<br><br>" + Reddish;
      Reddish.sort();
      Reddish.reverse();//sort from last alphabet
      document.getElementById("arsort").innerHTML = Reddish;
      const numeric = [1, -2, 2, 3, 0, -1];
      document.getElementById("arsort1").innerHTML = numeric;
      //less than 0, equal to 0, greater than 0
      numeric.sort(function(a, b){return a - b}); //compare function a[smaller] b[larger]
      document.getElementById("arsort2").innerHTML = numeric;

      
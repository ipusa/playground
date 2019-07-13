//input number is 6

//celsiuis button is checked, explain how code runs
console.log("github")

function myFunc() {
    var input = document.getElementById("textfield").value;
    var radios = document.getElementsByName('temp');
    console.log(radios, "radios")
    console.log(document.getElementById("textfield"))

    for (var i = 0; i < radios.length; i++){
      if (radios[i].checked && radios[i].value === "Fahrenheit"){
        // do whatever you want with the checked radio

          // answerF = (input+32) / 5/9
        console.log(radios[i].value);
        document.getElementById("answerfield").value = input;
        // only one radio can be logically checked, don't check the rest
      } else if (radios[i].checked && radios[i].value === "Celcius"){
          // answerC = (input -32) x 5/9
        console.log("Teddy's correct answer");
        document.getElementById("answerfield").value = input;
      }
    }


  }
  //myFunc()
  //(32°F − 32) × 5/9 = 0°C

  //on click function works
  //on click function echoes input 
  //create radio button for c/f
  //create anwser field and assign class
  //get radio javascript 
  //put awnser in field 
  //do math based on input field 
  //Create single column for form input field using flex box/remove HTML break 
  //  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  // write function generatePassword, needs to return a string
  function generatePassword () {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = letters.map(element => {
      return element.toUpperCase();
    }); // created this function to turn letter uppercase, tried: letter.toUpperCase but it was not accepting it
    var numbers = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    var list = [] // this is where the characters that make up the password will be added to
    var noSelection = []

    // to define length of password
    var numOfCharacters = prompt("How many characters would you like to include in your password? Please enter at leaset 8 and no more than 128 characters.");

    // will cancel prompt if left blank
    if (numOfCharacters === "") {
      
      return "No Password Generated" 
    }


    //if(Object.values(numOfCharacters) !== "number" ) {
      
     // alert ("The number of characters entered is not an option. \nPlease enter a different number of characters.");
     // return "No Password Generated"
    //}



    // will tell user to enter new number if a 0 or number greater than 128 is entered
     if (numOfCharacters < 8 || numOfCharacters > 128) {
      alert ("The number of characters entered is not an option. \nPlease enter a different number of characters.")
      return "No Password Generated"
      
    }


    //the following will ask to confirm to include in password criteria.
    // nothing extra needed for false, simply means not to include in password
    else {
      var lowerCase = confirm("Click OK if you would like to include lowercase letters.");
      if (lowerCase === true) {
        list = list.concat(letters);
      }
        if (lowerCase === false) {
          noSelection = noSelection.concat(letters);
        }

      var upper = confirm("Click OK if you would like to include uppercase letters.");
      if (upper === true) {
        list = list.concat(upperCase);
      }
        if (upper === false) {
          noSelection = noSelection.concat(upper);
        }


      var numeric = confirm("Click OK if you would like to include numeric characters.");
      if (numeric === true) {
        list = list.concat(numbers);
      }
        if (numeric === false) {
          noSelection = noSelection.concat(numeric);
        }

      var specials = confirm("Click OK if you would like to include special characters in your password.");
      if (specials === true) {
        list = list.concat(specialChar);
      }
        if (specials === false){
          noSelection = noSelection.concat(specials);
        }

        if (noSelection = false) {
          return "Please make a selection for password."
        }


      var charList = []

      // loop is needed to repeat a random selection of characters
      // it will be repeated based on the input from "numOfCharacters" prompt
      for (var i = 0; i < numOfCharacters; i++) {
    
        var index = Math.floor(Math.random() * list.length); //this creates a random number
        var char = list [index] 

        charList = charList + char
  }

      return charList
      

    }
    
  }
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






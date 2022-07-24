// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  // write function generatePassword, needs to return a string
  function generatePassword () {

    var numOfCharacters = prompt("How many characters would you like to include in your password? At leaset 8 and no more than 128 characters.");

    // if (numOfCharacters === null) {
     // return;
  
   // }

   var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var numbers = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
   var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]




    if (numOfCharacters < 8 || numOfCharacters > 128) {
      alert ("Change number of characters.")
    }

    else {


      var lowerCase = confirm("Click OK if you would like to include lowercase characters.");

      var upperCase = confirm("Click OK if you would like to include uppercase characters.")
      var numbers = confirm("Click OK if you would like to include numeric characters.")
      var specialCharacters = confirm("Click OK if you would like to include special characters in your password.");













      var index = Math.floor(Math.random() * numOfCharacters);
     // var 
    }
    


    




  


   





    

    

   
    
    // var answer = prompt("How many characters would you like to include in your password?"); //enter a number
    //var answer = confirm("Click OK if you would like to include lowercase characters."); // true or false
    //var answer = confirm("Click OK if you would like to include uppercase characters."); // true or false

    //var answer = confirm("Click OK if you would like to include numeric characters."); // true or false

   // var answer = confirm("Click OK if you would like to include special characters in your password.");


  
  }
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//user clicks button asks for length, uppercase, 
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
// I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



function generatePassword(){
    var passwordLength = parseInt (prompt  ("Pick password length"))

    if (passwordLength < 8 || passwordLength > 128){

        alert ("Please enter password length between 8 and 128 characters")
        return 
    } 
    
    var uppercaseLetter = confirm ("Do you want uppercase characters? ")
    
    var lowercaseLetter = confirm ("Do you want lower case characters?")

    var specialCharacters = confirm ("Do you want special characters?")

    var numericCharacters = confirm ("Do you want numbers?")

    if (!uppercaseLetter && !lowercaseLetter && !specialCharacters && !numericCharacters) {

        alert ("Please choose one speical character option!")
        return 

    }

    return "password"



}






    



    //TODO: your code goes here
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  
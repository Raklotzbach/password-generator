// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "!@#$%^&*()", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var passwordList = "";
var passwordLength = "";

// Write password to the #password input
function generatePassword() {
  // placed as local scope to clear password as generatePassword begins
  var password = "";

  // ask user questions
  question1 = prompt("Please choose the number of characters between 8 and 128.");
  if (question1 <8 || question1 >128) {
    alert("Please choose a numerical length between 8 and 128 characters.");
    writePassword();
  } else {
    passwordLength = question1;
    question2 = confirm("Would you like to include lowercase letters? Click ok if so.");
    question3 = confirm("Would you like to include uppercase letters?  Click ok if so.");
    question4 = confirm("Would you like to include a number?  Click ok if so.");
    question5 = confirm("Would you like to include a special character?  Click ok if so.");
  if (question2 === false && question3 === false && question4 === false && question5 === false) {
    alert("Please select at least one parameter.");
    writePassword();
  }
}

// evaluating user answers for creating passWord list
  if (question2 == true) {
       passwordList = passwordList += characters[1]
    }
  if (question3 == true) {
       passwordList = passwordList += characters[3]
    }
  if (question4 == true) {
       passwordList = passwordList += characters[0]
      }
  if (question5 == true) {
       passwordList = passwordList += characters[2]
      }

  //  generating the random password
  for (let i = 0; i < passwordLength; i++) {
  var newNumber = Math.floor(Math.random() * passwordList.length)
    var newChar = passwordList[newNumber]
    password += newChar
  }
  return password

}


function writePassword() {
  // telling where the password will be placed within the HTML
  var passwordText = document.querySelector("#password"); 

  // set password text to an empty string
  passwordText.value = "";

  // starting the generatePassword function
  var password = generatePassword();
  
  


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
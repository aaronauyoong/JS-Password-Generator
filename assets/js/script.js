// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variables and arrays to be used in password generator
let charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let charNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "<", ">", "~", "[", "]", "|", "'", "?", ";", ":"]

// Empty arrays created for password generation
let caseArray = []
let passwordArray = []

// Function to generate password
function generatePassword() {

  let passwordLength=parseInt(prompt("Please indicate desired length of password. The password length cannot be less than 8 or more than 128 characters.", ""));
  
  // Scenario if user does not select a numerical value for password length between 8 and 128, used a while loop
  if(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
    alert("Please input a numerical value that is more than 8 and less than 128");
    passwordLength=parseInt(prompt("Please indicate desired length of password. The password length cannot be less than 8 or more than 128 characters."))
  } 

  // Declare each password criteria as boolean variables, prompts require user's answer to proceed
  let useLowerCase = confirm("Do you want to include lowercase characters?");
  let useUpperCase = confirm("Do you want to include uppercase characters?");
  let useNumeric = confirm("Do you want to include numeric characters?");
  let useSpecial = confirm("Do you want to include special characters?");

  // Scenario if user does not answer any of the prompts
  if (!useLowerCase && !useUpperCase && !useNumeric && !useSpecial) {
    window.alert("Please ensure you select AT LEAST one type of character criteria");
    useLowerCase = confirm("Do you want to include lowercase characters?");
    useUpperCase = confirm("Do you want to include uppercase characters?");
    useNumeric = confirm("Do you want to include numeric characters?");
    useSpecial = confirm("Do you want to include special characters?");
  }
  
  // Depending on user choice, will concatenate (a pure function instead of impure function) values from selected arrays.
  if (useLowerCase){
  caseArray = caseArray.concat(charLowercase);
  }

  if (useUpperCase){
  caseArray = caseArray.concat(charUppercase)
  }

  if (useNumeric){
  caseArray = caseArray.concat(charNumeric)
  }

  if (useSpecial){
  caseArray = caseArray.concat(charSpecial)
  }

  console.log(caseArray)

  // Created a loop to generate password by combining answers/selections from concatenating caseArray above
  for (let index = 0; index < passwordLength; index++) {

    passwordArray.push(caseArray[Math.floor(Math.random() * caseArray.length)]);

  }

  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

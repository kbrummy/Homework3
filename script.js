// Assignment Code
// Variables
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specChar = ['!','@','#','$','%','^','&','*','?','~'];
var numberChars = ['0','1','2','3','4','5','6','7','8','9'];

//End Variables

function passwordChoices() {
  var pwLength = parseInt(
    prompt("How many characters would you like your password to contain?"));


  if (pwLength < 8) {
    alert("Password must have at least 8 characters.");
    return;
  } else if (pwLength > 126) {
    alert("Password must be no longer than 126 characters.");
    return;
  } else {
    alert("Great! Let's continue.");
  }

  var doYouWantSpecial = confirm (
    "Do you want to include special characters?");

  var doYouWantNumbers = confirm (
    "Do you want to include numbers?");

  var doYouWantLower = confirm (
    "Do you want to include lowercase letters?");

  var doYouWantUpper = confirm (
    "Do you want to include uppercase letters?");

  if (doYouWantSpecial === false && doYouWantNumbers === false && doYouWantLower === false && doYouWantUpper === false) {
    alert("Must select at least one.");
    return;
  }
}

function generatePassword() {
  
}

passwordChoices();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







  






// Assignment Code
// Variables
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//End Variables

//function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  //conditional statement to check if password length is a number. Prompts end if this evaluates false.
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number.");
    return;
  }

  if (length < 8 || length > 128) {
    alert("Password must have at between 8-128 characters.");
    return;
  }

  var hasLowerCasedCharacters = confirm(
    "Do you want to include lowercase letters?"
  );
  var hasUpperCasedCharacters = confirm(
    "Do you want to include uppercase letters?"
  );
  var hasNumericCharacters = confirm("Do you want to include numbers?");
  var hasSpecialCharacters = confirm(
    "Do you want to include special characters?"
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("Must select at least one.");
    return;
  }

  //object to store user input
  var passwordOptions = {
    length: length,
    lowercase: hasLowerCasedCharacters,
    uppercase: hasUpperCasedCharacters,
    numeric: hasNumericCharacters,
    special: hasSpecialCharacters,
  };

  return passwordOptions;
}

//function to generate password with user input
function generatePassword() {
  var passwordCriteria = getPasswordOptions();
  var passwordArray = [];
  var password = [];
  if (passwordCriteria.lowercase === true) {
    passwordArray = passwordArray.concat(lowerCasedCharacters);
  }
  if (passwordCriteria.uppercase === true) {
    passwordArray = passwordArray.concat(upperCasedCharacters);
  }
  if (passwordCriteria.numeric === true) {
    passwordArray = passwordArray.concat(numericCharacters);
  }
  if (passwordCriteria.special === true) {
    passwordArray = passwordArray.concat(specialCharacters);
  }

  //for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the resul variable
  for (var i = 0; i < passwordCriteria.length; i++) {
    password.push(
      passwordArray[Math.floor(Math.random() * passwordArray.length)]
    );
  }
  return password.join("");
}

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

// Assignment code here

// Password Variable:
var passwordLength= "";

// Create a user prompt to ask for length of password that must be >8 and <128 characters
while (passwordLength === "" || passwordLength === null ) {
  passwordLength = prompt("How long would you like your password to be? Must be at least 8 characters");
};

console.log(passwordLength);

// Create an If/else loop to prompt user for length of password until a correct value is entered
if (passwordLength < 8) {
  alert("Your password must be between 8 and 128 characters. Please try again");
  
} else if (passwordLength > 128) {
  alert("Your password must be between 8 and 128 characters. Please try again");
  
}


// Ask user what types of characters they would like to use in their password

// Possible Password values
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "!@#$%^&*()_+";

// Add possible password variables into an array object possibleValues

var possibleValues = {
  upperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerChars: "abcdefghijklmnopqrstuvwxyz",
  numberChars: "0123456789",
  specialChars: "!@#$%^&*()_+",
};

// Add function to add possible password values to possibleValues object
var generateRandomPassword = () => {
  var randomPassword = "";
}



// Create a For Loop to iterate through the array of possibleValues object


// Use a math.random object to randomize the value selections from the possibleValues object and return the result.



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

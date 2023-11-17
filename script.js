//Declaration of variables and arrays

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                  
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=']; 

let character;

let index;

let password = [];

//Initial prompt requesting user enter the number of desired characters in the password.

const button = document.querySelector("button");

button.addEventListener("click", function() {
  const userLength = prompt("Enter character length. (Must be at least 8 and not more than 128.): ");
  console.log(userLength);
  
  //Prompt asking if user wants to include lowercase characters.

  var userLowercase = window.prompt("Would you like to include lowercase characters? (Y/N):");

  userLowercase = userLowercase.toUpperCase();

 //Prompt asking if user wants to include uppercase characters.

  var userUppercase = window.prompt("Would you like to include uppercase characters? (Y/N):");

  userUppercase = userUppercase.toUpperCase();
  
//Prompt asking if user wants to include numeric characters.

  var userNumeric = window.prompt("Would you like to include numeric characters? (Y/N):");

  userNumeric = userNumeric.toUpperCase();
  
//Prompt asking if user wants to include special characters.

  var userSpecial = window.prompt("Would you like to include special characters? (Y/N):");

  userSpecial = userSpecial.toUpperCase();

//Code to generate unique password based on user's selections.

  for (var i=1; i <= userLength; i++) {
    if (userLowercase === "Y") {
      index = Math.floor(Math.random() * lowercase.length);
      character = lowercase[index];
      password.push(character);
    } else if (userUppercase === "Y"){
      index = Math.floor(Math.random() * uppercase.length);
      character = uppercase[index];
      password.push(character);
    } else if (userNumeric === "Y"){
      index = Math.floor(Math.random() * numeric.length);
      character = numeric[index];
      password.push(character);
    } else if (userSpecial === "Y"){
      index = Math.floor(Math.random() * special.length);
      character = special[index];
      password.push(character);
    } else {
      console.log(password);
      }
    
  };

//Password displayed as alert.

console.log(password.join(''));
window.alert("Your password is: " + password.join(''));
  
  
});

 


 

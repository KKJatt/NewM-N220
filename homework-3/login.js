const Password = "d0nteatTheScript";
let startingSpace = false;
let eightCharacters = false;
let eat = false;

// I chose to Password to a const because the password will not change.
// The other three of the variables I made them to be let, the reason for this is because
// All three of these are prone to change


startingSpace = Password.startsWith(" ");
eightCharacters = Password.length >= 8;
eat = Password.includes("eat");


console.log("The password starts with a space: " + startingSpace);
console.log("The password contains 8 or more characters: " + eightCharacters);
console.log("The password contains the word 'eat': " + eat);

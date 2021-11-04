// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "


//my solution
function doubleChar(str) {
  var newString = "";
  for( i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}


//other solution
const doubleChar = (str) => str.split("").map(c => c + c).join("");


//other solution
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
Multiple.js
/* The code does not execute properly. Try to figure out why.
function multiply(a, b){
  a * b
}
*/

function multiply(a, b){
  return a * b
}
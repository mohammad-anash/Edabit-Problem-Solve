// 1 => A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(string) {
  return string
    .split("")
    .filter((letter) => letter === letter.toLowerCase())
    .join("");
}

// Examples
// console.log(detectWord("UcUNFYGaFYFYGtNUH")); //  "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); //  "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); //  "embezzlement"

// 2 => Create a function to return the amount of potatoes there are in a string
function potatoes(item) {
  const findItem = "potato";
  let counter = 0;
  let index = item.indexOf(findItem);

  while (index !== -1) {
    counter++;
    index = item.indexOf(findItem, index + 1);
  }

  return counter;
}

// console.log(potatoes("potato")); //  1
// console.log(potatoes("potatopotato")); //  2
// console.log(potatoes("potatoapple")); //  1

// 3 => Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(letter, string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      counter++;
    }
  }
  return counter;
}
//
// console.log(charCount("a", "edabit")); //  1
// console.log(charCount("c", "Chamber of secrets")); //  1
// console.log(charCount("b", "big fat bubble")); //  4

// with ternary Operator

function charCount(letter, string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    counter += letter === string[i] ? 1 : 0;
  }
  return counter;
}

// console.log(charCount("a", "edabit")); //  1
// console.log(charCount("c", "Chamber of secrets")); //  1
// console.log(charCount("b", "big fat bubble")); //  4

// 4 => When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

function fixImport(string) {
  const getImportString = string.indexOf("from");
  const getOtherChar = string.slice(0, getImportString);
  return `${string.slice(getImportString)} ${getOtherChar}`;
}

// console.log(fixImport("import object from module_name")); //  "from module_name import object"
// console.log(fixImport("import randint from random")); //  "from random import randint"
// console.log(fixImport("import pi from math")); //  "from math import pi"

// 5 => Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

function error(n) {
  const result =
    n === 1
      ? "Check the fan: e1"
      : n === 2
      ? "Emergency stop: e2"
      : n === 3
      ? "Pump Error: e3"
      : n === 4
      ? "c: e4"
      : n === 5
      ? "Temperature Sensor Error: e5"
      : 101;

  return result;
}

// console.log(error(1)); //  "Check the fan: e1"
// console.log(error(2)); //  "Emergency stop: e2"
// console.log(error(3)); //  "Pump Error: e3"
// console.log(error(4)); //  "Pump Error: e3"

// 6 => Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(string) {
  let repeatLetter = "";
  for (let i = 0; i < string.length; i++) {
    repeatLetter += string[i].repeat(2);
  }
  // return repeatLetter;
}

// Examples
// console.log(doubleChar("String")); //  "SSttrriinngg"
// console.log(doubleChar("Hello World!")); //  "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")); //  "11223344!!__  "

// solve with reduce

function doubleChar(string) {
  return string
    .split("")
    .reduce((repeatString, current) => repeatString + current.repeat(2), "");
}

// console.log(doubleChar("String")); //  "SSttrriinngg"
// console.log(doubleChar("Hello World!")); //  "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")); //  "11223344!!__  "

// 7 => Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples

const emotify = (string) => {
  let emotifyString = "";
  const breakString = string.split(" ");
  for (let i = 0; i < breakString.length; i++) {
    emotifyString +=
      breakString[i] === "smile"
        ? ":D"
        : breakString[i] === "grin"
        ? ":)"
        : breakString[i] === "sad"
        ? ":("
        : breakString[i];
    emotifyString += " ";
  }
  // return emotifyString.trim();
};
//
// console.log(emotify("Make me smile")); //  "Make me :D"
// console.log(emotify("Make me grin")); //  "Make me :)"
// console.log(emotify("Make me sad")); //  "Make me :("

// 8 =>  Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(string) {
  return string.split("").filter((char) => "aeiou".includes(char)).length;
}

// // Examples
// console.log(countVowels("Celebration")); //  5
// console.log(countVowels("Palm")); //  1
// console.log(countVowels("Prediction")); //  4

// 9 => Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

function repetition(letter, n) {
  return letter.repeat(n);
}

// console.log(repetition("ab", 3)) //  "ababab"
// console.log(repetition("kiwi", 1)) //  "kiwi"
// console.log(repetition("cherry", 2)) //  "cherrycherry"

// 10 => Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

// Examples
const bomb = (string) => {
  return string.indexOf("bomb") !== -1 ? "Duck" : "There is no bomb, relax.";
};
// console.log(bomb("There is a bomb.")); //  "Duck!!!"
// console.log(bomb("Hey, did you think there is a bomb?")); //  "Duck!!!"
// console.log(bomb("This goes boom!!!")); //  "There is no bomb, relax."

// 11 => Create a function that takes a string and returns a new string with all vowels removed

function removeVowels(string) {
  return string
    .split("")
    .filter((letter) => !"aeiou".includes(letter))
    .join("");
}

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")) //  " hv nvr sn  thn prsn
// console.log(removeVowels("We're gonna build a wall!")) //  "W'r gnn bld  wll!"
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!")) //  "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

// 12 => Create a function that returns the index of the first vowel in a string.

function firstVowel(string) {
  return string
    .toLowerCase()
    .split("")
    .findIndex((letter) => "aeiou".includes(letter));
}

// console.log(firstVowel("apple")) //  0
// console.log(firstVowel("hello")) //  1
// console.log(firstVowel("STRAWBERRY")) //  3
// console.log(firstVowel("pInEaPPLe")) //  1

// 13 => In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(string) {
  let result;
  for (let i = 0; i < string.length; i++) {
    if (isNaN(Number(string[i]))) {
      let firstNumber = Number(string.slice(0, i));
      let secondNumber = Number(string.slice(i + 1));

      switch (string[i]) {
        case "=":
          result = firstNumber === secondNumber;
          break;
        case ">":
          result = firstNumber > secondNumber;
          break;
        case "<":
          result = firstNumber < secondNumber;
          break;
        default:
          "there is no operator";
      }
    }
  }
  return result;
}

// // Examples
// console.log(isTrue("2=2")); //  true
// console.log(isTrue("8<7")); //  false
// console.log(isTrue("5=13")); //  false
// console.log(isTrue("15>4")); //  true

// 14 => Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// Examples

function sayHelloBye(string, n){
  return n === 1 ? `Hello ${string}` : `Bye ${string}`
}

// console.log(sayHelloBye("alon", 1)) //  "Hello Alon"
// console.log(sayHelloBye("Tomi", 0)) //  "Bye Tomi"
// console.log(sayHelloBye("jose", 0)) //  "Bye Jose
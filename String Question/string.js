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

console.log(charCount("a", "edabit")); //  1
console.log(charCount("c", "Chamber of secrets")); //  1
console.log(charCount("b", "big fat bubble")); //  4

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

// 1 => Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(x, y) {
  const relationships = {
    m: {
      0: "me!",
      1: "son",
      2: "grandson",
      3: "great grandson",
      4: "great great grandson",
      // Add more if needed
    },
    f: {
      0: "me!",
      1: "daughter",
      2: "granddaughter",
      3: "great granddaughter",
      4: "great great granddaughter",
      // Add more if needed
    },
  };

  const absX = Math.abs(x);
  const gender = y.toLowerCase();

  if (x === 0) {
    return relationships[gender][0];
  } else if (x > 0) {
    return relationships[gender][absX];
  } else {
    const ancestorLevel = absX - 1; // Adjust for 0-based indexing
    return `great ${ancestorLevel === 0 ? "" : "great "}grand${
      gender === "m" ? "father" : "mother"
    }`;
  }
}

// console.log(generation(2, "f")); //  "granddaughter"
// console.log(generation(-3, "m")); //  "great grandfather"
// console.log(generation(1, "f")); //  "daughter"

// 2 =>  Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples

function removeLeadingTrailing(string) {
  return Number(string);
}

// console.log(removeLeadingTrailing("230.000")); //  "230"
// console.log(removeLeadingTrailing("00402")); //  "402"
// console.log(removeLeadingTrailing("03.1400")); //  "3.14"
// console.log(removeLeadingTrailing("30")); //  "30"

// 3 => Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(countryName, landmass) {
  const proportion = (landmass / 148428950) * 100;
  return `${countryName} is ${proportion.toFixed(
    2
  )}% of the total world's landmass`;
}

// // Examples
// console.log(areaOfCountry("Russia", 17098242)); //  "Russia is 11.48% of the total world's landmass"
// console.log(areaOfCountry("USA", 9372610)), // "USA is 6.29% of the total world's landmass"
// console.log(areaOfCountry("Iran", 1648195)); //  "Iran is 1.11% of the total world's landmass"

// 4 => Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseWords(string) {
  return string.trim().split(" ").reverse().join(" ");
}

// // Example
// console.log(reverseWords(" the sky is blue")); //  "blue is sky the"
// console.log(reverseWords("hello   world!  ")); //  "world! hello"
// console.log(reverseWords("a good example")); //  "example good a"

// 5 => Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
function testJackpot(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].includes(arr[i]) && arr[i].length === arr[i + 1].length) {
      return true;
    }
  }
  return false;
}

// console.log(testJackpot(["@", "@", "@", "@"])); //  true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])); //  true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); //  true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); //  false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); //  false
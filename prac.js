// 1 => Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  return [minNumber, maxNumber];
}

// console.log(minMax([1, 2, 3, 4, 5])); //  [1, 5]
// console.log(minMax([2334454, 5])); //  [5, 2334454]
// console.log(minMax([1])); //  [1, 1]

// 2 => When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let totalResistance = 0;

  arr.forEach((element) => {
    totalResistance += element;
  });

  return `${totalResistance} ohms`;
}

// console.log(seriesResistance([1, 5, 6, 3])); //  "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])); //  "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])); //  "1.0 ohm"

// 3 => Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
  const firstValue = arr1.shift();
  const lastValue = arr1.pop();

  // return [firstValue, ...arr2, lastValue];
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15, 150], [45, 75, 35])); //  [15, 45, 75, 35, 150]
// console.log(
//   tuckIn(
//     [
//       [1, 2],
//       [5, 6],
//     ],
//     [[3, 4]]
//   )
// ); //  [[1, 2], [3, 4], [5, 6]]

// 4 => Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(n) {
  let splitNumber = [];

  for (let i = 1; i <= n; i++) {
    if (i + i === n) {
      splitNumber.push(i, i);
    } else if (i + (i + 1) === n) {
      splitNumber.push(i, i + 1);
    }
  }
  if (n <= 0) {
    for (let i = 1; i >= n; i--) {
      if (i + (i + 1) === n) {
        splitNumber.push(i, i + 1);
      }
    }
  }
  return splitNumber;
}

// console.log(numberSplit(4)); //  [2, 2]
// console.log(numberSplit(10)); //  [5, 5]
// console.log(numberSplit(11)); //  [5, 6]
// console.log(numberSplit(-9)); //  [-5, -4]

// 5 => Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
  return arr.filter((current) => typeof current === "number");
}

// console.log(filterArray([1, 2, "a", "b"])); //  [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])); //  [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //  [1, 2, 123]

// 6 => Create a function that returns an array of strings sorted by length in ascending order.

// function sortByLength(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i].length > arr[i + 1].length) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   // return arr;
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //  ["a", "bb", "ccc", "dddd"]
// console.log(sortByLength(["apple", "pie", "shortcake"])); //  ["pie", "apple", "shortcake"]
// console.log(sortByLength(["may", "april", "september", "august"])); //  ["may", "april", "august", "september"]
// console.log(sortByLength([])); //  []

// 7 => Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
  return arr.reduce((sum, current) => (sum += current ** 3), 0);
}

// console.log(sumOfCubes([1, 5, 9])); //  855// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5])); //  216
// console.log(sumOfCubes([2])); //  8
// console.log(sumOfCubes([])); //  0

// 8 =>  Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(arr) {
  return arr.filter((current, index) => current % 2 === 0 && index % 2 === 0);
}

// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //  [2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4])); //  [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5])); //  []

// 9 => Create a function that takes an array of strings and return an array, sorted from shortest to longest.

let sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

// Examples;
// console.log(sortByLength(["Google", "Apple", "Microsoft"])); //  ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); //  ["Raphael", "Leonardo","Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"])); //  ["Jung", "Turing", "Einstein"]

// 10 => The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, loses) {
  return (
    Object.values(obj).reduce((sum, current) => (sum += current), 0) - loses
  );
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5)); //  15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); //  11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); //  1

// 11 => Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
  return Number.isInteger(
    arr.reduce((sum, current) => sum + current, 0) / arr.length
  );
}

// console.log(isAvgWhole([1, 3])); //  true
// console.log(isAvgWhole([1, 2, 3, 4])); //  false
// console.log(isAvgWhole([1, 5, 6])); //  true
// console.log(isAvgWhole([1, 1, 1])); //  true
// console.log(isAvgWhole([9, 2, 2, 5])); //  false

// 12 => Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
  return arr.reduce((sum, current) => sum + Math.abs(current), 0);
}

// console.log(getAbsSum([2, -1, 4, 8, 10])) //  25
// console.log(getAbsSum([-3, -4, -10, -2, -3])) //  22
// console.log(getAbsSum([2, 4, 6, 8, 10])) //  30
// console.log(getAbsSum([-1])) //  1

// 13 => Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

function sortNumsAscending(arr) {
  if (arr === null || arr.length === 0) return [];
  else return arr.sort((a, b) => a - b);
}

// console.log(sortNumsAscending([1, 2, 10, 50, 5])); //  [1, 2, 5, 10, 50]
// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); //  [-95, -24, 4, 29, 80, 85]
// console.log(sortNumsAscending(null)); //  []
// console.log(sortNumsAscending([])); //  []

// 14 => Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
  let largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = -Infinity;
    arr[i].forEach((current) => {
      if (sum < current) {
        sum = current;
      }
    });
    largestArr.push(sum);
  }
  // return largestArr;
}

// console.log(
//   findLargestNums([
//     [4, 2, 7, 1],
//     [20, 70, 40, 90],
//     [1, 2, 0],
//   ])
// ); //  [7, 90, 2]
// console.log(
//   findLargestNums([
//     [-34, -54, -74],
//     [-32, -2, -65],
//     [-54, 7, -43],
//   ])
// ); //  [-34, -2, 7]
// console.log(
//   findLargestNums([
//     [0.4321, 0.7634, 0.652],
//     [1.324, 9.32, 2.5423, 6.4314],
//     [9, 3, 6, 3],
//   ])
// ); //  [0.7634, 9.32, 9]

// 15 => A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

function set(arr) {
  let removeDuplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      removeDuplicate.push(arr[i]);
    }
  }
  return removeDuplicate.sort((a, b) => a - b);
}

// console.log(set([1, 3, 3, 5, 5])); //  [1, 3, 5]
// console.log(set([4, 4, 4, 4])); //  [4]
// console.log(set([5, 7, 8, 9, 10, 15])); //  [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1])); //  [1, 2, 3]

// 16 => Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(arr) {
  return `"(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(7)
    .join("")}"`;
}

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //  "(519) 555-4468"
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //  "(345) 501-2527"

// 17 => In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

function amplify(n) {
  let storeNums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 4 === 0) {
      storeNums.push(i * 10);
    } else {
      storeNums.push(i);
    }
  }
  // return storeNums;
}

// console.log(amplify(4)); //  [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40
// console.log(amplify(3)); //  [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4
// console.log(amplify(25)); //  [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

// 18 => A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr) {
  return arr
    .sort((a, b) => a.length - b.length)
    .reduce((socName, current) => (socName += current.charAt(0)), "");
}

// console.log(societyName(["Adam", "Sarah", "Malcolm"])); //  "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //  "CHLN"
// console.log(
//   societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
// ); //  "CJMPRR"

// 19 => Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

function arrayOperation(x, y, n) {
  const result = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) {
      result.push(i);
    }
  }
  return result;
}

// console.log(arrayOperation(1, 10, 3)); //  [3, 6, 9]
// console.log(arrayOperation(7, 9, 2)); //  [8]
// console.log(arrayOperation(15, 20, 7)); //  []

// 1 => How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
const countTrue = (arr) => {
  return arr.filter((BooleanValue) => BooleanValue === true);
};

// console.log(countTrue([true, false, false, true, false])); //  2
// console.log(countTrue([false, false, false, false])); //  0
// console.log(countTrue([])); //  0

// 2 => Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

function toArray(obj) {
  let storeObj = [];
  for (const value in obj) {
    let keys = obj[value];
    storeObj.push([value, keys]);
  }
  return storeObj;
}

// console.log(toArray({ a: 1, b: 2 })); //  [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 })); //  [["shrimp", 15], ["tots", 12]]
// console.log(toArray({})); //  []

// 3 => Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples;

function concat() {
  return [...arguments].flat();
}

// console.log(concat([1, 2, 3], [4, 5], [6, 7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4])); //  [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4])); //  [4, 4, 4, 4, 4]

//  4 => Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples;
// console.log(changeEnough([2, 100, 0, 0], 14.11)); //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75)); //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55)); //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85)); //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99)); //  false

// 5 => Array of multiple

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples

function arrayOfMultiples(a, b) {
  let store = [];

  for (let i = 1; i <= b; i++) {
    store.push(i * b);
  }
  return store;
}

// console.log(arrayOfMultiples(7, 5)); //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); //  [17, 34, 51, 68, 85, 102]

// Other Approch

function arrayOfMultiples(a, b) {
  return Array.from({ length: b }).reduce((store, current, index) => {
    store.push((index + 1) * a);
    return store;
  }, []);
}

// console.log(arrayOfMultiples(7, 5));
